import React, { useState, useEffect } from 'react';

import { Grid, Card } from '@material-ui/core';

import { CircularProgressbar } from 'react-circular-progressbar';

import WorkIcon from '@material-ui/icons/Work';
import TableComponent from './table_component';

export default function HistoryComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    console.log('window.innerWidth', window.innerWidth);
    setWidth(window.innerWidth);
  };

  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <h5 className="heading">Jobs History</h5>
        </div>
      </div>

      <Grid container spacing={1} wrap={width <= 768 || 'nowrap'}>
        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={56}
                text={56}
                strokeWidth={8}
                className="circular-progress-primary"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Total Jobs Closed</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={35}
                text={35}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Unsuccessful/On hold</div>
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
