import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Field, FieldArray, Form, useField } from "formik";
import React from "react";
import InputFieldSurvey from "./InputField/InputFieldSurvey";
import SelectFieldSurvey from "./InputField/SelectFieldSurvey";

const FormPostSurvey = ({ propsCate, propsDiff, propsQuestion }) => {
  return (
    <Form >
      <Box style={{ display: 'flex', width: '100% !important' }}>
        <Box width={'100%'}>
          <Field
            name="category"
            component={SelectFieldSurvey}
            type="text"
            Aprops={propsCate}
            multiple={false}
            label="Category"
          />
          <Field
            name="difficulty"
            component={SelectFieldSurvey}
            type="text"
            Aprops={propsDiff}
            multiple={false}
            label="Difficulty"
          />
          <Field
            name="questions"
            component={SelectFieldSurvey}
            type="text"
            Aprops={propsQuestion}
            multiple={true}
            label="Question"
          />
          <Field
            name="name"
            component={InputFieldSurvey}
            type="text"
            label="Survey"
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

export default FormPostSurvey;
