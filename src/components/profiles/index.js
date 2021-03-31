import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Card,
  Button,
  LinearProgress,
  CardContent,
  Dialog,
  TextField,
  DialogContent,
  DialogTitle,
  DialogActions,
  List,
  ListItem
} from '@material-ui/core';

import { getCurrentUser } from '../../helper';
import api from '../../api';
import avatar5 from '../../assets/images/avatars/default.png';

import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import stock2 from '../../assets/images/stock-photos/stock-7.jpg';

export default function LivePreviewExample() {
  const [aboutText, setAboutText] = useState();
  const [, setData] = useState({});
  const [modal1, seModal1] = useState(false);
  const [currentUser] = useState(getCurrentUser());

  useEffect(() => {
    api.get(`/api/user?id=${currentUser.id}`).then((response) => {
      if (response.data) {
        setData(response.data);
      } else {
        alert('Something went wrong..');
      }
    });
  }, [currentUser.id]);

  const toggle1 = () => {
    // seModal1(!modal1);
  };

  const [activeTab, setActiveTab] = useState('0');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //Example 2
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    // setOpen1(true);
    setAboutText(
      'Frank Belford providing delivery, implementation, Support, trancing and advanced customization for the selesforce platform'
    );
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <div className="app-inner-content-layout">
      <div className="app-inner-content-layout--main bg-white p-0">
        <Grid container spacing={2} className="main-card-section">
          <Grid item xs={12} sm={12}>
            <Card>
              <div className="card-img-wrapper h-180px">
                <div className="card-badges">
                  <FontAwesomeIcon
                    icon={['fas', 'pencil-alt']}
                    className="edit"
                  />
                </div>
                <img alt="..." className="img-fit-container" src={stock2} />
              </div>
              <CardContent className="card-body-avatar">
                <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded-circle">
                  <div className="avatar-icon rounded-circle">
                    <img alt="..." src={avatar5} />
                  </div>
                </div>
                <div className="main-card">
                  <div className="user-details">
                    <Grid container spacing={4} className="user-info">
                      <Grid item xs={12} sm={4}>
                        <div className="font-size-xxl font-weight-bold">
                          {currentUser.first_name} {currentUser.last_name}
                        </div>
                        <div>
                          <span>
                            Founder & Director | Frank Belford a Consultancy for
                            Salesforce and Bulhorn for Salesforce Product.{' '}
                            <a className="blue" href="javascript:void(0)">
                              500+ connection Contact info
                            </a>
                          </span>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <div className="d-flex justify-content-between">
                          <div>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-xs mr-2 rounded-0">
                                <div className="avatar-icon rounded-0">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </div>
                              <span>Frank Belford</span>
                            </small>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-xs mr-2 rounded-0">
                                <div className="avatar-icon rounded-0">
                                  <img alt="..." src={avatar3} />
                                </div>
                              </div>
                              <span>University of the Arts London</span>
                            </small>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit"
                          onClick={toggle1}
                        />
                        <div>
                          <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                            <div>80%</div>
                          </div>
                          <LinearProgress
                            variant="determinate"
                            className="progress-sm progress-bar-rounded progress-animated-alt progress-bar-second hc-style"
                            value={85}
                            style={{backgroundColor: "#070919!important"}}
                          />
                        </div>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <div className="right-corner-info">
                              <FontAwesomeIcon
                                icon={['fas', 'times']}
                                className="icon"
                              />
                              <span className="pr-3">
                                Show recruiters you's open to work -- you
                                controls who see this.
                              </span>
                              <a className="blue" href="javascript:void(0)">
                                Get started
                              </a>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <div className="right-corner-info">
                              <span>
                                Showcase service your offer so you and your
                                bushiness can found in search.
                              </span>
                              <a className="blue" href="javascript:void(0)">
                                Get started
                              </a>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="z-over py-2 skill-section">
          <div
            className={clsx(
              'tab-item-wrapper overflow-visible d-none d-block active'
            )}
            index={1}>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Card className="card-box p-4">
                    <h5>About</h5>
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt']}
                      className="about"
                      onClick={handleClickOpen1}
                    />
                    <div>
                      Frank Belford providing delivery, implementation, Support,
                      trancing and advanced customization for the selesforce
                      platform
                    </div>
                  </Card>

                  <Card className="card-box p-4 mt-3">
                    <h5>Feature</h5>
                    <div className="feature-card">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="icon"
                      />
                      <div className="info">
                        Showcase your work by featuring your best posts,
                        documents, media, and website.
                      </div>
                      <a className="blue" href="javascript:void(0)">
                        Add featured
                      </a>
                    </div>
                  </Card>

                  <Card className="card-box p-4 mt-3 experience-card">
                    <h5>Experience</h5>
                    <FontAwesomeIcon icon={['fas', 'plus']} className="icon" />
                    <ul>
                      <li className="position-relative">
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit-icon"
                        />
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Inez Conley</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Frank Belford is a leading professional services
                              Consultancy for selesforce and bullhorn for
                              selesforce product.
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card className="card-box p-4 dashboard-card">
                    <h5 className="mb-0">Your Dashboard</h5>
                    <p className="font-italic">Private to you</p>
                    <div className="star-icon">
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon"
                      />
                      <span>All Start</span>
                    </div>
                    <div className="raging">
                      <Grid item xs={12} sm={4}>
                        <span className="rating-count">254</span>
                        <p>Who viewed your</p>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <span className="rating-count">697</span>
                        <p>Post views</p>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <span className="rating-count">166</span>
                        <p>Search appearances</p>
                      </Grid>
                    </div>
                    <div className="info">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={['fas', 'money-bill']}
                          className="font-size-lg d-block mr-3 text-dark opacity-5"
                        />
                        <span>Salary</span>
                      </div>
                      <div className="divider my-3" />
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={['fas', 'tag']}
                          className="font-size-lg d-block mr-3 text-dark opacity-5"
                        />
                        <span>My Item</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="card-box p-4 education-card mt-3">
                    <h5>Education</h5>
                    <FontAwesomeIcon icon={['fas', 'plus']} className="icon" />
                    <ul>
                      <li className="position-relative">
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit-icon"
                        />
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Inez Conley</span>
                            <span className="text-black-50 d-block">
                              Project Manager
                            </span>
                          </div>
                        </div>
                      </li>
                      <hr></hr>
                      <li>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper mr-3">
                            <div className="avatar-icon rounded">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="position-relative">
                            <span>Sothwark College</span>
                            <span className="text-black-50 d-block">
                              Project Manager
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-box p-4 skill-card mt-3">
                    <h5 className="m-top">Skill & endorsements</h5>
                    <div className="add-skill">
                      <span className="pr-3">Add a new skill </span>
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon"
                      />
                    </div>
                    <Button
                      variant="text"
                      className="btn-pill btn-outline-primary quiz-btn">
                      Take skill quiz
                    </Button>
                    <p className="pt-2">View 2 pending endorsements</p>
                    <div className="divider my-3" />
                    <div className="justify-content-between">
                      <div>
                        <div className="font-weight-bold">
                          Business Analysis
                        </div>

                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </div>
                              <div>
                                <span>Nazim Kidd</span>
                              </div>
                            </small>
                          </Grid>
                          <Grid item xs={6}>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </div>
                              <div>
                                <span>Nazim Kidd</span>
                              </div>
                            </small>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="font-weight-bold">Team management</div>
                        <small className="d-flex pt-2 align-items-center">
                          <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div>
                            <span>Nazim Kidd</span>
                          </div>
                        </small>
                      </div>
                    </div>
                    <div className="divider my-3" />
                    <div className="justify-content-between">
                      <div>
                        <div className="font-weight-bold">Management</div>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </div>
                              <div>
                                <span>Nazim Kidd</span>
                              </div>
                            </small>
                          </Grid>
                          <Grid item xs={6}>
                            <small className="d-flex pt-2 align-items-center">
                              <div className="avatar-icon-wrapper avatar-icon-xs mr-2">
                                <div className="avatar-icon">
                                  <img alt="..." src={avatar1} />
                                </div>
                              </div>
                              <div>
                                <span>Nazim Kidd</span>
                              </div>
                            </small>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Card>

                  <Card className="card-box p-4 recommendations-card mt-3">
                    <h5 className="m-top">Recommendations</h5>
                    <div className="add-recommendations">
                      <span className="pr-3">Ask for recommendation</span>
                      <FontAwesomeIcon
                        icon={['fas', 'pencil-alt']}
                        className="icon"
                      />
                    </div>
                    <div>
                      {/* <ul className="rec-header">
                        <li>Received (5)</li>
                        <li>Given (0)</li>
                      </ul> */}
                      <List className="nav-tabs nav-tabs-primary tabs-animated tabs-animated-line d-flex">
                        <ListItem
                          button
                          className="px-0 mx-3 pb-0"
                          disableRipple
                          selected={activeTab === '0'}
                          onClick={() => {
                            toggle('0');
                          }}>
                          <span className="py-1 font-weight-bold">
                            Received (5)
                          </span>
                        </ListItem>
                        <ListItem
                          button
                          className="px-0 mx-3 pb-0"
                          disableRipple
                          selected={activeTab === '1'}
                          onClick={() => {
                            toggle('1');
                          }}>
                          <span className="py-1 font-weight-bold">
                            Given (9)
                          </span>
                        </ListItem>
                      </List>
                      <div className="font-12">
                        <div
                          className={clsx('tab-item-wrapper no-scroll', {
                            active: activeTab === '0'
                          })}
                          index={0}>
                          <Grid container spacing={1} className="pt-3">
                            <Grid item xs={5}>
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-icon-wrapper mr-2">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar1} />
                                    </div>
                                  </div>
                                  <div>
                                    <span>Isaiah Ruiz</span>
                                    <p className="text-black-50 d-block">
                                      Senior Web Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Grid>
                            <Grid item xs={7}>
                              <span>Nazim Kidd</span>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          className={clsx('tab-item-wrapper no-scroll', {
                            active: activeTab === '1'
                          })}
                          index={1}>
                          <Grid container spacing={1} className="pt-3">
                            <Grid item xs={5}>
                              <div className="d-flex">
                                <div className="d-flex align-items-center">
                                  <div className="avatar-icon-wrapper mr-2">
                                    <div className="avatar-icon">
                                      <img alt="..." src={avatar1} />
                                    </div>
                                  </div>
                                  <div>
                                    <span>Deepak Kumar</span>
                                    <p className="text-black-50 d-block">
                                      Senior Software Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Grid>
                            <Grid item xs={7}>
                              <span>
                                I was fortunate enough to work with twin while
                                at talent rover/ bullhorn where twain was
                                responsible for the implementation of the
                                bullhorn fo salesforce product.
                              </span>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      {/* About dialog modal open */}
      <Dialog
        classes={{ paper: 'modal-content' }}
        fullWidth
        open={open1}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title2">
        <DialogTitle id="form-dialog-title">Edit about</DialogTitle>

        <DialogContent className="p-0">
          <div>
            <div className="border-0">
              <div className="card-body">
                <div className="mb-3">
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    id="textfield-email"
                    label="Edit about"
                    multiline
                    rowsMax={4}
                    onChange={(event) => {
                      setAboutText(event.target.value);
                    }}
                    value={aboutText}
                  />
                </div>

                <div className="text-right">
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={handleClose1}
                      className="font-weight-bold btn-second px-4 my-3">
                      Cancel
                    </Button>

                    <Button
                      variant="contained"
                      className="font-weight-bold btn-second px-4 my-3">
                      Save
                    </Button>
                  </DialogActions>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* User edit modal open */}
      <Dialog
        scroll="body"
        maxWidth="lg"
        open={modal1}
        onClose={toggle1}
        classes={{
          paper: 'modal-content rounded border-0 bg-white p-3 p-xl-0'
        }}>
        <DialogTitle id="form-dialog-title">Edit info</DialogTitle>
        <div className="edit-user-info">
          <div className="border">
            <div className="card-img-wrapper h-180px">
              <img alt="..." className="img-fit-container" src={stock2} />
            </div>
            <CardContent className="card-body-avatar">
              <div className="avatar-icon-wrapper shadow-sm-dark border-white rounded-circle">
                <div className="avatar-icon rounded-circle">
                  <img alt="..." src={avatar5} />
                </div>
              </div>
            </CardContent>
          </div>

          <Grid container spacing={2} className="mt-3">
            <Grid item xs={6}>
              <div>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="textfield-user"
                  label="First name"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="textfield-user"
                  label="Second name"
                />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Current Position"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Headline"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Education"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Country/Region"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Locations in this Country/Region"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Industry"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="textfield-user"
                label="Contact info"
              />
            </Grid>
          </Grid>
        </div>
        <div className="text-right">
          <DialogActions>
            <Button
              variant="contained"
              onClick={toggle1}
              className="font-weight-bold btn-second px-4 my-3">
              Cancel
            </Button>

            <Button
              variant="contained"
              className="font-weight-bold btn-second px-4 my-3">
              Save
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
