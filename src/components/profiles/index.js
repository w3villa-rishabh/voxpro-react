import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  CardContent,
  Dialog,
  Typography,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  List,
  ListItem,
  InputAdornment,
  Table,
  Box,
  Menu,
  Tooltip
} from '@material-ui/core';
import PropTypes from 'prop-types';

import avatar1 from '../../assets/images/avatars/default.png';
import { useHistory, useLocation } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

import api from '../../api';
import avatar5 from '../../assets/images/avatars/default.png';
import stock2 from '../../assets/images/stock-photos/stock-7.jpg';
import { toast } from 'react-toastify';
import AddsComponents from 'components/add_component';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import { useDropzone } from 'react-dropzone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import OnlineAndAvailability from 'components/profiles/availability';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';

import stock1 from '../../assets/images/stock-photos/stock-1.jpg';
import stock3 from '../../assets/images/stock-photos/stock-5.jpg';
import stock4 from '../../assets/images/stock-photos/stock-6.jpg';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import GoogleMapReact from 'google-map-react';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

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

const MapMarker = ({ text }) => <div>{text}</div>;

export default function LivePreviewExample() {
  const location = useLocation();
  const [aboutText, setAboutText] = useState();
  const CHARACTER_LIMIT = 255;
  const [, setData] = useState({});
  const [modal1, seModal1] = useState(false);
  // const [currentUser] = useState(getCurrentUser());
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    let id = location.state ? location.state.id : 0;
    if (id) {
      findUserById(id);
    }
  };
  const findUserById = (id) => {
    api.get(`/api/v1/users/${id}`).then((response) => {
      if (response.data.success) {
        setUser({ ...response.data.user });
        console.log('user', user);
      }
    });
  };
  //  copy from sidebar
  const history = useHistory();
  const [anchorElMenu1, setAnchorElMenu1] = useState(null);
  const [value, setValue] = useState(0);
  const editValue = `Senior Business Analyst with 15 years experience in the retail industry and FMCG industry, with project spending 5-10 million`;

  const [editSocialProfile, setEditProfile] = useState(editValue);

  const handleClickMenu1 = (event) => {
    // if (user.role !== 'company') {
    setAnchorElMenu1(event.currentTarget);
    setEditProfile(editValue);
    // }
  };

  const handleCloseMini = () => {
    setAnchorElMenu1(null);
  };
  const handleCloseMenu1 = () => {
    setAnchorElMenu1(null);
  };

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('resize'));
  });

  //  till here

  const [description, setDescription] = useState({
    description: ''
  });

  const [userdetails, setUserDetials] = useState({
    first_name: '',
    middle_name: '',
    description: '',
    email: '',
    secondary_email: ''
  });

  const [inputBg, setInputBg] = useState(false);
  const toggleInputBg = () => setInputBg(!inputBg);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [activeTab2, setActiveTab2] = useState('1');

  const toggle2 = (tab) => {
    if (activeTab2 !== tab) setActiveTab2(tab);
  };

  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="avatar-image overflow-hidden text-center font-weight-bold text-success d-flex justify-content-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    userdetails[name] = value;
    setUserDetials(userdetails);
  };

  let editInfo = (e) => {
    e.preventDefault();
    toast.dismiss();
    api
      .patch('/api/user', {
        id: userdetails.id,
        user: userdetails
      })
      .then((response) => {
        if (response.data.success) {
          setDescription(response.data.user);
          toast.success(response.data.message);
          setOpen1(false);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  // useEffect(() => {
  //   api.get(`/api/user?id=${id}`).then((response) => {
  //     if (response.data) {
  //       setData(response.data);
  //       setUserDetials(response.data);
  //       setDescription(response.data);
  //       // setAboutText(response.data.description);
  //     } else {
  //       alert('Something went wrong..');
  //     }
  //   });
  // }, [user.id]);

  const toggle1 = () => {
    seModal1(!modal1);
  };

  //Example 2
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
    setAboutText(userdetails.description);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  // education
  const [openEducation, setOpenEducation] = useState(false);

  const handleEducation = () => {
    setOpenEducation(true);
  };

  const closeEducation = () => {
    setOpenEducation(false);
  };

  // experience
  const [openExperience, setOpenExperience] = useState(false);

  const handleExperience = () => {
    setOpenExperience(true);
  };

  const closeExperience = () => {
    setOpenExperience(false);
  };

  const center = {
    lat: 59.95,
    lng: 30.33
  };
  const zoom = 11;

  return (
    <>
      <div className="page-title">
        <PersonIcon />
        <div className="title pt-3">
          {user.role === 'candidate' && <b className="heading">Profile</b>}
          {(user.role === 'agency' || user.role === 'company') && (
            <b className="heading">Profile</b>
          )}
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={2} className="main-card-section">
            <Grid item xs={12} sm={12}>
              <Card>
                <div className="card-img-wrapper h-240px">
                  <div className="card-badges text-white">
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt']}
                      className="edit"
                    />
                  </div>
                  <img alt="..." className="img-fit-container" src={stock2} />

                  {/* {(user.role === 'agency' || user.role === 'company') && (
                    <div className="py-1 card-bagdes-down text-white">
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
                      <Tooltip title="Add More">
                        <Button className="btn-success btn-icon btn-transition-none btn-pill d-30 p-0 m-2">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'plus']}
                              className="font-size-md"
                            />
                          </span>
                        </Button>
                      </Tooltip>
                    </div>
                  )} */}
                </div>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mt-1">
            <Grid item xs={12} sm={4}>
              <div className="profile-view-section">
                <Card className="card-box p-3 h-100 side-bg">
                  <div className="icon-demo-box">
                    <div
                      {...getRootProps({
                        className: 'dropzone-upload-wrapper'
                      })}>
                      <input {...getInputProps()} />
                      <div className="dropzone-inner-wrapper d-120 dropzone-avatar">
                        <div className="avatar-icon-wrapper d-120 m-2">
                          <Button
                            onClick={open}
                            className="btn-first avatar-button badge shadow-sm-dark btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle badge-first text-white">
                            <CreateIcon className="d-20" />
                          </Button>

                          <div>
                            {isDragAccept && (
                              <div className="overflow-hidden d-120 text-center font-weight-bold text-white d-flex justify-content-center">
                                <CheckIcon className="d-40" />
                              </div>
                            )}
                            {isDragReject && (
                              <div className="overflow-hidden d-120 text-center font-weight-bold text-white d-flex justify-content-center">
                                <CloseTwoToneIcon className="d-60" />
                              </div>
                            )}
                            {!isDragActive && (
                              <div className="overflow-hidden d-120 text-center font-weight-bold text-white-50 d-flex justify-content-center">
                                <img
                                  className="w-100"
                                  alt="..."
                                  src={avatar5}
                                />
                              </div>
                            )}
                          </div>

                          {thumbs.length > 0 && <div>{thumbs}</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="font-size-xxl font-weight-bold text-capitalize text-center mt-2">
                    <h4 className="m-0">
                      {user.first_name} {user.last_name}
                    </h4>
                    {user.role === 'candidate' && (
                      <small>Software Engineer</small>
                    )}
                    {(user.role === 'agency' || user.role === 'company') && (
                      <small>{user.job_title}</small>
                    )}
                  </div>
                  <hr></hr>
                  <OnlineAndAvailability />
                  <hr></hr>
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
                  <div>
                    <hr></hr>
                    <b>About</b>
                    <div className="float-right text-first font-size-sm">
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon ml-1 pointer"
                        // onClick={handleExperience}
                      />
                    </div>
                    <br />
                    <small>
                      Founder & Director | Frank Belford a Consultancy Senior
                      Business Analyst with 15 years experience in the retail
                      industry and FMCG industry, with project spending 5-10
                      million.
                    </small>
                    <hr></hr>
                      {user.role === 'candidate' && (
                      <CardContent className="text-center p-0">
                        <Grid container spacing={1}>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'user']}
                                  className="font-size-xxl text-warning"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">Permanent</b>
                                <span className="text-black-50 font-10 d-block">
                                  Desired Employment Type
                                </span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['fas', 'lemon']}
                                  className="font-size-xxl text-success"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">$3,586</b>
                                <span className="text-black-50 font-10 d-block">
                                  Desired Annual Salary
                                </span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'chart-bar']}
                                  className="font-size-xxl text-info"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">City of London</b>
                                <span className="text-black-50 font-10 d-block">
                                  Desired Location
                                </span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'user']}
                                  className="font-size-xxl text-warning"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">Permanent</b>
                                <span className="text-black-50 font-10 d-block">
                                  Current Employment Type
                                </span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['fas', 'lemon']}
                                  className="font-size-xxl text-success"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">$57,500</b>
                                <span className="text-black-50 font-10 d-block">
                                  Current Annual Salary
                                </span>
                              </div>
                            </div>
                          </Grid>
                          <Grid item md={4}>
                            <div className="bg-secondary p-2 text-center h-100 rounded">
                              <div>
                                <FontAwesomeIcon
                                  icon={['far', 'chart-bar']}
                                  className="font-size-xxl text-info"
                                />
                              </div>
                              <div className="mt-2 line-height-sm">
                                <b className="font-12 cb">West London</b>
                                <span className="text-black-50 font-10 d-block">
                                  Current Location
                                </span>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </CardContent>
                      )}
                    </div>
                  <hr></hr>
                  <b>Location</b>
                  <div className="float-right text-first font-size-sm">
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt']}
                      className="icon ml-1 pointer"
                    />
                  </div>
                  <br />
                  <div className="w-100 mt-3" style={{ height: '250px' }}>
                    <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
                      <MapMarker
                        lat={59.955413}
                        lng={30.337844}
                        text="UiFort"
                      />
                    </GoogleMapReact>
                  </div>
                </Card>
                  <div>
                    <Card className="card-box p-3 mt-2">
                      <b>People also viewed</b>

                      <List component="div" className="list-group-flush">
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
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
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
                              className="d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="avatar-icon-wrapper mr-2">
                                  <div className="avatar-icon">
                                    <img alt="..." src={avatar5} />
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
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
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
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 mr-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                      <div className="card-footer text-center">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          View More
                        </Button>
                      </div>
                    </Card>

                    <Card className="card-box p-3 mt-2">
                      <b>People you may know</b>

                      <List component="div" className="list-group-flush">
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
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
                                    Manas Singh
                                  </a>
                                  <span className="text-black-50 d-block">
                                    System Engineer, Apple Inc.
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
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
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={6}
                              // md={6}
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
                                    Inez Conley
                                  </a>
                                  <span className="text-black-50 d-block">
                                    UX Engineer, Apple Inc.
                                  </span>
                                </div>
                              </div>
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                              <Button
                                style={{ padding: '4px' }}
                                size="small"
                                className="btn-pill ml-3 btn-outline-primary border-1"
                                variant="outlined">
                                &nbsp;&nbsp;View &nbsp;&nbsp;
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                      <div className="card-footer text-center mt-2">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          View More
                        </Button>
                      </div>
                    </Card>
                  </div>
              </div>
            </Grid>

            
            <Grid item xs={12} sm={8} className="mt-70px">


            {(user.role === 'agency' || user.role === 'company') && (
                <Card className="card-box mt-3">
                  <div className="card-header py-3">
                    <div className="card-header--title font-size-lg">
                      <b>Live Roles</b>
                    </div>
                    <div className="card-header--actions">
                      <Grid container spacing={2}>
                        <Grid item md={1} className="mtb"></Grid>
                        <Grid item md={5} className="mtb">
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
                        <Grid item md={4} className="mtb">
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
                    <PerfectScrollbar>
                      <Table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th className="bg-white text-left">Date Posted</th>
                            <th className="bg-white">Job Title</th>
                            <th className="bg-white text-left">Location</th>
                            <th className="bg-white text-center">Salary</th>
                            <th className="bg-white text-center">Type</th>
                            <th className="bg-white text-center">View</th>
                            <th className="bg-white text-center">More</th>
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
                          <tr>
                            <td>05/02/2021</td>
                            <td>Devops Engineer</td>
                            <td>Liverpool, UK</td>
                            <td className="text-center">£2000</td>
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
                        </tbody>
                      </Table>
                    </PerfectScrollbar>
                    <div className="card-footer text-center">
                      <Button
                        size="small"
                        className="btn-outline-second"
                        variant="text">
                        View More
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              <Card className="card-box p-3 mt-3">
                  <div>
                    <b>Skills</b>
                    <CardContent className="pb-0">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <spam>Web developer</spam>
                        </div>
                        <div className="font-weight-bold text-first font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                        </div>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <spam>Javascript</spam>
                        </div>
                        <div className="font-weight-bold text-first font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                        </div>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <spam>Angular</spam>
                        </div>
                        <div className="font-weight-bold text-first font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                        </div>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <spam>React</spam>
                        </div>
                        <div className="font-weight-bold text-first font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                        </div>
                      </div>
                    </CardContent>

                    <div className="text-center card-body-button-wrapper">
                      <Button
                        size="small"
                        className="btn-primary btn-pill text-nowrap px-5 shadow-none border-3 border-white">
                        + Add Skills
                      </Button>
                    </div>
                  </div>
              </Card>

              {/* {user.role === 'candidate' && ( */}
                <div>
                  <Card className="card-box p-3 mt-2">
                    <b>Education</b>
                    <div className="float-right text-first font-size-lg">
                      {/* <span>Education</span> */}
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon ml-2 pointer"
                        // onClick={handleExperience}
                      />
                    </div>
                    <div>
                      <CardContent className="pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-center">
                          <Button
                            size="small"
                            className="btn-outline-second"
                            variant="text">
                            View More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                  
                  {user.role === 'candidate' && (
                  <Card className="card-box p-3 mt-2">
                    <b>Experience</b>
                    <div className="float-right text-first font-size-lg">
                      {/* <span>Add Experience</span> */}
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon ml-2 pointer"
                        // onClick={handleExperience}
                      />
                    </div>
                    <div>
                      <CardContent className="pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-center">
                          <Button
                            size="small"
                            className="btn-outline-second"
                            variant="text">
                            View More
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                  )}
                 {user.role === 'candidate' && (
                  <Card className="card-box p-3 mt-2">
                    <b>Recommendation and endorsements</b>
                    <div className="float-right text-first font-size-lg">
                      {/* <span>Add Recommendation</span> */}
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon ml-2 pointer"
                        // onClick={handleExperience}
                      />
                    </div>

                    <div>
                      <CardContent className="pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <spam>Web developer</spam>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <spam>Javascript</spam>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <spam>Angular</spam>
                          </div>
                        </div>
                        <div className="divider my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <spam>React</spam>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                  )}
                </div>
              {/* )} */}
              {/* Adds section */}
              {user.role === 'candidate' && <AddsComponents />}
            </Grid>
          </Grid>
        </div>

        {/* About dialog modal open */}
        <Dialog
          classes={{ paper: 'modal-content' }}
          fullWidth
          open={open1}
          onClose={handleClose1}
          aria-labelledby="form-dialog-title2">
          <DialogTitle id="form-dialog-title">Edit about</DialogTitle>

          <DialogContent className="p-0">
            <div>
              <div className="border-0">
                <div className="card-body">
                  <form method="post" onSubmit={editInfo}>
                    <div className="mb-3">
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        id="textfield-email"
                        name="description"
                        // onChange={handleChange}
                        inputProps={{ maxLength: 255 }}
                        label="Edit about"
                        multiline
                        rowsMax={4}
                        onChange={(event) => {
                          setUserDetials({
                            ...userdetails,
                            description: event.target.value
                          });
                        }}
                        value={userdetails.description}
                        // helperText={`${
                        //   CHARACTER_LIMIT - userdetails.description.length
                        // } ${
                        //   'characters remaining' +
                        //   ' (' +
                        //   CHARACTER_LIMIT +
                        //   ' Max)'
                        // }`}
                      />
                    </div>
                    <div className="text-right">
                      <DialogActions>
                        <Button
                          variant="contained"
                          onClick={handleClose1}
                          className="font-weight-bold btn-second px-4 my-3">
                          Cancel
                        </Button>

                        <Button
                          variant="contained"
                          type="submit"
                          className="font-weight-bold btn-second px-4 my-3">
                          Save
                        </Button>
                      </DialogActions>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* User edit modal open */}
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal1}
          onClose={toggle1}
          classes={{
            paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
          }}>
          <DialogTitle id="form-dialog-title">Edit info</DialogTitle>
          <form method="post" onSubmit={editInfo}>
            <div className="edit-user-info">
              <div className="border">
                <div className="card-img-wrapper h-180px">
                  <img alt="..." className="img-fit-container" src={stock2} />
                </div>
                <CardContent className="card-body-avatar">
                  <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded-circle">
                    <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar5} />
                    </div>
                  </div>
                </CardContent>
              </div>

              <Grid container spacing={2} className="mt-3">
                <Grid item xs={4}>
                  <div>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-user"
                      label="First Name"
                      name="first_name"
                      onChange={handleChange}
                      value={userdetails.first_name}
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-user"
                      label="Middle Name"
                      name="middle_name"
                      onChange={handleChange}
                      value={userdetails.middle_name}
                    />
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-user"
                      label="Last Name"
                      name="last_name"
                      onChange={handleChange}
                      value={userdetails.last_name}
                    />
                  </div>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    value={userdetails.email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Secondary Email"
                    name="secondary_email"
                    onChange={handleChange}
                    value={userdetails.secondary_email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Mobile Number"
                    name="contact_number"
                    onChange={handleChange}
                    value={userdetails.contact_number}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Home Number"
                    name="home_number"
                    onChange={handleChange}
                    value={userdetails.home_number}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Headline"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Education"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Country/Region"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Locations in this Country/Region"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Industry"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-user"
                    label="Contact info"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="text-right">
              <DialogActions>
                <Button
                  variant="contained"
                  onClick={toggle1}
                  className="font-weight-bold btn-second px-4 my-3">
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  type="submit"
                  className="font-weight-bold btn-second px-4 my-3">
                  Save
                </Button>
              </DialogActions>
            </div>
          </form>
        </Dialog>

        {/* dialog for add education */}
        <Dialog
          classes={{ paper: 'modal-content' }}
          fullWidth
          open={openExperience}
          onClose={closeEducation}
          aria-labelledby="form-dialog-title2">
          <DialogTitle id="form-dialog-title">Add education</DialogTitle>
          <DialogContent className="p-0">
            <div>
              <div className="border-0">
                <div className="card-body">
                  <form method="post" onSubmit={editInfo}>
                    <div className="mb-3">
                      <Grid container spacing={2} className="mt-3">
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="School"
                              name="first_name"
                              onChange={handleChange}
                              // value={userdetails.first_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Degree"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Field of Study"
                              name="last_name"
                              onChange={handleChange}
                              // value={userdetails.last_name}
                            />
                          </div>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} className="mt-3">
                        <Grid item xs={6}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Start date"
                              name="first_name"
                              onChange={handleChange}
                              // value={userdetails.first_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="End Date"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Grade (optional)"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Activities and societies"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Description"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="text-right">
                      <DialogActions>
                        <Button
                          variant="contained"
                          onClick={closeEducation}
                          className="font-weight-bold btn-second px-4 my-3">
                          Cancel
                        </Button>

                        <Button
                          variant="contained"
                          type="submit"
                          className="font-weight-bold btn-second px-4 my-3">
                          Save
                        </Button>
                      </DialogActions>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* dialog for add experience */}
        <Dialog
          classes={{ paper: 'modal-content' }}
          fullWidth
          open={openEducation}
          onClose={closeExperience}
          aria-labelledby="form-dialog-title2">
          <DialogTitle id="form-dialog-title">Add experience</DialogTitle>

          <DialogContent className="p-0">
            <div>
              <div className="border-0">
                <div className="card-body">
                  <form method="post" onSubmit={editInfo}>
                    <div className="mb-3">
                      <Grid container spacing={2} className="mt-3">
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="School"
                              name="first_name"
                              onChange={handleChange}
                              // value={userdetails.first_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Degree"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Field of Study"
                              name="last_name"
                              onChange={handleChange}
                              // value={userdetails.last_name}
                            />
                          </div>
                        </Grid>
                      </Grid>

                      <Grid container spacing={2} className="mt-3">
                        <Grid item xs={6}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Start date"
                              name="first_name"
                              onChange={handleChange}
                              // value={userdetails.first_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="End Date"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Grade (optional)"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Activities and societies"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div>
                            <TextField
                              fullWidth
                              variant="outlined"
                              id="textfield-user"
                              label="Description"
                              name="middle_name"
                              onChange={handleChange}
                              // value={userdetails.middle_name}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="text-right">
                      <DialogActions>
                        <Button
                          variant="contained"
                          onClick={closeExperience}
                          className="font-weight-bold btn-second px-4 my-3">
                          Cancel
                        </Button>

                        <Button
                          variant="contained"
                          type="submit"
                          className="font-weight-bold btn-second px-4 my-3">
                          Save
                        </Button>
                      </DialogActions>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Box className="card-tr-actions">
          <div className="mt-5">
            <Menu
              anchorEl={anchorElMenu1}
              keepMounted
              open={Boolean(anchorElMenu1)}
              // onClose={handleCloseMini}
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
                      onClick={handleCloseMini}
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
                            {user.first_name} {user.last_name}
                          </h3>

                          <p className="font-12 font-weight-bold mb-0">
                            Business Analyst | London, United Kingdom
                          </p>
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

                          <div className="divider my-2" />
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
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item sm={7}>
                      {/* <div className="card-header-profile">
                                              <div className="card-header--title">
                                              </div>
                                            </div> */}

                      <div className="">
                        {/* <div className="card-img-wrapper">
                                                  <div className="bg-composed-wrapper bg-plum-plate border-0">
                                                    <div className="bg-composed-img-2 bg-composed-wrapper--image" />
                                                    <div className="bg-composed-wrapper--content text-center text-white px-2 py-4">
                                                      <h1 className="font-size-xxl font-weight-bold py-2 mb-0">
                                                        Employment Information
                                                      </h1>
                                                      <p className="mb-2 font-size-lg opacity-7">
                                                        Current and Desired
                                                        Employment details
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
                                                </div> */}

                        <Card className="card-box mt-3">
                          <div className="card-header py-3">
                            <div className="card-header--title font-size-lg">
                              <b>Live Roles</b>
                            </div>
                            <div className="card-header--actions">
                              <Grid container spacing={3}>
                                {/* <Grid item md={1} className="mtb"></Grid> */}
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
                            <PerfectScrollbar>
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
                            </PerfectScrollbar>
                          </div>
                        </Card>
                      </div>
                      {/* </Card> */}
                    </Grid>
                  </Grid>
                  {/* </PerfectScrollbar> */}
                </List>
              </div>
            </Menu>
          </div>
        </Box>
      </div>
    </>
  );
}
