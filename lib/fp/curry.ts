export const curry = (fn: Function, ...args: any[]) => {
  return fn.length === 0 || curryN(fn.length, fn, ...args);
};

export const curryN = (length: number, fn: Function, ...args: any[]) => {
  const diff = length - args.length;
  const newFn = (...otherArgs: any[]) => fn(...args, ...otherArgs);

  if (diff <= 0) {
    return newFn();
  }

  return (...otherArgs: any[]) => curryN(diff, newFn, ...otherArgs);
};
