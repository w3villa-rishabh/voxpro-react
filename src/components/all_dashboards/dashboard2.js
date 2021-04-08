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
        <Grid container spacing={2} className="mb-3">
          <Grid item xs={12} sm={3}>
            <Card className="card-box border-0 shadow-first-sm p-3 h-100">
              <div className="d-flex align-items-center">
                <div className="d-40 btn-icon rounded-circle bg-first text-white text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['far', 'user']} />
                </div>
                <div className="text-black-50">Profile Views</div>
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
                <div className="text-black-50">Profile Completion</div>
              </div>
              <div className="mx-auto text-center">
                <CircularProgressbar
                  value={56}
                  text={56 + '%'}
                  strokeWidth={8}
                  className="circular-progress-first w-50"
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
                <div className="text-black-50">New jobs added</div>
              </div>
              <div className="display-4 text-center line-height-sm text-second text-center d-flex align-items-center pt-2 justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="font-size-sm text-success mr-2"
                />
                <div>4867</div>
              </div>
              <div className="text-black-50 text-center pt-3">
                <b>+22%</b> from last month
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card className="card-box border-0 shadow-primary-sm p-3 h-100">
              <div className="d-flex align-items-center">
                <div className="d-40 btn-icon rounded-circle bg-primary text-white text-center font-size-lg mr-3">
                  <FontAwesomeIcon icon={['far', 'list-alt']} />
                </div>
                <div className="text-black-50">Tasks outstanding</div>
              </div>
              <div className="display-4 text-center line-height-sm text-second text-center d-flex align-items-center pt-2 justify-content-center">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-down']}
                  className="font-size-sm text-first mr-2"
                />
                <div>433</div>
              </div>
              <div className="text-black-50 text-center pt-3">
                <b>+32%</b> from last month
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
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className="overflow-hidden">
            <Card>
              <div className="app-inner-content-layout">
                {/* <div
                onClick={toogleHeaderDrawer}
                className={clsx('app-drawer-overlay', {
                  'is-active': headerDrawerToggle
                })}
              /> */}
                <div className="app-drawer-content-message">
                  <Tooltip arrow title="Close drawer" placement="left">
                    <Button
                      size="small"
                      onClick={toogleHeaderDrawer}
                      className="close-drawer-btn bg-white p-0 d-40"
                      id="CloseDrawerTooltip">
                      <div
                        className={clsx(
                          'navbar-toggler hamburger hamburger--elastic',
                          {
                            'is-active': headerDrawerToggle
                          }
                        )}>
                        <span className="hamburger-box">
                          <span className="hamburger-inner" />
                        </span>
                      </div>
                    </Button>
                  </Tooltip>

                  <div className="shadow-overflow">
                    <PerfectScrollbar>
                      <div className="p-2 scroll-menu">
                        <TextField
                          // onFocus={toggleHeaderSearchHover}
                          // onBlur={toggleHeaderSearchHover}
                          id="header-search-input"
                          name="header-search-input"
                          type="search"
                          placeholder="Search conversations.."
                          variant="outlined"
                          style={{
                            background: 'white',
                            'margin-bottom': '10px'
                          }}
                        />
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="font-size-sm text-warning"
                          />
                          <b className="text-warning ml-1">Pending</b>
                        </div>
                        <ul>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="pending-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'comments']}
                            className="font-size-sm text-info"
                          />
                          <b className="text-info ml-1">Active conversions</b>
                        </div>
                        <ul>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="active-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                        <div className="py-4">
                          <FontAwesomeIcon
                            icon={['far', 'comment-alt']}
                            className="font-size-sm text-success"
                          />
                          <b className="text-success ml-1">
                            Resolved conversations
                          </b>
                        </div>
                        <ul>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                          <li className="resolved-card">
                            <b>Jerome Macoy</b>
                            <p className="mb-0 text-black-50">
                              So I need new sheets and..
                            </p>
                          </li>
                        </ul>
                      </div>
                    </PerfectScrollbar>
                  </div>
                </div>
                <div className="app-inner-content-layout--main order-3 order-lg-2 card-box remove-border-box bg-secondary">
                  <PerfectScrollbar>
                    <div className="card-header rounded-0 bg-white border-bottom">
                      <div className="card-header--title">
                        <div className="app-drawer-wrapper-message">
                          <Button
                            size="small"
                            onClick={toogleHeaderDrawer}
                            className={clsx(
                              'btn-transition-none navbar-toggler bg-transparent p-0 hamburger hamburger--elastic',
                              { 'is-active': headerDrawerToggle }
                            )}
                            disableRipple>
                            <span className="hamburger-box">
                              <span className="hamburger-inner" />
                            </span>
                          </Button>
                          <div className="ml-3 mt-3">
                            <b>Messenger</b>
                            <p>Talking to Kate</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card-header--actions">
                        <Tooltip title="Add in conversation">
                          <Button
                            size="small"
                            className="btn-first btn-pill d-40 p-0">
                            <FontAwesomeIcon icon={['fas', 'plus']} />
                          </Button>
                        </Tooltip>
                      </div> */}
                    </div>
                    <div className="chat-wrapper-message p-3">
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Hello, John.</p>
                              <p>This is Kenny. How are you?</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item chat-item-reverse p-2 mb-2">
                        <div className="align-box-row flex-row-reverse">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Hey, Kate.</p>
                              <p>
                                I'm attaching the pictures you requested below:
                              </p>
                              <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                                <div>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}>
                                    <img
                                      alt="..."
                                      className="img-fluid rounded m-1 shadow-sm"
                                      src={people1}
                                      width="54"
                                    />
                                  </a>
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}>
                                    <img
                                      alt="..."
                                      className="img-fluid rounded m-1 shadow-sm"
                                      src={people2}
                                      width="54"
                                    />
                                  </a>
                                </div>
                              </Card>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Thanks.</p>
                              <p>Really appreciate it!</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item p-2 mb-2">
                        <div className="align-box-row">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Bye for now, talk to you later.</p>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:01 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="chat-item chat-item-reverse p-2 mb-2">
                        <div className="align-box-row flex-row-reverse">
                          <div className="avatar-icon-wrapper avatar-icon-lg align-self-start">
                            <div className="avatar-icon rounded-circle shadow-none">
                              <img alt="..." src={avatar3} />
                            </div>
                          </div>
                          <div>
                            <div className="chat-box bg-gray-400 text-second">
                              <p>Almost forgot about your tasks.</p>
                              <p>
                                <b>Check the links below:</b>
                              </p>
                              <Card className="bg-second p-1 mt-3 mb-2">
                                <div className="text-center py-2">
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-ripe-malin d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip111">
                                      <FontAwesomeIcon
                                        icon={['far', 'gem']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-grow-early d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip118">
                                      <FontAwesomeIcon
                                        icon={['far', 'building']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title="Menu example">
                                    <Button
                                      className="btn-link p-0 btn-icon bg-arielle-smile d-inline-block text-center text-white font-size-xl d-40 rounded-circle border-0 m-2"
                                      id="MenuExampleTooltip125">
                                      <FontAwesomeIcon
                                        icon={['far', 'chart-bar']}
                                        className="font-size-sm"
                                      />
                                    </Button>
                                  </Tooltip>
                                </div>
                              </Card>
                            </div>
                            <small className="mt-2 d-block text-black-50">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1 opacity-5"
                              />
                              11:03 AM | Yesterday
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white">
                      <div className="card-footer p-0">
                        {/* <div className="divider" /> */}
                        <div
                          className={clsx(
                            'd-flex align-items-center transition-base px-4 py-2',
                            { 'bg-secondary': inputBg }
                          )}>
                          <div className="avatar-icon-wrapper avatar-initials mr-3">
                            <div className="avatar-icon bg-neutral-dark text-black">
                              H
                            </div>
                            <div
                              className="badge badge-success badge-position badge-position--bottom-center badge-circle"
                              title="Badge bottom center">
                              Online
                            </div>
                          </div>
                          <TextField
                            variant="outlined"
                            size="small"
                            className="bg-white w-100"
                            classes={{ root: 'input-border-0' }}
                            id="input-with-icon-textfield225-1"
                            placeholder="Write your message here..."
                            onFocus={toggleInputBg}
                            onBlur={toggleInputBg}
                          />
                          <div className="avatar-icon-wrapper avatar-initials mr-3 send-btn">
                            <FontAwesomeIcon
                              icon={['fas', 'paper-plane']}
                              className="font-size-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </PerfectScrollbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(LivePreviewExample);
