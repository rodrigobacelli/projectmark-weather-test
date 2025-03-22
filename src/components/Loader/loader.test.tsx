import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Loader } from './';

describe('components/NoResults', () => {
  it('should accept classNames', () => {
    const result = render(<Loader className="loader-className" />);

    expect(
      result.container.querySelector('.loader-className')
    ).toBeInTheDocument();
  });

  it('should render the NoResults Component', () => {
    const result = render(<Loader className="loader-className" />);

    expect(result).toMatchSnapshot();
  });
});
