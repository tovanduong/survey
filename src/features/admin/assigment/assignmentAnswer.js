
import { Box, Typography } from '@mui/material'
import React from 'react'

const AssignmentAnswer = (props) => {

    const { propsAnswer, propsAnswerResult } = props
    console.log(propsAnswerResult)
    const handleChoice = (item) => {
        const isCheck = propsAnswerResult?.userQuestionAnswers?.find((el) => el.choiceAnswer.id === item.id)
        if (isCheck?.isRight)
            return 'correctt'
        if (isCheck?.isRight === false) {
            return 'error'
        }
    }

    const handleCorrect = (item) => {
        const isCheck = propsAnswer.find((el) => el.isAnswer == true && item.isAnswer == true)
        if (isCheck)
            return 'actived'
    }
    return (
        <Box className='answerContainerAdmin'>
            {propsAnswer.map((el) => {
                return <Typography key={el.id} className={`nameAnswerAdmin ${handleChoice(el)} ${handleCorrect(el)}`} bgcolor={'#FFF'} color="#000"  >
                    {el.name}
                </Typography>
            })}
        </Box>
    )
}

export default AssignmentAnswer