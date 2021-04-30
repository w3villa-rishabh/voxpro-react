import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  TextField,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import GaugeChart from 'react-gauge-chart';

import clsx from 'clsx';
import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import people2 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-2.jpg';
import ChatBox from '../chat_component/mini-chat';

const LivePreviewExample = (props) => {
  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  const { headerDrawerToggle, setHeaderDrawerToggle } = props;

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
  };

  const { headerSearchHover, setHeaderSearchHover } = props;

  const toggleHeaderSearchHover = () => {
    setHeaderSearchHover(!headerSearchHover);
  };

  return (
    <>
      <div className="mb-spacing-2">
        <Grid container spacing={2} className="mb-2">
          <Grid item xs={12} sm={3}>
            <Card className="card-box border-0 shadow-first-sm p-3 h-100">
              <div className="d-flex align-items-center">
                <div className="d-40 btn-icon rounded-circle bg-first text-white text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['far', 'user']} />
                </div>
                <b>Profile Views</b>
              </div>
              <GaugeChart
                hideText
                id="chartsGauges2A"
                nrOfLevels={6}
                colors={['#1bc943', '#f4772e', '#f83245']}
                arcWidth={0.3}
                percent={0.27}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="card-box border-0 shadow-success-sm p-3 h-100">
              <div className="d-flex align-items-center">
                <div className="d-40 btn-icon rounded-circle bg-success text-white text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['fas', 'address-card']} />
                </div>
                <b>Profile Completion</b>
              </div>
              <div className="mx-auto text-center">
                <CircularProgressbar
                  value={56}
                  text={56 + '%'}
                  strokeWidth={8}
                  className="circular-progress-first"
                />
              </div>
              {/* <div className="align-box-row progress-bar--label text-muted mt-3">
                <div className="ml-auto" style={{ color: '#2e2e2e' }}>
                  80%
                </div>
              </div>
              <LinearProgress
                variant="determinate"
                className="progress-sm progress-bar-rounded progress-animated-alt progress-bar-second hc-style"
                value={85}
              /> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="card-box border-0 shadow-danger-sm p-3 h-100">
              <div className="d-flex align-items-center">
                <div className="d-40 btn-icon rounded-circle bg-danger text-white text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['fas', 'walking']} />
                </div>
                <b>Total Connections </b>
              </div>
              <div className="display-4 text-center line-height-sm text-second text-center d-flex align-items-center pt-2 justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="font-size-sm text-success mr-2"
                />
                <div>568</div>
              </div>
              <div className="text-black-50 text-center pt-3">
                <b>+22%</b> from last month
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="card-box h-100">
              <div className="card-content-overlay text-center p-2">
                <div className="pb-2">
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
                          className="circular-progress-sm  circular-progress-first"
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
                          className="circular-progress-sm circular-progress-warning"
                        />
                      </div>
                      <div>
                        <small>Started</small>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="text-center mt-2">
                  <Button size="small" className="bg-primary px-4 text-white">
                    23 View All
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <Card className="p-4 text-center hgh">
                  <div className="mt-2 text-second font-weight-bold">
                    Profile Views
                  </div>
                  <div className="my-1">
                    <GaugeChart
                      hideText
                      id="chartsGauges2A"
                      nrOfLevels={6}
                      colors={['#1bc943', '#f4772e', '#f83245']}
                      arcWidth={0.3}
                      percent={0.27}
                    />
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className="p-4 text-center hgh">
                  <div className="mt-2 text-second font-weight-bold">
                    Request For Infos
                  </div>
                  <div className="display-4 mt-2 py-3 text-second font-weight-bold">
                    9
                  </div>
                </Card>
              </Grid> */}

              <Grid item xs={12} sm={12}>
                <Card className="card-box">
                  <div className="card-header">
                    <div className="card-header--title">
                      <b>Connection Requests</b>
                    </div>
                  </div>
                  <div
                    className="scroll-area shadow-overflow"
                    style={{ height: '412px', borderRadius: 'inherit' }}>
                    <PerfectScrollbar options={{ wheelPropagation: false }}>
                      <List component="div" className="list-group-flush">
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="py-3">
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
                                  className="btn btn-dark ml-2">
                                  View
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2">
                                  Accept
                                </Button>
                                <Button
                                  size="small"
                                  className="btn btn-danger ml-2">
                                  Reject
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </PerfectScrollbar>
                  </div>
                  {/* <div className="card-footer p-3 text-center">
                            <Button size="small" color="primary" variant="contained">
                                        <span className="btn-wrapper--label">
                                            View all Agencies
                    </span>
                                <span className="btn-wrapper--icon">
                                            <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                                        </span>
                            </Button>
                        </div> */}
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className="overflow-hidden">
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

export default connect(mapStateToProps, mapDispatchToProps)(LivePreviewExample);
