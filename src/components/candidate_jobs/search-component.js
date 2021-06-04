/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';

import {
  Grid,
  Card,
  InputAdornment,
  TextField,
  Button
} from '@material-ui/core';

import { ClipLoader } from 'react-spinners';

import WorkIcon from '@material-ui/icons/Work';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useHistory } from 'react-router';

export default function JobSearchComponent() {
  const history = useHistory();
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    query: '',
    location: '',
    jobType: '',
    datePost: ''
  });

  const search = () => {
    setSearchLoader(true);
    console.log('searchQuery', searchQuery);
    setTimeout(() => {
      setSearchLoader(false);
    }, 3000);
    history.push('/jobs');
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item sm={9} xs={12}>
          <div className="page-title" style={{ height: 'unset' }}>
            <WorkIcon />
            <div className="title">
              <h5 className="heading pt-3">Job Search</h5>
            </div>
          </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <Button className="btn-neutral-info hover-scale-sm px-4 mt-2 float-right">
            <FontAwesomeIcon icon={['fas', 'heart']} className="svg-none" />
            <span className="px-2">Shortlisted Jobs</span>
          </Button>
        </Grid>
      </Grid>

      <Card className="card-box p-3 mt-3">
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label="What"
              placeholder="e.g. 'nurse'"
              className="w-100"
              name="query"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  [event.target.name]: event.target.value
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label="Where"
              placeholder="e.g. 'nurse'"
              className="w-100"
              name="query"
              onChange={(event) => {
                setSearchQuery({
                  ...searchQuery,
                  [event.target.name]: event.target.value
                });
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                ),
                style: {
                  height: '37px'
                }
              }}
            />
          </Grid>
          <Grid item sm={2} xs={12}>
            <Button
              size="small"
              disabled={searchLoader}
              className="btn-dribbble hover-scale-sm"
              onClick={search}>
              <span className="px-2">Search</span>
              <ClipLoader
                color={'var(--info)'}
                loading={searchLoader}
                size={20}
              />
            </Button>
          </Grid>
          <Grid item sm={2} xs={12}>
            <div className="border-left mt-2 pl-4">
              <a
                href="#/"
                className="btn-transparent btn-link btn-link-primary"
                onClick={(e) => e.preventDefault()}>
                <span>Browse Jobs </span>
                <FontAwesomeIcon
                  icon={['fas', 'arrow-right']}
                  className="svg-none pt-1"
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
