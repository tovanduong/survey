

<<<<<<< HEAD
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Survey from './survey';
import "./survey.css";
import { fetchGetSurvey } from './surveySlice';

const SurveyContainer = ({ surveyProps }) => {

    const dispatch = useDispatch()
    useEffect(() => {
        console.log('mount')
        dispatch(fetchGetSurvey())
    }, [])

    return (
        <Box sx={{ paddingTop: '200px' }}>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {surveyProps && surveyProps.map((el, index) => {
=======
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Survey from './survey'
import { fetchGetSurvey, total } from './surveySlice'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./survey.css";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const SurveyContainer = () => {


    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetSurvey())
    }, [])
    const survey = useSelector(state => state.survey.survey)
    const result = useSelector(state => state.survey.result)
    console.log(result)

    const totalScore = result.reduce((acc, curr) => {
        if (curr[0].result === true) {
            acc++
            console.log(acc)
        }
        return acc
    }, 0)

    console.log(totalScore)
    useEffect(() => {
        if (result.length === survey.length && survey.length !== 0) {
            dispatch(total({ totalScore }))
            navigate('/survey/total')
        }
    }, [result])

    return (
        <Box>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {survey && survey.map((el, index) => {
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
                    return (
                        <SwiperSlide key={index}><Survey questionProps={el} /></SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default SurveyContainer