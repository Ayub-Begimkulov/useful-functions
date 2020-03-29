const toPath = (str: string) =>
  str
    .replace(/(\[(\d)\])/g, '.$2')
    .split('.')
    .filter(s => s.length > 0);

const get = (obj, props, defaultValue?) => {
  const [nextKey, ...keys] = Array.isArray(props) ? props : toPath(props);
  const result = obj[nextKey];

  if (result && keys.length > 0) {
    return get(result, keys, defaultValue);
  }

  return result === undefined ? defaultValue : result;
};

const pipe = (...fns) => fns.reduce((a, b) => (...n) => b(a(...n)));
const compose = (...fns) => fns.reduce((a, b) => (...n) => a(b(...n)));
