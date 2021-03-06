/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';

import {
  Button,
  Dialog,
  Grid,
  Card,
  Checkbox,
  TextField,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormControlLabel
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddsComponents from 'components/add_component';
import { getCurrentUser } from '../../helper';
import api from '../../api';

import { toast } from 'react-toastify';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { availabilityType, shift } from '../../constants'; //import from your constants.js
import { useEffect } from 'react';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
  const [currentUser] = useState(getCurrentUser());
  const [filterApplied, setFilterApplied] = useState([
    { name: 'Full time', checked: true },
    { name: 'Permanent', checked: true },
    { name: 'Contract', checked: true },
    { name: 'Part time', checked: true },
    { name: 'Internship', checked: false },
    { name: 'Temporary', checked: true }
  ]);

  const [filterAppliedWeek, setFilterAppliedWeek] = useState([
    { name: 'Weekdays', checked: false },
    { name: 'Weekends', checked: false },
    { name: 'Full day', checked: false },
    { name: 'AM', checked: false },
    { name: 'PM', checked: false },
    { name: 'Evenings', checked: false },
    { name: 'Nights', checked: false }
  ]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    api.get('/api/v1/tasks').then(
      (response) => {
        if (response.data.success) {
          console.log('response.data', response.data);
          updateCalendarEvent(response.data.task);
        } else {
          toast.error(response.data.message);
        }
      },
      (error) => {
        toast.error('Something went wrong');
        console.error(error);
      }
    );
  };

  const updateCalendarEvent = (data) => {
    const events = [];
    data.map((value) => {
      var newEvent = {
        id: value.id,
        task_id: value.task_id,
        start: value.date,
        end: value.date,
        // start: new Date(
        //   value.start_date.getFullYear(),
        //   value.start_date.getMonth(),
        //   value.start_date.getDate(),
        //   17,
        //   0,
        //   0,
        //   0
        // ),
        // end: new Date(
        //   value.end_date.getFullYear(),
        //   value.end_date.getMonth(),
        //   value.end_date.getDate(),
        //   17,
        //   30,
        //   0,
        //   0
        // ),
        title: value.task_type,
        desc: 'Big conference for important people',
        duration: '02:00',
        borderColor: 'white',
        backgroundColor: 'pink',
        display: 'background'
      };
      // YearView, month, date, hh, mm, ss,ss,z
      // start: new Date(2015, 3, 12, 17, 0, 0, 0),
      // end: new Date(2015, 3, 12, 17, 30, 0, 0),
      events.push(newEvent);
    });
    setEventsList([...events]);
  };

  const addMoreRow = () => {
    availabilityObj.startDate = picDate;
    availabilityObj.type = 2;
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
    setOpenCalendar(false);
    setOpenCalendarUpdate(false);
  };

  //Example 2
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendarUpdate, setOpenCalendarUpdate] = useState(false);

  const handleCloseCalendar = () => {
    setOpenCalendar(false);
    setOpenCalendarUpdate(false);
  };

  function handleSelect({ start, end }) {
    console.log('start, end', start, end);
    if (!openCalendar) {
      setOpenCalendar(true);
      setPicDate(start);

      const newClicks = [...availability];
      let fist = { ...newClicks[0] };
      // let second = { ...newClicks[1] };

      fist.startDate = start;
      fist.type = 1;
      newClicks[0] = fist;

      // second.startDate = start;
      // second.type = 2;
      // newClicks[1] = second;

      setAvailability(newClicks);
    }
  }

  let editInfo = (e) => {
    e.preventDefault();
  };

  const selectEvent = (event) => {
    console.log('select event', event);
    setOpenCalendarUpdate(true);
    setAvailability([
      {
        startDate: new Date(event.start),
        endDate: new Date(event.end),
        type: event.title === 'Available for Interview' ? 1 : 2,
        other: event.title,
        id: event.id,
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
      }
    ]);
  };

  const createAvailability = (e) => {
    e.preventDefault();
    console.log('availability', availability);
    let isDo = true;
    availability.map((value) => {
      if (value.type && value.endDate) {
        console.log('calender active');
      } else {
        isDo = false;
        toast.dismiss();
        toast.error('End Date id required, Please select required..');
      }
    });

    if (isDo) {
      api.post('/api/v1/tasks', { task: availability }).then(
        (response) => {
          toast.success(response.data.message);
          if (response.data.success) {
            console.log('response', response.data);
            setOpenCalendar(false);
          }
        },
        (error) => {
          toast.error('Something went wrong');
          console.error('error', error);
        }
      );
    }
  };

  const updateAvailability = () => {
    confirmAlert({
      title: 'Confirm to update',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Update',
          onClick: () => {
            console.log('availability', availability);
            let isDo = true;
            availability.map((value) => {
              if (value.type && value.endDate) {
                console.log('calender active');
              } else {
                isDo = false;
                toast.dismiss();
                toast.error('End Date id required, Please select required..');
              }
            });

            if (isDo) {
              api
                .put('/api/v1/tasks', {
                  task: availability
                })
                .then(
                  (response) => {
                    if (response.data.success) {
                      toast.success(response.data.message);
                      handleCloseCalendar();
                    } else {
                      toast.error(response.data.message);
                    }
                  },
                  (error) => {
                    toast.error('Something went wrong');
                    console.error('error', error);
                  }
                );
            }
          }
        },
        {
          label: 'Cancel',
          onClick: () => {
            console.log('not change');
            return;
          }
        }
      ],
      closeOnClickOutside: false,
      overlayClassName: 'alert-overlay-custom'
    });
  };

  const deleteTask = () => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Delete',
          onClick: () => {
            let id = availability[0].id;
            api
              .delete(`/api/v1/tasks/${id}/task_time_delete`)
              .then((response) => {
                if (response.data.success) {
                  toast.success(response.data.message);
                  getTask();
                  handleCloseCalendar();
                } else {
                  toast.error(response.data.message);
                }
              });
          }
        },
        {
          label: 'Cancel',
          onClick: () => {
            console.log('not change');
            return;
          }
        }
      ],
      closeOnClickOutside: false,
      overlayClassName: 'alert-overlay-custom'
    });
  };

  const updateAvailabilityToWeek = (update) => {
    api.put('/api/v1/users/add_available_to_work', update).then(
      (response) => {
        toast.success(response.data.message);
        if (response.data.success) {
          console.log('add_available_to_work update');
        }
      },
      (error) => {
        toast.error('Something went wrong');
        console.error(error);
      }
    );
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event);
    var backgroundColor;

    if (event.title === 'Unavailable') {
      backgroundColor = 'red';
    } else if (event.title === 'Available') {
      backgroundColor = 'green';
    } else {
      backgroundColor = '#' + event.hexColor;
    }

    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
      width: '100%'
    };
    return {
      style: style
    };
  };

  return (
    <>
      <div className="page-title">
        <BallotTwoToneIcon />
        <div className="title pt-3">
          <b className="heading">Availability Calendar</b>
        </div>
      </div>
      <Card className="p-3 mb-3">
        <b>Job types</b>
        <ul className="cards-filter">
          {filterApplied.map((filter, index) => (
            <li
              key={index}
              className="cards__item_calender pointer"
              style={{
                background: filter.checked ? 'green' : 'white',
                color: filter.checked ? 'white' : ''
              }}
              onClick={(e) => {
                e.preventDefault();
                let checked = !filter.checked;
                filterApplied[index].checked = checked;
                setFilterApplied([...filterApplied]);
                updateAvailabilityToWeek({
                  field: filter.name,
                  select: checked
                });
              }}>
              <div>
                <span>{filter.name}</span>
                <FontAwesomeIcon
                  className="ml-2 pt-1"
                  icon={filter.checked ? ['fas', 'check'] : ['fas', 'plus']}
                />
              </div>
            </li>
          ))}
        </ul>
        <ul className="cards-filter mt-2">
          {filterAppliedWeek.map((filter, index) => (
            <li key={index}>
              <div>
                <span>{filter.name}</span>
                <FormControlLabel
                  value="top"
                  checked={filter.checked}
                  control={<Checkbox color="primary" />}
                  labelPlacement="top"
                  onChange={(e) => {
                    filterAppliedWeek[index].checked = e.target.checked;
                    setFilterAppliedWeek([...filterAppliedWeek]);
                    updateAvailabilityToWeek({
                      field: filter.name,
                      select: e.target.checked
                    });
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <div className="app-inner-content-layout">
        <div className="app-inner-content-layout--main p-0">
          <Calendar
            defaultView="month"
            selectable
            onSelectEvent={selectEvent}
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
            eventPropGetter={eventStyleGetter}
          />
          {currentUser.role === 'candidate' && <AddsComponents />}
        </div>
      </div>

      {/* Calender add task dialog modal open */}
      <Dialog
        classes={{ paper: 'modal-content' }}
        scroll="body"
        maxWidth="lg"
        open={openCalendar}
        onClose={handleCloseCalendar}
        aria-labelledby="form-dialog-title2">
        <DialogTitle id="form-dialog-title">Create Availability</DialogTitle>

        <DialogContent className="p-0">
          <div>
            <div className="border-0">
              <div className="card-body mb-0">
                <form method="post" onSubmit={editInfo}>
                  <div className="mb-2">
                    <div>
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

                            {index < 1 ? (
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
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                type="text"
                                name="description"
                                style={{
                                  width: '172px'
                                }}
                                onChange={(e) => {
                                  const newClicks = [...availability];
                                  let newVote = { ...newClicks[index] };
                                  newVote.other = e.target.value;
                                  newClicks[index] = newVote;
                                  setAvailability(newClicks);
                                }}
                                placeholder="Enter description"
                              />
                            )}
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                Shift
                              </label>
                            )}

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
                                <option key={index} value={value.value}>
                                  {value.label}
                                </option>
                              ))}
                            </select>
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                Start Time
                              </label>
                            )}

                            <select
                              disabled={
                                availability[index].shift === 'Full Day'
                              }
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
                              {time
                                .filter(
                                  (f) => f.period === availability[index].shift
                                )
                                .map((value, index) => (
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
                                ))}
                            </select>
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                End Time
                              </label>
                            )}

                            <select
                              disabled={
                                availability[index].shift === 'Full Day'
                              }
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
                              {time
                                .filter(
                                  (f) => f.period === availability[index].shift
                                )
                                .map((value, index) => (
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
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
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        onClick={addMoreRow}
                        className="font-weight-bold btn-info px-4 my-1">
                        Add row
                      </Button>
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

      {/* Update Calender add task dialog modal open */}
      <Dialog
        classes={{ paper: 'modal-content' }}
        scroll="body"
        maxWidth="lg"
        open={openCalendarUpdate}
        onClose={handleCloseCalendar}
        aria-labelledby="form-dialog-title2">
        <DialogTitle id="form-dialog-title">Update Availability</DialogTitle>

        <DialogContent className="p-0">
          <div>
            <div className="border-0">
              <div className="card-body mb-0">
                <form method="post" onSubmit={editInfo}>
                  <div className="mb-2">
                    <div>
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

                            {value.type === 1 ? (
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
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <TextField
                                variant="outlined"
                                size="small"
                                fullWidth
                                type="text"
                                name="description"
                                value={value.other}
                                style={{
                                  width: '172px'
                                }}
                                onChange={(e) => {
                                  const newClicks = [...availability];
                                  let newVote = { ...newClicks[index] };
                                  newVote.other = e.target.value;
                                  newClicks[index] = newVote;
                                  setAvailability(newClicks);
                                }}
                                placeholder="Enter description"
                              />
                            )}
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                Shift
                              </label>
                            )}

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
                                <option key={index} value={value.value}>
                                  {value.label}
                                </option>
                              ))}
                            </select>
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                Start Time
                              </label>
                            )}

                            <select
                              disabled={
                                availability[index].shift === 'Full Day'
                              }
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
                              {time
                                .filter(
                                  (f) => f.period === availability[index].shift
                                )
                                .map((value, index) => (
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
                                ))}
                            </select>
                          </Grid>
                          <Grid item xs={12} sm={3} className="text-center">
                            {index === 0 && (
                              <label className="font-weight-bold mb-1">
                                End Time
                              </label>
                            )}

                            <select
                              disabled={
                                availability[index].shift === 'Full Day'
                              }
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
                              {time
                                .filter(
                                  (f) => f.period === availability[index].shift
                                )
                                .map((value, index) => (
                                  <option key={index} value={value.value}>
                                    {value.label}
                                  </option>
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
                          </Grid>
                        </Grid>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <DialogActions>
                      <Button
                        variant="contained"
                        onClick={updateAvailability}
                        className="font-weight-bold btn-second px-4 my-1">
                        Update
                      </Button>

                      <Button
                        variant="contained"
                        onClick={deleteTask}
                        className="font-weight-bold btn-second px-4 my-1">
                        Delete
                      </Button>

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
