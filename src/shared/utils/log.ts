export const logError = (d: unknown) => {
  console.error('\x1b[31m%s\x1b[0m', JSON.stringify(d, null, 2));
};
