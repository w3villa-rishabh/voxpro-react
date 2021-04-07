import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, List, ListItem, Tooltip, Card } from '@material-ui/core';

import logo from '../assets/images/voxpro-images/logo_vp.png';

import hero6 from '../assets/images/voxpro-images/recover-side.jpg';
import illustration1 from '../assets/images/illustrations/pack1/analysis.svg';
import illustration2 from '../assets/images/illustrations/pack1/businessman.svg';
import illustration3 from '../assets/images/illustrations/pack1/handshake.svg';
import illustration4 from '../assets/images/illustrations/pack1/moving.svg';

export default function LivePreviewExample() {
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
                        <div className="">
                          <div className="text-center mb-5">
                            <h3 className="display-4 mb-3 font-weight-bold">
                              <img
                                alt="..."
                                className="img-fluid"
                                src={logo}
                                width="200"
                              />
                            </h3>
                            {/* {showMessage.notification === 'show' && (
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
                            )} */}
                            <h1 className="display-4 mb-1 font-weight-bold">
                              Register As
                            </h1>
                            <p className="font-size-lg mb-0 text-black-50 mb-3">
                              Select the below option to register as
                            </p>
                            <div className="items-center">
                              <Card className="card-size card-center">
                                <div>
                                  <Grid container spacing={0}>
                                    <Grid item md={4}>
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{
                                          minHeight: '40px',
                                          maxHeight: '60px'
                                        }}
                                        src={illustration4}
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      md={6}
                                      className="d-flex align-items-center">
                                      <div>
                                        <div className="font-size-lg font-weight-bold mb-1">
                                          Candidate
                                        </div>
                                      </div>
                                    </Grid>
                                    <Grid
                                      item
                                      md={2}
                                      className="d-flex align-items-center">
                                      <a
                                        href="/sign-up?as=candidate"
                                        // onClick={(e) => e.preventDefault()}
                                        className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
                                        <FontAwesomeIcon
                                          icon={['fas', 'chevron-right']}
                                        />
                                      </a>
                                    </Grid>
                                  </Grid>
                                </div>
                              </Card>
                              <Card className="card-size card-center">
                                <div className="">
                                  <Grid container spacing={0}>
                                    <Grid item md={4}>
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{
                                          minHeight: '40px',
                                          maxHeight: '60px'
                                        }}
                                        src={illustration2}
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      md={6}
                                      className="d-flex align-items-center">
                                      <div>
                                        <div className="font-size-lg font-weight-bold mb-1">
                                          Agency
                                        </div>
                                      </div>
                                    </Grid>
                                    <Grid
                                      item
                                      md={2}
                                      className="d-flex align-items-center">
                                      <a
                                        href="/sign-up?as=agency"
                                        // onClick={(e) => e.preventDefault()}
                                        className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
                                        <FontAwesomeIcon
                                          icon={['fas', 'chevron-right']}
                                        />
                                      </a>
                                    </Grid>
                                  </Grid>
                                </div>
                              </Card>
                              <Card className="card-size card-center">
                                <div className="">
                                  <Grid container spacing={0}>
                                    <Grid item md={4}>
                                      <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{
                                          minHeight: '40px',
                                          maxHeight: '60px'
                                        }}
                                        src={illustration3}
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      md={6}
                                      className="d-flex align-items-center">
                                      <div>
                                        <div className="font-size-lg font-weight-bold mb-1">
                                          Company
                                        </div>
                                      </div>
                                    </Grid>
                                    <Grid
                                      item
                                      md={2}
                                      className="d-flex align-items-center">
                                      <a
                                        href="/sign-up?as=company"
                                        // onClick={(e) => e.preventDefault()}
                                        className="px-4 py-3 text-first btn btn-white shadow-none d-flex justify-content-between align-items-center">
                                        <FontAwesomeIcon
                                          icon={['fas', 'chevron-right']}
                                        />
                                      </a>
                                    </Grid>
                                  </Grid>
                                </div>
                              </Card>
                            </div>
                          </div>
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
