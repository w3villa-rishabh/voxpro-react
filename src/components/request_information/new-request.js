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
import { connect } from 'react-redux';
import AddsComponents from 'components/add_component';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; // Import
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { getCurrentUser } from 'helper';
import { setEditDoc } from '../../reducers/ThemeOptions';

const NewRequestComponent = (props) => {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [requests, setRequests] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sendQueryId, setSendQueryId] = useState(0);
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    getDocuments();
    props.setEditDoc({});
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api
      .get(
        `/api/v1/users/get_request_infos?user_id=${currentUser.id}&request_type=new`
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

  const acceptReject = (e, event, id, index) => {
    e.preventDefault();
    let status = event === 'accept' ? 'accepted' : 'rejected';
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure to do this.',
      overlayClassName: 'confirm-alert',
      buttons: [
        {
          label: event.toUpperCase(),
          onClick: () => {
            api
              .post(`/api/v1/request_for_informations/accept_reject_request`, {
                status,
                id
              })
              .then(
                (response) => {
                  toast.dismiss();
                  if (response.data.success) {
                    setIsLoading(false);
                    openShareDoc.doc[index].status = status;
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
          label: 'Cancel'
        }
      ]
    });
  };

  const uploadNewDoc = (e, doc) => {
    e.preventDefault();
    console.log('doc', doc);
    props.setEditDoc(doc);
    history.push({
      pathname: '/upload',
      search: '?expire_edit=' + doc.id,
      state: {
        update: true,
        expire_edit: true
      }
    });
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
          <b className="heading">Request for Information</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <Card className="p-3">
                <div className="display-3 font-weight-bold">
                  {boxes.new_requests || 0}
                </div>
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
                <div className="display-3 font-weight-bold">
                  {boxes.due_today}
                </div>
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
                          <th className="bg-white">Company/Agency</th>
                          <th className="bg-white">Requester Name</th>
                          <th className="bg-white text-center">Placement</th>
                          <th className="bg-white text-center">
                            Reason for request
                          </th>
                          <th className="bg-white text-center">Due Date</th>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {openShareDoc.doc.map((doc, index) => (
                  <tr key={index}>
                    <td>
                      <span>{doc.name}</span>
                    </td>
                    <td>
                      {doc.requested_category_id !== sendQueryId && (
                        <Grid container spacing={0}>
                          <Grid item sm={8} xs={12}>
                            <div className="float-right">
                              {doc.status === null ? (
                                <>
                                  <Button
                                    size="small"
                                    className="btn btn-primary ml-2"
                                    onClick={(e) =>
                                      acceptReject(
                                        e,
                                        'accept',
                                        doc.requested_category_id,
                                        index
                                      )
                                    }>
                                    Accept
                                  </Button>

                                  <Button
                                    size="small"
                                    className="btn btn-danger ml-2"
                                    onClick={(e) =>
                                      acceptReject(
                                        e,
                                        'reject',
                                        doc.requested_category_id,
                                        index
                                      )
                                    }>
                                    Reject
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <div>
                                    <span className="mr-2">
                                      {doc.status === 'accepted' ? (
                                        <div className="badge badge-neutral-success text-success">
                                          {doc.status.toUpperCase()}
                                        </div>
                                      ) : (
                                        <div className="badge badge-neutral-danger text-danger">
                                          {doc.status.toUpperCase()}
                                        </div>
                                      )}
                                    </span>
                                    {doc.status === 'accepted' &&
                                      (doc.doc_expired ||
                                        doc.upload_new_doc) && (
                                        <>
                                          <br></br>
                                          {doc.expire && doc.doc_expired && (
                                            <small className="text-danger">
                                              Expire document date
                                            </small>
                                          )}
                                          {!doc.expire &&
                                            doc.upload_new_doc && (
                                              <small className="text-danger">
                                                Please upload latest document
                                              </small>
                                            )}
                                          <br></br>
                                          <a
                                            className="a-blue"
                                            href="#/"
                                            onClick={(e) =>
                                              uploadNewDoc(e, doc)
                                            }>
                                            Upload new
                                          </a>
                                        </>
                                      )}
                                  </div>
                                </>
                              )}
                            </div>
                          </Grid>

                          <Grid item sm={4} xs={12}>
                            <div className="text-wrap">
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
                            </div>
                          </Grid>
                        </Grid>
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEditDoc: (doc) => dispatch(setEditDoc(doc))
  };
};

export default connect(null, mapDispatchToProps)(NewRequestComponent);
