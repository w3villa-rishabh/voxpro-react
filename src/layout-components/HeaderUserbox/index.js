import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Badge,
  Menu,
  Button,
  List,
  ListItem,
  Divider
} from '@material-ui/core';

import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import { withStyles } from '@material-ui/core/styles';
import { getCurrentUser } from '../../helper';

const StyledBadge = withStyles({
  badge: {
    backgroundColor: 'var(--success)',
    color: 'var(--success)',
    boxShadow: '0 0 0 2px #fff',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
})(Badge);

const HeaderUserbox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentUser] = useState(getCurrentUser());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function userLogout() {
    // api.delete('/api/users/sign_out').then((response) => {
    //   if(response.data.success){
    localStorage.clear();
    window.location.href = '/login';
    // }else{
    //   alert('Something went wrong..')
    // }
    // });
  }

  return (
    <>
      <Button
        variant="text"
        onClick={handleClick}
        className="ml-2 btn-transition-none text-left ml-2 p-0 bg-transparent d-flex align-items-center"
        disableRipple>
        <div className="d-block p-0 avatar-icon-wrapper">
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            badgeContent=" "
            classes={{ badge: 'bg-success badge-circle border-0' }}
            variant="dot">
            <div className="avatar-icon rounded">
              <img src={avatar7} alt="..." />
            </div>
          </StyledBadge>
        </div>

        <div className="d-none d-xl-block pl-2">
          <div className="font-weight-bold pt-2 line-height-1">
            {currentUser.first_name}
          </div>
          <span className="text-black-50">{currentUser.role}</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(anchorEl)}
        classes={{ list: 'p-0' }}
        onClose={handleClose}>
        <div className="dropdown-menu-lg overflow-hidden">
          <div className="align-items-center justify-content-between">
            {/* <Typography className="text-capitalize pl-1 font-weight-bold text-primary">
              <span>Profile Options</span>
            </Typography> */}
            {/* <div className="font-size-xs pr-1">
              <Tooltip title="Change settings" arrow>
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  <FontAwesomeIcon icon={['fas', 'plus-circle']} />
                </a>
              </Tooltip>
            </div> */}
          </div>
          <List
            component="div"
            className="nav-neutral-primary text-left d-flex align-items-center flex-column">
            <ListItem button className="d-block text-left" onClick={userLogout}>
              Logout
            </ListItem>

            {/* <ListItem button className="d-block text-left">
              Active tasks
            </ListItem> */}
          </List>
          <Divider className="w-100" />
          {/* <div className="d-flex py-3 justify-content-center">
            <div className="d-flex align-items-center">
              <div>
                <FontAwesomeIcon
                  icon={['far', 'chart-bar']}
                  className="font-size-xxl text-info"
                />
              </div>
              <div className="pl-3 line-height-sm">
                <b className="font-size-lg">$9,693</b>
                <span className="text-black-50 d-block">revenue</span>
              </div>
            </div>
          </div> */}
          <Divider className="w-100" />
          {/* <div className="d-block rounded-bottom py-3 text-center">
            <Tooltip arrow title="Facebook">
              <Button
                size="large"
                className="btn-facebook p-0 d-40 font-size-lg text-white">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </span>
              </Button>
            </Tooltip>
            <Tooltip arrow title="Dribbble">
              <Button
                size="large"
                className="btn-dribbble p-0 d-40 font-size-lg text-white mx-2">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'dribbble']} />
                </span>
              </Button>
            </Tooltip>
            <Tooltip arrow title="Twitter">
              <Button
                size="large"
                className="btn-twitter p-0 d-40 font-size-lg text-white">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </span>
              </Button>
            </Tooltip>
          </div> */}
        </div>
      </Menu>
    </>
  );
};

export default HeaderUserbox;
