/* eslint-disable @typescript-eslint/no-var-requires */
const { stripScript, stripTemplate, genInlineComponentText } = require('./util');
const md = require('./config');

module.exports = function(source) {
  const content = md.render(source); //得到来自.md的解析出来的数据
  const startTag = '<!--nutui-demo:';
  const startTagLen = startTag.length;
  const endTag = ':nutui-demo-->';
  const endTagLen = endTag.length;

  let componenetsString = '';
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));

    const commentContent = content.slice(commentStart + startTagLen, commentEnd);

    const html = stripTemplate(commentContent); //传入的是demo的代码部分，获取demo中的的html
    const script = stripScript(commentContent); //传入的是demo的代码部分，获取demo中的的script
    let demoComponentContent = genInlineComponentText(html, script);
    const demoComponentName = `nutui-demo${id}`;
    //output是一个数组，最终会拼接放入输出vue文件的template里面，也就是这一页的HTML
    output.push(`<template #source><${demoComponentName} /></template>`);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;

    // 重新计算下一次的位置
    // demoComponentName 与id,命名每个demo组件名字用的，id会在while每一次循环+1，这样子组件从第一个到最后一个都不会重名。
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }

  // 仅允许在 demo 不存在时，才可以在 Markdown 中写 script 标签
  // todo: 优化这段逻辑

  let pageScript = '';
  if (componenetsString) {
    pageScript = `<script lang="ts">
      import * as Vue from 'vue';
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`;
  } else if (content.indexOf('<script>') === 0) {
    // 硬编码，有待改善
    start = content.indexOf('</script>') + '</script>'.length;
    pageScript = content.slice(0, start);
  }

  output.push(content.slice(start));
  const result = `
  <template>
    <section class="content nutui-doc">
      ${output.join('')}
    </section>
  </template>
  ${pageScript}
  `;
  return result;
};
