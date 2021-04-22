import React, { useState } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import {
  Grid,
  Card,
  Button,
  Table,
  LinearProgress,
  Menu,
  MenuItem
} from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { getCurrentUser } from 'helper';

export default function RequestHistoryComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="page-title">
        <TuneIcon />
        <div className="title pt-3">
          <b className="heading">Requests History</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">12</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Total Requests
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">10</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Requests Accepted
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">02</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Requests Denied
                </div>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Card className="mt-3">
                {/* <div className="card-header py-3">
                  <div className="card-header--title font-size-lg">
                    <b>List Of Jobs</b>
                  </div>
                </div> */}

                <div className="table-responsive-md">
                  <PerfectScrollbar>
                    <Table className="table table-hover text-nowrap mb-0">
                      <thead>
                        <tr>
                          <th className="bg-white text-left">Job ID</th>
                          <th className="bg-white">Requester</th>
                          <th className="bg-white text-center">
                            Date Requested
                          </th>
                          <th className="bg-white text-center">Documents</th>
                          <th className="bg-white text-center">
                            Interview Process Stages
                          </th>
                          <th className="bg-white text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#453</td>
                          <td>Headhunters</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-info">
                              View
                            </Button>
                          </td>
                          <td className="text-black-50">
                            <LinearProgress
                              variant="determinate"
                              className="progress-sm progress-bar-success"
                              value={100}
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Completed
                            </div>
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
                                    Delete
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    View
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Edit
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow Up
                                  </MenuItem>
                                </div>
                              </Menu>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#584</td>
                          <td>Career Appear</td>
                          <td className="text-center text-black-50">
                            06/08/2022
                          </td>
                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-info">
                              View
                            </Button>
                          </td>
                          <td className="text-black-50">
                            <LinearProgress
                              variant="determinate"
                              className="progress-sm progress-bar-info"
                              value={50}
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              In-progress
                            </div>
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
                                    Delete
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    View
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Edit
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow Up
                                  </MenuItem>
                                </div>
                              </Menu>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#764</td>
                          <td>Starting Stars</td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          <td className="text-center">
                            <Button
                              size="small"
                              className="px-4 btn-neutral-info">
                              View
                            </Button>
                          </td>
                          <td className="text-black-50">
                            <LinearProgress
                              variant="determinate"
                              className="progress-sm progress-bar-warning"
                              value={30}
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Pending
                            </div>
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
                                    Delete
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    View
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Edit
                                  </MenuItem>
                                  <MenuItem
                                    className="pr-5 px-3 text-primary"
                                    onClick={handleClose}>
                                    Follow Up
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
