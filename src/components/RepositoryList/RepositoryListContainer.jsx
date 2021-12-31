import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

// presentational component for RepositoryList
const RepositoryListContainer = ({ repositories }) => {

  // Get the nodes from the edges array, where nodes = repos
  const repositoryNodes = repositories ?
    repositories.edges.map((edge) => edge.node)
    : [];

  let history = useHistory();

  // redirect to SingleRepositoryView route
  const onPressFunction = (repositoryId) => {
    history.push(`/${repositoryId}`);
  };

  const renderItem = ({ item }) => (
    <Pressable onPress={() => onPressFunction(item.id)} >
      <RepositoryItem item={item} />
    </Pressable>
  );


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryListContainer;