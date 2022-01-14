import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    height: 40,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

// presentational component for RepositoryList
const RepositoryListContainer = ({ repositories, selectedOrder, changeSelectedOrder }) => {

  const getPicker = () => {
    return (
      <Picker
        selectedValue={selectedOrder}
        onValueChange={(itemValue) =>
          changeSelectedOrder(itemValue)
        }
        style={styles.picker}
        prompt="Select ordering criteria"
      >
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
    );
  };

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
      ListHeaderComponent={getPicker}
    />
  );
};

export default RepositoryListContainer;