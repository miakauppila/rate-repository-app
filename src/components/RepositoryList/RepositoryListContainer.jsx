import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';
import { Link } from 'react-router-native';
import { Searchbar } from 'react-native-paper';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    height: 40,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({ selectedOrder, changeSelectedOrder, searchText, changeSearchText }) => {

  const onChangeSearch = (text) => changeSearchText(text);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchText}
      />
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
    </View>
  );
};

class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    const { selectedOrder, changeSelectedOrder, searchText, changeSearchText } = this.props;

    return (
      <RepositoryListHeader
        selectedOrder={selectedOrder}
        changeSelectedOrder={changeSelectedOrder}
        searchText={searchText}
        changeSearchText={changeSearchText}
      />
    );
  };

  // redirect to SingleRepositoryView route
  renderItem = ({ item }) => (
    <Link to={`/${item.id}`}
      component={Pressable}
      onPress={() => console.log('Pressed RepositoryItem')}
    >
      <RepositoryItem item={item} />
    </Link>

  );

  render() {
    const { repositories } = this.props;

    // Get the nodes from the edges array, where nodes = repos
    const repositoryNodes = repositories ?
      repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }

}

export default RepositoryListContainer;