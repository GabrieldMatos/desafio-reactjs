import { FilmCardProps } from '../types';
import { FilmMock } from '../../../../../mocks';
import FilmCard from '../FilmCard';
import { render } from '@testing-library/react';
import { dateFormatter } from '../../../utils/dateFormatter';

const setup = (props: Partial<FilmCardProps> = {}) => {
  const film = FilmMock();
  const defaultProps: FilmCardProps = { ...film, onClick: jest.fn() };

  const setupProps = { ...defaultProps, ...props };

  const view = render(<FilmCard {...setupProps} />);

  return {
    ...view,
    ...setupProps,
  };
};

describe('FilmCard', () => {
  test('should render the component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should render film props', () => {
    const { getByText, title, releaseDate, director } = setup();

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(dateFormatter(releaseDate))).toBeInTheDocument();
    expect(getByText(director)).toBeInTheDocument();
  });

  test('should fire onCLick event', () => {
    const handleClick = jest.fn();
    setup({ onClick: handleClick() });

    expect(handleClick).toBeCalledTimes(1);
  });
});
