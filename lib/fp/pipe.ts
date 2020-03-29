export const pipe = (...fns) => fns.reduce((a, b) => (...n) => b(a(...n)));
