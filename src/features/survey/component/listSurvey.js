

import { Box, Card, CardContent, Container, Typography } from '@mui/material'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useColor from '../../../hook/useColor'
import { fetchPostAssignment } from '../surveySlice'

const SurveyOfCate = () => {
    const dispatch = useDispatch()
    const color = useColor()
    let navigate = useNavigate()
    const { surveyOfCate } = useSelector(state => state.survey)

    const handleClick = (surveyId) => {
        dispatch(fetchPostAssignment(surveyId))
        navigate('/survey/assignment')
    }

    return (
        <Box sx={{ backgroundImage: "url('./assets/image/background-login.png')", backgroundSize: '100% 100vh', backgroundRepeat: 'no-repeat', minHeight: '100vh' }} padding='0 80px'>
            <Typography paddingTop={20} variant='h3'>Choose the Category</Typography>
            <Box display='flex' alignItems='center' paddingTop={8} flexWrap='wrap'>
                {surveyOfCate && surveyOfCate.map((el) => {
                    return <Card className='Card-contain' key={el.id} onClick={() => handleClick(el.id)}>
                        <CardContent sx={{ width: '100%', padding: '0 !important', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <Typography color='#000' fontSize={30}>
                                {el.name}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Box>
        </Box>
    )
}

export default SurveyOfCate