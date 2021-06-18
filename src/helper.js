import React from 'react';
import moment from 'moment';

export function getCurrentUser() {
  let data = localStorage.getItem('user');
  let userData = data ? JSON.parse(data) : {};
  if (!data) {
    window.location.href = '/login';
  }
  return userData;
}

export function convertDate(date) {
  return moment(date).format('DD-MM-YYYY');
}

export function validEmailRegex(email) {
  return new RegExp(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ).test(email);
}

export function SmartText({ text, length = 500 }) {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {showLess ? `${text.slice(0, length)}...` : text}{' '}
        <a
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setShowLess(!showLess)}>
          &nbsp;See {showLess ? 'More' : 'Less'}
        </a>
      </p>
    </div>
  );
}
