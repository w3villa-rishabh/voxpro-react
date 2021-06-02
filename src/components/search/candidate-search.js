import React, { useState, useMemo } from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import { ClipLoader } from 'react-spinners';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import countryList from 'react-select-country-list';
import api from '../../api';
import { toast } from 'react-toastify';
import LoaderComponent from 'components/loader';
import { convertDate } from 'helper';

export default function CandidateSearchComponent() {
  const options = useMemo(() => countryList().getData(), []);
  const [searchLoader, setSearchLoader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [candidate, setCandidate] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    name: '',
    location: '',
    jobTitle: '',
    availability: '0',
    availabilityDate: ''
  });

  const handlerSearch = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.name]: event.target.value });
  };

  const search = () => {
    setSearchLoader(true);
    console.log('searchQuery', searchQuery);
    api.post('/api/v1/searches/search_candidate', { query: searchQuery }).then(
      (response) => {
        setSearchLoader(false);
        if (response.data.success) {
          setCandidate([...response.data.candidate]);
        } else {
          setCandidate([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        setSearchLoader(false);
        console.error(error);
      }
    );
  };

  const handleDateChange = (date) => {
    if (date) {
      setIsOpen(false);
      setSearchQuery({
        ...searchQuery,
        availabilityDate: date
      });
    }
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Candidates</b>
        </div>
      </div>

      <Card className="px-3 pt-3">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <b>Name</b>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by name"
              className="w-100"
              name="name"
              onChange={handlerSearch}
              InputProps={{
                style: {
                  height: '37px'
                }
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Job Title</b>
            <TextField
              variant="outlined"
              size="small"
              name="jobTitle"
              onChange={handlerSearch}
              placeholder="Search by job title"
              className="w-100"
              InputProps={{
                style: {
                  height: '37px'
                }
              }}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Location</b>
            <select
              className="MuiTextField-root MuiFormControl-fullWidth"
              variant="outlined"
              fullWidth
              name="location"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  location: event.target.value
                });
              }}
              value={searchQuery.location}>
              <option value="0">Select location</option>
              {options.map((op) => (
                <option value={op.label}>{op.label}</option>
              ))}
            </select>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Availability</b>
            <div className="position-relative">
              {isOpen && (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disablePast
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    // margin="normal"
                    id="date-picker-inline"
                    value={new Date()}
                    onChange={handleDateChange}
                    autoOk={true}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                    open={isOpen}
                  />
                </MuiPickersUtilsProvider>
              )}
              <select
                className="MuiTextField-root MuiFormControl-fullWidth select-doc date-pic"
                variant="outlined"
                fullWidth
                name="availability"
                onChange={(event) => {
                  if (event.target.value === '3') {
                    setIsOpen(true);
                  }
                  setSearchQuery({
                    ...searchQuery,
                    [event.target.name]: event.target.value,
                    availabilityDate: ''
                  });

                  console.log('documents.expiration', event.target.value);
                }}
                value={searchQuery.availability}>
                <option value="0">Select Availability</option>
                <option value="1">Immediately</option>
                <option value="2">Unavailable</option>
                <option value="3">
                  {searchQuery.availabilityDate
                    ? moment(searchQuery.availabilityDate).format('DD-MM-YYYY')
                    : 'Available from'}
                </option>
              </select>
            </div>
          </Grid>
        </Grid>
        <div className="card-footer float-right pr-0">
          <Button
            disabled={searchLoader}
            className="btn-neutral-info hover-scale-sm"
            onClick={search}>
            <span className="px-2">Search</span>
            <ClipLoader
              color={'var(--info)'}
              loading={searchLoader}
              size={20}
            />
          </Button>
        </div>
      </Card>

      <Grid container spacing={2} className="mt-2">
        <Grid item xs={12} sm={12}>
          <Card className="">
            <div className="card-header">
              <div className="card-header--title font-size-lg">
                <b>Candidates recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th>Name</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Job Title</th>
                      <th className="text-center">Availability</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchLoader ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {candidate.map((can, index) => (
                          <tr key={index}>
                            <td className="font-weight-bold">
                              {convertDate(can.created_at)}
                            </td>
                            <td>
                              {can.first_name} {can.last_name}
                            </td>
                            <td className="text-center text-black-50">
                              {can.job_title || '--'}
                            </td>
                            <td className="text-center">
                              {can.location || '--'}
                            </td>
                            <td className="text-center">
                              {can.availability === 'available_from'
                                ? can.available_from
                                : can.availability}
                            </td>
                            <td className="text-center">
                              <a
                                className="a-blue"
                                href="!#"
                                onClick={(e) => e.preventDefault()}>
                                View Profile
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!candidate.length && !searchLoader && (
                  <div className="font-size-xxl m-5 text-center">
                    No data found
                  </div>
                )}
              </PerfectScrollbar>
            </div>
            <div className="card-footer py-3 text-center">
              <Button
                size="small"
                className="btn-outline-second"
                variant="text">
                View more
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
