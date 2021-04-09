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
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
// import { KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';

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
        <BallotTwoToneIcon />
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
                        // InputProps={{ left: '930px !important;' }}
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
                      debugger
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
          <div className="ads-wrapper">
            <iframe
              frameBorder="0"
              height="100"
              id="aswift_0"
              marginHeight="0"
              marginWidth="0"
              name="aswift_0"
              scrolling="no"
              src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2280007608584385&amp;format=320x100&amp;output=html&amp;h=100&amp;slotname=8619412948&amp;adk=3820663941&amp;adf=2444517951&amp;w=320&amp;lmt=1480764428&amp;flash=23.0.0&amp;url=http%3A%2F%2Fafghanfashion.com%2Fen%2F&amp;wgl=1&amp;dt=1480764431906&amp;bpp=32&amp;bdt=2353&amp;fdt=107&amp;idt=1645&amp;shv=r20161128&amp;cbv=r20161117&amp;saldr=aa&amp;correlator=2085870981537&amp;frm=20&amp;ga_vid=748426410.1477631041&amp;ga_sid=1480764434&amp;ga_hid=2124941115&amp;ga_fc=0&amp;pv=2&amp;iag=3&amp;icsg=2&amp;nhd=1&amp;dssz=2&amp;mdo=0&amp;mso=0&amp;u_tz=330&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=728&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=5&amp;u_nmime=7&amp;dff=arial&amp;dfs=13&amp;adx=202&amp;ady=2719&amp;biw=1349&amp;bih=431&amp;eid=33509839%2C575144605&amp;oid=3&amp;rx=0&amp;eae=0&amp;fc=16&amp;pc=1&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C728%2C1366%2C431&amp;vis=1&amp;rsz=%7C%7CleEr%7C&amp;abl=CS&amp;ppjl=t&amp;pfx=0&amp;fu=16&amp;bc=1&amp;ifi=1&amp;xpc=pHL5cE1BG4&amp;p=http%3A//afghanfashion.com&amp;dtd=2076"'
              width="100%"></iframe>
          </div>
        </div>
      </Card>
    </>
  );
}
