import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const AppBarTab = ({ handleOnPress, tabText, linkTo }) => {
    return (
        <Pressable onPress={handleOnPress}>
            <Link to={linkTo}>
                <Text fontWeight="bold" fontSize="subheading" style={{ color: 'white' }}>
                    {tabText}
                </Text>
            </Link>;
        </Pressable>
    );
};

export default AppBarTab;