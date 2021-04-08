import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  InputAdornment,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import { toast } from 'react-toastify';
import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import api from '../api';
import logo from '../assets/images/voxpro-images/logo_vp.png';

import hero6 from '../assets/images/voxpro-images/recover-side.jpg';

export default function LivePreviewExample() {
  // const [email, setEmail] = useState("");

  let [account, setAccount] = useState({
    email: ''
  });

  const [showMessage, setShowMessage] = useState({
    notification: 'hide'
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  let resetPassword = (e) => {
    e.preventDefault();
    toast.dismiss();
    api
      .post('/api/password/forgot', {
        email: account.email
      })
      .then((response) => {
        if (response.data.success) {
          setShowMessage({ ...showMessage, notification: 'show' });
          // toast.success(response.data.message);
          // setTimeout(() => {
          //   window.location.href = '/login';
          // }, 4000);
        } else {
          toast.error(response.data.message);
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  return (
    <>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Grid container spacing={0} className="min-vh-100">
                    <Grid
                      item
                      lg={7}
                      xl={6}
                      className="d-flex align-items-center">
                      <Grid item md={10} lg={8} xl={7} className="mx-auto">
                        <div className="py-4">
                          <div className="text-center mb-5">
                            <h3 className="display-4 mb-5 font-weight-bold">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={logo}
                                width="200"
                              />
                            </h3>
                            {showMessage.notification === 'show' && (
                              <div>
                                <h2>Please check your inbox</h2>
                                <p>
                                  We've sent an email with a link to reset your
                                  password. This link will expire in 24 hours.
                                  <br></br> <br></br>
                                  <b>Can't find the email? </b> Check your junk
                                  and spam folders.
                                </p>
                                <div className="text-center text-black-50 mb-4">
                                  <a href="/login" className="text-first">
                                    Return to homepage
                                  </a>
                                </div>
                              </div>
                            )}
                            {showMessage.notification === 'hide' && (
                              <div>
                                <h1 className="display-4 mb-1 font-weight-bold">
                                  Recover Password
                                </h1>
                                <p className="font-size-lg mb-0 text-black-50">
                                  Forgot your password? No worries, we're here
                                  to help!
                                </p>
                              </div>
                            )}
                          </div>
                          {showMessage.notification === 'hide' && (
                            <form method="post" onSubmit={resetPassword}>
                              <div>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  id="textfield-email"
                                  label="Email address"
                                  name="email"
                                  onChange={handleChange}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <MailOutlineTwoToneIcon />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </div>
                              <div className="text-center mb-4">
                                <Button
                                  fullWidth
                                  className="text-uppercase font-weight-bold font-size-sm mt-4 btn-primary"
                                  onClick={resetPassword}>
                                  Send password
                                </Button>
                              </div>
                            </form>
                          )}
                          <div className="text-center mb-4">
                            <div className="text-center text-black-50 mt-3">
                              Already have account?{' '}
                              <a
                                href="/login"
                                // onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Login
                              </a>
                            </div>
                            <div className="text-center text-black-50 mt-3">
                              Don't have an account?{' '}
                              <a
                                href="/register-as"
                                // onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Sign up
                              </a>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-happy-green min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero6 + ')' }}
                          />
                          {/* <div className="bg-composed-wrapper--bg bg-second opacity-7" />
                                <div className="bg-composed-wrapper--bg bg-premium-dark opacity-4" /> */}
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                Voxpro
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                Financial complexity made simple
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <List
                            component="div"
                            className="nav-pills nav-neutral-secondary d-flex">
                            <Tooltip title="Facebook" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </ListItem>
                            </Tooltip>

                            <Tooltip title="Twitter" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                              </ListItem>
                            </Tooltip>

                            <Tooltip title="Google" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </ListItem>
                            </Tooltip>
                            <Tooltip title="Instagram" arrow>
                              <ListItem
                                component="a"
                                button
                                href="#/"
                                onClick={(e) => e.preventDefault()}
                                className="font-size-lg text-white-50">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                              </ListItem>
                            </Tooltip>
                          </List>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
