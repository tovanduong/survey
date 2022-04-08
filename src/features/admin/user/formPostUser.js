
import { Button } from '@mui/material'
import { FastField, Form } from 'formik'
import React from 'react'
import InputFieldUser from './InputField'

const FormPostUser = () => {
    return (
        <Form >
            <FastField
                name="username"
                component={InputFieldUser}

                type='text'
                label="User Name"
                placeholder="user name"
            />
            <FastField
                name="password"
                component={InputFieldUser}

                type='password'
                label="Password"
            />
            <Button sx={{ width: '100px', height: '50px' }} type='submit'>ADD</Button>
        </Form>
    )
}
export default FormPostUser