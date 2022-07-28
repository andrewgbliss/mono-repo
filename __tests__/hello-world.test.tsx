import { render } from '@testing-library/react';
import HelloWorld from '../pages/hello-world';

it('renders hello world unchanged', () => {
  const { container } = render(<HelloWorld />);
  expect(container).toMatchSnapshot();
});
