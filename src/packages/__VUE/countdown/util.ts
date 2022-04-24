export const padZero = (num: number | string, length = 2) => {
  num += '';
  while ((num as string).length < length) {
    num = '0' + num;
  }
  return num.toString();
};

// 时间戳转换 或 获取当前时间的时间戳
export const getTimeStamp = (timeStr?: string | number) => {
  if (!timeStr) return Date.now();
  let t = timeStr;
  t = t > 0 ? +t : t.toString().replace(/\-/g, '/');
  return new Date(t).getTime();
};
