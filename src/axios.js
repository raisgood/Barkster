import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://barkster.herokuapp.com/',
});

export default instance;