import React from 'react';
import Text from '../Shared/Text';
import FormikTextInput from '../Shared/FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../../theme';

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

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" testID="usernameInput" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} testID="passwordInput" />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button} testID="submitBtn">Sign in</Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;