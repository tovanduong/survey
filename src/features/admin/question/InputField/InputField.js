import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React from "react";

const InputFieldQuestion = (props) => {
  const { field, type, placeholder, label, form } = props;
  const { errors, touched } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];
  // const classes = useStyles()
  return (
    <>
      <FormControl className="FormInput">
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Input
          {...field}
          name={name}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
          autoFocus={true}
          className="InputQuestion"
        />
        {showError ? (
          <FormHelperText error={true}>{errors[name]}</FormHelperText>
        ) : null}
      </FormControl>
      <br />
    </>
  );
};

export default InputFieldQuestion;
