import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/deividalexander/user_test'

    
});

export default instance;