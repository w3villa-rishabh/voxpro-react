/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';

import LoaderComponent from 'components/loader';
import { convertDate } from 'helper';

import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import api from '../../api';
import { toast } from 'react-toastify';
import CountryCity from '../../assets/city-country';
import axios from 'axios';

const CandidateSearchComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [candidate, setCandidate] = useState([]);

  const [searchData, setSearchData] = useState(false);
  const [countyCity, setCountryCity] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);
  const [searchJobStatus, setSearchJobStatus] = useState(false);

  const [searchQuery, setSearchQuery] = useState({
    name: '',
    locationName: '',
    jobTitleName: '',
    location: [],
    jobTitles: [],
    availability: '0',
    availabilityDate: ''
  });

  useEffect(() => {
    getRecentAddCandidate();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getRecentAddCandidate = () => {
    setIsLoading(true);
    console.log('searchQuery', searchQuery, props.placesSearch);
    api.get('/api/v1/users/recently_added_candidate').then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setCandidate([...response.data.candidates]);
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

  const handlerSearch = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.name]: event.target.value });
  };

  const search = () => {
    return history.push({
      pathname: '/candidate-advance-search',
      state: { searchQuery }
    });
  };

  const handleDateChange = (date) => {
    if (date) {
      setIsOpen(false);
      setSearchQuery({
        ...searchQuery,
        availabilityDate: date
      });
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

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Candidates</b>
        </div>
      </div>

      <Card className="px-3 pt-3 overflow-visible">
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item md={3} xs={12}>
            <b>Name</b>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by name"
              className="w-100"
              name="name"
              onChange={handlerSearch}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Job Title</b>
            <div className="user-new-request">
              <TextField
                variant="outlined"
                size="small"
                name="jobTitleName"
                fullWidth
                autoComplete="off"
                placeholder="Search jobs"
                className="w-100"
                value={searchQuery.jobTitleName}
                onChange={handlerSearch}
                onKeyUp={(e) => {
                  if (e.key === 'Backspace' && e.target.value.length < 2) {
                    searchQuery[e.target.name] = '';
                    searchQuery.jobTitles = [];
                    setSearchQuery({ ...searchQuery });
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
                          searchQuery['jobTitleName'] =
                            user.normalized_job_title;
                          searchQuery.jobTitles.push({
                            name: user.normalized_job_title
                          });
                          setSearchQuery({ ...searchQuery });
                          setSearchJobs([]);
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
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Location</b>
            <div className="user-new-request">
              <TextField
                variant="outlined"
                size="small"
                name="locationName"
                fullWidth
                autoComplete="off"
                placeholder="Search location"
                className="w-100"
                value={searchQuery.locationName}
                onChange={handlerSearch}
                onKeyUp={(e) => {
                  if (e.key === 'Backspace' && e.target.value.length < 2) {
                    searchQuery[e.target.name] = '';
                    searchQuery.location = [];
                    // props.searchFilter[e.target.name] = '';
                    setSearchQuery({ ...searchQuery });
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
                        searchQuery['locationName'] = user;
                        searchQuery.location.push({ name: user });
                        setSearchQuery({ ...searchQuery });
                        setCountryCity([]);
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
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Availability</b>
            <div className="position-relative">
              {isOpen && (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disablePast
                    disableToolbar
                    variant="outlined"
                    format="dd/MM/yyyy"
                    // margin="normal"
                    id="date-picker-outlined"
                    value={new Date()}
                    onChange={handleDateChange}
                    autoOk={true}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                    open={isOpen}
                  />
                </MuiPickersUtilsProvider>
              )}
              <select
                className="MuiTextField-root MuiFormControl-fullWidth select-doc date-pic"
                variant="outlined"
                fullWidth
                name="availability"
                onChange={(event) => {
                  if (event.target.value === '3') {
                    setIsOpen(true);
                  }
                  setSearchQuery({
                    ...searchQuery,
                    [event.target.name]: event.target.value,
                    availabilityDate: ''
                  });

                  console.log('documents.expiration', event.target.value);
                }}
                value={searchQuery.availability}>
                <option value="0">Select Availability</option>
                <option value="1">Immediately</option>
                <option value="2">Unavailable</option>
                <option value="3">
                  {searchQuery.availabilityDate
                    ? moment(searchQuery.availabilityDate).format('DD-MM-YYYY')
                    : 'Available from'}
                </option>
              </select>
            </div>
          </Grid>
          <Grid item md={2} xs={12}>
            <Button
              size="small"
              className="btn-dribbble hover-scale-sm mt-4"
              onClick={search}>
              <span className="px-2">Search</span>
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2} className="mt-4">
        <Grid item xs={12} sm={12}>
          <Card className="">
            <div className="card-header">
              <div className="card-header--title font-size-lg">
                <b>Candidates recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th>Name</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Job Title</th>
                      <th className="text-center">Availability</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {candidate.map((can, index) => (
                          <tr key={index}>
                            <td className="font-weight-bold">
                              {convertDate(can.created_at)}
                            </td>
                            <td>
                              {can.first_name} {can.last_name}
                            </td>
                            <td className="text-center text-black-50">
                              {can.job_title || '--'}
                            </td>
                            <td className="text-center">
                              {can.location || '--'}
                            </td>
                            <td className="text-center">
                              {can.availability === 'available_from'
                                ? can.available_date
                                : can.availability}
                            </td>
                            <td className="text-center">
                              <a
                                className="a-blue"
                                href="!#"
                                onClick={(e) => e.preventDefault()}>
                                View Profile
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!candidate.length && !isLoading && (
                  <div className="font-size-xxl m-5 text-center">
                    No data found
                  </div>
                )}
              </PerfectScrollbar>
            </div>
            {/* <div className="card-footer py-3 text-center">
              <Button
                size="small"
                className="btn-outline-second"
                variant="text">
                View more
              </Button>
            </div> */}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  placesSearch: state.ThemeOptions.placesSearch
});

export default connect(mapStateToProps)(CandidateSearchComponent);
