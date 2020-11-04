/*
处理code
*/
module.exports = function codeWrapper(html) {
  const group = html.replace(/<\/pre>/g, '</pre>:::').split(':::');
  const codeOnline = `<div class="handle-part"><a href="https://gitpod.io/#https://github.com/jdf2e/nutui.git" target="_blank" class="online-btn">在线运行</a></div>`;
  return group
    .map(fragment => {
      if (fragment.indexOf('</div>demo') !== -1) {
        return fragment.replace('<p></div>demo</p>', '') + codeOnline;
      }
      return fragment;
    })
    .join('');
};
