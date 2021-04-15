import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  CardContent,
  Dialog,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  List,
  ListItem,
  InputAdornment,
  Table
} from '@material-ui/core';

import PersonIcon from '@material-ui/icons/Person';
import { getCurrentUser } from '../../helper';
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
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import agencybg from '../../assets/images/voxpro-images/agency-bg.jpg';

import GoogleMapReact from 'google-map-react';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const MapMarker = ({ text }) => <div>{text}</div>;

export default function LivePreviewExample() {
  const [aboutText, setAboutText] = useState();
  const CHARACTER_LIMIT = 255;
  const [, setData] = useState({});
  const [modal1, seModal1] = useState(false);
  const [currentUser] = useState(getCurrentUser());

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

  useEffect(() => {
    api.get(`/api/user?id=${currentUser.id}`).then((response) => {
      if (response.data) {
        setData(response.data);
        setUserDetials(response.data);
        setDescription(response.data);
        // setAboutText(response.data.description);
      } else {
        alert('Something went wrong..');
      }
    });
  }, [currentUser.id]);

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
          {currentUser.role === 'candidate' && (
            <b className="heading">Candidate Profile</b>
          )}
          {currentUser.role === 'agency' && (
            <b className="heading">Agency Profile</b>
          )}
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={2} className="main-card-section">
            <Grid item xs={12} sm={12}>
              <Card>
                <div className="card-img-wrapper h-240px">
                  {/* <div className="card-badges text-white">
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt-alt']}
                      className="edit"
                    />
                  </div> */}
                  {currentUser.role === 'candidate' && (
                    <img alt="..." className="img-fit-container" src={stock2} />
                  )}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <img
                      alt="..."
                      className="img-fit-container"
                      src={agencybg}
                    />
                  )}
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
                      {currentUser.first_name} {currentUser.last_name}
                    </h4>
                    {currentUser.role === 'candidate' && (
                      <small>Software Engineer</small>
                    )}
                    {(currentUser.role === 'agency' ||
                      currentUser.role === 'company') && <small>London</small>}
                  </div>
                  {currentUser.role === 'candidate' && (
                    <hr></hr>
                  )}
                  {currentUser.role === 'candidate' && (
                    <OnlineAndAvailability />
                  )}
                  <hr></hr>
                  {currentUser.role === 'candidate' && (
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
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <div>
                      <NotListedLocationIcon />
                      <small>Live roles</small>
                      <h4 className="ml-4">23</h4>
                    </div>
                  )}

                  {currentUser.role === 'candidate' && (
                    <div>
                      <hr></hr>
                      <small>
                        ConsultancyFounder & Director | Frank Belford a
                        Consultancy Senior Business Analyst with 15 years
                        experience in the retail industry and FMCG industry,
                        with project spending 5-10 million.
                      </small>
                      <hr></hr>
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
                    </div>
                  )}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <div>
                      <hr></hr>
                      <b>Description</b>
                      <br />
                      <small>
                        We provides search marketing solutions for businesses
                        worldwide, including website promotion, online
                        advertising, and search engine optimization techniques
                        to improve its clients' positioning in search engines.
                        We cater to the higher education market, including
                        colleges and universities.
                      </small>
                      <hr></hr>
                      <b>Company Sector</b>
                      <br />
                      <div className="m-1 badge badge-dark">Advertising</div>
                      <div className="m-1 badge badge-dark">Analytics</div>
                      <div className="m-1 badge badge-dark">
                        Enterprise Software
                      </div>
                      <div className="m-1 badge badge-dark">eCommerce</div>
                      <div className="m-1 badge badge-dark">
                        Information Technology
                      </div>
                      <br />

                      <hr></hr>
                      <b>Company Size</b>
                      <br />
                      <h5>Medium (50-200)</h5>
                      <hr></hr>
                      <b>Establised</b>
                      <br />
                      <h5>1999</h5>
                    </div>
                  )}
                  <hr></hr>
                  <div className="w-100" style={{ height: '250px' }}>
                    <GoogleMapReact defaultCenter={center} defaultZoom={zoom}>
                      <MapMarker
                        lat={59.955413}
                        lng={30.337844}
                        text="UiFort"
                      />
                    </GoogleMapReact>
                  </div>
                </Card>
                {currentUser.role === 'candidate' && (
                  <div>
                    <Card className="card-box p-3 mt-2">
                      <b>People also viewed</b>

                      <List component="div" className="list-group-flush">
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Message
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Message
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
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
                              </Button>
                            </Grid>
                          </Grid>
                        </ListItem>
                        <ListItem className="px-0 border-0">
                          <Grid container spacing={0}>
                            <Grid
                              item
                              xs={12}
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
                              xs={12}
                              // md={6}
                              className="pt-2 pt-xl-0 d-flex align-items-center">
                              <Button
                                size="small"
                                className="btn-pill ml-5 btn-outline-primary border-1"
                                variant="outlined">
                                Connect
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
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={12} sm={8} className="mt-70px">
              <Card className="card-box p-3">
                {currentUser.role === 'candidate' && (
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
                        className="btn-success btn-pill text-nowrap px-5 shadow-none border-3 border-white">
                        + Add Skills
                      </Button>
                    </div>
                  </div>
                )}

                {(currentUser.role === 'agency' ||
                  currentUser.role === 'company') && (
                  <div>
                    <b>Team</b>
                    <Grid container spacing={2} className="mt-1">
                      <Grid item xs={12} sm={3}>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card bg-white shadow-sm-dark card-box-hover-rise">
                            <img
                              src={stock1}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded-bottom p-xl-4 text-center">
                              <b>User name</b>
                              <p className="text-second opacity-8 mb-0">CEO</p>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="a-blue">
                                View
                              </a>
                            </div>
                          </a>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card bg-white shadow-sm-dark card-box-hover-rise">
                            <img
                              src={stock1}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded-bottom p-xl-4 text-center">
                              <b>User name</b>
                              <p className="text-second opacity-8 mb-0">CEO</p>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="a-blue">
                                View
                              </a>
                            </div>
                          </a>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card bg-white shadow-sm-dark card-box-hover-rise">
                            <img
                              src={stock1}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded-bottom p-xl-4 text-center">
                              <b>User name</b>
                              <p className="text-second opacity-8 mb-0">CEO</p>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="a-blue">
                                View
                              </a>
                            </div>
                          </a>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="card bg-white shadow-sm-dark card-box-hover-rise">
                            <img
                              src={stock1}
                              className="card-img-top"
                              alt="..."
                            />
                            <div className="p-3 bg-secondary rounded-bottom p-xl-4 text-center">
                              <b>User name</b>
                              <p className="text-second opacity-8 mb-0">CEO</p>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="a-blue">
                                View
                              </a>
                            </div>
                          </a>
                        </div>
                      </Grid>
                    </Grid>
                    <div className="card-footer text-center">
                      <Button
                        size="small"
                        className="btn-outline-second"
                        variant="text">
                        View More
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              {currentUser.role === 'candidate' && (
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
                </div>
              )}

              {(currentUser.role === 'agency' ||
                currentUser.role === 'company') && (
                <Card className="card-box mt-3">
                  <div className="card-header py-3">
                    <div className="card-header--title font-size-lg">
                      <b>Roles</b>
                    </div>
                    <div className="card-header--actions">
                      <Grid container spacing={6}>
                        <Grid item md={5} className="mtb">
                          <TextField
                            variant="outlined"
                            size="small"
                            className="w-100 ht"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
                        </Grid>
                        <Grid item md={5} className="mtb">
                          <TextField
                            variant="outlined"
                            size="small"
                            id="input-with-icon-textfield1"
                            className="w-100 mb-4"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchTwoToneIcon />
                                </InputAdornment>
                              )
                            }}
                          />
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
                            {/* <th className="bg-white text-center">Status</th> */}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>14th April</td>
                            <td>Business Analyst</td>
                            <td>UK</td>
                            <td className="text-center">€2000</td>
                            <td className="text-center">
                              <div className="badge badge-neutral-danger text-danger">
                                High
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>13th april</td>
                            <td>Business Developer</td>
                            <td>UK</td>
                            <td className="text-center">€4500</td>
                            <td className="text-center">
                              <div className="badge badge-neutral-danger text-danger">
                                High
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>12th april</td>
                            <td>Software developer</td>
                            <td>UK</td>
                            <td className="text-center">€3000</td>
                            <td className="text-center">
                              <div className="badge badge-neutral-danger text-danger">
                                High
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>10th april</td>
                            <td>IT Analyst</td>
                            <td>UK</td>
                            <td className="text-center">€3500</td>
                            <td className="text-center">
                              <div className="badge badge-neutral-danger text-danger">
                                High
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>8th april</td>
                            <td>Devops Engineer</td>
                            <td>UK</td>
                            <td className="text-center">€2000</td>
                            <td className="text-center">
                              <div className="badge badge-neutral-danger text-danger">
                                High
                              </div>
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
              {/* Adds section */}
              {currentUser.role === 'candidate' && <AddsComponents />}
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
      </div>
    </>
  );
}
