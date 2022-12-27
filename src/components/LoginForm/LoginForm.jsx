import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import * as yup from "yup";

const initialValues = {
  login: "",
  password: "",
  wouldRecommend: false,
};

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

let schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
  wouldRecommend: yup.boolean().default(false),
});

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values, resetForm);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <FormError name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <FormError name="password" component="div" />
        </label>
        <div>
          <label htmlFor="wouldRecommend">
            <Field name="wouldRecommend" type="checkbox" />
            Would recommend
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
