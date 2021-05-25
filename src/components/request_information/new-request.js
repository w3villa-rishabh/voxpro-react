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
  const [isLoading, setIsLoading] = useState(false);
  const [sendQueryId, setSendQueryId] = useState(0);
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    getDocuments();
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
      search: '?expire_edit=' + 0,
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
                          'Loading..'
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
                {openShareDoc.doc.map((a, index) => (
                  <tr key={index}>
                    <td>
                      <span>{a.name}</span>
                    </td>
                    <td>
                      <Grid container spacing={0}>
                        <Grid item sm={8} xs={12}>
                          <div className="float-right">
                            {a.status === null ? (
                              <>
                                <Button
                                  size="small"
                                  className="btn btn-primary ml-2"
                                  onClick={(e) =>
                                    acceptReject(
                                      e,
                                      'accept',
                                      a.rcategory_id,
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
                                      a.rcategory_id,
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
                                    {a.status.toUpperCase()}
                                  </span>
                                  {a.status === 'accepted' && a.expire && (
                                    <>
                                      <br></br>
                                      <small className="text-danger">
                                        Expire document date
                                      </small>
                                      <br></br>
                                      <a
                                        className="a-blue"
                                        href="#/"
                                        onClick={(e) => uploadNewDoc(e, a)}>
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
                            {a.rcategory_id !== sendQueryId && (
                              <Button
                                size="small"
                                className="btn btn-info"
                                onClick={() => setSendQueryId(a.rcategory_id)}>
                                Query
                              </Button>
                            )}
                            {a.rcategory_id === sendQueryId && (
                              <>
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
                                <div className="d-flex">
                                  <Button
                                    size="small"
                                    className="btn shadow btn-slack  bg-color ml-2 mt-2"
                                    onClick={(e) => docQuery(e, a)}>
                                    Send
                                  </Button>
                                  <Button
                                    size="small"
                                    className="btn shadow btn-dark ml-2 mt-2"
                                    onClick={cancelQuery}>
                                    Cancel
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>
                        </Grid>
                      </Grid>
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
