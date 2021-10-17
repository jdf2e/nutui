import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Radio \u5355\u9009\u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009</p><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Radio,RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Radio,RadioGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Radio);
app.use(RadioGroup);
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><p>\u901A\u8FC7 <strong>v-model</strong> \u7ED1\u5B9A\u503C\u5F53\u524D\u9009\u9879\u7684 <strong>label</strong> \u3002\u5E76\u4E14\u5FC5\u987B <strong>nut-radiogroup</strong> \u548C <strong>nut-radio</strong> \u76F8\u7ED3\u5408\u8FDB\u884C\u4F7F\u7528</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u5355\u9009\u68461<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u5355\u9009\u68462<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radioVal</span>:<span class="hljs-string">&quot;1&quot;</span>,
  };
}
</code></pre><h2>\u7981\u7528\u9009\u62E9</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u5355\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u7981\u7528\u5355\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radioVal3</span>:<span class="hljs-string">&quot;1&quot;</span>,
  };
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF812<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF812<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radioVal4</span>:<span class="hljs-string">&quot;1&quot;</span>,
  };
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u56FE\u6807</h2><p>\u5EFA\u8BAE <code>icon-name</code> <code>icon-active-name</code> \u4E00\u8D77\u4FEE\u6539</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal5&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radioVal5</span>:<span class="hljs-string">&quot;1&quot;</span>,
  };
}
</code></pre><h2>\u89E6\u53D1 change \u4E8B\u4EF6</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radioVal6&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;1&quot;</span> &gt;</span>\u89E6\u53D1\u4E8B\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;2&quot;</span> &gt;</span>\u89E6\u53D1\u4E8B\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> handleChange3 = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`\u60A8\u9009\u4E2D\u4E86<span class="hljs-subst">\${value}</span>\`</span>);
  }
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">radioVal6</span>:<span class="hljs-string">&quot;1&quot;</span>,
    handleChange3
  };
}
</code></pre><h2>Prop</h2><h3>Radio</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>icon-size</td><td><a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a></td><td>String\u3001Number</td><td><code>18</code></td></tr><tr><td>icon-name</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u524D(\u5EFA\u8BAE\u548C<code>icon-active-name</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>icon-active-name</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u540E(\u5EFA\u8BAE\u548C<code>icon-name</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-checked&#39;</code></td></tr><tr><td>label</td><td>\u5355\u9009\u6846\u6807\u8BC6</td><td>String\u3001Number\u3001Boolean</td><td>-</td></tr></tbody></table><h3>RadioGroup</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u4E0Elabel\u503C\u4E00\u81F4\u65F6\u5448\u9009\u4E2D\u72B6\u6001</td><td>String\u3001Number\u3001Boolean</td><td>-</td></tr><tr><td>text-position</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr></tbody></table><h2>RadioGroup Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u503C\uFF08label\uFF09\u3010\u8BBE\u7F6Elabel\u540E\u6709\u503C\u3001\u9ED8\u8BA4\u4E3A\u7A7A\u3011</td></tr></tbody></table>`,29),c=[p],j={setup(o,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",l,c))}};export{j as default};
