import { describe, expect, it } from 'vitest';
import { sum } from './index.js';

describe('sum', () => {
  it('deve somar dois números positivos', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('deve somar números negativos', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

  it('deve somar positivo e negativo', () => {
    expect(sum(10, -3)).toBe(7);
  });
});
