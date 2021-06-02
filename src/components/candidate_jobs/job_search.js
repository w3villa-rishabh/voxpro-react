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
import logo1 from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countryList from 'react-select-country-list';
import { getCurrentUser } from 'helper';

const jobType = [
  {
    value: 'permanent',
    label: 'Permanent'
  },
  {
    value: 'contract',
    label: 'Contract'
  },
  {
    value: 'interim',
    label: 'Interim'
  },
  {
    value: 'part_time',
    label: 'Part Time'
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

export default function JobSearchComponent() {
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

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const search = () => {
    setSearchLoader(true);
    console.log('searchQuery', searchQuery);
    setTimeout(() => {
      setSearchLoader(false);
    }, 3000);
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
          <Grid item sm={3} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label="search a job"
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
          <Grid item sm={3} xs={12}>
            <Select
              options={options}
              name="location"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  location: event.label
                });
              }}
              placeholder="Location"
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Select
              options={jobType}
              name="jobType"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  jobType: event.label
                });
              }}
              placeholder="Job Type"
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Select
              options={jobPosted}
              name="datePost"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  datePost: event.label
                });
              }}
              placeholder="Date Posted"
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Button
                  disabled={searchLoader}
                  className="btn-neutral-info hover-scale-sm"
                  onClick={search}>
                  <span className="px-2">Search</span>
                  <ClipLoader
                    color={'var(--info)'}
                    loading={searchLoader}
                    size={20}
                  />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div className="mt-2">
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
          </Grid>
        </Grid>
      </Card>

      <div className="title mt-3 pl-2">
        <h6 className="fh">Based on your profile and career interests</h6>
      </div>

      <div className="mt-3">
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item xs={12} sm={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <img
                    style={{ height: '50px', width: '130px' }}
                    className=""
                    alt="..."
                    src={logo1}
                  />
                </div>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-3">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> London,
                  UK
                </span>
                <p className="mt-1 f mt-0 text-muted">Salary: £8k - £10k</p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <img
                    style={{ height: '50px', width: '130px' }}
                    className=""
                    alt="..."
                    src={logo1}
                  />
                </div>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-3">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> London,
                  UK
                </span>
                <p className="mt-1 f mt-0 text-muted">Salary: £8k - £10k</p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <img
                    style={{ height: '50px', width: '130px' }}
                    className=""
                    alt="..."
                    src={logo1}
                  />
                </div>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-3">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> London,
                  UK
                </span>
                <p className="mt-1 f mt-0 text-muted">Salary: £8k - £10k</p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
              <div className="d-flex flex-column justify-content-between">
                <div>
                  <img
                    style={{ height: '50px', width: '130px' }}
                    className=""
                    alt="..."
                    src={logo1}
                  />
                </div>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-3">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> London,
                  UK
                </span>
                <p className="mt-1 f mt-0 text-muted">Salary: £8k - £10k</p>
              </div>
              <Button className="btn-neutral-info hover-scale-sm mt-2">
                <span className="px-2">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'heart']} />
                </span>
                <span> Save</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
