import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { IconButton } from './';

describe('components/IconButton', () => {
  it('should render the Button Icon', () => {
    const result = render(
      <IconButton icon={() => <div data-testid="startIcon" />} />
    );

    expect(result.getByTestId('startIcon')).toBeInTheDocument();
  });

  it('should render the Button EndIcon', () => {
    const result = render(
      <Button endIcon={() => <div data-testid="endIcon" />}>Label</Button>
    );

    expect(result.getByTestId('endIcon')).toBeInTheDocument();
  });

  it('should accept classNames', () => {
    const result = render(<Button className="button-className">Label</Button>);

    expect(
      result.getByRole('button').classList.contains('button-className')
    ).toBeTruthy();
  });

  it('should handle Button click', async () => {
    const onClick = vi.fn();
    const result = render(<Button onClick={onClick}>Label</Button>);

    await result.getByRole('button').click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render the Button Component', () => {
    const result = render(
      <Button
        endIcon={() => <div data-testid="endIcon" />}
        startIcon={() => <div data-testid="startIcon" />}
        className="button-className"
      >
        Label
      </Button>
    );

    expect(result).toMatchSnapshot();
  });
});
