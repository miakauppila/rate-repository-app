import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            node {
              id,
              fullName,
              reviewCount,
              ratingAverage,
              forksCount,
              stargazersCount,
              description,
              language,
              ownerAvatarUrl
            }
        }
    }
  }
`;

export const AUTHORIZE_USER = gql`
    mutation authorizeUser($username: String!, $password: String!) {
      authorize(credentials: { username: $username, password: $password }) {
        accessToken
      }
    }
`;
