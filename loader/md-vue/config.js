/* eslint-disable @typescript-eslint/no-var-requires */
/*markdown-it的配置文件*/
const Config = require('markdown-it-chain'); //链式配置
const anchorPlugin = require('markdown-it-anchor'); //给页眉添加锚点
const slugify = require('transliteration').slugify;
const hljs = require('highlight.js');
const containers = require('./containers');
const overWriteFenceRule = require('./fence');

const config = new Config();

const highlight = (str, lang) => {
  if (!lang || !hljs.getLanguage(lang)) {
    return '<pre><code class="hljs">' + str + '</code></pre>';
  }
  const html = hljs.highlight(lang, str, true, undefined).value;
  return `<pre><code class="hljs language-${lang}">${html}</code></pre>`;
};

config.options
  .html(true)
  .highlight(highlight)
  .end()

  // .plugin('anchor').use(anchorPlugin, [
  //   {
  //     level: 2,
  //     slugify: slugify,
  //     permalink: false,
  //     permalinkBefore: false,
  //   },
  // ]).end()

  .plugin('containers')
  .use(containers)
  .end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
