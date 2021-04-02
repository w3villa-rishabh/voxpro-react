import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  List,
  ListItem,
  Tooltip,
  TextField
} from '@material-ui/core';

import api from '../api';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { toast } from 'react-toastify';
import LoginSocialComponent from '../components/login-social';

import side_img from '../assets/images/voxpro-images/login-side.jpg';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function LoginComponent() {
  const [isLogin, setIsLogin] = React.useState(false);
  const [values, setValues] = React.useState({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let email = params.get('email');

  useEffect(() => {
    if (email) {
      confirmAccount();
    }
  }, [confirmAccount, email]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function confirmAccount() {
    api.post(`/api/user/confirm_account?email=${email}`).then((response) => {
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.warning(response.data.message);
      }
    });
  }

  let [account, setAccount] = useState({
    email: '',
    password: ''
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  let save = (e) => {
    e.preventDefault();
    setIsLogin(true);
    api
      .post('/api/users/login', {
        user: account
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          window.location.href = '/dashboard';
        } else {
          setIsLogin(false);
          toast.warning(response.data.message);
        }
      })
      .catch(() => {
        setIsLogin(false);
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
                          <LoginSocialComponent name={'Sign-In'} />

                          <div>
                            <form method="post" onSubmit={save}>
                              <div className="mb-4">
                                {/* <input type="text" name="email" onChange={handleChange} /> */}
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

                              <div className="mb-3">
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  id="textfield-password"
                                  label="Password"
                                  type="password"
                                  name="password"
                                  onChange={handleChange}
                                  // eslint-disable-next-line react/jsx-no-duplicate-props
                                  type={
                                    values.showPassword ? 'text' : 'password'
                                  }
                                  value={values.password}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <LockTwoToneIcon />
                                      </InputAdornment>
                                    ),
                                    endAdornment: (
                                      <InputAdornment position="end">
                                        <IconButton
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}>
                                          {values.showPassword ? (
                                            <Visibility />
                                          ) : (
                                            <VisibilityOff />
                                          )}
                                        </IconButton>
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </div>
                              <div className="d-flex justify-content-between align-items-center font-size-md">
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      onChange={handleChange}
                                      value="checked1"
                                      name="remember_me"
                                      color="primary"
                                    />
                                  }
                                  label="Keep me signed in"
                                />
                              </div>

                              <div className="text-center mb-4">
                                <Button
                                  fullWidth
                                  type="submit"
                                  disabled={isLogin}
                                  className="font-weight-bold font-size-sm mt-4 btn-primary">
                                  Sign In
                                </Button>
                              </div>
                            </form>

                            <div className="text-center text-black-50 mt-3">
                              <a
                                href="/recover-password"
                                //   onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Forgot your password
                              </a>
                            </div>

                            <div className="text-center text-black-50 mt-3">
                              Don't have an account?{' '}
                              <a
                                href="/sign-up"
                                // onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Register
                              </a>
                            </div>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-premium-dark min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + side_img + ')' }}
                          />
                          {/* <div className="bg-composed-wrapper--bg opacity-6" />
                          <div className="bg-composed-wrapper--bg opacity-2" /> */}
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
