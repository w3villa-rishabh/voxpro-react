import React, { useState, useEffect } from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import api from '../../api';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import LoaderComponent from 'components/loader';
import { getCurrentUser, convertDate } from '../../helper';
import projectLogo from '../../assets/images/voxpro-images/logo_small.png';
import SearchLocationComponent from './search-location';
import SearchJobsComponent from './search-jobs';
import SearchIndustriesComponent from './search-industries';

export default function CompaniesSearchComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentUser] = useState(getCurrentUser());
  const [searchLoader, setSearchLoader] = useState(false);
  const [recentCompanies, setRecentCompanies] = useState([]);
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState({
    name: '',
    location: [],
    locationName: '',
    jobTitles: [],
    jobName: '',
    industryName: '',
    industry: [],
    page: 1
  });

  useEffect(() => {
    getRecentAddCompanies();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const getRecentAddCompanies = () => {
    setSearchLoader(true);
    api.get('/api/v1/companies/recently_added_companies').then(
      (response) => {
        setSearchLoader(false);
        if (response.data.success) {
          setRecentCompanies([...response.data.companies]);
        } else {
          setRecentCompanies([]);
        }
      },
      (error) => {
        setSearchLoader(false);
        toast.error('Something went wrong');
        console.error(error);
      }
    );
  };

  const handlerSearch = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.name]: event.target.value });
  };

  const search = () => {
    return history.push({
      pathname: '/advance-search',
      state: { searchQuery, role: 'company' }
    });
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

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Search Companies</b>
        </div>
      </div>

      <Card className="px-3 pt-3 overflow-visible">
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item md={3} xs={12}>
            <b>Name</b>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by name"
              className="w-100"
              name="name"
              onChange={handlerSearch}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Industry</b>
            <SearchIndustriesComponent
              searchQuery={searchQuery}
              return={false}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Location</b>
            <SearchLocationComponent searchQuery={searchQuery} return={false} />
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Jobs</b>
            <SearchJobsComponent searchQuery={searchQuery} return={false} />
          </Grid>
          <Grid item md={2} xs={12}>
            <Button
              size="small"
              className="btn-dribbble hover-scale-sm mt-4"
              onClick={search}>
              <span className="px-2">Search</span>
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2} className="mt-3">
        <Grid item xs={12} sm={12}>
          <Card className="">
            <div className="card-header">
              <div className="card-header--title font-size-lg">
                <b>Companies recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th>Company Name</th>
                      <th className="text-center">Logo</th>
                      <th className="text-center">Location</th>
                      <th className="text-center">Industry</th>
                      <th className="text-center">No of jobs active</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchLoader ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {recentCompanies.map((com, index) => (
                          <tr key={index}>
                            <td className="font-weight-bold">
                              {convertDate(com.created_at)}
                            </td>
                            <td>{com.name}</td>
                            <td className="text-center">
                              <div
                                className="avatar-icon-wrapper avatar-icon-sm"
                                title="Lili Pemberton">
                                <div className="avatar-icon">
                                  <img
                                    alt="..."
                                    src={com.logo || projectLogo}
                                  />
                                </div>
                              </div>
                            </td>
                            <td className="text-center text-black-50">
                              {com.city} {','} {com.country || '--'}
                            </td>
                            <td className="text-center">
                              {com.industry || '--'}
                            </td>
                            <td className="text-center">
                              {com.jobCount || '--'}
                            </td>
                            <td className="text-center">
                              <a
                                className="a-blue"
                                href="!#"
                                onClick={(e) => handleCompany(e, com.id)}>
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!recentCompanies.length && !searchLoader && (
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
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
