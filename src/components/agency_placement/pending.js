import React, { useState, useEffect } from 'react';

import { Grid, Card } from '@material-ui/core';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

import { CircularProgressbar } from 'react-circular-progressbar';
import TableComponent from './table_component';

export default function PendingComponent() {
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
        <TransferWithinAStationIcon />
        <div className="title pt-3">
          <h5 className="heading">Pending Placement</h5>
        </div>
      </div>

      <Grid container spacing={1} wrap={width <= 768 || 'nowrap'}>
        <Grid item sm={4} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={56}
                text={56}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">
                Total Pending Placements
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={4} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-warning"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">
                Outstanding IR35 Status
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">
                Outstanding Onboarding Documents
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <TableComponent />
    </>
  );
}
