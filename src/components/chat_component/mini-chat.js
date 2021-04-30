import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, TextField, Tooltip } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { setHeaderDrawerToggle } from '../../reducers/ThemeOptions';

import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import people2 from '../../assets/images/stock-photos/people-3.jpg';
import people1 from '../../assets/images/stock-photos/people-2.jpg';

const ChatComponents = (props) => {
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
      <div className="app-inner-content-layout">
        <div className="app-drawer-content-message">
          <Tooltip arrow title="Close drawer" placement="left">
            <Button
              size="small"
              onClick={toogleHeaderDrawer}
              className="close-drawer-btn bg-white p-0 d-40"
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
                  <b className="text-success ml-1">Resolved conversations</b>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  headerDrawerToggle: state.ThemeOptions.headerDrawerToggle
});

const mapDispatchToProps = (dispatch) => ({
  setHeaderDrawerToggle: (enable) => dispatch(setHeaderDrawerToggle(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatComponents);