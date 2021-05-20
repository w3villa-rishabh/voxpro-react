import React, { useState, useEffect } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import { Grid, Card, Button, Table, Dialog, Divider } from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import api from '../../api';
import { getCurrentUser } from 'helper';

export default function NewRequestComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getDocuments() {
    api
      .get(`/api/v1/users/get_request_infos?user_id=${currentUser.id}`)
      .then((response) => {
        if (response.data.success) {
          setRequests([...response.data.request_for_informations]);
        } else {
          alert('Something went wrong..');
        }
      });
  }
  const handleShareModalClose = () => {
    setOpenShareDoc({ open: false, doc: [] });
  };

  return (
    <>
      <div className="page-title">
        <TuneIcon />
        <div className="title pt-3">
          <b className="heading">Request for Information</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">31</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  New Requests
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">68</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Due
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">57</div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Due today!
                </div>
              </Card>
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
                          <th className="bg-white">S.No</th>
                          <th className="bg-white">Company/Agency</th>
                          <th className="bg-white text-center">Placement</th>
                          <th className="bg-white text-center">
                            Reason for request
                          </th>
                          <th className="bg-white text-center">Due Date</th>
                          <th className="bg-white text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {requests.map((request, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{request.company_name}</td>
                            <td className="text-center">-</td>
                            <td className="text-center w-25">
                              <div className="truncate">{request.reason}</div>
                            </td>
                            <td className="text-center text-black-50">
                              {request.due_date}
                            </td>
                            <td className="text-center">
                              <Button
                                size="small"
                                className="px-4 btn-neutral-danger"
                                onClick={() =>
                                  setOpenShareDoc({
                                    open: true,
                                    doc: request.requested_documents
                                  })
                                }>
                                Action
                              </Button>
                            </td>
                          </tr>
                        ))}
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
        </div>
      </div>

      {/* share details show */}
      <Dialog
        onClose={handleShareModalClose}
        fullWidth
        maxWidth="sm"
        classes={{ paper: 'modal-content rounded-lg' }}
        aria-labelledby="simple-dialog-title"
        open={openShareDoc.open}>
        <div className="p-3 font-size-xl font-weight-bold">
          Requested Documents
        </div>
        <Divider />
        <div className="table-responsive-md m-4">
          <div className="table-scrollbar">
            <Table className="table table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Accept Request</th>
                  <th>Decline Request</th>
                </tr>
              </thead>
              <tbody>
                {openShareDoc.doc.map((a, index) => (
                  <tr>
                    <td>
                      <span>{a.name}</span>
                    </td>
                    <td>
                      <Button size="small" className="btn btn-primary ml-2">
                        Accept
                      </Button>
                    </td>
                    <td>
                      <Button size="small" className="btn btn-danger ml-2">
                        Reject
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Dialog>
    </>
  );
}
