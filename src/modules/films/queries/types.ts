export interface AllFilmsResponse {
  allFilms: { films: Film[] };
}

export interface FilmDetailResponse {
  film: Film;
}

export interface Film {
  id: string;
  title: string;
  director: string;
  releaseDate: string;
  episodeID: number;
  openingCrawl: string;
  producers: string[];
}
