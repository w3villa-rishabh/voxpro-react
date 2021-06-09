/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import {
  Card,
  Grid,
  Button,
  TextField,
  Table,
  List,
  ListItem
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import { ClipLoader } from 'react-spinners';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import api from '../../api';
import { toast } from 'react-toastify';
import LoaderComponent from 'components/loader';
import { convertDate } from 'helper';
import PlaceSearchComponent from './search-place';
import { connect } from 'react-redux';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Pagination from '@material-ui/lab/Pagination';

const CandidateSearchComponent = (props) => {
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
    console.log('searchQuery', searchQuery, props.placesSearch);
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

      <div className="mt-3">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Showing results for</h4>
              <div className="px-3 py-2">
                <div>
                  <label className="font-weight-bold">Distance</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    // value={distance}
                    // onChange={handelSearch}
                    name="distance">
                    <option value="">Select Distance</option>
                    {/* {distanceObj.map((dis) => (
                      <option value={dis.value}>{dis.label}</option>
                    ))} */}
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
                    // value={startSalary}
                    // onChange={handelSearch}
                    name="startSalary">
                    <option value="0">Start at</option>
                    {/* {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))} */}
                  </select>
                  <label className="font-weight-bold mt-2">To:</label>
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth"
                    variant="outlined"
                    fullWidth
                    // value={endSalary}
                    // onChange={handelSearch}
                    name="endSalary">
                    <option value="0">End at</option>
                    {/* {dolorPrice.map((price) => (
                      <option value={price.value}>{price.label}</option>
                    ))} */}
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
                              // checked={permanent}
                              // onChange={handleChange}
                              name="permanent"
                            />
                          }
                          label="Permanent"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={temporary}
                              // onChange={handleChange}
                              name="temporary"
                            />
                          }
                          label="Temporary"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={contract}
                              // onChange={handleChange}
                              name="contract"
                            />
                          }
                          label="Contract"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={fullTime}
                              // onChange={handleChange}
                              name="fullTime"
                            />
                          }
                          label="Full-time"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={partTime}
                              // onChange={handleChange}
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
                    // onChange={handelSearch}
                    // value={datePost}
                    name="datePost">
                    {/* {jobPosted.map((post) => (
                      <option value={post.value}>{post.label}</option>
                    ))} */}
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
                              // checked={agencyPost}
                              // onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={employerPost}
                              // onChange={handleChange}
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
                              // checked={agencyPost}
                              // onChange={handleChange}
                              name="agencyPost"
                            />
                          }
                          label="Agency"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={employerPost}
                              // onChange={handleChange}
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
                              // checked={nursing}
                              // onChange={handleChange}
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
                              // checked={registerNurse}
                              // onChange={handleChange}
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
                              // checked={NHS}
                              // onChange={handleChange}
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
                              // checked={staffNurse}
                              // onChange={handleChange}
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
                              // checked={careAssistant}
                              // onChange={handleChange}
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
            {/* {props.searchResult.length ? (
              <>
                {props.searchResult.map((job, index) => ( */}
            <div className="card card-box gutter-b card-stretch bg-white btn rounded text-left py-2 mb-2">
              <div key={0}>
                <List component="div" className="list-group-flush">
                  <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-start">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="avatar-icon-wrapper mr-0 mr-md-3">
                      <div className="d-block p-0 avatar-icon-wrapper m-0 d-100">
                        <div className="badge badge-success badge-circle p-top-a">
                          Online
                        </div>
                        <div className="rounded overflow-hidden">
                          <img alt="..." className="img-fluid" src={avatar6} />
                        </div>
                      </div>
                    </a>
                    <div className="d-flex flex-grow-1 pl-1 flex-column">
                      <div className="d-flex flex-column flex-xl-row justify-content-between">
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold p-0">
                            Trystan Russo
                          </a>
                          <div className="d-block d-md-flex align-items-center mt-1 mb-3">
                            <FontAwesomeIcon
                              icon={['far', 'envelope']}
                              className="mr-2"
                            />
                            <span className="text-black-50 pr-4">
                              russotry@russo.com
                            </span>

                            <FontAwesomeIcon
                              icon={['far', 'address-card']}
                              className="mr-2"
                            />
                            <span className="text-black-50 pr-4">
                              Project Manager
                            </span>

                            <FontAwesomeIcon
                              icon={['far', 'map']}
                              className="mr-2"
                            />
                            <span className="text-black-50">
                              San Francisco, USA
                            </span>
                          </div>
                        </div>
                        <div className="divider mb-3 mb-xl-0" />
                        <div className="pb-3 pt-1 py-xl-0">
                          <Button
                            size="small"
                            className="btn-primary shadow-none mr-2 text-uppercase font-size-xs font-weight-bold">
                            Chat
                          </Button>
                          <Button
                            size="small"
                            className="btn-neutral-primary text-uppercase font-size-xs font-weight-bold">
                            Profile
                          </Button>
                        </div>
                      </div>
                      <Grid
                        container
                        spacing={6}
                        className="d-flex align-items-center">
                        <Grid item lg={6}>
                          <p className="mb-0">
                            McClintock's eye for detail certainly helped narrow
                            the whereabouts.
                          </p>
                        </Grid>
                        <Grid item lg={6}>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="text-black-50">Progress</div>
                            {/* <LinearProgress
                              variant="determinate"
                              className="progress-bar-rounded flex-grow-1 progress-xs progress-animated-alt mx-2 progress-bar-danger"
                              value={56}
                            /> */}
                            <div className="font-weight-bold font-size-lg">
                              56%
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </ListItem>
                  <ListItem className="text-center text-md-left p-4 d-block d-md-flex justify-content-between align-items-start">
                    <a
                      href="#/"
                      onClick={(e) => e.preventDefault()}
                      className="mr-0 mr-md-3">
                      <div className="avatar-icon-wrapper m-0 d-100">
                        <div className="badge badge-danger badge-position badge-position--bottom-right badge-circle">
                          Offline
                        </div>
                        <div className="rounded overflow-hidden bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                          <span>HS</span>
                        </div>
                      </div>
                    </a>
                    <div className="d-flex flex-grow-1 pl-1 flex-column">
                      <div className="d-flex flex-column flex-xl-row justify-content-between">
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-size-lg mx-0 my-3 my-xl-0 font-weight-bold p-0">
                            Zara Wagstaff
                          </a>
                          <div className="d-block d-md-flex align-items-center mt-1 mb-3">
                            <FontAwesomeIcon
                              icon={['far', 'envelope']}
                              className="mr-2"
                            />
                            <span className="text-black-50 pr-4">
                              zara@wags.com
                            </span>

                            <FontAwesomeIcon
                              icon={['far', 'address-card']}
                              className="mr-2"
                            />
                            <span className="text-black-50 pr-4">
                              UX Consultant
                            </span>

                            <FontAwesomeIcon
                              icon={['far', 'map']}
                              className="mr-2"
                            />
                            <span className="text-black-50">London, UK</span>
                          </div>
                        </div>
                        <div className="divider mb-3 mb-xl-0" />
                        <div className="pb-3 pt-1 py-xl-0">
                          <Button
                            size="small"
                            className="btn-primary shadow-none mr-2 text-uppercase font-size-xs font-weight-bold">
                            Chat
                          </Button>
                          <Button
                            size="small"
                            className="btn-neutral-primary text-uppercase font-size-xs font-weight-bold">
                            Profile
                          </Button>
                        </div>
                      </div>
                      <Grid
                        container
                        spacing={6}
                        className="d-flex align-items-center">
                        <Grid item lg={6}>
                          <p className="mb-0">
                            A 1914 English translation by Harris Rackham reads.
                          </p>
                        </Grid>
                        <Grid item lg={6}>
                          <div className="d-flex flex-grow-1 align-items-center">
                            <div className="text-black-50">Progress</div>
                            {/* <LinearProgress
                              variant="determinate"
                              className="progress-bar-rounded flex-grow-1 progress-xs progress-animated-alt mx-2 progress-bar-success"
                              value={89}
                            /> */}
                            <div className="font-weight-bold font-size-lg">
                              56%
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </ListItem>
                </List>
              </div>
            </div>
            {/* ))}
              </>
            ) : (
              <div className="font-size-xxl m-5 text-center">No data found</div>
            )} */}

            {props.searchResult.length >= 1 && (
              <div className="p-3 d-flex justify-content-center">
                <Pagination
                  className="pagination-primary"
                  // onChange={viewMoreResult}
                  page={props.searchFilter.page}
                  count={props.searchPages ? props.searchPages.total_pages : 0}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
      <Card className="px-3 pt-3 overflow-visible h-180px">
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
            <PlaceSearchComponent />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Availability</b>
            <div className="position-relative">
              {isOpen && (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disablePast
                    disableToolbar
                    variant="outlined"
                    format="dd/MM/yyyy"
                    // margin="normal"
                    id="date-picker-outlined"
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
                                ? can.available_date
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
};

const mapStateToProps = (state) => ({
  placesSearch: state.ThemeOptions.placesSearch,
  searchResult: state.ThemeOptions.searchResult,
  searchFilter: state.ThemeOptions.searchFilter,
  searchPages: state.ThemeOptions.searchPages
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSearchResult: (search) => dispatch(setSearchResult(search)),
//     callSearch: (status, searchFilter) =>
//       dispatch(callSearch(status, searchFilter))
//   };
// };

export default connect(mapStateToProps)(CandidateSearchComponent);
