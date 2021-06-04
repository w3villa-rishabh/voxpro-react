/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect, useMemo } from 'react';

import { Grid, Card, Button } from '@material-ui/core';
import Select from 'react-select';
import AddsComponents from 'components/add_component';

import logo from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countryList from 'react-select-country-list';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchComponent from './search-component';

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

const jobposted = [
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
  const [currentUser] = useState(getCurrentUser());
  const options = useMemo(() => countryList().getData(), []);

  const [searchJobs, setSearchJobs] = useState([]);
  const [filterApplied, setFilterApplied] = useState([]);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const { gilad, jason, antoine } = state;

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    getJobs();
  }, []);

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

  const viewJob = (e) => {
    e.preventDefault();
    history.push('/view-job');
  };

  return (
    <>
      <SearchComponent />

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
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gilad}
                              onChange={handleChange}
                              name="gilad"
                            />
                          }
                          label="Gilad Gray"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={jason}
                              onChange={handleChange}
                              name="jason"
                            />
                          }
                          label="Jason Killian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={antoine}
                              onChange={handleChange}
                              name="antoine"
                            />
                          }
                          label="Antoine Llorca"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Date post</b>
                  <Select options={jobposted} placeholder="Date Posted" />
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
                              checked={gilad}
                              onChange={handleChange}
                              name="gilad"
                            />
                          }
                          label="Gilad Gray"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={jason}
                              onChange={handleChange}
                              name="jason"
                            />
                          }
                          label="Jason Killian"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={antoine}
                              onChange={handleChange}
                              name="antoine"
                            />
                          }
                          label="Antoine Llorca"
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
                              checked={gilad}
                              onChange={handleChange}
                              name="gilad"
                            />
                          }
                          label="Gilad Gray"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
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
