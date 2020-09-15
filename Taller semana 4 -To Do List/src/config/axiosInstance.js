import axios from 'axios';

const instance = axios.create({ baseURL: "https://backtodoreact.herokuapp.com/todos" });
// const instance = axios.create({ baseURL: "http://localhost:8080/todos" });
export default instance;