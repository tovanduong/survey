import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ShowAnswer = (props) => {
    const { propsAnswer, propsUser } = props
    const handleCorrect = (item) => {
        const isCheck = propsAnswer.find((el) => el.isAnswer === true && item.isAnswer === true)
        if (isCheck)
            return 'actived'
    }

    const handleUserAnswer = (item) => {
        const isCheck = propsUser?.userQuestionAnswers?.find((el) => el.choiceAnswer.id === item.id)
        console.log(isCheck)
        if (isCheck?.isRight)
            return 'correct'
        if (isCheck?.isRight === false) {
            return 'err'
        }
    }

    return (
        <Box className='answer-Container'>
            {propsAnswer && propsAnswer.map((el) => {
                return <Typography key={el.id} className={`nameAnswerResult ${handleCorrect(el)} ${handleUserAnswer(el)}`} >
                    {el.name}
                </Typography>
            })}
        </Box>
    )
}

export default ShowAnswer