import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  TextField,
  InputAdornment,
  List,
  ListItem
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import GaugeChart from 'react-gauge-chart';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import clsx from 'clsx';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  return (
    <>
      <div className="mb-spacing-1">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <Card className="p-4 text-center hgh">
                  <div className="mt-2 text-second font-weight-bold">
                    Request For Infos
                  </div>
                  <div className="display-4 mt-2 py-3 text-second font-weight-bold">
                    9
                  </div>
                </Card>
              </Grid>

              <Grid item xs={12}>


              <div className="mb-spacing-6">
                  <Card className="card-box">
                    <div className="card-header">
                      <div className="card-header--title">
                        <b>Connection Requests</b>
                      </div>
                    </div>
                        <div className="scroll-area shadow-overflow" style={{height: '327px', borderRadius: 'inherit'}}>
                            <PerfectScrollbar options={{ wheelPropagation: false }}>
                            <List component="div" className="list-group-flush">
                      <ListItem className="py-3">
                        <Grid container spacing={0}>
                          <Grid
                            item
                            xs={6}
                            md={12}
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
                            xs={6}
                            md={12}
                            className="pt-3 pt-xl-0 d-flex align-items-center">
                            <div className="align-box-row flex-grow-1">
                              <div className="d-flex flex-column flex-grow-1"></div>
                              <Button
                                size="small"
                                className="btn btn-primary ml-4">
                                Accept
                              </Button>
                              <Button
                                size="small"
                                className="btn btn-danger ml-4">
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
                            xs={6}
                            md={12}
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
                            xs={6}
                            md={12}
                            className="pt-3 pt-xl-0 d-flex align-items-center">
                            <div className="align-box-row flex-grow-1">
                              <div className="d-flex flex-column flex-grow-1"></div>
                              <Button
                                size="small"
                                className="btn btn-primary ml-4">
                                Accept
                              </Button>
                              <Button
                                size="small"
                                className="btn btn-danger ml-4">
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
                            xs={6}
                            md={12}
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
                            xs={6}
                            md={12}
                            className="pt-3 pt-xl-0 d-flex align-items-center">
                            <div className="align-box-row flex-grow-1">
                              <div className="d-flex flex-column flex-grow-1"></div>
                              <Button
                                size="small"
                                className="btn btn-primary ml-4">
                                Accept
                              </Button>
                              <Button
                                size="small"
                                className="btn btn-danger ml-4">
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
                            xs={6}
                            md={12}
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
                            xs={6}
                            md={12}
                            className="pt-3 pt-xl-0 d-flex align-items-center">
                            <div className="align-box-row flex-grow-1">
                              <div className="d-flex flex-column flex-grow-1"></div>
                              <Button
                                size="small"
                                className="btn btn-primary ml-4">
                                Accept
                              </Button>
                              <Button
                                size="small"
                                className="btn btn-danger ml-4">
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
                  </div>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12} className="d-flex">
              <Card className="card-box w-100">
                <div className="card-header">
                  <div className="card-header--title">
                    <small className="d-block text-uppercase mt-1">
                      Messages
                    </small>
                    <b>Messenger Window</b>
                  </div>
                  <div className="avatar-icon-wrapper avatar-initials shadow-none d-40 mr-0">
                    <div className="avatar-icon text-white bg-night-sky d-40 font-size-sm">
                      ET
                    </div>
                    <div
                      className="badge badge-warning badge-position badge-position--bottom-center badge-circle-inner"
                      title="Badge bottom center">
                      Online
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    'd-flex transition-base align-items-center justify-content-between py-2 px-4',
                    { 'bg-secondary': !inputBg }
                  )}>
                  <div>
                    <Button
                      size="small"
                      className="btn-link p-0 btn-transition-none btn-link-danger">
                      <span className="btn-wrapper--label font-size-sm">
                        Delete all
                      </span>
                    </Button>
                  </div>
                  <div className="font-size-sm font-weight-bold">
                    Emma Taylor
                  </div>
                </div>
                <div className="divider" />
                <div
                  className={clsx(
                    'd-flex align-items-center transition-base px-4 py-1',
                    { 'py-3 bg-secondary': inputBg }
                  )}>
                  <div className="search-wrapper w-100">
                    <TextField
                      variant="outlined"
                      size="small"
                      className="bg-white w-100"
                      classes={{ root: 'input-border-0' }}
                      id="input-with-icon-textfield225-1"
                      placeholder="Search messages..."
                      onFocus={toggleInputBg}
                      onBlur={toggleInputBg}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchTwoToneIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                </div>
                <div className="divider" />
                <List component="div" className="list-group-flush">
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => e.preventDefault()}
                    className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper d-50 mr-3">
                        <div className="avatar-icon rounded-circle d-50">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold font-size-sm text-black">
                          Siena Handley
                        </div>
                        <div className="d-flex align-items-center font-size-xs">
                          <div className="badge badge-success badge-circle border-white border-1 mr-2">
                            Completed
                          </div>
                          <div className="text-success">Online</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button size="small" className="btn btn-primary px-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'envelope-open-text']}
                          />
                        </span>
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => e.preventDefault()}
                    className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper d-50 mr-3">
                        <div className="avatar-icon rounded-circle d-50">
                          <img alt="..." src={avatar6} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold font-size-sm text-black">
                          Karla Byrne
                        </div>
                        <div className="d-flex align-items-center font-size-xs">
                          <div className="badge badge-success badge-circle border-white border-1 mr-2">
                            Completed
                          </div>
                          <div className="text-success">Online</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button size="small" className="btn btn-primary px-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'envelope-open-text']}
                          />
                        </span>
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => e.preventDefault()}
                    className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper d-50 mr-3">
                        <div className="avatar-icon rounded-circle d-50">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold font-size-sm text-black">
                          Eden Hays
                        </div>
                        <div className="d-flex align-items-center font-size-xs">
                          <div className="badge badge-danger badge-circle border-white border-1 mr-2">
                            Completed
                          </div>
                          <div className="text-danger">Offline</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button size="small" className="btn btn-primary px-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'envelope-open-text']}
                          />
                        </span>
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => e.preventDefault()}
                    className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper d-50 mr-3">
                        <div className="avatar-icon rounded-circle d-50">
                          <img alt="..." src={avatar7} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold font-size-sm text-black">
                          Siena Handley
                        </div>
                        <div className="d-flex align-items-center font-size-xs">
                          <div className="badge badge-success badge-circle border-white border-1 mr-2">
                            Completed
                          </div>
                          <div className="text-success">Online</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button size="small" className="btn btn-primary px-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'envelope-open-text']}
                          />
                        </span>
                      </Button>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => e.preventDefault()}
                    className="d-flex bg-white hover-scale-rounded justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper d-50 mr-3">
                        <div className="avatar-icon rounded-circle d-50">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold font-size-sm text-black">
                          Janine Benton
                        </div>
                        <div className="d-flex align-items-center font-size-xs">
                          <div className="badge badge-warning badge-circle border-white border-1 mr-2">
                            Completed
                          </div>
                          <div className="text-warning">In a meeting</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button size="small" className="btn btn-primary px-3">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'envelope-open-text']}
                          />
                        </span>
                      </Button>
                    </div>
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
