import{e as a,o as n,G as t}from"./vendor.js";const p={class:"markdown-body"},e=t(`<h1>\u4E3B\u9898\u5B9A\u5236</h1><p>NutUI \u9ED8\u8BA4\u63D0\u4F9B\u4E00\u5957 UI \u4E3B\u9898\uFF0C\u540C\u65F6\u5141\u8BB8\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5B9A\u5236\u65B0\u7684\u4E3B\u9898\uFF0C\u4EE5\u6EE1\u8DB3\u4E1A\u52A1\u7684\u591A\u6837\u5316\u89C6\u89C9\u9700\u6C42\u3002</p><br><img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI \u4E3B\u9898\u5B9A\u5236"><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>NutUI \u7684\u6837\u5F0F\u662F\u57FA\u4E8E <strong><a href="https://sass-lang.com/">Sass</a></strong> \u5F00\u53D1\u7684\uFF0C\u5B9A\u4E49\u4E86\u4E00\u5957\u9ED8\u8BA4\u6837\u5F0F\u53D8\u91CF\uFF0C\u5B9A\u5236\u4E3B\u9898\u5C31\u662F\u7F16\u8F91\u8FD9\u4E2A\u53D8\u91CF\u5217\u8868\u3002</p><blockquote><p>\u73B0\u9636\u6BB5\u9700\u8981\u5F00\u53D1\u8005\u624B\u52A8\u914D\u7F6E\uFF0C\u53EF\u89C6\u5316\u751F\u6210\u914D\u7F6E\u76EE\u524D\u6B63\u5728\u5F00\u53D1\u4E2D\u3002</p></blockquote><p>\u4EE5\u4E0B\u662F\u4E00\u4E9B\u4E0E\u989C\u8272\u76F8\u5173\u57FA\u672C\u6837\u5F0F\u53D8\u91CF\uFF0C\u6240\u6709\u53EF\u7528\u7684\u53D8\u91CF\u8BF7\u53C2\u8003<a href="https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss">\u914D\u7F6E\u6587\u4EF6 variables.scss</a>\u3002</p><pre><code class="language-scss"><span class="hljs-comment">// \u4E3B\u8272\u8C03</span>
<span class="hljs-variable">$primary-color</span>: <span class="hljs-number">#fa2c19</span>;
<span class="hljs-variable">$primary-color-end</span>: <span class="hljs-number">#fa6419</span>;
...
</code></pre><blockquote><p>\u5728\u4E3B\u9898\u5B9A\u5236\u573A\u666F\u4E0B\uFF0C\u9879\u76EE\u4E2D\u5F15\u7528\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u5F15\u5165 <strong>scss</strong> \u6587\u4EF6\uFF0C\u800C\u4E0D\u662F <strong>css</strong> \u6587\u4EF6\u3002</p></blockquote><p>\u9700\u8981\u5F15\u5165 <strong>nutui.scss</strong> \u6587\u4EF6</p><pre><code class="language-javascript"><span class="hljs-keyword">import</span> NutUI <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;@nutui/nutui/dist/styles/themes/default.scss&quot;</span>;
</code></pre><h2>\u5B9A\u5236\u4E3B\u9898</h2><h3>\u7B2C\u4E00\u6B65\uFF1A\u65B0\u5EFA\u81EA\u5B9A\u4E49\u53D8\u91CF SCSS \u6587\u4EF6</h3><p>\u5728\u672C\u5730\u9879\u76EE\u4E2D\u65B0\u5EFA\u4E00\u4E2A <strong>SCSS</strong> \u6587\u4EF6 <code>custom_theme.scss</code>\uFF0C\u81EA\u5B9A\u4E49\u53D8\u91CF\u503C\u3002</p><pre><code class="language-scss"><span class="hljs-variable">$primary-color</span>: <span class="hljs-number">#478EF2</span>;
<span class="hljs-variable">$primary-color-end</span>: <span class="hljs-number">#496AF2</span>;
</code></pre><h3>\u7B2C\u4E8C\u6B65\uFF1A\u4FEE\u6539\u672C\u5730\u9879\u76EE webpack \u6216\u8005 vite \u7684\u914D\u7F6E\u6587\u4EF6</h3><p>\u4FEE\u6539 vite \u6216\u8005 webpack \u914D\u7F6E\u6587\u4EF6\u4E2D <strong>sass-loader</strong> \u7684\u914D\u7F6E\u3002\u5982\u4E0B\u793A\u4F8B</p><h4>vite \u6F14\u793A</h4><pre><code class="language-javascript"><span class="hljs-comment">// https://vitejs.dev/config/</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-comment">//...</span>
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">scss</span>: {
        <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@import &quot;./assets/custom_theme.scss&quot;;\`</span>
      }
    }
  }
})
</code></pre><h4>vue/cli 2\u7248\u672C</h4><pre><code class="language-javascript">{
    <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.(sa|sc)ss$/</span>,
    use: [
        {
            <span class="hljs-attr">loader</span>: <span class="hljs-string">&#39;sass-loader&#39;</span>,
            <span class="hljs-attr">options</span>: {
                <span class="hljs-attr">data</span>: <span class="hljs-string">\`@import &quot;./assets/custom_theme.scss&quot;;\`</span>,
            }
        }
    ]
}
</code></pre><h4>vue/cli 3 \u4EE5\u4E0A\u7248\u672C\u4FEE\u6539 <strong>vue.config.js</strong> \u8FDB\u884C\u914D\u7F6E</h4><pre><code class="language-javascript"><span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">css</span>: {
        <span class="hljs-attr">loaderOptions</span>: {
            <span class="hljs-comment">// \u7ED9 sass-loader \u4F20\u9012\u9009\u9879</span>
            <span class="hljs-attr">scss</span>: {
                <span class="hljs-comment">// @/ \u662F src/ \u7684\u522B\u540D</span>
                <span class="hljs-comment">// \u6CE8\u610F\uFF1A\u5728 sass-loader v7 \u4E2D\uFF0C\u8FD9\u4E2A\u9009\u9879\u540D\u662F &quot;data&quot;</span>
                <span class="hljs-attr">prependData</span>: <span class="hljs-string">\`@import &quot;@/assets/custom_theme.scss&quot;;\`</span>,
            }
        },
    }
}
</code></pre><blockquote><p>@nutui/nutui \u591A\u79CD\u6A21\u5F0F\uFF08vite \u3001vue/cli\u3001cdn\u3001ts\uFF09\u4F7F\u7528\u793A\u4F8B <a href="https://github.com/jdf2e/nutui-demo">Demo</a></p></blockquote>`,25),c=[e],u={setup(l,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",p,c))}};export{u as default};
