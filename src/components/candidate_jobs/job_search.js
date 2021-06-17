/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';

import { Grid, Card, Button } from '@material-ui/core';

import { connect } from 'react-redux';
import { setSearchResult, callSearch } from '../../reducers/ThemeOptions';
import AddsComponents from 'components/add_component';
import { confirmAlert } from 'react-confirm-alert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser, SmartText } from 'helper';
import { useHistory } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchComponent from './search-component';
import api from '../../api';
import { toast } from 'react-toastify';

import Pagination from '@material-ui/lab/Pagination';
import 'react-phone-number-input/style.css';

import ApplyNewJob from './apply-new-job';
import { distanceObj, jobPosted, dolorPrice } from '../../constants'; //import from your constants.js

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
    startSalary,
    endSalary,
    distance,
    relevant,
    careAssistant,
    nursing,
    registerNurse,
    NHS,
    staffNurse,
    datePost
  } = state;

  useEffect(() => {
    props.setSearchResult([]);
    props.callSearch(true, props.searchFilter);
  }, []);

  const getJobsFilters = (state, page) => {
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
      } else if (key === 'page') {
        state[key] = page;
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
    getJobsFilters(state, 1);
  };

  const removeAllFilter = () => {
    let allFilter = state;
    for (const [key, value] of Object.entries(allFilter)) {
      if (key !== 'page') {
        let v = value === true ? false : value === false ? false : '';
        state[key] = v;
      } else if (key === 'page') {
        state[key] = 1;
      }
    }
    setFilterApplied([]);
    getJobsFilters(state, 1);
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
            props.setSearchResult([...props.searchResult]);
          } else {
            toast.error('error in saving job..');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const hideJob = (e, job, index) => {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm to Hide',
      message: 'Are you sure to hide this job.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            api.post(`/api/v1/jobs/${job.id}/hide_job?hide=${true}`).then(
              (response) => {
                if (response.data.success) {
                  toast.success(response.data.message);
                  props.searchResult.splice(index, 1);
                  props.setSearchResult([...props.searchResult]);
                } else {
                  toast.error('error in saving job..');
                }
              },
              (error) => {
                console.error(error);
              }
            );
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const viewMoreResult = (event, newPage) => {
    props.searchFilter.page = newPage;
    getJobsFilters(props.searchFilter, newPage);
  };

  const handleChange = (event) => {
    state[event.target.name] = event.target.checked;
    getJobsFilters(state, 1);
  };

  const handelSearch = (event) => {
    state[event.target.name] = event.target.value;
    getJobsFilters(state, 1);
  };

  const recentApply = (event) => {
    state['relevant'] = event.target.checked;
    getJobsFilters(state, 1);
  };

  const jobApplyCallback = (id) => {
    // the callback. Use a better name
    let index = props.searchResult.findIndex((a) => a.id === id);
    props.searchResult[index].applied = true;
    props.setSearchResult([...props.searchResult]);
  };

  return (
    <>
      <SearchComponent />

      <Grid container spacing={0} className="mt-5">
        <Grid item xs={12} sm={3}>
          <div className="title pl-2">
            <h6 className="font-size-xxl text-capitalize">
              {props.searchPages ? props.searchPages.total : 0}{' '}
              {props.searchFilter.query
                ? props.searchFilter.query
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
                style={{ width: '165px' }}>
                <input
                  id="view"
                  type="checkbox"
                  checked={relevant}
                  onChange={(e) => e.target.checked}
                  onClick={recentApply}
                />
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
                    value={distance}
                    onChange={handelSearch}
                    name="distance">
                    <option value="">Select Distance</option>
                    {distanceObj.map((dis, index) => (
                      <option key={index} value={dis.value}>
                        {dis.label}
                      </option>
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
                    value={startSalary}
                    onChange={handelSearch}
                    name="startSalary">
                    <option value="0">Start at</option>
                    {dolorPrice.map((price, index) => (
                      <option key={index} value={price.value}>
                        {price.label}
                      </option>
                    ))}
                  </select>
                  <label className="font-weight-bold mt-2">To:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    value={endSalary}
                    onChange={handelSearch}
                    name="endSalary">
                    <option value="0">End at</option>
                    {dolorPrice.map((price, index) => (
                      <option key={index} value={price.value}>
                        {price.label}
                      </option>
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
                    onChange={handelSearch}
                    value={datePost}
                    name="datePost">
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
                              checked={nursing}
                              onChange={handleChange}
                              name="nursing"
                            />
                          }
                          label="Nursing"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={registerNurse}
                              onChange={handleChange}
                              name="registerNurse"
                            />
                          }
                          label="Register Nurse"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={NHS}
                              onChange={handleChange}
                              name="NHS"
                            />
                          }
                          label="NHS"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={staffNurse}
                              onChange={handleChange}
                              name="staffNurse"
                            />
                          }
                          label="Staff Nurse"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={careAssistant}
                              onChange={handleChange}
                              name="careAssistant"
                            />
                          }
                          label="Care Assistant"
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
                              <p>Posted On: {job.created_date}</p>
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
                                src={job.company_logo}
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
                            onClick={(e) => hideJob(e, job, index)}
                            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                            <span className="px-2">
                              <FontAwesomeIcon icon={['fas', 'eye-slash']} />
                            </span>
                            <span>Hide</span>
                          </Button>
                          <ApplyNewJob
                            job={job}
                            jobApplyCallback={jobApplyCallback}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="font-size-xxl m-5 text-center">No data found</div>
            )}

            {props.searchResult.length >= 1 && (
              <div className="p-3 d-flex justify-content-center">
                <Pagination
                  className="pagination-primary"
                  onChange={viewMoreResult}
                  page={props.searchFilter.page}
                  count={props.searchPages ? props.searchPages.total_pages : 0}
                />
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
  searchFilter: state.ThemeOptions.searchFilter,
  searchPages: state.ThemeOptions.searchPages
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: (search) => dispatch(setSearchResult(search)),
    callSearch: (status, searchFilter) =>
      dispatch(callSearch(status, searchFilter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchComponent);
