import { Film } from '../modules/films/queries/types';

export const FilmMock = (props: Partial<Film> = {}): Film => {
  return {
    releaseDate: '1977-05-25',
    id: 'ZmlsbXM6MQ==',
    director: 'George Lucas',
    producers: ['Gary Kurtz', 'Rick McCallum'],
    title: 'A New Hope',
    episodeID: 4,
    openingCrawl: 'It is a period of civil war.',
    ...props,
  };
};
