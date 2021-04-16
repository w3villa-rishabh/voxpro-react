import React, { useState } from 'react';

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
import { CircularProgressbar } from 'react-circular-progressbar';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';

import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import avatar5 from '../../assets/images/avatars/default.png';

import ChatBox from '../chat_component/chat';
import Chart from 'react-apexcharts';
import Calendar from 'react-calendar';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function boxMullerRandom() {
  let phase = false,
    x1,
    x2,
    w;

  return (function () {
    if ((phase = !phase)) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData2 = randomData(32);
const AgencyDashboard = () => {
  const [value, onChange] = useState(new Date());

  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    }
  ];

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={2} wrap="nowrap">
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
                  <span className="font-size-xxl mt-1">23,274</span>
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
                  <span className="font-size-xxl mt-1">23,274</span>
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
                  <span className="font-size-xxl mt-1">23,274</span>
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
                  <span className="font-size-xxl mt-1">23,274</span>
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
                  <span className="font-size-xxl mt-1">23,274</span>
                </div>
              </div>
            </CardContent>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="mt-3">
          <Grid item xs={12} sm={8}>
            <Card className="card-box shadow-success-sm p-3 h-100">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                  <b>Monthly Placements</b>
                  <div className="mt-4">
                    <Chart
                      options={options}
                      series={series}
                      type="line"
                      height="330"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <b>Monthly Revenue</b>
                      <div className="mt-4">
                        <Sparklines data={sampleData2}>
                          <SparklinesLine color="#56b45d" />
                          <SparklinesSpots style={{ fill: '#56b45d' }} />
                        </Sparklines>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} className="mt-3">
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={6} className="px-2">
                        <b>Candidates registered</b>
                        <div className="text-center text-capitalize mb-3">
                          <small className="text-black-50">
                            Lorem Ipsum is simply dummy text of the printing.
                          </small>
                        </div>
                        <div className="mx-auto text-center">
                          <CircularProgressbar
                            value={56}
                            text={56 + '%'}
                            strokeWidth={8}
                            className="circular-progress-info"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={6} className="px-2">
                        <b>Candidates registered</b>
                        <div className="text-center text-capitalize mb-3">
                          <small className="text-black-50">
                            Lorem Ipsum is simply dummy text of the printing.
                          </small>
                        </div>
                        <div className="mx-auto text-center">
                          <CircularProgressbar
                            value={56}
                            text={56 + '%'}
                            strokeWidth={8}
                            className="circular-progress-info"
                          />
                        </div>
                      </Grid>
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
                            <CircularProgressbar
                              value={56}
                              text={56 + '%'}
                              strokeWidth={8}
                              className="circular-progress-first"
                            />
                          </div>
                          <div>
                            <small>Completed</small>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <div className="mx-auto text-center">
                            <CircularProgressbar
                              value={56}
                              text={56 + '%'}
                              strokeWidth={8}
                              className="circular-progress-warning"
                            />
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
                    className="border-0 m-auto"
                    defaultView="month"
                    onChange={onChange}
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

              <List component="div" className="list-group-flush">
                <ListItem className="px-0 border-0 py-1">
                  <Grid container spacing={0}>
                    <Grid item xs={12} className="d-flex align-items-center">
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
                    <Grid item xs={12} className="d-flex align-items-center">
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
                    <Grid item xs={12} className="d-flex align-items-center">
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
                  <b>List 0f Jobs</b>
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
