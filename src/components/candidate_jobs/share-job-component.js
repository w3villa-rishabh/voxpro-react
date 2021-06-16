/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import {
  Grid,
  Card,
  Button,
  TextField,
  Dialog,
  DialogActions
} from '@material-ui/core';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { validEmailRegex, SmartText } from 'helper';
import api from '../../api';

const ShareJobComponent = (props) => {
  const [openApplyBox, setOpenApplyBox] = useState({ open: false, job: {} });
  const [isAction, setIsAction] = useState(false);

  let [account, setAccount] = useState({});

  const [errors, setErrors] = useState({
    email: '',
    subject: ''
  });

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    setErrors({
      ...errors,
      email: account.email.length === 0 ? 'Email is required!' : '',
      subject: account.subject.length === 0 ? 'Subject is required!' : ''
    });
    return valid;
  };

  let handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setErrors({
          ...errors,
          email: validEmailRegex(value) ? '' : 'Email is not valid!'
        });
        break;

      case 'subject':
        setErrors({
          ...errors,
          subject: value.length > 1 ? '' : 'Subject is required!'
        });
        break;

      default:
        break;
    }

    account[name] = value;
    setAccount({ ...account });
  };

  const handleModalClose = () => {
    setOpenApplyBox({ open: false, job: {} });
    setIsAction(false);
  };

  const handleShareJob = () => {
    if (validateForm(errors) && account.email && account.subject) {
      setIsAction(true);
      api.post(`/api/v1/jobs/${props.job.id}/share_jobs`, account).then(
        (response) => {
          toast.success(response.data.message);
          if (response.data.success) {
            handleModalClose();
          }
          setIsAction(false);
        },
        () => {
          setIsAction(false);
          toast.error('Something went wrong..');
        }
      );
    }
  };

  const openModal = () => {
    let obj = {
      email: '',
      subject: '',
      description: ''
    };
    setAccount(obj);
    setErrors(obj);
    setOpenApplyBox({
      open: true,
      job: props.job
    });
  };

  return (
    <>
      <Button
        fullWidth
        size="small"
        onClick={openModal}
        className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
        <span className="px-2">
          <FontAwesomeIcon icon={['fas', 'share']} />
        </span>
        <span>Share job</span>
      </Button>

      <Dialog
        onClose={handleModalClose}
        fullWidth
        maxWidth="sm"
        classes={{ paper: 'modal-content rounded-lg' }}
        aria-labelledby="simple-dialog-title"
        open={openApplyBox.open}>
        <Card className="card-box">
          <div className="card-header">
            <div className="card-header--title">
              <div className="font-size-xl font-weight-bold">Share job</div>
              <p>{props.job.job_title}</p>
            </div>
            <div className="card-header--actions"></div>
          </div>

          <div className="p-3">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <b>
                  To <span className="text-danger">*</span>
                </b>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Enter email id"
                  id="input-with-icon-textfield1"
                  value={account.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <b>
                  Subject <span className="text-danger">*</span>
                </b>
                <TextField
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Enter subject"
                  id="input-with-icon-textfield1"
                  value={account.subject}
                  name="subject"
                  onChange={handleChange}
                />
                {errors.subject.length > 0 && (
                  <span className="error">{errors.subject}</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <b>Description</b> <br/>
                <TextField
                  fullWidth
                  multiline
                  rows="4"
                  variant="outlined"
                  size="small"
                  placeholder="Enter description"
                  id="input-with-icon-textfield2"
                  value={account.description}
                  name="description"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <DialogActions className="mt-4">
              <Button
                disabled={isAction}
                onClick={() => handleShareJob()}
                className="btn-primary font-weight-bold hover-scale-lg float-right"
                size="small">
                Share
              </Button>
            </DialogActions>
          </div>
        </Card>
      </Dialog>
    </>
  );
};

export default ShareJobComponent;
