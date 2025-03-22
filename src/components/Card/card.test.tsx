import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Card } from './';

describe('components/Card', () => {
  it('should render the Card children', () => {
    const result = render(<Card>Card Content</Card>);

    expect(result.getByText('Card Content')).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(
      <Card data-testid="card" className="card-className">
        Card Content
      </Card>
    );

    expect(
      result.getByTestId('card').classList.contains('card-className')
    ).toBeTruthy();
  });

  it('should render the Card Component', () => {
    const result = render(<Card className="card-className">Card Content</Card>);

    expect(result).toMatchSnapshot();
  });
});
