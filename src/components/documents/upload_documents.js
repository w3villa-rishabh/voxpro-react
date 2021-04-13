import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import Dropzone from 'react-dropzone';
import api from '../../api';
import { getCurrentUser } from '../../helper';

import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import PostAddIcon from '@material-ui/icons/PostAdd';
// import { KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import AddsComponents from 'components/add_component';

export default function UploadDocument() {
  const [files, setFiles] = useState([]);
  const [currentUser] = useState(getCurrentUser());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [documents, setDocuments] = useState({
    categoryId: 0,
    docId: 0,
    notify: 1,
    privacy: 0,
    copy: 'yes',
    expiration: 0
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // getDocuments();
  }, []);

  const handleDateChange = (date) => {
    if (date) {
      setIsOpen(false);
      // setAvailability(date.toLocaleDateString());
    }
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const extension = file.name.split('.').pop().toLowerCase();

    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      const imageObj = { url: dataURL, extension, name: file.name };
      // setFileUpload(imageObj);
      console.log('imageObj', imageObj);
    };
    reader.readAsDataURL(file);
    setFiles(acceptedFiles);
  };

  const removeDoc = () => {
    setDocuments({
      ...documents,
      categoryId: 0,
      docId: 0,
      notify: 1,
      privacy: 0,
      copy: 'yes'
    });
    setFiles([]);
  };

  function addDocument() {
    if (!files.length) {
      return;
    }
    const formData = new FormData();

    formData.append('user[documents_attributes][][doc_name]', 'filesName');
    formData.append('user[documents_attributes][][doc]', files[0]);

    api.patch(`/api/user?id=${currentUser.id}`, formData).then((response) => {
      if (response.data) {
        console.log('response.data', response.data);
        setFiles([]);
        // setFileUpload({});
      } else {
        alert('Something went wrong..');
      }
    });
    console.log('The link was clicked.', files);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // function getDocuments() {
  //   api
  //     .get(`/api/user/show_user_documents?id=${currentUser.id}`)
  //     .then((response) => {
  //       if (response.data) {
  //         setDocuments(response.data);
  //       } else {
  //         alert('Something went wrong..');
  //       }
  //     });
  // }

  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading pt-3">Upload Document</h5>
          {/* <p>Private to you</p> */}
        </div>
      </div>

      <Card className="p-3 p-lg-5 shadow-xxl">
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
                    {/* <span className="font-size-xs text-dark">
                      (jpg/png images)
                    </span> */}
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <div className="mb-3">
                <label className="font-12 mb-2">
                  Category <span className="text-danger">*</span>
                </label>
                <select
                  className="MuiTextField-root MuiFormControl-fullWidth select-doc"
                  variant="outlined"
                  fullWidth
                  name="role"
                  onChange={(event) => {
                    setDocuments({
                      ...documents,
                      categoryId: event.target.value
                    });
                  }}
                  value={documents.categoryId}>
                  <option value="0">Select Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="mb-3">
                <label className="font-12 mb-2">
                  Select Doc <span className="text-danger">*</span>
                </label>
                <select
                  className="MuiTextField-root MuiFormControl-fullWidth select-doc"
                  variant="outlined"
                  fullWidth
                  value={documents.docId}
                  onChange={(event) => {
                    setDocuments({
                      ...documents,
                      docId: event.target.value
                    });
                  }}
                  name="role">
                  <option value="0">Select Doc</option>
                  <option value="1">Doc 1</option>
                  <option value="2">Doc 1</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div className="mb-3">
                <label className="font-12 mb-2">
                  Expiration <span className="text-danger">*</span>
                </label>
                <div className="position-relative">
                  {isOpen && (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disablePast
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        // margin="normal"
                        id="date-picker-inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        autoOk={true}
                        KeyboardButtonProps={{
                          'aria-label': 'change date'
                        }}
                        open={isOpen}
                      />
                    </MuiPickersUtilsProvider>
                  )}
                  <select
                    className="MuiTextField-root MuiFormControl-fullWidth select-doc date-pic"
                    variant="outlined"
                    fullWidth
                    name="expiration"
                    onChange={(event) => {
                      setDocuments({
                        ...documents,
                        expiration: event.target.value
                      });
                      if (event.target.value === '2') {
                        setIsOpen(true);
                      }
                      console.log('documents.expiration', event.target.value);
                    }}
                    value={documents.expiration}>
                    <option value="0">Select Expiration</option>
                    <option value="1">No Expiration</option>
                    <option value="2">Date</option>
                  </select>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div className="mb-3">
                <label className="font-12 mb-2">
                  Notify by Email <span className="text-danger">*</span>
                </label>
                <select
                  className="MuiTextField-root MuiFormControl-fullWidth select-doc"
                  variant="outlined"
                  fullWidth
                  name="role"
                  onChange={(event) => {
                    setDocuments({
                      ...documents,
                      notify: event.target.value
                    });
                  }}
                  value={documents.notify}>
                  <option value="0">Select Notify</option>
                  <option value="1">No</option>
                  <option value="2">Yes</option>
                </select>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}>
              <div className="mb-3">
                <label className="font-12 mb-2">
                  Privacy <span className="text-danger">*</span>
                </label>
                <select
                  className="MuiTextField-root MuiFormControl-fullWidth select-doc"
                  variant="outlined"
                  fullWidth
                  value={documents.privacy}
                  onChange={(event) => {
                    setDocuments({
                      ...documents,
                      privacy: event.target.value
                    });
                  }}
                  name="role">
                  <option value="0">Select Privacy</option>
                  <option value="1">Privacy 1</option>
                  <option value="2">Privacy 2</option>
                </select>
              </div>
            </Grid>
          </Grid>
          <div className="pt-1">
            <Button
              onClick={addDocument}
              disabled={!files.length}
              className="btn-primary font-weight-bold rounded hover-scale-lg mx-1"
              size="medium">
              <span className="btn-wrapper--label">Upload</span>
            </Button>
            <span>Or</span>
            <a
              href="javascript:void(0)"
              onClick={removeDoc}
              className="a-blue border-bottom ml-2">
              Cancel
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center font-size-md">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => {
                    setDocuments({
                      ...documents,
                      copy: event.target.value
                    });
                  }}
                  checked={documents.copy}
                  name="remember_me"
                  color="primary"
                />
              }
              label="Send me a copy"
            />
          </div>
         <AddsComponents />
        </div>
      </Card>
    </>
  );
}
