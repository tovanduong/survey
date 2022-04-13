

import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ListAnswer = ({ answerProps }) => {
    return (
        <Box>
            {answerProps.map((el) => {
                return <Typography key={el.id} border='1px solid gray' borderRadius={2} marginBottom={5}>
                    {el.name}
                </Typography>
            })}
        </Box>
    )
}

export default ListAnswer