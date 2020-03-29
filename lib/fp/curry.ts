export const curry = (fn: Function, ...args: any[]) => {
  const argsAmount = fn.length;
  const boundFn = fn.bind(null, ...args);
  if (args.length >= argsAmount) {
    return boundFn();
  }
  return (...moreArgs: any[]) => curry(boundFn, ...moreArgs);
};
