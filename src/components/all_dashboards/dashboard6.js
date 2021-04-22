import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Table,
  Card,
  CardContent,
  Button,
  Tooltip
} from '@material-ui/core';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElFilter, setAnchorElFilter] = useState(null);

  const handleClickFilter = (event) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const [status, setStatus] = useState('');

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="card-box">
            <div className="card-header pr-2">
              <div className="card-header--title">Recent Applications</div>
              <div className="card-header--actions">
                <Tooltip title="Refresh">
                  <Button size="small" className="btn-neutral-primary">
                    <FontAwesomeIcon icon={['fas', 'cog']} spin />
                  </Button>
                </Tooltip>
              </div>
            </div>
            <CardContent>
              <div className="table-responsive-md">
                <Table className="table table-borderless table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Job ID</th>
                      <th className="text-left">Name</th>
                      <th className="text-center">Type</th>
                      <th className="text-center">Company</th>
                      <th className="text-center">Salary</th>
                      <th className="text-center">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#0001</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Bussiness Analyst
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-neutral-warning text-warning px-4">
                          Contract
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">Darktrace</div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">£4000</div>
                      </td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          CV Sent
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#0002</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Ops Analyst
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-neutral-warning text-warning px-4">
                          Permanent
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">Deliveroo</div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">£4000</div>
                      </td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          Shortlisted
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#0003</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              Data Analyst
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="badge badge-neutral-warning text-warning px-4">
                          Permanent
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">Improbable</div>
                      </td>
                      <td className="text-center">
                        <div className="px-4">£4000</div>
                      </td>
                      <td className="text-center">
                        <a
                          className="a-blue"
                          href="!#"
                          onClick={(e) => e.preventDefault()}>
                          Interview
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
