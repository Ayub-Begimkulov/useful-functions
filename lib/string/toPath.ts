export const toPath = (str: string) =>
  str
    .replace(/(\[(\d)\])/g, '.$2')
    .split('.')
    .filter(s => s.length > 0);
