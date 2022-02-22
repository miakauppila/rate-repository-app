import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
    // GraphQL mutation hook
    const [mutateFn, result] = useMutation(CREATE_REVIEW);
    //console.log('result in useReview:', result);

    const createReview = async ({ ownerName, repositoryName, rating, review }) => {
        // call the mutate function
        const { data } = await mutateFn({ variables: { ownerName, repositoryName, rating, text: review } });
        return data;
    };

    return [createReview, result];
};

export default useReview;