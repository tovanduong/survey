import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetSurvey } from '../surveySlice'
import ShowAnswer from './showAnswerCorrect'

const ResultAssignment = () => {
    const [result, setResult] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { assignmentSubmit } = useSelector(state => state.survey)

    const arrUserAnswer = assignmentSubmit?.assignmentDetails?.reduce((acc, curr) => {
        acc[curr.question.id] = { pointQuestion: curr.pointQuestion, userQuestionAnswers: curr.userQuestionAnswers }
        return acc
    }, {})

    useEffect(() => {
        const newArr = assignmentSubmit?.survey?.questions.map((el) => {
            return { ...el, assignmentDetails: assignmentSubmit.assignmentDetails }
        })
        setResult(newArr)

    }, [assignmentSubmit])

    const handleClick = () => {
        dispatch(resetSurvey())
        navigate('/')
    }

    return (
        <Box sx={{ padding: '180px', background: '#e6f8fb' }}>
            <Typography variant='h2' mb={5}>Total Score: {assignmentSubmit?.pointSurvey}</Typography>
            <Button onClick={handleClick} className='btn__Testagain'>Test Again</Button>
            {result && result.map((el) => {
                return <Box key={el.id} bgcolor='#dce778' border='1px solid gray' borderRadius='10px' padding='20px' marginBottom='20px' boxShadow='5px 6px #80808080'>
                    <Typography variant='h4'  >{el.name}</Typography>
                    <ShowAnswer propsAnswer={el.answers} propsUserAnser={el} propsUser={arrUserAnswer && arrUserAnswer[el.id]} />
                </Box>
            })}
        </Box>
    )
}

export default ResultAssignment