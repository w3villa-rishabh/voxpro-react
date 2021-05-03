import React, { useState, useEffect } from 'react';

import clsx from 'clsx';

import {
  Grid,
  Button,
  Tooltip,
  Card,
  Table,
  List,
  ListItem,
  TextField,
  InputAdornment
} from '@material-ui/core';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { useLocation } from 'react-router-dom';

import {
  setHeaderDrawerToggle,
  setCloseModal
} from '../../reducers/ThemeOptions';
import PerfectScrollbar from 'react-perfect-scrollbar';
import projectLogo from '../../assets/images/voxpro-images/logo_small.png';

const actionOptions = [
  {
    value: 'candidate',
    label: 'Action 1'
  },
  {
    value: 'company',
    label: 'Action 2'
  }
];

const HeaderDrawer = (props) => {
  const location = useLocation();
  const [width, setWidth] = useState(window.innerWidth);
  const {
    headerDrawerToggle,
    setHeaderDrawerToggle,
    closeModal,
    setCloseModal
  } = props;

  const [activeTab, setActiveTab] = useState('0');
  const [actionFilter, setActionFilter] = useState();
  const [currentDate] = useState(new Date().toDateString());

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (!closeModal) {
      setHeaderDrawerToggle(false);
    }
  }, [closeModal, setHeaderDrawerToggle]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const toogleHeaderDrawer = () => {
    setHeaderDrawerToggle(!headerDrawerToggle);
    setCloseModal(!headerDrawerToggle);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const actions = (filter) => {
    setActionFilter(filter);
  };

  return (
    <>
      <div className="page-title">
        <EmojiPeopleIcon />
        <div className="title pt-3">
          <h5 className="heading">
            {location.pathname === '/management-company'
              ? 'Companies'
              : 'Candidates'}
          </h5>
        </div>
      </div>

      <TextField
        variant="outlined"
        size="small"
        id="input-with-icon-textfield1-1"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          )
        }}
      />

      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="table-responsive-md">
            <PerfectScrollbar>
              <Table className="table table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    {location.pathname === '/management-company' && (
                      <>
                        <th className="text-center">Company ID</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th className="text-center">Job Location</th>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <th className="text-center">Candidate ID</th>
                        <th>Name</th>
                        <th>Job Title</th>
                        <th className="text-center">Location</th>
                        <th className="text-center">Availability</th>
                      </>
                    )}

                    <th className="text-center">Status</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-weight-bold text-center">#0001</td>
                    <td>Headhunters</td>
                    {location.pathname === '/management-company' && (
                      <>
                        <td>
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={projectLogo} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Client</td>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <td>IT Analyst</td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Immediately</td>
                        <td className="text-center">Active</td>
                      </>
                    )}

                    <td className="text-center">
                      <FontAwesomeIcon
                        onClick={toogleHeaderDrawer}
                        icon={['fas', 'arrow-circle-left']}
                        className="align-self-center font-size-lg d-30 pointer"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0002</td>
                    <td>Software Developer</td>
                    {location.pathname === '/management-company' && (
                      <>
                        <td>
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={projectLogo} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Lead</td>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <td>Software Developer</td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Unavailable</td>
                        <td className="text-center">Placed</td>
                      </>
                    )}
                    <td className="text-center">
                      <FontAwesomeIcon
                        onClick={toogleHeaderDrawer}
                        icon={['fas', 'arrow-circle-left']}
                        className="align-self-center font-size-lg d-30 pointer"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0003</td>
                    <td>Headhunters</td>
                    {location.pathname === '/management-company' && (
                      <>
                        <td>
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={projectLogo} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">In Discussion</td>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <td>Business Developer</td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">
                          Availabile from 20/01/2021
                        </td>
                        <td className="text-center">Placed</td>
                      </>
                    )}

                    <td className="text-center">
                      <FontAwesomeIcon
                        onClick={toogleHeaderDrawer}
                        icon={['fas', 'arrow-circle-left']}
                        className="align-self-center font-size-lg d-30 pointer"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0004</td>
                    <td>Software Developer</td>
                    {location.pathname === '/management-company' && (
                      <>
                        <td>
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={projectLogo} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Lead</td>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <td>IT Analyst</td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Immediately</td>
                        <td className="text-center">Active</td>
                      </>
                    )}

                    <td className="text-center">
                      <FontAwesomeIcon
                        onClick={toogleHeaderDrawer}
                        icon={['fas', 'arrow-circle-left']}
                        className="align-self-center font-size-lg d-30 pointer"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0005</td>
                    <td>Headhunters</td>
                    {location.pathname === '/management-company' && (
                      <>
                        <td>
                          <div className="avatar-icon-wrapper mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={projectLogo} />
                            </div>
                          </div>
                        </td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Client</td>
                      </>
                    )}

                    {location.pathname === '/management-candidate' && (
                      <>
                        <td>Software Developer</td>
                        <td className="text-center">London, UK</td>
                        <td className="text-center">Unavailable</td>
                        <td className="text-center">Active</td>
                      </>
                    )}
                    <td className="text-center">
                      <FontAwesomeIcon
                        onClick={toogleHeaderDrawer}
                        icon={['fas', 'arrow-circle-left']}
                        className="align-self-center font-size-lg d-30 pointer"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </PerfectScrollbar>
          </div>
          <div className="card-footer py-3 text-center">
            <Button size="small" className="btn-outline-second" variant="text">
              View more
            </Button>
          </div>
        </Card>
      </div>

      <div className="app-drawer-content-management">
        <Tooltip arrow title="Close" placement="left">
          <Button
            size="small"
            onClick={toogleHeaderDrawer}
            className="close-drawer-btn bg-white p-0 d-30"
            id="CloseDrawerTooltip">
            <div
              className={clsx('navbar-toggler hamburger hamburger--elastic', {
                'is-active': headerDrawerToggle
              })}>
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </div>
          </Button>
        </Tooltip>
        {/* <Tooltip arrow title="Close drawer" placement="left">
          <div>
            <FontAwesomeIcon
              icon={['fas', 'arrow-circle-left']}
              className="align-self-center font-size-md left-arrow d-40"
            />
          </div>
        </Tooltip> */}

        <div className="vh-100 shadow-overflow">
          <PerfectScrollbar>
            <div className="mb-5">
              <div className="bg-night-sky">
                <div className="px-4 header-nav-wrapper header-nav-wrapper-lg rounded navbar-dark">
                  <div className="app-nav-logo">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      title="Bamburgh React Admin Dashboard with Material-UI PRO"
                      className="app-nav-logo">
                      <div className="app-nav-logo--icon rounded-sm">
                        <img
                          alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                          src={projectLogo}
                        />
                      </div>
                      <div className="app-nav-logo--text">
                        {/* <span>General</span> */}

                        <b>Voxpro</b>
                      </div>
                    </a>
                  </div>

                  <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
                    <span className="d-none d-lg-block w-43">
                      {/* <Button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="text-uppercase font-weight-bold text-nowrap font-size-xs shadow-sm-dark btn-warning">
                        My account
                      </Button> */}
                      <Select
                        options={actionOptions}
                        value={actionFilter}
                        onChange={actions}
                        placeholder="Actions"
                        styles={{
                          menu: (provided) => ({ ...provided, zIndex: 9999 })
                        }}
                      />
                    </span>
                  </div>
                </div>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Card className="shadow-xxl pt-1 px-3 rounded-0 nav-management">
                      <List
                        component="div"
                        className="nav-line d-flex nav-line-alt">
                        <ListItem
                          className="pb-2"
                          button
                          disableRipple
                          selected={activeTab === '0'}
                          onClick={() => {
                            toggle('0');
                          }}>
                          <span className="font-size-md">Details</span>
                          <div className="divider" />
                        </ListItem>
                        <ListItem
                          className="pb-2"
                          button
                          disableRipple
                          selected={activeTab === '1'}
                          onClick={() => {
                            toggle('1');
                          }}>
                          <span className="font-size-md">Notes(5)</span>
                          <div className="divider" />
                        </ListItem>
                        <ListItem
                          className="pb-2"
                          button
                          disableRipple
                          selected={activeTab === '2'}
                          onClick={() => {
                            toggle('2');
                          }}>
                          <span className="font-size-md">
                            {location.pathname === '/management-company'
                              ? 'Profile'
                              : 'Resume'}
                          </span>
                          <div className="divider" />
                        </ListItem>
                        <ListItem
                          className="pb-2"
                          button
                          disableRipple
                          selected={activeTab === '3'}
                          onClick={() => {
                            toggle('3');
                          }}>
                          <span className="font-size-md">
                            {location.pathname === '/management-company'
                              ? 'Company Connections'
                              : 'Experience'}
                          </span>
                          <div className="divider" />
                        </ListItem>
                        <ListItem
                          className="pb-2"
                          button
                          disableRipple
                          selected={activeTab === '4'}
                          onClick={() => {
                            toggle('4');
                          }}>
                          <span className="font-size-md">Documents</span>
                          <div className="divider" />
                        </ListItem>
                      </List>

                      {/* <div
                        className={clsx('tab-item-wrapper', {
                          active: activeTab === '0'
                        })}
                        index={0}>
                        <div className="text-center my-5">
                          <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                            <FontAwesomeIcon
                              icon={['fas', 'lightbulb']}
                              className="d-flex align-self-center font-size-xxl"
                            />
                          </div>
                          <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                            Tabbed Section
                          </h6>
                          <p className="text-black-50 font-size-lg mb-0">
                            You have pending actions to take care of.
                          </p>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-item-wrapper', {
                          active: activeTab === '1'
                        })}
                        index={1}>
                        <div className="text-center my-5">
                          <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                            <FontAwesomeIcon
                              icon={['far', 'user']}
                              className="d-flex align-self-center font-size-xxl"
                            />
                          </div>
                          <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                            Tabbed Section
                          </h6>
                          <p className="text-black-50 font-size-lg mb-0">
                            You have pending actions to take care of.
                          </p>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-item-wrapper', {
                          active: activeTab === '2'
                        })}
                        index={2}>
                        <div className="text-center my-5">
                          <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-info shadow-info-sm text-info mb-2 d-90">
                            <FontAwesomeIcon
                              icon={['far', 'gem']}
                              className="d-flex align-self-center font-size-xxl"
                            />
                          </div>
                          <h6 className="font-weight-bold font-size-xxl mb-1 mt-3 text-info">
                            Tabbed Section
                          </h6>
                          <p className="text-black-50 font-size-lg mb-0">
                            You have pending actions to take care of.
                          </p>
                        </div>
                      </div> */}
                    </Card>
                  </Grid>
                </Grid>
              </div>

              <div>
                <a
                  href="!#"
                  className="float-right p-3 a-blue"
                  onClick={(e) => e.preventDefault()}>
                  Add card{' '}
                  <FontAwesomeIcon
                    icon={['fas', 'plus-square']}
                    className="ml-2 align-self-center font-size-md"
                  />
                </a>
              </div>
              <div className="divider bg-white-10" />
              <div className="px-3 py-3">
                <Grid container spacing={1} wrap={width <= 768 || 'nowrap'}>
                  <Grid item sm={3} xs={12}>
                    <Card className="p-3 h-100 text-center">
                      <div className="display-4 font-weight-bold">12</div>
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Task
                      </div>
                    </Card>
                  </Grid>

                  {location.pathname === '/management-company' && (
                    <>
                      <Grid item sm={3} xs={12}>
                        <Card className="p-3 h-100 text-center">
                          <div className="display-4 font-weight-bold">19</div>
                          <div className="font-weight-bold font-size-sm text-uppercase">
                            Live Jobs
                          </div>
                        </Card>
                      </Grid>

                      <Grid item sm={3} xs={12}>
                        <Card className="p-3 h-100 text-center">
                          <div className="display-4 font-weight-bold">6</div>
                          <div className="font-weight-bold font-size-sm text-uppercase">
                            Submission
                          </div>
                        </Card>
                      </Grid>
                    </>
                  )}

                  {location.pathname === '/management-candidate' && (
                    <>
                      <Grid item sm={3} xs={12}>
                        <Card className="p-3 h-100 text-center">
                          <div className="display-4 font-weight-bold">19</div>
                          <div className="font-weight-bold font-size-sm text-uppercase">
                            Internal Submission
                          </div>
                        </Card>
                      </Grid>

                      <Grid item sm={3} xs={12}>
                        <Card className="p-3 h-100 text-center">
                          <div className="display-4 font-weight-bold">6</div>
                          <div className="font-weight-bold font-size-sm text-uppercase">
                            Client Submission
                          </div>
                        </Card>
                      </Grid>
                    </>
                  )}

                  <Grid item sm={3} xs={12}>
                    <Card className="p-3 h-100 text-center">
                      <div className="display-4 font-weight-bold">3</div>
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Interviews
                      </div>
                    </Card>
                  </Grid>

                  <Grid item sm={3} xs={12}>
                    <Card className="p-3 h-100 text-center">
                      <div className="display-4 font-weight-bold">1</div>
                      <div className="font-weight-bold font-size-sm text-uppercase">
                        Placements
                      </div>
                    </Card>
                  </Grid>
                </Grid>

                <Card className="card-box bg-secondary mt-3">
                  <div className="card-header-alt d-flex justify-content-between p-4">
                    <div>
                      <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                        Message Tracking
                      </h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="text"
                        className="p-0 d-30 border-0 btn-transition-none text-second"
                        disableRipple>
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-v']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="px-3 pb-3">
                    <div className="scroll-area scroll-h rounded bg-white shadow-overflow">
                      <PerfectScrollbar>
                        <div className="p-3">
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                          <div className="divider my-3" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                {/* <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a> */}
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                          <div className="divider my-3" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                          <div className="divider my-3" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                          <div className="divider my-3" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                          <div className="divider my-3" />
                          <div className="d-flex justify-content-between">
                            <div>
                              <div className="font-weight-bold">
                                <FontAwesomeIcon
                                  icon={['far', 'envelope']}
                                  className="font-size-sm mr-2"
                                />
                                <FontAwesomeIcon
                                  icon={['fas', 'arrow-right']}
                                  className="font-size-sm mr-2 text-warning"
                                />
                                <a
                                  href="#/"
                                  className="a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Job #247: Java Developer
                                </a>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>From: Nazim Kidd</span>
                              </div>
                              <div className="d-flex pt-2 align-items-center">
                                <FontAwesomeIcon
                                  icon={['fas', 'user']}
                                  className="font-size-sm mr-2"
                                />
                                <span>To:</span>
                                <a
                                  href="#/"
                                  className="ml-2 a-blue"
                                  onClick={(e) => e.preventDefault()}>
                                  Nazim Kidd
                                </a>
                              </div>
                            </div>
                            <div>
                              <p className="text-black-50">{currentDate}</p>
                              <FontAwesomeIcon
                                icon={['fas', 'paperclip']}
                                className="ml-2 align-self-center font-size-lg float-right"
                              />
                            </div>
                          </div>
                        </div>
                      </PerfectScrollbar>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>

      <div
        onClick={toogleHeaderDrawer}
        className={clsx('app-drawer-overlay', {
          'is-active': headerDrawerToggle
        })}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle,
  closeModal: state.ThemeOptions.closeModal
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable)),

  setCloseModal: (enable) => dispatch(setCloseModal(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDrawer);
