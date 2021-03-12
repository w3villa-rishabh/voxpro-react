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

import api from '../api'
import hero4 from '../assets/images/voxpro-images/reg-side.jpg';
import logo from '../assets/images/voxpro-images/logo_vp.png';

export default function LivePreviewExample() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [role, setRole] = useState("");

    function userRegister() {
        api.post('/api/users', {user: {email: email, password: password, password_confirmation: confirm_password, first_name: first_name, last_name: last_name, role: Number(role)}}).then((response) => {
            if(response.data){
                localStorage.setItem("user", JSON.stringify(response.data))
              window.location.href = "/Overview";
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
            break
            case "confirm_password":
                setConfirmPassword(value)
            break
            case "first_name":
                setFirstName(value)
            break
            case "last_name":
                setLastName(value)
            break
            case "role":
                setRole(value)

        }
          console.log("value -==>>>", value)
    console.log("type -==>>>", type)
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
                            <p className="font-size-lg mb-5 text-black-50">
                              Start using our tools right away! Create an account today!
                            </p>
                          <p class="font-size-lg mb-5 text-black-50"></p>
                          </div>
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              Email address
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your email address"
                              onChange={(e)=>handleForm(e, "email")}
                              type="email"
                            />
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
                              fullWidth
                              placeholder="Enter your password"
                              onChange={(e)=>handleForm(e, "password")}
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
                              placeholder="Re-Enter your password"
                              onChange={(e)=>handleForm(e, "confirm_password")}
                              type="password"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              First name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your first name"
                              onChange={(e)=>handleForm(e, "first_name")}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="font-weight-bold mb-2">
                              Last name
                            </label>
                            <TextField
                              variant="outlined"
                              size="small"
                              fullWidth
                              placeholder="Enter your last name"
                              onChange={(e)=>handleForm(e, "last_name")}
                            />
                          </div>
                        
                          <div className="mb-3">
                            {/* <label className="font-weight-bold mb-2">
                              Select Role
                            </label> */}
                          <select 
                          class="MuiTextField-root MuiFormControl-fullWidth"
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={(e)=>handleForm(e, "role")}
                            >
                            <option value="">Select Role</option>
                            <option value="0">Admin</option>
                            <option value="3">Candidate</option>
                            <option value="1">Agency</option>
                            <option value="2">Company</option>
                            </select>
                          </div>
                          <div className="form-group mb-5">
                            By clicking the <strong>Create account</strong>{' '}
                            button below you agree to our terms of service and
                            privacy statement.
                          </div>

                          <Button
                            size="large"
                            fullWidth
                            className="btn-primary mb-5"
                            onClick={userRegister}>
                            
                            Create Account
                          </Button>
                          <div className="text-center text-black-50 mt-3">
                             Already have account?{' '}
                              <a
                                href="/login"
                                // onClick={(e) => e.preventDefault()}
                                className="text-first">
                                Login
                              </a>
                            </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item lg={5} xl={6} className="d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-dark min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image opacity-5"
                            style={{ backgroundImage: 'url(' + hero4 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-second opacity-5" />
                          <div className="bg-composed-wrapper--bg bg-deep-sky opacity-2" />
                          <div className="bg-composed-wrapper--content text-center p-5">
                            <div className="text-white px-0 px-lg-2 px-xl-4">
                              <h1 className="display-3 mb-4 font-weight-bold">
                                VOXPRO
                              </h1>
                              <p className="font-size-lg mb-0 opacity-8">
                                financial complexity made simple
                              </p>
                              <div className="" />
                              <div>
                              </div>
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