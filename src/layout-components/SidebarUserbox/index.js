/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Menu,
  Typography,
  Tabs,
  Tab,
  TextField,
  Card,
  Button,
  Tooltip,
  Grid,
  CardContent,
  List,
  Table,
  InputAdornment
} from '@material-ui/core';
import { connect } from 'react-redux';
import { closeMiniProfile } from '../../reducers/ThemeOptions';
import 'date-fns';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import { useHistory } from 'react-router-dom';
import OnlineAndAvailability from '../../components/profiles/availability';
import PropTypes from 'prop-types';

import avatar1 from '../../assets/images/avatars/default.png';
import avatar2 from '../../assets/images/avatars/default.png';
import stock3 from '../../assets/images/stock-photos/stock-3.jpg';

import { getCurrentUser } from '../../helper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <div>{children}</div>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const SidebarUserbox = (props) => {
  const history = useHistory();

  const [currentUser] = useState(getCurrentUser());
  const { setCloseMiniProfile, miniProfile } = props;

  const [anchorElMenu1, setAnchorElMenu1] = useState(null);
  const [value, setValue] = useState(0);
  const editValue = `Senior Business Analyst with 15 years experience in the retail industry and FMCG industry, with project spending 5-10 million`;

  const [editSocialProfile, setEditProfile] = useState(editValue);
  const CHARACTER_LIMIT = 255;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // parse data parent to child
    // childRef.current.showAlert();
  };

  const handleClickMenu1 = (event) => {
    // if (currentUser.role !== 'company') {
    setAnchorElMenu1(event.currentTarget);
    setEditProfile(editValue);
    // }
  };

  const handleCloseMenu1 = () => {
    setAnchorElMenu1(null);
    setCloseMiniProfile(false);
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('resize'));
  });

  useEffect(() => {
    console.log('anchorElMenu1', anchorElMenu1);
    if (miniProfile) {
      handleCloseMenu1();
    }
    console.log('miniProfile', miniProfile);
  }, [anchorElMenu1, miniProfile]);

  const handleProceed = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-profile/',
      state: {
        id
      }
    });
  };

  const handleCompany = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-company/',
      state: {
        id
      }
    });
  };

  return (
    <>
      <div className="app-sidebar--userbox">
        <Box className="card-tr-actions">
          {currentUser.role === 'candidate' && (
            <Button
            variant="text"
            onClick={handleClickMenu1}
            className="ml-2 p-0 d-30 border-0 btn-transition-none text-white-50"
            disableRipple>
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </Button>                
          )}
          {(currentUser.role === 'agency' ||
                            currentUser.role === 'company')  && (
            <Button
            variant="text"
            onClick={(e) => handleCompany(e, currentUser.company_id)}
            className="ml-2 p-0 d-30 border-0 btn-transition-none text-white-50"
            disableRipple>
            <FontAwesomeIcon
              icon={['fas', 'ellipsis-h']}
              className="font-size-lg"
            />
          </Button>                
          )}

          
          <div className="mt-5">
            <Menu
              anchorEl={anchorElMenu1}
              keepMounted
              open={Boolean(anchorElMenu1)}
              // onClose={handleCloseMenu1}
              classes={{ list: 'p-0' }}
              getContentAnchorEl={null}
              className="profile-menu-card"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}>
              <div className="dropdown-menu-xxl profile-menu">
                <div className="mini-header">
                  <div className="card-badges card-badges-top">
                    <FontAwesomeIcon
                      icon={['fas', 'times']}
                      className="pointer mr-3"
                      onClick={handleCloseMenu1}
                    />
                  </div>
                  <span>Mini Profile</span>
                </div>
                <List
                  component="div"
                  className="text-left d-block pt-0 mini-profile-list">
                  {/* <PerfectScrollbar> */}
                  <Grid container spacing={2}>
                    <Grid item sm={5} className="p-0">
                      <Card className="card-profile">
                        <div className="card-img-wrapper h-100px">
                          <img
                            alt="..."
                            className="card-img-top img-fit-container"
                            src={stock3}
                          />
                        </div>
                        <CardContent className="text-center card-body-avatar min-profile-body">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="avatar-icon-wrapper rounded-circle profile-icon d-100">
                            <div className="avatar-icon rounded-circle">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={avatar1}
                              />
                            </div>
                          </a>
                          <h3 className="font-weight-bold font-size-xxl mb-0">
                            {currentUser.first_name} {currentUser.last_name}
                          </h3>

                          <p className="font-12 font-weight-bold mb-0">
                            Business Analyst | London, United Kingdom
                          </p>
                          {currentUser.role === 'candidate' && (
                            <div>
                              <OnlineAndAvailability />
                            </div>
                          )}
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="textfield-user"
                            multiline
                            rowsMax={4}
                            inputProps={{
                              style: { fontSize: 10 },
                              maxLength: CHARACTER_LIMIT
                            }}
                            onChange={(event) => {
                              setEditProfile(event.target.value);
                            }}
                            value={editSocialProfile}
                            size="small"
                            helperText={`${
                              CHARACTER_LIMIT - editSocialProfile.length
                            } ${
                              'characters remaining' +
                              ' (' +
                              CHARACTER_LIMIT +
                              ' Max)'
                            }`}
                          />
                          <h4 className="font-size-sm font-weight-bold my-1 d-inline-block">
                            SOCIAL MEDIA PROFILES
                          </h4>
                          <div>
                            <Tooltip title="Github">
                              <Button className="btn-github text-github btn-pill bg-white d-40 p-0">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Instagram" arrow>
                              <Button className="btn-instagram text-instagram btn-pill bg-white d-40 p-0 mx-2">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Google" arrow>
                              <Button className="btn-google text-google btn-pill bg-white d-40 p-0">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'google']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Add">
                              <Button className="btn-success btn-icon btn-transition-none btn-pill d-40 p-0 m-2">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus']}
                                    className="font-size-lg"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                          </div>

                          <div className="divider my-1" />
                          {currentUser.role === 'candidate' && (
                            <div>
                              <h4 className="font-size-sm font-weight-bold my-1">
                                SKILLS
                              </h4>

                              <div className="text-center my-1">
                                <div className="badge badge-pill badge-neutral-first text-first mx-1">
                                  Web developer
                                </div>
                                <div className="badge badge-pill badge-neutral-warning text-warning mx-1">
                                  Javascript
                                </div>
                                <div className="badge badge-pill badge-neutral-danger text-danger mx-1">
                                  Angular
                                </div>
                              </div>

                              <div className="card-body-button-wrapper">
                                <Button
                                  size="small"
                                  className="btn-success btn-pill text-nowrap px-5 shadow-none border-3 border-white">
                                  + Add Skills
                                </Button>
                              </div>
                            </div>
                          )}
                          <div className="divider my-2" />
                          {(currentUser.role === 'agency' ||
                            currentUser.role === 'company') && (
                            <div className="align-content-center d-flex justify-content-center">
                              <Button
                                variant="contained"
                                size="small"
                                className="btn-pill m-1 btn-primary">
                                Connect
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                className="btn-pill m-1">
                                Message
                              </Button>
                              <Button
                                variant="contained"
                                size="small"
                                className="btn-pill m-1">
                                More..
                              </Button>
                            </div>
                          )}
                          {currentUser.role === 'candidate' && (
                            <Button
                              onClick={() => {
                                history.push('/view-profile');
                                handleCloseMenu1();
                              }}
                              variant="text"
                              className="btn-outline-first mt-2">
                              View complete profile
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </Grid>
                    {currentUser.role === 'candidate' && (
                      <Grid item sm={7}>
                        <div className="card-header-profile">
                          <div className="card-header--title">
                            <Tabs
                              className="nav-tabs-primary"
                              value={value}
                              variant="fullWidth"
                              onChange={handleChange}>
                              <Tab label="Overview" />
                              <Tab label="Experience" />
                              <Tab label="Education" />
                            </Tabs>
                          </div>
                        </div>

                        <div className="pt-2">
                          <TabPanel value={value} index={0}>
                            <Card>
                              <div className="mb-2">
                                <Grid container spacing={1} className="p-2">
                                  <Grid item md={4}>
                                    <Card className="card-box text-black-50 p-2">
                                      <div className="display-4 text-black font-weight-bold">
                                        31
                                      </div>
                                      <div className="divider mt-2 border-1 mb-2 w-25 bg-first rounded border-first" />
                                      <div className="font-weight-bold font-12 text-uppercase">
                                        YEARS OF
                                        <br />
                                        EXPERIENCE
                                      </div>
                                    </Card>
                                  </Grid>
                                  <Grid item md={4}>
                                    <Card className="card-box text-black-50 p-2">
                                      <div className="display-4 text-black font-weight-bold">
                                        68
                                      </div>
                                      <div className="divider mt-2 border-1 mb-2 w-25 bg-success rounded border-success" />
                                      <div className="font-weight-bold font-12 text-uppercase">
                                        QUALIFICATIONS &
                                        <br />
                                        CERTIFICATIONS
                                      </div>
                                    </Card>
                                  </Grid>
                                  <Grid item md={4}>
                                    <Card className="card-box text-black-50 p-2">
                                      <div className="display-4 text-black font-weight-bold">
                                        57
                                      </div>
                                      <div className="divider mt-2 border-1 mb-2 w-25 bg-warning rounded border-warning" />
                                      <div className="font-weight-bold font-12 text-uppercase nowrap">
                                        PROJECTS COMPLETED
                                        <br />
                                        YEAR TO DATE
                                      </div>
                                    </Card>
                                  </Grid>
                                </Grid>
                              </div>

                              <div className="card-img-wrapper">
                                <div className="bg-composed-wrapper bg-plum-plate border-0">
                                  <div className="bg-composed-img-2 bg-composed-wrapper--image" />
                                  <div className="bg-composed-wrapper--content text-center text-white px-2 py-4">
                                    <h1 className="font-size-xxl font-weight-bold py-2 mb-0">
                                      Employment Information
                                    </h1>
                                    <p className="mb-2 font-size-lg opacity-7">
                                      Current and Desired Employment details
                                    </p>
                                  </div>
                                  <div className="card-body-button-wrapper connect-btn">
                                    <Button
                                      size="small"
                                      className="btn-success btn-pill text-nowrap shadow-none border-3 border-white">
                                      Connect
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <CardContent className="text-center">
                                <Grid container spacing={1}>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['far', 'user']}
                                          className="font-size-xxl text-warning"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">Permanent</b>
                                        <span className="text-black-50 font-10 d-block">
                                          Desired Employment Type
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['fas', 'lemon']}
                                          className="font-size-xxl text-success"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">$3,586</b>
                                        <span className="text-black-50 font-10 d-block">
                                          Desired Annual Salary
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['far', 'chart-bar']}
                                          className="font-size-xxl text-info"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">
                                          City of London
                                        </b>
                                        <span className="text-black-50 font-10 d-block">
                                          Desired Location
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['far', 'user']}
                                          className="font-size-xxl text-warning"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">Permanent</b>
                                        <span className="text-black-50 font-10 d-block">
                                          Current Employment Type
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['fas', 'lemon']}
                                          className="font-size-xxl text-success"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">$57,500</b>
                                        <span className="text-black-50 font-10 d-block">
                                          Current Annual Salary
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                  <Grid item md={4}>
                                    <div className="bg-secondary p-2 text-center rounded">
                                      <div>
                                        <FontAwesomeIcon
                                          icon={['far', 'chart-bar']}
                                          className="font-size-xxl text-info"
                                        />
                                      </div>
                                      <div className="mt-2 line-height-sm">
                                        <b className="font-12">West London</b>
                                        <span className="text-black-50 font-10 d-block">
                                          Current Location
                                        </span>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </TabPanel>
                          <TabPanel value={value} index={1}>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'building']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar2}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    Senior business analyst
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'building']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar2}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    Business analyst
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'building']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar2}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    Business analyst
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                          </TabPanel>

                          <TabPanel value={value} index={2}>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'user']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar1}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    BSc Business & Economics
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'user']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar1}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    English Literature
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                            <Card className="mb-2 p-3">
                              <div className="d-flex">
                                <div className="card-badges card-badges-top">
                                  <FontAwesomeIcon icon={['fas', 'user']} />
                                </div>
                                <div className="avatar-icon-wrapper mr-3">
                                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                                    <div className="overflow-hidden">
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        src={avatar1}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-100">
                                  <a
                                    href="#/"
                                    onClick={(e) => e.preventDefault()}
                                    className="font-weight-bold font-size-lg"
                                    title="...">
                                    Secondary GCSE's
                                  </a>
                                  <span className="d-block">
                                    Freelance Designer, Mutual Inc.
                                  </span>
                                  <p className="text-black-50 font-12">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. In eget pharetra dolor, ac
                                    sollicitudin sem. Nulla facilisi.
                                  </p>
                                </div>
                              </div>
                            </Card>
                          </TabPanel>
                        </div>
                        {/* </Card> */}
                      </Grid>
                    )}
                    {currentUser.role === 'agency' && (
                      <Grid item sm={7}>
                        <div className="">
                          <Card className="card-box mt-3">
                            <div className="card-header py-3">
                              <div className="card-header--title font-size-lg">
                                <b>Live Roles</b>
                              </div>
                              <div className="card-header--actions">
                                <Grid container spacing={3}>
                                  <Grid item md={4} className="mtb">
                                    <span>
                                      <TextField
                                        variant="outlined"
                                        size="small"
                                        label="what"
                                        placeholder="e.g. 'nurse'"
                                        className="w-100 ht"
                                        InputProps={{
                                          startAdornment: (
                                            <InputAdornment position="start">
                                              <SearchTwoToneIcon />
                                            </InputAdornment>
                                          ),
                                          style: {
                                            height: '37px'
                                          }
                                        }}
                                      />
                                    </span>
                                  </Grid>
                                  <Grid item md={5} className="mtb">
                                    <TextField
                                      variant="outlined"
                                      size="small"
                                      label="where"
                                      placeholder="town or postcode"
                                      id="input-with-icon-textfield1"
                                      className="w-100 mb-4"
                                      InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <SearchTwoToneIcon />
                                          </InputAdornment>
                                        ),
                                        style: {
                                          height: '37px'
                                        }
                                      }}
                                    />
                                  </Grid>
                                  <Grid item md={1} className="mtb">
                                    <Button
                                      size="small"
                                      className="px-4 btn-primary mr-2"
                                      variant="contained">
                                      Search
                                    </Button>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>

                            <div className="table-responsive-md">
                              <div className="table-scrollbar">
                                <Table className="table table-hover mb-0">
                                  <thead>
                                    <tr>
                                      <th className="bg-white text-left">
                                        Date Posted
                                      </th>
                                      <th className="bg-white">Job Title</th>
                                      <th className="bg-white text-left">
                                        Location
                                      </th>
                                      <th className="bg-white text-center">
                                        Salary
                                      </th>
                                      <th className="bg-white text-center">
                                        Type
                                      </th>
                                      <th className="bg-white text-center">
                                        View
                                      </th>
                                      <th className="bg-white text-center">
                                        More
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>13/02/2021</td>
                                      <td>Business Developer</td>
                                      <td>Birmingham, UK</td>
                                      <td className="text-center">£4500</td>
                                      <td className="text-center">
                                        <div className="badge badge-neutral-danger text-danger">
                                          Temporary
                                        </div>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          View
                                        </Button>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          More
                                        </Button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>12/02/2021</td>
                                      <td>Software developer</td>
                                      <td>Glasgow, UK</td>
                                      <td className="text-center">£3000</td>
                                      <td className="text-center">
                                        <div className="badge badge-neutral-danger text-danger">
                                          Permanent
                                        </div>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          View
                                        </Button>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          More
                                        </Button>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>05/02/2021</td>
                                      <td>Business Developer</td>
                                      <td>London, UK</td>
                                      <td className="text-center">£4500</td>
                                      <td className="text-center">
                                        <div className="badge badge-neutral-danger text-danger">
                                          Contract
                                        </div>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          View
                                        </Button>
                                      </td>
                                      <td>
                                        <Button
                                          size="small"
                                          className="px-4 btn-neutral-primary"
                                          variant="contained">
                                          More
                                        </Button>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </Grid>
                    )}
                    {currentUser.role === 'company' && (
                      <Grid item sm={7}>
                        <div className="">
                          <Card className="card-box mt-3">
                            <div className="card-header py-3">
                              <div className="card-header--title font-size-lg">
                                <b>Responsibility</b>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </Grid>
                    )}
                  </Grid>
                  {/* </PerfectScrollbar> */}
                </List>
              </div>
            </Menu>
          </div>
        </Box>

        <div className="avatar-icon-wrapper avatar-icon-md">
          <div className="avatar-icon rounded-circle">
            <img
              className="pointer"
              alt="..."
              src={avatar2}
              onClick={(e) => handleProceed(e, currentUser.id)}
            />
          </div>
        </div>
        <div className="my-3 userbox-details">
          <span>
            {currentUser.first_name} {currentUser.last_name}
          </span>
          <small className="d-block font-12 text-white-50">
            Business Analyst | London, United Kingdom
          </small>
          <OnlineAndAvailability />
          <small className="d-block font-12 text-white-50">
            Senior Business Analyst with 15 years experience in the retail
            industry and FMCG industry, with project spending 5-10 million.
          </small>
        </div>
        <div className="py-1">
          <Tooltip title="Github">
            <Button className="m-1 btn-github text-github btn-pill bg-white d-30 p-0">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="font-size-xl"
                />
              </span>
            </Button>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <Button className="m-1 btn-instagram text-instagram btn-pill bg-white d-30 p-0 mx-2">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="font-size-xl"
                />
              </span>
            </Button>
          </Tooltip>
          <Tooltip title="Google" arrow>
            <Button className="m-1 btn-google text-google btn-pill bg-white d-30 p-0">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fab', 'google']}
                  className="font-size-xl"
                />
              </span>
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  miniProfile: state.ThemeOptions.miniProfile
});

const mapDispatchToProps = (dispatch) => ({
  setCloseMiniProfile: (enable) => dispatch(closeMiniProfile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUserbox);
