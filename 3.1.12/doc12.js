import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Checkbox \u590D\u9009\u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u591A\u9009\u6309\u94AE\u7528\u4E8E\u9009\u62E9\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Checkbox,CheckboxGroup,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Checkbox,CheckboxGroup,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Icon);
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox1&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox2&quot;</span> <span class="hljs-attr">text-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkbox1</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">checkbox2</span>: <span class="hljs-literal">false</span>,
  };
}
</code></pre><h2>\u7981\u7528\u72B6\u6001</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u672A\u9009\u65F6\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox4&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>\u9009\u4E2D\u65F6\u7981\u7528\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkbox3</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">checkbox4</span>: <span class="hljs-literal">true</span>,
  };
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox5&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;25&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF825<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox6&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5C3A\u5BF810<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkbox5</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">checkbox6</span>: <span class="hljs-literal">false</span>,
  };
}

</code></pre><h2>\u81EA\u5B9A\u4E49\u56FE\u6807</h2><p>\u8FD9\u91CC\u5EFA\u8BAE\u540C\u65F6\u8BBE\u7F6E <code>icon-name</code> \u548C <code>icon-active-name</code> \u5C5E\u6027</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox7&quot;</span> <span class="hljs-attr">icon-name</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">icon-active-name</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkbox7</span>: <span class="hljs-literal">true</span>,
  };
}

</code></pre><h2>change\u4E8B\u4EF6</h2><p>\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u89E6\u53D1change\u4E8B\u4EF6</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeBox3&quot;</span>&gt;</span>change\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> checkbox = ref(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> changeBox3= <span class="hljs-function">(<span class="hljs-params">checked: <span class="hljs-built_in">boolean</span>, label: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change\u4E8B\u4EF6\u89E6\u53D1&#39;</span> + checked, label);
	}  
  <span class="hljs-keyword">return</span> {
    checkbox,
    changeBox3
  };
}
</code></pre><h2>checkboxGroup\u4F7F\u7528</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkboxgroup1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkboxgroup1</span>: [<span class="hljs-string">&#39;2&#39;</span>, <span class="hljs-string">&#39;3&#39;</span>],
  };
}
</code></pre><h2>checkboxGroup \u5168\u9009/\u53D6\u6D88</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-checkboxgroup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkboxgroup3&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;group&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changeBox4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u7EC4\u5408\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkboxgroup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll(true)&quot;</span>&gt;</span>\u5168\u9009<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll(false)&quot;</span>&gt;</span>\u53D6\u6D88<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> group = ref(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">const</span> changeBox4 = <span class="hljs-function">(<span class="hljs-params">label: <span class="hljs-built_in">any</span>[]</span>) =&gt;</span> {
    Toast.text(<span class="hljs-string">\`<span class="hljs-subst">\${label.length ? <span class="hljs-string">&#39;\u5168\u9009&#39;</span> : <span class="hljs-string">&#39;\u53D6\u6D88\u5168\u9009&#39;</span>}</span>\`</span>);
  };

  <span class="hljs-keyword">const</span> toggleAll = <span class="hljs-function">(<span class="hljs-params">f: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> {
    (group.value <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).toggleAll(f);
  };
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">checkboxgroup3</span>: [<span class="hljs-string">&#39;2&#39;</span>],
    group,
    changeBox4,
    toggleAll
  };
}
</code></pre><h2>Checkbox</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u5904\u4E8E\u9009\u4E2D\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>text-position</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr><tr><td>icon-size</td><td><a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a></td><td>String\u3001Number</td><td><code>18</code></td></tr><tr><td>icon-name</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u524D(\u5EFA\u8BAE\u548C<code>icon-active-name</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>icon-active-name</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u540E(\u5EFA\u8BAE\u548C<code>icon-name</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;checked&#39;</code></td></tr><tr><td>label</td><td>\u590D\u9009\u6846\u7684\u6587\u672C\u5185\u5BB9</td><td>String</td><td>-</td></tr></tbody></table><h2>CheckboxGroup</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u548C <code>label</code> \u76F8\u5BF9\u5E94</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9,\u5C06\u7528\u4E8E\u5176\u4E0B\u7684\u5168\u90E8\u590D\u9009\u6846</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h2>Checkbox Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>(state, label),<code>state</code>\u4EE3\u8868\u5F53\u524D\u72B6\u6001\uFF0C<code>label</code>\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684\u503C</td></tr></tbody></table><h2>CheckboxGroup Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>label,<code>label</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u9879\u7684\u96C6\u5408</td></tr></tbody></table>`,36),c=[p],d={setup(e,{expose:s}){return s({frontmatter:{}}),(o,r)=>(n(),a("div",l,c))}};export{d as default};
