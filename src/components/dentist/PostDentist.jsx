import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import SweetAlert from "../../helpers/SweetAlert";
import { GralButton } from "../../stylesComponents/BasicTagsStyle";
import { FormStyle } from "../../stylesComponents/FormStyle";

export const PostDentist = () => {
  const initialValues = {
    registrationNumber: "",
    lastName: "",
    firstName: "",
  };

  const validateValues = yup.object().shape({
    registrationNumber: yup.string().required("Required"),
    lastName: yup
      .string()
      .min(4, "Too Short!")
      .required("Required")
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    firstName: yup
      .string()
      .min(4, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const url = "http://localhost:8080/";
  const clinicUrl = "dentist/register";

  const createDentist = async (values) => {
    try {
      const response = await axios.post(`${url}${clinicUrl}`, {
        registrationNumber: values.registrationNumber,
        lastName: values.lastName,
        firstName: values.firstName,
      });

      SweetAlert.messageOk(
        "Succesfull register dentist",
        `Dentist: ${values.lastName}, ${values.firstName}`,
      );

      return response.data;
    } catch (error) {
      SweetAlert.messageError("Ooops! Ocurrió un error!", error);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    createDentist(values);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validateValues}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form>
            <FormStyle>
              <Field
                className={
                  errors.registrationNumber ? "field inputError" : "field"
                }
                type="text"
                name="registrationNumber"
                placeholder="Registration number"
              />
              <ErrorMessage
                className={errors.registrationNumber ? "textError" : ""}
                name="registrationNumber"
                component="div"
              />
              <Field
                className={errors.lastName ? "field inputError" : "field"}
                type="text"
                name="lastName"
                placeholder="Last name"
              />
              <ErrorMessage
                className={errors.lastName ? "textError" : ""}
                name="lastName"
                component="div"
              />
              <Field
                className={errors.firstName ? "field inputError" : "field"}
                type="text"
                name="firstName"
                placeholder="First name"
              />
              <ErrorMessage
                className={errors.firstName ? "textError" : ""}
                name="firstName"
                component="div"
              />
              <GralButton type="submit" disabled={isSubmitting}>
                Submit
              </GralButton>
            </FormStyle>
          </Form>
        )}
      </Formik>
    </div>
  );
};
