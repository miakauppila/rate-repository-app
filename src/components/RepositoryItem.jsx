import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#99ffcc',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 28,
    },
  });

const RepositoryItem = ({item}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Full name: {item.fullName}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Text style={styles.text}>Language: {item.language}</Text>
      <Text style={styles.text}>Stars: {item.stargazersCount}</Text>
      <Text style={styles.text}>Forks: {item.forksCount}</Text>
      <Text style={styles.text}>Reviews: {item.reviewCount}</Text>
      <Text style={styles.text}>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;