import{e as t,o as a,G as e}from"./vendor.bd251973.js";const n={class:"markdown-body"},p=e(`<h1>TimeSelect \u914D\u9001\u65F6\u95F4</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8Exxx</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { TimeSelect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { TimeSelect } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(TimeSelect);
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-timeselect</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timeselect</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
  }
</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u7535\u68AF\u533A\u57DF\u7684\u9AD8\u5EA6</td><td>Number\u3001String</td><td><code>200px</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-item</td><td>\u70B9\u51FB\u5185\u5BB9</td><td>key: string, item: { id: 0, name: \u2018\u2019 }</td></tr></tbody></table>`,13),l=[p],i={setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(a(),t("div",n,l))}};export{i as default};
