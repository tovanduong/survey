

import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../../common/API/axiosClient'
import { resetSurvey } from '../surveySlice'

const ResultAssignment = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { assignmentSubmit } = useSelector(state => state.survey)
    console.log(assignmentSubmit)

    const handleClick = () => {
        dispatch(resetSurvey())
        navigate('/')
    }

    return (
        <Box sx={{ padding: '180px' }}>
            <Typography variant='h2' mb={5}>Total Score: {assignmentSubmit.pointSurvey}</Typography>
            <Button onClick={handleClick}>Test Again</Button>
        </Box>
    )
}

export default ResultAssignment