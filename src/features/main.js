
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../component/home'
import { fetchRefreshToken } from './login/loginSlice'
import { tokenExpried } from './login/refreshToken'
import Login from './login/signIn'
import SignUp from './signUp/signUp'
import SurveyContainer from './survey/surveyContainer'
<<<<<<< HEAD
import { total } from './survey/surveySlice'
=======
import { fetchGetSurvey } from './survey/surveySlice'
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
import Total from './survey/totalScore'

const Main = () => {
    // const { data } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const survey = useSelector(state => state.survey.survey)
    const result = useSelector(state => state.survey.result)

    useEffect(() => {
        const accesstoken = JSON.parse(localStorage.getItem('accesstoken'))
        if (accesstoken?.access.token) {
            tokenExpried(accesstoken.access.token, () => {
                dispatch(fetchRefreshToken({ refreshToken: accesstoken.refresh.token }))
            })
        }
    }, [])

    const totalScore = result.reduce((acc, curr) => {
        if (curr[0].result === true) {
            acc++
            console.log(acc)
        }
        return acc
    }, 0)

    useEffect(() => {
        if (result.length === survey.length && survey.length !== 0) {
            dispatch(total({ totalScore }))
            navigate('/survey/total')
        }
    }, [result])
    return (
<<<<<<< HEAD
        <Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route exacth path="/signup" element={<SignUp />} />
                <Route exacth path="/survey" element={<SurveyContainer surveyProps={survey} />} />
                <Route exacth path="/survey/total" element={<Total />} />
            </Routes>
        </Box>
=======
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route exacth path="/signup" element={<SignUp />} />
                    <Route exacth path="/survey" element={<SurveyContainer />} />
                    <Route exacth path="/survey/total" element={<Total />} />
                </Routes>
            </BrowserRouter>
        </>
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
    )
}

export default Main
