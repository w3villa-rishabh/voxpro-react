import React, { useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card } from '@material-ui/core';

import AddsComponents from 'components/add_component';

import AgencyTable from './agency-table';

import { getCurrentUser } from 'helper';

export default function AgencyPending() {
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">
            IR35 Questionnaires Submitted Pending Review
          </b>
        </div>
      </div>

      <Grid container spacing={2}>
        {/* <Grid item md={4}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">31</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Total IR35 Submitted
            </div>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">68</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Total IR35 Determinations
            </div>
          </Card>
        </Grid> */}
        <Grid item xs={12} sm={5}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">57</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Total IR35 Questionnaires pending review
            </div>
          </Card>
        </Grid>
      </Grid>
      <AgencyTable />

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
