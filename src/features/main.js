
import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../component/header'
import Home from '../component/home'
import Dashboard from './admin/admin'
import Login from './login/signIn'
import SignUp from './signUp/signUp'
import SurveyContainer from './survey/surveyContainer'

const Main = () => {

    return (
        <Box>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route exacth path="/signup" element={<SignUp />} />
                <Route exacth path="/survey" element={<SurveyContainer />} />
                <Route exacth path="/admin/*" element={<Dashboard />} />
            </Routes>
        </Box>
    )
}

export default Main
