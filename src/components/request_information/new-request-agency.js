import React, { useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, TextField, Button } from '@material-ui/core';
import Select from 'react-select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { getCurrentUser } from 'helper';

const agencyFiltersOptions = [
  {
    value: 'candidate',
    label: 'Candidate'
  },
  {
    value: 'company',
    label: 'Company'
  }
];

const companyFiltersOptions = [
  {
    value: 'candidate',
    label: 'Candidate'
  },
  {
    value: 'agency',
    label: 'Agency'
  }
];

const documentOptions = [
  {
    value: 'docuemnt-1',
    label: 'Document 1'
  },
  {
    value: 'last_week',
    label: 'Document 2'
  },
  {
    value: 'last_2-weeks',
    label: 'Document 3'
  }
];

const reasonOptions = [
  {
    value: 'registration',
    label: 'Registration'
  },
  {
    value: 'onboarding',
    label: 'Onboarding'
  },
  {
    value: 'placement',
    label: 'Placement'
  }
];

const reasonCompanyOptions = [
  {
    value: 'registration',
    label: 'Due diligence'
  },
  {
    value: 'onboarding',
    label: 'Sign_up'
  },
  {
    value: 'placement',
    label: 'Placement'
  }
];

export default function AddNewRequestComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [requestFilter, setRequestFilter] = useState({
    value: 'candidate',
    label: 'Candidate'
  });
  const [reason, setReason] = useState('');
  const [documents, setDocuments] = useState('');
  const [requestObj, setRequestObj] = useState({
    name: '',
    id: '',
    jobId: '',
    jobTitle: ''
  });
  const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const filterJobs = (filter) => {
    setRequestFilter(filter);
    cancelRequest();
  };

  const handleChanges = (e) => {
    setRequestObj({ ...requestObj, [e.target.name]: e.target.value });
  };

  const sendRequest = () => {
    console.log(requestObj, requestObj);
    cancelRequest();
  };

  const cancelRequest = () => {
    setRequestObj({ ...requestObj, name: '', id: '', jobId: '', jobTitle: '' });
    setReason('');
    setDocuments('');
    setSelectedDate(new Date('2020-08-18'));
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading nowrap">Add New Requests for Information</b>
        </div>
      </div>

      <Card className="p-3">
        <div className="font-weight-bold">New Requests</div>
        <div className="divider my-3" />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Select
                  options={
                    currentUser.role === 'Agency'
                      ? agencyFiltersOptions
                      : companyFiltersOptions
                  }
                  value={requestFilter}
                  onChange={filterJobs}
                  placeholder="Add New Request Select"
                  styles={{
                    menu: (provided) => ({ ...provided, zIndex: 9999 })
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  name="name"
                  value={requestObj.name}
                  onChange={handleChanges}
                  label={
                    requestFilter.value === 'candidate'
                      ? 'Candidate Name'
                      : requestFilter.value === 'company'
                      ? 'Company Name'
                      : 'Agency Name'
                  }
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="id"
                      value={requestObj.id}
                      onChange={handleChanges}
                      label={
                        requestFilter.value === 'candidate'
                          ? 'Candidate ID'
                          : requestFilter.value === 'company'
                          ? 'Company ID'
                          : 'Agency ID'
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="jobId"
                      onChange={handleChanges}
                      value={requestObj.jobId}
                      label="Job or (Placement) ID"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="jobTitle"
                      onChange={handleChanges}
                      value={requestObj.jobTitle}
                      label="Job Title"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Select
                  options={
                    requestFilter.value === 'candidate'
                      ? reasonOptions
                      : reasonCompanyOptions
                  }
                  value={reason}
                  onChange={setReason}
                  placeholder="Reason for Request"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Select
                  hideSelectedOptions={documents.length < 3 ? true : false}
                  isMulti
                  options={documentOptions}
                  value={documents}
                  onChange={setDocuments}
                  placeholder={
                    currentUser.role === 'agency'
                      ? 'Documents for Request'
                      : 'Documents Requested'
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    className="w-100"
                    label="Due Date"
                    value={selectedDate}
                    autoOk={true}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid item xs={12} sm={12}>
                <div className="float-right">
                  <Button
                    variant="contained"
                    onClick={sendRequest}
                    className="font-weight-bold btn-second px-4 my-1 mr-3">
                    Send Request
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    onClick={cancelRequest}
                    className="font-weight-bold btn-second px-4 my-1">
                    Cancel
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
