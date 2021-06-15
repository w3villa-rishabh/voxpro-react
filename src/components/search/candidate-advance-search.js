/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import {
  Card,
  Grid,
  Button,
  TextField,
  CardContent,
  Dialog,
  DialogTitle,
  InputAdornment,
  LinearProgress
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import api from '../../api';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import CountryCity from '../../assets/city-country';
import axios from 'axios';
import LoaderComponent from 'components/loader';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import { useLocation } from 'react-router';
import AvailabilityComp from '../availability/availability';

const CandidateAdvanceSearchComponent = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [candidate, setCandidate] = useState([]);
  const [filterApplied, setFilterApplied] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    location.state
      ? location.state.searchQuery
      : {
          name: '',
          skills: [],
          location: [],
          jobTitles: [],
          educations: [],
          availability: '0',
          availabilityDate: '',
          page: 1
        }
  );
  const [searchPageCount, setSearchPageCount] = useState({
    total_pages: 0,
    page: 0,
    total: 0
  });

  const [countyCity, setCountryCity] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [searchEducations, setSearchEducations] = useState([]);

  const [searchData, setSearchData] = useState(false);
  const [openLocation, setOpenLocation] = useState({ open: false, do: [] });
  const [openSkills, setOpenSkills] = useState({ open: false, do: [] });
  const [openEducations, setOpenEducations] = useState({ open: false, do: [] });
  const [openJobs, setOpenJobs] = useState({ open: false, do: [] });
  const [searchJobStatus, setSearchJobStatus] = useState(false);
  const [searchSkillStatus, setSearchSkillStatus] = useState(false);
  const [searchEducationStatus, setSearchEducationStatus] = useState(false);

  useEffect(() => {
    findSearch(searchQuery);
    setFilterApplied([
      { name: 'Node js' },
      { name: 'Full stack' },
      { name: 'Angular 4+' },
      { name: 'React js' }
    ]);
  }, []);

  const findSearch = (searchQuery) => {
    setIsLoading(true);
    searchCandidate(searchQuery);
  };

  const searchCandidate = (search) => {
    api.post('/api/v1/searches/search_candidate', { query: search }).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setSearchPageCount({ ...response.data.page_info });
          setCandidate([...response.data.candidate]);
        } else {
          setCandidate([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        setIsLoading(false);
        console.error(error);
      }
    );
  };

  const viewMoreResult = (event, newPage) => {
    searchQuery.page = newPage;
    setSearchQuery({ ...searchQuery });
    searchCandidate(searchQuery);
  };

  const countryFilter = (value) => {
    if (value.length < 2) {
      return;
    }
    setSearchData(false);
    var search = new RegExp(value, 'i'); // prepare a regex object
    let searchLog = CountryCity.filter((item) => search.test(item));
    setCountryCity([...searchLog]);
    if (!searchLog.length) {
      setSearchData(true);
    }
  };

  const findJobs = (search) => {
    setSearchJobStatus(false);
    if (search.length < 2) {
      return;
    }
    axios
      .get(
        `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${search}`
      )
      .then(
        (response) => {
          if (response.statusText === 'OK') {
            console.log('response.data', response.data);
            setSearchJobs([...response.data]);
          } else if (!searchJobs.length) {
            // toast.error('No available..');
            setSearchJobStatus(true);
          }
        },
        (error) => {
          console.error('error', error);
        }
      );
  };

  const findSkills = (search) => {
    setSearchEducationStatus(false);
    if (search.length < 2) {
      return;
    }
    axios
      .get(
        `http://api.dataatwork.org/v1/skills/autocomplete?begins_with=${search}`
      )
      .then(
        (response) => {
          if (response.statusText === 'OK') {
            console.log('response.data', response.data);
            setSearchSkills([...response.data]);
          } else if (!searchSkills.length) {
            // toast.error('No available..');
            setSearchEducationStatus(true);
          }
        },
        (error) => {
          console.error('error', error);
        }
      );
  };

  // http://universities.hipolabs.com/search?name=oxford

  const findUniversity = (search) => {
    setSearchEducationStatus(false);
    if (search.length < 2) {
      return;
    }
    axios.get(`http://universities.hipolabs.com/search?name=${search}`).then(
      (response) => {
        if (response.statusText === 'OK') {
          console.log('response.data', response.data);
          setSearchEducations([...response.data]);
        } else if (!searchEducations.length) {
          // toast.error('No available..');
          setSearchEducationStatus(true);
        }
      },
      (error) => {
        console.error('error', error);
      }
    );
  };

  const handleModalClose = () => {
    setOpenLocation({ open: false, do: [] });
    setOpenJobs({ open: false, do: [] });
    setOpenSkills({ open: false, do: [] });
    setOpenEducations({ open: false, do: [] });
    setCountryCity([]);
    setSearchJobs([]);
  };

  const handleProceed = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-profile/',
      state: {
        id
      }
    });
  };

  const availabilityCallback = (event, status, date) => {
    // the callback. Use a better name
    if (status === 'remove') {
      searchQuery.availability = event.target.value;
      searchQuery.availabilityDate = '';
    } else {
      searchQuery.availabilityDate = date;
    }
    setSearchQuery({ ...searchQuery });
    searchCandidate(searchQuery);
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Candidates</b>
        </div>
      </div>

      <div className="mb-spacing-6">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card className="p-3">
              <b>Knowledge/Educate</b>
              <ul>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={55}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      3,228
                    </div>
                  </div>
                  <div className="text-black-50">Job title</div>
                </li>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={40}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      2,715
                    </div>
                  </div>
                  <div className="text-black-50">Skills</div>
                </li>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={22}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      2,040
                    </div>
                  </div>
                  <div className="text-black-50">Eductions</div>
                </li>
              </ul>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="p-3">
              <b>Locality</b>
              <ul>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={80}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      6,368
                    </div>
                  </div>
                  <div className="text-black-50">Locations</div>
                </li>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={50}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      5,660
                    </div>
                  </div>
                  <div className="text-black-50">Companies</div>
                </li>
                <li>
                  <div className="align-box-row">
                    <div className="flex-grow-1">
                      <LinearProgress
                        variant="determinate"
                        className="progress-animated-alt progress-bar-rounded progress-sm progress-bar-first"
                        value={10}
                      />
                    </div>
                    <div className="text-first font-size-xl font-weight-bold pl-2">
                      3,371
                    </div>
                  </div>
                  <div className="text-black-50">Keyword</div>
                </li>
              </ul>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div className="mt-3">
        <h6 className="font-size-xxl text-capitalize">
          {searchPageCount ? searchPageCount.total : 0} {'Candidates found'}
        </h6>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Showing results for</h4>
              <div className="px-3 py-2">
                <b>Job title</b>
                <ul className="cards-filter">
                  {searchQuery.jobTitles.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.jobTitles.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            searchCandidate(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.jobTitles.length && (
                        <span className="mr-2">Add Job title</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenJobs({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Locations</b>
                <ul className="cards-filter">
                  {searchQuery.location.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.location.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            searchCandidate(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.location.length && (
                        <span className="mr-2">Add Locations</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenLocation({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Skills</b>
                <ul className="cards-filter">
                  {searchQuery.skills.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.skills.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            searchCandidate(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.skills.length && (
                        <span className="mr-2">Add Skills</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenSkills({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Companies</b>
                <ul className="cards-filter">
                  {/* {filterApplied.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                      </div>
                    </li>
                  ))} */}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <span className="mr-2">Add Companies</span>
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Eductions</b>
                <ul className="cards-filter">
                  {searchQuery.educations.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.educations.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            searchCandidate(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.educations.length && (
                        <span className="mr-2">Add Eductions</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenEducations({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Keyword</b>
                <ul className="cards-filter">
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <span className="mr-2">Add Keyword</span>
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>{' '}
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2 h-100px">
                <b>Availability</b>
                <div>
                  <AvailabilityComp
                    searchQuery={searchQuery}
                    availabilityCallback={availabilityCallback}
                  />
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <>
                {candidate.length ? (
                  <>
                    {candidate.map((can, index) => (
                      <div
                        key={index}
                        className="card card-box gutter-b card-stretch bg-white btn rounded text-left mb-2">
                        <Card className="card-box">
                          <CardContent>
                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <div className="avatar-icon-wrapper avatar-icon-lg">
                                  <div className="avatar-icon rounded d-110">
                                    <img alt="..." src={avatar7} />
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <a
                                    href="#"
                                    onClick={(e) => handleProceed(e, can.id)}
                                    className="a-blue font-weight-bold ml-1 font-size-xxl"
                                    title="...">
                                    {can.first_name} {can.last_name}
                                  </a>
                                  <Button className="btn-gray border px-2 py-0 ml-3 font-size-md text-primary">
                                    2nd
                                  </Button>
                                  <div className="float-right">
                                    <span className="text-black-50 font-size-xl">
                                      Above{' '}
                                      <span className="a-blue font-weight-bold font-size-xxl">
                                        20%
                                      </span>
                                    </span>
                                  </div>
                                </div>

                                <ul className="cards-filter">
                                  {filterApplied.map((filter, index) => (
                                    <li
                                      key={index}
                                      className="cards__item bg-primary text-white">
                                      <div>
                                        <span>{filter.name}</span>
                                      </div>
                                    </li>
                                  ))}
                                  <li className="cards__item bg-brand-discord text-white">
                                    <div>
                                      <span>10+ years</span>
                                    </div>
                                  </li>
                                </ul>

                                <div className="">
                                  <span className="d-block">
                                    {can.job_title}
                                  </span>
                                  <span className="text-black-50 d-block">
                                    {can.city}, {can.country}
                                  </span>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-success d-block">
                                    <FontAwesomeIcon
                                      icon={['fas', 'caret-right']}
                                    />{' '}
                                    2 Shared connections &bull; Similar
                                  </a>
                                </div>
                              </Grid>

                              <Grid item xs={12} sm={2}>
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex align-items-center">
                                    <Button
                                      fullWidth
                                      size="small"
                                      className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                                      <span>Connect</span>
                                    </Button>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Availability :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">
                                    {can.availability === 'available_from'
                                      ? can.available_date
                                      : can.availability}
                                  </p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>

                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Description :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">{can.description}</p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>

                            {/* <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Post :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">
                                    Primary website/webapp Engineer (employee)
                                    At Anglepoise Primary
                                  </p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid> */}

                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Job Title :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">{can.job_title}</p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>
                          </CardContent>
                          <div className="divider" />

                          {/* <div className="card-footer bg-white text-center p-3">
                    <Button className="btn-primary btn-icon d-40 p-0 hover-scale-lg rounded-circle mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'question-circle']}
                        className="font-size-lg"
                      />
                    </Button>
                    <Button className="btn-primary btn-icon d-40 p-0 hover-scale-lg rounded-circle">
                      <FontAwesomeIcon
                        icon={['far', 'user-circle']}
                        className="font-size-lg"
                      />
                    </Button>
                  </div> */}
                        </Card>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="font-size-xxl m-5 text-center">
                    No data found
                  </div>
                )}
              </>
            )}

            {candidate.length >= 1 && (
              <div className="p-3 d-flex justify-content-center">
                <Pagination
                  className="pagination-primary"
                  onChange={viewMoreResult}
                  page={searchPageCount.page}
                  count={searchPageCount.total_pages}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      {/* Location search modal */}
      <Dialog
        fullWidth
        open={openLocation.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>Location</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="location"
              fullWidth
              autoComplete="off"
              label="Where"
              placeholder="e.g. 'london'"
              className="w-100"
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setCountryCity([]);
                  setSearchData(false);
                }
              }}
              onKeyPress={(e) => countryFilter(e.target.value)}
            />

            {countyCity.length ? (
              <ul className="list-group mt-2">
                {countyCity.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success"
                    onClick={() => {
                      searchQuery.location.push({ name: user });
                      setSearchQuery({ ...searchQuery });
                      handleModalClose();
                      searchCandidate(searchQuery);
                    }}>
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            ) : searchData === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>

      {/* job title search modal */}
      <Dialog
        fullWidth
        open={openJobs.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>Jobs Titles</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="query"
              fullWidth
              autoComplete="off"
              label="What"
              placeholder="e.g. 'angular'"
              className="w-100"
              // value={searchQuery.query}
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setSearchJobs([]);
                  setSearchJobStatus(false);
                }
              }}
              onKeyPress={(e) => findJobs(e.target.value)}
            />

            {searchJobs.length ? (
              <ul className="list-group mt-2">
                {searchJobs.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success">
                    <span
                      onClick={() => {
                        searchQuery.jobTitles.push({
                          name: user.normalized_job_title
                        });
                        setSearchQuery({ ...searchQuery });
                        handleModalClose();
                        searchCandidate(searchQuery);
                      }}>
                      {user.normalized_job_title}
                    </span>
                  </li>
                ))}
              </ul>
            ) : searchJobStatus === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>

      {/* skills search modal */}
      <Dialog
        fullWidth
        open={openSkills.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>Skills</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="query"
              fullWidth
              autoComplete="off"
              label="Skills"
              placeholder="e.g. 'node'"
              className="w-100"
              // value={searchQuery.query}
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setSearchSkills([]);
                  setSearchSkillStatus(false);
                }
              }}
              onKeyPress={(e) => findSkills(e.target.value)}
            />

            {searchSkills.length ? (
              <ul className="list-group mt-2">
                {searchSkills.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success">
                    <span
                      onClick={() => {
                        searchQuery.skills.push({
                          name: user.normalized_skill_name
                        });
                        setSearchQuery({ ...searchQuery });
                        handleModalClose();
                        searchCandidate(searchQuery);
                      }}>
                      {user.normalized_skill_name}
                    </span>
                  </li>
                ))}
              </ul>
            ) : searchSkillStatus === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>

      {/* unversity search modal */}
      <Dialog
        fullWidth
        open={openEducations.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>University</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="query"
              fullWidth
              autoComplete="off"
              label="Education"
              placeholder="e.g. 'oxford'"
              className="w-100"
              // value={searchQuery.query}
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setSearchEducations([]);
                  setSearchEducationStatus(false);
                }
              }}
              onKeyPress={(e) => findUniversity(e.target.value)}
            />

            {searchEducations.length ? (
              <ul className="list-group mt-2">
                {searchEducations.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success">
                    <span
                      onClick={() => {
                        searchQuery.educations.push({
                          name: user.name
                        });
                        setSearchQuery({ ...searchQuery });
                        handleModalClose();
                        searchCandidate(searchQuery);
                      }}>
                      {user.name}
                    </span>
                  </li>
                ))}
              </ul>
            ) : searchEducationStatus === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => ({
  placesSearch: state.ThemeOptions.placesSearch,
  searchResult: state.ThemeOptions.searchResult,
  searchFilter: state.ThemeOptions.searchFilter,
  searchPages: state.ThemeOptions.searchPages
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchResult: (search) => dispatch(setSearchResult(search)),
//     callSearch: (status, searchFilter) =>
//       dispatch(callSearch(status, searchFilter))
//   };
// };

export default connect(mapStateToProps)(CandidateAdvanceSearchComponent);
