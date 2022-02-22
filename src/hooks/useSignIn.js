import { useMutation } from '@apollo/client';
import { AUTHORIZE_USER } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    // access authStorageContext via custom hook
    const authStorage = useAuthStorage();
    // GraphQL mutation hook
    const [mutateFn, result] = useMutation(AUTHORIZE_USER);
    //console.log('result in useSignIn:', result);

    // access ApolloClient instance being used by the application 
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
        // call the mutate function
        const { data } = await mutateFn({ variables: { username, password } });
        console.log(data);
        await authStorage.setAccessToken(data.authorize.accessToken);
        // clear cache and re-execute queries
        apolloClient.resetStore();
    };

    // result from useMutation hook
    return [signIn, result];
};

export default useSignIn;