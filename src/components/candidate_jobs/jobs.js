import React, { useEffect, useState } from 'react';

import { Grid, Button } from '@material-ui/core';

import AddsComponents from 'components/add_component';
import logo1 from '../../assets/images/stock-photos/c-logo.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import SearchComponent from './search-component';

export default function JobsComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [recombedJob, setRecombedJob] = useState([]);

  useEffect(() => {
    setRecombedJob([1, 2, 3, 4]);
  }, []);

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
          {recombedJob.map(() => (
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
                    <h6 className="mb-7 fh">UX Lead and Researcher</h6>
                    <h6 className="mb-7 f">HexLab Corporation Pvt. ltd</h6>
                    <span className="f text-muted">
                      {' '}
                      <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />{' '}
                      London, UK
                    </span>
                    <p className="mt-1 f mt-0 text-muted">Salary: £8k - £10k</p>
                  </div>
                </div>
                <Button className="btn-neutral-info hover-scale-sm mt-2">
                  <span className="px-2">
                    {' '}
                    <FontAwesomeIcon icon={['fas', 'heart']} />
                  </span>
                  <span> Save</span>
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
