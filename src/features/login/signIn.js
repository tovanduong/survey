import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FastField, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../../common/fieldForm/fieldForm';
import './login.css';
import { fetchLogin } from './loginSlice';
import { useStyles } from './muiStyle';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const Login = () => {
  const classes = useStyles()
  const { data } = useSelector((state) => state.login)
  let navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (Object.values(data).length !== 0) {
      if (data.role == 'user') {
        navigate('/survey')
      }
      if (data.role == 'admin') {
        navigate('/admin')
      }
    }
  }, [data])

  return (
    <Box className={classes.root}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={value =>
          dispatch(fetchLogin(value))
        }
      >
        {() => {
          return (
            <Form className={classes.forms}>
              <Box className={classes.title}>
                <Typography variant='p' className={classes.wellcome} >Welcome to Team DD</Typography>
                <Link to="/signup" className={classes.btnToggle}>No Account?<br /> Sign up</Link>
              </Box>
              <Box component='h1' className={classes.loginTitle}>SIGN IN</Box>
              <FastField
                name="username"
                component={InputField}

                type='text'
                label="Enter your username"
                placeholder=""
              />
              <FastField
                name="password"
                component={InputField}

                type='password'
                label="Password"
              />
              <Box sx={{ display: 'block', textAlign: 'right' }}>
                <Link to="/" className={classes.loginbtn} >Forgot Password</Link>
                <Button className={classes.linkButton} type='submit'>Login</Button>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </Box >
  )
};

export default Login