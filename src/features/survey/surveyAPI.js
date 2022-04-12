import axiosClient from '../../common/API/axiosClient';

export function getSurvey() {
    return axiosClient.get('/survey')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}

export function getCate() {
    return axiosClient.get('/category')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}
