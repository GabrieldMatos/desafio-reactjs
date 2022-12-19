import FilmDetailView from '../modules/films/views/FilmDetailView';
import FilmsView from '../modules/films/views/FilmsView';

export const FilmRoute = {
  path: 'films',
  name: 'films',
  element: <FilmsView />,
};

export const FilmDetailRoute = {
  path: 'films/:id',
  name: 'film-detail',
  element: <FilmDetailView />,
};

export const Error404Route = {
  path: '*',
  name: '404',
  element: <>404</>,
};

const ROUTES = [FilmRoute, FilmDetailRoute, Error404Route];

export default ROUTES;
