
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


const SurveyContainer = ({ surveyProps }) => {

    return (
        <Box paddingTop={20}>
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {survey && survey.map((el, index) => {

                    return (
                        <SwiperSlide key={index}><Survey questionProps={el} /></SwiperSlide>
                    )
                })}
            </Swiper> */}
            hello
        </Box>
    )
}

export default SurveyContainer