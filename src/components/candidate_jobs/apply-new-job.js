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
  ListItem
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

import 'react-phone-number-input/style.css';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const ApplyNewJobComponent = (props) => {
  const { classes } = props;
  const [currentUser] = useState(getCurrentUser());
  const [openApplyBox, setOpenApplyBox] = useState({ open: false, job: {} });
  const [tabs, setTabs] = useState([true, false, false]);
  const [activeTab, setActiveTab] = useState(0);

  let [account, setAccount] = useState(currentUser);

  let handleChange = (event) => {
    const { name, value } = event.target;
    account[name] = value;
    setAccount({ ...account });
  };

  const [selectedFile, setSelectedFile] = useState();
  const [resume, setResume] = useState({});
  const steps = getSteps();

  function getResume() {
    api
      .get(`/api/v1/users/candidates_resume?user_id=${currentUser.id}`)
      .then((response) => {
        if (response.data.success) {
          let resumeFind = response.data.cv;
          resumeFind.extension = resumeFind.content_type.split('/')[1];
          setResume({ ...resumeFind });
        } else {
          setResume({});
          console.log('cv not found');
        }
      });
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
    setSelectedFile(event.target.files[0]);
  };

  const handleNext = () => {
    let tab = activeTab + 1;
    setActiveTab(tab);
    let tabsChange = tabs.map((x, index) => (tab === index ? !x : false));
    setTabs([...tabsChange]);
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
    handleModalClose();
    const formData = new FormData();
    formData.append('File', selectedFile);
  };

  const openTab = () => {
    getResume();
    setActiveTab(0);
    setTabs([true, false, false]);
    setAccount({ ...currentUser });
    setOpenApplyBox({
      open: true,
      job: props.job
    });
  };

  return (
    <>
      <Button
        fullWidth
        size="small"
        className="btn-danger font-size-lg font-weight-bold hover-scale-sm mt-2"
        onClick={openTab}>
        <span>Apply now</span>
      </Button>

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
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Email"
                      placeholder="Enter email id"
                      id="input-with-icon-textfield1"
                      value={account.email}
                      name="email"
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      size="small"
                      label="City"
                      placeholder="Enter city name"
                      id="input-with-icon-textfield1"
                      fullWidth
                      name="city"
                      value={account.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      label="Phone number"
                      placeholder="Enter phone number"
                      id="input-with-icon-textfield1"
                      name="contact_number"
                      value={account.contact_number}
                      onChange={handleChange}
                    />
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
                      className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                      <span>Upload resume</span>
                    </Button>
                  </label>
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
                  Review
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
