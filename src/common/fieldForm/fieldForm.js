
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material'
import React from "react";
import { Link } from 'react-router-dom';
import { useStyles } from '../../features/login/muiStyle';

const InputField = (props) => {

    const { field, type, placeholder, label, form } = props;
    const { errors, touched } = form
    const { name } = field;
    const showError = errors[name] && touched[name]

    // const classes = useStyles()
    return (
        <>
            <FormControl >
                {label && <InputLabel htmlFor={name} >{label}</InputLabel>}
                <Input {...field} name={name} placeholder={placeholder} type={type} autoComplete="off" />
                {showError ? <FormHelperText error={true}>{errors[name]}</FormHelperText> : null}
            </FormControl><br />

        </>
    );
};

export default InputField;
