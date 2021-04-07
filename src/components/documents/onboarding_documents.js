import React, { useState, useEffect } from 'react';

import { Card } from '@material-ui/core';

import api from '../../api';
import { getCurrentUser } from '../../helper';
import stock1 from '../../assets/images/stock-photos/stock-5.jpg';

import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';

export default function OnBoardDocument() {
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function getDocuments() {
    api
      .get(`/api/user/show_user_documents?id=${currentUser.id}`)
      .then((response) => {
        if (response.data) {
          setDocuments(response.data);
        } else {
          alert('Something went wrong..');
        }
      });
  }

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title">
          <h5 className="heading">Show Documents</h5>
          {/* <p>Private to you</p> */}
        </div>
      </div>

      <Card>
        <ul className="show-doc mb-1">
          {documents.map((file) => (
            <li className="p-2 w-25">
              <Card className="card-box">
                <img height="100%" width="100%" alt="..." src={stock1} />
                <div className="p-2">{file.doc_name}</div>
              </Card>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
