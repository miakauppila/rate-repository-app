import React from 'react';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';

// side effect is isolated to this component
const SingleRepositoryView = () => {

  // get the repositoryId from url (match.params)
  let { repositoryId } = useParams();

  // use custom hook to fetch a single repository from GraphQL
  const { repository, loading, error } = useRepository(repositoryId);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>`Sorry, there was an unexpected error! ${error.message}`</div>;
  }

  return (
    <RepositoryItem item={repository} showLink={true} />
  );
};

export default SingleRepositoryView;