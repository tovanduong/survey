import { Autocomplete, TextField } from "@mui/material";
import { fieldToTextField } from "formik-material-ui";
import React, { useEffect } from "react";
import { getIdQuestion } from "../../../../common/API/adminAPI";

const SelectFieldQuestion = (props) => {
  const { Aprops, multiple, label, Bprops } = props;
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
      // defaultValue={}
      />
    </>
  );
};

export default SelectFieldQuestion;
