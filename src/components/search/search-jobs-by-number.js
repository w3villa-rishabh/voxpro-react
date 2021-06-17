/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { TextField, Button } from '@material-ui/core';

export default function SearchJobsByNumberComponent(props) {
  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search by number"
        className="w-100"
        name="name"
        onChange={(event) => {
          props.searchQuery.jobNumber = event.target.value;
          if (props.return) {
            props.searchQuery.jobNumber = '';
            props.searchQuery.jobNumber = event.target.value;
          }
        }}
      />
      {props.return && (
        <Button
          size="small"
          className="btn-primary mt-2 float-right"
          variant="text"
          onClick={() => props.jobsCallback()}>
          Add
        </Button>
      )}
    </>
  );
}
