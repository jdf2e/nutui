import{e as a,o as t,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>Elevator \u7535\u68AF\u697C\u5C42</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5217\u8868\u5FEB\u901F\u5B9A\u4F4D\u4EE5\u53CA\u7D22\u5F15\u7684\u663E\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Elevator);
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-elevator</span> <span class="hljs-attr">:index-list</span>=<span class="hljs-string">&quot;dataList&quot;</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;260&quot;</span> @<span class="hljs-attr">click-item</span>=<span class="hljs-string">&quot;clickItem&quot;</span> @<span class="hljs-attr">click-index</span>=<span class="hljs-string">&quot;clickIndex&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-elevator</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">acceptKey</span>: <span class="hljs-string">&#39;num&#39;</span>,
      <span class="hljs-attr">dataList</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;A&#39;</span>,
          <span class="hljs-attr">list</span>: [
            {
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&lt;span&gt;\u5B89\u5FBD&lt;/span&gt;&#39;</span>,
              <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>
            }
          ]
        }
        ...
      ],
      <span class="hljs-attr">dataList2</span>: [
        {
          <span class="hljs-attr">num</span>: <span class="hljs-string">&#39;\u4E00&#39;</span>,
          <span class="hljs-attr">list</span>: [
            {
              <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
              <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>
            }
          ]
        }
        ...
      ]
    });

    <span class="hljs-keyword">const</span> clickItem = <span class="hljs-function">(<span class="hljs-params">key: string, item: any</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(key, <span class="hljs-built_in">JSON</span>.stringify(item));
    };

    <span class="hljs-keyword">const</span> clickIndex = <span class="hljs-function">(<span class="hljs-params">key: string</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(key);
    };

    <span class="hljs-keyword">return</span> { ...toRefs(state), clickItem, clickIndex };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u7D22\u5F15</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-elevator</span> <span class="hljs-attr">:index-list</span>=<span class="hljs-string">&quot;dataList2&quot;</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:acceptKey</span>=<span class="hljs-string">&quot;acceptKey&quot;</span> @<span class="hljs-attr">click-item</span>=<span class="hljs-string">&quot;clickItem&quot;</span> @<span class="hljs-attr">click-index</span>=<span class="hljs-string">&quot;clickIndex&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-elevator</span>&gt;</span>
</code></pre><h2>API</h2><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u7535\u68AF\u533A\u57DF\u7684\u9AD8\u5EA6</td><td>Number\u3001String</td><td><code>200px</code></td></tr><tr><td>accept-key</td><td>\u7D22\u5F15 key \u503C</td><td>String</td><td><code>title</code></td></tr><tr><td>index-list</td><td>\u7D22\u5F15\u5217\u8868</td><td>Array\uFF08item\u9700\u5305\u542B id\u3001name\u5C5E\u6027, name\u652F\u6301\u4F20\u5165 html \u7ED3\u6784\uFF09</td><td><code>[{id: 0, name: &#39;&#39;}]</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-item</td><td>\u70B9\u51FB\u5185\u5BB9</td><td>key: string, item: { id: 0, name: \u2018\u2019 }</td></tr><tr><td>click-index</td><td>\u70B9\u51FB\u7D22\u5F15</td><td>key: string</td></tr></tbody></table>`,15),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(h,o)=>(t(),a("div",l,c))}};export{i as default};
