import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';



import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';



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
import { handleUser } from '../../helper'


var userDetails = [{}]

const top100Films = [
  { title: 'HTML', year: 1994 },
  { title: 'CSS', year: 1972 },
  { title: 'Bootstrap', year: 1974 },
  { title: 'React', year: 2008 },
  { title: 'Ruby On Rails', year: 1957 },
  { title: "AngularJS", year: 1993 },
  { title: 'Javascript', year: 1994 },
  { title: 'Vue.js', year: 2003 },
  { title: 'Java', year: 1966 },
];

const Step1 = (props) => {

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

  useEffect(() => {
    console.log("step 1 >>>>>>>>>>>>>>>>>>>>>>>>", props)
  }, []);


const [data, setData] = useState({first_name: ""});

  useEffect(() => {

    api.get(`/api/user?id=${handleUser().user.id}`).then((response) => {
      if (response.data) {
        setData(response.data)
      } else {
        alert('Something went wrong..')
      }
    });
  }, []);


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
                onChange={(e) => props.handleStep1("first_name", e.target.value)}
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                onChange={(e) => props.handleStep1("middle_name", e.target.value)}
                label="Middle Name"
                variant="outlined"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                onChange={(e) => props.handleStep1("last_name", e.target.value)}
                label="Last Name"
                variant="outlined"
              />
            </Grid>

            <Grid item md={4}>
              <TextField
                value={data.email}
                fullWidth
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                label="Secondary Email"
                onChange={(e) => props.handleStep1("secondary_email", e.target.value)}
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                value={data.role}
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
const Step2 = (props) => {
  useEffect(() => {
  }, []);


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
                onChange={(e) => props.handleStep1("primary_contact_number", e.target.value)}
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Secondary Contact Number"
                onChange={(e) => props.handleStep1("secondary_contact_number", e.target.value)}
                variant="outlined"
                type="number"
              />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="House No"
                onChange={(e) => props.handleStep1("house_no", e.target.value)}
                variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="Street"
                onChange={(e) => props.handleStep1("street_no", e.target.value)}
                variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="County"
                onChange={(e) => props.handleStep1("county", e.target.value)}
                variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="Country"
                onChange={(e) => props.handleStep1("country", e.target.value)}
                variant="outlined" />
              {/* <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={(e)=>props.handleStep1("country", e.target.value)}
                  label="State">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>California</MenuItem>
                  <MenuItem value={20}>Texas</MenuItem>
                  <MenuItem value={30}>Alabama</MenuItem>
                </Select>
              </FormControl> */}
            </Grid>
            <Grid item md={4}>
              <TextField fullWidth label="State"
                onChange={(e) => props.handleStep1("state", e.target.value)}
                variant="outlined" />
              {/* <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={(e)=>props.handleStep1("state", e.target.value)}
                  label="State">
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={10}>California</MenuItem>
                  <MenuItem value={20}>Texas</MenuItem>
                  <MenuItem value={30}>Alabama</MenuItem>
                </Select>
              </FormControl> */}
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
const Step3 = (props) => {
  useEffect(() => {
  }, []);
  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Other Information
          </h5>
          <p className="text-black-50 mb-4">
            The next and previous buttons help you to navigate through your
            content.
          </p>
          <Grid container spacing={6}>
            <Grid item md={6}>
              <TextField
                fullWidth
                onChange={(e) => props.handleStep1("skype_name", e.target.value)}
                label="Skype Name"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="linkedin Url"
                onChange={(e) => props.handleStep1("linkedin_url", e.target.value)}
                variant="outlined" />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Portfolio Website"
                onChange={(e) => props.handleStep1("portfolio_website", e.target.value)}
                variant="outlined" />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Work Eligbility"
                onChange={(e) => props.handleStep1("work_eligbility", e.target.value)}
                variant="outlined" />
            </Grid>


            <Grid item md={12}>
              <Autocomplete
                multiple
                id="fixed-tags-demo"
                options={top100Films}
                getOptionLabel={option => option.title}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip label={option.title} {...getTagProps({ index })} />
                  ))
                }
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Add Skills"
                    onChange={(e) => props.handleStep1("skills", e.target.value)}
                    variant="outlined"
                    placeholder="Skills"
                    fullWidth
                  />
                )}
              />
            </Grid>



          </Grid>
        </div>
      </Container>
    </>
  );
};





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
function handleStep1(type, val) {

  var value = val
  var type = type

  switch (type) {
    case "first_name":
      userDetails.first_name = value
      break
    case "last_name":
      userDetails.last_name = value
      break
    case "middle_name":
      userDetails.middle_name = value
      break
    case "secondary_email":
      userDetails.secondary_email = value
      break
    case "primary_contact_number":
      userDetails.primary_contact_number = value
      break
    case "secondary_contact_number":
      userDetails.secondary_contact_number = value
      break
    case "house_no":
      userDetails.house_no = value
      break
    case "street_no":
      userDetails.street_no = value
      break
    case "county":
      userDetails.county = value
      break
    case "country":
      userDetails.country = value
      break
    case "state":
      userDetails.state = value
      break
    case "linkedin_url":
      userDetails.linkedin_url = value
      break
    case "skype_name":
      userDetails.skype_name = value
      break
    case "portfolio_website":
      userDetails.portfolio_website = value
      break
    case "zip":
      userDetails.postal_code = value
      break
    case "skills":
      userDetails.skills = value
      break
  }
}

function getStepContent(step) {

  switch (step) {
    case 0:
      return <Step1 handleStep1={handleStep1} />;
    case 1:
      return <Step2 handleStep1={handleStep1} />;
    case 2:
      return <Step3 handleStep1={handleStep1} />;
    default:
      return <Step1 handleStep1={handleStep1} />;
  }
}

export default function LivePreviewExample() {


  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     api.get(`/api/user?id=${handleUser().user.id}`).then((response) => {
  //       var userdata = response.data
  //       if(response.data){
  //     }else{
  //       alert('Something went wrong..')
  //     }
  //   });
  // });
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
    api.patch(`/api/user?id=${handleUser().user.id}`, { user: { first_name: userDetails.first_name, middle_name: userDetails.middle_name, last_name: userDetails.last_name, contact_number: userDetails.primary_contact_number, secondary_email: userDetails.secondary_email, work_eligbility: userDetails.work_eligbility, skype_name: userDetails.skype_name, linkedin_url: userDetails.linkedin_url, portfolio_website: userDetails.portfolio_website, home_number: userDetails.home_number, street: userDetails.street, city: userDetails.city, county: userDetails.county, country: userDetails.country, postal_code: userDetails.postal_code } }).then((response) => {
      if (response.data) {
        window.location.href = "/dashboard";
      } else {
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
