import React, { useState } from 'react';

import {
  Button,
  Dialog,
  Grid,
  Checkbox,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import Select from 'react-select';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

// let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: '#eaf6ff'
    }
  });

const locales = {
  'en-US': require('date-fns/locale/en-US')
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const availabilityType = [
  {
    value: 'Available',
    label: 'Available'
  },
  {
    value: 'Unavailable',
    label: 'Unavailable'
  },
  {
    value: 'Sick',
    label: 'Sick'
  }
];

const shift = [
  {
    value: 'Full Day',
    label: 'Full Day'
  },
  {
    value: 'PM',
    label: 'PM'
  },
  {
    value: 'AM',
    label: 'AM'
  }
];

const time = [
  {
    value: '07:00 AM',
    label: '07:00 AM'
  },
  {
    value: '08:00 AM',
    label: '08:00 AM'
  },
  {
    value: '09:00 AM',
    label: '09:00 AM'
  }
];

const availabilityObj = {
  type: '',
  shift: '',
  startTime: '',
  endTime: '',
  mon: false,
  tue: false,
  wed: false,
  thu: false,
  fri: false,
  sat: false,
  sun: false
};
export default function TasksCalendarComponent() {
  const [eventsList, setEventsList] = useState([]);
  const [availability, setAvailability] = useState([availabilityObj]);

  const addMoreRow = () => {
    availability.push(availabilityObj);
    setAvailability([...availability]);
  };

  const removeRow = (index) => {
    if (availability.length > 1) {
      availability.splice(index, 1);
      setAvailability([...availability]);
    }
  };

  const handleCancel = () => {
    let newArr = [availabilityObj];
    setAvailability(newArr);
    setOpen1(false);
  };

  //Example 2
  const [open1, setOpen1] = useState(false);

  const handleClose1 = () => {
    setOpen1(false);
  };

  function handleSelect({ start, end }) {
    console.log('start, end', start, end);
    setOpen1(true);
  }

  const selectEvent = (event) => {
    console.log('selected event', event);
    setOpen1(true);
  };

  let editInfo = (e) => {
    e.preventDefault();
  };

  const createAvailability = (e) => {
    e.preventDefault();
    console.log('availability', availability);
    const events = [];
    availability.map((value, index) => {
      var newEvent = {
        id: index,
        start: new Date(2021, 3, 11),
        end: new Date(2021, 3, 13),
        title: value.type,
        desc: 'Big conference for important people',
        duration: '02:00'
      };
      events.push(newEvent);
    });
    setEventsList([...eventsList, ...events]);
    setOpen1(false);
    let newArr = [availabilityObj];
    setAvailability(newArr);
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Availability Calendar</b>
        </div>
      </div>
      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Calendar
            defaultView="month"
            selectable
            // onSelectEvent={selectEvent}
            onSelectSlot={handleSelect}
            localizer={localizer}
            // views={allViews}
            step={60}
            showMultiDayTimes
            defaultDate={new Date()}
            components={{
              timeSlotWrapper: ColoredDateCellWrapper
            }}
            events={eventsList}
            startAccessor="start"
            endAccessor="end"
            titleAccessor="title"
            style={{ minHeight: 650 }}
          />
          <AddsComponents />
        </div>
      </div>

      {/* About dialog modal open */}
      <Dialog
        classes={{ paper: 'modal-content' }}
        scroll="body"
        maxWidth="lg"
        open={open1}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title2">
        <DialogTitle id="form-dialog-title">Create Availability</DialogTitle>

        <DialogContent className="p-0">
          <div>
            <div className="border-0">
              <div className="card-body">
                <form method="post" onSubmit={editInfo}>
                  <div className="mb-3">
                    {availability.map((value, index) => (
                      <Grid container spacing={0} wrap={'nowrap'} key={index}>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Start Date
                            </label>
                          )}
                          <TextField
                            fullWidth
                            className="user-drop"
                            placeholder="Start Date"
                            variant="outlined"
                            size="small"
                            id="textfield-email"
                            name="description"
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              End Date
                            </label>
                          )}
                          <TextField
                            fullWidth
                            className="user-drop"
                            placeholder="End Date"
                            variant="outlined"
                            size="small"
                            id="textfield-email"
                            name="description"
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Type
                            </label>
                          )}
                          <Select
                            key={index}
                            className="user-drop"
                            options={availabilityType}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.type = e.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                            placeholder="Type"
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Shift
                            </label>
                          )}
                          <Select
                            className="user-drop"
                            options={shift}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.shift = e.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                            placeholder="Shift"
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Start Time
                            </label>
                          )}
                          <Select
                            className="user-drop"
                            options={time}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.startTime = e.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                            placeholder="Start time"
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              End Time
                            </label>
                          )}
                          <Select
                            className="user-drop"
                            options={time}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.endTime = e.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                            placeholder="End time"
                          />
                        </Grid>
                        <Grid item className="d-flex week-remove-m">
                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Mon' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.mon = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Tue' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.tue = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Wed' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.web = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Thu' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.thu = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Fri' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.fri = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Sat' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.sat = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          <FormControlLabel
                            value="top"
                            control={<Checkbox color="primary" />}
                            label={index === 0 ? 'Sun' : ''}
                            labelPlacement="top"
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.sun = e.target.checked;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />

                          {index > 0 && (
                            <FontAwesomeIcon
                              icon={['fas', 'trash-alt']}
                              className="mt-12 pointer"
                              onClick={() => {
                                removeRow(index);
                              }}
                            />
                          )}

                          {index === 0 && <span className="ml-14"></span>}
                        </Grid>
                      </Grid>
                    ))}

                    <div>
                      <Button
                        variant="contained"
                        onClick={addMoreRow}
                        className="font-weight-bold btn-info px-4 my-1">
                        Add row
                      </Button>
                      {/* <Button
                        variant="contained"
                        type="submit"
                        onClick={handleCancel}
                        className="font-weight-bold btn-info px-4 my-1 float-lg-right">
                        Clear
                      </Button> */}
                    </div>
                  </div>
                  <div className="text-right">
                    <DialogActions>
                      <Button
                        variant="contained"
                        onClick={createAvailability}
                        className="font-weight-bold btn-second px-4 my-1">
                        Create
                      </Button>
                      {/* <Button
                        variant="contained"
                        onClick={handleClose1}
                        className="font-weight-bold btn-second px-4 my-1">
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        onClick={handleClose1}
                        className="font-weight-bold btn-second px-4 my-1">
                        Delete
                      </Button> */}

                      <Button
                        variant="contained"
                        type="submit"
                        onClick={handleCancel}
                        className="font-weight-bold btn-second px-4 my-1">
                        Cancel
                      </Button>
                    </DialogActions>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
