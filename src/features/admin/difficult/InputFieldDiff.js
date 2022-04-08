import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React from "react";

const InputFieldDiff = (props) => {

    const { field, type, placeholder, label, form } = props;
    const { errors, touched } = form
    const { name } = field;
    const showError = errors[name] && touched[name]
    // const classes = useStyles()
    return (
        <>
            <FormControl className='inputCate'>
                {label && <InputLabel htmlFor={name} >{label}</InputLabel>}
                <Input  {...field} name={name} placeholder={placeholder} type={type} autoComplete="off" autoFocus={true} />
                {showError ? <FormHelperText error={true}>{errors[name]}</FormHelperText> : null}
            </FormControl><br />

        </>
    );
};

export default InputFieldDiff;
