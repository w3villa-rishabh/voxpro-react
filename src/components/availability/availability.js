import React, { useState } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';

export default function AvailabilityComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState({
  //   name: '',
  //   locationName: '',
  //   jobTitleName: '',
  //   location: [],
  //   jobTitles: [],
  //   skills: [],
  //   educations: [],
  //   availability: '0',
  //   availabilityDate: '',
  //   page: 1
  // });

  return (
    <>
      <div className="position-relative">
        {isOpen && (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disablePast
              disableToolbar
              variant="outlined"
              format="dd/MM/yyyy"
              // margin="normal"
              id="date-picker-outlined"
              value={new Date()}
              onChange={(event) => {
                props.searchQuery.availabilityDate = event;
                props.availabilityCallback(event, 'add', event);
                setIsOpen(false);
              }}
              autoOk={true}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
              open={isOpen}
            />
          </MuiPickersUtilsProvider>
        )}
        <select
          className="MuiTextField-root MuiFormControl-fullWidth select-doc date-pic"
          variant="outlined"
          fullWidth
          name="availability"
          onChange={(event) => {
            if (event.target.value === '3') {
              setIsOpen(true);
            }
            props.searchQuery.availability = event.target.value;
            props.searchQuery.availabilityDate = '';
            props.availabilityCallback(event, 'remove', event);
            // setSearchQuery({
            //   ...searchQuery,
            //   [event.target.name]: event.target.value,
            //   availabilityDate: ''
            // });
          }}
          value={props.searchQuery.availability}>
          <option value="0">Select Availability</option>
          <option value="1">Immediately</option>
          <option value="2">Unavailable</option>
          <option value="3">
            {props.searchQuery.availabilityDate
              ? moment(props.searchQuery.availabilityDate).format('DD-MM-YYYY')
              : 'Available from'}
          </option>
        </select>
      </div>
    </>
  );
}
