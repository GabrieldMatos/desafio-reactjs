import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from '../App';

test('should render', () => {
  const {container}  = render(
    <MockedProvider
      mocks={[]}
      addTypename={false}
    >
      <App />
    </MockedProvider>
  );
  expect(container).toBeInTheDocument();
});
