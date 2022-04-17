import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from "react";

const InputFieldCategory = (props) => {
    const { field, type, placeholder, label, form } = props;
    const { errors, touched } = form
    const { name } = field;
    const showError = errors[name] && touched[name]

    return (
        <>
            <FormControl className='inputCate'>
                {label && <InputLabel htmlFor={name} >{label}</InputLabel>}
                <Input  {...field} name={name} placeholder={placeholder} type={type} autoComplete="off" />
                {showError ? <FormHelperText error={true}>{errors[name]}</FormHelperText> : null}
            </FormControl><br />
        </>
    );
};

export default InputFieldCategory;
