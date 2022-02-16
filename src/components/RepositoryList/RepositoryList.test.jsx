import React from 'react';
import { render } from '@testing-library/react-native';
import RepositoryListContainer from './RepositoryListContainer';

// mock the default export in tests 
// because magnify icon in the Searchbar causes an error in the console
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return {
    default: jest.fn(() => 'MockedMaterialCommunityIcon'),
  };
});

describe('RepositoryList', () => {

  describe('RepositoryListContainer', () => {

    it('renders repository information correctly', () => {

      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      // destructure debug from render above
      //debug();

      const names = getAllByTestId('name');
      expect(names[0]).toHaveTextContent('jaredpalmer/formik');
      expect(names[1]).toHaveTextContent('async-library/react-async');

      const desc = getAllByTestId('description');
      expect(desc[0]).toHaveTextContent('Build forms in React, without the tears');
      expect(desc[1]).toHaveTextContent('Flexible promise-based React data loader');

      const languages = getAllByTestId('language');
      expect(languages[0]).toHaveTextContent('TypeScript');
      expect(languages[1]).toHaveTextContent('JavaScript');

      const stars = getAllByTestId('stars');
      // note that RepositoryItem component formats the numbers
      expect(stars[0]).toHaveTextContent('21.9k');
      expect(stars[1]).toHaveTextContent('1.8k');

      const ratings = getAllByTestId('rating');
      expect(ratings[0]).toHaveTextContent('88');
      expect(ratings[1]).toHaveTextContent('72');

      const reviews = getAllByTestId('reviews');
      expect(reviews[0]).toHaveTextContent('3');
      expect(reviews[1]).toHaveTextContent('3');
    });

  });
});