/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import {
  Card,
  Grid,
  Button,
  CardContent,
  TextField,
  Dialog,
  DialogTitle,
  InputAdornment
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import api from '../../api';
import { toast } from 'react-toastify';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';

import LoaderComponent from 'components/loader';
import SearchLocationComponent from './search-location';
import SearchJobsComponent from './search-jobs';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';
import { useLocation } from 'react-router';

const CompanyAdvanceSearchComponent = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [candidate, setCompanies] = useState([]);
  const [filterApplied, setFilterApplied] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    location.state
      ? location.state.searchQuery
      : {
          name: '',
          industry: [],
          location: [],
          locationName: '',
          jobTitles: [],
          page: 1
        }
  );
  const [searchPageCount, setSearchPageCount] = useState({
    total_pages: 0,
    page: 0,
    total: 0
  });

  const [openLocation, setOpenLocation] = useState({ open: false, do: [] });
  const [openJobs, setOpenJobs] = useState({ open: false, do: [] });
  const [openIndustry, setOpenIndustry] = useState({ open: false, do: [] });

  useEffect(() => {
    findSearch(searchQuery);
    setFilterApplied([
      { name: 'Node js' },
      { name: 'Full stack' },
      { name: 'Angular 4+' },
      { name: 'React js' }
    ]);
  }, []);

  const findSearch = (searchQuery) => {
    setIsLoading(true);
    searchCompanies(searchQuery);
  };

  const searchCompanies = (search) => {
    api.post('/api/v1/searches/search_company', { query: search }).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setSearchPageCount({ ...response.data.page_info });
          setCompanies([...response.data.candidate]);
        } else {
          setCompanies([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        setIsLoading(false);
        console.error(error);
      }
    );
  };

  const viewMoreResult = (event, newPage) => {
    searchQuery.page = newPage;
    setSearchQuery({ ...searchQuery });
    searchCompanies(searchQuery);
  };

  const handleModalClose = () => {
    setOpenLocation({ open: false, do: [] });
    setOpenJobs({ open: false, do: [] });
    setOpenIndustry({ open: false, do: [] });
  };

  const handleProceed = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-profile/',
      state: {
        id
      }
    });
  };

  const modalCallback = () => {
    searchCompanies(searchQuery);
    handleModalClose();
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Companies</b>
        </div>
      </div>

      <div className="mt-3">
        <h6 className="font-size-xxl text-capitalize">
          {searchPageCount ? searchPageCount.total : 0} {'Companies found'}
        </h6>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Showing results for</h4>
              <div className="px-3 py-2">
                <b>Jobs</b>
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
                            searchCompanies(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.jobTitles.length && (
                        <span className="mr-2">Add jobs</span>
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
                            searchCompanies(searchQuery);
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
                <b>Industry</b>

                <ul className="cards-filter">
                  {searchQuery.industry.map((filter, index) => (
                    <li key={index} className="cards__item_search">
                      <div>
                        <span>{filter.name}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.industry.splice(index, 1);
                            setSearchQuery({ ...searchQuery });
                            searchCompanies(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  ))}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.industry.length && (
                        <span className="mr-2">Add industry's</span>
                      )}
                      <FontAwesomeIcon
                        icon={['fas', 'plus']}
                        onClick={() => {
                          setOpenIndustry({ open: true, do: [] });
                        }}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={9}>
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <>
                {candidate.length ? (
                  <>
                    {candidate.map((can, index) => (
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
                                    href="#"
                                    onClick={(e) => handleProceed(e, can.id)}
                                    className="a-blue font-weight-bold ml-1 font-size-xxl"
                                    title="...">
                                    {can.first_name} {can.last_name}
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
                                    {can.job_title}
                                  </span>
                                  <span className="text-black-50 d-block">
                                    {can.city}, {can.country}
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
                                  Availability :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">
                                    {can.availability === 'available_from'
                                      ? can.available_date
                                      : can.availability}
                                  </p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>

                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Description :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">{can.description}</p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>
                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Job Title :{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">{can.job_title}</p>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={2}></Grid>
                            </Grid>
                          </CardContent>
                          <div className="divider" />
                        </Card>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="font-size-xxl m-5 text-center">
                    No data found
                  </div>
                )}
              </>
            )}

            {candidate.length >= 1 && (
              <div className="p-3 d-flex justify-content-center">
                <Pagination
                  className="pagination-primary"
                  onChange={viewMoreResult}
                  page={searchPageCount.page}
                  count={searchPageCount.total_pages}
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
          <SearchLocationComponent
            searchQuery={searchQuery}
            locationCallback={modalCallback}
          />
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
          <SearchJobsComponent
            searchQuery={searchQuery}
            jobsCallback={modalCallback}
          />
        </div>
      </Dialog>

      {/* job title search modal */}
      <Dialog
        fullWidth
        open={openIndustry.open}
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
          <span>Industry</span>
        </DialogTitle>
        <div className="p-3">
          <div className="user-new-request">
            <TextField
              variant="outlined"
              size="small"
              name="industry"
              fullWidth
              autoComplete="off"
              label="Industry"
              placeholder="e.g. 'industry'"
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
            />

            {/* {countyCity.length ? (
              <ul className="list-group mt-2">
                {countyCity.map((user, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success"
                    onClick={() => {
                      searchQuery.location.push({ name: user });
                      setSearchQuery({ ...searchQuery });
                      handleModalClose();
                      searchCandidate(searchQuery);
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
            )} */}
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

export default connect(mapStateToProps)(CompanyAdvanceSearchComponent);
