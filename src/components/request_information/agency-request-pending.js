/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Grid, Card, Button, Table, Dialog, Divider } from '@material-ui/core';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { confirmAlert } from 'react-confirm-alert';

import { useHistory } from 'react-router-dom';
import api from '../../api';
import { getCurrentUser } from 'helper';
import LoaderComponent from 'components/loader';
import { toast } from 'react-toastify';

export default function AgencyRequestPendingComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [candidateRequests, setCandidateRequests] = useState([]);
  const [companyRequests, setCompanyRequests] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDocuments();
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api
      .get(
        `/api/v1/request_for_informations/agency_requests?request_type=pending`
      )
      .then(
        (response) => {
          setIsLoading(false);
          if (response.data.success) {
            setCandidateRequests([...response.data.candidate_requests]);
            setCompanyRequests([...response.data.company_requests]);
          }
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
        }
      );
  }

  const handleShareModalClose = () => {
    setOpenShareDoc({ open: false, doc: [] });
  };

  const editDoc = () => {
    if (openShareDoc.requestId) {
      history.push({
        pathname: '/request-info/update-request',
        state: {
          id: openShareDoc.requestId
        }
      });
    }
  };

  const closedDoc = (e, index) => {
    e.preventDefault();
    confirmAlert({
      overlayClassName: 'confirm-alert',
      title: 'Confirm to closed',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            api
              .put(
                `/api/v1/request_for_informations/${openShareDoc.requestId}/close_requested_category`
              )
              .then(
                (response) => {
                  toast.dismiss();
                  setIsLoading(false);
                  if (response.data.success) {
                    openShareDoc.doc[index].status = 'closed';
                    setOpenShareDoc({ ...openShareDoc });
                    toast.success(response.data.message);
                  } else {
                    toast.error(response.data.message);
                  }
                },
                (error) => {
                  setIsLoading(false);
                  toast.error('Something went wrong');
                  console.error('error', error);
                }
              );
          }
        },
        {
          label: 'No'
        }
      ]
    });
  };

  const followUp = (doc) => {
    history.push({
      pathname: '/chat',
      search: '?user=' + doc.category_id,
      state: {
        doc
      }
    });
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Pending Requests for Information</b>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Card className="p-3 h-100">
            <div className="display-3 font-weight-bold">31</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Pending Candidate Requests
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className="p-3 h-100">
            <div className="display-3 font-weight-bold">68</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              {currentUser.role === 'agency'
                ? 'Pending Company Requests'
                : 'Pending Agency Requests'}
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className="p-3 h-100">
            <div className="display-3 font-weight-bold">57</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Candidate Request Due today!
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className="p-3 h-100">
            <div className="display-3 font-weight-bold">20</div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-info rounded border-info" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              {currentUser.role === 'agency'
                ? 'Company Request Due today!'
                : 'Agency Request Due today!'}
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="mt-3">
            <div className="card-header py-3">
              <div className="card-header--title font-size-lg">
                <b>Candidate Pending Requests</b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>Candidate</th>
                      <th className="text-center">Reason for request</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Date of Request</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {candidateRequests.map((request, index) => (
                          <tr key={index}>
                            <td>{request.candidate_name}</td>
                            <td className="text-center">{request.reason}</td>
                            <td className="text-center">
                              <Button
                                size="small"
                                className="btn btn-info"
                                variant="text">
                                {request.document_count}
                              </Button>
                            </td>
                            <td className="text-center text-black-50">
                              {request.date}
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
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!candidateRequests.length && !isLoading && (
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

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Card className="mt-3">
            <div className="card-header py-3">
              <div className="card-header--title font-size-lg">
                <b>
                  {currentUser.role === 'agency' ? 'Company' : 'Agency'} Pending
                  Requests
                </b>
              </div>
            </div>

            <div className="table-responsive-md">
              <PerfectScrollbar>
                <Table className="table table-hover text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>
                        {currentUser.role === 'agency' ? 'Company' : 'Agency'}
                      </th>
                      <th className="text-center">Reason for request</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Date of Request</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <LoaderComponent />
                    ) : (
                      <>
                        {companyRequests.map((request, index) => (
                          <tr key={index}>
                            <td>{request.company_name}</td>
                            <td className="text-center">{request.reason}</td>
                            <td className="text-center">
                              <Button
                                size="small"
                                className="btn btn-info"
                                variant="text">
                                {request.document_count}
                              </Button>
                            </td>
                            <td className="text-center text-black-50">
                              {request.date}
                            </td>

                            <td className="text-center">
                              <Button
                                size="small"
                                className="px-4 btn-neutral-danger"
                                onClick={() =>
                                  setOpenShareDoc({
                                    open: true,
                                    doc: request.requested_documents,
                                    requestId: request.id
                                  })
                                }>
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </Table>
                {!companyRequests.length && !isLoading && (
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

      {/* share details show */}
      <Dialog
        onClose={handleShareModalClose}
        fullWidth
        maxWidth="md"
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
                  <th className="text-center">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {openShareDoc.doc.map((doc, index) => (
                  <tr key={index}>
                    <td>
                      <span>{doc.name}</span>
                    </td>
                    <td className="text-center">
                      <span className="mr-2">
                        {doc.status === null ? (
                          <div className="badge badge-neutral-warning text-warning">
                            Pending
                          </div>
                        ) : (
                          <>
                            {doc.status === 'accepted' ? (
                              <div className="badge badge-neutral-success text-success">
                                {doc.status.toUpperCase()}
                              </div>
                            ) : (
                              <div className="badge badge-neutral-danger text-danger">
                                {doc.status.toUpperCase()}
                              </div>
                            )}
                          </>
                        )}
                      </span>
                    </td>
                    <td>
                      {doc.status === null && (
                        <>
                          <Button
                            size="small"
                            className="btn btn-primary ml-2"
                            onClick={editDoc}>
                            Edit
                          </Button>

                          <Button
                            size="small"
                            className="btn btn-danger ml-2"
                            onClick={(e) => closedDoc(e, index)}>
                            Closed
                          </Button>
                        </>
                      )}
                      <Button
                        size="small"
                        className="btn btn-info ml-2"
                        onClick={() => followUp(doc)}>
                        Follow Up
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
