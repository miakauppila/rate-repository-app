import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    paddingLeft: 20,
    backgroundColor: theme.colors.appBar,
  },
  // ...
});

const handleOnPress = () => {
  console.log('onPressFunction');
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab handleOnPress={handleOnPress} tabText={"Repositories"} />
    </View>
  );
};

export default AppBar;