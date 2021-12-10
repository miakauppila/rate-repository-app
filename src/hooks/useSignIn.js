import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/queries';

const useSignIn = () => {
    const [mutateFn, result] = useMutation(AUTHORIZE_USER);
    console.log('result in useSignIn:', result);

    const signIn = async ({ username, password }) => {
        // call the mutate function and return!
        return mutateFn({ variables: { username, password } });
    };

    // result from useMutation hook
    return [signIn, result];
};

export default useSignIn;