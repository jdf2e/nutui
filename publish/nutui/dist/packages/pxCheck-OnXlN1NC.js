const pxCheck = (value) => {
  if (value !== void 0) {
    return isNaN(Number(value)) ? String(value) : `${value}px`;
  }
};
export {
  pxCheck as p
};
