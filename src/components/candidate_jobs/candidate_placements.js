import React, { useState } from 'react';

import { Button, Grid, Card, Table, MenuItem, Menu } from '@material-ui/core';

import { getCurrentUser } from '../../helper';
import { CircularProgressbar } from 'react-circular-progressbar';

import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function CandidatePlacements() {
  const [documents, setDocuments] = useState([]);
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
        <WorkIcon />
        <div className="title">
          <h5 className="heading">Placements</h5>
          <p>List of all the Placements</p>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
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

        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={35}
                text={35}
                strokeWidth={8}
                className="circular-progress-success"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Active Placements</div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
            <div className="card-content-overlay text-center pt-4 pb-1">
              <CircularProgressbar
                value={20}
                text={20}
                strokeWidth={8}
                className="circular-progress-warning"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-md opacity-8">
                Active placements due to end
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={30}
                text={30}
                strokeWidth={8}
                className="circular-progress-info"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-lg opacity-8">Placements ended </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
            <div className="card-content-overlay text-center py-4">
              <CircularProgressbar
                value={22}
                text={22}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-md opacity-8">
                Outstanding IR35 status
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <Card className="card-box" style={{ minHeight: '200px' }}>
            <div className="card-content-overlay text-center pt-4 pb-1">
              <CircularProgressbar
                value={25}
                text={25}
                strokeWidth={8}
                className="circular-progress-danger"
              />
              <div className="text-black mt-4 mb-1"></div>
              <div className="font-size-md opacity-8">
                Outstanding Onboarding documents
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="table-responsive-md">
            <PerfectScrollbar>
              <Table className="table table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">Placement ID</th>
                    <th className="text-center">Placement Status</th>
                    <th className="text-center">Job Title</th>
                    <th className="text-center">Company</th>
                    <th className="text-center">Salary</th>
                    <th className="text-center">Start Date</th>
                    <th className="text-center">End Date</th>
                    <th className="text-center">IR 35 Status</th>
                    <th className="text-center">Onboarding Documents</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-weight-bold text-center">#0001</td>
                    <td className="text-center">Ended</td>
                    <td className="text-center">Business Analyst</td>
                    <td className="text-center">Headhunters</td>
                    <td className="text-center">£4000</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Inside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-primary"
                        variant="contained">
                        View
                      </Button>
                    </td>
                    <td>
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
                              Follow Up
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Withdraw
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Delete
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              More
                            </MenuItem>
                          </div>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0002</td>
                    <td className="text-center">Due To End</td>
                    <td className="text-center">Software Developer</td>
                    <td className="text-center">Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Outside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-primary"
                        variant="contained">
                        Pending
                      </Button>
                    </td>
                    <td>
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
                              Follow Up
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Withdraw
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Delete
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              More
                            </MenuItem>
                          </div>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0003</td>
                    <td className="text-center">Active</td>
                    <td className="text-center"> IT Architect</td>
                    <td className="text-center">Starting Stars</td>
                    <td className="text-center">£3000</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">N/A</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-primary"
                        variant="contained">
                        View
                      </Button>
                    </td>
                    <td>
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
                              Follow Up
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Withdraw
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Delete
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              More
                            </MenuItem>
                          </div>
                        </Menu>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0004</td>
                    <td className="text-center">Pending</td>
                    <td className="text-center">Business Developer</td>
                    <td className="text-center">Humble Hunters</td>
                    <td className="text-center">£2500</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Pending</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-primary"
                        variant="contained">
                        Pending
                      </Button>
                    </td>
                    <td>
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
                              Follow Up
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Withdraw
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              Delete
                            </MenuItem>
                            <MenuItem
                              className="pr-5 px-3 text-primary"
                              onClick={handleClose}>
                              More
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
            <Button size="small" className="btn-outline-second" variant="text">
              View more entries
            </Button>
          </div>
        </Card>
      </div>

      <AddsComponents />
    </>
  );
}
