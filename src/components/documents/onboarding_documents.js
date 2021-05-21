/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { Card, Button, Grid } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import AddsComponents from 'components/add_component';
import { getCurrentUser } from '../../helper';
import api from '../../api';

export default function OnBoardDocument() {
  const history = useHistory();
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());
  const [remainingDocuments, setRemainingDocuments] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDocuments();
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
          setRemainingDocuments(response.data.remaining_documents);
        } else {
          alert('Something went wrong..');
        }
      });
  }

  const viewDocument = (e, id) => {
    e.preventDefault();
    history.push({
      pathname: '/view-document',
      search: '?id=' + id,
      state: {
        id: id
      }
    });
  };

  const uploadDocument = () => {
    history.push('/upload');
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
        'Loading..'
      ) : (
        <Grid container spacing={2}>
          {documents.map((doc, index) => (
            <Grid key={index} item md={3} xs={12}>
              <Card className="card-box h-100">
                <div className="m-2 text-capitalize font-size-lg text-center">
                  {currentUser.role === 'candidate' && (
                    <b>{doc.category_name} Documents</b>
                  )}
                  {(currentUser.role === 'agency' ||
                    currentUser.role === 'company') && (
                    <b>Candidates Documents</b>
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
                    {currentUser.role === 'agency' && 'added'}
                    {currentUser.role === 'company' && 'added'}
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
                      onClick={(e) => viewDocument(e, doc.category_id)}>
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
                        onClick={uploadDocument}>
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
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-first text-white btn-icon text-center shadow-first mr-3">
                <FontAwesomeIcon
                  icon={['far', 'comment-dots']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">7</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
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
              <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-warning text-white btn-icon text-center shadow-warning mr-3">
                <FontAwesomeIcon
                  icon={['fas', 'map-marked-alt']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">{remainingDocuments}</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
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
                  icon={['far', 'envelope']}
                  className="display-4"
                />
              </div>
              <div className="ml-1">2</div>
            </div>
            <div className="text-center mt-3">
              <Button size="small" className="px-4 btn-neutral-info">
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
              {/* <div className="d-50 rounded border-0 card-icon-wrapper flex-shrink-0 bg-success btn-icon text-center shadow-success mr-3">
                <FontAwesomeIcon
                  icon={['fas', 'tachometer-alt']}
                  className="display-4"
                />
              </div> */}
              <div className="ml-1">
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  2 Documents uploaded
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  3 Documents due to expire
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  2 Total request for information
                </a>
                <br />
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  2 Pending request for information
                </a>
                <br />
              </div>
            </div>

            {/* <div className="text-black-50 mb-2">
              <a
                className="text-first"
                href="#/"
                onClick={(e) => e.preventDefault()}>
                See clients
              </a>{' '}
              that accepted your invitation to connect.
            </div> */}
          </Card>
        </Grid>
      </Grid>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
