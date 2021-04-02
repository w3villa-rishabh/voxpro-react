import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Button,
  List,
  ListItem,
  Tooltip,
  InputAdornment,
  TextField,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle
} from '@material-ui/core';

import api from '../api';
import { toast } from 'react-toastify';
import LoginSocialComponent from '../components/login-social';

import hero4 from '../assets/images/voxpro-images/reg-side.jpg';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function LivePreviewExample() {
  const [values, setValues] = React.useState({
    showPassword: false
  });
  const [values1, setValues1] = React.useState({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword: !values1.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: '',
    policyCheckbox: ''
  });

  const [modal1, seModal1] = useState(false);
  const [doLogin, setDoLogin] = useState(false);
  const [policyCheckbox, setPolicyCheckbox] = useState(false);

  const toggle1 = () => {
    seModal1(!modal1);
  };

  const policyVerify = () => {
    setPolicyCheckbox(!policyCheckbox);
  };

  let handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'first_name':
        setErrors({
          ...errors,
          first_name:
            value.length > 1 ? '' : 'Minimum two character is required!'
        });
        break;
      case 'last_name':
        setErrors({
          ...errors,
          last_name:
            value.length > 1 ? '' : 'Minimum two character is required!'
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

  const validateForm = (error) => {
    let valid = true;
    Object.values(error).forEach((val) => val.length > 0 && (valid = false));

    setErrors({
      ...errors,
      first_name:
        account.first_name.length === 0 ? 'First name is required!' : '',
      last_name: account.last_name.length === 0 ? 'Last name is required!' : '',
      email: account.email.length === 0 ? 'Email is required' : '',
      password: account.password.length === 0 ? 'Password is required!' : '',
      role: account.role.length === 0 ? 'Role is required!' : '',
      confirm_password:
        account.confirm_password.length === 0
          ? 'Confirm password is required!'
          : account.password === account.confirm_password
          ? ''
          : 'Confirm password not match!',
      policyCheckbox: policyCheckbox === false ? 'Please read policy!' : ''
    });
    return valid;
  };

  let userRegister = (e) => {
    e.preventDefault();
    if (
      validateForm(errors) &&
      account.first_name &&
      account.last_name &&
      account.email &&
      account.password &&
      account.role >= 0 &&
      policyCheckbox &&
      account.confirm_password === account.password
    ) {
      console.info('Valid Form');
      setDoLogin(true);
      toast.dismiss();
      api
        .post('/api/users', { user: account })
        .then((response) => {
          if (response.data.success) {
            // localStorage.setItem("user", JSON.stringify(response.data))
            toast.success(response.data.message);
            setTimeout(() => {
              window.location.href = '/login';
              setDoLogin(false);
            }, 3000);
          } else {
            toast.error(response.data.message);
            setDoLogin(false);
          }
        })
        .catch(() => {
          setDoLogin(false);
          toast.error('Something went wrong');
        });
    } else {
      console.error('Invalid Form');
    }

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
                  <Grid container spacing={2} className="min-vh-100">
                    <Grid
                      item
                      lg={7}
                      xl={6}
                      className="d-flex align-items-center">
                      <Grid item md={10} lg={8} xl={7} className="mx-auto">
                        <div className="py-4">
                          <LoginSocialComponent name={'Sign-Up'} />

                          <form method="post" onSubmit={userRegister}>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Email address{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                name="email"
                                onChange={handleChange}
                                fullWidth
                                placeholder="Enter your email address"
                                type="email"
                                // required
                              />
                              {errors.email.length > 0 && (
                                <span className="error">{errors.email}</span>
                              )}
                            </div>
                            <div className="mb-3">
                              <div className="d-flex justify-content-between">
                                <label className="font-weight-bold mb-2">
                                  Password{' '}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <TextField
                                variant="outlined"
                                size="small"
                                name="password"
                                onChange={handleChange}
                                fullWidth
                                placeholder="Enter your password"
                                // required
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                InputProps={{
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
                              {errors.password.length > 0 && (
                                <span className="error">{errors.password}</span>
                              )}
                            </div>
                            <div className="mb-3">
                              <div className="d-flex justify-content-between">
                                <label className="font-weight-bold mb-2">
                                  Password Confirmation{' '}
                                  <span className="text-danger">*</span>
                                </label>
                              </div>
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                name="confirm_password"
                                onChange={handleChange}
                                placeholder="Re-Enter your password"
                                type={
                                  values1.showPassword ? 'text' : 'password'
                                }
                                value={values1.password}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={handleClickShowPassword1}
                                        onMouseDown={handleMouseDownPassword}>
                                        {values1.showPassword ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  )
                                }}
                                // required
                              />
                              {errors.confirm_password.length > 0 && (
                                <span className="error">
                                  {errors.confirm_password}
                                </span>
                              )}
                            </div>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                First name{' '}
                                <span className="text-danger">*</span>
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                name="first_name"
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                // required
                              />
                              {errors.first_name.length > 0 && (
                                <span className="error">
                                  {errors.first_name}
                                </span>
                              )}
                            </div>
                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Last name <span className="text-danger">*</span>
                              </label>
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                name="last_name"
                                onChange={handleChange}
                                placeholder="Enter your last name"
                              />
                              {errors.last_name.length > 0 && (
                                <span className="error">
                                  {errors.last_name}
                                </span>
                              )}
                            </div>

                            <div className="mb-3">
                              <label className="font-weight-bold mb-2">
                                Role <span className="text-danger">*</span>
                              </label>
                              <select
                                className="MuiTextField-root MuiFormControl-fullWidth select-role"
                                variant="outlined"
                                fullWidth
                                name="role"
                                onChange={handleChange}>
                                <option value="">Select Role</option>
                                {/* <option value="0">Admin</option> */}
                                <option value="3">Candidate</option>
                                {/* <option value="1">Agency</option>
                                <option value="2">Company</option> */}
                              </select>
                              {errors.role.length > 0 && (
                                <span className="error">{errors.role}</span>
                              )}
                            </div>
                            {/* <div className="form-group mb-3">
                              By clicking the <strong>Create account</strong>{' '}
                              button below you agree to our terms of service and
                              privacy statement.
                            </div> */}
                            <div className="d-flex justify-content-between align-items-center font-size-md">
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    onChange={policyVerify}
                                    value={policyCheckbox}
                                    name="policy"
                                    color="primary"
                                  />
                                }
                                label={
                                  <div>
                                    <span>
                                      I accept Term of Service and agree with{' '}
                                    </span>
                                    {/* <a
                                      className="a-blue"
                                      href="javascript:void(0)"
                                      onClick={() => {
                                        seModal1(!modal1);
                                      }}>
                                      Terms of use
                                    </a> */}
                                    {/* <span> and </span> */}
                                    <a
                                      className="a-blue"
                                      href="javascript:void(0)"
                                      onClick={() => {
                                        seModal1(!modal1);
                                      }}>
                                      Privacy Policy
                                    </a>
                                    <span> of Voxpro. </span>
                                  </div>
                                }
                              />
                            </div>

                            <Button
                              type="submit"
                              size="large"
                              fullWidth
                              disabled={policyCheckbox === false}
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
        {/* User edit modal open */}
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal1}
          onClose={toggle1}
          classes={{
            paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
          }}>
          <DialogTitle id="form-dialog-title" className="p-2">
            <div className="card-badges card-badges-top">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="pointer mr-3"
                onClick={toggle1}
              />
            </div>
            <span>Privacy policy</span>
          </DialogTitle>
          <div className="p-3">
            <p>
              A Privacy Policy is a legal statement that specifies what the
              business owner does with the personal data collected from users,
              along with how the data is processed and for what purposes. In
              1968, Council of Europe did studies on the threat of the Internet
              expansion as they were concerned with the effects of technology on
              human rights. This lead to the development of policies that were
              to be developed to protect personal data. This marks the start of
              what we know now as a "Privacy Policy." While the name "Privacy
              Policy" refers to the legal agreement, the concept of privacy and
              protecting user data is closely related. This agreement can also
              be known under these names: Privacy Statement Privacy Notice
              Privacy Information Privacy Page A Privacy Policy can be used for
              both your website and mobile app if it's adapted to include the
              platforms your business operates on.
            </p>
            <p>
              A Privacy Policy is a legal statement that specifies what the
              business owner does with the personal data collected from users,
              along with how the data is processed and for what purposes. In
              1968, Council of Europe did studies on the threat of the Internet
              expansion as they were concerned with the effects of technology on
              human rights. This lead to the development of policies that were
              to be developed to protect personal data. This marks the start of
              what we know now as a "Privacy Policy." While the name "Privacy
              Policy" refers to the legal agreement, the concept of privacy and
              protecting user data is closely related. This agreement can also
              be known under these names: Privacy Statement Privacy Notice
              Privacy Information Privacy Page A Privacy Policy can be used for
              both your website and mobile app if it's adapted to include the
              platforms your business operates on.
            </p>
            <p>
              A Privacy Policy is a legal statement that specifies what the
              business owner does with the personal data collected from users,
              along with how the data is processed and for what purposes. In
              1968, Council of Europe did studies on the threat of the Internet
              expansion as they were concerned with the effects of technology on
              human rights. This lead to the development of policies that were
              to be developed to protect personal data. This marks the start of
              what we know now as a "Privacy Policy." While the name "Privacy
              Policy" refers to the legal agreement, the concept of privacy and
              protecting user data is closely related. This agreement can also
              be known under these names: Privacy Statement Privacy Notice
              Privacy Information Privacy Page A Privacy Policy can be used for
              both your website and mobile app if it's adapted to include the
              platforms your business operates on.
            </p>
            <p>
              A Privacy Policy is a legal statement that specifies what the
              business owner does with the personal data collected from users,
              along with how the data is processed and for what purposes. In
              1968, Council of Europe did studies on the threat of the Internet
              expansion as they were concerned with the effects of technology on
              human rights. This lead to the development of policies that were
              to be developed to protect personal data. This marks the start of
              what we know now as a "Privacy Policy." While the name "Privacy
              Policy" refers to the legal agreement, the concept of privacy and
              protecting user data is closely related. This agreement can also
              be known under these names: Privacy Statement Privacy Notice
              Privacy Information Privacy Page A Privacy Policy can be used for
              both your website and mobile app if it's adapted to include the
              platforms your business operates on.
            </p>
          </div>
        </Dialog>
      </div>
    </>
  );
}
