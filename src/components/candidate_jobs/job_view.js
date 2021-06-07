import React, { useState } from 'react';

import { Grid, Card, Button, List, ListItem } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCurrentUser } from 'helper';
import { useHistory } from 'react-router';
import AddsComponents from 'components/add_component';
import SearchComponent from './search-component';
import logo from '../../assets/images/stock-photos/c-logo.webp';

export default function JobSearchComponent() {
  const history = useHistory();
  const [currentUser] = useState(getCurrentUser());

  return (
    <>
      <SearchComponent />

      <div className="mt-3 py-2">
        <FontAwesomeIcon icon={['fas', 'angle-left']} className="mr-2" />
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}>
          Back
        </a>
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={9}>
          <Card
            className="card-box"
            style={{ 'border-top': '5px solid #0e5bbc' }}>
            <div className="rounded-0 border-bottom px-3 py-2">
              <div className="card-header--title">
                <h2>Developer</h2>
                <p>
                  Posted 1 week ago by{' '}
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="a-blue font-weight-bold">
                    REED Easy Apply
                  </a>{' '}
                  Featured
                </p>
              </div>
            </div>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={9} className="px-3">
                <div className="bg-gray mt-3 p-3 border">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={['fas', 'rupee-sign']}
                      />

                      <b>£35,000 - £40,000 per annum</b>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={['fas', 'map-marker-alt']}
                      />

                      <b>Cardiff, South Glamorgan</b>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={['fas', 'clock']}
                      />

                      <b>Permanent, full-time</b>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={['fas', 'user']}
                      />

                      <b>Be one of the first ten applicants</b>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2">
                  <p>To all Software Developers out there!</p>
                  <p>
                    A renowned International Retailer is currently looking for a
                    Software Developer. Reporting to the Lead Developer, the
                    ideal candidate will be responsible for software development
                    to help bridge the gap between the business applications and
                    technical implementation.
                  </p>
                  <p>
                    Mainly working on both frontend and backend procedures to
                    support business applications, eCommerce platforms and
                    contribute directly to the success of the business products
                    by materialising the company’s visions into tangible user
                    experience.
                  </p>
                </div>
                <div>
                  <b>The ideal candidate should be knowledgeable in:</b>
                </div>
                <div>
                  <ul
                    className="ml-3 list-profile-available font-size-xl"
                    style={{ 'list-style': 'disc' }}>
                    <li>ReactJS</li>
                    <li>.NET/ ASP.NET framework</li>
                    <li>SQL Server</li>
                    <li>Model-View-Controller (MVC)</li>
                    <li>Object Oriented Design Principles</li>
                    <li>Visual Studio 2017/2019</li>
                    <li>
                      Able to Translate UI/UX design wireframes to actual code
                    </li>
                  </ul>
                </div>
                <div>
                  <b>
                    All interested candidates can send their CV to: or call on
                    +.
                  </b>
                </div>
                <div className="text-center py-5">
                  <Button
                    fullWidth
                    size="small"
                    className="btn-danger w-50 font-size-lg font-weight-bold hover-scale-sm mt-2">
                    <span className="px-2">
                      <FontAwesomeIcon icon={['fas', 'apply']} />
                    </span>
                    <span>Apply now</span>
                  </Button>
                </div>
                <div>
                  <b>Reference: 42856925</b>
                </div>
                <div>
                  <span>
                    Bank or payment details should never be provided when
                    applying for a job. For information on how to stay safe in
                    your job search, visit SAFERjobs.
                  </span>
                </div>
                <div className="text-center py-5">
                  <Button
                    size="small"
                    className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                    <span className="px-2">
                      <FontAwesomeIcon icon={['fas', 'bell']} />
                    </span>
                    <span>Get job alert</span>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={3} className="px-3 py-2">
                <Button
                  fullWidth
                  size="small"
                  className="btn-danger font-size-lg font-weight-bold hover-scale-sm mt-2">
                  <span>Apply now</span>
                </Button>
                <div className="mt-3">
                  <span>
                    You're using CV Deepak_Kumar_js.pdf to apply for this role.
                  </span>
                  <div className="float-right">
                    <a
                      href="#/"
                      className="a-blue font-weight-bold"
                      onClick={(e) => e.preventDefault()}>
                      Upload CV
                    </a>
                  </div>
                </div>
                <Button
                  fullWidth
                  size="small"
                  className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                  <span className="px-2">
                    <FontAwesomeIcon icon={['fas', 'heart']} />
                  </span>
                  <span>Shortlisted</span>
                </Button>
                <Button
                  fullWidth
                  size="small"
                  className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                  <span className="px-2">
                    <FontAwesomeIcon icon={['fas', 'share']} />
                  </span>
                  <span>Share job</span>
                </Button>
                <div className="d-flex mt-3 border flex-column justify-content-between">
                  <div>
                    <img
                      style={{ height: '90px', width: '100%' }}
                      className=""
                      alt="..."
                      src={logo}
                    />
                  </div>
                  <div className="d-flex flex-column"></div>
                  <Button
                    fullWidth
                    size="small"
                    className="btn-outline-first font-size-lg font-weight-bold hover-scale-sm mt-2">
                    <span>Connect</span>
                  </Button>
                </div>
              </Grid>
            </Grid>
            <div className="card-footer mt-4">
              <b>
                Not quite what you are looking for? Try these similar searches
              </b>
              <Grid container spacing={0} className="mt-3">
                <Grid item xs={12} sm={6}>
                  <a
                    href="#/"
                    className="a-blue"
                    onClick={(e) => e.preventDefault()}>
                    Implement Technology jobs in Holbein
                  </a>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <a
                    href="#/"
                    className="a-blue"
                    onClick={(e) => e.preventDefault()}>
                    Developer jobs in Holbein
                  </a>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <a
                    href="#/"
                    className="a-blue"
                    onClick={(e) => e.preventDefault()}>
                    Jobs in Holbein
                  </a>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <a
                    href="#/"
                    className="a-blue"
                    onClick={(e) => e.preventDefault()}>
                    Information Technology jobs
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card
            className="card-box"
            style={{ 'border-top': '5px solid green' }}>
            <h4 className="p-3 border-bottom">Recommended courses</h4>
            <List className="list-group-flush mb-4 mb-lg-0 text-left">
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Build React Interface
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Create Ads Campaign
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Resolve All Github Issues
                    </div>
                    <div className="text-black-50">Bugfixes</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Build UI for Angular
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="rounded-bottom d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Create UI Designs
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
          <Card
            className="card-box mt-3"
            style={{ 'border-top': '5px solid grey' }}>
            <h4 className="p-3 border-bottom">Similar jobs</h4>
            <List className="list-group-flush mb-4 mb-lg-0 text-left">
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Build React Interface
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Create Ads Campaign
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Resolve All Github Issues
                    </div>
                    <div className="text-black-50">Bugfixes</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                disableRipple
                onClick={(e) => e.preventDefault()}
                className="d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Build UI for Angular
                    </div>
                    <div className="text-black-50">Development</div>
                  </div>
                </div>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}
                className="rounded-bottom d-flex bg-white hover-scale-rounded align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="font-weight-bold text-black">
                      Create UI Designs
                    </div>
                    <div className="text-black-50">Marketing</div>
                  </div>
                </div>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>

      {currentUser.role === 'candidate' && <AddsComponents />}
    </>
  );
}
