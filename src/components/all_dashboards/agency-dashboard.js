import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  TextField,
  Tooltip,
  Table
} from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { CircularProgressbar } from 'react-circular-progressbar';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import people2 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-2.jpg';
import AddsComponents from 'components/add_component';
import Chart from 'react-apexcharts';

const AgencyDashboard = (props) => {
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

  const options = {
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
            {/* <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-danger text-white btn-icon mx-auto text-center shadow-danger">
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  4,745
                </div>
                <div className="opacity-8">Live Roles</div>
              </div>
            </Card> */}
            <div>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block btn-gradient bg-brand-facebook text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  {/* <AccountBalanceWalletOutlinedIcon className="h1 d-block my-2 text-warning"/> */}
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                  <div className="font-weight-bold font-size-md font-size-md">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-info text-white btn-icon mx-auto text-center shadow-info">
                  <FontAwesomeIcon icon={['fas', 'map-marker']} />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  4,45
                </div>
                <div className="opacity-8">Placements</div>
              </div>
            </Card> */}
            <div>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block btn-gradient bg-brand-facebook text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  {/* <AccountBalanceWalletOutlinedIcon className="h1 d-block my-2 text-warning"/> */}
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                  <div className="font-weight-bold font-size-md font-size-md">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            {/* <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-primary text-white btn-icon mx-auto text-center shadow-primary">
                  <FontAwesomeIcon icon={['fas', 'signal']} />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  5,745
                </div>
                <div className="opacity-8">IR35 Questions Status</div>
              </div>
            </Card> */}
            <div>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block btn-gradient bg-brand-facebook text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  {/* <AccountBalanceWalletOutlinedIcon className="h1 d-block my-2 text-warning"/> */}
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                  <div className="font-weight-bold font-size-md font-size-md">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-warning text-white btn-icon mx-auto text-center shadow-warning">
                  <FontAwesomeIcon icon={['fas', 'clock']} />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  745
                </div>
                <div className="opacity-8">Pending Documents</div>
              </div>
            </Card> */}
            <div>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block btn-gradient bg-brand-facebook text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  {/* <AccountBalanceWalletOutlinedIcon className="h1 d-block my-2 text-warning"/> */}
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                  <div className="font-weight-bold font-size-md font-size-md">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <Card className="p-2 h-100">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <div className="mx-auto text-center mt-3">
                    <CircularProgressbar
                      value={56}
                      text={56 + '%'}
                      strokeWidth={8}
                      className="circular-progress-warning"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="text-center">Scheduled Interviews</div>
                </Grid>
              </Grid>
            </Card> */}
            <div>
              <Button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="d-block btn-gradient bg-brand-facebook text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  {/* <AccountBalanceWalletOutlinedIcon className="h1 d-block my-2 text-warning"/> */}
                  <FontAwesomeIcon icon={['fas', 'user-tag']} />
                  <div className="font-weight-bold font-size-md font-size-md">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
          </Grid>
          {/* <Grid item xs={12} sm={2}>
            <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-success text-white btn-icon mx-auto text-center shadow-success">
                  <FontAwesomeIcon icon={['fas', 'thumbtack']} />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  74
                </div>
                <div className="opacity-8">Tasks</div>
              </div>
            </Card>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Card className="card-box shadow-success-sm p-3 h-100">
              <Grid container spacing={0}>
                <Grid item xs={12} sm={8}>
                  <Chart options={options} series={series} type="line" />
                  {/* </Card> */}
                </Grid>
                <Grid item xs={12} sm={4}>
                  {/* <Card className="card-box shadow-success-sm p-3 h-100"> */}
                  <div className="mx-auto text-center">
                    <CircularProgressbar
                      value={56}
                      text={56 + '%'}
                      strokeWidth={8}
                      className="circular-progress-warning"
                    />
                  </div>
                  <div className="font-size-lg opacity-8 pt-3 text-center">
                    Candidates registered
                  </div>
                  <div className="mx-auto text-center">
                    <CircularProgressbar
                      value={56}
                      text={56 + '%'}
                      strokeWidth={8}
                      className="circular-progress-warning"
                    />
                  </div>
                  <div className="font-size-lg opacity-8 pt-3 text-center">
                    Candidates registered
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          {/* <Grid item xs={12} sm={3}>
            <Card className="card-box shadow-success-sm p-3 h-100">
              <div className="mx-auto text-center">
                <CircularProgressbar
                  value={56}
                  text={56 + '%'}
                  strokeWidth={8}
                  className="circular-progress-primary"
                />
              </div>
              <div className="font-size-lg opacity-8 pt-3 text-center">
                Companies connected
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Card className="card-box h-100">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-danger text-white btn-icon mx-auto text-center shadow-danger">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  4,745
                </div>
                <div className="font-size-lg opacity-8">New Connections</div>
              </div>
            </Card>
          </Grid> */}
          <Grid item xs={12} sm={3}>
            <Card className="card-box h-100">
              <div className="card-content-overlay text-center">
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  745
                </div>
                <div className="font-size-lg opacity-8">
                  Connections Requests
                </div>
                <div className="divider mx-3 my-3" />
                <div className="text-center">
                  <Button size="small" className="px-4 btn-neutral-danger">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-danger text-white btn-icon mx-auto text-center shadow-danger">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  4,745
                </div>
                <div className="font-size-lg opacity-8">
                  New Connections Requests
                </div>
              </div>
            </Card>
            <Card className="card-box mt-3">
              <div className="card-content-overlay text-center py-4">
                <div className="d-40 rounded-circle bg-danger text-white btn-icon mx-auto text-center shadow-danger">
                  <FontAwesomeIcon
                    icon={['far', 'bell']}
                    className="display-4"
                  />
                </div>
                <div className="font-weight-bold text-black display-4 mt-4 mb-1">
                  4,745
                </div>
                <div className="font-size-lg opacity-8">New Connections</div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
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
              <div className="timeline-list">
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
              <div className="card-footer py-3 text-center see-more">
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
            <Card>
              <div className="app-inner-content-layout">
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
                          onFocus={toggleHeaderSearchHover}
                          onBlur={toggleHeaderSearchHover}
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

        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Card className="card-box">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>List Of Jobs</b>
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

              <div className="divider" />
              <div className="table-responsive-md">
                <PerfectScrollbar>
                  <Table className="table table-hover text-nowrap mb-0">
                    <thead>
                      <tr>
                        <th className="bg-white text-left">Job ID</th>
                        <th className="bg-white">Role</th>
                        <th className="bg-white text-left">Consultant</th>
                        <th className="bg-white text-center">Locations</th>
                        <th className="bg-white text-center">Created date</th>
                        <th className="bg-white text-center">Status</th>
                        <th className="bg-white text-center">Applications</th>
                        <th className="bg-white text-center">Closing On</th>
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
                        <td>When, while the lovely valley teems</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>I am so happy, my dear friend</td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          07/25/2023
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
                        <td>His own image, and the breath</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>When I hear the buzz</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
          <Grid item xs={12} sm={3}>
            <Card className="card-box shadow-success-sm p-3">
              <div className="mx-auto text-center">
                <CircularProgressbar
                  value={56}
                  text={56 + '%'}
                  strokeWidth={8}
                  className="circular-progress-primary"
                />
              </div>
              <div className="font-size-lg opacity-8 pt-3 text-center">
                Companies connected
              </div>
            </Card>
            <Card className="card-box shadow-success-sm p-3">
              <div className="mx-auto text-center">
                <CircularProgressbar
                  value={56}
                  text={56 + '%'}
                  strokeWidth={8}
                  className="circular-progress-primary"
                />
              </div>
              <div className="font-size-lg opacity-8 pt-3 text-center">
                Companies connected
              </div>
            </Card>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className="card-box">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>List of Companies Recently Added</b>
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
                        <th className="bg-white text-left">Consultant</th>
                        <th className="bg-white text-center">Locations</th>
                        <th className="bg-white text-center">Created date</th>
                        <th className="bg-white text-center">Status</th>
                        <th className="bg-white text-center">Applications</th>
                        <th className="bg-white text-center">Closing On</th>
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
                        <td>When, while the lovely valley teems</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>I am so happy, my dear friend</td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          07/25/2023
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
                        <td>His own image, and the breath</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>When I hear the buzz</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card className="card-box">
              <div className="card-header py-3">
                <div className="card-header--title font-size-lg">
                  <b>List of Companies Recently Joined</b>
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
                        <th className="bg-white text-left">Consultant</th>
                        <th className="bg-white text-center">Locations</th>
                        <th className="bg-white text-center">Created date</th>
                        <th className="bg-white text-center">Status</th>
                        <th className="bg-white text-center">Applications</th>
                        <th className="bg-white text-center">Closing On</th>
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
                        <td>When, while the lovely valley teems</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>I am so happy, my dear friend</td>
                        <td className="text-center text-black-50">
                          06/08/2022
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-success text-success">
                            Open
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          07/25/2023
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
                        <td>His own image, and the breath</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
                        <td>When I hear the buzz</td>
                        <td className="text-center text-black-50">
                          12/12/2020
                        </td>
                        <td className="text-center">
                          <div className="badge badge-neutral-dark text-dark">
                            Closed
                          </div>
                        </td>
                        <td className="text-center">
                          <Button
                            size="small"
                            className="px-4 btn-neutral-danger">
                            View
                          </Button>
                        </td>
                        <td className="text-center text-black-50">
                          08/30/2021
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
        </Grid> */}
      </div>
      <AddsComponents />
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
