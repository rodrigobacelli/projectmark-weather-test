import { describe, it, expect } from 'vitest';
import { render } from '../../tests/test-utils';
import { Container } from './';

describe('components/Container', () => {
  it('should render the Container children', () => {
    const result = render(<Container>Container Content</Container>);

    expect(result.getByText('Container Content')).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(
      <Container data-testid="container" className="container-className">
        Container Content
      </Container>
    );

    expect(
      result.container.querySelector('.container-className')
    ).toBeInTheDocument();
  });

  it('should render the Container Component', () => {
    const result = render(
      <Container className="container-className">Container Content</Container>
    );

    expect(result).toMatchSnapshot();
  });
});
