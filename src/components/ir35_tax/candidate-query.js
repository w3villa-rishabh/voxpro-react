import React, { useState } from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import {
  Grid,
  Card,
  Button,
  Table,
  LinearProgress,
  MenuItem,
  Menu
} from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { getCurrentUser } from 'helper';

export default function CandidateQuery() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
                  Total IR35 Queries Submitted
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">68</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Total IR35 Queries Resolved
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
                          <th className="text-left">Placement ID</th>
                          <th className="">Requester</th>
                          <th className="text-left">Role</th>
                          <th className="text-center">Date of Query</th>
                          <th className="text-center">Stage of Query</th>
                          <th className="text-center">Response</th>
                          <th className="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#453</td>
                          <td>Request 1</td>
                          <td>Business Analyst</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="text-black-50 w-25">
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              className="progress-bar-rounded progress-sm progress-bar-success"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Completed
                            </div>
                          </td>
                          <td className="text-center">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-success text-success px-4">
                                Available
                              </div>
                            </a>
                          </td>
                          <td className="text-center">
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                              <Button
                                aria-controls="simple-menu"
                                size="small"
                                className="px-4 btn-neutral-primary"
                                variant="contained"
                                aria-haspopup="true"
                                onClick={handleClick}>
                                Action
                              </Button>
                              <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                classes={{ list: 'p-0' }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <div className="p-3">
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Query
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Accept
                                  </MenuItem>
                                </div>
                              </Menu>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#584</td>
                          <td>Request 2</td>
                          <td>Business Developer</td>
                          <td className="text-center text-black-50">
                            06/08/2022
                          </td>
                          <td className="w-25">
                            <LinearProgress
                              variant="determinate"
                              value={45}
                              className="progress-bar-rounded progress-sm progress-bar-warning"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Submitted to Company
                            </div>
                          </td>
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-warning text-warning px-4">
                                Pending
                              </div>
                            </a>
                          </td>
                          <td className="text-center">
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                              <Button
                                aria-controls="simple-menu"
                                size="small"
                                className="px-4 btn-neutral-primary"
                                variant="contained"
                                aria-haspopup="true"
                                onClick={handleClick}>
                                Action
                              </Button>
                              <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                classes={{ list: 'p-0' }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <div className="p-3">
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Query
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Accept
                                  </MenuItem>
                                </div>
                              </Menu>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#764</td>
                          <td>Request 3</td>
                          <td>IT Manager</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="w-25">
                            <LinearProgress
                              variant="determinate"
                              value={20}
                              className="progress-bar-rounded progress-sm progress-bar-danger"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Submitted to Agency
                            </div>
                          </td>
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-warning text-warning px-4">
                                Pending
                              </div>
                            </a>
                          </td>

                          <td className="text-center">
                            <div className="d-flex align-items-center justify-content-center flex-wrap">
                              <Button
                                aria-controls="simple-menu"
                                size="small"
                                className="px-4 btn-neutral-primary"
                                variant="contained"
                                aria-haspopup="true"
                                onClick={handleClick}>
                                Action
                              </Button>
                              <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                classes={{ list: 'p-0' }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <div className="p-3">
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Query
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Accept
                                  </MenuItem>
                                </div>
                              </Menu>
                            </div>
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
