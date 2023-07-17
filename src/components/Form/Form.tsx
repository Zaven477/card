import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../App.css";
import { FormSubmitProps, ValuesType } from "./types";








const validationSchema = Yup.object().shape({
  name: Yup.string().required('the "name" field is required'),
  card: Yup.string()
    .length(16, "The card number must contain 16 digits without spaces")
    .matches(/^\d+$/, "Wrong format, numbers only")
    .required('The field "Card number" is required'),
  dateNum: Yup.string()
    .length(2, "month must be 2 digits")
    .matches(/^\d+$/, "Wrong format, numbers only")
    .required("Can`t be blank"),
  yearNum: Yup.string()
    .length(2, "year must be 2 digits")
    .matches(/^\d+$/, "Wrong format, numbers only")
    .required("Can`t be blank"),
  cvcNum: Yup.string().length(3, "must be 3 digits")
    .matches(/^\d+$/, "Wrong format, numbers only")
    .required("Can`t be blank"),
});

export const FormSubmit = ({setValue, setDelimiter}: FormSubmitProps) => {
  
  
  const initialValues = {
    name: "",
    card: "",
    dateNum: "",
    yearNum: "",
    cvcNum: "",
  };

  const handleSubmit = (values: ValuesType) => {
    setValue(values)
    setDelimiter('/');
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          const fieldNameClass = errors.name && touched.name ? "error" : "";
          const fieldCardClass = errors.card && touched.card ? "error" : "";
          const fieldDateNum = errors.dateNum && touched.dateNum ? "error" : "";
          const fieldYearNum = errors.yearNum && touched.yearNum ? "error" : "";
          const fieldCvcNum = errors.cvcNum && touched.cvcNum ? "error" : "";
          return (
            <Form>
              <div className="posName">
                <label htmlFor="name" className="ml">
                  CARDHOLDER NAME
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`sizeName ${fieldNameClass}`}
                
                />
                <ErrorMessage name="name" component="div" className="mlError" />
              </div>
              <div className="posCard">
                <label htmlFor="card" className="mlCard">
                  CARD NUMBER
                </label>
                <Field
                  type="card"
                  id="card"
                  name="card"
                  className={`sizeCard ${fieldCardClass}`}
                />
                <ErrorMessage
                  name="card"
                  component="div"
                  className="mlCardError"
                />
              </div>
              <div className="posDate">
                <label htmlFor="dateNum" className="mlDate">
                  EXP.DATE
                </label>
                <Field
                  type="dateNum"
                  id="dateNum"
                  name="dateNum"
                  className={`sizeDate ${fieldDateNum}`}
                />
                <ErrorMessage
                  name="dateNum"
                  component="div"
                  className="mlDateError"
                />
              </div>
              <div className="posYear">
                <label htmlFor="yearNum" className="mlYear">
                  (MM/YY)
                </label>
                <Field
                  type="yearNum"
                  id="yearNum"
                  name="yearNum"
                  className={`sizeYear ${fieldYearNum}`}
                />
                <ErrorMessage
                  name="yearNum"
                  component="div"
                  className="mlYearError"
                />
              </div>
              <div className="posCvc">
                <label htmlFor="cvcNum" className="mlCvc">
                  CVC
                </label>
                <Field
                  type="cvcNum"
                  id="cvcNum"
                  name="cvcNum"
                  className={`sizeCvc ${fieldCvcNum}`}
                />
                <ErrorMessage
                  name="cvcNum"
                  component="div"
                  className="mlCvcError"
                />
              </div>
              <button type="submit" className="btn">
                Confirm
              </button>
            </Form>
          );
        }}
      </Formik>
      
    </div>
  );
};
