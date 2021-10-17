import{e as a,o as n,G as t}from"./vendor.bd251973.js";const p={class:"markdown-body"},l=t(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C Vue3 \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://img12.360buyimg.com/imagetools/jfs/t1/162421/39/13392/9425/6052ea60E592310a9/264bdff23ef5fe95.png" width="200" alt="NutUI"><h2>NPM \u5B89\u88C5</h2><pre><code class="language-bash"><span class="hljs-comment"># Vue2 \u9879\u76EE \u9700\u8981\u53C2\u8003 2.x \u6587\u6863 https://nutui.jd.com/2x</span>
npm i @nutui/nutui

<span class="hljs-comment"># Vue3 \u9879\u76EE</span>
npm i @nutui/nutui@next

<span class="hljs-comment"># taro \u5C0F\u7A0B\u5E8F\u9879\u76EE</span>
npm i @nutui/nutui-taro
</code></pre><h3>NPM \u4F7F\u7528\u793A\u4F8B</h3><h4>Vite \u6784\u5EFA\u5DE5\u5177 \u901A\u8FC7 vite-plugin \u4F7F\u7528\u6309\u9700\u52A0\u8F7D</h4><p><a href="https://vitejs.dev/">Vite</a> \u6784\u5EFA\u5DE5\u5177\uFF0C\u4F7F\u7528 <a href="https://github.com/anncwb/vite-plugin-style-import">vite-plugin-style-import</a> \u5B9E\u73B0\u6309\u9700\u5F15\u5165\u3002</p><h5>\u5B89\u88C5\u63D2\u4EF6</h5><pre><code class="language-bash">npm install babel-plugin-import --save-dev
</code></pre><p>\u5728 <code>vite.config</code> \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A</p><pre><code class="language-javascript"><span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> styleImport <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite-plugin-style-import&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">plugins</span>: [
    vue(),
    styleImport({
      <span class="hljs-attr">libs</span>: [
        {
          <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;@nutui/nutui&#39;</span>,
          <span class="hljs-attr">libraryNameChangeCase</span>: <span class="hljs-string">&#39;pascalCase&#39;</span>,
          <span class="hljs-attr">resolveStyle</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`@nutui/nutui/dist/packages/<span class="hljs-subst">\${name}</span>/index.scss\`</span>
          }
        }
      ],
    }),
  ],
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">scss</span>: {
        <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@import &quot;@nutui/nutui/dist/styles/variables.scss&quot;;\`</span>
      }
    }
  }
};
</code></pre><h4>WebPack \u6784\u5EFA\u5DE5\u5177 \u901A\u8FC7 babel \u4F7F\u7528\u6309\u9700\u52A0\u8F7D</h4><p><a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> \u662F\u4E00\u6B3E babel \u63D2\u4EF6\uFF0C\u5B83\u4F1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u5C06 import \u8BED\u53E5\u81EA\u52A8\u8F6C\u6362\u4E3A\u6309\u9700\u5F15\u5165\u7684\u65B9\u5F0F\u3002</p><h5>\u5B89\u88C5\u63D2\u4EF6</h5><pre><code class="language-bash">npm install babel-plugin-import --save-dev
</code></pre><p>\u5728 <code>.babelrc</code> \u6216 <code>babel.config.js</code> \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A</p><pre><code class="language-javascript">{
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">plugins</span>: [
    [
      <span class="hljs-string">&quot;import&quot;</span>,
      {
        <span class="hljs-string">&quot;libraryName&quot;</span>: <span class="hljs-string">&quot;@nutui/nutui&quot;</span>,
        <span class="hljs-string">&quot;libraryDirectory&quot;</span>: <span class="hljs-string">&quot;dist/packages/_es&quot;</span>,
        <span class="hljs-string">&quot;camel2DashComponentName&quot;</span>: <span class="hljs-literal">false</span>
      },
      <span class="hljs-string">&#39;nutui3-vue&#39;</span>
    ],
    [
      <span class="hljs-string">&quot;import&quot;</span>,
      {
        <span class="hljs-string">&quot;libraryName&quot;</span>: <span class="hljs-string">&quot;@nutui/nutui-taro&quot;</span>,
        <span class="hljs-string">&quot;libraryDirectory&quot;</span>: <span class="hljs-string">&quot;dist/packages/_es&quot;</span>,
        <span class="hljs-string">&quot;camel2DashComponentName&quot;</span>: <span class="hljs-literal">false</span>
      },
      <span class="hljs-string">&#39;nutui3-taro&#39;</span>
    ]
  ]
}
</code></pre><p>\u63A5\u7740\u50CF\u8FD9\u6837\u5728\u4EE3\u7801\u4E2D\u76F4\u63A5\u5F15\u5165\u7EC4\u4EF6\u3002</p><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;
<span class="hljs-keyword">import</span> { Button, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui/dist/style.css&quot;</span>;
createApp(App).use(Button).use(Icon).mount(<span class="hljs-string">&quot;#app&quot;</span>);
</code></pre><h4>\u5BFC\u5165\u5168\u90E8\u7EC4\u4EF6</h4><blockquote><p>\u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u5C06\u4F1A\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6\uFF0C\u6253\u5305\u6587\u4EF6\u5927\u5C0F\u4F1A\u5F88\u5927</p></blockquote><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;
<span class="hljs-comment">// \u6CE8\u610F\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u5C06\u4F1A\u5BFC\u5165\u6240\u6709\u7EC4\u4EF6</span>
<span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui/dist/style.css&quot;</span>;
createApp(App).use(NutUI).mount(<span class="hljs-string">&quot;#app&quot;</span>);
</code></pre><h4>CDN \u5B89\u88C5\u4F7F\u7528\u793A\u4F8B</h4><blockquote><p>\u53EF\u4EE5\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u5F15\u5165\uFF0C \u53EF\u4EE5\u5728 <strong>jsdelivr</strong> \u548C <strong>unpkg</strong> \u7B49\u516C\u5171 CDN \u4E0A\u83B7\u53D6\u5230 NutUI\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165\u6837\u5F0F --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/style.css&quot;</span> /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165Vue --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165NutUI\u7EC4\u4EF6\u5E93 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@nutui/nutui@next/dist/nutui.umd.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span>
        
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="handlebars"><span class="xml">
      // \u5728 #app \u6807\u7B7E\u4E0B\u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6
      const app = Vue.createApp({
        template: \`
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u4FE1\u606F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        \`,
      });
      app.use(nutui);
      app.mount(&quot;#app&quot;);
    </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><blockquote><p>\u5728\u9875\u9762\u4E2D\u76F4\u63A5\u5F15\u5165\uFF0C\u5C06\u65E0\u6CD5\u4F7F\u7528 <strong>\u4E3B\u9898\u5B9A\u5236</strong> \u7B49\u529F\u80FD\u3002\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 <em>NPM</em> \u6216 <em>YARN</em> \u65B9\u5F0F\u5B89\u88C5\uFF0C\u4E0D\u63A8\u8350\u5728\u9875\u9762\u4E2D\u76F4\u63A5\u5F15\u5165\u7684\u7528\u6CD5</p></blockquote><h2>\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879</h2><ul><li>\u4F7F\u7528:prop\u4F20\u9012\u6570\u636E\u683C\u5F0F\u4E3A \u6570\u5B57\u3001\u5E03\u5C14\u503C\u6216\u51FD\u6570\u65F6\uFF0C\u5FC5\u987B\u5E26:(\u517C\u5BB9\u5B57\u7B26\u4E32\u7C7B\u578B\u9664\u5916)\uFF0C\u6BD4\u5982\uFF1A</li></ul><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">:active</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;base&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-switch</span>&gt;</span>
</code></pre><ul><li>\u7EC4\u4EF6 css \u5355\u4F4D\u4F7F\u7528\u7684\u662F <strong>px</strong>\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u9700\u8981 <strong>rem</strong> \u5355\u4F4D\uFF0C\u53EF\u501F\u52A9\u4E00\u4E9B\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 <a href="https://www.webpackjs.com/">webpack</a> \u7684 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>\u3001<a href="https://github.com/postcss/postcss">postcss</a> \u7684 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> \u63D2\u4EF6\u7B49</li></ul>`,32),c=[l],i={setup(e,{expose:s}){return s({frontmatter:{}}),(u,r)=>(n(),a("div",p,c))}};export{i as default};
