import{e as s,o as a,G as d}from"./vendor.bd251973.js";const n={class:"markdown-body"},l=d(`<h1>Dialog \u5BF9\u8BDD\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u5728\u6D6E\u5C42\u4E2D\u663E\u793A\uFF0C\u5F15\u5BFC\u7528\u6237\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p><p>\u5F39\u51FA\u6846\u7EC4\u4EF6\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Dialog);
</code></pre><h2>\u51FD\u6570\u8C03\u7528</h2><pre><code class="language-javascript">Dialog({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u57FA\u7840\u5F39\u6846&#39;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;</span>
});

Dialog({
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u65E0\u6807\u9898\u5F39\u6846&#39;</span>
});

Dialog({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u63D0\u793A\u5F39\u6846&#39;</span>,
  <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;</span>,
  <span class="hljs-attr">noCancelBtn</span>: <span class="hljs-literal">true</span>,
});
</code></pre><h2>teleport \u4F7F\u7528\uFF0C\u6302\u8F7D\u5230\u6307\u5B9A\u8282\u70B9</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> <span class="hljs-attr">...</span> /&gt;</span>
</code></pre><pre><code class="language-javascript">Dialog({
  <span class="hljs-attr">teleport</span>: <span class="hljs-string">&#39;#app&#39;</span>,
  ...
});
Dialog({
  <span class="hljs-attr">teleport</span>: <span class="hljs-string">&#39;.demo&#39;</span>,
  ...
});
</code></pre><h2>\u51FD\u6570\u8C03\u7528 proxy.&amp;dialog(\u2026)</h2><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{
  <span class="hljs-keyword">const</span> { proxy } = getCurrentInstance();
  proxy.$dialog({
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u57FA\u7840\u5F39\u6846&#39;</span>,
    <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;</span>
  });
}
</code></pre><h2>\u6807\u7B7E\u5F0F\u7EC4\u4EF6\u4F7F\u7528</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:close-on-click-overlay</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-dialog</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> title = <span class="hljs-string">&#39;\u6807\u7B7E\u5F0F\u4F7F\u7528&#39;</span>;
    <span class="hljs-keyword">const</span> content = <span class="hljs-string">&#39;\u5185\u5BB9&#39;</span>;
  
    <span class="hljs-keyword">return</span> { visible,title,content };
  },
};
</code></pre><h2>API</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>content</td><td>\u5185\u5BB9\uFF0C\u652F\u6301HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>String</td><td>\u201Cbody\u201D</td></tr><tr><td>closeOnClickOverlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>noFooter</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\u680F</td><td>Boolean</td><td>false</td></tr><tr><td>noOkBtn</td><td>\u662F\u5426\u9690\u85CF\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>noCancelBtn</td><td>\u662F\u5426\u9690\u85CF\u53D6\u6D88\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u53D6\u6D88\u201C</td></tr><tr><td>okText</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u786E\u5B9A\u201C</td></tr><tr><td>okBtnDisabled</td><td>\u7981\u7528\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancelAutoClose</td><td>\u53D6\u6D88\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>textAlign</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u540Ccss\u7684text-align</td><td>String</td><td>\u201Ccenter\u201D</td></tr><tr><td>closeOnPopstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td>Boolean</td><td>false</td></tr><tr><td>onUpdate</td><td>\u66F4\u65B0</td><td>Boolean</td><td>false</td></tr><tr><td>onOk</td><td>\u786E\u5B9A\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>onOpen</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Function</td><td>-</td></tr><tr><td>onClosed</td><td>\u5173\u95ED\u56DE\u8C03\uFF0C\u4EFB\u4F55\u60C5\u51B5\u5173\u95ED\u5F39\u7A97\u90FD\u4F1A\u89E6\u53D1</td><td>Function</td><td>-</td></tr></tbody></table><h2>Props</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>content</td><td>\u5185\u5BB9\uFF0C\u652F\u6301HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>String</td><td>\u201Cbody\u201D</td></tr><tr><td>close-on-click-overlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>no-footer</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\u680F</td><td>Boolean</td><td>false</td></tr><tr><td>no-ok-btn</td><td>\u662F\u5426\u9690\u85CF\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>no-cancel-btn</td><td>\u662F\u5426\u9690\u85CF\u53D6\u6D88\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u53D6\u6D88\u201C</td></tr><tr><td>ok-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u786E \u5B9A\u201C</td></tr><tr><td>ok-btn-disabled</td><td>\u7981\u7528\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-auto-close</td><td>\u53D6\u6D88\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>text-align</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u540Ccss\u7684text-align</td><td>String</td><td>\u201Ccenter\u201D</td></tr><tr><td>close-on-popstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td>false</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>ok</td><td>\u786E\u5B9A\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u56DE\u8C03\uFF0C\u4EFB\u4F55\u60C5\u51B5\u5173\u95ED\u5F39\u7A97\u90FD\u4F1A\u89E6\u53D1</td><td>Function</td><td>-</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u57DF</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF</td></tr></tbody></table>`,24),e=[l],i={setup(r,{expose:t}){return t({frontmatter:{}}),(p,c)=>(a(),s("div",n,e))}};export{i as default};
