
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@mui/material'
import { FastField, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import InputFieldCategory from './InputFieldCategory'

const FormPostCate = ({ propsCate }) => {

    return (
        <Box>
            <Form >
                <FastField
                    name="name"
                    component={InputFieldCategory}

                    type='text'
                    label="category"
                />
                <Button style={{ width: '100px', height: '50px', marginTop: '20px' }} type='submit'><AddIcon /></Button>
            </Form>
        </Box>
    )
}

export default FormPostCate