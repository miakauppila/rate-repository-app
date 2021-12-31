import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import RepositoryList from './RepositoryList/RepositoryList';
import SignIn from './SignIn/SignIn';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';
import SingleRepositoryView from './RepositoryList/SingleRepositoryView';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/:repositoryId" exact>
          <SingleRepositoryView />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;