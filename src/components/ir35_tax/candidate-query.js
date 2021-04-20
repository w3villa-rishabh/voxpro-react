import React, { useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, Button, Table, LinearProgress } from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { getCurrentUser } from 'helper';

export default function CandidateQuery() {
  const [currentUser] = useState(getCurrentUser());
  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">IR35 Enquiry</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={6}>
            <Grid item md={4}>
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
                  Total IR35 Resolved
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">57</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Due today!
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Card className="mt-3">
                <div className="table-responsive-md">
                  <PerfectScrollbar>
                    <Table className="table table-hover text-nowrap mb-0">
                      <thead>
                        <tr>
                          <th className="bg-white text-left">Placement ID</th>
                          <th className="bg-white">Hirer</th>
                          <th className="bg-white text-left">Role</th>
                          <th className="bg-white text-center">Date Query</th>
                          <th className="bg-white text-center">Stages</th>
                          <th className="bg-white text-center">Response</th>
                          <th className="bg-white text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#453</td>
                          <td>Request 1</td>
                          <td>Admin</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="text-center text-black-50 w-25">
                            <LinearProgress
                              variant="determinate"
                              value={45}
                              className="progress-bar-rounded progress-sm progress-bar-danger"
                            />
                          </td>
                          <td className="text-center">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-success text-success px-4">
                                Available
                              </div>
                            </a>
                          </td>

                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-danger">
                              Follow
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>#584</td>
                          <td>Request 2</td>
                          <td>User</td>
                          <td className="text-center text-black-50">
                            06/08/2022
                          </td>
                          <td className="text-center w-25">
                            <LinearProgress
                              variant="determinate"
                              value={45}
                              className="progress-bar-rounded progress-sm progress-bar-warning"
                            />
                          </td>
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-warning text-warning px-4">
                                Pending
                              </div>
                            </a>
                          </td>

                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-primary">
                              Query
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>#764</td>
                          <td>Request 3</td>
                          <td>Admin</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="text-center w-25">
                            <LinearProgress
                              variant="determinate"
                              value={45}
                              className="progress-bar-rounded progress-sm progress-bar-success"
                            />
                          </td>
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-success text-success px-4">
                                Available
                              </div>
                            </a>
                          </td>

                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-success">
                              Accept
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
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
        </div>
      </div>
    </>
  );
}
