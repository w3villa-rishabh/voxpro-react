/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import IndustriesList from '../../assets/industries';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

export default function SearchIndustriesComponent(props) {
  const [searchData, setSearchData] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const industriesFilter = (value) => {
    if (value.length < 2) {
      return;
    }
    setSearchData(false);
    var search = new RegExp(value, 'i'); // prepare a regex object
    let searchLog = IndustriesList.filter((item) => search.test(item));
    setIndustries([...searchLog]);
    if (!searchLog.length) {
      setSearchData(true);
    }
  };

  const handlerSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="user-new-request">
        <TextField
          variant="outlined"
          size="small"
          name="industriesName"
          fullWidth
          autoComplete="off"
          placeholder="Search industries"
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
              setIndustries([]);
              if (props.return) {
                props.industryCallback();
              } else {
                props.searchQuery.industry = [];
              }
            }
          }}
          onKeyPress={(e) => industriesFilter(e.target.value)}
        />

        {industries.length ? (
          <ul className="list-group mt-2">
            {industries.map((user, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-success"
                onClick={() => {
                  props.searchQuery['industriesName'] = user;
                  props.searchQuery.industry.push({ name: user });
                  if (props.return) {
                    props.industryCallback();
                  }
                  setSearchQuery(user);
                  setIndustries([]);
                }}>
                <span>{user}</span>
              </li>
            ))}
          </ul>
        ) : searchData === true ? (
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
