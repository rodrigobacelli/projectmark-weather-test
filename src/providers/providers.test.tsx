import { describe, it, expect } from 'vitest';
import { render } from '../tests/test-utils';
import { Providers } from './';

describe('providers/Providers', () => {
  it('should render the Container children', () => {
    const result = render(<Providers>Providers Content</Providers>);

    expect(result.getByText('Providers Content')).toBeInTheDocument();
  });

  it('should render the Providers Component', () => {
    const result = render(<Providers>Providers Content</Providers>);

    expect(result).toMatchSnapshot();
  });
});
