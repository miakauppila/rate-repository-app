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

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id,
      fullName,
      reviewCount,
      ratingAverage,
      forksCount,
      stargazersCount,
      description,
      language,
      ownerAvatarUrl,
      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
        id
        username
    }
  }
`;