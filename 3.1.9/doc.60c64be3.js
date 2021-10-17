import{e as a,o as t,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>FixedNav \u60AC\u6D6E\u5BFC\u822A</h1><h3>\u4ECB\u7ECD</h3><p>\u60AC\u6D6E\u6536\u9F50\u4F53\u9A8C\u4EA4\u4E92\uFF0C\u7528\u4E8E\u5FEB\u6377\u5BFC\u822A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { FixedNav } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { FixedNav } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(FixedNav);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-fixednav</span> <span class="hljs-attr">:position</span>=<span class="hljs-string">&quot;{top:&#39;70px&#39; }&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:nav-list</span>=<span class="hljs-string">&quot;navList&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> visible = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> navList = reactive([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9996\u9875&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5206\u7C7B&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8D2D\u7269\u8F66&#39;</span>,
        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6211\u7684&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png&#39;</span>
      }
    ]);
    <span class="hljs-keyword">return</span> {
      visible,
      navList
    };
 }
</code></pre><h3>\u5DE6\u4FA7\u6548\u679C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-fixednav</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">:position</span>=<span class="hljs-string">&quot;{top:&#39;140px&#39; }&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:nav-list</span>=<span class="hljs-string">&quot;navList&quot;</span> /&gt;</span>
</code></pre><h3>\u53D6\u6D88\u80CC\u666F\u906E\u7F69</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-fixednav</span> <span class="hljs-attr">:overlay</span>=<span class="hljs-string">&quot;false&quot;</span>  <span class="hljs-attr">:position</span>=<span class="hljs-string">&quot;{top:&#39;210px&#39; }&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible&quot;</span> <span class="hljs-attr">:nav-list</span>=<span class="hljs-string">&quot;navList&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-fixednav</span> <span class="hljs-attr">:position</span>=<span class="hljs-string">&quot;{top:&#39;280px&#39; }&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;myActive&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:list</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:btn</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;retweet&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#fff&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>{{ myActive ? &#39;\u81EA\u5B9A\u4E49\u5F00&#39; : &#39;\u81EA\u5B9A\u4E49\u5173&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-fixednav</span>&gt;</span>
</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> myActive = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> navList = reactive([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9996\u9875&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5206\u7C7B&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8D2D\u7269\u8F66&#39;</span>,
        <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6211\u7684&#39;</span>,
        <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png&#39;</span>
      }
    ]);
    <span class="hljs-keyword">return</span> {
      myActive,
      navList
    };
 }
</code></pre><h3>Prop</h3><table><thead><tr><th style="text-align:left;">\u5B57\u6BB5</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">\u662F\u5426\u6253\u5F00</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">nav-list</td><td style="text-align:left;">\u60AC\u6D6E\u5217\u8868\u5185\u5BB9\u6570\u636E</td><td style="text-align:left;">Array</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">active-text</td><td style="text-align:left;">\u6536\u8D77\u5217\u8868\u6309\u94AE\u6587\u6848</td><td style="text-align:left;">String</td><td style="text-align:left;">\u6536\u8D77\u5BFC\u822A</td></tr><tr><td style="text-align:left;">un-active-text</td><td style="text-align:left;">\u5C55\u5F00\u5217\u8868\u6309\u94AE\u6587\u6848</td><td style="text-align:left;">String</td><td style="text-align:left;">\u5FEB\u901F\u5BFC\u822A</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">\u5BFC\u822A\u65B9\u5411,\u53EF\u9009\u503C left right</td><td style="text-align:left;">String</td><td style="text-align:left;">right</td></tr><tr><td style="text-align:left;">overlay</td><td style="text-align:left;">\u5C55\u5F00\u65F6\u662F\u5426\u663E\u793A\u906E\u7F69</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;">fixed \u5782\u76F4\u4F4D\u7F6E</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: \u2018auto\u2019,bottom: \u2018auto\u2019}</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>selected</td><td>\u9009\u62E9\u4E4B\u540E\u89E6\u53D1</td><td>{item:item,$event:Event}</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>btn</td><td>\u81EA\u5B9A\u4E49\u6309\u94AE</td></tr><tr><td>list</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u5217\u8868\u5185\u5BB9</td></tr></tbody></table>`,21),e=[p],o={setup(c,{expose:s}){return s({frontmatter:{}}),(i,r)=>(t(),a("div",l,e))}};export{o as default};
