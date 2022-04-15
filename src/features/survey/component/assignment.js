
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from '../../../component/loading';
import '../survey.css';
import { data, fetchPostSubmit } from '../surveySlice';
import ListAnswer from './listAnswer';

const Assignment = () => {
    const [end, setEnd] = useState(true)
    const [answer, setAnswer] = useState([])
    const survey = useSelector(state => state.survey)
    const { dataAssignment, assignment, } = useSelector(state => state.survey)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSave = (id) => {
        dispatch(data({
            questionId: id,
            userQuestionAnswers: answer
        }))
        setAnswer([])
    }
    // console.log(survey)
    const handleCheck = (index) => {

        if (index == (assignment.survey.questions.length - 1)) {
            setEnd(false)
        } else {
            !end && setEnd(true)
        }
    }
    const handleSubmit = () => {
        const value = {
            data: [...dataAssignment],
            id: assignment.id
        }
        dispatch(fetchPostSubmit(value))
        navigate('/survey/result')
    }

    const callbackFunction = (childData) => {
        let arr = []
        const newArr = answer.some((el) => {
            return el.choice_id == childData.choice_id
        })
        if (newArr) {
            arr = answer.filter((el) => {
                return el.choice_id !== childData.choice_id
            })
        }
        else {
            arr = [...answer, childData]
        }
        setAnswer(arr)
    }

    if (survey.loading) {
        return <Loading />
    } else
        return (
            <Container>
                <Box >
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ minHeight: '100vh !important' }} onRealIndexChange={({ activeIndex }) => handleCheck(activeIndex)}>
                        {survey.assignment && survey.assignment.survey.questions.map((el) => {
                            return <SwiperSlide key={el.id} style={{ display: 'flex', width: '100%' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '120px' }}>
                                    <Typography variant='h2' mb={5}>{el.name}</Typography> <br />
                                    <ListAnswer answerProps={el} propsData={callbackFunction} colorAnswer={answer} />
                                    <Box marginTop={30} marginBottom='15px'>
                                        <Button className='btn-assignment' disabled={end} onClick={handleSubmit}>Submit</Button>
                                        <Button className='btn-assignment' onClick={() => handleSave(el.id)}>Save</Button>
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