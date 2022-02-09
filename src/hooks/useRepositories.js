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

  const variables = {
    orderBy: selectedArgument,
    direction: selectedDirection,
    searchKeyword: searchKeyword,
    first: 8
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    error,
    loading,
    ...result
  };
};

export default useRepositories;