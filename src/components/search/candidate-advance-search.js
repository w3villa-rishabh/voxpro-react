/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import {
  Card,
  Grid,
  Button,
  TextField,
  CardContent,
  Dialog,
  DialogTitle,
  InputAdornment
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import api from '../../api';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import CountryCity from '../../assets/city-country';
import axios from 'axios';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import { useLocation } from 'react-router';

const CandidateAdvanceSearchComponent = (props) => {
  const location = useLocation();
  // const [isOpen, setIsOpen] = useState(false);
  // const [candidate, setCandidate] = useState([]);
  const [filterApplied, setFilterApplied] = useState([]);
  const [searchResult] = useState([1, 2, 3, 4]);
  const [searchQuery, setSearchQuery] = useState(
    location.state
      ? location.state.searchQuery
      : {
          name: '',
          location: [],
          jobTitles: [],
          // jobTitle: '',
          availability: '0',
          availabilityDate: ''
        }
  );

  const [countyCity, setCountryCity] = useState([]);
  const [searchJobs, setSearchJobs] = useState([]);

  const [searchData, setSearchData] = useState(false);
  const [openLocation, setOpenLocation] = useState({ open: false, do: [] });
  const [openJobs, setOpenJobs] = useState({ open: false, do: [] });
  const [searchJobStatus, setSearchJobStatus] = useState(false);

  useEffect(() => {
    setFilterApplied([
      { name: 'Node js' },
      { name: 'Full stack' },
      { name: 'Angular 4+' },
      { name: 'React js' }
    ]);
    search(searchQuery);
  }, []);

  const search = (search) => {
    // setSearchLoader(true);
    // console.log('search', search, props.placesSearch);
    api.post('/api/v1/searches/search_candidate', { query: search }).then(
      (response) => {
        // setSearchLoader(false);
        if (response.data.success) {
          // setCandidate([...response.data.candidate]);
        } else {
          // setCandidate([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        // setSearchLoader(false);
        console.error(error);
      }
    );
  };

  const countryFilter = (value) => {
    if (value.length < 2) {
      return;
    }
    setSearchData(false);
    var search = new RegExp(value, 'i'); // prepare a regex object
    let searchLog = CountryCity.filter((item) => search.test(item));
    setCountryCity([...searchLog]);
    if (!searchLog.length) {
      setSearchData(true);
    }
  };

  const findJobs = (search) => {
    setSearchJobStatus(false);
    if (search.length < 2) {
      return;
    }
    axios
      .get(
        `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${search}`
      )
      .then(
        (response) => {
          if (response.statusText === 'OK') {
            console.log('response.data', response.data);
            setSearchJobs([...response.data]);
          } else if (!searchJobs.length) {
            // toast.error('No available..');
            setSearchJobStatus(true);
          }
        },
        (error) => {
          console.error('error', error);
        }
      );
  };

  const handleModalClose = () => {
    setOpenLocation({ open: false, do: [] });
    setOpenJobs({ open: false, do: [] });
    setCountryCity([]);
    setSearchJobs([]);
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
                <b>Job title</b>
                <ul className="cards-filter">
                  {searchQuery.jobTitles.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.jobTitles.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            search(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.jobTitles.length && (
                        <span className="mr-2">Add Job title</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenJobs({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Locations</b>
                <ul className="cards-filter">
                  {searchQuery.location.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.location.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            search(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.location.length && (
                        <span className="mr-2">Add Locations</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenLocation({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Skills</b>
                <ul className="cards-filter">
                  {filterApplied.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Companies</b>
                <ul className="cards-filter">
                  {/* {filterApplied.map((filter, index) => (
                      <li key={index} className="cards__item_search">
                        <div>
                          <span>{filter.name}</span>
                        </div>
                      </li>
                    ))} */}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <span className="mr-2">Add Companies</span>
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Eductions</b>
                <ul className="cards-filter">
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <span className="mr-2">Add Eductions</span>
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider opacity-8 my-1" />
              <div className="px-3 py-2">
                <b>Keyword</b>
                <ul className="cards-filter">
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      <span className="mr-2">Add Keyword</span>
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                    </div>{' '}
                  </li>
                </ul>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {searchResult.length ? (
              <>
                {searchResult.map((job, index) => (
                  <div
                    key={index}
                    className="card card-box gutter-b card-stretch bg-white btn rounded text-left mb-2">
                    <Card className="card-box">
                      <CardContent>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={2}>
                            <div className="avatar-icon-wrapper avatar-icon-lg">
                              <div className="avatar-icon rounded d-110">
                                <img alt="..." src={avatar7} />
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <div>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="a-blue font-weight-bold ml-1 font-size-xxl"
                                title="...">
                                Kate Winchester
                              </a>
                              <Button className="btn-gray border px-2 py-0 ml-3 font-size-md text-primary">
                                2nd
                              </Button>
                              <div className="float-right">
                                <span className="text-black-50 font-size-xl">
                                  Above{' '}
                                  <span className="a-blue font-weight-bold font-size-xxl">
                                    20%
                                  </span>
                                </span>
                              </div>
                            </div>

                            <ul className="cards-filter">
                              {filterApplied.map((filter, index) => (
                                <li
                                  key={index}
                                  className="cards__item bg-primary text-white">
                                  <div>
                                    <span>{filter.name}</span>
                                  </div>
                                </li>
                              ))}
                              <li className="cards__item bg-brand-discord text-white">
                                <div>
                                  <span>10+ years</span>
                                </div>
                              </li>
                            </ul>

                            <div className="">
                              <span className="d-block">
                                Senior Software Engineer.
                              </span>
                              <span className="text-black-50 d-block">
                                San Francisco Bay Area.
                              </span>
                              <a
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="text-success d-block">
                                <FontAwesomeIcon
                                  icon={['fas', 'caret-right']}
                                />{' '}
                                2 Shared connections &bull; Similar
                              </a>
                            </div>
                          </Grid>

                          <Grid item xs={12} sm={2}>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <Button
                                  fullWidth
                                  size="small"
                                  className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                                  <span>Connect</span>
                                </Button>
                              </div>
                            </div>
                          </Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={2}>
                            <span className="text-black-50 nowrap float-right">
                              Post :{' '}
                            </span>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <div>
                              <p className="mb-0">
                                From its medieval origins to the digital era,
                                learn everything there is to know about the
                                ubiquitous lorem ipsum passage learn everything
                                there is.
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={2}></Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={2}>
                            <span className="text-black-50 nowrap float-right">
                              Post :{' '}
                            </span>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <div>
                              <p className="mb-0">
                                Primary website/webapp Engineer (employee) At
                                Anglepoise Primary
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={2}></Grid>
                        </Grid>

                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={2}>
                            <span className="text-black-50 nowrap float-right">
                              Summary :{' '}
                            </span>
                          </Grid>
                          <Grid item xs={12} sm={8}>
                            <div>
                              <p className="mb-0">Senior software developer</p>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={2}></Grid>
                        </Grid>
                      </CardContent>
                      <div className="divider" />

                      {/* <div className="card-footer bg-white text-center p-3">
                    <Button className="btn-primary btn-icon d-40 p-0 hover-scale-lg rounded-circle mr-2">
                      <FontAwesomeIcon
                        icon={['far', 'question-circle']}
                        className="font-size-lg"
                      />
                    </Button>
                    <Button className="btn-primary btn-icon d-40 p-0 hover-scale-lg rounded-circle">
                      <FontAwesomeIcon
                        icon={['far', 'user-circle']}
                        className="font-size-lg"
                      />
                    </Button>
                  </div> */}
                    </Card>
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
                  // onChange={viewMoreResult}
                  page={props.searchFilter.page}
                  count={props.searchPages ? props.searchPages.total_pages : 0}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      {/* Location search modal */}
      <Dialog
        fullWidth
        open={openLocation.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>Location</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="location"
              fullWidth
              autoComplete="off"
              label="Where"
              placeholder="e.g. 'london'"
              className="w-100"
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setCountryCity([]);
                  setSearchData(false);
                }
              }}
              onKeyPress={(e) => countryFilter(e.target.value)}
            />

            {countyCity.length ? (
              <ul className="list-group mt-2">
                {countyCity.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success"
                    onClick={() => {
                      searchQuery.location.push({ name: user });
                      setSearchQuery({ ...searchQuery });
                      handleModalClose();
                      search(searchQuery);
                    }}>
                    <span>{user}</span>
                  </li>
                ))}
              </ul>
            ) : searchData === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>

      {/* job title search modal */}
      <Dialog
        fullWidth
        open={openJobs.open}
        onClose={handleModalClose}
        classes={{
          paper:
            'modal-content rounded border-0 bg-white p-3 p-xl-0 overflow-visible'
        }}>
        <DialogTitle id="form-dialog-title" className="p-2">
          <div className="card-badges card-badges-top">
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className="pointer mr-3"
              onClick={handleModalClose}
            />
          </div>
          <span>Jobs Titles</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="query"
              fullWidth
              autoComplete="off"
              label="What"
              placeholder="e.g. 'angular'"
              className="w-100"
              // value={searchQuery.query}
              onChange={(e) => {
                return e.target.value;
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
              onKeyUp={(e) => {
                if (e.key === 'Backspace' && e.target.value.length < 2) {
                  setSearchJobs([]);
                  setSearchJobStatus(false);
                }
              }}
              onKeyPress={(e) => findJobs(e.target.value)}
            />

            {searchJobs.length ? (
              <ul className="list-group mt-2">
                {searchJobs.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success">
                    <span
                      onClick={() => {
                        searchQuery.jobTitles.push({
                          name: user.normalized_job_title
                        });
                        setSearchQuery({ ...searchQuery });
                        handleModalClose();
                        search(searchQuery);
                      }}>
                      {user.normalized_job_title}
                    </span>
                  </li>
                ))}
              </ul>
            ) : searchJobStatus === true ? (
              <ul className="list-group mt-2">
                <li className="list-group-item list-group-item-success">
                  <span>Not Found</span>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </Dialog>
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

export default connect(mapStateToProps)(CandidateAdvanceSearchComponent);
