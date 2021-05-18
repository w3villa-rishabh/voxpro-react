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

export default function OnBoardDocument() {
  const location = useLocation();
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [anchorElDoc, setAnchorElDoc] = useState(null);

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

  const handleClick = (event) => {
    setAnchorElDoc(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElDoc(null);
  };

  const deleteDoc = (e, id) => {
    e.preventDefault();
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleClose()
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

  const viewDoc = () => {
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
                          <b>{doc.category_name}</b>
                        </td>
                        <td>
                          <span>Uploaded</span>
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
                              aria-controls="simple-menu"
                              size="small"
                              className="px-4 btn-neutral-primary"
                              variant="contained"
                              aria-haspopup="true"
                              onClick={handleClick}>
                              Action
                            </Button>
                            <Menu
                              id="simple-menu"
                              anchorEl={anchorElDoc}
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
                                  onClick={(e) => deleteDoc(e, doc.id)}>
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
        </div>
      </Card>
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
