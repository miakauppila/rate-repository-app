import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useUserReviews = () => {

    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
        variables: { includeReviews: true }, // default in the query is false
        fetchPolicy: 'cache-and-network'
    });

    console.log('useUserReviews', data);

    const reviews = data?.authorizedUser?.reviews;

    return { reviews, error, loading };
};

export default useUserReviews;