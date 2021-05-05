import React, { useState } from 'react';

import {
  Button,
  MenuItem,
  Menu,
  Card,
  Table,
  LinearProgress
} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { getCurrentUser } from 'helper';

const CandidateActionsApplied = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handleClose}>
          <div className="p-3">
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Shortlist
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Contact
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Forward
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              View
            </MenuItem>
          </div>
        </Menu>
      </div>
    </>
  );
};

const CandidateActionsCandider = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl1(null);
  };
  return (
    <>
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
          anchorEl={anchorEl1}
          keepMounted
          classes={{ list: 'p-0' }}
          open={Boolean(anchorEl1)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handleClose}>
          <div className="p-3">
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Shotlist Stage
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Interview Stage
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Offer Stage
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Placement Stage
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              View
            </MenuItem>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default function TableComponent() {
  const location = useLocation();
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="table-responsive-md">
            {/* <PerfectScrollbar> */}
            <div className="table-scrollbar">
              <Table className="table table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">Job ID</th>
                    <th>
                      {currentUser.role === 'agency' ? 'Company' : 'Agency'}
                    </th>
                    <th>Job Title</th>
                    <th className="text-center">Salary</th>
                    <th className="text-center">Job Location</th>
                    <th className="text-center">Type</th>
                    <th className="text-center">Start Date</th>
                    <th className="text-center">End Date</th>
                    <th className="text-center">Date Added</th>
                    <th className="text-center">Candidates Applied</th>
                    <th className="text-center">Candidates Considered</th>
                    {location.pathname === '/agency-jobs-history' && (
                      <th className="text-center">Outcome</th>
                    )}
                    {location.pathname === '/agency-jobs-live' && (
                      <th className="text-center">Stage of Application</th>
                    )}
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-weight-bold text-center">#0001</td>
                    <td>Headhunters</td>
                    <td>Business Analyst</td>
                    <td className="text-center">£4000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">Interim</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td>
                      <CandidateActionsApplied />
                    </td>
                    <td>
                      <CandidateActionsCandider />
                    </td>
                    {location.pathname === '/agency-jobs-history' && (
                      <td className="text-center">
                        <div className="badge badge-neutral-success text-success">
                          Placed
                        </div>
                      </td>
                    )}
                    {location.pathname === '/agency-jobs-live' && (
                      <th>
                        <LinearProgress
                          variant="determinate"
                          className="progress-sm progress-bar-success"
                          value={100}
                        />
                        <div className="font-size-sm text-black-50 pt-1">
                          Placement
                        </div>
                      </th>
                    )}
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 bg-primary text-white">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0002</td>
                    <td>Software Developer</td>
                    <td>Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">Contract</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td>
                      <CandidateActionsApplied />
                    </td>
                    <td>
                      <CandidateActionsCandider />
                    </td>
                    {location.pathname === '/agency-jobs-history' && (
                      <td className="text-center">
                        <div className="badge badge-neutral-info text-info">
                          Hold
                        </div>
                      </td>
                    )}
                    {location.pathname === '/agency-jobs-live' && (
                      <th>
                        <LinearProgress
                          variant="determinate"
                          className="progress-sm progress-bar-info"
                          value={70}
                        />
                        <div className="font-size-sm text-black-50 pt-1">
                          Offer
                        </div>
                      </th>
                    )}
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 bg-primary text-white">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0003</td>
                    <td>Headhunters</td>
                    <td>Business Analyst</td>
                    <td className="text-center">£4000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">Permanent</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td>
                      <CandidateActionsApplied />
                    </td>
                    <td>
                      <CandidateActionsCandider />
                    </td>
                    {location.pathname === '/agency-jobs-history' && (
                      <td className="text-center">
                        <div className="badge badge-neutral-danger text-danger">
                          Unsuccessful
                        </div>
                      </td>
                    )}
                    {location.pathname === '/agency-jobs-live' && (
                      <th>
                        <LinearProgress
                          variant="determinate"
                          className="progress-sm progress-bar-warning"
                          value={50}
                        />
                        <div className="font-size-sm text-black-50 pt-1">
                          Interview
                        </div>
                      </th>
                    )}
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 bg-primary text-white">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0004</td>
                    <td>Software Developer</td>
                    <td>Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">Interim</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td>
                      <CandidateActionsApplied />
                    </td>
                    <td>
                      <CandidateActionsCandider />
                    </td>
                    {location.pathname === '/agency-jobs-history' && (
                      <td className="text-center">
                        <div className="badge badge-neutral-info text-info">
                          Hold
                        </div>
                      </td>
                    )}
                    {location.pathname === '/agency-jobs-live' && (
                      <th>
                        <LinearProgress
                          variant="determinate"
                          className="progress-sm progress-bar-warning"
                          value={30}
                        />
                        <div className="font-size-sm text-black-50 pt-1">
                          Unsuccessful
                        </div>
                      </th>
                    )}
                    <td className="text-center">
                      <Button
                        size="small"
                        className="px-4 bg-primary text-white">
                        View
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {/* </PerfectScrollbar> */}
          </div>
          <div className="card-footer py-3 text-center">
            <Button size="small" className="btn-outline-second" variant="text">
              View more
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
