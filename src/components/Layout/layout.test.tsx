import { describe, it, expect } from 'vitest';
import { render } from '../../tests/test-utils';
import { Layout } from './';

describe('components/Layout', () => {
  it('should render the Container children', () => {
    const result = render(<Layout>Layout Content</Layout>);

    expect(result.getByText('Layout Content')).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(
      <Layout className="layout-className">Layout Content</Layout>
    );

    expect(
      result.container.querySelector('.layout-className')
    ).toBeInTheDocument();
  });

  it('should accept render the Header', () => {
    const result = render(<Layout>Layout Content</Layout>);

    expect(result.container.querySelector('header')).toBeInTheDocument();
  });

  it('should accept render the Footer', () => {
    const result = render(<Layout>Layout Content</Layout>);

    expect(result.container.querySelector('footer')).toBeInTheDocument();
  });

  it('should render the Layout Component', () => {
    const result = render(
      <Layout className="layout-className">Layout Content</Layout>
    );

    expect(result).toMatchSnapshot();
  });
});
