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
  return moment(date).format('MM-DD-YYYY');
}
