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

import logo from '../assets/images/voxpro-images/logo_vp.png';
import side_img from '../assets/images/voxpro-images/login-side.jpg';

import FacebookLogin from 'react-facebook-login';
// import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import { GoogleLogin } from 'react-google-login';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function LoginComponent() {
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

  const responseFacebook = (response) => {
    console.log('Facebook response', response);
    let socialObj = {
      email: response.email,
      fbId: response.id,
      imageUrl: response.picture.data.url,
      name: response.name
    };
    socialLogin(socialObj);
  };

  const responseGoogle = (response) => {
    console.log('Google response', response.profileObj);
    socialLogin(response.profileObj);
  };

  const socialLogin = (socialObj) => {
    if (socialObj.email) {
      api
        .post('/api/user/social_sign_up', {
          user: socialObj
        })
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = '/dashboard';
          } else {
            toast.warning(response.data.message);
          }
        })
        .catch(() => {
          toast.success('Something went wrong!');
        });
    }
  };

  let save = (e) => {
    e.preventDefault();
    api
      .post('/api/users/login', {
        user: account
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          window.location.href = '/dashboard';
        } else {
          toast.warning(response.data.message);
        }
      })
      .catch(() => {
        toast.success('Something went wrong!');
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
                            {/* <h1 className="display-4 mb-1 font-weight-bold">
                              Login
                            </h1> */}
                            {/* <p className="font-size-lg mb-0 text-black-50">
                              Fill in the fields below to login to your account
                            </p> */}
                          </div>
                          <div className="text-center py-4 rounded bg-secondary my-4 fb-g-c">
                            <GoogleLogin
                              clientId="1021403903346-f2jvk3t2ffaln3ocsnf8sldv2mphifjf.apps.googleusercontent.com"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                              cookiePolicy={'single_host_origin'}
                              isSignedIn={false}
                              autoLoad={false}
                              className="gb-btn"
                              icon={false}>
                              <FontAwesomeIcon icon={['fab', 'google']} />
                              <span> Login with Google</span>
                            </GoogleLogin>

                            <FacebookLogin
                              appId="430160698075558"
                              autoLoad={false}
                              fields="name,email,picture"
                              // onClick={componentClicked}
                              callback={responseFacebook}
                              cssClass="fb-btn"
                              icon="fa-facebook"
                            />
                          </div>

                          {/* <div className="text-center py-4 rounded bg-secondary my-4">
                      <Button
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
                      </Button>
                    </div> */}

                          <div className="text-center text-black-50 mb-3">
                            We won't share your social media details
                          </div>
                          <hr></hr>
                          <div className="text-center text-black-50 mb-4">
                            or sign in with credentials
                          </div>
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
