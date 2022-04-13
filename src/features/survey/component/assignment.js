

import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import '../survey.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import ListAnswer from './listAnswer';
import Loading from '../../../component/loading';


const Assignment = () => {
    const survey = useSelector(state => state.survey)

    if (survey.loading) {
        return <Loading />
    } else
        return (
            <Container>
                <Box padding={20}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {survey.assignment && survey.assignment.survey.questions.map((el) => {
                            return <SwiperSlide key={el.id} style={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography>{el.name}</Typography> <br />
                                    <ListAnswer answerProps={el.answers} />
                                    <Box>
                                        <Button>Skip</Button>
                                        <Button>Save</Button>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                        })}
                    </Swiper>
                </Box>
            </Container>
        )
}

export default Assignment