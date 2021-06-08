/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';

import { Grid, Card, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setSearchResult, callSearch } from '../../reducers/ThemeOptions';
import AddsComponents from 'components/add_component';

import logo from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchComponent from './search-component';
import api from '../../api';
import { toast } from 'react-toastify';

const distanceObj = [
  {
    value: '5 miles',
    label: '5 miles'
  },
  {
    value: '10 miles',
    label: '10 miles'
  },
  {
    value: '20 miles',
    label: '20 miles'
  },
  {
    value: '30 miles',
    label: '30 miles'
  },
  {
    value: '40 miles',
    label: '40 miles'
  },
  {
    value: '50 miles',
    label: '50 miles'
  }
];

const jobPosted = [
  {
    value: 'anytime',
    label: 'Anytime'
  },
  {
    value: 'last_3_days',
    label: 'Last 3 Days'
  },
  {
    value: 'last_week',
    label: 'Last Week'
  },
  {
    value: 'last_2-weeks',
    label: 'Last 2 Weeks'
  }
];

const dolorPrice = [
  {
    value: '10,000',
    label: '10,000'
  },
  {
    value: '20,000',
    label: '20,000'
  },
  {
    value: '30,000',
    label: '30,000'
  },
  {
    value: '40,000',
    label: '40,000'
  },
  {
    value: '50,000',
    label: '50,000'
  },
  {
    value: '60,000',
    label: '60,000'
  },
  {
    value: '70,000',
    label: '70,000'
  },
  {
    value: '80,000',
    label: '80,000'
  },
  {
    value: '90,000',
    label: '90,000'
  }
];

const SmartText = ({ text, length = 500 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {showLess ? `${text.slice(0, length)}...` : text}{' '}
        <a
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setShowLess(!showLess)}>
          &nbsp;See {showLess ? 'More' : 'Less'}
        </a>
      </p>
    </div>
  );
};

const JobSearchComponent = (props) => {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());

  const [filterApplied, setFilterApplied] = useState([]);
  const [state, setState] = useState(props.searchFilter);

  const {
    permanent,
    temporary,
    contract,
    fullTime,
    partTime,
    agencyPost,
    employerPost,
    relatedJob,
    startSalary,
    endSalary,
    distance
  } = state;

  useEffect(() => {
    props.setSearchResult([]);
  }, []);

  const getJobsFilters = (state) => {
    let filleter = [];
    for (const [key, value] of Object.entries(state)) {
      if (key !== 'page' && !!value) {
        switch (key) {
          case 'permanent':
            filleter.push({
              name: 'Permanent',
              key
            });
            break;
          case 'temporary':
            filleter.push({
              name: 'Temporary',
              key
            });
            break;
          case 'contract':
            filleter.push({
              name: 'Contract',
              key
            });
            break;
          case 'fullTime':
            filleter.push({
              name: 'Full time',
              key
            });
            break;
          case 'partTime':
            filleter.push({
              name: 'Part time',
              key
            });
            break;
          case 'agencyPost':
            filleter.push({
              name: 'Agency Post',
              key
            });
            break;
          case 'employerPost':
            filleter.push({
              name: 'Employer Post',
              key
            });
            break;
          case 'startSalary':
            filleter.push({
              name: value,
              key
            });
            break;
          case 'endSalary':
            filleter.push({
              name: value,
              key
            });
            break;

          case 'distance':
            filleter.push({
              name: value,
              key
            });
            break;

          default:
            break;
        }
      }
    }

    props.callSearch(true, state);
    setFilterApplied([...filleter]);
    setState({ ...state });
  };

  const removeFilter = (key, index) => {
    let getStatue = state[key];
    let value = getStatue === true ? false : getStatue === false ? false : '';

    state[key] = value;
    filterApplied.splice(index, 1);

    setFilterApplied([...filterApplied]);
    getJobsFilters(state);
  };

  const removeAllFilter = () => {
    let allFilter = state;
    for (const [key, value] of Object.entries(allFilter)) {
      let v = value === true ? false : value === false ? false : '';
      state[key] = v;
    }
    setFilterApplied([]);
    getJobsFilters(state);
  };

  const viewJob = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-job',
      state: {
        id
      }
    });
  };

  const saveJob = (e, job, index) => {
    e.preventDefault();
    console.log('doc', job);
    api
      .post(
        `/api/v1/jobs/${
          job.id
        }/save_job?status=${(job.favorite = !job.favorite)}`
      )
      .then(
        (response) => {
          if (response.data.success) {
            toast.success(response.data.message);
            props.searchResult[index] = response.data.job;
            // setRecombedJob([...recombedJob]);
          } else {
            toast.error('error in saving job..');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const viewMoreResult = () => {
    props.searchFilter.page += 1;
    getJobsFilters(props.searchFilter);
  };

  const handleChange = (event) => {
    state[event.target.name] = event.target.checked;
    getJobsFilters(state);
  };

  const handelSearch = (event) => {
    state[event.target.name] = event.target.value;
    getJobsFilters(state);
  };

  return (
    <>
      <SearchComponent />

      <Grid container spacing={0} className="mt-5">
        <Grid item xs={12} sm={3}>
          <div className="title pl-2">
            <h6 className="font-size-xxl">
              {props.searchResult.length !== 0 ? props.searchResult.length : ''}{' '}
              {props.searchResult.query
                ? props.searchResult.query
                : 'Jobs found'}
            </h6>
            <div className="d-flex">
              <b>Applied filters</b>
              <a
                href="#/"
                className="a-blue ml-1 font-weight-bold"
                onClick={(e) => {
                  e.preventDefault();
                  removeAllFilter();
                }}>
                clear all
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            size="small"
            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
            <span className="px-2">
              <FontAwesomeIcon icon={['fas', 'bell']} />
            </span>
            <span>Get job alert</span>
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className="m-2 mt-3 float-right">
            <div className="d-flex">
              <div style={{ position: 'relative', right: '-90px', top: '5px' }}>
                <b className="nowrap">Sort results by most</b>
              </div>
              <label
                className="checkbox toggle candy"
                onClick=""
                style={{ width: '165px' }}>
                <input id="view" type="checkbox" />
                <p>
                  <span>Relevant</span>
                  <span>Recent</span>
                </p>

                <a className="slide-button"></a>
              </label>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="mt-3">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <ul className="cards-filter">
              {filterApplied.map((filter, index) => (
                <li key={index} className="cards__item">
                  <div>
                    <span>{filter.name}</span>
                    <FontAwesomeIcon
                      className="ml-2 pt-1 a-blue"
                      icon={['fas', 'times']}
                      onClick={() => {
                        removeFilter(filter.key, index);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Filter your search</h4>
              <div className="px-3 py-2">
                <div>
                  <label className="font-weight-bold">Distance</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={distance}
                    onChange={handelSearch}
                    name="distance">
                    <option value="">Select Distance</option>
                    {distanceObj.map((dis) => (
                      <option value={dis.value}>{dis.label}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-3">
                  <b>Salary range</b>
                </div>
                <div>
                  <label className="font-weight-bold mt-2">From:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={startSalary}
                    onChange={handelSearch}
                    name="startSalary">
                    <option value="0">Start at</option>
                    {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))}
                  </select>
                  <label className="font-weight-bold mt-2">To:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={endSalary}
                    onChange={handelSearch}
                    name="endSalary">
                    <option value="0">End at</option>
                    {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Job type</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={permanent}
                              onChange={handleChange}
                              name="permanent"
                            />
                          }
                          label="Permanent"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={temporary}
                              onChange={handleChange}
                              name="temporary"
                            />
                          }
                          label="Temporary"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={contract}
                              onChange={handleChange}
                              name="contract"
                            />
                          }
                          label="Contract"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={fullTime}
                              onChange={handleChange}
                              name="fullTime"
                            />
                          }
                          label="Full-time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={partTime}
                              onChange={handleChange}
                              name="partTime"
                            />
                          }
                          label="Part-time"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Date posted</b>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    onChange={handelSearch}
                    value={'anytime'}
                    name="date-post">
                    {jobPosted.map((post) => (
                      <option value={post.value}>{post.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Specialisms</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={agencyPost}
                              onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={employerPost}
                              onChange={handleChange}
                              name="employer"
                            />
                          }
                          label="Employer"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Post by</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={agencyPost}
                              onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={employerPost}
                              onChange={handleChange}
                              name="employer"
                            />
                          }
                          label="Employer"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Related jobs</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={relatedJob}
                              onChange={handleChange}
                              name="relatedJob"
                            />
                          }
                          label="Related Jobs"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {props.searchResult.length ? (
              <>
                {props.searchResult.map((job, index) => (
                  <div className="card card-box gutter-b card-stretch bg-white btn rounded text-left py-2 mb-2">
                    <div key={index}>
                      <Grid container spacing={0}>
                        <Grid item xs={12} sm={9} className="px-3">
                          <div className="py-2">
                            <div className="card-header--title">
                              <h2
                                className="a-blue"
                                onClick={(e) => viewJob(e, job.id)}>
                                {job.job_title}
                              </h2>
                              <p>
                                Posted 1 week ago by{' '}
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="a-blue font-weight-bold">
                                  REED Easy Apply
                                </a>{' '}
                                Featured
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <Grid container spacing={0}>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'rupee-sign']}
                                />

                                <b>
                                  £{job.salary_low} - £{job.salary_high}
                                </b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'map-marker-alt']}
                                />

                                <b>{job.location}</b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'clock']}
                                />

                                <b>{job.job_type}</b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'user']}
                                />

                                <b>Be one of the first ten applicants</b>
                              </Grid>
                            </Grid>
                          </div>
                          <div className="mt-2">
                            <SmartText text={job.description} />
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={3} className="px-3 py-2">
                          <div className="d-flex border flex-column justify-content-between">
                            <div>
                              <img
                                style={{ height: '90px', width: '100%' }}
                                className=""
                                alt="..."
                                src={logo}
                              />
                            </div>
                            <div className="d-flex flex-column"></div>
                          </div>
                          <Button
                            fullWidth
                            size="small"
                            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2"
                            onClick={(e) => saveJob(e, job, index)}>
                            <span className="px-2">
                              <FontAwesomeIcon
                                icon={
                                  job.favorite
                                    ? ['fas', 'heart']
                                    : ['far', 'heart']
                                }
                              />
                            </span>
                            <span>
                              {job.favorite ? 'Shortlisted' : 'Shortlist'}
                            </span>
                          </Button>
                          <Button
                            fullWidth
                            size="small"
                            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                            <span className="px-2">
                              <FontAwesomeIcon icon={['fas', 'eye-slash']} />
                            </span>
                            <span>Hide</span>
                          </Button>
                          <Button
                            fullWidth
                            size="small"
                            className="btn-danger font-size-lg font-weight-bold hover-scale-sm mt-2">
                            <span>Apply now</span>
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="font-size-xxl m-5 text-center">No data found</div>
            )}

            {props.searchResult.length > 5 && (
              <div className="card-footer py-3 text-center">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text"
                  onClick={viewMoreResult}>
                  View more
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
};

const mapStateToProps = (state) => ({
  searchResult: state.ThemeOptions.searchResult,
  searchFilter: state.ThemeOptions.searchFilter
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: (search) => dispatch(setSearchResult(search)),
    callSearch: (status, searchFilter) =>
      dispatch(callSearch(status, searchFilter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchComponent);
