import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    // const token = "Kolimiligaya";
    // config.headers.Authorization = `Bearer ${token}`;
    // console.log(config);
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // console.log(response);
    return response;
}, function (error) {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location = '/';
    }
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render(<BrowserRouter> <App /></BrowserRouter> , document.getElementById( 'root' ) );
registerServiceWorker();
