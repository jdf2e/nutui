import { vi } from 'vitest';

export const mockScrollTo = () => {
  const fn = vi.fn();
  Element.prototype.scrollTo = fn;
  return fn;
};
mockScrollTo();
