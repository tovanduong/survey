
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import { FastField, Form } from 'formik'
import React from 'react'
import InputFieldDiff from './InputFieldDiff'

const FormPostDiff = () => {
    return (
        <div>
            <Form >
                <FastField
                    name="name"
                    component={InputFieldDiff}

                    type='text'
                    label="Difficult"
                />
                <Button style={{ width: '100px', height: '50px', marginTop: '20px' }} type='submit'><AddIcon /></Button>
            </Form>
        </div>
    )
}

export default FormPostDiff