/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Button, Grid, Table } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import WorkIcon from '@material-ui/icons/Work';
import { useHistory } from 'react-router';
import AddsComponents from 'components/add_component';
import { convertDate } from 'helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import api from '../../api';
import LoaderComponent from 'components/loader';
import { toast } from 'react-toastify';
import ApplyNewJob from './apply-new-job';
import { jobPosted } from '../../constants'; //import from your constants.js

export default function SaveJobComponent() {
  const history = useHistory();
  const [postValue, setPostValue] = useState({
    value: 'anytime',
    label: 'Anytime'
  });
  const [savedJob, setSavedJob] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSavedJobs(postValue.value);
  }, []);

  function getSavedJobs(filter) {
    setIsLoading(true);
    api.get(`/api/v1/jobs/candidate_saved_jobs?filter=${filter}`).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setSavedJob([...response.data.jobs]);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  }

  const viewJob = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-job',
      state: {
        id
      }
    });
  };

  const removeJob = (e, request, index) => {
    e.preventDefault();
    api.post(`/api/v1/jobs/${request.id}/save_job?status=${false}`).then(
      (response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          savedJob.splice(index, 1);
          setSavedJob([...savedJob]);
          // savedJob[index] = response.data.job;
          // setRecombedJob([...recombedJob]);
        } else {
          toast.error('error in saving job..');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const changeHandler = (event) => {
    setPostValue(event);
    getSavedJobs(event.value);
  };

  const jobApplyCallback = (id) => {
    // the callback. Use a better name
    let index = savedJob.findIndex((a) => a.id === id);
    savedJob[index].applied = true;
    setSavedJob([...savedJob]);
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Saved Jobs</b>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="px-3 pt-3">
            <div className="card-header-alt d-flex align-items-center justify-content-between p-2">
              <div>
                <b className="text-danger">
                  {savedJob.length} Shortlisted Jobs list
                </b>
              </div>
              <div className="w-25">
                <Select
                  options={jobPosted}
                  value={postValue}
                  onChange={changeHandler}
                  placeholder="Date Posted"
                />
              </div>
            </div>
            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Job Details</th>
                      <th className="text-center">Status</th>
                      <th className="text-center"></th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {savedJob.map((job, index) => (
                          <tr key={index}>
                            <td className="text-left">
                              <div>
                                <FontAwesomeIcon
                                  icon={['fas', 'heart']}
                                  className="font-size-lg mr-2 mt-1 text-danger"
                                />
                              </div>
                              <div>
                                <a
                                  onClick={(e) => viewJob(e, job.id)}
                                  className="font-weight-bold text-black a-blue">
                                  {job.job_title}
                                </a>
                                <small className="text-black-50 d-block">
                                  {job.location}
                                </small>
                                <small className="text-black-50">
                                  Saved: {convertDate(job.saved_date)}
                                </small>
                              </div>
                            </td>
                            <td className="text-center">
                              <a href="!#" onClick={(e) => e.preventDefault()}>
                                <div className="badge badge-neutral-success text-success px-4">
                                  {job.status}
                                </div>
                              </a>
                            </td>
                            <td className="text-center">
                              <ApplyNewJob
                                width={'w-50'}
                                job={job}
                                jobApplyCallback={jobApplyCallback}
                              />
                            </td>
                            <td>
                              <Button onClick={(e) => removeJob(e, job, index)}>
                                <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!savedJob.length && (
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
      <AddsComponents />
    </>
  );
}
