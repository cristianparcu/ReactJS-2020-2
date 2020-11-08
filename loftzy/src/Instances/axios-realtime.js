import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://veci-48762.firebaseio.com/'
});

export default instance;