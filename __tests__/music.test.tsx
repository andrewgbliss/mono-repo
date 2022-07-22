import { render } from '@testing-library/react';
import Music from '../pages/music';

it('renders music unchanged', () => {
  const { container } = render(<Music />);
  expect(container).toMatchSnapshot();
});
