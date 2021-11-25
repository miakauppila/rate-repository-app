import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: theme.colors.appBar,
  },
  scrollView: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-evenly'
  }
});

const handleOnPress = () => {
  console.log('onPressFunction');
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <AppBarTab handleOnPress={handleOnPress} tabText={'Repositories'} linkTo={'/'} />
        <AppBarTab handleOnPress={handleOnPress} tabText={'Sign in'} linkTo={'/signin'} />
      </ScrollView>
    </View>
  );
};

export default AppBar;