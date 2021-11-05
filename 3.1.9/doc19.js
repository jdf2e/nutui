import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Drag \u62D6\u62FD</h1><h3>\u4ECB\u7ECD</h3><p>\u5B9E\u73B0\u53EF\u62D6\u62FD\u7684\u4EFB\u610F\u5143\u7D20</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Drag } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Drag);
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u53EF\u70B9\u51FB\uFF0C\u53EF\u62D6\u62FD<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>
</code></pre><h2>\u9650\u5236\u62D6\u62FD\u65B9\u5411</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u53EA\u80FD\u5728X\u8F74\u62D6\u52A8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>
</code></pre><h2>\u81EA\u52A8\u5438\u8FB9</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;x&quot;</span> <span class="hljs-attr">:attract</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u62D6\u52A8\u6211<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>
</code></pre><h2>\u9650\u5236\u62D6\u62FD\u8FB9\u754C</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-drag</span>
  <span class="hljs-attr">:boundary</span>=<span class="hljs-string">&quot;{ top: 401, left: 9, bottom: bottom(), right: right() }&quot;</span>
  <span class="hljs-attr">:attract</span>=<span class="hljs-string">&quot;true&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u62D6\u52A8\u6211<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-drag</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
 <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">right</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">document</span>.documentElement.clientWidth - <span class="hljs-number">300</span> - <span class="hljs-number">9</span>;
    }
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bottom</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">document</span>.documentElement.clientHeight - <span class="hljs-number">559</span>;
    }
    <span class="hljs-keyword">return</span> {
      right,
      bottom
    };
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h2>Prop</h2><table><thead><tr><th style="text-align:left;">\u5B57\u6BB5</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">attract</td><td style="text-align:left;">\u662F\u5426\u5F00\u542F\u81EA\u52A8\u5438\u8FB9</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">\u62D6\u62FD\u5143\u7D20\u7684\u62D6\u62FD\u65B9\u5411\u9650\u5236\uFF0C<strong>x</strong>/<strong>y</strong>/<strong>all</strong>\u4E09\u9009\u4E00</td><td style="text-align:left;">String</td><td style="text-align:left;">\u2018all\u2019</td></tr><tr><td style="text-align:left;">boundary</td><td style="text-align:left;">\u62D6\u62FD\u5143\u7D20\u7684\u62D6\u62FD\u8FB9\u754C</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: 0,left: 0,right: 0,bottom: 0}</td></tr></tbody></table>`,15),e=[p],d={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",l,e))}};export{d as default};
