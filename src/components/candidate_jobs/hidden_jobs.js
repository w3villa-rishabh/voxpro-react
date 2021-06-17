/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Button, Grid, Table } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import WorkIcon from '@material-ui/icons/Work';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import { convertDate } from 'helper';
import Select from 'react-select';
import api from '../../api';
import LoaderComponent from 'components/loader';
import { toast } from 'react-toastify';
import ApplyNewJob from './apply-new-job';
import { jobPosted } from '../../constants'; //import from your constants.js

export default function HideJobComponent() {
  const history = useHistory();
  const [postValue, setPostValue] = useState({
    value: 'anytime',
    label: 'Anytime'
  });
  const [hiddenJob, setHiddenJob] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getHiddenJobs(postValue.value);
  }, []);

  function getHiddenJobs(filter) {
    setIsLoading(true);
    api.get(`/api/v1/jobs/candidate_hidden_jobs?filter=${filter}`).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setHiddenJob([...response.data.jobs]);
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
    api.post(`/api/v1/jobs/${request.id}/hide_job?hide=${false}`).then(
      (response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          hiddenJob.splice(index, 1);
          setHiddenJob([...hiddenJob]);
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
    getHiddenJobs(event.value);
  };
  const jobApplyCallback = (id) => {
    // the callback. Use a better name
    let index = hiddenJob.findIndex((a) => a.id === id);
    hiddenJob[index].applied = true;
    setHiddenJob([...hiddenJob]);
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Hidden Jobs</b>
        </div>
      </div>

      <div className="mt-3 py-2">
        <FontAwesomeIcon icon={['fas', 'angle-left']} className="mr-2" />
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}>
          Back
        </a>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="px-3 pt-3">
            <div className="card-header-alt d-flex align-items-center justify-content-between p-2">
              <div>
                <b className="text-danger">{hiddenJob.length} Jobs Hidden</b>
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
                        {hiddenJob.map((job, index) => (
                          <tr key={index}>
                            <td className="text-left">
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
                                  Hidden: {convertDate(job.hidden_date)}
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
                              <Button
                                onClick={(e) => removeJob(e, job, index)}
                                size="small"
                                className="px-4 btn-neutral-primary">
                                {/* <FontAwesomeIcon icon={['fas', 'redo']} /> */}
                                Unhide
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!hiddenJob.length && (
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
