/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

import {
  Grid,
  Card,
  InputAdornment,
  TextField,
  Button
} from '@material-ui/core';

import WorkIcon from '@material-ui/icons/Work';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSearchResult } from '../../reducers/ThemeOptions';

import { useHistory } from 'react-router';
import CountryCity from '../../assets/city-country';
import api from '../../api';

const JobSearchComponent = (props) => {
  const history = useHistory();
  const [searchData, setSearchData] = useState(false);
  const [searchJobStatus, setSearchJobStatus] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);

  const [countyCity, setCountryCity] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    query: '',
    location: '',
    jobType: '',
    datePost: ''
  });

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

  const search = () => {
    setSearchLoader(true);
    console.log('CountryCity', countyCity);
    console.log('searchQuery', searchQuery);
    history.push('/jobs');
    api
      .post(
        `/api/v1/searches/job_search?q=${searchQuery.query}&location=${searchQuery.location}`
      )
      .then(
        (response) => {
          setSearchLoader(false);
          if (response.data.success) {
            console.log('response.data', response.data.jobs);
            props.setSearchResult(response.data.jobs);

            // setSearchJobs([...response.data]);
          } else if (!searchJobs.length) {
            // toast.error('No available..');
            // setSearchJobStatus(true);
          }
        },
        (error) => {
          console.error('error', error);
        }
      );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <div className="page-title" style={{ height: 'unset' }}>
            <WorkIcon />
            <div className="title">
              <h5 className="heading pt-3">Job Search</h5>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Button className="btn-neutral-info hover-scale-sm px-4 mt-2 float-right">
            <FontAwesomeIcon icon={['fas', 'heart']} className="svg-none" />
            <span className="px-2">Shortlisted Jobs</span>
          </Button>
        </Grid>
      </Grid>

      <Card className="card-box p-3 mt-3">
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
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
                value={searchQuery.query}
                onChange={(event) => {
                  setSearchQuery({
                    ...searchQuery,
                    [event.target.name]: event.target.value
                  });
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
                    setSearchQuery({
                      ...searchQuery,
                      [e.target.name]: ''
                    });
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
                          setSearchQuery({
                            ...searchQuery,
                            query: user.normalized_job_title
                          });
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
          <Grid item sm={4} xs={12}>
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
                value={searchQuery.location}
                onChange={(event) => {
                  setSearchQuery({
                    ...searchQuery,
                    [event.target.name]: event.target.value
                  });
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
                    setSearchQuery({
                      ...searchQuery,
                      [e.target.name]: ''
                    });
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
                      className="list-group-item list-group-item-success">
                      <span
                        onClick={() => {
                          setSearchQuery({
                            ...searchQuery,
                            location: user
                          });
                          setCountryCity([]);
                        }}>
                        {user}
                      </span>
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
          <Grid item sm={2} xs={12}>
            <Button
              size="small"
              disabled={searchLoader}
              className="btn-dribbble hover-scale-sm"
              onClick={search}>
              <span className="px-2">Search</span>
              <ClipLoader
                color={'var(--info)'}
                loading={searchLoader}
                size={20}
              />
            </Button>
          </Grid>
          <Grid item sm={2} xs={12}>
            <div className="border-left mt-2 pl-4">
              <a
                href="#/"
                className="btn-transparent btn-link btn-link-primary"
                onClick={(e) => e.preventDefault()}>
                <span>Browse Jobs </span>
                <FontAwesomeIcon
                  icon={['fas', 'arrow-right']}
                  className="svg-none pt-1"
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: (search) => dispatch(setSearchResult(search))
  };
};

export default connect(null, mapDispatchToProps)(JobSearchComponent);
