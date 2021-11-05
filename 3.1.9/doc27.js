import{e as a,o as n,G as l}from"./vendor.js";const t={class:"markdown-body"},p=l(`<h1>Layout \u5E03\u5C40</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FEB\u901F\u8FDB\u884C\u5E03\u5C40</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Layout,Row,Col } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Layout,Row,Col } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Layout);
app.use(Row);
app.use(Col);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;24&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:24<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:12<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u5143\u7D20\u95F4\u8DDD</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>   
</code></pre><h3>Flex\u5E03\u5C40</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">wrap</span>=<span class="hljs-string">&quot;nowrap&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;flex&quot;</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content flex-content-light&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-content&quot;</span>&gt;</span>span:6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
</code></pre><h2>Prop</h2><h3>row</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5E03\u5C40\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3Aflex</td><td>String</td><td>-</td></tr><tr><td>gutter</td><td>\u5217\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF08\u5355\u4F4D\u4E3Apx\uFF09</td><td>String\u3001Number</td><td>-</td></tr><tr><td>justify</td><td>Flex \u4E3B\u8F74\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A start end center space-around space-between</td><td>String</td><td>start</td></tr><tr><td>align</td><td>Flex \u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A flex-start center flex-end</td><td>String</td><td>flex-start</td></tr><tr><td>flex-wrap</td><td>Flex\u662F\u5426\u6362\u884C\uFF0C\u53EF\u9009\u503C\u4E3A nowrap wrap reverse</td><td>String</td><td>nowrap</td></tr></tbody></table><h3>col</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>span</td><td>\u5217\u5143\u7D20\u5BBD\u5EA6\uFF08\u5171\u5206\u4E3A24\u4EFD\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u4E00\u884C3\u4E2A\uFF0C\u90A3\u4E48span\u503C\u4E3A8\uFF09</td><td>String\u3001Number</td><td>24</td></tr><tr><td>offset</td><td>\u5217\u5143\u7D20\u504F\u79FB\u8DDD\u79BB</td><td>String\u3001Number</td><td>0</td></tr></tbody></table>`,17),c=[p],r={setup(h,{expose:s}){return s({frontmatter:{}}),(g,e)=>(n(),a("div",t,c))}};export{r as default};
