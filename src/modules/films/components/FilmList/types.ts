import { Film } from '../../queries/types';

export interface FilmListProps {
  films: Film[];
  onClickItem: (id: string) => void;
}
