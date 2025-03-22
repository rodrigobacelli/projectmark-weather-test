import { describe, it, expect, vi } from 'vitest';
import { render } from '../../tests/test-utils';
import { Button } from './';

describe('components/Button', () => {
  it('should render the Button Label', () => {
    const result = render(<Button>Label</Button>);

    expect(result.getByText('Label')).toBeInTheDocument();
  });

  it('should render the Button StartIcon', () => {
    const result = render(
      <Button startIcon={() => <div data-testid="startIcon" />}>Label</Button>
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
      result.container.querySelector('.button-className')
    ).toBeInTheDocument();
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
