import React from 'react';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import { Grid, Card, Button, Table } from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

export default function AgencyRequestComponent() {
  const history = useHistory();

  const addNewRequest = () => {
    history.push('/agency/new-request');
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8}>
          <div className="page-title">
            <BallotTwoToneIcon />
            <div className="title pt-3">
              <b className="heading nowrap">Requests for Information</b>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            className="btn-neutral-info hover-scale-sm px-4 float-right mt-4"
            onClick={addNewRequest}>
            <span className="px-2">New Request</span>
            <FontAwesomeIcon icon={['fas', 'plus']} />
          </Button>
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
                      <th className="text-left">Job ID</th>
                      <th>Company</th>
                      <th className="text-left">Job Title</th>
                      <th className="text-center">Date Applied</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Due Date</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#453</td>
                      <td>Adecco</td>
                      <td>Data Analyst</td>
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
