import React, { useState } from 'react';

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
  List
} from '@material-ui/core';

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import PropTypes from 'prop-types';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';

import stock3 from '../../assets/images/stock-photos/stock-3.jpg';

import { NavLink } from 'react-router-dom';
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

const SidebarUserbox = () => {
  const [currentUser] = useState(getCurrentUser());

  const [anchorElMenu1, setAnchorElMenu1] = useState(null);

  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickMenu1 = (event) => {
    setAnchorElMenu1(event.currentTarget);
  };
  const handleCloseMenu1 = () => {
    setAnchorElMenu1(null);
  };

  return (
    <>
      <div className="app-sidebar--userbox">
        <Box className="card-tr-actions">
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
          <div className="mt-5">
            <Menu
              anchorEl={anchorElMenu1}
              keepMounted
              open={Boolean(anchorElMenu1)}
              onClose={handleCloseMenu1}
              classes={{ list: 'p-0' }}
              getContentAnchorEl={null}
              className="mt-4"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}>
              <div className="dropdown-menu-xxl profile-menu m-3 p-0">
                <List component="div" className="text-left d-block p-0">
                  <Grid container spacing={2}>
                    <Grid item sm={5}>
                      <Card>
                        <div className="card-img-wrapper h-180px">
                          <img
                            alt="..."
                            className="card-img-top img-fit-container"
                            src={stock3}
                          />
                        </div>
                        <CardContent className="text-center card-body-avatar">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="avatar-icon-wrapper shadow-lg rounded-circle card-box-hover-rise d-130">
                            <div className="avatar-icon rounded-circle">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={avatar1}
                              />
                            </div>
                          </a>
                          <h3 className="font-weight-bold mt-4 mb-3">
                            {currentUser.first_name} {currentUser.last_name}
                          </h3>
                          <p className="font-12 font-weight-bold">
                            Business Analyst | London, United Kingdom
                          </p>
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="textfield-user"
                            label="Socila media profile"
                            multiline
                            rowsMax={4}
                          />
                          <h4 className="font-size-lg font-weight-bold my-2">
                            Social Media Profiles
                          </h4>
                          <div className="py-3">
                            <Tooltip title="Github">
                              <Button className="btn-github text-github btn-pill bg-white d-50 p-0">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'github']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Instagram" arrow>
                              <Button className="btn-instagram text-instagram btn-pill bg-white d-50 p-0 mx-2">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'instagram']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Google" arrow>
                              <Button className="btn-google text-google btn-pill bg-white d-50 p-0">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fab', 'google']}
                                    className="font-size-xl"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                            <Tooltip title="Add">
                              <Button className="btn-success btn-icon btn-transition-none btn-pill d-50 p-0 m-2">
                                <span className="btn-wrapper--icon">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus']}
                                    className="font-size-lg"
                                  />
                                </span>
                              </Button>
                            </Tooltip>
                          </div>

                          <div className="divider my-4" />
                          <h4 className="font-size-lg font-weight-bold my-2">
                            SKILLS
                          </h4>

                          <div className="text-center my-4">
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

                          <div className="divider my-4" />
                          <Button
                            component={NavLink}
                            to="/view-profile"
                            variant="text"
                            className="btn-outline-first mt-2">
                            View complete profile
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item sm={7}>
                      <Card>
                        <div className="mt-4 mt-xl-0">
                          <div className="tabs-bordered p-3">
                            <Tabs
                              className="nav-tabs-primary"
                              value={value}
                              variant="fullWidth"
                              onChange={handleChange}>
                              <Tab label="Overview" />
                              <Tab label="Exprience" />
                              <Tab label="Education" />
                            </Tabs>
                          </div>
                        </div>

                        <div className="pt-2 pt-0">
                          <TabPanel value={value} index={0}>
                            <div className="mb-spacing-6">
                              <Grid container spacing={1}>
                                <Grid item md={4}>
                                  <Card className="card-box text-black-50 p-3">
                                    <div className="display-3 text-black font-weight-bold">
                                      31
                                    </div>
                                    <div className="divider mt-2 mb-3 w-25 bg-first rounded border-first" />
                                    <div className="font-weight-bold font-12 text-uppercase">
                                      YEAR OF
                                      <br />
                                      EXPERIENCE
                                    </div>
                                  </Card>
                                </Grid>
                                <Grid item md={4}>
                                  <Card className="card-box text-black-50 p-3">
                                    <div className="display-3 text-black font-weight-bold">
                                      68
                                    </div>
                                    <div className="divider mt-2 mb-3 w-25 bg-success rounded border-success" />
                                    <div className="font-weight-bold font-12 text-uppercase">
                                      QUALIFICATION &
                                      <br />
                                      CERTIFICATION
                                    </div>
                                  </Card>
                                </Grid>
                                <Grid item md={4}>
                                  <Card className="card-box text-black-50 p-3">
                                    <div className="display-3 text-black font-weight-bold">
                                      57
                                    </div>
                                    <div className="divider mt-2 mb-3 w-25 bg-warning rounded border-warning" />
                                    <div className="font-weight-bold font-12 text-uppercase">
                                      PROJECT COMPLETED
                                      <br />
                                      YEAR TO DATE
                                    </div>
                                  </Card>
                                </Grid>
                              </Grid>
                            </div>
                          </TabPanel>
                        </div>

                        <div className="card-img-wrapper">
                          <div className="card-badges card-badges-top">
                            <div className="badge badge-pill badge-info">
                              NEW
                            </div>
                          </div>
                          <div className="bg-composed-wrapper bg-plum-plate border-0">
                            <div className="bg-composed-img-2 bg-composed-wrapper--image" />
                            <div className="bg-composed-wrapper--content text-center text-white px-2 py-5">
                              <h1 className="font-size-xxl font-weight-bold py-2 mb-0">
                                Employment Information
                              </h1>
                              <p className="mb-2 font-size-lg opacity-7">
                                Current and Desired Employment details
                              </p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="text-center card-body-button">
                          <div className="card-body-button-wrapper">
                            <Button
                              size="large"
                              className="btn-success btn-pill text-nowrap px-5 shadow-none border-3 border-white">
                              Connect
                            </Button>
                          </div>
                          <Grid container spacing={2}>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['far', 'user']}
                                    className="font-size-xxl text-warning"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">Permanent</b>
                                  <span className="text-black-50 d-block">
                                    users
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['fas', 'lemon']}
                                    className="font-size-xxl text-success"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">$3,586</b>
                                  <span className="text-black-50 d-block">
                                    sales
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['far', 'chart-bar']}
                                    className="font-size-xxl text-info"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">City of london</b>
                                  <span className="text-black-50 d-block">
                                    revenue
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['far', 'user']}
                                    className="font-size-xxl text-warning"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">Permanent</b>
                                  <span className="text-black-50 d-block">
                                    users
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['fas', 'lemon']}
                                    className="font-size-xxl text-success"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">$3,586</b>
                                  <span className="text-black-50 d-block">
                                    sales
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid item md={4}>
                              <div className="bg-secondary p-3 text-center rounded">
                                <div>
                                  <FontAwesomeIcon
                                    icon={['far', 'chart-bar']}
                                    className="font-size-xxl text-info"
                                  />
                                </div>
                                <div className="mt-2 line-height-sm">
                                  <b className="font-12">City of london</b>
                                  <span className="text-black-50 d-block">
                                    revenue
                                  </span>
                                </div>
                              </div>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </List>
              </div>
            </Menu>
          </div>
        </Box>
        <div className="avatar-icon-wrapper avatar-icon-md">
          <div className="avatar-icon rounded-circle">
            <img alt="..." src={avatar2} />
          </div>
        </div>
        <div className="my-3 userbox-details">
          <span>
            {currentUser.first_name} {currentUser.last_name}
          </span>
          <small className="d-block font-12 text-white-50">
            Business Analyst | London, United Kingdom
          </small>

          <small className="d-block font-12 text-white-50">
            Business Analyst | London, United Kingdom
          </small>
        </div>
        <div className="py-1">
          <Tooltip title="Github">
            <Button className="btn-github text-github btn-pill bg-white d-30 p-0">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fab', 'github']}
                  className="font-size-xl"
                />
              </span>
            </Button>
          </Tooltip>
          <Tooltip title="Instagram" arrow>
            <Button className="btn-instagram text-instagram btn-pill bg-white d-30 p-0 mx-2">
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  className="font-size-xl"
                />
              </span>
            </Button>
          </Tooltip>
          <Tooltip title="Google" arrow>
            <Button className="btn-google text-google btn-pill bg-white d-30 p-0">
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

export default SidebarUserbox;
