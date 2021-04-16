import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  Tooltip,
  Table,
  CardContent,
  List,
  ListItem
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

import Chart from 'react-apexcharts';
import Calendar from 'react-calendar';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import sun from '../../assets/images/sun.png';

import ChatBox from '../chat_component/chat';

const CompanyDashboard = () => {
  const [value, onChange] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    console.log('window.innerWidth', window.innerWidth);
    setWidth(window.innerWidth);
  };

  const [lat, setLat] = useState('28.5850');
  const [long, setLong] = useState('77.3116');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  };
  const series = [
    {
      name: 'Monthly Recruitment',
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    {
      name: 'Monthly Placement',
      data: [23, 12, 54, 61, 32, 56, 81, 19]
    }
  ];

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
            <Card className="card-box h-100">
              <div className="m-3">
                <b>Monthly Recruitment and Placements</b>
              </div>
              <Chart
                options={options}
                series={series}
                type="area"
                height={300}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card-box">
              <div className="card-content-overlay text-center">
                <div className="font-weight-bold text-black display-4 h-125px">
                  {weather.main && (
                    <CardContent>
                      <div className="align-box-row align-items-start pt-2">
                        <div className="mr-2">
                          <img
                            alt="..."
                            src={weather.weather[0].icon || sun}
                            height={60}
                            width={60}
                          />
                        </div>
                        <div>
                          <div className="font-weight-bold text-left">
                            <span className="mt-2 weather">
                              <b>{weather.main.temp}</b>
                              <sup>o</sup>
                            </span>
                            <small className="text-black-50 d-block font-size-md">
                              {weather.weather[0].main}
                            </small>
                            <small className="text-black-50 d-block">
                              {weather.name}
                            </small>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </div>
              </div>
            </Card>
            <Card className="card-box mt-2">
              <Calendar
                className="border-0 m-auto"
                defaultView="month"
                onChange={onChange}
                value={value}
              />
            </Card>
            {/* <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="card-box h-100">
                  
              </Grid>
            </Grid> */}
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
                      <div className="bg-brand-dribbble text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'clock']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">23,274</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Pending Placements
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-brand-discord text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'clock']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">23,274</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Pending Cocuments
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <CardContent>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="bg-white shadow-sm-dark card-box-hover-rise">
                  <div className="align-box-row align-items-start">
                    <div className="mr-2">
                      <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded-circle btn-icon">
                        <FontAwesomeIcon icon={['far', 'clock']} />
                      </div>
                    </div>
                    <div>
                      <div className="font-weight-bold">
                        <span className="font-size-xxl mt-2">23,274</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Pending IR35
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card-box">
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
                        <span className="font-size-xxl mt-2">23,274</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Interview Scheduled
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </CardContent>
            </Card>
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
                        <span className="font-size-xxl mt-2">23,274</span>
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
                        <span className="font-size-xxl mt-2">23,274</span>
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
                        <span className="font-size-xxl mt-2">23,274</span>
                        <small className="text-black-50 d-block mb-1 text-uppercase font-10">
                          Agency Connected
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
                        <span className="font-size-xxl mt-2">23,274</span>
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
                                <img alt="..." src={avatar2} />
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
                  <b>List of Jobs</b>
                </div>
              </div>

              {/* <div className="divider" /> */}
              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="bg-white">Role</th>
                        <th className="bg-white text-left">Company</th>
                        <th className="bg-white text-center">Date added</th>
                        <th className="bg-white text-center">Status</th>
                        <th className="bg-white text-center">Applications</th>
                        <th className="bg-white text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Role 1</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Lili Pemberton">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                        </td>

                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">File Manager</td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Role 2</td>
                        <td className="text-center">
                          <Tooltip title="Arvin Weston">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">Tickets App</td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Role 3</td>
                        <td className="text-center">
                          <Tooltip title="Mali Rosario">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar7} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">Tasks Management</td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 bg-primary text-white">
                            View
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Role 4</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Marion Devine">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">Calendar App</td>
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
                  <b>List of Agencies Recently Joined</b>
                </div>
              </div>

              <div className="divider" />
              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="bg-white text-left">Job ID</th>
                        <th className="bg-white">Role</th>
                        <th className="bg-white text-center">Agency</th>
                        <th className="bg-white text-center">Created date</th>
                        <th className="bg-white text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Role 1</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Lili Pemberton">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#584</td>
                        <td>Role 2</td>
                        <td className="text-center">
                          <Tooltip title="Arvin Weston">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#764</td>
                        <td>Role 3</td>
                        <td className="text-center">
                          <Tooltip title="Mali Rosario">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar7} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Role 4</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Marion Devine">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
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

              <div className="divider" />
              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="bg-white text-left">Job ID</th>
                        <th className="bg-white">Role</th>
                        <th className="bg-white text-center">Agency</th>
                        <th className="bg-white text-center">Created date</th>
                        <th className="bg-white text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Role 1</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Lili Pemberton">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#584</td>
                        <td>Role 2</td>
                        <td className="text-center">
                          <Tooltip title="Arvin Weston">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#764</td>
                        <td>Role 3</td>
                        <td className="text-center">
                          <Tooltip title="Mali Rosario">
                            <div className="avatar-icon-wrapper avatar-icon-sm">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar7} />
                              </div>
                            </div>
                          </Tooltip>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">#453</td>
                        <td>Role 4</td>
                        <td className="text-center">
                          <div
                            className="avatar-icon-wrapper avatar-icon-sm"
                            title="Marion Devine">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
