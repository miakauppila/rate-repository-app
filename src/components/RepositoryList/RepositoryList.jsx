import React, { useState } from 'react';
import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { useDebounce } from 'use-debounce';

// side effect is isolated to this component
const RepositoryList = () => {
  // searchbar field
  const [searchText, setSearchText] = useState('');
  // picker default order is latest
  const [selectedOrder, setSelectedOrder] = useState('latest');

  // pick up the latest search input after a short 0,5s delay
  const [searchKeyword] = useDebounce(searchText, 500);

  // use custom hook to fetch repositories from GraphQL
  const { repositories } = useRepositories(selectedOrder, searchKeyword);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      changeSelectedOrder={setSelectedOrder}
      searchText={searchText}
      changeSearchText={setSearchText}
    />
  );
};

export default RepositoryList;