import { FilmDescriptionProps } from '../types';
import { FilmMock } from '../../../../../mocks';
import FilmDescription from '../FilmDescription';
import { render } from '@testing-library/react';
import { dateFormatter } from '../../../utils/dateFormatter';

const setup = (props: Partial<FilmDescriptionProps> = {}) => {
  const film = FilmMock();
  const defaultProps: FilmDescriptionProps = { film };

  const setupProps = { ...defaultProps, ...props };

  const view = render(<FilmDescription {...setupProps} />);

  return {
    ...view,
    ...setupProps,
  };
};

describe('FilmDescription', () => {
  test('should render the component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should render film props', () => {
    const { getByText, film } = setup();

    expect(getByText(film.title)).toBeInTheDocument();
    expect(getByText(dateFormatter(film.releaseDate))).toBeInTheDocument();
    expect(getByText(film.director)).toBeInTheDocument();
    expect(getByText(film.episodeID)).toBeInTheDocument();
    expect(getByText(film.openingCrawl)).toBeInTheDocument();
    expect(getByText(film.producers[0])).toBeInTheDocument();
  });

});
