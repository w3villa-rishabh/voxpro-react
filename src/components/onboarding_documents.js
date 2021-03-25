import React, { useState, useEffect } from 'react';

import { Grid, Card, Button, List, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Dropzone from 'react-dropzone';
import api from '../api';
import { getCurrentUser } from '../helper';
import stock1 from '../assets/images/stock-photos/stock-1.jpg';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';

export default function OnBoardDocument() {
  const [files, setFiles] = useState([]);
  const [fileUpload, setFileUpload] = useState({});

  const [documents, setDocuments] = useState([]);
  const [filesName, setFilesName] = useState();
  const [currentUser] = useState(getCurrentUser());

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const extension = file.name.split('.').pop().toLowerCase();

    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      const imageObj = { url: dataURL, extension, name: file.name };
      setFileUpload(imageObj);
    };
    reader.readAsDataURL(file);
    setFiles(acceptedFiles);
  };

  function addDocument() {
    if (!files.length) {
      return;
    }
    const formData = new FormData();

    formData.append('user[documents_attributes][][doc_name]', filesName);
    formData.append('user[documents_attributes][][doc]', files[0]);

    api.patch(`/api/user?id=${currentUser.id}`, formData).then((response) => {
      if (response.data) {
        console.log('response.data', response.data);
        setFiles([]);
        setFileUpload({});
      } else {
        alert('Something went wrong..');
      }
    });
    console.log('The link was clicked.', files);
  }

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

      <Card className="mt-4 p-3 p-lg-5 shadow-xxl">
        <Dropzone
          multiple={false}
          accept="image/jpeg,image/jpg,image/png"
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
            <ul>
              {files.map((fileName) => (
                <li>
                  <img
                    alt="..."
                    className="card-img-top document-img pl-3"
                    src={fileUpload.url}
                  />
                  <span key={fileName.name}>{fileName.name}</span>
                </li>
              ))}
            </ul>
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
              disabled={!files.length}
              className="btn-warning font-weight-bold rounded hover-scale-lg mx-1"
              size="medium">
              <span className="btn-wrapper--label">Upload</span>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
