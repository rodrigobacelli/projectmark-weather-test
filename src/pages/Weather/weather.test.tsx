import { describe, it, expect, afterEach, afterAll, beforeEach } from 'vitest';
import { http, HttpResponse } from 'msw';

import { render, waitFor } from '../../tests/test-utils';
import { server } from '../../tests/msw';

import '../../tests/mocks/date-fns.ts';

import { Weather } from './';

beforeEach(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('pages/Weather', () => {
  it('should render the Weather Cards after the response loads', async () => {
    const result = render(<Weather />);

    expect(result.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render the Weather Cards after the response loads', async () => {
    const result = render(<Weather />);

    await waitFor(() => {
      expect(result.findByText('City Name, US')).toBeTruthy();
      expect(result.getAllByTestId('weather-card')).toHaveLength(3);
    });
  });

  it('should render an empty state when the response is empty', async () => {
    server.use(
      http.get('https://api.openweathermap.org/data/2.5/weather', () => {
        return HttpResponse.json(null, { status: 204 });
      })
    );

    const result = render(<Weather />);

    await waitFor(() => {
      expect(result.container.querySelector('#no-content')).toBeInTheDocument();
    });

    server.resetHandlers();
  });

  it('should render the Weather Page', async () => {
    const result = render(<Weather />);

    await waitFor(() => {
      expect(result.getByTestId('weather-page')).toBeInTheDocument();
    });

    expect(result).toMatchSnapshot();
  });
});
