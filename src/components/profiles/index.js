import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button, LinearProgress, hexToRgb } from '@material-ui/core';

import { useDropzone } from 'react-dropzone';

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckIcon from '@material-ui/icons/Check';

import hero1 from '../../assets/images/hero-bg/hero-8.jpg';

import { handleUser } from '../../helper';
import api from '../../api';

export default function LivePreviewExample() {
  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="rounded-circle avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  // useEffect(() => {
  //
  // }, [value]);

  const [, setData] = useState({});

  useEffect(() => {
    api.get(`/api/user?id=${handleUser().user.id}`).then((response) => {
      if (response.data) {
        setData(response.data);
      } else {
        alert('Something went wrong..');
      }
    });
  }, []);

  // function checkContactInfo() {
  //   if (Object.keys(data).length !== 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // useEffect(
  //   () => () => {
  //     files.forEach((file) => URL.revokeObjectURL(file.preview));
  //   },
  //   [files]
  // );

  return (
    <div className="app-inner-content-layout">
      <div className="app-inner-content-layout--main bg-white p-0">
        <div className="hero-wrapper mx-5 rounded-bottom shadow-xxl bg-composed-wrapper bg-second">
          <div className="flex-grow-1 w-100 d-flex align-items-center main-card-section">
            <div
              className="bg-composed-wrapper--image rounded-bottom opacity-3"
              style={{ backgroundImage: 'url(' + hero1 + ')' }}
            />
            <div className="bg-composed-wrapper--bg rounded-bottom bg-deep-sky opacity-4" />
            <div className="bg-composed-wrapper--content pt-5">
              <div className="main-card">
                <div className="user-details">
                  <div className="dropzone">
                    {/* <div
                      {...getRootProps({
                        className: 'dropzone-upload-wrapper'
                      })}> */}
                    <input {...getInputProps()} />
                    <div className="dropzone-inner-wrapper d-140 rounded-circle dropzone-avatar">
                      <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                        <Button
                          onClick={open}
                          className="btn-first avatar-button badge shadow-sm-dark btn-icon badge-position badge-position--bottom-right border-0 text-indent-0 d-40 badge-circle badge-first text-white">
                          <PublishTwoToneIcon className="d-20" />
                        </Button>

                        <div>
                          {isDragAccept && (
                            <div className="rounded-circle overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                              <CheckIcon className="d-40" />
                            </div>
                          )}
                          {isDragReject && (
                            <div className="rounded-circle overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                              <CloseTwoToneIcon className="d-60" />
                            </div>
                          )}
                          {!isDragActive && (
                            <div className="rounded-circle overflow-hidden d-140 bg-second text-center font-weight-bold text-white-50 d-flex justify-content-center align-items-center">
                              <AccountCircleTwoToneIcon className="d-50" />
                            </div>
                          )}
                        </div>

                        {thumbs.length > 0 && <div>{thumbs}</div>}
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  <div className="d-flex flex-column pl-md-2 user-info">
                    <Grid container spacing={4} className="p-3">
                      <Grid item xs={4}>
                        <div className="font-size-xxl font-weight-bold">
                          {handleUser().user.first_name}{' '}
                          {handleUser().user.last_name}
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
                      <Grid item xs={3}>
                        <ul>
                          <li>Frank Belford</li>
                          <li>University of the Arts London</li>
                        </ul>
                      </Grid>
                      <Grid item xs={5}>
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit"
                        />
                        <div>
                          <div className="d-flex mb-1 font-weight-bold justify-content-between font-size-sm">
                            <div>95%</div>
                          </div>
                          <LinearProgress
                            variant="determinate"
                            className="progress-animated-alt progress-sm progress-bar-first"
                            value={95}
                          />
                        </div>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
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
                          <Grid item xs={6}>
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
              </div>
            </div>
          </div>
        </div>
        <div className="z-over py-5 skill-section">
          <div
            className={clsx(
              'tab-item-wrapper overflow-visible d-none d-block active'
            )}
            index={1}>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Card className="card-box p-4">
                    <h5>About</h5>
                    <FontAwesomeIcon
                      icon={['fas', 'pencil-alt']}
                      className="about"
                    />
                    <div>
                      Frank Belford providing delivery, implementation, Support,
                      trancing and advanced customization for the selesforce
                      platform
                    </div>
                  </Card>

                  <Card className="card-box p-4 mt-4">
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

                  <Card className="card-box p-4 mt-4 experience-card">
                    <h5>Experience</h5>
                    <FontAwesomeIcon icon={['fas', 'plus']} className="icon" />
                    <ul>
                      <li className="position-relative">
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit-icon"
                        />
                        <span>Founder & Director</span>
                      </li>
                      <hr></hr>
                      <li>
                        <span>Co-Founder & Director</span>
                      </li>
                    </ul>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className="card-box p-4 dashboard-card">
                    <h5 className="mb-0">Your Dashboard</h5>
                    <p className="font-italic">Private to you</p>
                    <div className="star-icon">
                      <FontAwesomeIcon
                        icon={['fas', 'star-o']}
                        className="icon"
                      />
                      <span>All Start</span>
                    </div>
                    <div className="raging">
                      <Grid item xs={4}>
                        <span className="rating-count">254</span>
                        <p>Who viewed your</p>
                      </Grid>
                      <Grid item xs={4}>
                        <span className="rating-count">697</span>
                        <p>Post views</p>
                      </Grid>
                      <Grid item xs={4}>
                        <span className="rating-count">166</span>
                        <p>Search appearances</p>
                      </Grid>
                    </div>
                    <div className="info">
                      <ul>
                        <li>
                          <span>Salary</span>
                        </li>
                        <hr></hr>
                        <li>
                          <span>My Item</span>
                        </li>
                      </ul>
                    </div>
                  </Card>

                  <Card className="card-box p-4 education-card mt-4">
                    <h5>Education</h5>
                    <FontAwesomeIcon icon={['fas', 'plus']} className="icon" />
                    <ul>
                      <li className="position-relative">
                        <FontAwesomeIcon
                          icon={['fas', 'pencil-alt']}
                          className="edit-icon"
                        />
                        <span>University of the Arts London</span>
                      </li>
                      <hr></hr>
                      <li>
                        <span>Sothwark College</span>
                      </li>
                    </ul>
                  </Card>

                  <Card className="card-box p-4 skill-card mt-4">
                    <h5>Skill & endorsements</h5>
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
                    <hr />
                    <b>Business Analysis</b>
                  </Card>

                  <Card className="card-box p-4 recommendations-card mt-4">
                    <h5>Recommendations</h5>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
