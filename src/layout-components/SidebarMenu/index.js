import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import SidebarUserbox from '../SidebarUserbox';
import { getCurrentUser } from 'helper';
import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import WorkIcon from '@material-ui/icons/Work';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import SecurityIcon from '@material-ui/icons/Security';
import ChatIcon from '@material-ui/icons/Chat';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile, sidebarUserbox } = props;
  const [currentUser] = useState(getCurrentUser());

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [IR35, setIR35] = useState(false);
  const [requestInfo, setRequestInfo] = useState(false);
  const [search, setSearch] = useState(false);
  const [jobOpen, setJobOpen] = useState(false);
  const [availability, setAvailability] = useState(false);
  const [GDRP, setGDRP] = useState(false);
  const [placementM, setPlacementM] = useState(false);
  const [placement, setPlacement] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <>
      <PerfectScrollbar>
        {sidebarUserbox && <SidebarUserbox />}
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>Onboarding</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/dashboard">
                <span className="sidebar-icon">
                  <DashboardIcon />
                </span>
                Dashboard
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  setDashboardOpen(!dashboardOpen);
                }}
                className={clsx({ active: dashboardOpen })}>
                <span className="sidebar-icon">
                  <PostAddIcon />
                </span>
                {currentUser.role === 'candidate' && (
                  <span className="sidebar-item-label">
                    Onboarding Documents
                  </span>
                )}
                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company') && (
                  <span className="sidebar-item-label">Documents</span>
                )}
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={dashboardOpen}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/documents">
                      My Documents
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/upload">
                      Upload Documents
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  setIR35(!IR35);
                }}
                className={clsx({ active: IR35 })}>
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                <span className="sidebar-item-label">IR35</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={IR35}>
                {currentUser.role === 'candidate' && (
                  <ul>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/ir35-verify">
                        New IR35 Submission
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/candidate-history">
                        IR35 History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/candidate-enquiries">
                        IR35 Enquiries
                      </NavLink>
                    </li>
                  </ul>
                )}

                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company1') && (
                  <ul>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/ir35-verify">
                        Pending
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        History
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Query
                      </NavLink>
                    </li>
                  </ul>
                )}
              </Collapse>
            </li>

            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  setRequestInfo(!requestInfo);
                }}
                className={clsx({ active: IR35 })}>
                <span className="sidebar-icon">
                  <BallotTwoToneIcon />
                </span>
                <span className="sidebar-item-label">
                  Request for Information
                </span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={requestInfo}>
                <ul>
                  <li>
                    <NavLink onClick={toggleSidebarMobile} to="/new-request">
                      New Request
                    </NavLink>
                  </li>
                  {currentUser.role === 'candidate' && (
                    <div>
                      <li>
                        <NavLink
                          onClick={toggleSidebarMobile}
                          to="/request-history">
                          Request History
                        </NavLink>
                      </li>
                    </div>
                  )}

                  {currentUser.role === 'agency' && (
                    <div>
                      <li>
                        <NavLink
                          onClick={toggleSidebarMobile}
                          to="/request-information">
                          Pending
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleSidebarMobile}
                          to="/request-information">
                          History
                        </NavLink>
                      </li>
                    </div>
                  )}
                </ul>
              </Collapse>
            </li>
            {currentUser.role === 'candidate' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setSearch(!search);
                  }}
                  className={clsx({ active: search })}>
                  <span className="sidebar-icon">
                    <SearchIcon />
                  </span>
                  <span className="sidebar-item-label">Search</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={search}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/search-companies">
                        Search Companies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/search-agencies">
                        Search Agencies
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            {currentUser.role === 'agency' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setPlacementM(!placementM);
                  }}
                  className={clsx({ active: placementM })}>
                  <span className="sidebar-icon">
                    <TransferWithinAStationIcon />
                  </span>
                  <span className="sidebar-item-label">
                    Placement Management
                  </span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={placementM}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Pending
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        History
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            {currentUser.role === 'agency' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setPlacement(!placement);
                  }}
                  className={clsx({ active: placement })}>
                  <span className="sidebar-icon">
                    <EmojiPeopleIcon />
                  </span>
                  <span className="sidebar-item-label">Management</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={placement}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Companies
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Candidates
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            <li>
              <a
                href="javascript:void(0)"
                onClick={() => {
                  setJobOpen(!jobOpen);
                }}
                className={clsx({ active: jobOpen })}>
                <span className="sidebar-icon">
                  <WorkIcon />
                </span>
                <span className="sidebar-item-label">Jobs</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={jobOpen}>
                {currentUser.role === 'candidate' && (
                  <ul>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/search-job">
                        Search Job
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/save-jobs">
                        Saved Job
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/applied-jobs">
                        Job Applications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/placements">
                        Placements
                      </NavLink>
                    </li>
                  </ul>
                )}

                {currentUser.role === 'agency' && (
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Live
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        History
                      </NavLink>
                    </li>
                  </ul>
                )}
              </Collapse>
            </li>

            {currentUser.role === 'agency' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setSearch(!search);
                  }}
                  className={clsx({ active: search })}>
                  <span className="sidebar-icon">
                    <SearchIcon />
                  </span>
                  <span className="sidebar-item-label">Search</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={search}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Candidates
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/search-companies">
                        Companies
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            {currentUser.role === 'candidate' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setAvailability(!availability);
                  }}
                  className={clsx({ active: availability })}>
                  <span className="sidebar-icon">
                    <SecurityIcon />
                  </span>
                  <span className="sidebar-item-label">Calendar and Tasks</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={availability}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/task-calendar">
                        Availability Calendar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="/tasks">
                        My Tasks
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            {currentUser.role === 'candidate' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setGDRP(!GDRP);
                  }}
                  className={clsx({ active: GDRP })}>
                  <span className="sidebar-icon">
                    <SecurityIcon />
                  </span>
                  <span className="sidebar-item-label">GDPR</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={GDRP}>
                  <ul>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Who Has My Info
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        Request Removal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleSidebarMobile}
                        to="/request-information">
                        GDPR Setting
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}

            {currentUser.role === 'agency' && (
              <li>
                <NavLink
                  activeClassName="active"
                  onClick={toggleSidebarMobile}
                  className="nav-link-simple"
                  to="/request-information">
                  <span className="sidebar-icon">
                    <SecurityIcon />
                  </span>
                  GDPR
                  <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                    <ChevronRightTwoToneIcon />
                  </span>
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                activeClassName="active"
                onClick={toggleSidebarMobile}
                className="nav-link-simple"
                to="/request-information">
                <span className="sidebar-icon">
                  <ChatIcon />
                </span>
                Chat
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            {currentUser.role === 'candidate' && (
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setSetting(!setting);
                  }}
                  className={clsx({ active: setting })}>
                  <span className="sidebar-icon">
                    <FontAwesomeIcon icon={['fas', 'cog']} />
                  </span>
                  <span className="sidebar-item-label">Settings</span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={setting}>
                  <ul>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="#">
                        Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="#">
                        Notifications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={toggleSidebarMobile} to="#">
                        Information
                      </NavLink>
                    </li>
                  </ul>
                </Collapse>
              </li>
            )}
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox,

  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
