import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-react-11d6c.firebaseio.com/'
});

export default instance;
