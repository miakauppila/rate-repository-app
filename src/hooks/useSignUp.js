import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
    // GraphQL mutation hook
    const [mutateFn, result] = useMutation(CREATE_USER);
    console.log('result in useSignUp:', result);

    const signUp = async ({ username, password }) => {
        // call the mutate function
        const { data } = await mutateFn({ variables: { username, password } });
        console.log(data);
    };

    return [signUp, result];
};

export default useSignUp;