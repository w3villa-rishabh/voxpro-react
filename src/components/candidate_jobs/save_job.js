import React from 'react';

import { Card, Button, Grid, Table } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import WorkIcon from '@material-ui/icons/Work';
import AddsComponents from 'components/add_component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SaveJobComponent() {
  return (
    <>
      <div className="page-title">
        <WorkIcon />
        <div className="title pt-3">
          <b className="heading">Saved Jobs</b>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="px-3 pt-3">
            <div className="text-danger">
              <b>5 Shortlisted Jobs list</b>
            </div>
            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="bg-white text-left">Job Details</th>
                      <th className="bg-white text-center">Status</th>
                      <th className="bg-white text-center"></th>
                      <th className="bg-white text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-left d-flex">
                        <div>
                          <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            className="font-size-lg mr-2 mt-1 text-danger"
                          />
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black a-blue"
                            title="...">
                            Finance Director
                          </a>
                          <small className="text-black-50 d-block">
                            London, South East England-Harper May Ltd.
                          </small>
                          <small className="text-black-50">Saved: Today</small>
                        </div>
                      </td>
                      <td className="text-center">
                        <a href="!#" onClick={(e) => e.preventDefault()}>
                          <div className="badge badge-neutral-success text-success px-4">
                            Live
                          </div>
                        </a>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-primary">
                          Apply
                        </Button>
                      </td>
                      <td>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left d-flex">
                        <div>
                          <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            className="font-size-lg mr-2 mt-1 text-danger"
                          />
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black a-blue"
                            title="...">
                            Finance Director
                          </a>
                          <small className="text-black-50 d-block">
                            London, South East England-Harper May Ltd.
                          </small>
                          <small className="text-black-50">Saved: Today</small>
                        </div>
                      </td>
                      <td className="text-center">
                        <a href="!#" onClick={(e) => e.preventDefault()}>
                          <div className="badge badge-neutral-danger text-danger px-4">
                            Closed
                          </div>
                        </a>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          Remove
                        </Button>
                      </td>
                      <td>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left d-flex">
                        <div>
                          <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            className="font-size-lg mr-2 mt-1 text-danger"
                          />
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black a-blue"
                            title="...">
                            Finance Director
                          </a>
                          <small className="text-black-50 d-block">
                            London, South East England-Harper May Ltd.
                          </small>
                          <small className="text-black-50">Saved: Today</small>
                        </div>
                      </td>
                      <td className="text-center">
                        <a href="!#" onClick={(e) => e.preventDefault()}>
                          <div className="badge badge-neutral-success text-success px-4">
                            Live
                          </div>
                        </a>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-primary">
                          Apply
                        </Button>
                      </td>
                      <td>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left d-flex">
                        <div>
                          <FontAwesomeIcon
                            icon={['fas', 'heart']}
                            className="font-size-lg mr-2 mt-1 text-danger"
                          />
                        </div>
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black a-blue"
                            title="...">
                            Finance Director
                          </a>
                          <small className="text-black-50 d-block">
                            London, South East England-Harper May Ltd.
                          </small>
                          <small className="text-black-50">Saved: Today</small>
                        </div>
                      </td>
                      <td className="text-center">
                        <a href="!#" onClick={(e) => e.preventDefault()}>
                          <div className="badge badge-neutral-danger text-danger px-4">
                            Closed
                          </div>
                        </a>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          Remove
                        </Button>
                      </td>
                      <td>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
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
    </>
  );
}
