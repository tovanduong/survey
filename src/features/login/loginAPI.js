import axiosClient from '../../common/API/axiosClient';
import swal from 'sweetalert';

export function postLogin({ password, username }) {
    console.log({ password, username })
    return axiosClient.post('v1/auth/login', {
        password,
        username
    })
        .then(res => {
            const { user, tokens } = res
            localStorage.setItem('accesstoken', JSON.stringify(tokens))
            return res
        })
        .catch(err =>
            swal({
                title: err.response.data.message,
                icon: 'error'
            }))
}

export function postRefreshtoken({ refreshToken }) {
    return axiosClient.post('v1/auth/refresh-tokens', {
        refreshToken
    })
        .then(res => {
            // const { tokens } = res
            localStorage.setItem('accesstoken', JSON.stringify(res))
            return res
        })
        .catch(err => err)
}

export function postLogout({ refreshToken }) {
    return axiosClient.post('v1/auth/logout', {
        refreshToken
    })
        .then(res => {
            localStorage.removeItem('accesstoken')
            return res
        })
        .catch(err => err)
}