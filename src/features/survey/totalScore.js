import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {

    const { totalScore } = useSelector(state => state.survey.totalScore)
    return (
        <Typography variant='h3' paddingTop={22} paddingLeft={5}>Total score: {totalScore} </Typography>
    )
}

export default Total