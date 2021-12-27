import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from './SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {

    it('calls onSubmit function with correct arguments when the form is submitted', async () => {
      const onSubmitMock = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmitMock} />);

      //fill the text inputs and press the submit button
      fireEvent.changeText(getByTestId('usernameInput'), 'elina');
      fireEvent.changeText(getByTestId('passwordInput'), 'password');
      fireEvent.press(getByTestId('submitBtn'));

      // Formik submit is async and requires waitFor
      await waitFor(() => {
        // the onSubmit function was called once and with a correct first argument
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmitMock.mock.calls[0][0]).toEqual({
          username: 'elina',
          password: 'password',
        });
      });

    });

  });
});