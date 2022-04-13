

import { Card, CardContent, Container } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPostAssignment } from '../surveySlice'

const SurveyOfCate = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const { surveyOfCate } = useSelector(state => state.survey)

    const handleClick = (surveyId) => {
        console.log(surveyId)
        dispatch(fetchPostAssignment(surveyId))
        navigate('/survey/assignment')
    }
    return (
        <Container>
            <Box display='flex' justifyContent='space-between' alignItems='center' paddingTop={20}>
                {surveyOfCate && surveyOfCate.map((el) => {
                    return <Card key={el.id} sx={{ width: "150px", height: '100px', border: '1px solid gray', }} onClick={() => handleClick(el.id)}>
                        <CardContent sx={{ width: '100%', padding: '0 !important', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <Typography>
                                {el.name}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Box>
        </Container>
    )
}

export default SurveyOfCate