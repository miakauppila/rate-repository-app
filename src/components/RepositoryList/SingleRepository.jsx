import React from 'react';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import SingleRepositoryContainer from './SingleRepositoryContainer';
import { ActivityIndicator, Text } from 'react-native';

// side effect is isolated to this component
const SingleRepository = () => {

  // get the repositoryId from url (match.params)
  let { repositoryId } = useParams();

  // use custom hook to fetch a single repository from GraphQL
  const { repository, loading, error, fetchMore } = useRepository(repositoryId);
  
  // query takes some time => loading indicator
  // repository should not be passed on as prop before ready
  if (loading && !repository) {
    console.log('Loading without repository');
    return <ActivityIndicator size="large" color="#24292e" />;
  }
  if (error) {
    return <Text>`Sorry, there was an unexpected error! ${error.message}`</Text>;
  }

  const handleEndReach = () => {
    console.log('You have reached the end of the reviews');
    fetchMore();
  };

  return (
    <SingleRepositoryContainer repository={repository} loadingMore={loading} handleEndReach={handleEndReach} />
  );
};

export default SingleRepository;