import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Footer } from './';

describe('components/Footer', () => {
  it('should render the Footer Component', () => {
    const result = render(<Footer />);

    expect(result).toMatchSnapshot();
  });
});
