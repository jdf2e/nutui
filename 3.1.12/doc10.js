import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Card \u5546\u54C1\u5361\u7247</h1><h3>\u4ECB\u7ECD</h3><p>\u5546\u54C1\u5361\u7247\uFF0C\u7528\u4E8E\u5C55\u793A\u5546\u54C1\u7684\u56FE\u7247\u3001\u4EF7\u683C\u7B49\u4FE1\u606F</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Card);

</code></pre><h3>\u4EE3\u7801\u5B9E\u4F8B</h3><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-card</span>
      <span class="hljs-attr">:img-url</span>=<span class="hljs-string">&quot;state.imgUrl&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;state.title&quot;</span>
      <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;state.price&quot;</span>
      <span class="hljs-attr">:vipPrice</span>=<span class="hljs-string">&quot;state.vipPrice&quot;</span>
      <span class="hljs-attr">:shopDesc</span>=<span class="hljs-string">&quot;state.shopDesc&quot;</span>
      <span class="hljs-attr">:delivery</span>=<span class="hljs-string">&quot;state.delivery&quot;</span>
      <span class="hljs-attr">:shopName</span>=<span class="hljs-string">&quot;state.shopName&quot;</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-card</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-card</span>
<span class="hljs-attr">:img-url</span>=<span class="hljs-string">&quot;state.imgUrl&quot;</span>
<span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;state.title&quot;</span>
<span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;state.price&quot;</span>
<span class="hljs-attr">:vipPrice</span>=<span class="hljs-string">&quot;state.vipPrice&quot;</span>
<span class="hljs-attr">:shopDesc</span>=<span class="hljs-string">&quot;state.shopDesc&quot;</span>
<span class="hljs-attr">:delivery</span>=<span class="hljs-string">&quot;state.delivery&quot;</span>
<span class="hljs-attr">:shopName</span>=<span class="hljs-string">&quot;state.shopName&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prolist</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;search_prolist_attr&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;word&quot;</span>&gt;</span>\u6D3B\u9C9C<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;word&quot;</span>&gt;</span>\u793C\u76D2<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;word&quot;</span>&gt;</span>\u56FD\u4EA7<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">tag</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag&quot;</span> 
        <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;//img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png&quot;</span>
        <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">footer</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;customize&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-card</span>&gt;</span>
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>img-url</td><td>\u5DE6\u4FA7\u56FE\u7247Url</td><td>String</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>price</td><td>\u5546\u54C1\u4EF7\u683C</td><td>String</td><td>-</td></tr><tr><td>vip-price</td><td>\u4F1A\u5458\u4EF7\u683C</td><td>String</td><td>-</td></tr><tr><td>shop-desc</td><td>\u5E97\u94FA\u4ECB\u7ECD</td><td>String</td><td>-</td></tr><tr><td>delivery</td><td>\u914D\u9001\u65B9\u5F0F</td><td>String</td><td>-</td></tr><tr><td>shop-name</td><td>\u5E97\u94FA\u540D\u79F0</td><td>String</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>prolist</td><td>\u81EA\u5B9A\u4E49\u5546\u54C1\u4ECB\u7ECD</td></tr><tr><td>origin</td><td>\u4EF7\u683C\u540E\u65B9\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>shop-tag</td><td>\u5E97\u94FA\u4ECB\u7ECD\u81EA\u5B9A\u4E49</td></tr><tr><td>footer</td><td>\u53F3\u4E0B\u89D2\u5185\u5BB9\u81EA\u5B9A\u4E49</td></tr></tbody></table>`,14),r=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(e,d)=>(t(),a("div",l,r))}};export{j as default};
