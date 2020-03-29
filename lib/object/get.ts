import { toPath } from 'lib';

export const get = (obj, props, defaultValue?) => {
  const [nextKey, ...keys] = Array.isArray(props) ? props : toPath(props);
  const result = obj[nextKey];

  if (result && keys.length > 0) {
    return get(result, keys, defaultValue);
  }

  return result === undefined ? defaultValue : result;
};
