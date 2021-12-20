import React from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

// side effect is isolated to this component
const RepositoryList = () => {

  // use custom hook to fetch repositories from GraphQL
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;