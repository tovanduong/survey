import axiosClient from "./axiosClient";

export function getUser() {
    return axiosClient.get('/user')
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}


export function postUser({ username, password }) {
    return axiosClient.post('/user',
        { username, password }
    )
        .then((res) => {
            return res.data;
        })
        .catch((err) => err
        );
}