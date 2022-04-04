
import { Box } from '@mui/material';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Survey from './survey';
import "./survey.css";
import { fetchGetSurvey, total } from './surveySlice';


const SurveyContainer = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGetSurvey())
    }, [])
    const survey = useSelector(state => state.survey.survey)
    const result = useSelector(state => state.survey.result)

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
        <Box paddingTop={20}>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {survey && survey.map((el, index) => {

                    return (
                        <SwiperSlide key={index}><Survey questionProps={el} /></SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default SurveyContainer