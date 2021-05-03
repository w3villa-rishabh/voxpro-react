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

import WorkIcon from '@material-ui/icons/Work';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import logo1 from '../../assets/images/stock-photos/c-logo.webp';
import logo2 from '../../assets/images/stock-photos/company.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import countryList from 'react-select-country-list';
import { getCurrentUser } from 'helper';

const jobtype = [
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

export default function JobSearchComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentUser] = useState(getCurrentUser());

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  const changeHandler1 = (value1) => {
    setValue1(value1);
  };
  const changeHandler2 = (value2) => {
    setValue2(value2);
  };

  const [state, setState] = useState({
    checkedA: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <div className="page-title">
        <Grid container spacing={2}>
          <Grid item md={4} xs={4}>
            <WorkIcon />
            <div className="title">
              <h5 className="heading pt-3">Job Search</h5>
            </div>
          </Grid>
          <Grid item md={5} xs={5}>
            {/* <div className="mb-3 mt-3 ml-5">
              <Button className="btn-neutral-info hover-scale-sm">
                <FontAwesomeIcon icon={['fas', 'bell']} className="svg-none" />
                <span className="px-2">Get Job Alert</span>
              </Button>
            </div> */}
          </Grid>
          <Grid item md={3} xs={3}>
            <div className="mb-3 mt-3 ml-5">
              <Button className="btn-neutral-info hover-scale-sm">
                <FontAwesomeIcon icon={['fas', 'heart']} className="svg-none" />
                <span className="px-2">Shortlisted Jobs</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

      <Card className="card-box">
        <Grid container spacing={2}>
          <Grid item md={3} xs={4}>
            <div className="mb-0 mt-3 ml-3">
              <TextField
                variant="outlined"
                size="small"
                label="search a job"
                placeholder="e.g. 'nurse'"
                className="w-100"
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
            </div>
          </Grid>
          <Grid item md={3} xs={4}>
            <div className="mb-0 mt-3">
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                placeholder="Location"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-0 mt-3">
              <Select
                options={jobtype}
                value={value1}
                onChange={changeHandler1}
                placeholder="Job Type"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={4}>
            <div className="mb-0 mt-3 mr-3">
              <Select
                options={jobposted}
                value={value2}
                onChange={changeHandler2}
                placeholder="Date Posted"
              />
            </div>
          </Grid>
          <Grid item md={2} xs={3}>
            <div className="mb-0 mt-3 ml-2">
              <Button className="btn-neutral-info hover-scale-sm">
                <span className="px-2">Search</span>
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {/* <Grid item md={3} xs={4}></Grid> */}
          {/* <Grid item md={2} xs={4}> */}
          {/* <div className="float-right mb-3">
              <Button className="btn-neutral-info hover-scale-sm">
                <span className="px-2">Advance Search</span>
              </Button>
            </div> */}
          {/* </Grid> */}
          {/* <Grid item md={2} xs={4}> */}
          {/* <div className="float-right mb-3">
              <Button className="btn-neutral-info hover-scale-sm">
                <span className="px-2">Search</span>
              </Button>
            </div> */}
          {/* </Grid> */}
          {/* <Grid item md={3} xs={4}> */}
          {/* <div className="mt-2 mb-3 float-right">
              <span className="ml-3">Relevent</span>
              <Switch
                onChange={handleChange}
                checked={state.checkedA}
                name="checkedA"
                color="primary"
                className="switch-medium ml-1 mr-1"
              />
              Recent
            </div> */}
          {/* </Grid> */}
          <Grid item md={12} xs={12} className="mr-4">
            <div className="mb-2 ml-0 float-right">
              <Button className="m-1 btn-transparent btn-link btn-link-primary">
                <span>Browse Jobs </span>{' '}
                <FontAwesomeIcon
                  icon={['fas', 'arrow-right']}
                  className="svg-none"
                />
              </Button>
            </div>
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
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    {/* <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div> */}
                  </Grid>
                </Grid>
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
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo2}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    {/* <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div> */}
                  </Grid>
                </Grid>
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
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo1}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    {/* <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div> */}
                  </Grid>
                </Grid>
                <div className="d-flex flex-column"></div>
              </div>
              <div className="mt-3">
                <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                <span className="f text-muted">
                  {' '}
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                  London, UK
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
                <Grid container spacing={4}>
                  <Grid item xl={6}>
                    <img
                      style={{ height: '50px', width: '130px' }}
                      className=""
                      alt="..."
                      src={logo2}
                    />
                  </Grid>
                  <Grid item xl={6}>
                    {/* <div className="symbol symbol-lg-75 symbol-primary text-right">
                      <span className="text-muted f">
                        10-shotlisted <br />
                        2-Selected
                      </span>
                    </div> */}
                  </Grid>
                </Grid>
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
