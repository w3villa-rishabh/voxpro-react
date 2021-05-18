/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Card, Button, Table, Menu, MenuItem } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import { getCurrentUser } from 'helper';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import { toast } from 'react-toastify';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default function OnBoardDocument() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState({ open: false, url: '' });
  const [anchorElDoc, setAnchorElDoc] = useState(null);
  const [selectIndex, setSelectIndex] = useState(0);

  useEffect(() => {
    let id = location.state ? location.state.id : 0;
    if (id) {
      getDocuments(id);
    }
  }, [location.state]);

  const getDocuments = (id) => {
    setIsLoading(true);
    api
      .get(
        `/api/v1/documents/send_child_documents?id=${id}&user_id=${currentUser.id}`
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

  const deleteDoc = (e, id, index) => {
    e.preventDefault();
    handleClose();
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            api.delete(`/api/v1/documents/${id}`).then(
              (response) => {
                setIsLoading(false);
                if (response.data.success) {
                  toast.dismiss();
                  toast.success('Document delete successfully..');
                  documents.splice(index, 1);
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
    handleClose();
  };

  const viewDoc = (e) => {
    e.preventDefault();
    let url = documents[selectIndex].doc_url;
    setIsOpen({ open: true, url });
    handleClose();
  };

  const replaceDoc = () => {
    handleClose();
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
                <th scope="col">Privacy</th>
                <th scope="col" className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                'Loading..'
              ) : (
                <>
                  {documents.map((doc, index) => (
                    <>
                      <tr key={index}>
                        <td>
                          <div>
                            <b>{doc.category_name}</b>
                            {doc.doc_name && (
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
                                  View
                                </MenuItem>
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={editDoc}>
                                  Edit
                                </MenuItem>
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={(e) => deleteDoc(e, doc.id, index)}>
                                  Delete
                                </MenuItem>
                                <MenuItem
                                  className="pr-5 px-3 text-primary"
                                  onClick={replaceDoc}>
                                  Replace
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
              mainSrc={'http://54.203.142.83' + isOpen.url}
              onCloseRequest={() => setIsOpen({ open: false, url: '' })}
            />
          )}
        </div>
      </Card>
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
