/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Button, Grid, Dialog, Divider, Table } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import AddsComponents from 'components/add_component';
import { getCurrentUser } from '../../helper';
import api from '../../api';
import { setEditDoc } from '../../reducers/ThemeOptions';
import { connect } from 'react-redux';
import LoaderComponent from 'components/loader';

const OnBoardDocument = (props) => {
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
    api
      .get(
        `/api/v1/documents/documents_type_with_counts?user_id=${currentUser.id}`
      )
      .then((response) => {
        setIsLoading(false);
        if (response.data.success) {
          setDocuments([...response.data.documents]);
          setRequest({
            pending_rfi: response.data.pending_rfi,
            total_rfi: response.data.total_rfi,
            total_documents: response.data.total_documents,
            doc_due_to_expire: response.data.doc_due_to_expire
          });
        } else {
          alert('Something went wrong..');
        }
      });
  }

  const viewDocument = (e, id, name) => {
    e.preventDefault();
    history.push({
      pathname: '/view-document',
      search: '?id=' + id,
      state: {
        id: id,
        name: name + ' ' + 'Documents',
        status: 'accepted'
      }
    });
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

          {currentUser.role === 'candidate' && (
            <>
              <h5 className="heading">Document Management</h5>
              <p>
                Upload, Store, Update and Manage your information and document
                requests.
              </p>
            </>
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
                  {currentUser.role === 'candidate' && (
                    <b>{doc.category_name} Documents</b>
                  )}
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
                    {currentUser.role === 'candidate' && 'Uploaded'}
                    {(currentUser.role === 'agency' ||
                      currentUser.role === 'company') &&
                      'added'}
                    {(currentUser.role === 'agency' ||
                      currentUser.role === 'company') && (
                      <div>
                        <div>3 Documents downloaded</div>
                        <div>2 Documents Pending Viewing</div>
                      </div>
                    )}
                  </div>
                  {/* <div className="font-size-lg opacity-8">Today's Sales</div> */}
                  <div className="divider mx-4 my-2" />
                  <div className="text-center mb-2">
                    <a
                      href="/#"
                      onClick={(e) =>
                        viewDocument(e, doc.category_id, doc.category_name)
                      }>
                      <Button size="small" className="px-4 btn-neutral-info">
                        View Documents
                      </Button>
                    </a>
                  </div>
                  {currentUser.role === 'candidate' && (
                    <div className="text-center">
                      <Button
                        size="small"
                        className="px-4 btn-neutral-info"
                        onClick={() => history.push('/upload')}>
                        Upload Documents
                      </Button>
                    </div>
                  )}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <div className="text-center">
                      <Button size="small" className="px-4 btn-neutral-info">
                        Pending Documents
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
              Pending requests for information
            </div>
            <div className="d-flex py-2 align-items-center">
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center shadow-warning mr-3">
                <FontAwesomeIcon
                  icon={['far', 'clock']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">{requests.pending_rfi || 0}</div>
            </div>
            <div className="text-center mt-3">
              <Button
                size="small"
                className="px-4 btn-neutral-info"
                onClick={() =>
                  history.push('/request-info/assign-new-request')
                }>
                Respond
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              Total request for information
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
                onClick={() => history.push('/request-info/request-history')}>
                View
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card className="card-box p-3 h-100">
            <div className="font-12 font-size-sm text-uppercase text-second mt-2">
              Documents due to expire
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
                onClick={() =>
                  setOpenExpDoc({
                    open: true,
                    doc: requests.doc_due_to_expire
                  })
                }>
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
                  {requests.total_documents || 0} Documents uploaded
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.doc_due_to_expire
                    ? requests.doc_due_to_expire.length
                    : 0}{' '}
                  Documents due to expire
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.total_rfi || 0} Total request for information
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  {requests.pending_rfi || 0} Pending request for information
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
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEditDoc: (doc) => dispatch(setEditDoc(doc))
  };
};

export default connect(null, mapDispatchToProps)(OnBoardDocument);
