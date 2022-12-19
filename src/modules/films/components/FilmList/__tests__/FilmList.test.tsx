import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilmListProps } from '../types';
import { FilmMock } from '../../../../../mocks';
import FilmList from '../FilmList';

const setup = (props: Partial<FilmListProps> = {}) => {
  const ids = ['1', '2', '3', '4'];
  const films = ids.map(id => FilmMock({ id }));
  const defaultProps: FilmListProps = { films, onClickItem: jest.fn() };

  const setupProps = { ...defaultProps, ...props };

  const view = render(<FilmList {...setupProps} />);

  return {
    ...view,
    ...setupProps,
    films,
  };
};

describe('FilmList', () => {
  test('should render the component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should render films', () => {
    const { getAllByTestId } = setup();

    expect(getAllByTestId('list-item')).toHaveLength(4);
  });

  test('should click item', () => {
    const handleClickItem = jest.fn();
    const { getAllByTestId } = setup({ onClickItem: handleClickItem() });
    const firstItem = getAllByTestId('list-item')[0];

    userEvent.click(firstItem);
    expect(handleClickItem).toHaveBeenCalledTimes(1);
  });
});
