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

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
            <FormikTextInput name="review" placeholder="Review" multiline={true} />
            <Pressable onPress={onSubmit}>
                <Text style={styles.button}>Create a review</Text>
            </Pressable>
        </View>
    );
};

export default ReviewForm;