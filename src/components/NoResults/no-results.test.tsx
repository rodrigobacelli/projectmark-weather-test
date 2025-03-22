import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NoResults } from './';

describe('components/NoResults', () => {
  it('should accept classNames', () => {
    const result = render(<NoResults className="no-results-className" />);

    expect(
      result.container.querySelector('.no-results-className')
    ).toBeInTheDocument();
  });

  it('should render the NoResults Component', () => {
    const result = render(<NoResults className="no-results-className" />);

    expect(result).toMatchSnapshot();
  });
});
