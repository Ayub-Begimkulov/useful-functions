import { curry } from '../curry';

describe('curry', () => {
  it('module', () => {
    expect(curry).toBeDefined();
  });

  it('curry function correctly', () => {
    let a = (a: number, b: number, c: number) => [a, b, c];
    expect(curry(a)(1, 2, 3)).toEqual([1, 2, 3]);
    expect(curry(a)(1, 2)(3)).toEqual([1, 2, 3]);
    expect(curry(a)(1)(2, 3)).toEqual([1, 2, 3]);
    expect(curry(a)(1)(2)(3)).toEqual([1, 2, 3]);
    expect(curry(a, 1, 2, 3)).toEqual([1, 2, 3]);
    expect(curry(a, 1, 2)(3)).toEqual([1, 2, 3]);
    expect(curry(a, 1)(2, 3)).toEqual([1, 2, 3]);
    expect(curry(a, 1)(2)(3)).toEqual([1, 2, 3]);
  });
});
