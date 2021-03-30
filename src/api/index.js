import axios from 'axios';

var BASE_URL = '';
var setupAPI = function () {
  console.log('process.env.REACT_APP_STAGE', process.env.REACT_APP_STAGE);
  switch (process.env.REACT_APP_STAGE) {
    case 'production':
      BASE_URL = 'http://54.203.142.83/';
      break;
    case 'staging':
      BASE_URL = 'http://54.203.142.83/';
      break;
    case 'development':
      BASE_URL = 'http://localhost:3001/';
      break;
    default:
      BASE_URL = 'https://d5d99e78af1a.ngrok.io/';
      break;
  }
};

setupAPI();

export default axios.create({
  baseURL: BASE_URL // LOCAL
  // timeout: 10000,
  // headers: {
  //    'Content-Type': 'application/json',
  //    'Accept': 'application/json',
  //    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOjE1NDk4Nzk3NTkxNjAsInVwZGF0ZWRBdCI6MTU0OTg3OTc2MDIwNiwiaWQiOiI1YzYxNDljZjA4OGZhZjRiNGQwNDhhZjYiLCJ1c2VybmFtZSI6InRlc3RhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJHpRUWx0cUpaNDYxUzIvWnQ3ZVg0MU9iWWJZWm9ZaGNmVUNmWUZLbnZla3RiMWpzTXI4NDJTIiwiZW1haWwiOiJ0ZXN0YWRtaW5AdGVzdC5jb20iLCJyb2xlIjoiNWM2MTQ0OTk5YjRmYTM0NGI3ODlhZjgwIiwicHJvZmlsZSI6IjVjNjE0OWQwMDg4ZmFmNGI0ZDA0OGFmYiIsImlhdCI6MTU1MDAzOTgzMCwiZXhwIjoxNTUwMTI2MjMwfQ.hYUX4gZoH4H0ukmxNhWyyN_HVmyWWk1MiI5tZNmLX7U',
  //    'UserType': 'admin'
  //  },
});
