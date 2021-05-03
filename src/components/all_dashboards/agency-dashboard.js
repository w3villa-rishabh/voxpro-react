import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  Table,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  Menu,
  MenuItem
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { CircularProgressbar } from 'react-circular-progressbar';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../assets/images/avatars/default.png';

import ChatBox from '../chat_component/mini-chat';
import Chart from 'react-apexcharts';
import Calendar from 'react-calendar';
import Select from 'react-select';

const jobFiltersOptions = [
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

const ActionsCandidate = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        size="small"
        className="px-4 btn-neutral-primary"
        variant="contained"
        aria-haspopup="true"
        onClick={handleClick}>
        Action
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        classes={{ list: 'p-0' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <div className="p-3">
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            View Profile
          </MenuItem>
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            Connect
          </MenuItem>
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            Message
          </MenuItem>
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            Share
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

const ActionsCompanies = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="simple-menu"
        size="small"
        className="px-4 btn-neutral-primary"
        variant="contained"
        aria-haspopup="true"
        onClick={handleClick}>
        Action
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        classes={{ list: 'p-0' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <div className="p-3">
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            View Profile
          </MenuItem>
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            View Employees
          </MenuItem>
          <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
            Share
          </MenuItem>
        </div>
      </Menu>
    </>
  );
};

const AgencyDashboard = () => {
  const [value, onChange] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);
  const [taskComplete, setTaskComplete] = useState(56);
  const [taskStart, setTaskStart] = useState(80);
  const [jobsFilter, setJobFilter] = useState('');

  const filterJobs = (filter) => {
    setJobFilter(filter);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
        markerClick: function (a, b, c) {
          console.log(
            c.w.globals.seriesNames[c.seriesIndex] +
              c.w.config.series[c.seriesIndex].data[c.dataPointIndex]
          );
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    tooltip: {
      x: {
        show: false
      }
    },
    markers: {
      size: 8,
      opacity: 0.3,
      strokeWidth: 2,

      hover: {
        size: 12
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  };
  const series = [
    {
      name: 'Placements',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }
  ];

  const chartsLarge6Options = {
    chart: {
      toolbar: {
        show: false
      },
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
        markerClick: function (a, b, c) {
          console.log(
            c.w.globals.seriesNames[c.seriesIndex] +
              c.w.config.series[c.seriesIndex].data[c.dataPointIndex]
          );
        }
      },
      sparkline: {
        enabled: false
      },
      dropShadow: {
        enabled: true,
        opacity: 0.07,
        blur: 4,
        left: 2,
        top: 3
      }
    },
    tooltip: {
      x: {
        show: false
      }
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      // axisTicks: {
      //   color: 'rgba(255,255,255,.2)'
      // },
      // type: 'datetime',
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: {
        color: 'rgba(255,255,255,.2)'
      }
    },
    markers: {
      size: 8,
      opacity: 0.3,
      colors: ['#0f8a2d'],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 12
      }
    },
    grid: {
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#0f8a2d'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 60, 100]
      }
    },
    colors: ['#56b45d'],
    legend: {
      show: false
    }
  };
  const chartsLarge6Data = [
    {
      name: 'Revenue',
      data: [4, 3, 10, 9, 29, 19, 22, 9]
    }
  ];

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item xs={12} sm={3}>
            <CardContent className="bg-brand-facebook h-100">
              <div className="align-box-row align-items-start">
                <div className="bg-white font-size-xl d-40 btn-icon p-2">
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                </div>
                <div className="font-weight-bold text-white ml-3">
                  <small className="font-size-sm d-block mb-1 text-uppercase">
                    Live Jobs
                  </small>
                  <span className="font-size-xxl mt-1">20</span>
                </div>
              </div>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardContent className="bg-brand-facebook h-100">
              <div className="align-box-row align-items-start">
                <div className="bg-white font-size-xl d-40 btn-icon p-2">
                  <FontAwesomeIcon icon={['fas', 'clock']} />
                </div>
                <div className="font-weight-bold text-white ml-3">
                  <small className="font-size-sm d-block mb-1 text-uppercase">
                    Pending Placements
                  </small>
                  <span className="font-size-xxl mt-1">5</span>
                </div>
              </div>
            </CardContent>
          </Grid>

          <Grid item xs={12} sm={3}>
            <CardContent className="bg-brand-facebook h-100">
              <div className="align-box-row align-items-start">
                <div className="bg-white font-size-xl d-40 btn-icon p-2">
                  <FontAwesomeIcon icon={['fas', 'clock']} />
                </div>
                <div className="font-weight-bold text-white ml-3">
                  <small className="font-size-sm d-block mb-1 text-uppercase">
                    Pending Documents
                  </small>
                  <span className="font-size-xxl mt-1">30</span>
                </div>
              </div>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardContent className="bg-brand-facebook h-100">
              <div className="align-box-row align-items-start">
                <div className="bg-white font-size-xl d-40 btn-icon p-2">
                  <FontAwesomeIcon icon={['fas', 'clock']} />
                </div>
                <div className="font-weight-bold text-white ml-3">
                  <small className="font-size-sm d-block mb-1 text-uppercase">
                    Pending IR35
                  </small>
                  <span className="font-size-xxl mt-1">3</span>
                </div>
              </div>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={3}>
            <CardContent className="bg-brand-facebook">
              <div className="align-box-row align-items-start">
                <div className="bg-white font-size-xl d-40 btn-icon p-2">
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                </div>
                <div className="font-weight-bold text-white ml-3">
                  <small className="font-size-sm d-block mb-1 text-uppercase">
                    Scheduled Interviews
                  </small>
                  <span className="font-size-xxl mt-1">10</span>
                </div>
              </div>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mt-3">
          <Grid item xs={12} sm={8}>
            <Card className="card-box shadow-success-sm p-3 h-100">
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <b>Monthly Placements</b>
                  <Chart
                    options={options}
                    series={series}
                    type="line"
                    height="220"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <b>Monthly Revenue</b>
                      <Chart
                        options={chartsLarge6Options}
                        series={chartsLarge6Data}
                        type="line"
                        height={150}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Card className="card-box h-100">
                  <div className="card-content-overlay text-center p-3">
                    <div className="py-2">
                      <b> My Tasks Today</b>
                    </div>
                    <div className="font-size-lg opacity-8">
                      <Grid container spacing={0}>
                        <Grid item xs={12} sm={6}>
                          <div className="mx-auto text-center">
                            <a
                              href="!#"
                              onClick={(a) => a.preventDefault()}
                              className="">
                              <CircularProgressbar
                                value={taskComplete}
                                text={taskComplete + '%'}
                                strokeWidth={8}
                                className="circular-progress-first"
                              />
                            </a>
                          </div>
                          <div>
                            <small>Completed</small>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <div className="mx-auto text-center">
                            <a
                              href="!#"
                              onClick={(a) => a.preventDefault()}
                              className="">
                              <CircularProgressbar
                                value={taskStart}
                                text={taskStart + '%'}
                                strokeWidth={8}
                                className="circular-progress-warning"
                              />
                            </a>
                          </div>
                          <div>
                            <small>Started</small>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="text-center mt-2">
                      <Button
                        size="small"
                        className="bg-primary px-4 text-white">
                        23 View All
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card-box mt-1">
                  <Calendar
                    className="border-0 m-auto p-1"
                    defaultView="month"
                    onChange={(date) => {
                      onChange(date);
                      setTaskComplete(date.getDate());
                      setTaskStart(date.getDate() + 20);
                    }}
                    value={value}
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mt-1">
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-happy-fisher text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'bell']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">5</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          New Connections Requests
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
            <Card className="mt-2 card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-light-pure text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'clock']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">10</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Recent Connections
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
            <Card className="mt-2 card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-amy-crisp text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'building']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">50</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Companies Connected
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
            <Card className="mt-2 card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-asteroid text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'user']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">100</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Candidates Connected
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card-box p-3 h-100">
              <b>Suggested Connections</b>
              <div
                className="scroll-area"
                style={{
                  height: 'calc(300px - 7px)',
                  borderRadius: 'inherit'
                }}>
                <PerfectScrollbar>
                  <List component="div" className="list-group-flush">
                    <ListItem className="px-0 border-0 py-1">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Shanelle Wynn
                              </a>
                              <span className="text-black-50 d-block">
                                UI Engineer, Apple Inc.
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="pt-2 pt-xl-0 d-flex align-items-center">
                          <Button
                            size="small"
                            className="btn-pill ml-5 btn-outline-primary border-1"
                            variant="outlined">
                            Connect
                          </Button>
                          <Button
                            size="small"
                            className="btn-pill ml-2 bg-primary px-4 text-white border-1"
                            variant="outlined">
                            View
                          </Button>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="px-0 border-0 py-1">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar5} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Akeem Griffith
                              </a>
                              <span className="text-black-50 d-block">
                                Manager, Google Inc.
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="pt-2 pt-xl-0 d-flex align-items-center">
                          <Button
                            size="small"
                            className="btn-pill ml-5 btn-outline-primary border-1"
                            variant="outlined">
                            Connect
                          </Button>
                          <Button
                            size="small"
                            className="btn-pill ml-2 bg-primary px-4 text-white border-1"
                            variant="outlined">
                            View
                          </Button>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="px-0 border-0 py-1">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Abigayle Hicks
                              </a>
                              <span className="text-black-50 d-block">
                                Project Manager, Spotify
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          className="pt-2 pt-xl-0 d-flex align-items-center">
                          <Button
                            size="small"
                            className="btn-pill ml-5 btn-outline-primary border-1"
                            variant="outlined">
                            Connect
                          </Button>
                          <Button
                            size="small"
                            className="btn-pill ml-2 bg-primary px-4 text-white border-1"
                            variant="outlined">
                            View
                          </Button>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </PerfectScrollbar>
              </div>
              <div className="see-more text-center">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text">
                  View More
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="h-100 border-0 shadow-danger-sm p-3">
              <div className="card-header--title">
                <b className="font-size-lg font-weight-bold font-weight-bolder mb-0">
                  Recent Activities
                </b>
                <p className="text-black-50">Last activity was 2 days ago</p>
              </div>
              <div className="card-header--actions">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="opacity-8 font-size-xs position-absolute ribbon-angle--top-right m-3"
                />
              </div>
              <div className="timeline-list timeline-list--primary">
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label">
                      Business investor meeting
                    </h4>
                    <small className="mt-2 d-block">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1"
                      />
                      17<sup>th</sup> September
                    </small>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label font-weight-bold">
                      Learning round table gathering
                    </h4>
                    <small className="mt-2 d-block">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1"
                      />
                      18<sup>th</sup> September
                    </small>
                    <p className="mt-3">
                      The World Wide Web goes live with its first web page.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon" />
                    <h4 className="timeline-item--label">Java exam day</h4>
                    <small className="mt-2 d-block">
                      <FontAwesomeIcon
                        icon={['far', 'clock']}
                        className="mr-1"
                      />
                      19<sup>th</sup> September
                    </small>
                  </div>
                </div>
              </div>
              <div className="card-footer pb-0 text-center see-more">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text">
                  View More
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mt-1">
          <Grid item xs={12} sm={7}>
            <Card className="card-box h-100">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>Your Jobs</b>
                </div>
                <div className="w-25">
                  <Select
                    options={jobFiltersOptions}
                    value={jobsFilter}
                    onChange={filterJobs}
                    placeholder="Date Posted"
                  />
                </div>
                {/* <div className="card-header--actions">
                  <Button size="small" className="btn-neutral-primary">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                    </span>
                    <span className="btn-wrapper--label">Add ticket</span>
                  </Button>
                </div> */}
              </div>

              {/* <div className="divider" /> */}
              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="bg-white">Job Id</th>
                        <th className="bg-white text-left">Job Title</th>
                        <th className="bg-white text-center">Company</th>
                        <th className="bg-white text-center">Date Added</th>
                        <th className="bg-white text-center">
                          Stages of Applications
                        </th>
                        <th className="bg-white text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#453</td>
                        <td>Software Engineer</td>

                        <td className="text-center">Darktrace</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-black-50">
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-success"
                            value={100}
                          />
                          <div className="font-size-sm text-black-50 pt-1">
                            Completed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>#453</td>
                        <td>Developer</td>
                        <td className="text-center">Deliveroo</td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-black-50">
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-info"
                            value={70}
                          />
                          <div className="font-size-sm text-black-50 pt-1">
                            In-progress
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>#453</td>
                        <td>Software Engineer</td>
                        <td className="text-center">Darktrace</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-black-50">
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-warning"
                            value={10}
                          />
                          <div className="font-size-sm text-black-50 pt-1">
                            Pending
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>#453</td>
                        <td>Developer</td>
                        <td className="text-center">Deliveroo</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-black-50">
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-success"
                            value={100}
                          />
                          <div className="font-size-sm text-black-50 pt-1">
                            Completed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </PerfectScrollbar>
              </div>
              <div className="card-footer py-3 text-center">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text">
                  View more
                </Button>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card>
              <ChatBox />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className="card-box">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>List of Companies Recently Joined</b>
                </div>
              </div>

              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className=" text-left">Company ID</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Industry</th>
                        <th className=" text-center">Date Joined</th>
                        <th className=" text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Nolan Recruitment</td>
                        <td>Southampton, UK</td>
                        <td>Automotive</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <ActionsCompanies />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Adecco</td>
                        <td>London, UK</td>
                        <td>Chemical</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <ActionsCompanies />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Nolan Recruitment</td>
                        <td>Southampton, UK</td>
                        <td>Automotive</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <ActionsCompanies />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Adecco</td>
                        <td>London, UK</td>
                        <td>Chemical</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <ActionsCompanies />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </PerfectScrollbar>
              </div>
              <div className="card-footer py-3 text-center">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text">
                  View More
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className="card-box">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>List of Candidates Recently Joined</b>
                </div>
              </div>

              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className=" text-left">Candidate ID</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th className="text-center">Availability</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Deepak Kumar</td>
                        <td>Software Engineer</td>
                        <td>Southampton, UK</td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Immediate
                          </div>
                        </td>
                        <td className="text-center">
                          <ActionsCandidate />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#584</td>
                        <td>Rishabh</td>
                        <td>Software Engineer</td>
                        <td>London, UK</td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Unavailable
                          </div>
                        </td>
                        <td className="text-center">
                          <ActionsCandidate />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Deepak Kumar</td>
                        <td>Software Engineer</td>
                        <td>Southampton, UK</td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Available from (12/12/2020)
                          </div>
                        </td>
                        <td className="text-center">
                          <ActionsCandidate />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#584</td>
                        <td>Rishabh</td>
                        <td>Software Engineer</td>
                        <td>London, UK</td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Unavailable
                          </div>
                        </td>
                        <td className="text-center">
                          <ActionsCandidate />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </PerfectScrollbar>
              </div>
              <div className="card-footer py-3 text-center">
                <Button
                  size="small"
                  className="btn-outline-second"
                  variant="text">
                  View More
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(AgencyDashboard);
