import React, { useState } from 'react';

import { Menu, Button, Grid, ButtonGroup, MenuItem } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function OnlineAndAvailability() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState('Online');
  const [availability, setAvailability] = useState('Immediate');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if (event.target.innerText) {
      setOnlineStatus(event.target.innerText);
    }
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = (event) => {
    setAnchorEl1(null);
    if (event && event.target.innerText) {
      setAvailability(event.target.innerText);
      // childRef.current.showAlert();
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setAvailability(date.toLocaleDateString());
    }
    handleClose1();
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
