

import { AddAlarm } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const ListAnswer = (props) => {
    const { answerProps, propsData, colorAnswer } = props
    const [color, setColor] = useState(null)


    const sendData = (id) => {
        const ChoiceId = {
            choice_id: id
        }
        propsData(ChoiceId);
    }
    console.log(color)

    return (
        <Box className='answerContainer'>
            {answerProps.answers.map((el) => {
                return <Typography key={el.id} className={`nameAnswer ${color}`} onClick={() => sendData(el.id)} >
                    {el.name}
                </Typography>
            })}
        </Box>
    )
}

export default ListAnswer