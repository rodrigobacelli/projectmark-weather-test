import { describe, it, expect, beforeEach, afterEach, afterAll } from 'vitest';
import { render } from '../../tests/test-utils';
import { server } from '../../tests/msw';

import '../../tests/mocks/react-query';

import { Weather } from './';

beforeEach(async () => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('pages/Weather', () => {
  it('should render the Weather Cards according to the response', () => {
    const result = render(<Weather />);

    expect(result.findByText('City Name, US')).toBeTruthy();
    console.log(result.container.querySelectorAll('article'));
    expect(result.getAllByTestId('weather-card')).toHaveLength(3);
  });

  it('should render the Weather Page', () => {
    const result = render(<Weather />);

    expect(result).toMatchSnapshot();
  });
});
