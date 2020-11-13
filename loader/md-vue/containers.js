/* eslint-disable @typescript-eslint/no-var-requires */
const mdContainer = require('markdown-it-container');

module.exports = md => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : '';
        /*
        tokens是一个数组，里面是块级容器里面所有md代码的code,按照一定规则分割，例如
        tokens[idx].type === 'fence'意味着被```包裹的东西
        */
        const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
        return `<demo-block>
        ${description ? `<div>${md.render(description)}</div>` : ''}
        `;
      }
      return '</demo-block>';
    }
  });

  md.use(mdContainer, 'tip');
  md.use(mdContainer, 'warning');
};
