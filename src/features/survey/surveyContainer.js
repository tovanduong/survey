
import { Box } from '@mui/material';
import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCate from './component/listCate';


import { fetchGetCategory, fetchGetSurvey } from './surveySlice';


const SurveyContainer = () => {
    const dispatch = useDispatch()
    const { category, survey } = useSelector((state) => state.survey)
    useEffect(() => {
        dispatch(fetchGetSurvey())

    }, [])
    useEffect(() => {
        dispatch(fetchGetCategory())
    }, [])

    console.log(category)
    return (
        <Box paddingTop={20}>
            <ListCate categoryProps={category} surveyProps={survey} />
        </Box>
    )
}

export default SurveyContainer