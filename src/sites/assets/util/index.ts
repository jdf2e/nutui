const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);
const isJDT = () => {
  return window.parent.location.href.includes('jdt');
};
const isJDB = () => {
  return window.parent.location.href.includes('jdb');
};
const isJDDKH = () => {
  return window.parent.location.href.includes('jddkh');
};
export { isMobile, isJDT, isJDB, isJDDKH };
