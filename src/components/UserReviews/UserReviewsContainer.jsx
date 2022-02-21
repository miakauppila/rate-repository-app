import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import Text from '../Shared/Text';
import theme from '../../theme';
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
    borderRadius: 50 / 2,
  },
  reviewText: {
    marginTop: 10,
  },
  separator: {
    height: 10,
  },
  noReviews: {
    marginTop: 10,
    marginLeft: 10
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

// Single review item displayed within the flatlist
const ReviewItem = ({ review }) => {

  return (
    <View style={styles.item}>
      <View style={styles.flexRowItem}>
        <Text style={styles.rating}>{review.rating}</Text>
        <View style={styles.flexColItem}>
          <Text fontWeight="bold" fontSize="subheading">{review.repositoryId}</Text>
          <Text color="textSecondary">{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const UserReviewsContainer = ({ reviews }) => {

  // Get the nodes from the edges array, where node = review
  const userReviews = reviews ?
    reviews.edges.map((edge) => edge.node)
    : [];

  if (userReviews.length === 0) {
    return (
      <Text fontSize="subheading" style={styles.noReviews}>No reviews created yet</Text>
    );
  }

  return (
    <FlatList
      data={userReviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  );
};

export default UserReviewsContainer;