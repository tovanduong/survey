import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getCategory, getDiff, getQuestion, getSurvey, postSurvey } from "../../../common/API/adminAPI";
import FormPostSurvey from "./formPostSurvey";
// import "./question.css";

const Survey = () => {
    const [category, setCategory] = useState([]);
    const [diff, setDiff] = useState([]);
    const [question, setQuestion] = useState([]);

    useEffect(() => {
        getCategory().then((dataCate) => setCategory(dataCate));
    }, []);
    useEffect(() => {
        getDiff().then((datadiff) => setDiff(datadiff));
    }, []);

    useEffect(() => {
        getQuestion().then((dataQuestion) => setQuestion(dataQuestion));
    }, []);

    useEffect(() => {
        getSurvey().then((dataSurvey) => console.log(dataSurvey))

    }, [])
    const initialValues = {
        category: '',
        difficulty: "",
        name: '',
        questions: []
    };
    return (
        <div>
            <Box>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        const a = { ...values.questions };
                        const questionId = Object.values(a).map((item) => item.id);

                        const result = {
                            ...values,
                            difficulty: values.difficulty.name,
                            category: values.category.name,
                            questions: questionId
                        };
                        postSurvey(result)
                        console.log(result)
                        resetForm({ values: "" });
                    }}
                >
                    {({ values }) => (
                        <FormPostSurvey propsCate={category} propsDiff={diff} propsQuestion={question} />
                    )}
                </Formik>
                {/* <Answer /> */}
            </Box>
        </div>
    );
};

export default Survey;
