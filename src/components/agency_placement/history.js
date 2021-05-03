import React, { useState, useEffect } from 'react';

import { Grid, Card, TextField, Button } from '@material-ui/core';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

import { CircularProgressbar } from 'react-circular-progressbar';

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
    setWidth(window.innerWidth);
  };

  return (
    <>
      <div className="page-title">
        <TransferWithinAStationIcon />
        <div className="title pt-3">
          <h5 className="heading">Placement History</h5>
        </div>
      </div>

      <Card className="px-3 pt-3 mb-3">
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <b>Client</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by client"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Candidate</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by candidate"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <b>Status</b>
            <div className="mb-3 mt-2">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search by status"
                className="w-100"
                InputProps={{
                  style: {
                    height: '37px'
                  }
                }}
              />
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="mt-4 mb-4">
              <Button className="btn-primary">Search now</Button>
            </div>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={1} wrap={width <= 768 || 'nowrap'}>
        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={56}
                text={56}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Total Placements</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={20}
                text={20}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Active Placements</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={30}
                text={30}
                strokeWidth={8}
                className="circular-progress-warning"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">
                Active Placements Due to End
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={22}
                text={22}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placement Ended</div>
            </div>
          </Card>
        </Grid>

        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Extensions</div>
            </div>
          </Card>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Card className="card-box h-100">
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">
                Cancelled/Ended Early
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <TableComponent />
    </>
  );
}
