/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import {
  Grid,
  Card,
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  LinearProgress
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DateFnsUtils from '@date-io/date-fns';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import api from '../../api';
import { getCurrentUser } from '../../helper';
import { setEditDoc } from '../../reducers/ThemeOptions';

import 'date-fns';
import AddsComponents from 'components/add_component';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { Document, pdfjs, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={0}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const UploadDocument = (props) => {
  const location = useLocation();
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [filesError, setFileError] = useState();
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [newImg, setNewImg] = useState(false);

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
    expirationDate: '',
    other: ''
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
    if (!getLocation()) {
      props.setEditDoc({});
    }
  }, []);

  const getLocation = () => {
    return location.state ? location.state.update : false;
  };

  const getDocumentCategories = () => {
    return api.get('/api/v1/categories').then(
      (response) => {
        toast.dismiss();
        if (response.data) {
          console.log('response.data', response.data);
          setCategories([...response.data.categories]);

          if (Object.keys(props.editDoc).length && getLocation()) {
            const doc = props.editDoc;
            const findSubCat = response.data.categories.find(
              (a) => a.id === doc.category_id
            );
            if (findSubCat) {
              setSubCategory([...findSubCat.sub_category]);
            } else {
              setSubCategory([]);
            }
            setDocuments({
              categoryId: doc.category_id,
              docId: doc.sub_category_id,
              expiration: doc.expiration === 'No Expiration' ? 1 : 2,
              notify: doc.notify,
              privacy: doc.privacy,
              copy: Boolean(doc.send_copy),
              content_type: doc.content_type
            });
          }
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
    setNewImg(true);
    setFileError(acceptedFiles.length > 0 ? 'dotted #0064FF' : 'dotted red');

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
      expirationDate: '',
      other: '',
      otherShow: '',
      message: ''
    });
    setFiles([]);
    if (props.editDoc.id) {
      history.goBack();
    }
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
    if (props.editDoc.id) {
      return updateDocument();
    }
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
    formData.append('document[doc_name]', documents.other);
    formData.append(
      'document[expiration]',
      parseInt(documents.expiration) === 1
        ? 'No Expiration'
        : moment(documents.expirationDate).format('DD-MM-YYYY')
    );

    api
      .post(`/api/v1/documents?id=${currentUser.id}`, formData, {
        onUploadProgress: function (progressEvent) {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            )
          );
        }
      })
      .then(
        (response) => {
          toast.dismiss();
          if (response.data.success) {
            console.log('response.data', response.data);
            toast.success(response.data.message);
            setFiles([]);
            removeDoc();
          } else {
            toast.error(response.data.message);
          }
          setUploadPercentage(0);
        },
        (error) => {
          console.error('error', error);
          toast.error('Something went wrong..');
        }
      );
  }

  const updateDocument = () => {
    validateForm(errors);
    if (
      !parseInt(documents.categoryId) ||
      !parseInt(documents.docId) ||
      !parseInt(documents.expiration) ||
      !parseInt(documents.privacy) ||
      !parseInt(documents.notify)
    ) {
      return;
    }

    const formData = new FormData();

    if (files.length) {
      formData.append('document[doc]', files[0]);
    }

    formData.append('document[user_id]', currentUser.id);
    formData.append('document[category_id]', documents.docId);
    formData.append('document[notify]', documents.notify);
    formData.append('document[privacy]', documents.privacy);
    formData.append('document[send_copy]', documents.copy);
    formData.append('document[doc_name]', documents.other);
    formData.append(
      'document[expiration]',
      parseInt(documents.expiration) === 1
        ? 'No Expiration'
        : moment(documents.expirationDate).format('DD-MM-YYYY')
    );

    api
      .put(`/api/v1/documents/${props.editDoc.id}`, formData, {
        onUploadProgress: function (progressEvent) {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            )
          );
        }
      })
      .then(
        (response) => {
          toast.dismiss();
          if (response.data) {
            history.goBack();
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

  const getExtension = (acceptedFile) => {
    let extension = acceptedFile.name.split('.').pop().toLowerCase();
    let img;
    if (extension === 'jpeg' || extension === 'png' || extension === 'jpg') {
      img = 'image';
    } else if (extension === 'pdf') {
      img = extension;
    }
    return img;
  };
  return (
    <>
      <div className="page-title">
        <PostAddIcon />
        <div className="title">
          <h5 className="heading pt-3">Upload Document</h5>
          {/* <p>Private to you</p> */}
        </div>
      </div>

      {uploadPercentage > 0 && (
        <LinearProgressWithLabel value={uploadPercentage} />
      )}
      <Card className="p-3 p-lg-5 shadow-xxl mt-4">
        <Dropzone
          multiple={false}
          accept="image/*,.pdf"
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

        <ul className="list-group mt-2">
          {files.length > 0 &&
            files.map((acceptedFile) => (
              <>
                <li className="document-thumb list-group-item list-group-item-success">
                  <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded">
                    <div className="avatar-icon rounded d-100">
                      <FontAwesomeIcon
                        icon={['fas', 'times-circle']}
                        className="up-img-close"
                        onClick={() => setFiles([])}
                      />
                      {getExtension(acceptedFile) === 'image' ? (
                        <img
                          alt="..."
                          src={URL.createObjectURL(acceptedFile)}
                        />
                      ) : (
                        <Document file={URL.createObjectURL(acceptedFile)}>
                          <Page pageNumber={1} />
                        </Document>
                      )}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-weight-bold font-size-xl my-1">
                      {acceptedFile.name}
                    </h5>
                  </div>
                </li>
              </>
            ))}
        </ul>

        {props.editDoc.doc_url && !newImg && (
          <div className="document-thumb avatar-icon-wrapper shadow-sm-dark border-white rounded">
            <div className="avatar-icon rounded d-100">
              <FontAwesomeIcon
                icon={['fas', 'times-circle']}
                className="up-img-close"
                onClick={() => setFiles([])}
              />
              {props.editDoc.doc.content_type !== 'application/pdf' ? (
                <img alt="..." src={props.editDoc.doc_url} />
              ) : (
                <Document file={props.editDoc.doc_url}>
                  <Page pageNumber={1} />
                </Document>
              )}
            </div>
          </div>
        )}

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
                    documents.otherShow = false;
                    setDocuments({
                      ...documents
                    });
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
                  onChange={(event) => {
                    let findMessage = subCategory.find(
                      (a) => a.id === parseInt(event.target.value)
                    );

                    documents.message = findMessage.message;
                    documents.expire = findMessage.expiry;
                    documents.expiration = 0;
                    documents.otherShow =
                      findMessage.name === 'Other' ? true : false;
                    setDocuments({
                      ...documents
                    });
                    handleChange(event);
                  }}
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
                {documents.message && <span>{documents.message}</span>}
                {documents.otherShow && (
                  <TextField
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    className="mt-3"
                    size="small"
                    fullWidth
                    name="other"
                    onChange={handleChange}
                    placeholder="Enter document name"
                  />
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
                    <option value="1" disabled={documents.expire}>
                      No Expiration
                    </option>
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
              disabled={uploadPercentage}
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
        </div>
      </Card>
      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
};

const mapStateToProps = (state) => ({
  editDoc: state.ThemeOptions.editDoc
});

const mapDispatchToProps = (dispatch) => {
  return {
    setEditDoc: (doc) => dispatch(setEditDoc(doc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadDocument);
