import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  LinearProgress,
  CardContent,
  Dialog,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { getCurrentUser } from '../../helper';
import api from '../../api';
import avatar5 from '../../assets/images/avatars/default.png';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';

import stock2 from '../../assets/images/stock-photos/stock-7.jpg';
import { toast } from 'react-toastify';
import AddsComponents from 'components/add_component';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import { useDropzone } from 'react-dropzone';

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
      className="rounded-circle avatar-image overflow-hidden bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
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

  return (
    <>
      <div className="page-title">
        <PersonIcon />
        <div className="title pt-3">
          <b className="heading">Candidate Profile</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={2} className="main-card-section">
            <Grid item xs={12} sm={12}>
              <Card>
                <div className="card-img-wrapper h-180px">
                  <div className="card-badges text-white">
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt']}
                      className="edit"
                    />
                  </div>
                  <img alt="..." className="img-fit-container" src={stock2} />
                </div>
                <CardContent className="card-body-avatar">
                  <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded-circle">
                    {/* <div className="avatar-icon rounded-circle">
                      <img alt="..." src={avatar5} />
                    </div> */}
                    <div
                      {...getRootProps({
                        className: 'dropzone-upload-wrapper'
                      })}>
                      <input {...getInputProps()} />
                      <div className="dropzone-inner-wrapper d-120 rounded-circle dropzone-avatar">
                        <div className="avatar-icon-wrapper d-120 rounded-circle m-2">
                          <Button
                            onClick={open}
                            className="btn-first avatar-button badge shadow-sm-dark btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle badge-first text-white">
                            <CreateIcon className="d-20" />
                          </Button>

                          <div>
                            {isDragAccept && (
                              <div className="rounded-circle overflow-hidden d-120 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                                <CheckIcon className="d-40" />
                              </div>
                            )}
                            {isDragReject && (
                              <div className="rounded-circle overflow-hidden d-120 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                                <CloseTwoToneIcon className="d-60" />
                              </div>
                            )}
                            {!isDragActive && (
                              <div className="rounded-circle overflow-hidden d-120 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                                {/* <AccountCircleTwoToneIcon className="d-50" /> */}
                                <img alt="..." src={avatar5} />
                              </div>
                            )}
                          </div>

                          {thumbs.length > 0 && <div>{thumbs}</div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="main-card">
                    <div className="user-details">
                      <Grid container spacing={4} className="user-info">
                        <Grid item xs={12} sm={5}>
                          <div className="font-size-xxl font-weight-bold text-capitalize">
                            {currentUser.first_name} {currentUser.last_name}
                          </div>
                          <small>
                            Founder & Director | Frank Belford a Consultancy
                          </small>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <div className="justify-content-between">
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['fas', 'map-marker']}
                                className="font-size-lg d-block mr-3 text-dark opacity-5"
                              />
                              <span>Location</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <FontAwesomeIcon
                                icon={['fas', 'money-bill']}
                                className="font-size-lg d-block mr-2 text-dark opacity-5"
                              />
                              <span>Availability</span>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <div>
                            <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                              <div>80%</div>
                            </div>
                            <LinearProgress
                              variant="determinate"
                              className="progress-sm w-auto progress-bar-rounded progress-animated-alt progress-bar-second hc-style"
                              value={85}
                            />
                            <small>Profile Connection</small>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <div className="z-over py-2 z-below">
            <div
              className={clsx(
                'tab-item-wrapper overflow-visible d-none d-block active'
              )}
              index={1}>
              <div>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={8}>
                    <Card className="card-box p-3 h-100">
                      <b>About</b>
                      {/* <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="about"
                        onClick={handleClickOpen1}
                      /> */}
                      <p className="h-100px">{description.description}</p>
                      <div className="card-footer see-more py-3 text-center">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          See More
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card className="card-box p-3 dashboard-card h-100">
                      <b className="mb-0">Your Dashboard</b>
                      <div className="info">
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={['fas', 'money-bill']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                          <span>Desired Sale</span>
                        </div>
                        <div className="divider my-2" />
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={['fas', 'tag']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                          <span>Desired Salary</span>
                        </div>
                        <div className="divider my-2" />
                        <div className="d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={['fas', 'map-marker']}
                            className="font-size-lg d-block mr-3 text-dark opacity-5"
                          />
                          <span>Desired Location</span>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                </Grid>

                <Grid container spacing={1} className="mt-2">
                  <Grid item xs={12} sm={6}>
                    <Card className="card-box p-3 h-100 experience-card">
                      <div className="py-3">
                        <b>Experience</b>
                      </div>
                      {/* <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        className="icon"
                        onClick={handleExperience}
                      /> */}
                      <ul className="mt-2">
                        <li className="position-relative">
                          {/* <FontAwesomeIcon
                            icon={['fas', 'pencil-alt']}
                            className="edit-icon"
                          /> */}
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
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Frank Belford is a leading professional services
                                Consultancy for selesforce and bullhorn for
                                selesforce product.
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="card-footer see-more py-3 text-center">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          See More
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card className="card-box p-3 education-card">
                      <div className="py-3">
                        <b>Education</b>
                      </div>
                      {/* <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        className="icon"
                        onClick={handleEducation}
                      /> */}
                      <ul className="mt-2">
                        <li className="position-relative">
                          {/* <FontAwesomeIcon
                            icon={['fas', 'pencil-alt']}
                            className="edit-icon"
                          /> */}
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Inez Conley</span>
                              <span className="text-black-50 d-block">
                                Project Manager
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Project Manager
                              </span>
                            </div>
                          </div>
                        </li>
                        <hr></hr>
                        <li>
                          <div className="d-flex align-items-center">
                            <div className="avatar-icon-wrapper mr-3">
                              <div className="avatar-icon rounded">
                                <img alt="..." src={avatar2} />
                              </div>
                            </div>
                            <div className="position-relative">
                              <span>Sothwark College</span>
                              <span className="text-black-50 d-block">
                                Project Manager
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="card-footer py-3 text-center">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          See More
                        </Button>
                      </div>
                    </Card>

                    <Card className="card-box p-3 mt-3">
                      <div className="py-3">
                        <b className="m-top">Skills & Endorsements</b>
                      </div>
                      {/* <div className="add-skill">
                        <span className="pr-3">Add a new skill </span>
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="icon"
                        />
                      </div>
                      <Button
                        variant="text"
                        className="btn-pill btn-outline-primary quiz-btn">
                        Take skill quiz
                      </Button> */}
                      {/* <p className="pt-2">View 2 pending endorsements</p> */}
                      {/* <div className="divider my-3" /> */}
                      <div className="justify-content-between">
                        <div>
                          <div className="text-black-50">Business Analysis</div>

                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <small className="d-flex pt-2 align-items-center">
                                <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                  <div className="avatar-icon">
                                    <img alt="..." src={avatar1} />
                                  </div>
                                </div>
                                <div>
                                  <span>Nazim Kidd</span>
                                </div>
                              </small>
                            </Grid>
                            <Grid item xs={6}>
                              <small className="d-flex pt-2 align-items-center">
                                <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                  <div className="avatar-icon">
                                    <img alt="..." src={avatar1} />
                                  </div>
                                </div>
                                <div>
                                  <span>Nazim Kidd</span>
                                </div>
                              </small>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="text-black-50">Team management</div>
                          <small className="d-flex pt-2 align-items-center">
                            <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar1} />
                              </div>
                            </div>
                            <div>
                              <span>Nazim Kidd</span>
                            </div>
                          </small>
                        </div>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="text-black-50">Management</div>
                          <small className="d-flex pt-2 align-items-center">
                            <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                              <div className="avatar-icon">
                                <img alt="..." src={avatar1} />
                              </div>
                            </div>
                            <div>
                              <span>Nazim Kidd</span>
                            </div>
                          </small>
                        </div>
                      </div>

                      <div className="card-footer py-3 mt-2 text-center">
                        <Button
                          size="small"
                          className="btn-outline-second"
                          variant="text">
                          See More
                        </Button>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
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
      <AddsComponents />
    </>
  );
}
