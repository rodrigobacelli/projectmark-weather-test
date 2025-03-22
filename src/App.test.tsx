import { describe, it, expect } from 'vitest';
import { render } from './tests/test-utils.tsx';
import { App } from './App';

describe('App', () => {
  it('should render the App', () => {
    const result = render(<App />);

    expect(result).toMatchSnapshot();
  });
});
