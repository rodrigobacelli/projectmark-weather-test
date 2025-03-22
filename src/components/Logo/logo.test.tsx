import { describe, it, expect } from 'vitest';
import { render } from '../../tests/test-utils';
import { Logo } from './';

describe('components/Logo', () => {
  it('should render the Logo Component', () => {
    const result = render(<Logo />);

    expect(result).toMatchSnapshot();
  });
});
