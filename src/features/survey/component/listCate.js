

import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useColor from '../../../hook/useColor';
import { fetchGetCategory, fetchGetSurveyOfCate } from '../surveySlice';

const ListCate = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const color = useColor()

    useEffect(() => {
        dispatch(fetchGetCategory())
    }, [])

    const handleClick = (cateName) => {
        dispatch(fetchGetSurveyOfCate(cateName))
        navigate('/survey/detail')
    }
    const { category } = useSelector((state) => state.survey)

    return (
        <Box sx={{ backgroundImage: "url('./assets/image/background-login.png')", backgroundSize: '100% 100vh', backgroundRepeat: 'no-repeat', minHeight: '100vh' }} padding='0 80px'>
            <Typography paddingTop={20} color='#000' variant='h3'>Choose the Category</Typography>
            <Box display='flex' alignItems='center' paddingTop={8} flexWrap='wrap'>
                {category && category.map((el) => {
                    return <Card className='Card-contain' key={el.id} sx={{ border: '1px solid gray', cursor: 'pointer' }} onClick={() => handleClick(el.name)}>
                        <CardContent sx={{ width: '100%', padding: '0 !important', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <Typography fontSize={30} >
                                {el.name}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Box >
        </Box>
    )
}

export default ListCate