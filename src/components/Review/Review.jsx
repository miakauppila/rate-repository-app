import React from 'react';
import { useHistory } from 'react-router-native';
import ReviewContainer from './ReviewContainer';
import useReview from '../../hooks/useReview';

const Review = () => {

  let history = useHistory();

  // call the function from the hook
  const [createReview] = useReview();

  const handleSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values;
    console.log('values', values);
    const ratingNumber = parseInt(rating);

    try {
      const result = await createReview({ ownerName, repositoryName, rating: ratingNumber, review });
      const repositoryId = result.createReview.repositoryId;
      console.log(result);
      history.push(`/${repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewContainer onSubmit={handleSubmit} />
  );
};

export default Review;