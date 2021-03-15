import React, { useState } from 'react';

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

import api from '../api'

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import logo from '../assets/images/voxpro-images/logo_vp.png';
import side_img from '../assets/images/voxpro-images/login-side.jpg';

export default function LivePreviewExample() {
  const [checked1, setChecked1] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  }

const search = window.location.search;
const params = new URLSearchParams(search);
const foo = params.get('user');
console.log(foo);



  function userSignIn() {
    api.post('/api/users/login', {user: {email: email, password: password, remember_me: "0"}}).then((response) => {
      if(response.data){
          localStorage.setItem("user", JSON.stringify(response.data))
        window.location.href = "/DashboardMonitoring";
      }else{
        alert('Something went wrong..')
      }
    });
    console.log('The link was clicked.');
  }

async function  handleForm(val, type) {
    var value = await val.target.value

    switch(type){
        case "email":
            setEmail(value)
        break
        case "password":
            setPassword(value)
    }

    // console.log("value -==>>>", value)
    // console.log("type -==>>>", type)

  }
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
                              <img alt="..."
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
                                // onChange={handleChange}
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
                                // onChange={handleChange}
                                placeholder="Re-Enter your password"
                                type="password"
                              />
                            </div>
                            <div className="d-flex justify-content-between align-items-center font-size-md">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={checked1}
                                    onChange={handleChange1}
                                    value="checked1"
                                    color="primary"
                                  />
                                }
                                label="Remember me"
                              />
                              <div>
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="text-first">
                                  Recover password
                                </a>
                              </div>
                            </div>
                            <div className="text-center py-4">
                              <Button className="btn-second font-weight-bold w-50 my-2" onClick={userSignIn}>
                                Sign in
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
