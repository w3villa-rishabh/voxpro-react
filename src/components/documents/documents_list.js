/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Card, Button, Table } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import { getCurrentUser } from 'helper';
import { useLocation } from 'react-router';
import api from '../../api';

export default function OnBoardDocument() {
  const location = useLocation();
  const [currentUser] = useState(getCurrentUser());
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    let id = location.state ? location.state.id : 0;
    if (id) {
      getDocuments(id);
    }
  }, [location.state]);

  const getDocuments = (id) => {
    api
      .get(
        `/api/v1/documents/send_child_documents?id=${id}&user_id=${currentUser.id}`
      )
      .then((response) => {
        if (response.data.success) {
          setDocuments([...response.data.documents]);
        } else {
          alert('Something went wrong..');
        }
      });
  };

  return (
    <>
      <Card className="p-4 shadow-xxl mb-spacing-6-x2">
        <div className="page-title">
          <div className="">
            <h5 className="heading">Personal Documents</h5>
          </div>
        </div>
        <div className="table-responsive-md">
          <Table className="table table-alternate-spaced">
            <thead>
              <tr>
                <th scope="col">Document Name</th>
                <th scope="col">Status</th>
                <th scope="col">Required</th>
                <th scope="col">Expiration</th>
                {currentUser.role === 'candidate' && (
                  <th scope="col" className="text-center">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <>
                  <tr key={index}>
                    <td>
                      <b>{doc.category_name}</b>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span>Uploaded</span>
                    </td>
                    <td className="text-warning">
                      <span>Yes</span>
                    </td>
                    <td>
                      <span>{doc.expiration}</span>
                    </td>
                    {currentUser.role === 'candidate' && (
                      <td className="text-right">
                        <Button className="btn-neutral-first rounded-sm text-uppercase font-size-xs font-weight-bold mr-4 py-0 shadow-none hover-scale-sm w-auto d-40">
                          Upload Document
                        </Button>
                        <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'search']}
                            className="font-size-sm"
                          />
                        </Button>
                        <Button className="btn-neutral-first mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['far', 'edit']}
                            className="font-size-sm"
                          />
                        </Button>
                        <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-40 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    )}
                  </tr>
                  <tr className="divider"></tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
        {currentUser.role === 'candidate' && <AddsComponents />}
      </Card>
    </>
  );
}
