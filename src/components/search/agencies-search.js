import React, { useState, useEffect } from 'react';

import { Card, Grid, Button, TextField, Table } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ClipLoader } from 'react-spinners';
import api from '../../api';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderComponent from 'components/loader';
import { getCurrentUser, convertDate } from 'helper';
import projectLogo from '../../assets/images/voxpro-images/logo_small.png';
import PlaceSearchComponent from './search-place';

export default function AgenciesSearchComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [searchLoader, setSearchLoader] = useState(false);
  const [agency, setAgency] = useState([]);
  const [recentAgencies, setRecentAgencies] = useState([]);
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState({
    name: '',
    location: '',
    job: '',
    industry: ''
  });

  useEffect(() => {
    getRecentAddAgencies();
  }, []);

  const getRecentAddAgencies = () => {
    api.get('/api/v1/companies/recently_added_agencies').then(
      (response) => {
        if (response.data.success) {
          setRecentAgencies([...response.data.agencies]);
        } else {
          setRecentAgencies([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        console.error(error);
      }
    );
  };

  const handlerSearch = (event) => {
    setSearchQuery({ ...searchQuery, [event.target.name]: event.target.value });
  };

  const search = () => {
    setSearchLoader(true);
    console.log('searchQuery', searchQuery);
    api.post('/api/v1/searches/search_agency', { query: searchQuery }).then(
      (response) => {
        setSearchLoader(false);
        if (response.data.success) {
          setAgency([...response.data.agency]);
        } else {
          setAgency([]);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        setSearchLoader(false);
        console.error(error);
      }
    );
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
            <b>Industry</b>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by industry"
              className="w-100"
              name="industry"
              onChange={handlerSearch}
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
            <b>Jobs</b>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by number of jobs active"
              className="w-100"
              name="job"
              onChange={handlerSearch}
              InputProps={{
                style: {
                  height: '37px'
                }
              }}
            />
          </Grid>
        </Grid>
        <div className="card-footer float-right">
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
                <b>Agencies recently added</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Added On</th>
                      <th>Agency Name</th>
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
                        {recentAgencies.map((ag, index) => (
                          <tr key={index}>
                            <td className="font-weight-bold">
                              {convertDate(ag.created_at)}
                            </td>
                            <td>{ag.name}</td>
                            <td className="text-center">
                              <div
                                className="avatar-icon-wrapper avatar-icon-sm"
                                title="Lili Pemberton">
                                <div className="avatar-icon">
                                  <img alt="..." src={ag.logo || projectLogo} />
                                </div>
                              </div>
                            </td>
                            <td className="text-center text-black-50">
                              {ag.city} {','} {ag.country || '--'}
                            </td>
                            <td className="text-center">
                              {ag.industry || '--'}
                            </td>
                            <td className="text-center">
                              {ag.jobCount || '--'}
                            </td>
                            <td className="text-center">
                              <a
                                className="a-blue"
                                href="!#"
                                onClick={(e) => handleCompany(e, ag.id)}>
                                View
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!recentAgencies.length && !searchLoader && (
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
