import React, { useEffect, useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, TextField, Button } from '@material-ui/core';
import Select from 'react-select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { toast } from 'react-toastify';
import { getCurrentUser } from 'helper';
import api from '../../api';

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

export default function AddNewRequestComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [requestFilter, setRequestFilter] = useState({
    value: 'candidate',
    label: 'Candidate'
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [documents, setDocuments] = useState('');
  const [doRequest, setDoRequest] = useState(false);
  const [requestObj, setRequestObj] = useState({
    name: '',
    id: 0,
    jobId: '',
    jobTitle: '',
    reason: '',
    document: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    id: '',
    reason: '',
    document: ''
  });
  const [categories, setCategories] = useState([]);
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = () => {
    return api.get('/api/v1/categories/all_sub_categories').then(
      (response) => {
        if (response.data.success) {
          console.log('response.data', response.data);
          let categories = response.data.categories.map((cat) => ({
            value: cat.id,
            label: cat.name
          }));

          setCategories([...categories]);
        }
      },
      (error) => {
        console.error('error', error);
      }
    );
  };

  const search = (search) => {
    if (search.length < 2) {
      return;
    }

    api.get(`/api/v1/users/candidate_search?q=${search}`).then(
      (response) => {
        toast.dismiss();
        if (response.data.success) {
          console.log('response.data', response.data);
          setSearchUser([...response.data.users]);
        } else if (!searchUser.length) {
          toast.error('No available..');
        }
      },
      (error) => {
        console.error('error', error);
      }
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const filterJobs = (filter) => {
    setRequestFilter(filter);
    cancelRequest();
  };

  const cancelRequest = () => {
    setRequestObj({
      ...requestObj,
      name: '',
      id: 0,
      jobId: '',
      jobTitle: '',
      reason: '',
      document: ''
    });
    setDocuments('');
    setSearchUser([]);
    setSelectedDate(new Date('2020-08-18'));
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          name: value.length > 2 ? '' : 'Name is required!'
        });
        break;
      case 'id':
        setErrors({
          ...errors,
          id: value.length > 1 ? '' : 'Id is required!'
        });
        break;

      case 'reason':
        setErrors({
          ...errors,
          reason: value.length > 2 ? '' : 'Reason is required!'
        });
        break;
      default:
        break;
    }

    requestObj[name] = value;
    setRequestObj(requestObj);
  };

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length >= 0 && (valid = false));

    setErrors({
      ...errors,
      name: requestObj.name.length === 0 ? 'Name is required!' : '',
      id: requestObj.id === 0 ? 'Id is required!' : '',
      // jobId: requestObj.jobId.length === 0 ? 'Job is required!' : '',
      // jobTitle:
      //   requestObj.jobTitle.length === 0 ? 'Job title is required!' : '',
      reason: requestObj.reason.length === 0 ? 'Reason is required!' : '',
      document: documents.length === 0 ? 'Document is required!' : ''
    });

    return valid;
  };

  const sendRequest = () => {
    console.log(requestObj, documents);
    validateForm(errors);
    if (!requestObj.id || !requestObj.reason || !documents.length) {
      return;
    }
    setDoRequest(true);
    let obj = {
      request_type: requestFilter.value,
      created_by_id: currentUser.id,
      company_id: 1, // has to change when we relate user to company
      reason: requestObj.reason,
      due_date: selectedDate,
      user_id: requestObj.id,
      job_id: requestObj.jobId,
      job_title: requestObj.jobTitle,
      requested_categories_attributes: documents.map((a) => ({
        category_id: a.value
      }))
    };

    api
      .post(`/api/v1/request_for_informations`, {
        request_for_information: obj
      })
      .then(
        (response) => {
          setDoRequest(false);
          toast.dismiss();
          if (response.data.success) {
            console.log('response.data', response.data);
            cancelRequest();
            toast.success(response.data.message);
          }
        },
        (error) => {
          setDoRequest(false);
          toast.error(error);
          console.error('error', error);
        }
      );
  };

  const selectUser = (user) => {
    console.log('selectUser', user);
    setRequestObj({
      ...requestObj,
      id: user.id,
      name: user.first_name + ' ' + user.last_name
    });
    setSearchUser([]);
  };

  const closeDropDown = () => {
    if (searchUser.length) {
      setSearchUser([]);
    }
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading nowrap">Add New Requests for Information</b>
        </div>
      </div>

      <Card className="p-3" onClick={closeDropDown}>
        <div className="font-weight-bold">New Requests</div>
        <div className="divider my-3" />
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Select
                  options={
                    currentUser.role === 'agency'
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
                <div className="user-new-request">
                  <TextField
                    variant="outlined"
                    size="small"
                    name="name"
                    fullWidth
                    autoComplete="off"
                    value={requestObj.name}
                    onChange={handleChanges}
                    onKeyUp={(e) => {
                      if (e.key === 'Backspace' && e.target.value.length < 2) {
                        setRequestObj({ ...requestObj, name: '', id: '' });
                        setSearchUser([]);
                      }
                    }}
                    onKeyPress={(e) => search(e.target.value)}
                    label={
                      requestFilter.value === 'candidate'
                        ? 'Candidate Name'
                        : requestFilter.value === 'company'
                        ? 'Company Name'
                        : 'Agency Name'
                    }
                  />
                  {errors.name.length > 0 && (
                    <span className="error">{errors.name}</span>
                  )}
                  {searchUser.length ? (
                    <ul className="list-group mt-2">
                      {searchUser.map((user, index) => (
                        <li
                          key={index}
                          className="list-group-item list-group-item-success">
                          <span onClick={() => selectUser(user)}>
                            {user.first_name} {user.last_name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ''
                  )}
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="id"
                      value={requestObj.id ? requestObj.id : ''}
                      className="user-id"
                      disabled={true}
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
                    {errors.id.length > 0 && (
                      <span className="error">{errors.id}</span>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="jobId"
                      onChange={(e) => {
                        setRequestObj({ ...requestObj, jobId: e.target.value });
                      }}
                      value={requestObj.jobId}
                      label="Placement ID"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="jobTitle"
                      onChange={(e) => {
                        setRequestObj({
                          ...requestObj,
                          jobTitle: e.target.value
                        });
                      }}
                      value={requestObj.jobTitle}
                      label="Job Title"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  variant="outlined"
                  size="small"
                  name="reason"
                  onChange={handleChanges}
                  value={requestObj.reason}
                  label="Reason for Request"
                  fullWidth
                  multiline
                  row={4}
                />
                {errors.reason.length > 0 && (
                  <span className="error">{errors.reason}</span>
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <Select
                  hideSelectedOptions={documents.length < 3 ? true : false}
                  isMulti
                  options={categories}
                  value={documents}
                  onChange={(e) => {
                    setDocuments(e);
                    setErrors({
                      ...errors,
                      document: e.length > 0 ? '' : 'Document is required!'
                    });
                  }}
                  name="document"
                  placeholder="Documents Requested"
                />

                {errors.document.length > 0 ? (
                  <span className="error">{errors.document}</span>
                ) : (
                  <small>(Choose multiple documents)</small>
                )}
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
                    minDate={new Date()}
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
                    disabled={doRequest}
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
