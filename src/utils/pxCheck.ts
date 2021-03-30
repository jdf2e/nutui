export const pxCheck = (value: string | number) => {
  return typeof Number(value) === 'number' ? `${value}px` : String(value);
};
