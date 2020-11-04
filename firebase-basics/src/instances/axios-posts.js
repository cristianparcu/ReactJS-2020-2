import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-react-app-sabana1.firebaseio.com/'
});

export default instance;
