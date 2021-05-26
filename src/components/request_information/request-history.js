/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import {
  Grid,
  Card,
  Button,
  Table,
  Dialog,
  Divider,
  TextField
} from '@material-ui/core';

import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { toast } from 'react-toastify';

import { getCurrentUser } from 'helper';
import api from '../../api';

export default function RequestHistoryComponent() {
  const [currentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [sendQueryId, setSendQueryId] = useState(0);
  const [queryText, setQueryText] = useState('');

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
          setBoxes(response.data);
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
                <div className="display-3 font-weight-bold">
                  {boxes.total_document_requested || 0}
                </div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Total document requested
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">
                  {boxes.total_document_accepted || 0}
                </div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Total Document accepted
                </div>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">
                  {boxes.total_document_rejected || 0}
                </div>
                <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                <div className="font-weight-bold font-size-sm text-uppercase">
                  Total document rejected
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
                          <th className="bg-white">Company/Agency</th>
                          <th className="bg-white">Requester Name</th>
                          <th className="bg-white text-center">Placement</th>
                          <th className="bg-white text-center">
                            Reason for request
                          </th>
                          {/* <th className="bg-white text-center">
                            Interview Process Stages
                          </th> */}
                          <th className="bg-white text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <div className="m-3">Loading...</div>
                        ) : (
                          <>
                            {requests.map((request, index) => (
                              <tr key={index}>
                                <td>{request.company_name}</td>
                                <td>{request.requester_name}</td>
                                <td className="text-center">--</td>
                                <td className="text-center w-25">
                                  <div className="truncate">
                                    {request.reason}
                                  </div>
                                </td>
                                {/* <td>--</td> */}
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
