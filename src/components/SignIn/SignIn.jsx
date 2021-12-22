import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import SignInContainer from './SignInContainer';

const SignIn = () => {

  let history = useHistory();

  // call the signIn fn from the hook
  const [signIn] = useSignIn();

  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={handleSubmit} />
  );
};

export default SignIn;