


<<<<<<< HEAD
import { Typography } from '@mui/material'
=======
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {

    const { totalScore } = useSelector(state => state.survey.totalScore)
    console.log(totalScore)
    return (
<<<<<<< HEAD
        <Typography variant='h3' paddingTop={22} paddingLeft={5}>Total score: {totalScore} </Typography>
=======
        <div>Total: {totalScore} </div>
>>>>>>> 6aae2cbaea81772f6f29336accfb9675a845ef67
    )
}

export default Total