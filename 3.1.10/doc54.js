import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Tabs \u9009\u9879\u5361\u5207\u6362</h1><h3>\u4ECB\u7ECD</h3><p>\u5E38\u7528\u4E8E\u5E73\u7EA7\u533A\u57DF\u5927\u5757\u5185\u5BB9\u7684\u7684\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u652F\u6301\u5185\u5D4C\u6807\u7B7E\u5F62\u5F0F\u548C\u6E32\u67D3\u5FAA\u73AF\u6570\u636E\u5F62\u5F0F</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Tabs, TabPane } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Tabs, TabPane } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Tabs);
app.use(TabPane);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab1value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
    Tab 1
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
    Tab 2
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
    Tab 3
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">props</span>: {},
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">tab1value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab11value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab2value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab3value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab4value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab5value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab6value</span>: <span class="hljs-string">&#39;0&#39;</span>,
      <span class="hljs-attr">tab7value</span>: <span class="hljs-string">&#39;c1&#39;</span>,
      <span class="hljs-attr">list3</span>: <span class="hljs-built_in">Array</span>.from(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">2</span>).keys()),
      <span class="hljs-attr">list4</span>: <span class="hljs-built_in">Array</span>.from(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).keys()),
      <span class="hljs-attr">list5</span>: <span class="hljs-built_in">Array</span>.from(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(<span class="hljs-number">2</span>).keys()),
      <span class="hljs-attr">list6</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49 1&#39;</span>,
          <span class="hljs-attr">paneKey</span>: <span class="hljs-string">&#39;c1&#39;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;dongdong&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49 2&#39;</span>,
          <span class="hljs-attr">paneKey</span>: <span class="hljs-string">&#39;c2&#39;</span>,
          <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;JD&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u81EA\u5B9A\u4E49 3&#39;</span>,
          <span class="hljs-attr">paneKey</span>: <span class="hljs-string">&#39;c3&#39;</span>
        }
      ]
    });
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      state.list3.push(<span class="hljs-number">999</span>);
      state.tab3value = <span class="hljs-string">&#39;2&#39;</span>;
    }, <span class="hljs-number">3000</span>);

    <span class="hljs-keyword">return</span> { state };
  }
};
</code></pre><h3>\u57FA\u7840\u7528\u6CD5-\u5FAE\u7B11\u66F2\u7EBF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab11value&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;smile&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span>&gt;</span>
    Tab 1
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span>&gt;</span>
    Tab 2
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span>&gt;</span>
    Tab 3
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u901A\u8FC7 pane-key \u5339\u914D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab2value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 1&quot;</span> <span class="hljs-attr">pane-key</span>=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>
    Tab 1
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 2&quot;</span> <span class="hljs-attr">pane-key</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
    Tab 2
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Tab 3&quot;</span> <span class="hljs-attr">pane-key</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    Tab 3
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u6570\u636E\u5F02\u6B65\u6E32\u67D3 3s</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab3value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list3&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;Tab &#39;+ item&quot;</span>&gt;</span>
    Tab {{item}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u6570\u91CF\u591A,\u6EDA\u52A8\u64CD\u4F5C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab4value&quot;</span> <span class="hljs-attr">title-scroll</span> <span class="hljs-attr">title-gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list4&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;Tab &#39;+ item&quot;</span>&gt;</span>
    Tab {{item}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u5DE6\u53F3\u5E03\u5C40</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:300px&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab5value&quot;</span> <span class="hljs-attr">title-scroll</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list5&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;Tab &#39;+ item&quot;</span>&gt;</span>
    Tab {{item}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u5DE6\u53F3\u5E03\u5C40-\u5FAE\u7B11\u66F2\u7EBF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:300px&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab5value&quot;</span> <span class="hljs-attr">title-scroll</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list5&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;Tab &#39;+ item&quot;</span>&gt;</span>
    Tab {{item}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u7B7E\u680F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tabs</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.tab7value&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:titles</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-tabs__titles-item&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.tab7value=item.paneKey&quot;</span>
      <span class="hljs-attr">:class</span>=<span class="hljs-string">&quot;{active:state.tab7value==item.paneKey}&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item.paneKey&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;item.icon&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item.icon&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-tabs__titles-item__text&quot;</span>&gt;</span>{{item.title}}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tabpane</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in state.list6&quot;</span> <span class="hljs-attr">:pane-key</span>=<span class="hljs-string">&quot;item.paneKey&quot;</span>&gt;</span>
    {{item.title}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabpane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tabs</span>&gt;</span>
</code></pre><h2>API</h2><h3>Tabs Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u6807\u7B7E\u7684\u6807\u8BC6\u7B26</td><td>number,string</td><td>0</td></tr><tr><td>color</td><td>\u6807\u7B7E\u9009\u4E2D\u8272</td><td>string</td><td>#1a1a1a</td></tr><tr><td>background</td><td>\u6807\u7B7E\u680F\u80CC\u666F\u989C\u8272</td><td>string</td><td>#f5f5f5</td></tr><tr><td>direction</td><td>\u4F7F\u7528\u6A2A\u7EB5\u65B9\u5411 \u53EF\u9009\u503C horizontal\u3001vertical</td><td>string</td><td>horizontal</td></tr><tr><td>type</td><td>\u9009\u4E2D\u5E95\u90E8\u5C55\u793A\u6837\u5F0F \u53EF\u9009\u503C line\u3001smile</td><td>string</td><td>line</td></tr><tr><td>title-scroll</td><td>\u6807\u7B7E\u680F\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8</td><td>boolean</td><td>false</td></tr><tr><td>ellipsis</td><td>\u662F\u5426\u7701\u7565\u8FC7\u957F\u7684\u6807\u9898\u6587\u5B57</td><td>boolean</td><td>true</td></tr><tr><td>animated-time</td><td>\u5207\u6362\u52A8\u753B\u65F6\u957F,\u5355\u4F4D ms 0\u4EE3\u8868\u65E0\u52A8\u753B</td><td>number,string</td><td>300</td></tr><tr><td>title-gutter</td><td>\u6807\u7B7E\u95F4\u9699</td><td>number,string</td><td>0</td></tr></tbody></table><h2>Tabs Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>titles</td><td>\u81EA\u5B9A\u4E49\u5BFC\u822A\u533A\u57DF</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><h3>Tabpane Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td></td></tr><tr><td>pane-key</td><td>\u6807\u7B7E Key , \u5339\u914D\u7684\u6807\u8BC6\u7B26</td><td>string</td><td>\u9ED8\u8BA4\u7D22\u5F150,1,2\u2026</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6807\u7B7E</td><td>boolean</td><td>false</td></tr></tbody></table><h2>Tabpane Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><h3>Tabs Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1</td><td>{title,paneKey,disabled}</td></tr><tr><td>change</td><td>\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u6539\u53D8\u65F6\u89E6\u53D1</td><td>{title,paneKey,disabled}</td></tr></tbody></table>`,33),e=[p],i={setup(h,{expose:s}){return s({frontmatter:{}}),(r,j)=>(t(),a("div",l,e))}};export{i as default};
