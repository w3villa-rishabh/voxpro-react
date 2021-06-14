/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

import {
  Grid,
  Card,
  Button,
  Dialog,
  DialogActions,
  TextField,
  List,
  ListItem,
  LinearProgress
} from '@material-ui/core';

import { getCurrentUser } from 'helper';
import api from '../../api';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';

// stepper
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import 'react-phone-number-input/style.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useHistory } from 'react-router';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={0}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  }
});

function StepIcon(props) {
  const classes = useStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}>
      {icons[String(props.icon)]}
    </div>
  );
}

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

function getSteps() {
  return ['Contact Information', 'Resume', 'Review'];
}

const styles = () => ({
  input: {
    display: 'none'
  }
});

const ApplyNewJobComponent = (props) => {
  const { classes } = props;
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [openApplyBox, setOpenApplyBox] = useState({ open: false, job: {} });
  const [tabs, setTabs] = useState([true, false, false]);
  const [activeTab, setActiveTab] = useState(0);

  let [account, setAccount] = useState(currentUser);

  const [resume, setResume] = useState({});
  const [resumeError, setResumeError] = useState('');
  const steps = getSteps();

  const [errors, setErrors] = useState({
    email: '',
    city: '',
    contact_number: ''
  });

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    setErrors({
      ...errors,
      email: account.email.length === 0 ? 'Email is required!' : '',
      city: account.city.length === 0 ? 'City is required!' : '',
      contact_number:
        account.contact_number.length === 0
          ? 'Contact number required!'
          : account.contact_number.length < 10
          ? 'Minimum 10 digits is required!'
          : ''
    });
    return valid;
  };

  const validEmailRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  let handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setErrors({
          ...errors,
          email: validEmailRegex.test(value) ? '' : 'Email is not valid!'
        });
        break;

      case 'city':
        setErrors({
          ...errors,
          city: value.length > 1 ? '' : 'city is required!'
        });
        break;
      case 'contact_number':
        setErrors({
          ...errors,
          contact_number:
            value.length > 10 ? '' : 'Minimum 10 digits is required!'
        });
        break;

      default:
        break;
    }

    account[name] = value;
    setAccount({ ...account });
  };

  function getResume() {
    api.get(`/api/v1/users/candidates_resume?user_id=${currentUser.id}`).then(
      (response) => {
        if (response.data.success) {
          let resumeFind = response.data.cv;
          resumeFind.extension = resumeFind.content_type.split('/')[1];
          setResume({ ...resumeFind });
        } else {
          setResume({});
          console.log('cv not found');
        }
      },
      () => {
        setResume({});
      }
    );
  }

  const changeHandler = (event) => {
    const file = event.target.files[0];
    const extension = file.name.split('.').pop().toLowerCase();

    const reader = new FileReader();
    reader.readAsDataURL(file);

    let url = URL.createObjectURL(file);
    file.doc_url = url;
    file.extension = extension;
    setResume({ ...file });
    setResumeError('');
    updateDocument(event.target.files[0]);
  };

  const updateDocument = (file) => {
    const formData = new FormData();
    formData.append('document[doc]', file);

    api
      .put(`/api/v1/users/update_resume`, formData, {
        onUploadProgress: function (progressEvent) {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            )
          );
        }
      })
      .then(
        (response) => {
          toast.dismiss();
          if (response.data.success) {
            toast.success('Resume upload successfully..');
          } else {
            toast.error(response.data.message);
          }
          setUploadPercentage(0);
        },
        (error) => {
          console.error('error', error);
          toast.error('Something went wrong..');
        }
      );
  };

  const handleNext = () => {
    if (
      validateForm(errors) &&
      account.contact_number &&
      account.city &&
      !uploadPercentage
    ) {
      let tab = activeTab + 1;
      if (tab === 2 && !resume.doc_url) {
        return setResumeError('Required resume');
      }
      setActiveTab(tab);
      let tabsChange = tabs.map((x, index) => (tab === index ? !x : false));
      setTabs([...tabsChange]);
    }
  };

  const handlePrevious = () => {
    let tab = activeTab - 1;
    setActiveTab(tab);
    let tabsChange = tabs.map((x, index) => (tab === index ? !x : false));
    setTabs([...tabsChange]);
  };

  const handleModalClose = () => {
    setOpenApplyBox({ open: false, job: {} });
  };

  const handleFinish = () => {
    api.post(`/api/v1/jobs/${props.job.id}/apply_job`).then(
      (response) => {
        toast.success(response.data.message);
        if (response.data.success) {
          props.sendDataToParent(props.job.id);
          handleModalClose();
        }
      },
      () => {
        toast.error('Something went wrong..');
      }
    );
  };

  const openTab = () => {
    if (props.job.applied === false) {
      getResume();
      setActiveTab(0);
      setTabs([true, false, false]);
      setAccount({ ...currentUser });
      setOpenApplyBox({
        open: true,
        job: props.job
      });
    }
  };

  return (
    <>
      {props.job.applied ? (
        <Button
          fullWidth
          size="small"
          className={`btn-discord font-size-lg font-weight-bold hover-scale-sm mt-2 ${props.width}`}>
          <span>Applied</span>
        </Button>
      ) : (
        <Button
          fullWidth
          size="small"
          className={`btn-danger font-size-lg font-weight-bold hover-scale-sm mt-2 ${props.width}`}
          onClick={openTab}>
          <span>Apply now</span>
        </Button>
      )}

      <Dialog
        onClose={handleModalClose}
        fullWidth
        maxWidth="md"
        classes={{ paper: 'modal-content rounded-lg' }}
        aria-labelledby="simple-dialog-title"
        open={openApplyBox.open}>
        <Card className="card-box">
          <div className="card-header">
            <div className="card-header--title">
              <div className="p-3 font-size-xl font-weight-bold">
                Apply to {openApplyBox.job.company_name}
              </div>
            </div>
            <div className="card-header--actions"></div>
          </div>
          <div className="mt-3">
            <Stepper
              className="stepper-horizontal-1 p-0"
              alternativeLabel
              activeStep={activeTab}
              connector={<StepConnector />}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="p-3">
            {tabs[0] && (
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={6} className="d-flex align-items-center">
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
                          className="font-weight-bold text-black text-capitalize"
                          title="...">
                          {account.first_name} {account.last_name}
                        </a>
                        <span className="text-black-50 d-block">
                          {account.city}
                        </span>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <label>
                      Email <span className="text-danger">*</span>
                    </label>
                    <TextField
                      fullWidth
                      disabled
                      variant="outlined"
                      size="small"
                      placeholder="Enter email id"
                      id="input-with-icon-textfield1"
                      value={account.email}
                      name="email"
                      onChange={handleChange}
                    />
                    {errors.email.length > 0 && (
                      <span className="error">{errors.email}</span>
                    )}
                  </Grid>

                  <Grid item xs={6}>
                    <label>
                      City <span className="text-danger">*</span>
                    </label>
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Enter city name"
                      id="input-with-icon-textfield1"
                      fullWidth
                      name="city"
                      value={account.city}
                      onChange={handleChange}
                    />
                    {errors.city.length > 0 && (
                      <span className="error">{errors.city}</span>
                    )}
                  </Grid>
                  <Grid item xs={6}>
                    <label>
                      Phone number <span className="text-danger">*</span>
                    </label>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder="Enter phone number"
                      id="input-with-icon-textfield1"
                      name="contact_number"
                      value={account.contact_number}
                      onChange={handleChange}
                    />
                    {errors.contact_number.length > 0 && (
                      <span className="error">{errors.contact_number}</span>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <span className="mb-4">
                      Submitting your application won't change your profile
                    </span>
                  </Grid>
                </Grid>
              </div>
            )}
            {tabs[1] && (
              <div className="text-center">
                {uploadPercentage > 0 && (
                  <LinearProgressWithLabel value={uploadPercentage} />
                )}
                {resume.extension && (
                  <div className="document-thumb avatar-icon-wrapper shadow-sm-dark border-white rounded mt-2">
                    <div className="avatar-icon rounded d-100">
                      {resume.extension === 'pdf' ? (
                        <Document file={resume.doc_url}>
                          <Page pageNumber={1} />
                        </Document>
                      ) : (
                        <img alt="..." src={resume.doc_url} />
                      )}
                    </div>
                  </div>
                )}
                <br />
                <div>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={changeHandler}
                  />
                  <b>Select a file to show details</b>
                  <br></br>
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="outlined"
                      component="span"
                      size="small"
                      onClick={() => {
                        if (!resume.doc_url) {
                          history.push('/upload');
                        }
                      }}
                      className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                      <span>Upload resume</span>
                    </Button>
                  </label>

                  {resumeError.length > 0 && (
                    <>
                      <br></br>
                      <span className="error">{resumeError}</span>
                    </>
                  )}
                </div>
              </div>
            )}
            {tabs[2] && (
              <div>
                <Grid container spacing={2} className="p-3">
                  <Grid item xs={12}>
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
                          {account.first_name} {account.last_name}
                        </a>
                        <span className="text-black-50 d-block">
                          {account.city}
                        </span>
                      </div>
                    </div>
                  </Grid>

                  <Grid item xs={12}>
                    <List component="div" className="nav-line nav-line-alt">
                      <ListItem className="pb-2">
                        <span>
                          Email address: <br />
                          {account.email}
                        </span>
                      </ListItem>
                      <ListItem className="pb-2">
                        <span>
                          {' '}
                          City: <br />
                          {account.city}
                        </span>
                      </ListItem>
                      <ListItem className="pb-2">
                        <span>
                          Mobile phone number: <br />
                          {account.contact_number}
                        </span>
                      </ListItem>
                    </List>
                  </Grid>

                  <Grid item xs={12}>
                    <h3 className="font-size-xl mb-1 font-weight-bold">
                      Resume
                    </h3>
                    <div className="document-thumb avatar-icon-wrapper shadow-sm-dark border-white rounded">
                      <div className="avatar-icon rounded d-100">
                        {resume.extension === 'pdf' ? (
                          <Document file={resume.doc_url}>
                            <Page pageNumber={1} />
                          </Document>
                        ) : (
                          <img alt="..." src={resume.doc_url} />
                        )}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )}
            <DialogActions className="mt-4">
              {(activeTab === 1 || activeTab === 2) && (
                <Button
                  onClick={() => handlePrevious()}
                  className="btn-primary font-weight-bold hover-scale-lg float-left"
                  size="small">
                  Back
                </Button>
              )}

              {(activeTab === 0 || activeTab === 1) && (
                <Button
                  onClick={() => handleNext()}
                  className="btn-primary font-weight-bold hover-scale-lg float-right"
                  size="small">
                  Next
                </Button>
              )}

              {activeTab === 2 && (
                <Button
                  onClick={() => handleFinish()}
                  className="btn-primary font-weight-bold hover-scale-lg float-right"
                  size="small">
                  Apply
                </Button>
              )}
            </DialogActions>
          </div>
        </Card>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(ApplyNewJobComponent);
