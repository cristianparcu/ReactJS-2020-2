import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sabana-reactjs-2020-2.firebaseio.com/'
});

export default instance;
