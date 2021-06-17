import React, { useState } from 'react';

import { Card, Grid, Button, TextField } from '@material-ui/core';
import Select from 'react-select';
import WorkIcon from '@material-ui/icons/Work';
import { validEmailRegex } from 'helper';

import SearchJobsComponent from '../search/search-jobs';
import SearchLocationComponent from '../search/search-location';
import { jobType } from '../../constants'; //import from your constants.js

export default function AddJobsComponent() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let type = params.get('as');

  let [account, setAccount] = useState({
    jobName: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    contact_number: '',
    company_name: '',
    country: '',
    address: '',
    role: type,
    subscribed: false
  });

  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    jobName: '',
    password: '',
    confirm_password: '',
    role: '',
    contact_number: '',
    company_name: '',
    country: '',
    address: '',
    policyCheckbox: ''
  });

  let handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'first_name':
        setErrors({
          ...errors,
          first_name:
            value.length > 1 ? '' : 'Minimum two character is required!'
        });
        break;
      case 'last_name':
        setErrors({
          ...errors,
          last_name:
            value.length > 1 ? '' : 'Minimum two character is required!'
        });
        break;
      case 'jobName':
        setErrors({
          ...errors,
          jobName: validEmailRegex(value) ? '' : 'Email is not valid!'
        });
        break;
      case 'company_name':
        setErrors({
          ...errors,
          company_name:
            value.length > 1 ? '' : 'Minimum two character is required!'
        });
        break;
      case 'contact_number':
        setErrors({
          ...errors,
          contact_number:
            value.length > 10 ? '' : 'Minimum 10 digits is required!'
        });
        break;
      case 'address':
        setErrors({
          ...errors,
          address: value.length > 1 ? '' : 'Minimum two character is required!'
        });
        break;
      case 'role':
        setErrors({
          ...errors,
          role: value.length < 5 ? '' : 'Role is required!'
        });
        break;
      default:
        break;
    }

    account[name] = value;
    setAccount(account);
  };

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));

    setErrors({
      ...errors,
      first_name:
        account.first_name.length === 0 ? 'First name is required!' : '',
      last_name: account.last_name.length === 0 ? 'Last name is required!' : '',
      contact_number:
        account.contact_number.length === 0 ? 'Contact number required!' : '',
      company_name:
        account.company_name.length === 0 ? 'Company name is required!' : '',
      address: account.address.length === 0 ? 'Address is required!' : '',
      // country: account.country.length === 0 ? 'Country is required!' : '',
      email: account.email.length === 0 ? 'Email is required' : '',
      password: account.password.length === 0 ? 'Password is required!' : '',
      role: account.role.length === 0 ? 'Role is required!' : '',
      confirm_password:
        account.confirm_password.length === 0
          ? 'Confirm password is required!'
          : account.password === account.confirm_password
          ? ''
          : 'Confirm password not match!',
      country: account.country.length === 0 ? 'Country is required!' : ''
    });
    return valid;
  };

  let userRegister = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      return;
    }

    console.log('The link was clicked.');
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <h5 className="heading">Add manual Job</h5>
        </div>
      </div>
      <Card>
        <Grid container spacing={2} className="min-vh-100">
          <Grid item md={10} lg={8} xl={7} className="mx-auto p-3">
            <div className="p-3">
              <form method="post" onSubmit={userRegister}>
                <div className="mb-3">
                  <label className="font-weight-bold mb-2">
                    Job Name <span className="text-danger">*</span>
                  </label>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="jobName"
                    onChange={handleChange}
                    fullWidth
                    placeholder="Enter job name"
                    type="text"
                  />
                  {errors.jobName.length > 0 && (
                    <span className="error">{errors.jobName}</span>
                  )}
                </div>

                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <label className="font-weight-bold mb-2">
                        Job type
                        <span className="text-danger">*</span>
                      </label>
                      <Select
                        options={jobType}
                        placeholder="Select job type"
                        className="z-over"
                      />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <div className="d-flex justify-content-between">
                        <label className="font-weight-bold mb-2">
                          Job Title <span className="text-danger">*</span>
                        </label>
                      </div>
                      <SearchJobsComponent searchQuery={{}} />
                      {errors.password.length > 0 && (
                        <span className="error">{errors.password}</span>
                      )}
                    </Grid>
                  </Grid>
                </div>

                <div>
                  <Grid container spacing={2}>
                    <Grid item lg={6} xl={6}>
                      <label className="font-weight-bold mb-2">
                        Start Date
                        <span className="text-danger">*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="salary_low"
                        onChange={handleChange}
                        placeholder="Enter your salary low"
                      />

                      {errors.contact_number.length > 0 && (
                        <span className="error">{errors.contact_number}</span>
                      )}
                    </Grid>
                    <Grid item lg={6} xl={6}>
                      <label className="font-weight-bold mb-2">
                        End Date <span className="text-danger">*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="text"
                        name="salary_hight"
                        onChange={handleChange}
                        placeholder="Enter your Company Name"
                      />
                      {errors.company_name.length > 0 && (
                        <span className="error">{errors.company_name}</span>
                      )}
                    </Grid>
                  </Grid>
                </div>
                <div className="mb-3">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <label className="font-weight-bold mb-2">
                        Salary low
                        <span className="text-danger">*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="number"
                        InputProps={{
                          inputProps: {
                            min: 0
                          }
                        }}
                        name="salary_low"
                        onChange={handleChange}
                        placeholder="Enter your salary low"
                      />

                      {errors.contact_number.length > 0 && (
                        <span className="error">{errors.contact_number}</span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label className="font-weight-bold mb-2">
                        Salary Hight <span className="text-danger">*</span>
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        type="number"
                        InputProps={{
                          inputProps: {
                            min: 0
                          }
                        }}
                        name="salary_hight"
                        onChange={handleChange}
                        placeholder="Enter your Company Name"
                      />
                      {errors.company_name.length > 0 && (
                        <span className="error">{errors.company_name}</span>
                      )}
                    </Grid>
                  </Grid>
                </div>

                <div className="mb-3">
                  <label className="font-weight-bold mb-2">
                    Location of Registration{' '}
                    <span className="text-danger">*</span>
                  </label>
                  <SearchLocationComponent searchQuery={{}} />
                </div>

                <div className="mb-3">
                  <label className="font-weight-bold mb-2">
                    Description <span className="text-danger">*</span>
                  </label>
                  <TextField
                    fullWidth
                    multiline
                    rows="4"
                    variant="outlined"
                    size="small"
                    placeholder="Enter description"
                    id="input-with-icon-textfield2"
                    name="description"
                    onChange={handleChange}
                  />
                  {errors.address.length > 0 && (
                    <span className="error">{errors.address}</span>
                  )}
                </div>

                <div className="float-right">
                  <Button size="small" className="btn-primary mb-5 mr-2">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    size="small"
                    className="btn-primary mb-5">
                    Create Job
                  </Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
