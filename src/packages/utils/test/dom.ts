import { vi } from 'vitest';

export const mockElementMethod = (element: any, method: string) => {
  const fn = vi.fn();
  element.prototype[method] = fn;
  return fn;
};
