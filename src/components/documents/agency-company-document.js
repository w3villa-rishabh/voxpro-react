/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Button, Grid, Dialog, Divider, Table } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import { getCurrentUser } from '../../helper';
import api from '../../api';
import { setEditDoc } from '../../reducers/ThemeOptions';
import { connect } from 'react-redux';
import LoaderComponent from 'components/loader';

const AgencyCompanyDocument = (props) => {
  const history = useHistory();
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequest] = useState({});
  const [openExpDoc, setOpenExpDoc] = useState({ open: false, doc: [] });

  useEffect(() => {
    getDocuments();
    props.setEditDoc({});
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api.get(`/api/v1/documents/agency_company_documents`).then((response) => {
      setIsLoading(false);
      if (response.data.success) {
        setDocuments([
          response.data.candidate_docs,
          response.data.placement_docs,
          response.data.client_docs,
          response.data.my_templates
        ]);
        setRequest({
          document_uploaded: response.data.document_uploaded,
          candidate_expiry_doc: response.data.candidate_expiry_doc
        });
      } else {
        alert('Something went wrong..');
      }
    });
  }

  const viewDocument = (e, doc, index, status) => {
    e.preventDefault();
    let name = 'Candidates Documents';
    if (index === 1) {
      name = 'Placements Documents';
    } else if (index === 2 && currentUser.role === 'agency') {
      name = 'Clients Documents';
    } else if (index === 2 && currentUser.role === 'company') {
      name = 'Agency Documents';
    } else if (index === 3) {
      name = 'My Templates';
    }

    let id = doc.category_id ? doc.category_id : 0;
    if (status === 'accepted') {
      history.push({
        pathname: '/view-document',
        search: '?id=' + id,
        state: {
          id,
          status,
          name
        }
      });
    } else if (status === 'pending') {
      history.push({
        pathname: '/pending-document',
        search: '?id=' + id,
        state: {
          id,
          status,
          name
        }
      });
    }
  };

  const viewExpireDocument = (requests) => {
    if (requests.doc_due_to_expire) {
      setOpenExpDoc({
        open: true,
        doc: requests.doc_due_to_expire
      });
    }
  };

  const handleExpModalClose = () => {
    setOpenExpDoc({ open: false, doc: [] });
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
        expire_edit: true,
        request_category_id: 0,
        moveToHistory: false
      }
    });
  };

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          {currentUser.role !== 'candidate' && (
            <h5 className="heading mt-3">Document Management</h5>
          )}
        </div>
      </div>

      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Grid container spacing={2}>
          {documents.map((doc, index) => (
            <Grid key={index} item md={3} xs={12}>
              <Card className="card-box h-100">
                <div className="m-2 text-capitalize font-size-lg text-center">
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') &&
                    index === 0 && <b>Candidates Documents</b>}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') &&
                    index === 1 && <b>Placements Documents</b>}
                  {currentUser.role === 'agency' && index === 2 && (
                    <b>Clients Documents</b>
                  )}
                  {currentUser.role === 'company' && index === 2 && (
                    <b>Agency Documents</b>
                  )}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') &&
                    index === 3 && <b>My Templates</b>}
                </div>
                <div className="card-content-overlay text-center py-4">
                  <div className="d-70 rounded-circle bg-info text-white btn-icon mx-auto text-center">
                    <FontAwesomeIcon
                      icon={['fas', 'id-card-alt']}
                      className="display-4"
                    />
                  </div>
                  <div className="mb-1 mt-2 text-black text-black-50">
                    {doc.doc_count} Documents{' '}
                    {(currentUser.role === 'agency' ||
                      currentUser.role === 'company') &&
                      'added'}
                    {(currentUser.role === 'agency' ||
                      currentUser.role === 'company') && (
                      <div>
                        <div>{doc.doc_downloades} Documents downloaded</div>
                        <div>
                          {doc.pending_viewing_doc} Documents Pending Viewing
                        </div>
                      </div>
                    )}
                  </div>
                  {/* <div className="font-size-lg opacity-8">Today's Sales</div> */}
                  <div className="divider mx-4 my-2" />
                  <div className="text-center mb-2">
                    <a
                      href="/#"
                      onClick={(e) => viewDocument(e, doc, index, 'accepted')}>
                      <Button size="small" className="px-4 btn-neutral-info">
                        View Documents
                      </Button>
                    </a>
                  </div>

                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <div className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-info"
                        onClick={(e) => {
                          if (index === 3) {
                            history.push('/upload');
                          } else {
                            viewDocument(e, doc, index, 'pending');
                          }
                        }}>
                        {index === 3 ? 'Upload' : 'Pending'} Documents
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              Candidate documents due to expire
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center shadow-warning mr-3">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">{requests.candidate_expiry_doc || 0}</div>
            </div>
            <div className="text-center mt-3">
              <Button
                size="small"
                className="px-4 btn-neutral-info"
                onClick={() => viewExpireDocument(requests)}>
                View Documents
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              Placement documents due to expire
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-first text-white btn-icon text-center shadow-first mr-3">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">{requests.total_rfi || 0}</div>
            </div>
            <div className="text-center mt-3">
              <Button
                size="small"
                className="px-4 btn-neutral-info"
                onClick={() => viewExpireDocument(requests)}>
                View Documents
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              {currentUser.role === 'agency' &&
                'Client Documents due to expire'}
              {currentUser.role === 'company' &&
                'Agency Documents due to expire'}
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-danger text-white btn-icon text-center mr-3 shadow-danger">
                <FontAwesomeIcon
                  icon={['fas', 'stopwatch']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">
                {requests.doc_due_to_expire
                  ? requests.doc_due_to_expire.length
                  : 0}
              </div>
            </div>
            <div className="text-center mt-3">
              <Button
                size="small"
                className="px-4 btn-neutral-info"
                onClick={() => viewExpireDocument(requests)}>
                View Documents
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="h-100 card-box p-3 bg-heavy-rain">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              Overview
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="ml-1">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.document_uploaded || 0} Documents uploaded
                </a>
                {/* <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.doc_due_to_expire
                    ? requests.doc_due_to_expire.length
                    : 0}{' '}
                  Documents due to expire
                </a> */}
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.total_rfi || 0} Client documents due to expire
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.total_rfi || 0} Placement documents due to expire
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.candidate_expiry_doc || 0} Candidate documents due
                  to expire
                </a>
                <br />
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      {/* expire doc view details show */}
      <Dialog
        onClose={handleExpModalClose}
        fullWidth
        maxWidth="md"
        classes={{ paper: 'modal-content rounded-lg' }}
        aria-labelledby="simple-dialog-title"
        open={openExpDoc.open}>
        <div className="p-3 font-size-xl font-weight-bold">
          Expired Documents
        </div>
        <Divider />
        <div className="table-responsive-md m-4">
          <div className="table-scrollbar">
            <Table className="table table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th className="text-center">Document Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {openExpDoc.doc.map((doc, index) => (
                  <tr key={index}>
                    <td>
                      <span>{doc.category_name}</span>
                    </td>
                    <td className="text-center">{doc.expiration}</td>
                    <td>
                      <Button
                        size="small"
                        className="btn shadow btn-dark ml-2"
                        onClick={(e) => uploadNewDoc(e, doc)}>
                        Upload New
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
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEditDoc: (doc) => dispatch(setEditDoc(doc))
  };
};

export default connect(null, mapDispatchToProps)(AgencyCompanyDocument);
