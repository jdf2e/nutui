/*
把<h>标题，替换为:::分割的标题，然后可以定制化的处理h标题
*/
module.exports = function cardWrapper(html) {
  const group = html
    .replace(/<h3/g, ':::<h3')
    .replace(/<h2/g, ':::<h2')
    .split(':::');

  return group
    .map(fragment => {
      if (fragment.indexOf('<h3') !== -1) {
        return `<div>${fragment}</div>`;
      }

      return fragment;
    })
    .join('');
};
