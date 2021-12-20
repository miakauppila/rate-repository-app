import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
  },
  flexRowItemA: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  flexRowItemB: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flexColItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  ownerAvatar: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  languageTag: {
    alignSelf: 'baseline', // to fit text width
    backgroundColor: theme.colors.primary,
    padding: 5,
    color: 'white',
    borderRadius: 3,
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <View style={styles.flexRowItemA}>
        <Image
          style={styles.ownerAvatar}
          source={{ uri: item.ownerAvatarUrl }}
        />
        <View style={styles.flexColItem}>
          <Text fontWeight="bold" fontSize="subheading" testID="name">{item.fullName}</Text>
          <Text color="textSecondary" testID="description">{item.description}</Text>
          <Text style={styles.languageTag} testID="language">{item.language}</Text>
        </View>
      </View>

      <View style={styles.flexRowItemB}>
        <View style={styles.flexColItem}>
          <Text fontWeight="bold">{item.stargazersCount > 1000 ? (item.stargazersCount / 1000).toFixed(1) + 'k' : item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>

        <View style={styles.flexColItem}>
          <Text fontWeight="bold">{item.forksCount > 1000 ? (item.forksCount / 1000).toFixed(1) + 'k' : item.forksCount} </Text>
          <Text>Forks</Text>
        </View>

        <View style={styles.flexColItem}>
          <Text fontWeight="bold">{item.reviewCount > 1000 ? (item.reviewCount / 1000).toFixed(1) + 'k' : item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>

        <View style={styles.flexColItem}>
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;