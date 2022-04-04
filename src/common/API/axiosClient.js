import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://fwa-ec-quiz.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    }
})


axiosClient.interceptors.request.use(async function (config) {

    let token = localStorage.getItem('accesstoken') ? JSON.parse(localStorage.getItem('accesstoken')) : null
    // Do something before request is sent
    if (token) {
        config.headers.Authorization = `Bearer ${token?.access.token}`
        return config
    }

    return config;

}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient