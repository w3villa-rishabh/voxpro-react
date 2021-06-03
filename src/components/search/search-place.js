/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPlacesSearch } from '../../reducers/ThemeOptions';
import { TextField } from '@material-ui/core';

// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyBmLdfW5l-tOkv0H2NI4aeBRgKdwf7X6yQ';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === 'object' &&
    typeof window.google.maps === 'object'
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', callback);
  }
};

const PlaceSearchComponent = (props) => {
  const placeInputRef = useRef(null);
  const [searchPlace, setPlacesSearch] = useState([]);

  useEffect(() => {
    loadGoogleMapScript(() => {
      initPlaceAPI();
      console.log('map script load');
    });
  }, []);

  // initialize the google place autocomplete
  const initPlaceAPI = () => {
    let autocomplete = new window.google.maps.places.Autocomplete(
      placeInputRef.current
    );
    new window.google.maps.event.addListener(
      autocomplete,
      'place_changed',
      function () {
        let place = autocomplete.getPlace();
        console.log('place', place);
        // setSearchQuery({ ...searchQuery, location: place.formatted_address });

        // setPlace({
        //   address: place.formatted_address,
        //   lat: place.geometry.location.lat(),
        //   lng: place.geometry.location.lng()
        // });
      }
    );
  };

  const search = (search) => {
    props.setPlacesSearch(search);
    if (search) {
      axios
        .get(
          `https://api.tomtom.com/search/2/search/${search}.json?key=qc8zXXpEVVAEsKiQ1t5VBsGmOabVnSbd`
        )
        .then((response) => {
          if (response.statusText === 'OK') {
            setPlacesSearch(response.data.results);
          }
        });
    } else {
      setPlacesSearch([]);
    }
  };

  return (
    <>
      {/* <div className="search-box">
        <input
          type="text"
          ref={placeInputRef}
          placeholder="Enter a location"
          className="MuiInputBase-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
        />
      </div> */}

      <TextField
        variant="outlined"
        size="small"
        name="name"
        fullWidth
        placeholder="Search location"
        autoComplete="off"
        value={props.placesSearch}
        onChange={(e) => search(e.target.value)}
      />
      {!!searchPlace.length && (
        <ul className="search-dropdown">
          {searchPlace.map((map) => (
            <li
              className="pointer truncate"
              onClick={() => {
                props.setPlacesSearch(map.address.freeformAddress);
                setPlacesSearch([]);
              }}>
              {map.address.freeformAddress}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  placesSearch: state.ThemeOptions.placesSearch
});

const mapDispatchToProps = (dispatch) => {
  return {
    setPlacesSearch: (places) => dispatch(setPlacesSearch(places))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceSearchComponent);
