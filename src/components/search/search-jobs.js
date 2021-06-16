/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import axios from 'axios';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

export default function SearchJobsComponent(props) {
  const [searchJobs, setSearchJobs] = useState([]);
  const [searchJobStatus, setSearchJobStatus] = useState(false);
  const [searchQuery, setSearch] = useState('');

  const findJobs = (search) => {
    setSearchJobStatus(false);
    if (search.length < 2) {
      return;
    }
    axios
      .get(
        `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${search}`
      )
      .then(
        (response) => {
          if (response.statusText === 'OK') {
            console.log('response.data', response.data);
            setSearchJobs([...response.data]);
          } else if (!searchJobs.length) {
            // toast.error('No available..');
            setSearchJobStatus(true);
          }
        },
        (error) => {
          console.error('error', error);
        }
      );
  };

  const handlerSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <div className="user-new-request">
        <TextField
          variant="outlined"
          size="small"
          name="jobTitleName"
          fullWidth
          autoComplete="off"
          placeholder="Search jobs"
          className="w-100"
          value={searchQuery}
          onChange={handlerSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchTwoToneIcon />
              </InputAdornment>
            )
          }}
          onKeyUp={(e) => {
            if (e.key === 'Backspace' && e.target.value.length < 2) {
              props.searchQuery[e.target.name] = '';
              props.searchQuery.jobTitles = [];
              setSearch('');
              setSearchJobs([]);
              setSearchJobStatus(false);
              if (props.return) {
                props.jobsCallback();
              }
            }
          }}
          onKeyPress={(e) => findJobs(e.target.value)}
        />

        {searchJobs.length ? (
          <ul className="list-group mt-2">
            {searchJobs.map((user, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-success">
                <span
                  onClick={() => {
                    props.searchQuery['jobTitleName'] =
                      user.normalized_job_title;
                    props.searchQuery.jobTitles.push({
                      name: user.normalized_job_title
                    });
                    // setSearch({ ...searchQuery });
                    setSearch(user.normalized_job_title);
                    setSearchJobs([]);
                    if (props.return) {
                      props.jobsCallback();
                    }
                  }}>
                  {user.normalized_job_title}
                </span>
              </li>
            ))}
          </ul>
        ) : searchJobStatus === true ? (
          <ul className="list-group mt-2">
            <li className="list-group-item list-group-item-success">
              <span>Not Found</span>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
