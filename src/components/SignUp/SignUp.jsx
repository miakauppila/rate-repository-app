import React from 'react';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router-native';
import SignUpContainer from './SignUpContainer';
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {

  let history = useHistory();

  // get the signUp/signIn functions from the hooks
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password });
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={handleSubmit} />
  );
};

export default SignUp;