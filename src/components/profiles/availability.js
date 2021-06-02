import React, { useState } from 'react';

import { Menu, Button, Grid, ButtonGroup, MenuItem } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import api from '../../api';
import { getCurrentUser } from '../../helper';
import { toast } from 'react-toastify';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function OnlineAndAvailability() {
  const [currentUser] = useState(getCurrentUser());
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState(
    currentUser.online === true ? 'Online' : 'Offline'
  );
  const [availability, setAvailability] = useState(
    currentUser.availability === 'available_from'
      ? currentUser.available_date
      : currentUser.availability
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if (event.target.innerText) {
      let online = event.target.innerText === 'Online' ? true : false;
      updateUserAvailability('', '', online);
    }
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = (event) => {
    setAnchorEl1(null);
    if (event && event.target.innerText) {
      updateUserAvailability(event.target.innerText, '', '');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      updateUserAvailability('', date, '');
    }
    handleClose1();
  };

  const updateUserAvailability = (event, date, online) => {
    let obj;
    if (event || date) {
      obj = {
        availability: event ? event : 'available_from',
        available_from: date
      };
    } else {
      obj = {
        online: online
      };
    }
    api.put(`/api/v1/users/${currentUser.id}`, obj).then(
      (response) => {
        toast.dismiss();
        if (response.data.success) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          toast.success(response.data.message);
          let online =
            response.data.user.online === true ? 'Online' : 'Offline';
          let availability =
            response.data.user.availability === 'available_from'
              ? response.data.user.available_date
              : response.data.user.availability;
          setOnlineStatus(online);
          setAvailability(availability);
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

  return (
    <div className="profile-btn">
      <ButtonGroup
        variant="contained"
        className="btn-second btn-profile mr-1"
        size="small"
        aria-label="button">
        <Button
          className="btn-transition-none p-1"
          style={
            onlineStatus === 'Offline'
              ? { backgroundColor: 'red' }
              : { backgroundColor: 'green' }
          }>
          {onlineStatus}
        </Button>
        <Button
          className="btn-transition-none p-0"
          style={
            onlineStatus === 'Offline'
              ? { backgroundColor: 'red' }
              : { backgroundColor: 'green' }
          }
          size="small"
          aria-haspopup="true"
          onClick={handleClick}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Menu
        id="simple-menu2"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        classes={{ list: 'p-0' }}>
        {onlineStatus === 'Offline' && (
          <MenuItem
            className="text-dark b-login-btn"
            style={{ backgroundColor: 'green' }}
            onClick={handleClose}>
            Online
          </MenuItem>
        )}
        {onlineStatus === 'Online' && (
          <MenuItem
            className="text-dark b-login-btn"
            style={{ backgroundColor: 'red' }}
            onClick={handleClose}>
            Offline
          </MenuItem>
        )}
      </Menu>

      <ButtonGroup
        variant="contained"
        className="btn-second btn-profile"
        color="dangler"
        size="small"
        aria-label="button">
        <Button className="btn-transition-none nowrap p-2 light-blue">
          Availability: {availability}
        </Button>
        <Button
          className="btn-transition-none light-blue"
          color="dangler"
          size="small"
          aria-haspopup="true"
          onClick={handleClick1}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Menu
        id="simple-menu2"
        anchorEl={anchorEl1}
        keepMounted
        open={Boolean(anchorEl1)}
        onClose={handleClose1}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{
          style: {
            width: 250
          }
        }}
        classes={{ list: 'p-0' }}>
        <div className="p-0">
          <MenuItem
            className="text-dark font-10 list-profile-available"
            onClick={handleClose1}>
            Immediately
          </MenuItem>
          <MenuItem
            className="text-dark font-10 pt-0 list-profile-available"
            onClick={handleClose1}>
            Unavailable
          </MenuItem>
          <MenuItem className="text-dark font-10 pt-0 list-profile-available">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6}>
                <span>Available from</span>
              </Grid>
              <Grid item xs={12} sm={6} className="date-picker">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disablePast
                    disableToolbar
                    variant="inline"
                    format="dd/MM/yyyy"
                    // margin="normal"
                    id="date-picker-inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    autoOk={true}
                    KeyboardButtonProps={{
                      'aria-label': 'change date'
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
