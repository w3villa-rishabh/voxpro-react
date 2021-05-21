/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Grid, Card, Button, Table } from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { getCurrentUser } from 'helper';
import api from '../../api';

export default function RequestHistoryComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api
      .get(
        `/api/v1/users/get_request_infos?user_id=${currentUser.id}&request_type=history`
      )
      .then((response) => {
        setIsLoading(false);
        if (response.data.success) {
          setRequests([...response.data.request_for_information]);
        }
      });
  }

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
                        {isLoading ? (
                          'Loading..'
                        ) : (
                          <>
                            {requests.map((request, index) => (
                              <tr>
                                <td>{request.id}</td>
                                <td>{request.company_name}</td>
                                <td>{request.requester_name}</td>
                                <td className="text-center">--</td>
                                <td className="text-center w-25">
                                  <div className="truncate">
                                    {request.reason}
                                  </div>
                                </td>
                                <td className="text-center text-black-50">
                                  {request.due_date}
                                </td>
                                <td className="text-center">
                                  <Button
                                    size="small"
                                    className="px-4 btn-neutral-danger">
                                    Action
                                  </Button>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                      </tbody>
                    </Table>
                    {!requests.length && !isLoading && (
                      <div className="font-size-xxl m-5 text-center">
                        No data found
                      </div>
                    )}
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
