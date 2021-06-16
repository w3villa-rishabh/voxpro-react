/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import CountryCity from '../../assets/city-country';

import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

export default function SearchLocationComponent(props) {
  const [searchData, setSearchData] = useState(false);
  const [countyCity, setCountryCity] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const countryFilter = (value) => {
    if (value.length < 2) {
      return;
    }
    setSearchData(false);
    var search = new RegExp(value, 'i'); // prepare a regex object
    let searchLog = CountryCity.filter((item) => search.test(item));
    setCountryCity([...searchLog]);
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
          name="locationName"
          fullWidth
          autoComplete="off"
          placeholder="Search location"
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
              props.searchQuery.location = [];
              setCountryCity([]);
              if (props.return) {
                props.locationCallback('remove', '');
              }
            }
          }}
          onKeyPress={(e) => countryFilter(e.target.value)}
        />

        {countyCity.length ? (
          <ul className="list-group mt-2">
            {countyCity.map((user, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-success"
                onClick={() => {
                  props.searchQuery['locationName'] = user;
                  props.searchQuery.location.push({ name: user });
                  if (props.return) {
                    props.locationCallback('add', user);
                  }
                  setSearchQuery(user);
                  setCountryCity([]);
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
