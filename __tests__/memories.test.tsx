import { render } from '@testing-library/react';
import Memories from '../pages/memories';

it('renders Memories unchanged', () => {
  const { container } = render(<Memories />);
  expect(container).toMatchSnapshot();
});
