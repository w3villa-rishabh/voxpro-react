import React, { useState } from 'react';

import {
  Grid,
  Card,
  Menu,
  MenuItem,
  Button,
  Table,
  LinearProgress
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from 'helper';

export default function AgencyTable() {
  const location = useLocation();
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="mt-3">
            <div className="table-responsive-md">
              <div className="table-scrollbar">
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Placement ID</th>
                      <th className="">Job Title</th>
                      <th className="text-left">
                        {currentUser.role === 'agency' ? 'Company' : 'Agency'}
                      </th>
                      <th className="text-center">Start Date</th>
                      <th className="text-center">Candidate</th>
                      {location.pathname === '/ir35-enquiries' && (
                        <>
                          <th className="text-center">Date of Query</th>
                          <th className="text-center">Stage of Query</th>
                        </>
                      )}

                      {location.pathname === '/ir35-enquiries' && (
                        <>
                          <th className="text-center">Due Date</th>
                          <th className="text-center">Response</th>
                        </>
                      )}

                      {location.pathname === '/ir35-pending' && (
                        <>
                          <th className="text-center">
                            Date Submitted by Candidate
                          </th>
                        </>
                      )}

                      {location.pathname === '/ir35-history' && (
                        <>
                          <th className="text-center">
                            Date Submitted by Candidate
                          </th>
                          <th className="text-center">Stage</th>
                          <th className="text-center">Due Date</th>
                          <th className="text-center">Documents</th>
                          <th className="text-center">Status Certificate</th>
                        </>
                      )}
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#453</td>
                      <td>Software Engineer</td>
                      <td>Nolan Recruitment</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td>Deepak</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      {(location.pathname === '/ir35-history' ||
                        location.pathname === '/ir35-enquiries') && (
                        <>
                          <td className="w-25">
                            <LinearProgress
                              variant="determinate"
                              value={100}
                              className="progress-bar-rounded progress-sm progress-bar-success"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Completed
                            </div>
                          </td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          {location.pathname === '/ir35-history' && (
                            <td className="text-center">
                              <Button
                                size="small"
                                className="btn btn-info"
                                variant="text">
                                2
                              </Button>
                            </td>
                          )}
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-success text-success px-4">
                                Available
                              </div>
                            </a>
                          </td>
                        </>
                      )}
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
                      <td>Developer</td>
                      <td>Nolan Recruitment</td>
                      <td className="text-center text-black-50">06/08/2022</td>
                      <td>Tarun</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      {(location.pathname === '/ir35-history' ||
                        location.pathname === '/ir35-enquiries') && (
                        <>
                          <td className="w-25">
                            <LinearProgress
                              variant="determinate"
                              value={60}
                              className="progress-bar-rounded progress-sm progress-bar-primary"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Submitted to Company
                            </div>
                          </td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          {location.pathname === '/ir35-history' && (
                            <td className="text-center">
                              <Button
                                size="small"
                                className="btn btn-info"
                                variant="text">
                                4
                              </Button>
                            </td>
                          )}
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-warning text-warning px-4">
                                Pending
                              </div>
                            </a>
                          </td>
                        </>
                      )}
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
                      <td>QA Tester</td>
                      <td>Adecco</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td>Rishab</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      {(location.pathname === '/ir35-history' ||
                        location.pathname === '/ir35-enquiries') && (
                        <>
                          <td className="w-25">
                            <LinearProgress
                              variant="determinate"
                              value={45}
                              className="progress-bar-rounded progress-sm progress-bar-danger"
                            />
                            <div className="font-size-sm text-black-50 pt-1">
                              Submitted to Agency{' '}
                            </div>
                          </td>
                          <td className="text-center text-black-50">
                            12/12/2020
                          </td>
                          {location.pathname === '/ir35-history' && (
                            <td className="text-center">
                              <Button
                                size="small"
                                className="btn btn-info"
                                variant="text">
                                3
                              </Button>
                            </td>
                          )}
                          <td className="text-center text-black-50">
                            <a href="!#" onClick={(e) => e.preventDefault()}>
                              <div className="badge badge-neutral-warning text-warning px-4">
                                Pending
                              </div>
                            </a>
                          </td>
                        </>
                      )}
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
              </div>
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
    </>
  );
}
