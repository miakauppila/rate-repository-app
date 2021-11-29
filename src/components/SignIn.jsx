import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    color: 'white',
    borderRadius: 3,
    textAlign: 'center',
    marginVertical: 12
  }
});

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .min(6, 'Username must have min. 6 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must have min. 6 characters')
    .required('Password is required'),
});

const initialValues = {
  userName: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="userName" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

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

export default SignIn;