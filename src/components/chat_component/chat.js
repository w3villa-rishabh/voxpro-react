import PerfectScrollbar from 'react-perfect-scrollbar';

import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  Button,
  TextField,
  Tooltip,
  List,
  InputAdornment,
  ListItem,
  Grid
} from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import people2 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-2.jpg';

import { getCurrentUser } from 'helper';

export default function ChatPageComponents() {
  const [currentUser] = useState(getCurrentUser());
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);

  const toggleSidebarMenu = () => setIsSidebarMenuOpen(!isSidebarMenuOpen);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  return (
    <>
      <div className="app-inner-content-layout app-inner-content-layout-fixed chat-menu">
        <div
          className={clsx(
            'app-inner-content-layout--sidebar bg-white app-inner-content-layout--sidebar__md order-1',
            { 'layout-sidebar-open': isSidebarMenuOpen }
          )}>
          <TextField
            variant="outlined"
            size="small"
            id="input-with-icon-textfield1"
            placeholder="Search"
            className="px-4 pt-4"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              )
            }}
          />
          <div className="divider my-2" />
          <div
            className="scroll-area"
            style={{
              height: 'calc(100vh - 160px)',
              borderRadius: 'inherit'
            }}>
            <PerfectScrollbar>
              <div className="px-3 pt-2">
                <List
                  component="div"
                  className="nav-pills nav-transparent-alt flex-column">
                  <ListItem className="pt-1 px-0 pb-3">
                    <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                      Recent Chats
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-danger badge-circle">
                          Offline
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Mandy Erle
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Mandyrle@gma.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-success badge-circle">
                          Online
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Adella Galen
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Galen@example.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-danger badge-circle">
                          Offline
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Mandy Erle
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Mandyrle@gma.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-success badge-circle">
                          Online
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Oliver Battle
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Galen@example.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-warning badge-circle">
                          Idle
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Napoleon Stacey
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Napoleon@test.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem
                    component="a"
                    button
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="px-0 text-black">
                    <div className="align-box-row w-100">
                      <div className="avatar-icon-wrapper avatar-icon-sm">
                        <div className="badge badge-warning badge-circle">
                          Idle
                        </div>
                        <div className="avatar-icon rounded-circle">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div className="pl-2">
                        <span className="d-block font-size-sm font-weight-bold">
                          Neancy Stacey
                          <span className="d-block font-weight-normal font-size-xs text-black-50">
                            (Neancy@test.com)
                          </span>
                        </span>
                      </div>
                    </div>
                  </ListItem>
                </List>
                {(currentUser.role === 'company' ||
                  currentUser.role === 'agency') && (
                  <List
                    component="div"
                    className="nav-pills nav-transparent-alt flex-column">
                    <ListItem className="pt-1 px-0 pb-3">
                      <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                        {currentUser.role === 'company' ||
                        currentUser.role === 'agency'
                          ? 'Teammates'
                          : 'Connections'}
                      </div>
                    </ListItem>

                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 text-black">
                      <div className="align-box-row w-100">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="badge badge-success badge-circle">
                            Online
                          </div>
                          <div className="avatar-icon rounded-circle">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div className="pl-2">
                          <span className="d-block font-size-sm font-weight-bold">
                            Adella Galen
                            <span className="d-block font-weight-normal font-size-xs text-black-50">
                              (Galen@example.com)
                            </span>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 text-black">
                      <div className="align-box-row w-100">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="badge badge-danger badge-circle">
                            Offline
                          </div>
                          <div className="avatar-icon rounded-circle">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="pl-2">
                          <span className="d-block font-size-sm font-weight-bold">
                            Mandy Erle
                            <span className="d-block font-weight-normal font-size-xs text-black-50">
                              (Mandyrle@gma.com)
                            </span>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 text-black">
                      <div className="align-box-row w-100">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="badge badge-success badge-circle">
                            Online
                          </div>
                          <div className="avatar-icon rounded-circle">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <div className="pl-2">
                          <span className="d-block font-size-sm font-weight-bold">
                            Oliver Battle
                            <span className="d-block font-weight-normal font-size-xs text-black-50">
                              (Galen@example.com)
                            </span>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 text-black">
                      <div className="align-box-row w-100">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="badge badge-warning badge-circle">
                            Idle
                          </div>
                          <div className="avatar-icon rounded-circle">
                            <img alt="..." src={avatar4} />
                          </div>
                        </div>
                        <div className="pl-2">
                          <span className="d-block font-size-sm font-weight-bold">
                            Napoleon Stacey
                            <span className="d-block font-weight-normal font-size-xs text-black-50">
                              (Napoleon@test.com)
                            </span>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                    <ListItem
                      component="a"
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="px-0 text-black">
                      <div className="align-box-row w-100">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="badge badge-danger badge-circle">
                            Offline
                          </div>
                          <div className="avatar-icon rounded-circle">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div className="pl-2">
                          <span className="d-block font-size-sm font-weight-bold">
                            Mandy Erle
                            <span className="d-block font-weight-normal font-size-xs text-black-50">
                              (Mandyrle@gma.com)
                            </span>
                          </span>
                        </div>
                      </div>
                    </ListItem>
                  </List>
                )}
                <div className="divider my-3" />
                <List
                  component="div"
                  className="nav-pills nav-neutral-primary flex-column">
                  <ListItem className="pt-1 px-0 pb-3">
                    <div className="text-uppercase font-size-sm text-primary font-weight-bold">
                      Statistics
                    </div>
                  </ListItem>
                </List>
                <Grid container spacing={2} className="font-size-xs">
                  <Grid item lg={6}>
                    <Card className="shadow-success-sm card-box text-center p-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">345</b>
                        <span className="text-black-50 d-block">
                          Total Connection
                        </span>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item lg={6}>
                    <Card className="shadow-danger-sm card-box text-center p-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">70</b>
                        <span className="text-black-50 d-block">
                          Teammates Connection
                        </span>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="font-size-xs">
                  <Grid item lg={6}>
                    <Card className="shadow-success-sm card-box text-center p-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'user']}
                          className="font-size-xxl text-success"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">20</b>
                        <span className="text-black-50 d-block">
                          Pending Connection
                        </span>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item lg={6}>
                    <Card className="shadow-danger-sm card-box text-center p-3">
                      <div>
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="font-size-xxl text-danger"
                        />
                      </div>
                      <div className="mt-2 line-height-sm">
                        <b className="font-size-lg">12</b>
                        <span className="text-black-50 d-block">
                          Suggested Connections
                        </span>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
        <div className="app-inner-content-layout--main order-3 order-lg-2 card-box bg-secondary">
          <div className="card-header rounded-0 bg-white p-3 border-bottom">
            <div className="btn-md-pane d-lg-none px-1 order-0">
              <Button
                onClick={toggleSidebarMenu}
                size="small"
                className="btn-primary p-0 btn-icon d-40 mr-2">
                <FontAwesomeIcon icon={['fas', 'bars']} />
              </Button>
            </div>
            <div className="card-header--title">
              <small>Messenger</small>
              <b>Talking to Kate</b>
            </div>

            {/* <div className="card-header--actions"> */}
            <div className="card-header--actions btn-md-pane d-lg-none px-1 order-0">
              <Button
                onClick={toggleSidebarMenu2}
                size="small"
                className="btn-primary p-0 btn-icon d-40">
                <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
              </Button>
            </div>
            {/* <Tooltip title="Add in conversation">
                <Button size="small" className="btn-first btn-pill d-40 p-0">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </Tooltip> */}
            {/* </div> */}
          </div>
          <PerfectScrollbar>
            <div className="chat-wrapper p-3">
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
                      <p>I'm attaching the pictures you requested below:</p>
                      <Card className="mt-3 mb-2 pt-2 pb-2 text-center">
                        <div>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img-fluid rounded m-1 shadow-sm"
                              src={people1}
                              width="54"
                            />
                          </a>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
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
          </PerfectScrollbar>
          <div className="bg-white">
            <div className="card-footer p-0">
              <div
                className={clsx(
                  'd-flex align-items-center transition-base px-4 py-2 position-relative',
                  { 'bg-secondary': inputBg }
                )}>
                <div className="avatar-icon-wrapper avatar-initials mr-3">
                  <div className="avatar-icon bg-neutral-dark text-black">
                    H
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
        </div>
        <div
          className={clsx(
            'app-inner-content-layout--sidebar pos-r order-2 order-lg-3 bg-white app-inner-content-layout--sidebar__sm',
            { 'layout-sidebar-open': isSidebarMenuOpen2 }
          )}>
          <div className="text-uppercase font-size-sm text-primary font-weight-bold my-3 px-3">
            Connections list
          </div>
          <PerfectScrollbar>
            <List component="div" className="nav-neutral-first flex-column">
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Mandy Erle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-success badge-circle">
                      Online
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Oliver Battle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        2 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-warning badge-circle">Idle</div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Napoleon Stacey
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Mandy Erle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Niyan Malik
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Adam Smith
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-success badge-circle">
                      Online
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Adella Galen
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        5 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Mandy Erle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-success badge-circle">
                      Online
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar3} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Oliver Battle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        2 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-warning badge-circle">Idle</div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar4} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Napoleon Stacey
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-danger badge-circle">
                      Offline
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Mandy Erle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        3 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="align-box-row">
                  <div className="avatar-icon-wrapper avatar-icon-sm">
                    <div className="badge badge-success badge-circle">
                      Online
                    </div>
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <span className="d-block text-black font-size-sm font-weight-bold">
                      Oliver Battle
                      <div className="d-block text-black-50 font-size-xs font-weight-normal">
                        2 hours ago
                      </div>
                    </span>
                  </div>
                </div>
              </ListItem>
            </List>
          </PerfectScrollbar>
        </div>

        <div
          onClick={toggleSidebarMenu}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen
          })}
        />
        <div
          onClick={toggleSidebarMenu2}
          className={clsx('sidebar-inner-layout-overlay', {
            active: isSidebarMenuOpen2
          })}
        />
      </div>
    </>
  );
}
