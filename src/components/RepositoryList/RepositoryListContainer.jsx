import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

// presentational component for RepositoryList
export const RepositoryListContainer = ({ repositories }) => {
  
    // Get the nodes from the edges array, where nodes = repos
  const repositoryNodes = repositories ?
    repositories.edges.map((edge) => edge.node)
    : [];

    const renderItem = ({ item }) => (
      <RepositoryItem item={item} />
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