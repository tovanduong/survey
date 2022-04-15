import axiosClient from '../../../common/API/axiosClient';

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

export function postAssignment(surveyId) {
    return axiosClient.post('/assignment',
        { surveyId }
    )
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}


export function getSurveyOfCate(cate) {
    return axiosClient.get(`/survey?category=${cate}`)
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}

export function postSubmit(payload) {
    console.log(payload)
    return axiosClient.post(`/assignment/${payload.id}/submit`,
        {
            data: payload.data
        }
    )
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}