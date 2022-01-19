import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedOrder, searchKeyword) => {

  let selectedArgument;
  let selectedDirection;

  if (selectedOrder === 'latest') {
    selectedArgument = 'CREATED_AT';
    selectedDirection = 'DESC';
  }
  else if (selectedOrder === 'highest') {
    selectedArgument = 'RATING_AVERAGE';
    selectedDirection = 'DESC';
  }
  else if (selectedOrder === 'lowest') {
    selectedArgument = 'RATING_AVERAGE';
    selectedDirection = 'ASC';
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES,
    {
      variables: {
        orderBy: selectedArgument,
        direction: selectedDirection,
        searchKeyword: searchKeyword
      },
      fetchPolicy: 'cache-and-network'
    });

  const repositories = data?.repositories;

  return { repositories, error, loading };
};

export default useRepositories;