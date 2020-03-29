export const compose = (...fns) => fns.reduce((a, b) => (...n) => a(b(...n)));
