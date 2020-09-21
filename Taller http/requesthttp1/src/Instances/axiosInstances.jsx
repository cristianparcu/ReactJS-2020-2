import axios from 'axios';

const instance = axios.create(
    {
        baseURL: "https://my-json-server.typicode.com/estebanmz1342/json/db"
    }
)

export default instance;