import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})


axiosClient.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 || error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            await axios({
                method: 'GET',
                url: `http://localhost:3000/auth/refresh`,
                withCredentials: true
            });
            return axiosClient(originalRequest);
        } catch (e) {
            console.log(e);
        }

    }
    return Promise.reject(error);
});

export default axiosClient