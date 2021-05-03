import React, { useState, useEffect } from 'react';

import { Grid, Card } from '@material-ui/core';

import { CircularProgressbar } from 'react-circular-progressbar';
import TableComponent from './table_component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import WorkIcon from '@material-ui/icons/Work';

export default function LiveComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <h5 className="heading">Live Jobs</h5>
        </div>
      </div>

      <Grid container spacing={1} wrap={width <= 768 || 'nowrap'}>
        <Grid item sm={3} xs={12}>
          <Card className="bg-light-pure h-100 p-4">
            <div className="d-flex align-items-center">
              <div className="d-50 rounded-circle btn-icon bg-brand-dribbble text-white text-center font-size-lg mr-3">
                <FontAwesomeIcon icon={['far', 'user']} />
              </div>
              <div className="text-white font-weight-bold font-size-lg">
                Live Jobs
              </div>
            </div>
            <div className="display-3 text-center line-height-sm text-white text-center d-flex align-items-center pt-3 justify-content-center">
              <small>
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-success mr-2"
                />
              </small>
              <div>4867</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={20}
                text={20}
                strokeWidth={8}
                className="circular-progress-first"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Shortlist Stage</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={30}
                text={30}
                strokeWidth={8}
                className="circular-progress-warning"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Interviews Stage</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={22}
                text={22}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Offers Stage</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placements Stage</div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <TableComponent />
    </>
  );
}
