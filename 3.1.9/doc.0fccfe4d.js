import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Menu \u83DC\u5355\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u4E0B\u62C9\u9009\u62E9\u83DC\u5355\u7EC4\u4EF6</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Menu } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Menu,MenuItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;
<span class="hljs-keyword">const</span> app = createApp();
app.use(Menu);
app.use(MenuItem);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD51</h3><p><code>Menu</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165\u5217\u8868\u6570\u636EmenuList\u548Ctitle\u540D\u79F0\u8BBE\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6700\u65B0\u5546\u54C1&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u70ED\u95E8\u63A8\u8350&#39;</span>,
      <span class="hljs-attr">menuList</span>: [
        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u624B\u673A&#39;</span>},
        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u7535\u8111&#39;</span>},
        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5BB6\u7528\u7535\u5668&#39;</span>},
        {<span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u65E5\u7528\u767E\u8D27&#39;</span>}
      ]
    });
 }

</code></pre><h3>\u83DC\u5355\u591A\u5217\u5C55\u793A</h3><p><code>Menu</code> \u7684 <code> multiStyle</code> \u5C5E\u6027\u914D\u7F6E1\u5217\u30012\u5217\u30013\u5217\u5C55\u793A\u83DC\u5355\u5217\u8868\uFF0C\u9ED8\u8BA4\u5355\u5217\u5C55\u793A\u3002 <code>maxHeight</code> \u5C5E\u6027\u53EF\u63A7\u5236\u83DC\u5355\u5217\u8868\u7684\u6700\u5927\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5355\u5217\u5C55\u793A&quot;</span> <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">maxHeight</span>=<span class="hljs-string">&quot;200&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u53CC\u5217\u5C55\u793A&quot;</span>  <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u4E09\u5217\u5C55\u793A&quot;</span>  <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u64CD\u4F5C</h3><p><code>Menu</code> \u7684 <code>disabled</code> \u5C5E\u6027\u53EF\u5BF9\u83DC\u5355\u5217\u8868\u8FDB\u884C\u7981\u7528\u64CD\u4F5C\u3002 <code>autoClose</code> \u5C5E\u6027\u63A7\u5236\u4E0B\u62C9\u83DC\u5355\u5217\u8868\u662F\u5426\u9009\u62E9\u540E\u81EA\u52A8\u6536\u8D77\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u6536\u8D77\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6700\u65B0\u5546\u54C1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;title&quot;</span> <span class="hljs-attr">:auto-close</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7B5B\u9009&quot;</span> <span class="hljs-attr">disabled</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u7981\u6B62\u8499\u5C42\u5C55\u793A</h3><p>\u5C5E\u6027<code>hasMask</code>\u63A7\u5236\u662F\u5426\u6709\u8499\u5C42\uFF0C\u9ED8\u8BA4\u4E3A <code>true</code>\u5C55\u793A\u8499\u5C42</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> <span class="hljs-attr">:hasMask</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6700\u65B0\u5546\u54C1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u70B9\u51FB\u4E8B\u4EF6</h3><p><code>Menu</code> \u7684 <code>@menu-click</code> \u4E8B\u4EF6\u8FD4\u56DE\u70B9\u51FB\u7684\u83DC\u5355\u6807\u9898\uFF0C<code>@change</code>\u4E8B\u4EF6\u8FD4\u56DE\u83DC\u5355\u5217\u8868\u9009\u4E2D\u7684\u6570\u636E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span>
        <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u83DC\u5355\u5217\u8868\u9879&quot;</span>
        <span class="hljs-attr">multi-style</span>=<span class="hljs-string">&quot;2&quot;</span>
        @<span class="hljs-attr">menu-click</span>=<span class="hljs-string">&quot;alertText($event, &#39;title&#39;)&quot;</span>
        @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;getChecked&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span>
        <span class="hljs-attr">:menu-list</span>=<span class="hljs-string">&quot;menuList2&quot;</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u4E2D\u6807\u9898\u89E6\u53D1&quot;</span>
        <span class="hljs-attr">disabled</span>
        @<span class="hljs-attr">menu-click</span>=<span class="hljs-string">&quot;alertText&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
 <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> getChecked = <span class="hljs-function">(<span class="hljs-params">info: any, name: string</span>) =&gt;</span> {
    alert(<span class="hljs-string">&#39;\u9009\u62E9\u83DC\u5355\u9009\u9879\uFF1A&#39;</span> + name);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">11</span>, info, name);
};
<span class="hljs-keyword">const</span> alertText = <span class="hljs-function">(<span class="hljs-params">info, type</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(info, type);
    <span class="hljs-keyword">if</span> (type == <span class="hljs-string">&#39;title&#39;</span>) {
        alert(<span class="hljs-string">&#39;\u83DC\u5355\u6807\u9898\u70B9\u51FB\uFF1A&#39;</span> + info);
    } <span class="hljs-keyword">else</span> {
        alert(<span class="hljs-string">&#39;\u7981\u7528\u64CD\u4F5C&#39;</span>);
    }
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u9009\u9879&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;user-style&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
            \u8BBE\u7F6E\u4E3A\u9ED8\u8BA4 <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-switch</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u786E\u8BA4\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u83DC\u5355\u6807\u9898\u540D\u79F0\u6216\u53EF\u4E3A\u83DC\u5355\u5217\u8868\u7B2C\u4E00\u9879\uFF0C\u5FC5\u586B</td><td>String</td><td>-</td></tr><tr><td>menu-list</td><td>\u83DC\u5355\u5217\u8868\u6570\u636E\uFF0C\u5FC5\u586B</td><td>Array</td><td>-</td></tr><tr><td>multi-style</td><td>\u5217\u8868\u5217\u6570\u8BBE\u7F6E\uFF0C\u9ED8\u8BA41\u5217\uFF0C\u53EF\u9009\u503C <code>1</code> <code>2</code> <code>3</code></td><td>String, Number</td><td>1</td></tr><tr><td>disabled</td><td>\u662F\u5426\u5F00\u542F\u7981\u7528\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4E0D\u5F00\u542F</td><td>Boolean</td><td>false</td></tr><tr><td>max-height</td><td>\u83DC\u5355\u5217\u8868\u6700\u5927\u9AD8\u5EA6\uFF0C\u5355\u4F4Dpx</td><td>String, Number</td><td>-</td></tr><tr><td>auto-close</td><td>\u9009\u62E9\u540E\u4E0B\u62C9\u83DC\u5355\u5217\u8868\u662F\u5426\u81EA\u52A8\u6536\u8D77\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u6536\u8D77</td><td>Boolean</td><td>true</td></tr><tr><td>has-mask</td><td>\u662F\u5426\u6709\u8499\u5C42</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>menu-click</td><td>\u70B9\u51FB\u83DC\u5355\u6807\u9898\u89E6\u53D1\uFF0C\u8FD4\u56DE\u83DC\u5355\u6807\u9898\u540D\u79F0</td><td>event: Event</td></tr><tr><td>change</td><td>\u70B9\u51FB\u83DC\u5355\u5217\u8868\u9009\u9879\u89E6\u53D1\uFF0C\u8FD4\u56DE\u9009\u4E2D\u83DC\u5355\u9879\u6570\u636E\u3001\u540D\u79F0</td><td>event: Event</td></tr></tbody></table>`,30),e=[p],r={setup(c,{expose:s}){return s({frontmatter:{}}),(u,j)=>(n(),a("div",l,e))}};export{r as default};
