
import swal from "sweetalert";
import axiosClient from "../../common/API/axiosClient";


export function postSignUp({ email, password, username }) {
    return axiosClient.post('v1/auth/register', {
        email,
        password,
        username
    })
        .then(res => {
            swal(swal({
                title: "Sign Up Success!",
                icon: "success",
            }))
            return res
        })
        .catch(err => swal({
            title: err.response.data.message,
            icon: 'error'
        }))
}