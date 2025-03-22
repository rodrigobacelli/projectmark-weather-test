import { describe, it, expect, vi } from 'vitest';
import { render } from '../../tests/test-utils';
import { DataUpdater } from './';
import { format } from 'date-fns/format';

const commonDate = new Date(1740798000);

describe('components/DataUpdater', () => {
  it('should render the date label when date is set', () => {
    const result = render(<DataUpdater lastUpdated={commonDate} />);

    expect(result.container.getElementsByTagName('time')[0]).toHaveAttribute(
      'dateTime',
      format(commonDate, 'yyyy-MM-dd HH:mm:ss')
    );
  });

  it('should render the DataUpdater update button', () => {
    const result = render(<DataUpdater />);

    expect(result.getByRole('button')).toBeInTheDocument();
    expect(result.getByRole('button')).toContainHTML('Update');
  });

  it('should handle DataUpdater update button click', async () => {
    const onUpdate = vi.fn();
    const result = render(<DataUpdater onUpdate={onUpdate} />);

    await result.getByRole('button').click();

    expect(onUpdate).toHaveBeenCalledTimes(1);
  });

  it('should disable the update button when isUpdating is true', () => {
    const result = render(<DataUpdater isUpdating />);

    expect(result.getByRole('button')).toBeDisabled();
  });

  it('should accept classNames', () => {
    const result = render(<DataUpdater className="data-updater-className" />);

    expect(
      result.container.querySelector('.data-updater-className')
    ).toBeInTheDocument();
  });

  it('should render the DataUpdater Component', () => {
    const result = render(
      <DataUpdater
        lastUpdated={commonDate}
        className="data-updated-className"
      />
    );

    expect(result).toMatchSnapshot();
  });
});
