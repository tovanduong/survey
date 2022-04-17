import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ListAnswer = (props) => {
    const { answerProps, propsData, colorAnswer } = props

    const handleCheck = (item) => {
        const isCheck = colorAnswer.find((el) => el.choice_id === item.id)
        if (isCheck)
            return 'actived'
    }

    const sendData = (id) => {
        const ChoiceId = {
            choice_id: id
        }
        propsData(ChoiceId);
    }

    return (
        <Box className='answerContainer' >
            {answerProps.answers.map((el) => {
                return <Typography key={el.id} className={`nameAnswer ${handleCheck(el)}`} bgcolor={'#2196f3'} color="#FFF" onClick={() => sendData(el.id)} >
                    {el.name}
                </Typography>
            })}
        </Box>
    )
}

export default ListAnswer