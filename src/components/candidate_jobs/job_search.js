/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect, useMemo } from 'react';

import {
  Grid,
  Card,
  InputAdornment,
  TextField,
  Button
} from '@material-ui/core';
import Select from 'react-select';
import AddsComponents from 'components/add_component';
import { ClipLoader } from 'react-spinners';

import WorkIcon from '@material-ui/icons/Work';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import logo from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countryList from 'react-select-country-list';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';

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

export default function JobSearchComponent() {
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const [currentUser] = useState(getCurrentUser());
  const options = useMemo(() => countryList().getData(), []);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    query: '',
    location: '',
    jobType: '',
    datePost: ''
  });

  const [searchJobs, setSearchJobs] = useState([]);
  const [filterApplied, setFilterApplied] = useState([]);

  useEffect(() => {
    getJobs();

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getJobs = () => {
    setSearchJobs([1, 2, 3, 4, 5]);
    setFilterApplied([
      { name: 'angular 1' },
      { name: 'react 1' },
      { name: 'node 1' },
      { name: 'electron 1' },
      { name: 'react 1' },
      { name: 'node 1' },
      { name: 'electron 1' }
    ]);
  };

  const search = () => {
    setSearchLoader(true);
    console.log('searchQuery', searchQuery);
    setTimeout(() => {
      setSearchLoader(false);
    }, 3000);
  };

  const viewJob = (e) => {
    e.preventDefault();
    history.push('/view-job');
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
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label="What"
              placeholder="e.g. 'nurse'"
              className="w-100"
              name="query"
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
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label="Where"
              placeholder="e.g. 'nurse'"
              className="w-100"
              name="query"
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
            />
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

      <Grid container spacing={0} className="mt-5">
        <Grid item xs={12} sm={3}>
          <div className="title pl-2">
            <h6 className="font-size-xxl">11,965 Developer Jobs</h6>
            <div className="d-flex">
              <b>Applied filters</b>
              <a
                href="#/"
                className="a-blue ml-2 font-weight-bold"
                onClick={(e) => {
                  e.preventDefault();
                  setFilterApplied([]);
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
              <FontAwesomeIcon icon={['fas', 'heart']} />
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
                        filterApplied.splice(index, 1);
                        setFilterApplied([...filterApplied]);
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
                  <Select
                    name="country"
                    options={options}
                    onChange={distanceObj}
                    e
                    required="true"
                  />
                </div>
                <div className="mt-3">
                  <b>Salary range</b>
                </div>
                <div>
                  <label className="font-weight-bold mt-2">From:</label>
                  <Select
                    name="country"
                    options={options}
                    onChange={distanceObj}
                    e
                    required="true"
                  />
                  <label className="font-weight-bold mt-2">To:</label>
                  <Select
                    name="country"
                    options={options}
                    onChange={distanceObj}
                    e
                    required="true"
                  />
                </div>
              </div>

              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Job type</b>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Date post</b>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Related jobs</b>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {searchJobs.map((job, index) => (
              <div className="card card-box gutter-b card-stretch bg-white btn rounded text-left py-2 mb-2">
                <div key={index}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={9} className="px-3">
                      <div className="py-2">
                        <div className="card-header--title">
                          <h2 className="a-blue" onClick={viewJob}>
                            Developer
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

                            <b>£35,000 - £40,000 per annum</b>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FontAwesomeIcon
                              className="mr-2"
                              icon={['fas', 'map-marker-alt']}
                            />

                            <b>Cardiff, South Glamorgan</b>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FontAwesomeIcon
                              className="mr-2"
                              icon={['fas', 'clock']}
                            />

                            <b>Permanent, full-time</b>
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
                        <SmartText
                          text={`A renowned International Retailer is currently looking for
                      a Software Developer. Reporting to the Lead Developer, the
                      ideal candidate will be responsible for software
                      development to help bridge the gap between the business
                      applications and technical implementation. A renowned International Retailer is currently looking for a Software Developer. Reporting to the Lead Developer, the ideal candidate will be responsible for software development to help bridge the gap between the business applications and technical implementation.`}
                        />
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
                        className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                        <span className="px-2">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </span>
                        <span>Shortlisted</span>
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
          </Grid>
        </Grid>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
