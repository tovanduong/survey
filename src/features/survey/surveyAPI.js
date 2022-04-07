import axiosClient from '../../common/API/axiosClient';

export function getSurvey() {
    return axiosClient.get('/survey')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err))
}

// export function postSubmitAnswer([{ id, correctanswer }]) {
//     return axiosClient.post('v1/questions/submit', [{ id, correctanswer }])
//         .then(res => {
//             console.log(res)
//             return res
//         })
//         .catch(err => console.log(err))
// }
