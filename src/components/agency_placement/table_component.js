import React, { useState } from 'react';
import { getCurrentUser } from 'helper';

import { Button, MenuItem, Menu, Card, Table } from '@material-ui/core';

const Actions = () => {
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
          getContentAnchorEl={null}
          keepMounted
          classes={{ list: 'p-0' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <div className="p-3">
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Follow Up
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Withdraw
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              Delete
            </MenuItem>
            <MenuItem className="pr-5 px-3 text-primary" onClick={handleClose}>
              More
            </MenuItem>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default function TableComponent() {
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="pt-3">
        <Card className="card-box mb-spacing-6-x2">
          <div className="table-responsive-md">
            <div className="table-scrollbar">
              <Table className="table table-hover text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-center">Placement ID</th>
                    <th>Candidate</th>
                    <th>
                      {currentUser.role === 'agency' ? 'Company' : 'Agency'}
                    </th>
                    <th>Job Title</th>
                    <th className="text-center">Salary</th>
                    <th className="text-center">Job Location</th>
                    <th className="text-center">Start Date</th>
                    <th className="text-center">End Date</th>
                    <th className="text-center">IR35 Status</th>
                    <th className="text-center">
                      {currentUser.role === 'agency'
                        ? 'Onboarding Documents'
                        : 'Placement Status'}
                    </th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-weight-bold text-center">#0001</td>
                    <td>Deepak Kumar</td>
                    <td>Headhunters</td>
                    <td>Business Analyst</td>
                    <td className="text-center">£4000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Inside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="btn btn-info"
                        variant="text">
                        View
                      </Button>
                    </td>
                    <td>
                      <Actions />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0002</td>
                    <td>Rishabh</td>
                    <td>Software Developer</td>
                    <td>Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Outside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="btn btn-info"
                        variant="text">
                        View
                      </Button>
                    </td>
                    <td>
                      <Actions />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0003</td>
                    <td>Deepak Kumar</td>
                    <td>Headhunters</td>
                    <td>Business Analyst</td>
                    <td className="text-center">£4000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Inside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="btn btn-info"
                        variant="text">
                        View
                      </Button>
                    </td>
                    <td>
                      <Actions />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0004</td>
                    <td>Rishabh</td>
                    <td>Software Developer</td>
                    <td>Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">Outside IR-35</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="btn btn-info"
                        variant="text">
                        View
                      </Button>
                    </td>
                    <td>
                      <Actions />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-weight-bold text-center">#0005</td>
                    <td>Rishabh</td>
                    <td>Software Developer</td>
                    <td>Career Appear</td>
                    <td className="text-center">£2000</td>
                    <td className="text-center">London, UK</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">14 Feb 2020</td>
                    <td className="text-center">N/A</td>
                    <td className="text-center">
                      <Button
                        size="small"
                        className="btn btn-info"
                        variant="text">
                        View
                      </Button>
                    </td>
                    <td>
                      <Actions />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
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
