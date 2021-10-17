import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Picker \u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\u5176\u4E2D\u4E00\u9879\u3002</p><h2>\u5B89\u88C5</h2><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Picker,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Picker);
app.use(Popup);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u57CE\u5E02&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;desc&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-picker</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:list-data</span>=<span class="hljs-string">&quot;listData&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57CE\u5E02\u9009\u62E9&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span> 
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-picker</span>&gt;</span>
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> listData = [
      <span class="hljs-string">&#39;\u5357\u4EAC\u5E02&#39;</span>,
      <span class="hljs-string">&#39;\u65E0\u9521\u5E02&#39;</span>,
      <span class="hljs-string">&#39;\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u533A&#39;</span>,
      <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-string">&#39;\u8FDE\u4E91\u6E2F\u5E02&#39;</span>,
      <span class="hljs-string">&#39;\u6D59\u6C5F\u5E02&#39;</span>,
      <span class="hljs-string">&#39;\u6C5F\u82CF\u5E02&#39;</span>
    ];

    <span class="hljs-keyword">return</span> {
      listData,
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = res;
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h3>\u591A\u5217\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;desc&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-picker</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:list-data</span>=<span class="hljs-string">&quot;listData&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u591A\u5217\u9009\u62E9&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-picker</span>&gt;</span>
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> listData = [
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u5468\u4E00&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E09&#39;</span>, <span class="hljs-string">&#39;\u5468\u56DB&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E94&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>
      },
      <span class="hljs-comment">// \u7B2C\u4E8C\u5217</span>
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>, <span class="hljs-string">&#39;\u665A\u4E0A&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>
      }
    ];

    <span class="hljs-keyword">return</span> {
      listData,
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = res.join(<span class="hljs-string">&#39; &#39;</span>);
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h3>\u591A\u7EA7\u8054\u52A8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;desc&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-picker</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:list-data</span>=<span class="hljs-string">&quot;listData&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span> 
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-picker</span>&gt;</span>
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> listData = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }]
          }
        ]
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53A6\u95E8&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u601D\u660E\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D77\u6CA7\u533A&#39;</span> }]
          }
        ]
      }
    ];

    <span class="hljs-keyword">return</span> {
      listData,
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = res.join(<span class="hljs-string">&#39; &#39;</span>);
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u53EF\u89C1</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u53D6\u6D88</td></tr><tr><td>ok-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u786E\u5B9A</td></tr><tr><td>list-data</td><td>\u5217\u8868\u6570\u636E</td><td>Array</td><td>-</td></tr><tr><td>default-value-index</td><td>\u521D\u59CB\u9009\u4E2D\u9879\u7684\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4E3A 0</td><td>number</td><td>0</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>String</td><td>\u201Cbody\u201D</td></tr><tr><td>close-on-click-overlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u5173\u95ED\u5F39\u7A97\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u65F6\u5019\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>change</td><td>\u6539\u53D8\u65F6\u89E6\u53D1</td><td>val</td></tr></tbody></table>`,20),c=[p],d={setup(r,{expose:s}){return s({frontmatter:{}}),(h,j)=>(n(),a("div",l,c))}};export{d as default};
