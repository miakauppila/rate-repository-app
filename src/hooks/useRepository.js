import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {

  const variables = {
    id: repositoryId,
    first: 5 // first: 5 does not activate fetchMore when SingleRepository loads
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { 
    repository: data?.repository,
    error,
    loading,
    fetchMore: handleFetchMore,
    ...result
   };
};

export default useRepository;