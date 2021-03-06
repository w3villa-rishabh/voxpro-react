/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import {
  Card,
  Grid,
  Button,
  CardContent,
  Dialog,
  DialogTitle
} from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import api from '../../api';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from '@material-ui/lab/Pagination';

import LoaderComponent from 'components/loader';
import SearchLocationComponent from './search-location';
import SearchJobsByNumberComponent from './search-jobs-by-number';
import SearchIndustriesComponent from './search-industries';

import { useLocation } from 'react-router';

const CompanyAgencyAdvanceSearchComponent = () => {
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [company, setCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    location.state
      ? location.state.searchQuery
      : {
          name: '',
          industry: [],
          location: [],
          locationName: '',
          jobNumber: '',
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
  }, []);

  const findSearch = (searchQuery) => {
    setIsLoading(true);
    searchCompanies(searchQuery);
  };

  const searchCompanies = (search) => {
    let url = '/api/v1/searches/search_company';
    if (location.state.role === 'agency') {
      url = '/api/v1/searches/search_agency';
    }

    api.post(url, { query: search }).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setSearchPageCount({ ...response.data.page_info });
          setCompanies([...response.data.company]);
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

  const handleCompany = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-company/',
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
          <b className="heading">Advance Search</b>
        </div>
      </div>

      <div className="mt-3">
        <h6 className="font-size-xxl text-capitalize">
          {searchPageCount ? searchPageCount.total : 0}{' '}
          {`${location.state.role} found`}
        </h6>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={3}>
            <Card className="card-box">
              <h4 className="p-3 border-bottom">Showing results for</h4>
              <div className="px-3 py-2">
                <b>Jobs</b>
                <ul className="cards-filter">
                  {searchQuery.jobNumber && (
                    <li className="cards__item_search">
                      <div>
                        <span>{searchQuery.jobNumber}</span>
                        <FontAwesomeIcon
                          className="ml-2 pt-1 a-blue"
                          icon={['fas', 'times']}
                          onClick={() => {
                            searchQuery.jobNumber = '';
                            setSearchQuery({ ...searchQuery });
                            searchCompanies(searchQuery);
                          }}
                        />
                      </div>
                    </li>
                  )}
                  <li>
                    <div className="ml-3 pt-2 pointer text-black-50">
                      {!searchQuery.jobNumber && (
                        <span className="mr-2">Add job number</span>
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
                {company.length ? (
                  <>
                    {company.map((com, index) => (
                      <div
                        key={index}
                        className="card card-box gutter-b card-stretch bg-white btn rounded text-left mb-2">
                        <Card className="card-box">
                          <CardContent>
                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <div className="avatar-icon-wrapper avatar-icon-lg">
                                  <div className="avatar-icon rounded d-110">
                                    <img
                                      alt="..."
                                      src={com.logo_url}
                                      onClick={(e) => handleCompany(e, com.id)}
                                    />
                                  </div>
                                </div>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <a
                                    href="#"
                                    onClick={(e) => handleCompany(e, com.id)}
                                    className="a-blue font-weight-bold ml-1 font-size-xxl"
                                    title="...">
                                    {com.name}
                                  </a>
                                  <Button className="btn-gray border px-2 py-0 ml-3 font-size-md text-primary">
                                    2nd
                                  </Button>
                                </div>

                                <div className="">
                                  <span className="d-block">
                                    {com.location}
                                  </span>
                                  <span className="text-black-50 d-block">
                                    {com.industry}
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
                                    <div className="float-right">
                                      <span className="text-black-50 font-size-xl">
                                        Above{' '}
                                        <span className="a-blue font-weight-bold font-size-xxl">
                                          20%
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>

                            <Grid container spacing={1}>
                              <Grid item xs={12} sm={2}>
                                <span className="text-black-50 nowrap float-right">
                                  Establised On:{' '}
                                </span>
                              </Grid>
                              <Grid item xs={12} sm={8}>
                                <div>
                                  <p className="mb-0">{com.establised_on}</p>
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
                                  <p className="mb-0">{com.description}</p>
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

            {company.length >= 1 && (
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
            return={true}
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
          <SearchJobsByNumberComponent
            searchQuery={searchQuery}
            return={true}
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
          <SearchIndustriesComponent
            searchQuery={searchQuery}
            return={true}
            industryCallback={modalCallback}
          />
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

export default connect(mapStateToProps)(CompanyAgencyAdvanceSearchComponent);
