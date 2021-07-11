import axios from 'axios.js'

const instance = axios.create({
    baseURL: 'https://barkster.herokuapp.com/',
});

export default instance;