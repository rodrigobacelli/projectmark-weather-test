import { describe, it, expect } from 'vitest';
import { render } from '../../tests/test-utils.tsx';
import { ThemeDropdown } from './';

describe('components/ThemeDropdown', () => {
  it('should handle selecting a theme', async () => {
    const result = render(
      <ThemeDropdown className="theme-dropdown-className" />
    );

    expect(result.getByRole('combobox')).toContainHTML('System');

    await result.getByRole('combobox').click();
    await result.getByText('Dark').click();

    expect(result.getByRole('combobox')).toContainHTML('Dark');
  });

  it('should accept classNames', () => {
    const result = render(
      <ThemeDropdown className="theme-dropdown-className" />
    );

    expect(
      result.container.querySelector('.theme-dropdown-className')
    ).toBeInTheDocument();
  });

  it('should render the Header Component', () => {
    const result = render(
      <ThemeDropdown className="theme-dropdown-className" />
    );

    expect(result).toMatchSnapshot();
  });
});
