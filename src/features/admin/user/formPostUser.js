
import { Button } from '@mui/material'
import { FastField, Form } from 'formik'
import React from 'react'
import FieldInput from '../component/fieldInput/filedInput'

const FormPostUser = () => {
    return (
        <Form >
            <FastField
                name="username"
                component={FieldInput}

                type='text'
                label="User Name"
                placeholder="user name"
            />
            <FastField
                name="password"
                component={FieldInput}

                type='password'
                label="Password"
            />
            <Button sx={{ width: '100px', height: '50px' }} type='submit'>ADD</Button>
        </Form>
    )
}
export default FormPostUser