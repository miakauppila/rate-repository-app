import React from 'react';
import useUserReviews from '../../hooks/useUserReviews';
import UserReviewsContainer from './UserReviewsContainer';
import { ActivityIndicator } from 'react-native';
import Text from '../Shared/Text';

const UserReviews = () => {

  const { reviews, loading, error } = useUserReviews();

   // loading indicator if query takes some time
  if (loading && !reviews) {
    return <ActivityIndicator size="large" color="#24292e" />;
  }
  if (error) {
    return <Text>`Sorry, there was an unexpected error! ${error.message}`</Text>;
  }

  return (
    <UserReviewsContainer reviews={reviews} />
  );
};

export default UserReviews;