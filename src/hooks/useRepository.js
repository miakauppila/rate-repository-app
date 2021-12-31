import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (repositoryId) => {

  const { data, error, loading} = useQuery(GET_REPOSITORY, {
    variables: { id: repositoryId },
    fetchPolicy: 'cache-and-network'
  });

  console.log('Single repo', data);

  const repository = data?.repository;

  return { repository, error, loading };
};

export default useRepository;