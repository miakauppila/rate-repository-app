import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

// side effect is isolated to this component
const RepositoryList = () => {
  // default order is latest
  const [selectedOrder, setSelectedOrder] = useState('latest');

  // use custom hook to fetch repositories from GraphQL
  const { repositories } = useRepositories(selectedOrder);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      changeSelectedOrder={setSelectedOrder}
    />
  ) ;
};

export default RepositoryList;