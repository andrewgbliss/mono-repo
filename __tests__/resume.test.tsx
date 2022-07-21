import { render } from '@testing-library/react';
import Resume from '../pages/resume';

it('renders resume unchanged', () => {
  const { container } = render(<Resume />);
  expect(container).toMatchSnapshot();
});
