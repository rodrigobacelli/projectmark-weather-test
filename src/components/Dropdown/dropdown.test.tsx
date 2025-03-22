import { describe, it, expect, vi } from 'vitest';
import { render } from '../../tests/test-utils';
import { Dropdown } from './';

const mockedOptions = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
];

const mockedOptionsWithIcon = [
  ...mockedOptions,
  {
    label: 'Option 4',
    value: 'option4',
    icon: () => <div data-testid="option4-icon">Icon</div>,
  },
];

describe('components/Dropdown', () => {
  it('should handle selecting an option', async () => {
    const onSelect = vi.fn();

    const result = render(
      <Dropdown
        id="dropdown"
        className="dropdown-className"
        options={mockedOptions}
        selectedOption="option1"
        onSelect={onSelect}
      />
    );

    await result.getByRole('combobox').click();
    await result.getByText('Option 3').click();

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith('option3');
  });

  it('should render icons for options with icons', async () => {
    const result = render(
      <Dropdown
        id="dropdown"
        className="dropdown-className"
        options={mockedOptionsWithIcon}
        selectedOption="option4"
      />
    );

    expect(
      result.getByRole('combobox').querySelector('[data-testid="option4-icon"]')
    ).toBeInTheDocument();

    await result.getByRole('combobox').click();

    expect(
      result.getByRole('listbox').querySelector('[data-testid="option4-icon"]')
    ).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(
      <Dropdown
        id="dropdown"
        className="dropdown-className"
        options={mockedOptions}
        selectedOption="option1"
      />
    );

    expect(
      result.container.querySelector('.dropdown-className')
    ).toBeInTheDocument();
  });

  it('should render the Header Component', () => {
    const result = render(
      <Dropdown
        id="dropdown"
        className="dropdown-className"
        options={[
          ...mockedOptions,
          {
            value: 'option4',
            label: 'Option 4',
          },
        ]}
        selectedOption="option1"
      />
    );

    expect(result).toMatchSnapshot();
  });
});
