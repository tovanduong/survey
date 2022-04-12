import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import React from "react";

const InputFieldQuestion = (props) => {
  const { field, type, label, form } = props;
  const { errors, touched } = form;
  const { name, value } = field;
  const showError = errors[name] && touched[name];
  return (
    <>
      <FormControl className="FormInput">
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <Input
          {...field}
          name={name}
          type={type}
          defaultValue={value}
          autoComplete="off"
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
