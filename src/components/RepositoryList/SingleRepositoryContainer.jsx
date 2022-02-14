import React from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import Text from '../Shared/Text';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
  },
  flexRowItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexColItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rating: {
    width: 50,
    height: 50,
    marginRight: 20,
    textAlign: 'center',
    padding: 11,
    paddingTop: 13,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 50/2,
  },
  reviewText: {
    marginTop: 10,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

// adds item separator below the flatlist header
const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem item={repository} showLink={true} />
      <ItemSeparator />
    </View>
  );
};

// Single review item displayed within the flatlist
const ReviewItem = ({ review }) => {

  return (
    <View style={styles.item}>
      <View style={styles.flexRowItem}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.flexColItem}>
          <Text fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
          <Text color="textSecondary">{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text color="textPrimary" style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const SingleRepositoryContainer = ({ repository, loadingMore, handleEndReach }) => {

  const renderFooter = () => {
    if(!loadingMore) return null;

    return (
      <ActivityIndicator size="large" color="#24292e" />
    );

  };

  // Get the nodes from the edges array, where node = review
  const reviews = repository ?
    repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={<RepositoryInfo repository={repository} />}
      onEndReached={handleEndReach}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

export default SingleRepositoryContainer;