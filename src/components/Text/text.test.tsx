import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Text } from './';

describe('components/Text', () => {
  it('should render the Text children', () => {
    const result = render(<Text>Text Content</Text>);

    expect(result.getByText('Text Content')).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(
      <Text className="text-className">Container Content</Text>
    );

    expect(
      result.container.querySelector('.text-className')
    ).toBeInTheDocument();
  });

  it('should render the Container Component', () => {
    const result = render(<Text className="text-className">Text Content</Text>);

    expect(result).toMatchSnapshot();
  });
});
