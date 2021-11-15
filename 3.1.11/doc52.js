import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},e=t(`<h1>Switch \u5F00\u5173</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u6253\u5F00\u6216\u5173\u95ED\u9009\u9879\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Switch);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disable</span> /&gt;</span>
</code></pre><h3>change\u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance() <span class="hljs-keyword">as</span> any;
    <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {
      proxy.$toast.text(<span class="hljs-string">\`\u89E6\u53D1\u4E86change\u4E8B\u4EF6\uFF0C\u5F00\u5173\u72B6\u6001\uFF1A<span class="hljs-subst">\${value}</span>\`</span>);
    };
    <span class="hljs-keyword">return</span> {
      checked,
      change
    };
  }
};
</code></pre><h3>\u5F02\u6B65\u63A7\u5236</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;checkedAsync&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeAsync&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance() <span class="hljs-keyword">as</span> any;
    <span class="hljs-keyword">const</span> checkedAsync = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> changeAsync = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {
      proxy.$toast.text(<span class="hljs-string">\`2\u79D2\u540E\u5F02\u6B65\u89E6\u53D1 <span class="hljs-subst">\${value}</span>\`</span>);
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        checkedAsync.value = value;
      }, <span class="hljs-number">2000</span>);
    };
    
    <span class="hljs-keyword">return</span> {
      checkedAsync,
      changeAsync
    };
  }
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;switchChange&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;blue&quot;</span> /&gt;</span>
</code></pre><h3>\u652F\u6301\u6587\u5B57</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;switchChange&quot;</span> <span class="hljs-attr">active-text</span>=<span class="hljs-string">&quot;\u5F00&quot;</span> <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">&quot;\u5173&quot;</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F00\u5173\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disable</td><td>\u7981\u7528\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>active-color</td><td>\u6253\u5F00\u65F6\u7684\u80CC\u666F\u989C\u8272</td><td>String</td><td><code>#fa2c19</code></td></tr><tr><td>inactive-color</td><td>\u5173\u95ED\u65F6\u7684\u80CC\u666F\u989C\u8272</td><td>String</td><td><code>#ebebeb</code></td></tr><tr><td>active-text</td><td>\u6253\u5F00\u65F6\u6587\u5B57\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>inactive-text</td><td>\u5173\u95ED\u65F6\u6587\u5B57\u63CF\u8FF0</td><td>String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u5F00\u5173\u65F6\u89E6\u53D1</td><td>(value: boolean,event: Event)</td></tr></tbody></table>`,26),p=[e],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(n(),a("div",l,p))}};export{j as default};
