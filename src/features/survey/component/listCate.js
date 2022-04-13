

import { Box, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchGetCategory, fetchGetSurveyOfCate } from '../surveySlice';

const ListCate = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchGetCategory())
    }, [])
    const handleClick = (cateName) => {
        dispatch(fetchGetSurveyOfCate(cateName))
        navigate('/survey/detail')
    }
    const { category, surveyOfCate, assignment } = useSelector((state) => state.survey)


    return (
        <Container>
            <Box display='flex' justifyContent='space-between' alignItems='center' paddingTop={20}>
                {category && category.map((el) => {
                    return <Card key={el.id} sx={{ width: "150px", height: '100px', border: '1px solid gray', }} onClick={() => handleClick(el.name)}>
                        <CardContent sx={{ width: '100%', padding: '0 !important', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
                            <Typography>
                                {el.name}
                            </Typography>
                        </CardContent>
                    </Card>
                })}
            </Box >
        </Container>
    )
}

export default ListCate