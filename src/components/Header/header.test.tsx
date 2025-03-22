import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './';

describe('components/Header', () => {
  it('should accept classNames', () => {
    const result = render(<Header className="header-className" />);

    expect(
      result.container.querySelector('.header-className')
    ).toBeInTheDocument();
  });

  it('should render the Header Component', () => {
    const result = render(<Header className="header-className" />);

    expect(result).toMatchSnapshot();
  });
});
