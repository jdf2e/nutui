import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Datepicker \u65E5\u671F\u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u65F6\u95F4\u9009\u62E9\u5668\uFF0C\u652F\u6301\u65E5\u671F\u3001\u5E74\u6708\u3001\u65F6\u5206\u7B49\u7EF4\u5EA6\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { DatePicker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(DatePicker);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u65E5\u671F\u9009\u62E9-\u6BCF\u5217\u4E0D\u663E\u793A\u4E2D\u6587</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:is-show-chinese</span>=<span class="hljs-string">&quot;false&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> 
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020-1-1&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      desc
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h3>\u65E5\u671F\u9009\u62E9-\u9650\u5236\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
    <span class="hljs-attr">:is-show-chinese</span>=<span class="hljs-string">&quot;false&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> 
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020-1-1&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      desc,
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h3>\u65E5\u671F\u65F6\u95F4-\u9650\u5236\u5F00\u59CB\u7ED3\u675F\u65F6\u95F4\uFF08\u6709\u9ED8\u8BA4\u503C\uFF09</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;datetime&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span> 
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span> 
</code></pre><pre><code class="language-javascript">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> createDemo({
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params">props, { emit }</span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> desc = ref(<span class="hljs-string">&#39;2020\u5E74-1\u6708-1\u65E5-0\u65F6-0\u5206&#39;</span>);

    <span class="hljs-keyword">return</span> {
      show,
      desc,
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2020</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-number">2025</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>),
      <span class="hljs-attr">open</span>: <span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> {
        show.value = <span class="hljs-literal">true</span>;
      },
      <span class="hljs-attr">confirm</span>: <span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
        desc.value = val.join(<span class="hljs-string">&#39;-&#39;</span>);
      }
    };
  }
});
&lt;/script&gt;
</code></pre><h3>\u65F6\u95F4\u9009\u62E9-12\u5C0F\u65F6\u5236</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
    <span class="hljs-attr">:is-use12-hours</span>=<span class="hljs-string">&quot;true&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span>
</code></pre><h3>\u65F6\u95F4\u9009\u62E9-\u5206\u949F\u6570\u9012\u589E\u6B65\u957F\u8BBE\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-datepicker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentDate&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
    <span class="hljs-attr">:minute-step</span>=<span class="hljs-string">&quot;5&quot;</span>
    <span class="hljs-attr">:min-date</span>=<span class="hljs-string">&quot;minDate&quot;</span>
    <span class="hljs-attr">:max-date</span>=<span class="hljs-string">&quot;maxDate&quot;</span>
    <span class="hljs-attr">:is-use12-hours</span>=<span class="hljs-string">&quot;true&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-datepicker</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u521D\u59CB\u503C</td><td>Date</td><td><code>null</code></td></tr><tr><td>v-model:visible</td><td>\u662F\u5426\u53EF\u89C1</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u65E5\u671F\u2019date\u2019\uFF0C \u65E5\u671F\u65F6\u95F4\u2019datetime\u2019\uFF0C\u65F6\u95F4\u2019time\u2019</td><td>String</td><td><code>&#39;date&#39;</code></td></tr><tr><td>is-use12-hours</td><td>\u662F\u5426\u5341\u4E8C\u5C0F\u65F6\u5236\u5EA6\uFF0C\u53EA\u9650\u7C7B\u578B\u4E3A\u2019time\u2019\u65F6\u4F7F\u7528</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>minute-step</td><td>\u5206\u949F\u6B65\u8FDB\u503C</td><td>Number</td><td><code>1</code></td></tr><tr><td>is-show-chinese</td><td>\u6BCF\u5217\u662F\u5426\u5C55\u793A\u4E2D\u6587</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u6807\u9898</td><td>String</td><td><code>null</code></td></tr><tr><td>min-date</td><td>\u5F00\u59CB\u65E5\u671F</td><td>Date</td><td><code>\u5341\u5E74\u524D</code></td></tr><tr><td>max-date</td><td>\u7ED3\u675F\u65E5\u671F</td><td>Date</td><td><code>\u5341\u5E74\u540E</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event: Event</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,24),e=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,e))}};export{j as default};
