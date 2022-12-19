import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import FilmDetailView from '../FilmDetailView';
import { FilmDetailResponse } from '../../../queries/types';
import { FILM_DETAIL } from '../../../queries';
import { FilmMock } from '../../../../../mocks';
import { GraphQLError } from 'graphql';

const mockedFilm: MockedResponse<FilmDetailResponse> = {
  request: {
    query: FILM_DETAIL,
    variables: { filmId: '1' },
  },
  result: {
    data: { film: FilmMock({ id: '1' }) },
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/films/1' }),
}));

const setup = (mock: MockedResponse<FilmDetailResponse> = mockedFilm) => {
  const view = render(
    <MockedProvider
      mocks={[mock]}
      addTypename={false}
    >
      <BrowserRouter>
        <FilmDetailView />
      </BrowserRouter>
    </MockedProvider>
  );

  return {
    ...view,
  };
};

describe('FilmDetail', () => {
  test('should render the component', () => {
    const { container } = setup();

    expect(container).toBeInTheDocument();
  });

  test('should render list of films', async () => {
    const { findByText, findByTestId } = setup();

    expect(await findByTestId('loading')).toBeInTheDocument();

    expect(await findByText(FilmMock().title)).toBeInTheDocument();
  });

  test('should render error', async () => {
    const mockedError = {
      request: {
        query: FILM_DETAIL,
        variables: { filmId: '1' },
      },
      error: new Error('An error occurred'),
    };

    const { findByTestId, findByText } = setup(mockedError);

    expect(await findByTestId('loading')).toBeInTheDocument();

    expect(await findByText('An error occurred')).toBeInTheDocument();
  });

});
