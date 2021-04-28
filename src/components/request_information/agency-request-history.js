import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Grid, Card, Button, Table } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default function AgencyRequestHistoryComponent() {
  return (
    <>
      <div className="page-title">
        <TuneIcon />
        <div className="title pt-3">
          <b className="heading">Requests for Information History</b>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">31</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Candidate Requests History
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">68</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Company Requests History
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="mt-3">
            <div className="card-header py-3">
              <div className="card-header--title font-size-lg">
                <b>Candidate Requests History</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Job ID</th>
                      <th>Candidate</th>
                      <th className="text-left">Job Title</th>
                      <th>Company</th>
                      <th className="text-center">Date of Request</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Date of Response</th>
                      <th className="text-center">Response</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#453</td>
                      <td>Deepak Kumar</td>
                      <td>Data Analyst</td>
                      <td>Adecco</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          4
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-success text-success">
                          Accepted
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>#584</td>
                      <td>Rishabh</td>
                      <td>Huntress Group</td>
                      <td>Ops Analyst</td>
                      <td className="text-center text-black-50">06/08/2022</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          3
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-danger text-danger">
                          Declined
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>#764</td>
                      <td>Rishabh Pandey</td>
                      <td>Bussiness Analyst</td>
                      <td>Satigo</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          4
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-info text-info">
                          Queried
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
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

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="mt-3">
            <div className="card-header py-3">
              <div className="card-header--title font-size-lg">
                <b>Company Requests History</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="text-left">Job ID</th>
                      <th>Company</th>
                      <th className="text-left">Job Title</th>
                      <th className="text-center">Date of Request</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Date of Response</th>
                      <th className="text-center">Response</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#453</td>
                      <td>Data Analyst</td>
                      <td>Adecco</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          4
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-success text-success">
                          Accepted
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>#584</td>
                      <td>Ops Analyst</td>
                      <td>Huntress Group</td>
                      <td className="text-center text-black-50">06/08/2022</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          3
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-danger text-danger">
                          Declined
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>#764</td>
                      <td>Satigo</td>
                      <td>Bussiness Analyst</td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="btn btn-info"
                          variant="text">
                          4
                        </Button>
                      </td>
                      <td className="text-center text-black-50">12/12/2020</td>
                      <td className="text-center">
                        <div className="badge badge-neutral-info text-info">
                          Queried
                        </div>
                      </td>
                      <td className="text-center">
                        <Button
                          size="small"
                          className="px-4 btn-neutral-danger">
                          View
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
    </>
  );
}
