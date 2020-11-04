const loaderUtils = require('loader-utils'); //:loader-utils 是一个npm i loader-utils -D 安装的插件，便于获取webpack.config.js 中配置loader的options；
const MarkdownIt = require('markdown-it'); //渲染 markdown 基本语法
const markdownItAnchor = require('markdown-it-anchor'); //为各级标题添加锚点
const frontMatter = require('front-matter'); //就是md文档最上面的内容 类似于docz中的路由/标题的设置部分
const highlight = require('./highlight');
const linkOpen = require('./link-open');
const cardWrapper = require('./card-wrapper');
const codeWrapper = require('./code-wrapper');

const { slugify } = require('transliteration');

function wrapper(content) {
  content = cardWrapper(content);
  content = codeWrapper(content);
  content = escape(content);

  return `
import { h } from 'vue';

const content = unescape(\`${content}\`);

export default {
  mounted() {
    const anchors = [].slice.call(this.$el.querySelectorAll('h2, h3, h4, h5'));

    anchors.forEach(anchor => {
      anchor.addEventListener('click', this.scrollToAnchor);
    });
  },

  methods: {
    scrollToAnchor(event) {
      if (event.target.id) {
        this.$router.push({
          path: this.$route.path,
          hash: '#'+event.target.id
        })
      }
    }
  },

  render() {
    return h('section', { innerHTML: content });
  }
};
`;
}

const parser = new MarkdownIt({
  html: true,
  linkify: true,
  highlight
}).use(markdownItAnchor, {
  level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
  slugify // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
});

module.exports = function(source) {
  let options = loaderUtils.getOptions(this) || {}; // 获取loader的参数
  this.cacheable && this.cacheable();

  options = {
    wrapper,
    linkOpen: true,
    ...options
  };

  let fm;

  if (options.enableMetaData) {
    fm = frontMatter(source);
    source = fm.body;
  }

  if (options.linkOpen) {
    linkOpen(parser);
  }

  return options.wrapper(parser.render(source), fm);
};
