import { Field } from "formik";
import React from "react";

const CheckBoxFieldAnswer = (props) => {
  const { form } = props;
  const { values } = form;

  return (
    <>
      {values.answer.length > 0 &&
        values.answer.map((answer, index) => (
          <div key={index} className='answerForm'>
            <label htmlFor={`answer.${index}.name`}>Answer: </label>
            <Field
              name={`answer.${index}.name`}
              autoComplete="off"
              className="InputQuestion"
              type="text"
            />
            <Field
              name={`answer.${index}.isAnswer`}
              className="CheckboxQuestion"
              type="checkbox"
            />
          </div>
        ))}

    </>
  );
};

export default CheckBoxFieldAnswer;
