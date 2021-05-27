/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  Table,
  Dialog,
  Divider,
  DialogTitle
} from '@material-ui/core';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import PerfectScrollbar from 'react-perfect-scrollbar';

import api from '../../api';
import { getCurrentUser } from 'helper';
import LoaderComponent from 'components/loader';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Document, pdfjs, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useHistory } from 'react-router';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function AgencyRequestHistoryComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: [] });
  const [candidateRequests, setCandidateRequests] = useState([]);
  const [companyRequests, setCompanyRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState({ open: false, url: '' });
  const [modalPdfView, seModal] = useState(false);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    getDocuments();
  }, []);

  function getDocuments() {
    setIsLoading(true);
    api
      .get(
        `/api/v1/request_for_informations/agency_requests?request_type=history`
      )
      .then(
        (response) => {
          setIsLoading(false);
          if (response.data.success) {
            setCandidateRequests([...response.data.candidate_requests]);
            setCompanyRequests([...response.data.company_requests]);
            setBoxes(response.data);
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

  const followUp = (doc) => {
    history.push({
      pathname: '/chat',
      search: '?user=' + doc.category_id,
      state: {
        doc
      }
    });
  };

  const toggle = () => {
    seModal(!modalPdfView);
  };

  const viewDoc = (doc) => {
    if (doc.content_type === 'application/pdf') {
      setIsOpen({ open: false, url: doc.doc_url });
      toggle();
    } else {
      setIsOpen({ open: true, url: doc.doc_url });
    }
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
            <div className="display-3 font-weight-bold">
              {boxes.canidate_request_count || 0}
            </div>
            <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
            <div className="font-weight-bold font-size-sm text-uppercase">
              Candidate Requests History
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card className="p-3">
            <div className="display-3 font-weight-bold">
              {boxes.company_request_count || 0}
            </div>
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

      {isOpen.open && (
        <Lightbox
          mainSrc={isOpen.url}
          onCloseRequest={() => setIsOpen({ open: false, url: '' })}
        />
      )}

      {/* view pdf section */}
      <Dialog
        scroll="body"
        fullWidth
        maxWidth="md"
        open={modalPdfView}
        onClose={toggle}
        classes={{
          paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
        }}>
        <DialogTitle id="form-dialog-title">Upload PDF</DialogTitle>
        <div className="document-thumb p-3">
          <Document file={isOpen.url}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </Dialog>

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
                      <Button
                        size="small"
                        disabled={doc.status !== 'accepted'}
                        className="btn btn-primary ml-2"
                        onClick={() => viewDoc(doc)}>
                        View
                      </Button>
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
