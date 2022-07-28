import { render } from '@testing-library/react';
import BetaAccess from '../pages/beta-access';

it('renders BetaAccess unchanged', () => {
  const { container } = render(<BetaAccess />);
  expect(container).toMatchSnapshot();
});
