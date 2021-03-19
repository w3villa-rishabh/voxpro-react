import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, Card, CardContent, Button, Tooltip } from '@material-ui/core';

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
      <Card className="card-box mb-spacing-6-x2">
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
                  <th className="text-center">Start Date</th>
                  <th className="text-center">Salary</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1111</td>
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
                    <div className="px-4">12/05/2021</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">€400</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">Cu Sent</div>
                  </td>
                </tr>
                <tr>
                  <td>1112</td>
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
                    <div className="px-4">10/02/2021</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">€ 4002</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">Cu Sent</div>
                  </td>
                </tr>
                <tr>
                  <td>1113</td>
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
                    <div className="px-4">12/05/2021</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">€4000</div>
                  </td>
                  <td className="text-center">
                    <div className="px-4">Cu Sent</div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
