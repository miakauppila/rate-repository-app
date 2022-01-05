import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import ReviewForm from './ReviewForm';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(4, 'Repository owner name must have min. 4 characters')
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .min(3, 'Repository name must have min. 3 characters')
    .required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number')
    .min(0, 'Rating minimum value is 0')
    .max(100, 'Rating maximum value is 100')
    .integer('Rating must be an integer')
    .required('Rating is required'),
  review: yup
    .string()
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
};

const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewContainer;