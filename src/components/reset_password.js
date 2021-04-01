import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import { toast } from 'react-toastify';
import api from '../api';

import logo from '../assets/images/voxpro-images/logo_vp.png';
import side_img from '../assets/images/voxpro-images/login-side.jpg';

export default function LivePreviewExample() {
  let [account, setAccount] = useState({
    password: ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let id = params.get('user');
  let token = params.get('reset_password_token');

  let save = (e) => {
    e.preventDefault();
    api
      .post('/api/password/reset', {
        user: account,
        token: token,
        id: id
      })
      .then((response) => {
        if (response.data.success) {
          toast.success(response.data.message);
          window.location.href = '/login';
        } else {
          toast.error(response.data.message);
        }
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
                          <div className="text-center">
                            <h3 className="display-4 mb-2 font-weight-bold">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={logo}
                                width="200"
                              />
                            </h3>
                            <h1 className="display-4 mb-1 font-weight-bold">
                              Reset Password
                            </h1>
                            <p className="font-size-lg mb-0 text-black-50">
                              Fill in the fields below to Reset your password
                            </p>
                          </div>
                          <div className="text-center py-4 rounded ">
                            {/* <Button
                              className="m-2 btn-pill px-4 font-weight-bold btn-google"
                              size="small">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </span>
                              <span className="btn-wrapper--label">
                                Login with Google
                              </span>
                            </Button>
                            <Button
                              className="m-2 btn-pill px-4 font-weight-bold btn-facebook"
                              size="small">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </span>
                              <span className="btn-wrapper--label">
                                Login with Facebook
                              </span>
                            </Button> */}
                          </div>
                          <div className="text-center text-black-50 mb-4">
                            {/* or sign in with credentials */}
                          </div>
                          <div>
                            <form method="post" onSubmit={save}>
                              <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                  <label className="font-weight-bold mb-2">
                                    Password
                                  </label>
                                </div>
                                <TextField
                                  variant="outlined"
                                  size="small"
                                  name="password"
                                  onChange={handleChange}
                                  fullWidth
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </div>
                              <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                  <label className="font-weight-bold mb-2">
                                    Password Confirmation
                                  </label>
                                </div>
                                <TextField
                                  variant="outlined"
                                  size="small"
                                  fullWidth
                                  name="confirm_password"
                                  onChange={handleChange}
                                  placeholder="Re-Enter your password"
                                  type="password"
                                />
                              </div>
                              <div className="text-center py-4">
                                <Button
                                  type="submit"
                                  size="large"
                                  fullWidth
                                  className="btn-primary mb-5">
                                  Set Password
                                </Button>
                              </div>
                              <div className="text-center text-black-50 mt-3">
                                Don't have an account?{' '}
                                <a
                                  href="sign-up/"
                                  onClick={(e) => e.preventDefault()}
                                  className="text-first">
                                  Sign up
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-premium-dark min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image opacity-5"
                            style={{ backgroundImage: 'url(' + side_img + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg opacity-6" />
                          <div className="bg-composed-wrapper--bg opacity-2" />
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                Voxpro
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                financial complexity made simple.
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
