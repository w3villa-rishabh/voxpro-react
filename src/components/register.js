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

import api from '../api';
import { toast } from 'react-toastify';

import hero4 from '../assets/images/voxpro-images/reg-side.jpg';
import logo from '../assets/images/voxpro-images/logo_vp.png';

export default function LivePreviewExample() {
  let [account, setAccount] = useState({
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    first_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: ''
  });

  let handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'first_name':
        setErrors({
          ...errors,
          first_name: value.length !== 0 ? '' : 'First name is required!'
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          email: validEmailRegex.test(value) ? '' : 'Email is not valid!'
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          password: verifyPass(value)
        });
        break;
      case 'confirm_password':
        setErrors({
          ...errors,
          confirm_password:
            account.password === value ? '' : 'Confirm password not match!'
        });
        break;
      case 'role':
        setErrors({
          ...errors,
          role: value.length < 5 ? '' : 'Role is required!'
        });
        break;
      default:
        break;
    }
    if (name === 'role') {
      account[name] = parseInt(value);
    } else {
      account[name] = value;
    }
    setAccount(account);
  };

  const validEmailRegex = RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  // const passwordRegex = new RegExp(
  //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  // );

  const verifyPass = (value) => {
    let validated = '';

    if (value.length < 8) {
      validated = 'Your password must be at least 8 characters';
    }
    if (!/[A-Z]/.test(value)) {
      validated = 'Your password must contain at least one upper case.';
    }
    if (!/[#?!@$%^&*-]/.test(value)) {
      validated = 'Your password must contain at least one special case.';
    }
    return validated;
  };

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };

  let userRegister = (e) => {
    e.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form');
    } else {
      console.error('Invalid Form');
    }
    api
      .post('/api/users', { user: account })
      .then((response) => {
        if (response.data.success) {
          // localStorage.setItem("user", JSON.stringify(response.data))
          toast.success(response.data.message);
          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        } else {
          toast.warning(response.data.message);
        }
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
    console.log('The link was clicked.');
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
                            <p className="font-size-lg mb-5 text-black-50">
                              Start using our tools right away! Create an
                              account today!
                            </p>
                            <p className="font-size-lg mb-5 text-black-50"></p>
                          </div>

                          <form method="post" onSubmit={userRegister}>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Email address
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                name="email"
                                onChange={handleChange}
                                fullWidth
                                placeholder="Enter your email address"
                                type="email"
                                required
                              />
                              {errors.email.length > 0 && (
                                <span className="error">{errors.email}</span>
                              )}
                            </div>
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
                                required
                              />
                              {errors.password.length > 0 && (
                                <span className="error">{errors.password}</span>
                              )}
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
                              {errors.confirm_password.length > 0 && (
                                <span className="error">
                                  {errors.confirm_password}
                                </span>
                              )}
                            </div>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                First name
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                name="first_name"
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                required
                              />
                              {errors.first_name.length > 0 && (
                                <span className="error">
                                  {errors.first_name}
                                </span>
                              )}
                            </div>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Last name
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                name="last_name"
                                onChange={handleChange}
                                placeholder="Enter your last name"
                              />
                            </div>

                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Role
                              </label>
                              <select
                                className="MuiTextField-root MuiFormControl-fullWidth select-role"
                                variant="outlined"
                                fullWidth
                                name="role"
                                required
                                onChange={handleChange}>
                                <option value="">Select Role</option>
                                <option value="0">Admin</option>
                                <option value="3">Candidate</option>
                                <option value="1">Agency</option>
                                <option value="2">Company</option>
                              </select>
                              {errors.role.length > 0 && (
                                <span className="error">{errors.role}</span>
                              )}
                            </div>
                            <div className="form-group mb-5">
                              By clicking the <strong>Create account</strong>{' '}
                              button below you agree to our terms of service and
                              privacy statement.
                            </div>

                            <Button
                              type="submit"
                              size="large"
                              fullWidth
                              className="btn-primary mb-5">
                              Create Account
                            </Button>
                          </form>
                          <div className="text-center text-black-50 mt-3">
                            Already have account?{' '}
                            <a href="/login" className="text-first">
                              Login
                            </a>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero4 + ')' }}
                          />
                          {/* <div className="bg-composed-wrapper--bg opacity-5" />
                          <div className="bg-composed-wrapper--bg opacity-2" /> */}
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                VOXPRO
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                financial complexity made simple
                              </p>
                              <div className="" />
                              <div></div>
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
