import { gql } from '@apollo/client';

export const FILMS = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        id
      }
    }
  }
`;