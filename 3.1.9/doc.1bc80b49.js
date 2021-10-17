import{e as a,o as n,G as t}from"./vendor.bd251973.js";const p={class:"markdown-body"},l=t(`<h1>CricleProgress \u8FDB\u5EA6\u6761</h1><h3>\u4ECB\u7ECD</h3><p>\u5C55\u793A\u64CD\u4F5C\u6216\u4EFB\u52A1\u7684\u5F53\u524D\u8FDB\u5EA6\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { CirecleProgress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { CirecleProgress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(CirecleProgress);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>
</code></pre><h3>\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:progress-option</span>=<span class="hljs-string">&quot;progressOption&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>
</code></pre><h3>\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:is-auto</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>
</code></pre><h3>\u52A8\u6001\u6539\u53D8\u73AF\u5F62\u8FDB\u5EA6\u6761\u7684\u8FDB\u5EA6</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-circleprogress</span> <span class="hljs-attr">:progress</span>=<span class="hljs-string">&quot;percent&quot;</span> <span class="hljs-attr">:progress-option</span>=<span class="hljs-string">&quot;progressOption&quot;</span> <span class="hljs-attr">:stroke-inner-width</span>=<span class="hljs-string">&quot;strokeInnerWidth&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-circleprogress</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setReduceVal&quot;</span> &gt;</span>\u51CF\u5C11<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;setAddVal&quot;</span>&gt;</span>\u589E\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
</code></pre><pre><code class="language-javascript"> <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> progressOption = reactive({
      <span class="hljs-attr">radius</span>: <span class="hljs-number">50</span>,
      <span class="hljs-attr">strokeOutWidth</span>: <span class="hljs-number">10</span>,
      <span class="hljs-attr">backColor</span>: <span class="hljs-string">&#39;#d9d9d9&#39;</span>,
      <span class="hljs-attr">progressColor</span>: <span class="hljs-string">&#39;red&#39;</span>
    });
    <span class="hljs-keyword">const</span> percent = ref(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">const</span> strokeInnerWidth = ref(<span class="hljs-number">10</span>);
    <span class="hljs-keyword">const</span> isAuto = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> setAddVal = <span class="hljs-function">() =&gt;</span> {
      strokeInnerWidth.value = <span class="hljs-number">10</span>;
      <span class="hljs-keyword">if</span> (percent.value &gt;= <span class="hljs-number">100</span>) {
        <span class="hljs-keyword">return</span>;
      }
      percent.value += <span class="hljs-number">10</span>;
    };
    <span class="hljs-keyword">const</span> setReduceVal = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">if</span> (percent.value - <span class="hljs-number">10</span> &lt;= <span class="hljs-number">0</span>) {
        strokeInnerWidth.value = <span class="hljs-number">0</span>;
        percent.value = <span class="hljs-number">0</span>;
        <span class="hljs-keyword">return</span>;
      }
      percent.value -= <span class="hljs-number">10</span>;
    };
    <span class="hljs-keyword">return</span> {
      progressOption,
      isAuto,
      setAddVal,
      setReduceVal,
      percent
    };
  }
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>progress</td><td>\u767E\u5206\u6BD4</td><td>Number,String</td><td>\u5FC5\u4F20\u9879\uFF0C\u65E0\u9ED8\u8BA4\u503C</td></tr><tr><td>stroke-inner-width</td><td>\u5706\u5F27\u7684\u5BBD\u5EA6</td><td>Number,String</td><td>10</td></tr><tr><td>is-auto</td><td>\u662F\u5426\u81EA\u5B9A\u4E49\u5185\u5BB9\u663E\u793A\uFF08taro\u6682\u4E0D\u652F\u6301\uFF09</td><td>Boolean</td><td>false</td></tr><tr><td>progress-option</td><td>\u5916\u5706\u76F8\u5173\u53C2\u6570\u5BF9\u8C61,\u5176\u4E2D\u5305\u62EC\u534A\u5F84\uFF0C\u5BBD\u5EA6\uFF0C\u80CC\u666F\u989C\u8272\uFF0C\u8FDB\u5EA6\u8272\u503C</td><td>Object</td><td>{radius: 50,strokeOutWidth: 10, backColor: \u2018#d9d9d9\u2019,progressColor: \u2018red\u2019}</td></tr></tbody></table>`,16),r=[l],u={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(n(),a("div",p,r))}};export{u as default};
