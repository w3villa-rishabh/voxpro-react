import React, { useEffect, useState } from 'react';

import { Grid, Button } from '@material-ui/core';

import AddsComponents from 'components/add_component';
import logo1 from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import SearchComponent from './search-component';
import api from '../../api';
import LoaderComponent from 'components/loader';
import { toast } from 'react-toastify';

export default function JobsComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [recombedJob, setRecombedJob] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getJobs();
  }, []);

  function getJobs() {
    setIsLoading(false);
    api.get(`/api/v1/jobs/candidate_related_jobs`).then((response) => {
      setIsLoading(false);
      if (response.data.success) {
        setRecombedJob([...response.data.jobs]);
      }
    });
  }

  const saveJob = (e, request) => {
    e.preventDefault();
    console.log('doc', request);
    api.post(`/api/v1/jobs/${request.id}/save_job`).then(
      (response) => {
        if (response.data.success) {
          toast.success('Job successfully Saved..');
        } else {
          toast.error('error in saving job..');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const viewJob = (e) => {
    e.preventDefault();
    history.push('/view-job');
  };

  return (
    <>
      <SearchComponent />

      <div className="title mt-3 pl-2">
        <h6 className="fh">Based on your profile and career interests</h6>
      </div>

      <div className="mt-3">
        <Grid container spacing={2}>
          {isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              {recombedJob.map((request, index) => (
                <Grid item xs={12} sm={3}>
                  <div className="card card-custom gutter-b card-stretch bg-white btn rounded text-left p-4">
                    <div className="pointer" onClick={viewJob}>
                      <div className="d-flex flex-column justify-content-between">
                        <div>
                          <img
                            style={{ height: '50px', width: '130px' }}
                            className=""
                            alt="..."
                            src={logo1}
                          />
                        </div>
                        <div className="d-flex flex-column"></div>
                      </div>
                      <div className="mt-3">
                        <h6 className="mb-7 fh">{request.job_title}</h6>
                        <h6 className="mb-7 f">{request.company_name}</h6>
                        <span className="f text-muted">
                          {' '}
                          <FontAwesomeIcon
                            icon={['fas', 'map-marker-alt']}
                          />{' '}
                          {request.location}
                        </span>
                        <p className="mt-1 f mt-0 text-muted">
                          Salary: £{request.salary_low} - £{request.salary_high}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="btn-neutral-info hover-scale-sm mt-2"
                      onClick={(e) => saveJob(e, request)}>
                      <span className="px-2">
                        {' '}
                        <FontAwesomeIcon icon={['fas', 'heart']} />
                      </span>
                      <span> Save</span>
                    </Button>
                  </div>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
