
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'
import { FastField, Form } from 'formik'
import React from 'react'
import InputFieldCategory from './InputFieldCategory'

const FormPostCate = () => {
    return (
        <div>
            <Form >
                <FastField
                    name="name"
                    component={InputFieldCategory}

                    type='text'
                    label="category"
                />
                <Button style={{ width: '100px', height: '50px', marginTop: '20px' }} type='submit'><AddIcon /></Button>
            </Form>
        </div>
    )
}

export default FormPostCate