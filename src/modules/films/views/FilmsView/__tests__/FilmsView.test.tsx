import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import FilmsView from '../FilmsView';
import { FILMS } from '../../../queries';
import { FilmMock } from '../../../../../mocks';
import { AllFilmsResponse } from '../../../queries/types';

const ids = ['1', '2', '3', '4'];

const mockedFilms: MockedResponse<AllFilmsResponse> = {
  request: {
    query: FILMS,
  },
  result: {
    data: { allFilms: { films: ids.map(id => FilmMock({ id })) } },
  },
};

const setup = (mock: MockedResponse<AllFilmsResponse> = mockedFilms) => {
  const view = render(
    <MockedProvider
      mocks={[mock]}
      addTypename={false}
    >
      <BrowserRouter>
        <FilmsView />
      </BrowserRouter>
    </MockedProvider>
  );

  return {
    ...view,
  };
};

describe('FilmsView', () => {
  test('should render the component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should render list of films', async () => {
    const { findAllByTestId, findByTestId } = setup();

    expect(await findByTestId('loading')).toBeInTheDocument();

    expect(await findAllByTestId('list-item')).toHaveLength(4);
  });

  test('should render error', async () => {
    const mockedError = {
      request: {
        query: FILMS,
      },
      error: new Error('An error occurred'),
    };
    const { findByTestId, findByText } = setup(mockedError);

    expect(await findByTestId('loading')).toBeInTheDocument();

    expect(await findByText('An error occurred')).toBeInTheDocument();
  });
});
