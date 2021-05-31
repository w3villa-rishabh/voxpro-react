/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import {
  Card,
  Button,
  Table,
  Menu,
  MenuItem,
  Divider,
  Dialog,
  DialogTitle
} from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import { connect } from 'react-redux';
import { getCurrentUser } from 'helper';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import api from '../../api';

import LoaderComponent from 'components/loader';

import { toast } from 'react-toastify';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Document, pdfjs, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { setEditDoc } from '../../reducers/ThemeOptions';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const OnBoardDocumentList = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState({ open: false, url: '' });
  const [anchorElDoc, setAnchorElDoc] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);
  const [modalPdfView, seModal] = useState(false);
  const [openShareDoc, setOpenShareDoc] = useState({ open: false, doc: {} });
  // const [ shareDoc, setShareDoc ] = useState({});

  useEffect(() => {
    let id = location.state ? location.state.id : 0;
    if (id && currentUser.role === 'candidate') {
      getDocumentsForCandidate(id);
    } else if (
      currentUser.role === 'agency' ||
      currentUser.role === 'company'
    ) {
      getDocumentsForAgencyCompany();
    }
    props.setEditDoc({});
  }, [location.state]);

  const getDocumentsForCandidate = (id) => {
    setIsLoading(true);
    api
      .get(
        `/api/v1/documents/candidate_documents_list?id=${id}&user_id=${currentUser.id}`
      )
      .then(
        (response) => {
          setIsLoading(false);
          if (response.data.success) {
            setDocuments([...response.data.documents]);
          }
        },
        (error) => {
          setIsLoading(false);
          console.error('error', error);
        }
      );
  };

  const getDocumentsForAgencyCompany = () => {
    setIsLoading(true);
    api.get('/api/v1/documents/document_list').then(
      (response) => {
        setIsLoading(false);
        if (response.data.success) {
          setDocuments([...response.data.documents]);
        }
      },
      (error) => {
        setIsLoading(false);
        console.error('error', error);
      }
    );
  };

  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const handleClick = (event, index) => {
    event.preventDefault();
    setSelectIndex(index);
    setAnchorElDoc(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElDoc(null);
  };

  const findDoc = () => {
    return documents[selectIndex];
  };

  const deleteDoc = (e) => {
    e.preventDefault();
    handleClose();
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            let doc = findDoc();

            api.delete(`/api/v1/documents/${doc.id}`).then(
              (response) => {
                setIsLoading(false);
                if (response.data.success) {
                  toast.dismiss();
                  toast.success('Document delete successfully..');
                  documents.splice(selectIndex, 1);
                  setDocuments([...documents]);
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
          label: 'No',
          onClick: () => handleClose()
        }
      ]
    });
  };

  const editDoc = () => {
    let doc = findDoc();
    props.setEditDoc(doc);
    history.push({
      pathname: '/upload',
      search: '?edit=' + doc.id,
      state: {
        update: true,
        expire_edit: false,
        request_category_id: 0,
        moveToHistory: false
      }
    });
    handleClose();
  };

  const viewDoc = (e) => {
    e.preventDefault();
    let doc = findDoc();
    if (doc.content_type === 'application/pdf') {
      setIsOpen({ open: false, url: doc.doc_url });
      toggle();
    } else {
      setIsOpen({ open: true, url: doc.doc_url });
    }
    handleClose();
  };

  // const replaceDoc = () => {
  //   editDoc();
  //   handleClose();
  // };

  const toggle = () => {
    seModal(!modalPdfView);
  };

  const handleShareModalClose = () => {
    setOpenShareDoc({ open: false, doc: {} });
  };

  const downloadFile = () => {
    let doc = findDoc();
    handleClose();
    let extension = doc.content_type.split('/')[1];
    api.get(doc.doc_url, { responseType: 'blob' }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', doc.category_name + '.' + extension); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading mt-3">Personal Documents</h5>
        </div>
      </div>

      <div className="m-3">
        <FontAwesomeIcon icon={['fas', 'angle-left']} className="mr-2" />
        <a href="#/" onClick={(e) => goBack(e)}>
          Back
        </a>
      </div>

      <Card className="p-4 shadow-xxl mb-spacing-6-x2">
        <div className="table-responsive-md">
          <Table className="table table-alternate-spaced">
            <thead>
              <tr>
                <th scope="col">Document Name</th>
                <th scope="col">Date Upload</th>
                <th scope="col">Expiration Date</th>
                <th scope="col">Shared With</th>
                <th scope="col">Privacy</th>
                <th scope="col" className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <LoaderComponent />
              ) : (
                <>
                  {documents.map((doc, index) => (
                    <>
                      <tr key={index}>
                        <td>
                          <div>
                            <b>{doc.category_name}</b>
                            {doc.doc_name && doc.doc_name !== 'undefined' && (
                              <>
                                <br />
                                <small>{doc.doc_name}</small>
                              </>
                            )}
                          </div>
                        </td>
                        <td>
                          <span>{doc.date}</span>
                        </td>
                        <td>
                          <span>{doc.expiration}</span>
                        </td>
                        <td>
                          <Button
                            className="m-2 btn-primary"
                            size="small"
                            onClick={() =>
                              setOpenShareDoc({ open: true, doc })
                            }>
                            View
                          </Button>
                        </td>
                        <td>
                          <span>{doc.privacy === 1 ? 'Yes' : 'No'}</span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center justify-content-center flex-wrap">
                            <Button
                              aria-controls={'simple-menu-' + index}
                              size="small"
                              className="px-4 btn-neutral-primary"
                              variant="contained"
                              aria-haspopup="true"
                              onClick={(e) => handleClick(e, index)}>
                              Action
                            </Button>
                            <Menu
                              id={'simple-menu-' + index}
                              anchorEl={anchorElDoc}
                              getContentAnchorEl={null}
                              keepMounted
                              classes={{ list: 'p-0' }}
                              open={Boolean(anchorElDoc)}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left'
                              }}
                              onClose={handleClose}>
                              <div className="p-3">
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={viewDoc}>
                                  View Document
                                </MenuItem>
                                {currentUser.role === 'candidate' && (
                                  <>
                                    <MenuItem
                                      className="pr-5 px-3 text-primary"
                                      onClick={editDoc}>
                                      Edit/Replace
                                    </MenuItem>
                                    <MenuItem
                                      className="pr-5 px-3 text-primary"
                                      onClick={deleteDoc}>
                                      Delete
                                    </MenuItem>
                                  </>
                                )}
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={downloadFile}>
                                  Download
                                </MenuItem>
                              </div>
                            </Menu>
                          </div>
                        </td>
                      </tr>
                      <tr className="divider"></tr>
                    </>
                  ))}
                </>
              )}
            </tbody>
          </Table>
          {!documents.length && !isLoading && (
            <div className="font-size-xxl m-5 text-center">No data found</div>
          )}
          {isOpen.open && (
            <Lightbox
              mainSrc={isOpen.url}
              onCloseRequest={() => setIsOpen({ open: false, url: '' })}
            />
          )}
        </div>
      </Card>
      {currentUser.role === 'candidate' && <AddsComponents />}

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
        maxWidth="sm"
        classes={{ paper: 'modal-content rounded-lg' }}
        aria-labelledby="simple-dialog-title"
        open={openShareDoc.open}>
        <div className="p-3 font-size-xl font-weight-bold">
          Your Document is shared with
        </div>
        <Divider />
        <div className="table-responsive-md m-4">
          <div className="table-scrollbar">
            <Table className="table table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Shared With</th>
                  <th>Shared on Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>{openShareDoc.doc.category_name}</span>
                  </td>
                  <td>
                    <span>Huntress Group</span>
                  </td>
                  <td>
                    <span>{openShareDoc.doc.date}</span>
                  </td>
                </tr>
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

export default connect(null, mapDispatchToProps)(OnBoardDocumentList);
