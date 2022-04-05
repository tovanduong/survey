
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Header from '../component/header'
import Home from '../component/home'
import Dashboard from './admin/admin'
import { fetchRefreshToken } from './login/loginSlice'
import { tokenExpried } from './login/refreshToken'
import Login from './login/signIn'
import SignUp from './signUp/signUp'
import SurveyContainer from './survey/surveyContainer'
import { total } from './survey/surveySlice'
import { fetchGetSurvey } from './survey/surveySlice'
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
        <Box>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route exacth path="/signup" element={<SignUp />} />
                <Route exacth path="/survey" element={<SurveyContainer surveyProps={survey} />} />
                <Route exacth path="/survey/total" element={<Total />} />
                <Route exacth path="/admin/*" element={<Dashboard />} />
            </Routes>
        </Box>
    )
}

export default Main
