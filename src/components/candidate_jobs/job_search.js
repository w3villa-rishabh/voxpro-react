/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  Dialog,
  Divider,
  TextField,
  Container,
  Stepper,
  StepLabel,
  StepConnector,
  Step
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSearchResult, callSearch } from '../../reducers/ThemeOptions';
import AddsComponents from 'components/add_component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SearchComponent from './search-component';
import api from '../../api';
import { toast } from 'react-toastify';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import Pagination from '@material-ui/lab/Pagination';

// stepper

import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const distanceObj = [
  {
    value: '5 miles',
    label: '5 miles'
  },
  {
    value: '10 miles',
    label: '10 miles'
  },
  {
    value: '20 miles',
    label: '20 miles'
  },
  {
    value: '30 miles',
    label: '30 miles'
  },
  {
    value: '40 miles',
    label: '40 miles'
  },
  {
    value: '50 miles',
    label: '50 miles'
  }
];

const jobPosted = [
  {
    value: 'anytime',
    label: 'Anytime'
  },
  {
    value: 'last_3_days',
    label: 'Last 3 Days'
  },
  {
    value: 'last_week',
    label: 'Last Week'
  },
  {
    value: 'last_2-weeks',
    label: 'Last 2 Weeks'
  }
];

const dolorPrice = [
  {
    value: '10,000',
    label: '10,000'
  },
  {
    value: '20,000',
    label: '20,000'
  },
  {
    value: '30,000',
    label: '30,000'
  },
  {
    value: '40,000',
    label: '40,000'
  },
  {
    value: '50,000',
    label: '50,000'
  },
  {
    value: '60,000',
    label: '60,000'
  },
  {
    value: '70,000',
    label: '70,000'
  },
  {
    value: '80,000',
    label: '80,000'
  },
  {
    value: '90,000',
    label: '90,000'
  }
];

const SmartText = ({ text, length = 500 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {showLess ? `${text.slice(0, length)}...` : text}{' '}
        <a
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setShowLess(!showLess)}>
          &nbsp;See {showLess ? 'More' : 'Less'}
        </a>
      </p>
    </div>
  );
};

const Step1 = () => {
  const [currentUser] = useState(getCurrentUser());
  let [account, setAccount] = useState({
    email: currentUser.email,
    contact_number: currentUser.contact_number,
    country_code: ''
  });
  const changeHandler = (value) => {
    setAccount({ ...account, country_code: value });
  };
  let handleChange = (event) => {
    const { name, value } = event.target;
    account[name] = value;
    setAccount(account);
  };

  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Contact information
          </h5>
          <Grid container spacing={2} className="p-3">
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
                    {currentUser.first_name} {currentUser.last_name}
                  </a>
                  <span className="text-black-50 d-block">
                    {currentUser.city}
                  </span>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              <TextField
                variant="outlined"
                size="small"
                label="email"
                placeholder="town or postcode"
                id="input-with-icon-textfield1"
                className="w-100 mb-4"
                value={'rishabhcs0109@gmail.com'}
              />
            </Grid>

            <Grid
              item
              xs={6}
              // md={6}
              className="d-flex align-items-center">
              <TextField
                variant="outlined"
                size="small"
                label="city"
                placeholder=""
                id="input-with-icon-textfield1"
                className="w-100 mb-4"
                value="London"
              />
            </Grid>
            <Grid
              item
              xs={6}
              // md={6}
              className="d-flex align-items-center">
              <TextField
                variant="outlined"
                size="small"
                label="phone number"
                placeholder="town or postcode"
                id="input-with-icon-textfield1"
                name="contact_number"
                onChange={handleChange}
                className="w-100 mb-4"
              />
            </Grid>
            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              Submitting your application won't change your profile
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};
const Step2 = () => {
  const [state, setState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [currentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);
  const [resume, setResume] = useState([]);

  useEffect(() => {
    getResume();
  }, []);

  function getResume() {
    setIsLoading(true);
    api
      .get(`/api/v1/users/candidates_resume?user_id=${currentUser.id}`)
      .then((response) => {
        setIsLoading(false);
        if (response.data.success) {
          setResume([response.data.cv]);
        } else {
          console.log('cv not found');
        }
      });
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
    // 	fetch(
    // 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
    // 		{
    // 			method: 'POST',
    // 			body: formData,
    // 		}
    // 	)
    // 		.then((response) => response.json())
    // 		.then((result) => {
    // 			console.log('Success:', result);
    // 		})
    // 		.catch((error) => {
    // 			console.error('Error:', error);
    // 		});
    // };
  };

  // const handleChange = (event) => {
  //   setState(event.target.value);
  // };

  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">Resume</h5>
          <p className="text-black-50 mb-4"></p>
          <h3 className="font-size-xl mb-1 font-weight-bold">
            Be sure to include an updated resume*
          </h3>

          {resume.length !== 0 && (
            <div className="document-thumb avatar-icon-wrapper shadow-sm-dark border-white rounded">
              <div className="avatar-icon rounded d-100">
                <img alt="..." src={resume.doc_ur} />
              </div>
            </div>
          )}

          <br />
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          {/* <div>
            <button onClick={handleSubmission}>Submit</button>
          </div> */}

          <Button
            size="small"
            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2"
            onClick={handleSubmission}>
            {/* <span className="px-2">
              <FontAwesomeIcon icon={['fas', 'bell']} />
            </span> */}
            <span>Upload resume</span>
          </Button>
        </div>
        <Grid
          item
          xs={12}
          // md={6}
          className="d-flex align-items-center">
          Submitting your application won't change your profile
        </Grid>
      </Container>
    </>
  );
};
const Step3 = () => {
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <Container>
        <div className="p-4">
          <h5 className="font-size-xl mb-1 font-weight-bold">
            Review your application
          </h5>
          <p className="text-black-50 mb-4"></p>
          <Grid container spacing={2} className="p-3">
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
                    {currentUser.first_name} {currentUser.last_name}
                  </a>
                  <span className="text-black-50 d-block">
                    {currentUser.city}
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              Email address: <br />
              {/* {account.email} */}
            </Grid>
            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              Phone country code: <br />
              India (+91)
            </Grid>
            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              Mobile phone number: <br />
              7007864900
            </Grid>
            <Divider />

            <Grid
              item
              xs={12}
              // md={6}
              className="d-flex align-items-center">
              <h3 className="font-size-xl mb-1 font-weight-bold">Resume</h3>
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
  return ['Contact Information', 'Resume Information', 'Review'];
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

const JobSearchComponent = (props) => {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());

  const [filterApplied, setFilterApplied] = useState([]);
  const [state, setState] = useState(props.searchFilter);
  const [openApplyBox, setOpenApplyBox] = useState({ open: false, job: [] });

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

  const {
    permanent,
    temporary,
    contract,
    fullTime,
    partTime,
    agencyPost,
    employerPost,
    startSalary,
    endSalary,
    distance,
    relevant,
    careAssistant,
    nursing,
    registerNurse,
    NHS,
    staffNurse,
    datePost
  } = state;

  useEffect(() => {
    props.setSearchResult([]);
    props.callSearch(true, props.searchFilter);
  }, []);

  const handleExpModalClose = () => {
    setOpenApplyBox({ open: false, job: [] });
    setActiveStep(0);
  };

  const getJobsFilters = (state, page) => {
    let filleter = [];
    for (const [key, value] of Object.entries(state)) {
      if (key !== 'page' && !!value) {
        switch (key) {
          case 'permanent':
            filleter.push({
              name: 'Permanent',
              key
            });
            break;
          case 'temporary':
            filleter.push({
              name: 'Temporary',
              key
            });
            break;
          case 'contract':
            filleter.push({
              name: 'Contract',
              key
            });
            break;
          case 'fullTime':
            filleter.push({
              name: 'Full time',
              key
            });
            break;
          case 'partTime':
            filleter.push({
              name: 'Part time',
              key
            });
            break;
          case 'agencyPost':
            filleter.push({
              name: 'Agency Post',
              key
            });
            break;
          case 'employerPost':
            filleter.push({
              name: 'Employer Post',
              key
            });
            break;
          case 'startSalary':
            filleter.push({
              name: value,
              key
            });
            break;
          case 'endSalary':
            filleter.push({
              name: value,
              key
            });
            break;

          case 'distance':
            filleter.push({
              name: value,
              key
            });
            break;

          default:
            break;
        }
      } else if (key === 'page') {
        state[key] = page;
      }
    }

    props.callSearch(true, state);
    setFilterApplied([...filleter]);
    setState({ ...state });
  };

  const removeFilter = (key, index) => {
    let getStatue = state[key];
    let value = getStatue === true ? false : getStatue === false ? false : '';

    state[key] = value;
    filterApplied.splice(index, 1);

    setFilterApplied([...filterApplied]);
    getJobsFilters(state, 1);
  };

  const removeAllFilter = () => {
    let allFilter = state;
    for (const [key, value] of Object.entries(allFilter)) {
      if (key !== 'page') {
        let v = value === true ? false : value === false ? false : '';
        state[key] = v;
      } else if (key === 'page') {
        state[key] = 1;
      }
    }
    setFilterApplied([]);
    getJobsFilters(state, 1);
  };

  const viewJob = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-job',
      state: {
        id
      }
    });
  };

  const saveJob = (e, job, index) => {
    e.preventDefault();
    console.log('doc', job);
    api
      .post(
        `/api/v1/jobs/${
          job.id
        }/save_job?status=${(job.favorite = !job.favorite)}`
      )
      .then(
        (response) => {
          if (response.data.success) {
            toast.success(response.data.message);
            props.searchResult[index] = response.data.job;
            props.setSearchResult([...props.searchResult]);
          } else {
            toast.error('error in saving job..');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const hideJob = (e, job, index) => {
    e.preventDefault();
    api.post(`/api/v1/jobs/${job.id}/hide_job?hide=${true}`).then(
      (response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          props.searchResult.splice(index, 1);
          props.setSearchResult([...props.searchResult]);
        } else {
          toast.error('error in saving job..');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const viewMoreResult = (event, newPage) => {
    props.searchFilter.page = newPage;
    getJobsFilters(props.searchFilter, newPage);
  };

  const handleChange = (event) => {
    state[event.target.name] = event.target.checked;
    getJobsFilters(state, 1);
  };

  const handelSearch = (event) => {
    state[event.target.name] = event.target.value;
    getJobsFilters(state, 1);
  };

  const recentApply = (event) => {
    state['relevant'] = event.target.checked;
    getJobsFilters(state, 1);
  };

  return (
    <>
      <SearchComponent />

      <Grid container spacing={0} className="mt-5">
        <Grid item xs={12} sm={3}>
          <div className="title pl-2">
            <h6 className="font-size-xxl text-capitalize">
              {props.searchPages ? props.searchPages.total : 0}{' '}
              {props.searchFilter.query
                ? props.searchFilter.query
                : 'Jobs found'}
            </h6>
            <div className="d-flex">
              <b>Applied filters</b>
              <a
                href="#/"
                className="a-blue ml-1 font-weight-bold"
                onClick={(e) => {
                  e.preventDefault();
                  removeAllFilter();
                }}>
                clear all
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            size="small"
            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
            <span className="px-2">
              <FontAwesomeIcon icon={['fas', 'bell']} />
            </span>
            <span>Get job alert</span>
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div className="m-2 mt-3 float-right">
            <div className="d-flex">
              <div style={{ position: 'relative', right: '-90px', top: '5px' }}>
                <b className="nowrap">Sort results by most</b>
              </div>
              <label
                className="checkbox toggle candy"
                style={{ width: '165px' }}>
                <input
                  id="view"
                  type="checkbox"
                  checked={relevant}
                  onClick={recentApply}
                />
                <p>
                  <span>Relevant</span>
                  <span>Recent</span>
                </p>

                <a className="slide-button"></a>
              </label>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="mt-3">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <ul className="cards-filter">
              {filterApplied.map((filter, index) => (
                <li key={index} className="cards__item">
                  <div>
                    <span>{filter.name}</span>
                    <FontAwesomeIcon
                      className="ml-2 pt-1 a-blue"
                      icon={['fas', 'times']}
                      onClick={() => {
                        removeFilter(filter.key, index);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Filter your search</h4>
              <div className="px-3 py-2">
                <div>
                  <label className="font-weight-bold">Distance</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={distance}
                    onChange={handelSearch}
                    name="distance">
                    <option value="">Select Distance</option>
                    {distanceObj.map((dis) => (
                      <option value={dis.value}>{dis.label}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-3">
                  <b>Salary range</b>
                </div>
                <div>
                  <label className="font-weight-bold mt-2">From:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={startSalary}
                    onChange={handelSearch}
                    name="startSalary">
                    <option value="0">Start at</option>
                    {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))}
                  </select>
                  <label className="font-weight-bold mt-2">To:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    value={endSalary}
                    onChange={handelSearch}
                    name="endSalary">
                    <option value="0">End at</option>
                    {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Job type</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={permanent}
                              onChange={handleChange}
                              name="permanent"
                            />
                          }
                          label="Permanent"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={temporary}
                              onChange={handleChange}
                              name="temporary"
                            />
                          }
                          label="Temporary"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={contract}
                              onChange={handleChange}
                              name="contract"
                            />
                          }
                          label="Contract"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={fullTime}
                              onChange={handleChange}
                              name="fullTime"
                            />
                          }
                          label="Full-time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={partTime}
                              onChange={handleChange}
                              name="partTime"
                            />
                          }
                          label="Part-time"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Date posted</b>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    onChange={handelSearch}
                    value={datePost}
                    name="datePost">
                    {jobPosted.map((post) => (
                      <option value={post.value}>{post.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Specialisms</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={agencyPost}
                              onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={employerPost}
                              onChange={handleChange}
                              name="employer"
                            />
                          }
                          label="Employer"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Post by</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={agencyPost}
                              onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={employerPost}
                              onChange={handleChange}
                              name="employer"
                            />
                          }
                          label="Employer"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <div className="mt-3">
                  <b>Related jobs</b>
                  <div>
                    <FormControl component="fieldset">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={nursing}
                              onChange={handleChange}
                              name="nursing"
                            />
                          }
                          label="Nursing"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={registerNurse}
                              onChange={handleChange}
                              name="registerNurse"
                            />
                          }
                          label="Register Nurse"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={NHS}
                              onChange={handleChange}
                              name="NHS"
                            />
                          }
                          label="NHS"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={staffNurse}
                              onChange={handleChange}
                              name="staffNurse"
                            />
                          }
                          label="Staff Nurse"
                        />
                      </FormGroup>

                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={careAssistant}
                              onChange={handleChange}
                              name="careAssistant"
                            />
                          }
                          label="Care Assistant"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {props.searchResult.length ? (
              <>
                {props.searchResult.map((job, index) => (
                  <div className="card card-box gutter-b card-stretch bg-white btn rounded text-left py-2 mb-2">
                    <div key={index}>
                      <Grid container spacing={0}>
                        <Grid item xs={12} sm={9} className="px-3">
                          <div className="py-2">
                            <div className="card-header--title">
                              <h2
                                className="a-blue"
                                onClick={(e) => viewJob(e, job.id)}>
                                {job.job_title}
                              </h2>
                              <p>Posted 1 week ago</p>
                            </div>
                          </div>
                          <div className="">
                            <Grid container spacing={0}>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'rupee-sign']}
                                />

                                <b>
                                  £{job.salary_low} - £{job.salary_high}
                                </b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'map-marker-alt']}
                                />

                                <b>{job.location}</b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'clock']}
                                />

                                <b>{job.job_type}</b>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <FontAwesomeIcon
                                  className="mr-2"
                                  icon={['fas', 'user']}
                                />

                                <b>Be one of the first ten applicants</b>
                              </Grid>
                            </Grid>
                          </div>
                          <div className="mt-2">
                            <SmartText text={job.description} />
                          </div>
                        </Grid>
                        <Grid item xs={12} sm={3} className="px-3 py-2">
                          <div className="d-flex border flex-column justify-content-between">
                            <div>
                              <img
                                style={{ height: '90px', width: '100%' }}
                                className=""
                                alt="..."
                                src={job.company_logo}
                              />
                            </div>
                            <div className="d-flex flex-column"></div>
                          </div>
                          <Button
                            fullWidth
                            size="small"
                            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2"
                            onClick={(e) => saveJob(e, job, index)}>
                            <span className="px-2">
                              <FontAwesomeIcon
                                icon={
                                  job.favorite
                                    ? ['fas', 'heart']
                                    : ['far', 'heart']
                                }
                              />
                            </span>
                            <span>
                              {job.favorite ? 'Shortlisted' : 'Shortlist'}
                            </span>
                          </Button>
                          <Button
                            fullWidth
                            size="small"
                            onClick={(e) => hideJob(e, job, index)}
                            className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                            <span className="px-2">
                              <FontAwesomeIcon icon={['fas', 'eye-slash']} />
                            </span>
                            <span>Hide</span>
                          </Button>
                          <Button
                            fullWidth
                            size="small"
                            className="btn-danger font-size-lg font-weight-bold hover-scale-sm mt-2"
                            onClick={() =>
                              setOpenApplyBox({
                                open: true,
                                job: job
                              })
                            }>
                            <span>Apply now</span>
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="font-size-xxl m-5 text-center">No data found</div>
            )}

            {props.searchResult.length >= 1 && (
              <div className="p-3 d-flex justify-content-center">
                <Pagination
                  className="pagination-primary"
                  onChange={viewMoreResult}
                  page={props.searchFilter.page}
                  count={props.searchPages ? props.searchPages.total_pages : 0}
                />
              </div>
            )}
          </Grid>
        </Grid>
        {/* expire doc view details show */}
        <Dialog
          onClose={handleExpModalClose}
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
            <div>
              <div className="bg-secondary mb-3">
                <Stepper
                  className="stepper-horizontal-1"
                  alternativeLabel
                  activeStep={activeStep}
                  connector={<StepConnector />}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={StepIcon}>
                        {label}
                      </StepLabel>
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
                  <h4 className="font-weight-bold mt-4">
                    Successfully Applied For the Job!
                  </h4>
                  <p className="mb-0 font-size-lg text-muted"></p>
                  <div className="pt-4">
                    <Button
                      onClick={handleExpModalClose}
                      className="btn-warning font-weight-bold rounded hover-scale-lg mx-1"
                      size="large">
                      <span className="btn-wrapper--label">Close</span>
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
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Dialog>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
};

const mapStateToProps = (state) => ({
  searchResult: state.ThemeOptions.searchResult,
  searchFilter: state.ThemeOptions.searchFilter,
  searchPages: state.ThemeOptions.searchPages
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchResult: (search) => dispatch(setSearchResult(search)),
    callSearch: (status, searchFilter) =>
      dispatch(callSearch(status, searchFilter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearchComponent);
