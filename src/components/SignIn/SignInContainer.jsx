import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignInForm from './SignInForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must have min. 1 characters')
    .max(30, 'Username must have max. 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must have min. 5 characters')
    .max(50, 'Password must have max. 50 characters')
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

// presentational component
const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;