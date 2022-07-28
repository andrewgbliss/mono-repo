import { render } from '@testing-library/react';
import Startup from '../pages/startup';

it('renders Startup unchanged', () => {
  const { container } = render(<Startup />);
  expect(container).toMatchSnapshot();
});
