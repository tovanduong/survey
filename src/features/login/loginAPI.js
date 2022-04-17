import axiosClient from '../../common/API/axiosClient';

export function postLogin({ password, username }) {
    return axiosClient.post('/auth/login', {
        password,
        username
    })
        .then(res => {
            localStorage.setItem('accesstoken', 'login')
            return res.data
        })
        .catch(err => err)
}


export function postLogout() {
    return axiosClient.post('/auth/logout')
        .then(res => {
            localStorage.removeItem('accesstoken')
            return res.data
        })
        .catch(err => err)
}