import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Field, Form, useField } from "formik";
import React from "react";
import CheckBoxFieldQuestion from "./InputField/checkboxFieldQuestion";
import InputFieldQuestion from "./InputField/InputField";
import SelectFieldQuestion from "./InputField/SelectFieldQuestion";

const FormPostQuestion = ({ propsCate, propsDiff }) => {
  return (
    <div>
      <Form>
        {/* <Field
          name="category"
          component={SelectFieldQuestion}
          type="text"
          Aprops={propsCate}
          multiple={true}
          label="Category"
        />
        <Field
          name="difficult"
          component={SelectFieldQuestion}
          type="text"
          Aprops={propsDiff}
          multiple={false}
          label="Difficult"
        />

        <Field
          name="name"
          component={InputFieldQuestion}
          type="text"
          label="Question"
        /> */}

        <Field
          name="answer"
          component={CheckBoxFieldQuestion}
          type="text"
          label="Answer"
        />
        <Button
          style={{ width: "100px", height: "50px", marginTop: "20px" }}
          type="submit"
        >
          <AddIcon />
        </Button>
      </Form>
    </div>
  );
};

export default FormPostQuestion;
