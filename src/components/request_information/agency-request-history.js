/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  Table,
  Dialog,
  Divider,
  TextField
} from '@material-ui/core';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { toast } from 'react-toastify';

import api from '../../api';
import { getCurrentUser } from 'helper';

export default function AgencyRequestHistoryComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [candidateRequests, setCandidateRequests] = useState([]);
  const [companyRequests, setCompanyRequests] = useState([]);
  const [sendQueryId, setSendQueryId] = useState(0);
  const [queryText, setQueryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDocuments();
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api
      .get(`/api/v1/request_for_informations/agency_requests`)
      .then((response) => {
        setIsLoading(false);
        if (response.data.success) {
          setCandidateRequests([...response.data.candidate_requests]);
          setCompanyRequests([...response.data.company_requests]);
        }
      });
  }

  const handleShareModalClose = () => {
    setOpenShareDoc({ open: false, doc: [] });
  };

  const docQuery = (e, doc) => {
    e.preventDefault();
    if (!queryText) {
      return;
    }
    console.log('doc', doc);
    setQueryText('');
    setSendQueryId(0);
    toast.dismiss();
    toast.success('Query send to requester');
    // history.push('/chat');
  };

  const cancelQuery = () => {
    setSendQueryId(0);
    setQueryText('');
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
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
              {currentUser.role === 'agency' ? 'Company' : 'Agency'} Requests
              History
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
                      <th>Candidate</th>
                      <th className="text-center">Reason for request</th>
                      <th className="text-center">Doc requested</th>
                      <th className="text-center">Date of Request</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      <div className="m-3">Loading...</div>
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
                  {currentUser.role === 'agency' ? 'Company' : 'Agency'}{' '}
                  Requests History
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
                      <div className="m-3">Loading...</div>
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
                  <th>Action Date</th>
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
                    <td>{doc.created_at}</td>
                    <td className="text-center">
                      <span className="mr-2">
                        {doc.status === 'accepted' ? (
                          <div className="badge badge-neutral-success text-success">
                            {doc.status.toUpperCase()}
                          </div>
                        ) : (
                          <div className="badge badge-neutral-danger text-danger">
                            {doc.status ? doc.status.toUpperCase() : 'Pending'}
                          </div>
                        )}
                      </span>
                    </td>
                    <td>
                      {doc.requested_category_id !== sendQueryId && (
                        <Button
                          size="small"
                          className="btn btn-info"
                          onClick={() =>
                            setSendQueryId(doc.requested_category_id)
                          }>
                          Query
                        </Button>
                      )}
                      {doc.requested_category_id === sendQueryId && (
                        <>
                          <div className="d-flex float-right">
                            <TextField
                              variant="outlined"
                              size="small"
                              id="text-query"
                              label="Query"
                              type="text"
                              name="query"
                              placeholder="Enter text"
                              value={queryText}
                              onChange={(e) => setQueryText(e.target.value)}
                            />
                            <Button
                              size="small"
                              className="btn shadow btn-slack  bg-color ml-2"
                              onClick={(e) => docQuery(e, doc)}>
                              Send
                            </Button>
                            <Button
                              size="small"
                              className="btn shadow btn-dark ml-2"
                              onClick={cancelQuery}>
                              Cancel
                            </Button>
                          </div>
                        </>
                      )}
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
