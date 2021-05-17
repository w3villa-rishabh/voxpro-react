/* eslint-disable react-hooks/exhaustive-deps */
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
import { toast } from 'react-toastify';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import api from '../../api';
import { getCurrentUser } from '../../helper';

import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import PostAddIcon from '@material-ui/icons/PostAdd';
import 'date-fns';
import AddsComponents from 'components/add_component';

export default function UploadDocument() {
  const [files, setFiles] = useState([]);
  const [filesError, setFileError] = useState();

  const [currentUser] = useState(getCurrentUser());
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [documents, setDocuments] = useState({
    categoryId: 0,
    docId: 0,
    notify: 1,
    privacy: 0,
    copy: true,
    expiration: 0,
    expirationDate: ''
  });

  const [errors, setErrors] = useState({
    categoryId: '',
    docId: '',
    notify: '',
    privacy: '',
    files: '',
    expiration: '',
    expirationDate: ''
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getDocumentCategories();
  }, []);

  const getDocumentCategories = () => {
    api.get('/api/v1/categories').then(
      (response) => {
        toast.dismiss();
        if (response.data) {
          console.log('response.data', response.data);
          setCategories([...response.data.categories]);
        } else {
          toast.error(response.data.message);
        }
      },
      (error) => {
        console.error('error', error);
        toast.error('Something went wrong..');
      }
    );
  };

  const handleDateChange = (date) => {
    if (date) {
      setIsOpen(false);
      setDocuments({
        ...documents,
        expirationDate: date
      });
    }
  };

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const extension = file.name.split('.').pop().toLowerCase();

    const reader = new FileReader();
    reader.onload = function () {
      const dataURL = reader.result;
      const imageObj = { url: dataURL, extension, name: file.name };
      console.log('imageObj', imageObj);
    };
    setErrors({
      ...errors,
      files: acceptedFiles.length > 0 ? 'dotted #0064FF' : 'dotted red'
    });
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
      copy: true,
      expiration: 0,
      expirationDate: ''
    });
    setFiles([]);
  };

  let handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'categoryId':
        setErrors({
          ...errors,
          categoryId: parseInt(value) > 0 ? '' : 'Category is required!'
        });
        break;
      case 'docId':
        setErrors({
          ...errors,
          docId: parseInt(value) > 0 ? '' : 'Document type is required!'
        });
        break;
      case 'expiration':
        setErrors({
          ...errors,
          expiration:
            parseInt(value) > 0 || documents.expirationDate
              ? ''
              : 'Expiration is required!'
        });
        break;
      case 'notify':
        setErrors({
          ...errors,
          notify: parseInt(value) > 0 ? '' : 'Notify is required!'
        });
        break;
      case 'privacy':
        setErrors({
          ...errors,
          privacy: parseInt(value) > 0 ? '' : 'Privacy is required!'
        });
        break;
      default:
        break;
    }

    documents[name] = value;
    setDocuments(documents);
  };

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    let date = parseInt(documents.expiration);
    if (date === 2 && !documents.expirationDate) {
      date = 0;
    }
    setErrors({
      ...errors,
      categoryId:
        parseInt(documents.categoryId) === 0 ? 'Category is required!' : '',
      docId:
        parseInt(documents.docId) === 0 ? 'Document type is required!' : '',
      expiration: parseInt(date) === 0 ? 'Expiration is required!' : '',
      notify: parseInt(documents.notify) === 0 ? 'Notify is required!' : '',
      privacy: parseInt(documents.privacy) === 0 ? 'Privacy is required!' : ''
    });
    setFileError(files.length === 0 ? 'dotted red' : 'dotted #0064FF');

    return valid;
  };

  function addDocument() {
    validateForm(errors);
    if (
      !parseInt(documents.categoryId) ||
      !parseInt(documents.docId) ||
      !parseInt(documents.expiration) ||
      !parseInt(documents.privacy) ||
      !parseInt(documents.notify) ||
      !files.length
    ) {
      return;
    }

    const formData = new FormData();
    formData.append('document[user_id]', currentUser.id);
    formData.append('document[doc]', files[0]);
    formData.append('document[category_id]', documents.docId);
    formData.append('document[notify]', documents.notify);
    formData.append('document[privacy]', documents.privacy);
    formData.append('document[send_copy]', documents.copy);
    formData.append(
      'document[expiration]',
      parseInt(documents.expiration) === 1
        ? 'No Expiration'
        : moment(documents.expirationDate).format('DD-MM-YYYY')
    );

    api.post(`/api/v1/documents?id=${currentUser.id}`, formData).then(
      (response) => {
        toast.dismiss();
        if (response.data) {
          console.log('response.data', response.data);
          toast.success(response.data.message);
          setFiles([]);
          removeDoc();
        } else {
          toast.error(response.data.message);
        }
      },
      (error) => {
        console.error('error', error);
        toast.error('Something went wrong..');
      }
    );
  }

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
            <div
              {...getRootProps({ className: 'dropzone' })}
              style={{
                border: filesError
              }}>
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
                  name="categoryId"
                  onChange={(e) => {
                    documents['docId'] = 0;
                    setDocuments(documents);
                    const findSubCat = categories.find(
                      (a) => a.id === parseInt(e.target.value)
                    );
                    if (findSubCat) {
                      setSubCategory([...findSubCat.sub_category]);
                    } else {
                      setSubCategory([]);
                    }
                    handleChange(e);
                  }}
                  value={documents.categoryId}>
                  <option value="0">Select Category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.categoryId.length > 0 && (
                  <span className="error">{errors.categoryId}</span>
                )}
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
                  onChange={handleChange}
                  name="docId">
                  <option value="0">Select Doc</option>
                  {subCategory.map((cat, index) => (
                    <option key={index} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.docId.length > 0 && (
                  <span className="error">{errors.docId}</span>
                )}
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
                        value={new Date()}
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
                      handleChange(event);
                      if (event.target.value === '2') {
                        setIsOpen(true);
                      } else {
                        setDocuments({
                          ...documents,
                          expirationDate: ''
                        });
                      }
                      console.log('documents.expiration', event.target.value);
                    }}
                    value={documents.expiration}>
                    <option value="0">Select Expiration</option>
                    <option value="1">No Expiration</option>
                    <option value="2">
                      {documents.expirationDate
                        ? moment(documents.expirationDate).format('DD-MM-YYYY')
                        : 'Date'}
                    </option>
                  </select>
                  {errors.expiration.length > 0 && (
                    <span className="error date-error">
                      {errors.expiration}
                    </span>
                  )}
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
                  name="notify"
                  onChange={handleChange}
                  value={documents.notify}>
                  <option value="0">Select Notify</option>
                  <option value="1">No</option>
                  <option value="2">Yes</option>
                </select>
                {errors.notify.length > 0 && (
                  <span className="error">{errors.notify}</span>
                )}
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
                  onChange={handleChange}
                  name="privacy">
                  <option value="0">Select Privacy</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
                {errors.privacy.length > 0 && (
                  <span className="error">{errors.privacy}</span>
                )}
              </div>
            </Grid>
          </Grid>
          <div className="pt-1">
            <Button
              onClick={addDocument}
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
                      copy: event.target.checked
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
          {currentUser.role === 'candidate' && <AddsComponents />}
        </div>
      </Card>
    </>
  );
}
