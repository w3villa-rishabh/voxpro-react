/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Grid, Card, Button, List, ListItem } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory, useLocation } from 'react-router';
import AddsComponents from 'components/add_component';
import SearchComponent from './search-component';
import api from '../../api';
import LoaderComponent from 'components/loader';
import { toast } from 'react-toastify';
import ApplyNewJob from './apply-new-job';
import ShareJob from './share-job-component';

export default function JobSearchComponent() {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [currentUser] = useState(getCurrentUser());
  const [job, setJob] = useState({});
  const [similarJobs, setSimilarJobs] = useState([]);

  useEffect(() => {
    getJobDetails();
  }, []);

  const getJobDetails = () => {
    let id = location.state ? location.state.id : 0;
    if (id) {
      findJobById(id);
    }
  };

  const findJobById = (id) => {
    setIsLoading(true);
    api.get(`/api/v1/jobs/${id}`).then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setJob({ ...response.data.jobs });
          setSimilarJobs([...response.data.similar_jobs]);
          console.log('job', job);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  const saveJob = (e, request) => {
    e.preventDefault();
    console.log('doc', request);
    api
      .post(
        `/api/v1/jobs/${
          request.id
        }/save_job?status=${(request.favorite = !request.favorite)}`
      )
      .then(
        (response) => {
          if (response.data.success) {
            toast.success(response.data.message);
            setJob(response.data.job);
          } else {
            toast.error('error in saving job..');
          }
        },
        (error) => {
          console.error(error);
        }
      );
  };

  const jobApplyCallback = (id) => {
    // the callback. Use a better name
    console.log('id', id);
    job.applied = true;
    setJob({ ...job });
  };

  return (
    <>
      <SearchComponent />

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

      {isLoading ? <LoaderComponent /> : ''}

      {!!Object.keys(job).length && (
        <Grid container spacing={1}>
          <Grid item xs={12} sm={9}>
            <Card
              className="card-box"
              style={{ 'border-top': '5px solid #0e5bbc' }}>
              <div className="rounded-0 border-bottom px-3 py-2">
                <div className="card-header--title">
                  <h2>{job.job_title}</h2>
                  <p>
                    Posted 1 week ago
                    {/* Posted 1 week ago by{' '}
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="a-blue font-weight-bold">
                    REED Easy Apply
                  </a>{' '}
                  Featured */}
                  </p>
                </div>
              </div>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={9} className="px-3">
                  <div className="bg-gray mt-3 p-3 border">
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={['fas', 'rupee-sign']}
                        />

                        <b>
                          {' '}
                          £{job.salary_low} - £{job.salary_high}
                        </b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={['fas', 'map-marker-alt']}
                        />

                        <b>{job.location}</b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={['fas', 'clock']}
                        />

                        <b>{job.job_type}</b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={['fas', 'user']}
                        />

                        <b>Be one of the first ten applicants</b>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="mt-2">
                    <p>{job.description} </p>
                  </div>
                  <div>
                    <ul
                      className="ml-3 list-profile-available font-size-xl"
                      style={{ 'list-style': 'disc' }}>
                      <li>ReactJS</li>
                      <li>.NET/ ASP.NET framework</li>
                      <li>SQL Server</li>
                      <li>Model-View-Controller (MVC)</li>
                      <li>Object Oriented Design Principles</li>
                      <li>Visual Studio 2017/2019</li>
                      <li>
                        Able to Translate UI/UX design wireframes to actual code
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>
                      All interested candidates can send their CV to: or call on
                      +.
                    </b>
                  </div>
                  <div className="text-center py-5">
                    <ApplyNewJob
                      width={'w-50'}
                      job={job}
                      jobApplyCallback={jobApplyCallback}
                    />
                  </div>
                  <div>
                    <b>Reference: {job.job_name}</b>
                  </div>
                  <div>
                    <span>
                      Bank or payment details should never be provided when
                      applying for a job. For information on how to stay safe in
                      your job search, visit SAFERjobs.
                    </span>
                  </div>
                  <div className="text-center py-5">
                    <Button
                      size="small"
                      className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                      <span className="px-2">
                        <FontAwesomeIcon icon={['fas', 'bell']} />
                      </span>
                      <span>Get job alert</span>
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={12} sm={3} className="px-3 py-2">
                  <ApplyNewJob job={job} jobApplyCallback={jobApplyCallback} />
                  <div className="mt-3">
                    <span>
                      You're using CV Deepak_Kumar_js.pdf to apply for this
                      role.
                    </span>
                    <div className="float-right">
                      <a
                        href="#/"
                        className="a-blue font-weight-bold"
                        onClick={(e) => {
                          e.preventDefault();
                          history.push('/upload');
                        }}>
                        Upload CV
                      </a>
                    </div>
                  </div>
                  <Button
                    fullWidth
                    size="small"
                    onClick={(e) => saveJob(e, job)}
                    className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                    <span className="px-2">
                      <FontAwesomeIcon
                        icon={
                          job.favorite ? ['fas', 'heart'] : ['far', 'heart']
                        }
                      />
                    </span>
                    <span>{job.favorite ? 'Shortlisted' : 'Shortlist'}</span>
                  </Button>

                  <ShareJob job={job} />
                  <div className="d-flex mt-3 border flex-column justify-content-between">
                    <div>
                      <img
                        style={{ height: '90px', width: '100%' }}
                        className=""
                        alt="..."
                        src={job.company_logo}
                      />
                    </div>
                    <div className="d-flex flex-column"></div>
                    <Button
                      fullWidth
                      size="small"
                      className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                      <span>Connect</span>
                    </Button>
                  </div>
                </Grid>
              </Grid>
              <div className="card-footer mt-4">
                <b>
                  Not quite what you are looking for? Try these similar searches
                </b>
                <Grid container spacing={0} className="mt-3">
                  <Grid item xs={12} sm={6}>
                    <a
                      href="#/"
                      className="a-blue"
                      onClick={(e) => e.preventDefault()}>
                      Implement Technology jobs in Holbein
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <a
                      href="#/"
                      className="a-blue"
                      onClick={(e) => e.preventDefault()}>
                      Developer jobs in Holbein
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <a
                      href="#/"
                      className="a-blue"
                      onClick={(e) => e.preventDefault()}>
                      Jobs in Holbein
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <a
                      href="#/"
                      className="a-blue"
                      onClick={(e) => e.preventDefault()}>
                      Information Technology jobs
                    </a>
                  </Grid>
                </Grid>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card
              className="card-box"
              style={{ 'border-top': '5px solid grey' }}>
              <h4 className="p-3 border-bottom">Similar jobs</h4>
              <List className="list-group-flush mb-4 mb-lg-0 text-left">
                {similarJobs.map((sim, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    button
                    href="#/"
                    disableRipple
                    onClick={(e) => {
                      e.preventDefault();
                      findJobById(sim.id);
                    }}
                    className="d-flex bg-white hover-scale-rounded align-items-center">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className="font-weight-bold text-black">
                          {sim.job_title}
                        </div>
                        <div className="text-black-50">
                          {sim.sub_discipline || sim.discipline}
                        </div>
                      </div>
                    </div>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
