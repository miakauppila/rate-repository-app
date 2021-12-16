import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    pressable: {
        marginHorizontal: 10,
    },
});

const AppBarTab = ({ handleOnPress, tabText, linkTo }) => {
    return (
        <Link to={linkTo}
            component={Pressable}
            style={styles.pressable}
            onPress={handleOnPress}
        >
            <Text fontWeight="bold" fontSize="subheading" style={{ color: 'white' }}>
                {tabText}
            </Text>
        </Link>
    );
};

export default AppBarTab;