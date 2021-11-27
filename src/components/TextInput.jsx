import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        marginVertical: 12,
        borderWidth: 1,
        borderColor: theme.colors.textSecondary,
        padding: 10,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
        textAlign: 'center'
    },
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        styles.input,
        style
    ];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;