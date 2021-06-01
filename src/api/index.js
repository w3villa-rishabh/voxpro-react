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
      BASE_URL = 'https://87d9584b5250.ngrok.io/';
      break;
    default:
      BASE_URL = 'https://d5d99e78af1a.ngrok.io/';
      break;
  }
};

setupAPI();

const fetchClient = () => {
  const defaultOptions = {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  instance.interceptors.response.use(
    function (successRes) {
      return successRes;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const isLoggedIn = JSON.parse(localStorage.getItem('user')) ? true : false;
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (isLoggedIn) {
      config.headers.Authorization = token ? `Bearer ${token}` : `Bearer ''`;
      config.headers.UserID = user.id;
    }

    return config;
  });

  return instance;
};

export default fetchClient();
