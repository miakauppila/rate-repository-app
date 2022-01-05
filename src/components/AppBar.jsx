import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
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

const AppBar = () => {
  // use custom hook to fetch authorizedUser from GraphQL
  const { authorizedUser } = useAuthorizedUser();

  // access authStorageContext via custom hook
  const authStorage = useAuthStorage();

  // access ApolloClient instance used by the application 
  const apolloClient = useApolloClient();

  const handleOnPress = () => {
    console.log('handleOnPress');
  };

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        <AppBarTab linkTo="/" handleOnPress={handleOnPress} tabText={'Repositories'} />
        {authorizedUser &&
          <AppBarTab linkTo="/review" handleOnPress={handleOnPress} tabText={'Create a review'} />
        }
        {authorizedUser &&
          <AppBarTab linkTo="/signin" handleOnPress={handleSignOut} tabText={'Sign out'} />
        }
        {!authorizedUser &&
          <AppBarTab linkTo="/signin" handleOnPress={handleOnPress} tabText={'Sign in'} />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;