import { gql } from '@apollo/client';

export const FILM_DETAIL = gql`
  query($filmId: ID) {
    film(id: $filmId) {
      id
      director
      producers
      releaseDate
      title
      episodeID
      openingCrawl
    }
  }
`;