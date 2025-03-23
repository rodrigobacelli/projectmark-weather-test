import { vi } from 'vitest';

vi.mock('date-fns/format', () => ({
  format: vi.fn().mockReturnValue('2025-01-01 00:00:00'),
}));
