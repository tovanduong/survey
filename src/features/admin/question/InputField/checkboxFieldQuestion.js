import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

const CheckBoxFieldQuestion = (props) => {
  const { field, type, placeholder, label, form } = props;
  const { errors, touched } = form;
  const { name, onChange } = field;
  const showError = errors[name] && touched[name];
  console.log(field);
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
        <Checkbox {...field} name="isAnswer" />
        {showError ? (
          <FormHelperText error={true}>{errors[name]}</FormHelperText>
        ) : null}
      </FormControl>
      <br />
    </>
  );
};

export default CheckBoxFieldQuestion;
