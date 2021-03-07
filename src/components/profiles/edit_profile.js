import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Card,
  MenuItem,
  Button,
  Tooltip,
  TextField,
  Input,
  FormControl,
  Select
} from '@material-ui/core';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';

import api from '../../api'
import {handleUser} from '../../helper'




const Step1 = () => {

  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Personal information
          </h5>
          <p className="text-black-50 mb-4">
            Please Fill the Follwing Details!
          </p>
          <Grid container spacing={6}>
            <Grid item md={4}>
              <TextField
                fullWidth
                // onChange={(e)=>handleForm(e, "firstname")}
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                // onChange={(e)=>handleForm(e, "lastname")}
                label="Middle Name"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
              />
            </Grid>

            <Grid item md={4}>
              <TextField
                fullWidth
                label="Primary Email"
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                label="Secondary Email"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                label="Role"
                variant="outlined"
                disabled
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
const Step2 = () => {
  const [state, setState] = useState('');

  const handleChange2 = (event) => {
    setState(event.target.value);
  };





  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Contact information
          </h5>
          <p className="text-black-50 mb-4">Wonderful transition effects.</p>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Primary Contact Number"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Secondary Contact Number"
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="House No" variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="Street" variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="County" variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={handleChange2}
                  label="State">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>California</MenuItem>
                  <MenuItem value={20}>Texas</MenuItem>
                  <MenuItem value={30}>Alabama</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={handleChange2}
                  label="State">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>California</MenuItem>
                  <MenuItem value={20}>Texas</MenuItem>
                  <MenuItem value={30}>Alabama</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="Zip" variant="outlined" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
const Step3 = () => {
  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Work Information
          </h5>
          <p className="text-black-50 mb-4">
            The next and previous buttons help you to navigate through your
            content.
          </p>
          <Grid container spacing={6}>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Credit card number"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <TextField fullWidth label="Name on card" variant="outlined" />
            </Grid>
            <Grid item md={3}>
              <TextField fullWidth label="Exp. date" variant="outlined" />
            </Grid>
            <Grid item md={3}>
              <TextField fullWidth label="CVC/CVV" variant="outlined" />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};





// const [firstname, setFirstName] = useState("");
// const [lastname, setLastName] = useState("");



// async function  handleForm(val, type) {
//   var value = await val.target.value

//   switch(type){
//       case "firstname":
//           setFirstName(value)
//       break
//       case "lastname":
//           setLastName(value)
//   }
// }


function StepIcon(props) {
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  };

  return (
    <div
      className={clsx(
        'd-50 transition-base d-flex align-items-center bg-gray-400 justify-content-center rounded',
        {
          'd-80 bg-primary text-white shadow-primary-sm': active,
          'd-50 bg-success text-white shadow-success-sm': completed
        }
      )}>
      {completed ? <Check className="completed" /> : icons[String(props.icon)]}
    </div>
  );
}

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node
};

function getSteps() {
  return ['Personal Information', 'Contact Information', 'Work Information'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return <Step1 />;
  }
}

export default function LivePreviewExample() {


const [commitHistory, setCommitHistory] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    api.get(`/api/user?id=${handleUser().user.id}`).then((response) => {
      if(response.data){
    }else{
      alert('Something went wrong..')
    }
  });
});



  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };


  function editUser() {
    api.patch(`/api/user?id=${handleUser().user.id}`, {user: {first_name: "firstname", last_name: "lastname", remember_me: "0"}}).then((response) => {
      if(response.data){
        window.location.href = "/dashboard";
      }else{
        alert('Something went wrong..')
      }
    });
    console.log('The link was clicked.');
  }

  return (
    <Card className="card-box">
      <div className="card-header">
        <div className="card-header--title">
          <small>Edit Profile</small>
          <b>Fill the details</b>
        </div>
        {/* <div className="card-header--actions">
          <Tooltip title="Add new">
            <Button size="small" className="btn-primary d-30 p-0 btn-icon">
              <FontAwesomeIcon icon={['fas', 'plus-circle']} />
            </Button>
          </Tooltip>
        </div> */}
      </div>
      <div>
        <div className="bg-secondary mb-3">
          <Stepper
            className="stepper-horizontal-1"
            alternativeLabel
            activeStep={activeStep}
            connector={<StepConnector />}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {activeStep === steps.length ? (
          <div className="text-center p-5">
            <div className="avatar-icon-wrapper rounded-circle m-0">
              <div className="d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130">
                <FontAwesomeIcon
                  icon={['far', 'lightbulb']}
                  className="d-flex align-self-center display-3"
                />
              </div>
            </div>
            <h4 className="font-weight-bold mt-4">You finished all steps!</h4>
            <p className="mb-0 font-size-lg text-muted">
              Click the below button to Submit the form
            </p>
            <div className="pt-4">
              <Button
                onClick={editUser}
                className="btn-warning font-weight-bold rounded hover-scale-lg mx-1"
                size="large">
                <span className="btn-wrapper--label">Submit</span>
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div className="card-footer mt-4 p-4 d-flex align-items-center justify-content-between bg-secondary">
              <Button
                disabled={activeStep === 0}
                className="btn-primary font-weight-bold"
                onClick={handleBack}>
                Back
              </Button>
              <Button
                className="btn-primary font-weight-bold"
                onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
