export const curryRight = (fn: Function, ...args: any[]) => {
  return fn.length === 0 || curryNRight(fn.length, fn, ...args);
};

export const curryNRight = (length: number, fn: Function, ...args: any[]) => {
  const diff = length - args.length;
  const newFn = (...otherArgs: any[]) => fn(...otherArgs, ...args);

  if (diff <= 0) {
    return newFn();
  }

  return (...otherArgs: any[]) => curryNRight(diff, newFn, ...otherArgs);
};
