import { Box } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getCategory, getDiff } from "../../../common/API/adminAPI";
import FormPostQuestion from "./formPostQuestion";
import "./question.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});
const initialValues = {
  category: [],
  difficult: "",
  name: "",
  answer: [
    {
      name1: "",
      isAnswer: false,
    },
  ],
};
const Question = () => {
  const [category, setCategory] = useState([]);
  const [diff, setDiff] = useState([]);

  useEffect(() => {
    getCategory().then((dataCate) => setCategory(dataCate));
  }, []);
  useEffect(() => {
    getDiff().then((datadiff) => setDiff(datadiff));
  }, []);
  return (
    <div>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            // const a = { ...values.category };
            // const cateName = Object.values(a).map((item) => item.name);
            // const result = {
            //   ...values,
            //   difficult: values.difficult.name,
            //   category: cateName,
            // };
            // console.log(result);
            console.log(values);
            resetForm({ values: "" });
          }}
        >
          {(formik) => (
            <FormPostQuestion propsCate={category} propsDiff={diff} />
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Question;
