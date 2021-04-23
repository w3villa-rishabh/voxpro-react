import React, { useState } from 'react';

import {
  Button,
  Dialog,
  Grid,
  Checkbox,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';

import { toast } from 'react-toastify';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

function generateTimeIncrement(minIncrementProp = '30') {
  // Create an array of all possible times that can be selected
  const minuteIncrement = 60 / minIncrementProp;
  let timeArray = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < minuteIncrement; j++) {
      let time = {
        value: ('0' + i).slice(-2) + ('0' + j * minIncrementProp).slice(-2),
        HH: ('0' + i).slice(-2),
        MM: ('0' + j * minIncrementProp).slice(-2),
        hh:
          i === 0
            ? '12'
            : (i === 12 ? '12' : i > 12 ? '0' + (i - 12) : '0' + i).slice(-2),
        mm: ('0' + j * minIncrementProp).slice(-2),
        active: true,
        period: i >= 12 ? 'PM' : 'AM'
      };
      time.label = time.hh + ':' + time.mm + ' ' + time.period;
      timeArray.push(time);
    }
  }
  return timeArray;
}

const availabilityObj = {
  startDate: new Date(),
  endDate: '',
  type: 0,
  shift: 0,
  startTime: 0,
  endTime: 0,
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
  const [time] = useState(generateTimeIncrement());
  const [picDate, setPicDate] = useState('');

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
    setPicDate(start);
    const newClicks = [...availability];
    let newVote = { ...newClicks[0] };
    newVote.startDate = start;
    newClicks[0] = newVote;
    setAvailability(newClicks);
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
      if (value.type && value.endDate) {
        var newEvent = {
          id: index,
          start: new Date(
            value.startDate.getFullYear(),
            value.startDate.getMonth() + 1,
            value.startDate.getDate(),
            17,
            0,
            0,
            0
          ),
          end: new Date(
            value.endDate.getFullYear(),
            value.endDate.getMonth() + 1,
            value.endDate.getDate(),
            17,
            30,
            0,
            0
          ),
          title: value.type,
          desc: 'Big conference for important people',
          duration: '02:00'
        };
        // YearView, month, date, hh, mm, ss,ss,z
        // start: new Date(2015, 3, 12, 17, 0, 0, 0),
        // end: new Date(2015, 3, 12, 17, 30, 0, 0),
        events.push(newEvent);
      } else {
        toast.dismiss();
        toast.error('Date and type required, Please select required..');
      }
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
              <div className="card-body mb-0">
                <form method="post" onSubmit={editInfo}>
                  <div className="mb-2">
                    {availability.map((value, index) => (
                      <Grid container spacing={1} wrap={'nowrap'} key={index}>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Start Date
                            </label>
                          )}
                          <DatePicker
                            // value={availability[index].startDate}
                            minDate={new Date()}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Start Date"
                            selected={availability[index].startDate}
                            selectsStart
                            startDate={availability[index].startDate}
                            endDate={availability[index].endDate}
                            onChange={(date) => {
                              // setStartDate(date);
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.startDate = date;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              End Date
                            </label>
                          )}
                          <DatePicker
                            // value={availability[index].endDate}
                            dateFormat="dd-MM-yyyy"
                            placeholderText="End Date"
                            selected={availability[index].endDate}
                            selectsEnd
                            startDate={availability[index].startDate}
                            endDate={availability[index].endDate}
                            minDate={availability[index].startDate}
                            onChange={(date) => {
                              // setEndDate(date);
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.endDate = date;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Type
                            </label>
                          )}
                          {/* <Select
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
                          /> */}
                          <select
                            value={availability[index].type}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.type = e.target.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}>
                            <option value={0} disabled>
                              Select type
                            </option>
                            {availabilityType.map((value, index) => (
                              <option value={value.value}>{value.label}</option>
                            ))}
                          </select>
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Shift
                            </label>
                          )}
                          {/* <Select
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
                          /> */}
                          <select
                            value={availability[index].shift}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.shift = e.target.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}>
                            <option value={0} disabled>
                              Select shift
                            </option>
                            {shift.map((value, index) => (
                              <option value={value.value}>{value.label}</option>
                            ))}
                          </select>
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              Start Time
                            </label>
                          )}
                          {/* <Select
                            className="user-drop"
                            options={time}
                            maxMenuHeight={150}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.startTime = e.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}
                            placeholder="Start time"
                          /> */}
                          <select
                            value={availability[index].startTime}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              newVote.startTime = e.target.value;
                              newClicks[index] = newVote;
                              setAvailability(newClicks);
                            }}>
                            <option value={0} disabled>
                              Start Time
                            </option>
                            {time.map((value, index) => (
                              <option value={value.value}>{value.label}</option>
                            ))}
                          </select>
                        </Grid>
                        <Grid item xs={12} sm={3} className="text-center">
                          {index === 0 && (
                            <label className="font-weight-bold mb-1">
                              End Time
                            </label>
                          )}
                          {/* <Select
                            className="user-drop"
                            options={time}
                            maxMenuHeight={150}
                            value={endTime}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              if (
                                !!newVote.startTime &&
                                e.value > newVote.startTime
                              ) {
                                newVote.endTime = e.value;
                                newClicks[index] = newVote;
                                setAvailability(newClicks);
                                setEndTime(e.label);
                              } else {
                                toast.dismiss();
                                toast.error(
                                  'End time should be greater then Start time'
                                );
                              }
                            }}
                            placeholder="End time"
                          /> */}
                          <select
                            value={availability[index].endTime}
                            onChange={(e) => {
                              const newClicks = [...availability];
                              let newVote = { ...newClicks[index] };
                              if (
                                !!newVote.startTime &&
                                e.target.value > newVote.startTime
                              ) {
                                newVote.endTime = e.target.value;
                                newClicks[index] = newVote;
                                setAvailability(newClicks);
                                // setEndTime(e.label);
                              } else {
                                toast.dismiss();
                                toast.error(
                                  'End time should be greater then Start time'
                                );
                              }
                            }}>
                            <option value={0} disabled>
                              End Time
                            </option>
                            {time.map((value, index) => (
                              <option value={value.value}>{value.label}</option>
                            ))}
                          </select>
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
