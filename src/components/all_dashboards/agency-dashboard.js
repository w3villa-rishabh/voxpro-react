import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem
} from '@material-ui/core';

import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';

const AgencyDashboard = (props) => {
  const chartsLarge3Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      color: '#3c44b1',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#3c44b1'
    },
    colors: ['#3c44b1'],
    legend: {
      show: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    }
  };
  const chartsLarge3Data = [
    {
      name: 'Expense',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Income',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  const chartsSmall1AOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    fill: {
      color: '#f4772e'
    },
    colors: ['#f4772e'],
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartsSmall1AData = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
    }
  ];

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} sm={5}>
            <Card className="card-box">
              <CardContent className="p-0 font-weight-bold">
                <div className="p-4">
                  <span className="text-dark pb-4">User Statics</span>
                  <span className="d-block">
                    <div>
                      <span className="font-weight-light">Expense</span>
                      <br></br>
                      <span className="font-weight-light">Income</span>
                    </div>
                  </span>
                </div>

                <Chart
                  options={chartsLarge3Options}
                  series={chartsLarge3Data}
                  type="area"
                  height={70}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <div className="align-items-center d-flex font-12 p-3">
                    <div className="d-40 rounded-circle bg-warning text-white mr-2 text-center">
                      <FontAwesomeIcon icon={['fas', 'microphone']} />
                    </div>
                    <div className="flex-grow-1">
                      <div>23</div>
                      <div className="text-black-50 pb-1">Live Jobs</div>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card>
                  <div className="align-items-center d-flex font-12 p-3">
                    <div className="d-40 rounded-circle bg-danger text-white mr-2 text-center">
                      <FontAwesomeIcon icon={['fas', 'camera-retro']} />
                    </div>
                    <div className="flex-grow-1">
                      <div>87</div>
                      <div className="text-black-50 pb-1">Pending</div>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="mt-2">
              <Grid item xs={12} sm={12}>
                <Card>
                  <div className="h-100px">
                    <Grid container spacing={1} className="city-card">
                      <Grid item xs={12} sm={6}>
                        <span>11 City</span>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <span>11 City</span>
                      </Grid>
                    </Grid>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Card className="card-box">
                  <div className="p-2">
                    <div className="font-12">Orders (293)</div>
                  </div>
                  <div className="rounded-bottom overflow-hidden">
                    <Chart
                      options={chartsSmall1AOptions}
                      series={chartsSmall1AData}
                      type="area"
                      height={50}
                    />
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12} sm={12}>
                <Card className="card-box">
                  <div className="p-2">
                    <div className="font-12">Orders (293)</div>
                  </div>
                  <div className="rounded-bottom overflow-hidden">
                    <Chart
                      options={chartsSmall1AOptions}
                      series={chartsSmall1AData}
                      type="area"
                      height={50}
                    />
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} sm={3}>
            <Card className="card-box text-white">
              <div className="bg-night-sky pt-5">
                <div className="card-tr-actions">
                  <Button className="btn-link btn-link-white p-0 font-size-xl text-white opacity-8">
                    <FontAwesomeIcon
                      icon={['fas', 'ellipsis-h']}
                      className="font-size-lg"
                    />
                  </Button>
                </div>
                <div className="text-center">
                  <div className="avatar-icon-wrapper rounded-circle m-0">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <h5 className="font-weight-bold mt-3">Akeem Griffith</h5>
                  <p className="mb-0">Graphic Designer</p>
                </div>
              </div>
              <div className="u-details">
                <div className="d-40 rounded-circle bg-success text-white mr-2 send-icon text-center">
                  <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                </div>
                <span>
                  Graphic Designer Graphic Designer Graphic Designer Graphic
                  Designer
                </span>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="card-box border-0 shadow-danger-sm">
              <div className="card-header--title p-3">
                <h4 className="font-size-sm mb-0 py-2 font-weight-bold">
                  New Connection
                </h4>
                <p className="text-black-50">Last activity was 2 days ago</p>
              </div>
              <div className="card-header--actions">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="opacity-8 font-size-xs position-absolute ribbon-angle--top-right m-3"
                />
              </div>
              <div
                className="scroll-area shadow-overflow"
                style={{ height: '325px', borderRadius: 'inherit' }}>
                <PerfectScrollbar options={{ wheelPropagation: false }}>
                  <List component="div" className="list-group-flush">
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
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
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              UnFollow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar3} />
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
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              UnFollow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
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
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              Follow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Gordon Barnett
                              </a>
                              <span className="text-black-50 d-block">
                                UI Developer, UiFort
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              Follow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Gordon Barnett
                              </a>
                              <span className="text-black-50 d-block">
                                UI Developer, UiFort
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              Follow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem className="">
                      <Grid container spacing={0}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="d-flex align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar4} />
                              </div>
                            </div>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-weight-bold text-black"
                                title="...">
                                Gordon Barnett
                              </a>
                              <span className="text-black-50 d-block">
                                UI Developer, UiFort
                              </span>
                            </div>
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          className="pt-3 pt-xl-0 d-flex align-items-center">
                          <div className="align-box-row flex-grow-1">
                            <div className="d-flex flex-column flex-grow-1"></div>
                            <Button
                              size="small"
                              className="btn btn-primary ml-4">
                              Follow
                            </Button>
                          </div>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </List>
                </PerfectScrollbar>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Card className="card-box border-0 shadow-danger-sm p-3">
              <div className="card-header--title">
                <h4 className="font-size-sm mb-0 py-2 font-weight-bold">
                  Recent Activities
                </h4>
                <p className="text-black-50">Last activity was 2 days ago</p>
              </div>
              <div className="card-header--actions">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="opacity-8 font-size-xs position-absolute ribbon-angle--top-right m-3"
                />
              </div>
              <div className="timeline-list ml-3">
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-primary text-white">
                      <FontAwesomeIcon icon={['far', 'building']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Business meeting
                    </h4>
                    <p>The World Wide Web goes live with its first web page.</p>
                  </div>
                </div>
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-danger text-white">
                      <FontAwesomeIcon icon={['far', 'gem']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Reports generation date
                    </h4>
                    <p>Bill Clinton's presidential scandal makes it online.</p>
                  </div>
                </div>
                <div className="timeline-item timeline-item-icon">
                  <div className="timeline-item--content">
                    <div className="timeline-item--icon-wrapper bg-warning text-white">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                    <h4 className="timeline-item--label mb-2 font-weight-bold">
                      Lunch with investors
                    </h4>
                    <p>
                      Mosaic, the first graphical browser, is introduced to the
                      average consumer.
                    </p>
                  </div>
                </div>
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
