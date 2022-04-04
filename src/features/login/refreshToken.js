import jwt_decode from "jwt-decode";

export const tokenExpried = (accessToken, callback) => {
    let timeExpired
    window.clearTimeout(timeExpired)
    const currentTime = Date.now()
    const { exp } = jwt_decode(accessToken)
    const timeLeft = exp * 1000 - currentTime
<<<<<<< HEAD
    console.log('timeLeft', timeLeft)
=======
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
    timeExpired = window.setTimeout(() => {
        console.log('timeExpired')
        callback()
    }, timeLeft);
}