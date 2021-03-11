import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  List,
  ListItem,
  TextField
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Dropzone from 'react-dropzone';
import api from '../api';
import { handleUser } from '../helper';
import stock1 from '../assets/images/stock-photos/stock-1.jpg';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';

export default function OnBoardDocument() {
  const [files, setFiles] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [filesName, setFilesName] = useState();

  useEffect(() => {
    api
      .get(`/api/user/show_user_documents?id=${handleUser().user.id}`)
      .then((response) => {
        if (response.data) {
          setDocuments(response.data);
        } else {
          alert('Something went wrong..');
        }
      });
  }, []);

  const handleDrop = (acceptedFiles) => setFiles(acceptedFiles);

  function addDocument() {
    const formData = new FormData();

    formData.append('user[documents_attributes][][doc_name]', filesName);
    formData.append('user[documents_attributes][][doc]', files[0]);

    api
      .patch(`/api/user?id=${handleUser().user.id}`, formData)
      .then((response) => {
        if (response.data) {
          console.log('response.data', response.data);
          // window.location.href = "/dashboard";
        } else {
          alert('Something went wrong..');
        }
      });
    console.log('The link was clicked.', files);
  }

  return (
    <>
      <div>
        <ul className="show-doc">
          {documents.map((file) => (
            // <img alt="..." className="card-img-top" src={file.stock1} />
            // <CardContent>
            //   <h5 className="card-title font-weight-bold font-size-xxl">
            //     Image 1
            //   </h5>
            // </CardContent>
            <li>
              <img alt="..." className="card-img-top" src={stock1} />
              {file.doc_name}
            </li>
          ))}
        </ul>
      </div>

      <Card className="mt-4 p-3 p-lg-5 shadow-xxl">
        <Dropzone
          styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
          onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <div className="center-info">
                <div className="icon-up">
                  <div className="d-100 btn-icon mb-3 hover-scale-lg bg-white shadow-light-sm rounded-circle text-primary">
                    <CloudUploadTwoToneIcon className="d-50" />
                  </div>
                  <div className="font-size-sm">
                    Drag and drop files here{' '}
                    <span className="font-size-xs text-dark">
                      (jpg/png images)
                    </span>
                  </div>
                </div>
                <div>or</div>
                <Button className="btn-primary hover-scale-sm font-weight-bold btn-pill px-4">
                  <span className="px-2">Browse Files</span>
                </Button>
              </div>
            </div>
          )}
        </Dropzone>
        <div>
          <Alert severity="success" className="text-center mb-3">
            You have uploaded <b>{files.length}</b> files!
          </Alert>
          <List component="div" className="font-size-sm">
            <ListItem>
              {files.map((fileName) => (
                <span key={fileName.name}>{fileName.name}</span>
              ))}
            </ListItem>
          </List>
          <Grid container spacing={6}>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Document Name"
                variant="outlined"
                onChange={(event) => setFilesName(event.target.value)}
              />
            </Grid>
          </Grid>
          <div className="pt-4">
            <Button
              onClick={addDocument}
              className="btn-warning font-weight-bold rounded hover-scale-lg mx-1"
              size="medium">
              <span className="btn-wrapper--label">Submit</span>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
