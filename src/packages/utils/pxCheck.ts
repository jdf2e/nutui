export const pxCheck = (value?: string | number): string | undefined => {
  if (value !== undefined) {
    return isNaN(Number(value)) ? String(value) : `${value}px`
  }
}
