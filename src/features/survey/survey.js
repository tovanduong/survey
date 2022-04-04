import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from '../login/muiStyle'
import { fetchSubmitAnswer } from './surveySlice'

const Survey = (props) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const [values, setValue] = useState('');
    const handleChange = (event) => {
        setValue((event.target.value))
    };

    return (
        <Box>
            <Formik
                initialValues={{
                    result: '',
                }}
                onSubmit={() => {
                    dispatch(fetchSubmitAnswer([{ id: props.questionProps.id, correctanswer: values }]))
                }}
            >
                {() => {
                    return (
                        <Box pl={4}>
                            <Form>
                                <Typography variant='h1' gutterBottom >Survey</Typography>
                                <Typography variant='h3' component="div">{props.questionProps.question}</Typography>
                                <FormControl >
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name='result'
                                        value={values}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value={props.questionProps.answer1} control={<Radio />} label={props.questionProps.answer1} />
                                        <FormControlLabel value={props.questionProps.answer2} control={<Radio />} label={props.questionProps.answer2} />
                                        <FormControlLabel value={props.questionProps.answer3} control={<Radio />} label={props.questionProps.answer3} />
                                        <FormControlLabel value={props.questionProps.answer4} control={<Radio />} label={props.questionProps.answer4} />
                                    </RadioGroup>
                                </FormControl><br />
                                <Box >
                                    <Button type='submit'>submit</Button>
                                </Box>
                            </Form>
                        </Box>
                    )
                }}
            </Formik>
        </Box>
    )
}

export default Survey