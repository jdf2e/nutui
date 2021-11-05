import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Menu \u83DC\u5355\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Menu,MenuItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;
<span class="hljs-keyword">const</span> app = createApp();
app.use(Menu);
app.use(MenuItem);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> options1 = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5168\u90E8\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u65B0\u6B3E\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D3B\u52A8\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
  ]

  <span class="hljs-keyword">const</span> options2 = [
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9ED8\u8BA4\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a&#39;</span> },
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u597D\u8BC4\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;b&#39;</span> },
    { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9500\u91CF\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;c&#39;</span> },
  ]
 }
</code></pre><h3>\u4E24\u5217\u6807\u9898</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9ED8\u8BA4\u6392\u5E8F&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u83B7\u53D6\u9009\u62E9\u7684\u5217\u8868\u5BF9\u8C61</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;handleChoose&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> handleChoose = <span class="hljs-function">(<span class="hljs-params">val, index</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val, index)
  }
 }
</code></pre><h3>\u4E00\u884C\u4E24\u5217\u5217\u8868\u5BF9\u8C61</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> <span class="hljs-attr">col</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u83DC\u5355</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u9009\u4E2D\u6001\u56FE\u6807\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#0f0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7B5B\u9009&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
      <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{
        display: &#39;flex&#39;,
        &#39;justify-content&#39;: &#39;space-between&#39;,
        &#39;align-items&#39;: &#39;center&#39;
      }&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ &#39;font-size&#39;: &#39;12px&#39; }&quot;</span>&gt;</span>\u6211\u662F\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> item = ref&lt;HTMLElement&gt;()

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> {
    (item.value <span class="hljs-keyword">as</span> any).toggle()
  }
 }
</code></pre><h2>API</h2><h3>Props</h3><h3>nut-menu</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>col</td><td>\u663E\u793A\u7684\u5217\u6570</td><td>String/Number</td><td>1</td></tr><tr><td>active-color</td><td>\u9009\u9879\u7684\u9009\u4E2D\u6001\u56FE\u6807\u989C\u8272</td><td>String</td><td>#f00</td></tr></tbody></table><h3>nut-menu-item</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>options</td><td>\u5217\u8868\u5BF9\u8C61</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u83DC\u5355</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>choose</td><td>\u5355\u9009\u4E0B\uFF0C\u9009\u62E9\u4E4B\u540E\u89E6\u53D1</td><td>1.\u9009\u62E9\u7684\u5217\u8868\u5BF9\u8C61\u30022.\u5217\u8868\u7D22\u5F15</td></tr></tbody></table>`,31),e=[p],u={setup(c,{expose:s}){return s({frontmatter:{}}),(o,j)=>(n(),a("div",l,e))}};export{u as default};
