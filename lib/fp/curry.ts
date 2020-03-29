export const curry = (fn: Function, ...args: any[]) => {
  const length = fn.length;
  const boundFn = fn.bind(null, ...args);
  if (args.length === length) {
    return boundFn();
  }
  return (...moreArgs: any[]) => curry(boundFn, ...moreArgs);
};
