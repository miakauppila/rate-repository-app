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

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <FormikTextInput name="passwordConfirmation" placeholder="Password confirmation" secureTextEntry={true} />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button} testID="submitBtn">Sign up</Text>
            </Pressable>
        </View>
    );
};

export default SignUpForm;