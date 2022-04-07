
import { Box, Button, Typography } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../../common/fieldForm/fieldForm';
import { useStyles } from '../signUp/muiStyle';
import { fetcPostSingUp } from './signSlice';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
});

const SignUp = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={value => {
                        console.log(value)
                        dispatch(fetcPostSingUp(value))
                    }
                    }
                >
                    {() => {
                        return (
                            <Form className={classes.forms}>
                                <Box className={classes.title}>
                                    <Typography variant='p' className={classes.wellcome} >Welcome to Team DD</Typography>
                                    <Link to="/login" className={classes.btnToggle}>Have an Account?<br /> Sign in</Link>
                                </Box>
                                <Box component='h1' className={classes.loginTitle}>SIGN UP</Box>
                                <FastField
                                    name="username"
                                    component={InputField}

                                    type='text'
                                    label="User Name"
                                    placeholder="user name"
                                />
                                <FastField
                                    name="password"
                                    component={InputField}

                                    type='password'
                                    label="Password"
                                />
                                <Button className={classes.linkButton} type='submit'>Sign Up</Button>
                            </Form>
                        )
                    }}
                </Formik>
            </Box >
        </>
    )
}

export default SignUp