import { render } from '@testing-library/react';
import Swapi from '../pages/swapi';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.doMock();
});

it('renders Swapi unchanged', () => {
  const { container } = render(<Swapi />);
  expect(container).toMatchSnapshot();
});
