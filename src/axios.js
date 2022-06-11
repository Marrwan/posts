import axios  from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(function (config) {
    console.log(config);
    return config;
}
, function (error) {
    console.log(error);
    return Promise.reject(error);
}
);

export default instance;