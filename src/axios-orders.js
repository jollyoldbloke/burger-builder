import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://luf-burger-builder.firebaseio.com'
});

export default instance;