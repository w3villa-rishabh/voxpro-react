import React, { useState, useEffect } from 'react';

import {
  Button,
  Grid,
  MenuItem,
  Menu,
  Card,
  LinearProgress,
  Table
} from '@material-ui/core';
import Select from 'react-select';
import { CircularProgressbar } from 'react-circular-progressbar';
import LoaderComponent from 'components/loader';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import api from '../../api';
import SearchLocationComponent from '../search/search-location';
import SearchJobsComponent from '../search/search-jobs';

export default function AppliedJobComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [anchorEl, setAnchorEl] = useState(null);
  const [appliedJob, setAppliedJob] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchLoader, setSearchLoader] = useState(false);

  const [searchQuery, setSearchQuery] = useState({
    locationName: '',
    location: [],
    jobTitles: [],
    jobType: '',
    status: '',
    page: 1
  });

  const status = [
    {
      value: 'live',
      label: 'Live'
    },
    {
      value: 'expired',
      label: 'Expired'
    }
  ];

  const handlerSearch = (event) => {
    setSearchQuery({
      ...searchQuery,
      [event.target.status]: event.target.value
    });
  };

  useEffect(() => {
    getAppliedJobs();
  }, []);

  function getAppliedJobs() {
    setIsLoading(true);
    api.post(`/api/v1/users/applied_jobs`, { query: searchQuery }).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setAppliedJob([...response.data.jobs]);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  }
  const search = () => {
    api.post(`/api/v1/users/applied_jobs`, { query: searchQuery }).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setAppliedJob([...response.data.jobs]);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <h5 className="heading">Job Applications</h5>
        </div>
      </div>

      <Card className="px-3 pt-3 overflow-visible">
        <Grid container spacing={2} wrap={width <= 768 || 'nowrap'}>
          <Grid item md={4} xs={12}>
            <b>Job Title</b>
            <SearchJobsComponent searchQuery={searchQuery} return={false} />
          </Grid>
          <Grid item md={4} xs={12}>
            <b>Location</b>
            <SearchLocationComponent searchQuery={searchQuery} return={false} />
          </Grid>
          <Grid item md={4} xs={12}>
            <b>Status</b>
            <Select
              options={status}
              // value={searchQuery.status}
              onChange={handlerSearch}
              placeholder="Select Status"
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <Button
              size="small"
              className="btn-dribbble hover-scale-sm mt-4"
              onClick={search}
            >
              <span className="px-2">Search</span>
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={2} className="mt-2">
        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={56}
                text={56}
                strokeWidth={8}
                className="circular-progress-primary"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Applied</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={35}
                text={35}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Unsuccessful</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={20}
                text={20}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Shotlisted</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={30}
                text={30}
                strokeWidth={8}
                className="circular-progress-warning"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Interviews </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={22}
                text={22}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Offers</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} xs={4}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placements</div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="table-responsive-md">
            <Table className="table table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th className="text-center">Job ID</th>
                  <th className="text-center">Company</th>
                  <th className="text-center">Job Title</th>
                  <th className="text-center">Location</th>
                  <th className="text-center">Applied On</th>
                  <th className="text-center">Job status</th>
                  <th className="text-center">Stage of application</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <LoaderComponent />
                ) : (
                  <>
                    {appliedJob.map((job, index) => (
                      <tr>
                        <td className="font-weight-bold text-center">
                          {job.job_name}
                        </td>
                        <td className="text-center">{job.company_name}</td>
                        <td className="text-center">{job.job_title}</td>
                        <td className="text-center">{job.location}</td>
                        <td className="text-center">15 June 2020</td>
                        <td className="text-center">Active</td>
                        <td className="">
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-success"
                            value={25}
                          />
                          <div className="font-size-sm text-black-50 pt-1">
                            Applied
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <Button
                              aria-controls="simple-menu"
                              size="small"
                              className="px-4 btn-neutral-primary"
                              variant="contained"
                              aria-haspopup="true"
                              onClick={handleClick}>
                              Action
                            </Button>
                            <Menu
                              id="simple-menu"
                              anchorEl={anchorEl}
                              getContentAnchorEl={null}
                              keepMounted
                              classes={{ list: 'p-0' }}
                              open={Boolean(anchorEl)}
                              onClose={handleClose}>
                              <div className="p-3">
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={handleClose}>
                                  Follow Up
                                </MenuItem>
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={handleClose}>
                                  Withdraw application
                                </MenuItem>
                              </div>
                            </Menu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </Table>
            {!appliedJob.length && (
              <div className="font-size-xxl m-5 text-center">No data found</div>
            )}
          </div>
          <div className="card-footer py-3 text-center">
            <Button size="small" className="btn-outline-second" variant="text">
              View more entries
            </Button>
          </div>
        </Card>
      </div>

      <AddsComponents />
    </>
  );
}
