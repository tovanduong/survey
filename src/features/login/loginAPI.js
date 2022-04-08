import axiosClient from '../../common/API/axiosClient';
import swal from 'sweetalert';

export function postLogin({ password, username }) {
    return axiosClient.post('/auth/login', {
        password,
        username
    })
        .then(res => {
            // const { user, tokens } = res
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