/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';

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

export default function PlaceSearchComponent() {
  const placeInputRef = useRef(null);

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

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          ref={placeInputRef}
          placeholder="Enter a location"
          className="MuiInputBase-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"
        />
      </div>
    </>
  );
}
