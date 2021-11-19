import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        // ...something needed?
    },
});

const AppBarTab = ({ handleOnPress, tabText }) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={handleOnPress}>
                <Text fontWeight="bold" fontSize="subheading" style={{ color: 'white' }}>{tabText}</Text>
            </Pressable>
        </View>
    );
};

export default AppBarTab;