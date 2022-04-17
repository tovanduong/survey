import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Field, FieldArray, Form } from "formik";
import React from "react";
import CheckBoxFieldQuestion from "./InputField/checkboxFieldQuestion";
import InputFieldQuestion from "./InputField/InputFieldQuestion";
import SelectFieldQuestion from "./InputField/SelectFieldQuestion";

const FormPostQuestion = ({ propsCate, propsDiff, propPara }) => {
  return (
    <Form >
      <Box style={{ display: 'flex', width: '100% !important' }}>
        <Box width={'100%'}>
          <Field
            name="category"
            component={SelectFieldQuestion}
            type="text"
            Aprops={propsCate}
            Bprops={propPara}
            multiple={true}
            label="Category"

          />
          <Field
            name="difficult"
            component={SelectFieldQuestion}
            type="text"
            Aprops={propsDiff}
            Bprops={propPara}
            multiple={false}
            label="Difficult"
          />

          <Field
            name="name"
            component={InputFieldQuestion}
            Bprops={propPara}
            type="text"
            label="Question"

          />
        </Box>
        <Box width={'100%'}>
          <FieldArray
            name="answer"
            component={CheckBoxFieldQuestion}
            Bprops={propPara}

          />
        </Box>
      </Box>
      <Button
        style={{ width: "100px", height: "50px", marginTop: "20px" }}
        type="submit"
      >
        <AddIcon />
      </Button>
    </Form>
  );
};

export default FormPostQuestion;
