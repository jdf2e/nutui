import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Barrage \u5F39\u5E55</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8BDD\u8BED\u548C\u8BCD\u7EC4\u7684\u8F6E\u64AD\u5C55\u793A\uFF0C\u9002\u7528\u4E8E\u89C6\u9891\u4E2D\u6216\u5176\u4ED6\u7C7B\u4F3C\u9700\u6C42\u4E2D\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Barrage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Barrage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Barrage);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD51</h3><p><code>Icon</code> \u7684 <code>name</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-barrage</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;danmu&quot;</span> <span class="hljs-attr">:danmu</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-barrage</span>&gt;</span>
</code></pre><pre><code class="language-javascript">  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> inputVal = ref&lt;any&gt;(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> danmu = ref&lt;any&gt;(<span class="hljs-literal">null</span>);
    <span class="hljs-keyword">let</span> list = ref([<span class="hljs-string">&quot;\u753B\u7F8E\u4E0D\u770B&quot;</span>, <span class="hljs-string">&quot;\u4E0D\u660E\u89C9\u5389&quot;</span>, <span class="hljs-string">&quot;\u559C\u5927\u666E\u5954&quot;</span>, <span class="hljs-string">&quot;\u7537\u9ED8\u5973\u6CEA&quot;</span>, <span class="hljs-string">&quot;\u7D2F\u89C9\u4E0D\u7231&quot;</span>, <span class="hljs-string">&quot;\u7237\u9752\u7ED3&quot;</span>]); 
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addDanmu</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-keyword">let</span> n = <span class="hljs-built_in">Math</span>.random();
      danmu.value.add(<span class="hljs-string">&#39;\u968F\u673A\u2014\u2014&#39;</span> + <span class="hljs-built_in">String</span>(n).substr(<span class="hljs-number">2</span>, <span class="hljs-number">10</span>));
    }
    <span class="hljs-keyword">return</span> {
      inputVal,
      danmu,
      list,
      addDanmu
    };
  }
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>danmu</td><td>\u5F39\u5E55\u5217\u8868\u6570\u636E</td><td>Array</td><td>[]</td></tr><tr><td>frequency</td><td>\u53EF\u89C6\u533A\u57DF\u5185\u6BCF\u4E2A\u5F39\u5E55\u51FA\u73B0\u7684\u65F6\u95F4\u95F4\u9694</td><td>Number</td><td>500</td></tr><tr><td>speeds</td><td>\u6BCF\u4E2A\u5F39\u5E55\u7684\u6EDA\u52A8\u65F6\u95F4</td><td>Number</td><td>2000</td></tr><tr><td>rows</td><td>\u5F39\u5E55\u884C\u6570\uFF0C\u5206\u51E0\u884C\u5C55\u793A</td><td>Number</td><td>1</td></tr><tr><td>top</td><td>\u5F39\u5E55\u5782\u76F4\u8DDD\u79BB</td><td>Number</td><td>10</td></tr><tr><td>loop</td><td>\u662F\u5426\u5FAA\u73AF\u64AD\u653E</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>add</td><td>\u6DFB\u52A0\u6570\u636E</td><td>-</td></tr></tbody></table>`,15),r=[p],u={setup(d,{expose:s}){return s({frontmatter:{}}),(o,c)=>(t(),a("div",l,r))}};export{u as default};
