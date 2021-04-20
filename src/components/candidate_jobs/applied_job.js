import React, { useState } from 'react';

import { Card, Button, Grid, CardContent } from '@material-ui/core';

import { getCurrentUser } from '../../helper';

import PostAddIcon from '@material-ui/icons/PostAdd';
import AddsComponents from 'components/add_component';

export default function OnBoardDocument() {
  const [documents, setDocuments] = useState([]);
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading">Jobs Applied</h5>
          <p>List of all the applied jobs</p>
        </div>
        <Button className="btn-neutral-info hover-scale-sm px-4 float-right">
          <span className="px-2">Select Doc Type</span>
        </Button>
      </div>

      <AddsComponents />
    </>
  );
}
