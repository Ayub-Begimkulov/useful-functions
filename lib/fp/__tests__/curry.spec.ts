import { curryRight } from '../curryRight';
import { curry } from '../curry';

describe('curry', () => {
  it('defined', () => {
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

  it('curry right function correctly', () => {
    let a = (a: number, b: number, c: number) => [a, b, c];
    expect(curryRight(a)(1, 2, 3)).toEqual([1, 2, 3]);
    console.log(curryRight(a)(1, 2));
    expect(curryRight(a)(1, 2)(3)).toEqual([3, 1, 2]);
    expect(curryRight(a)(1)(2, 3)).toEqual([2, 3, 1]);
    expect(curryRight(a)(1)(2)(3)).toEqual([3, 2, 1]);
    expect(curryRight(a, 1, 2, 3)).toEqual([1, 2, 3]);
    expect(curryRight(a, 1, 2)(3)).toEqual([3, 1, 2]);
    expect(curryRight(a, 1)(2, 3)).toEqual([2, 3, 1]);
    expect(curryRight(a, 1)(2)(3)).toEqual([3, 2, 1]);
  });
});
