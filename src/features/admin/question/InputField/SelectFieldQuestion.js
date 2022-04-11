import { Autocomplete, TextField } from "@mui/material";
import { fieldToTextField } from "formik-material-ui";
import React from "react";

const SelectFieldQuestion = (props) => {
  const { Aprops, multiple, label } = props;
  const {
    form: { setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  return (
    <>
      <Autocomplete
        multiple={multiple}
        className="textInputQuestion"
        id="tags-outlined"
        isOptionEqualToValue={Aprops.id}
        options={Aprops}
        getOptionLabel={(option) => option.name}
        onChange={(_, value) => setFieldValue(name, value)}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </>
  );
};

export default SelectFieldQuestion;
