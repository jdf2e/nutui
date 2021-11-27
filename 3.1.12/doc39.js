import{e as t,o as a,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Popup \u5F39\u51FA\u5C42</h1><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Popup);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p><code>visible</code> \u63A7\u5236\u663E\u793A/\u9690\u85CF</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;30px&#39; }&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>\u6B63\u6587<span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>
</code></pre><h3>\u5F39\u51FA\u4F4D\u7F6E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;20% }&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;100%&#39;, width: &#39;20%&#39; }&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>
</code></pre><h3>\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;20%&#39; }&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;20%&#39; }&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">close-icon-position</span>=<span class="hljs-string">&quot;top-left&quot;</span>
  <span class="hljs-attr">close-icon</span>=<span class="hljs-string">&quot;heart&quot;</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;20%&#39; }&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>
</code></pre><h3>\u5706\u89D2\u5F39\u6846</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span>
  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">closeable</span>
  <span class="hljs-attr">round</span>
  <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ height: &#39;30%&#39; }&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>
</code></pre><h3>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-popup</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{ padding: &#39;30px&#39; }&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>app<span class="hljs-tag">&lt;/<span class="hljs-name">nut-popup</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>z-index</td><td>\u906E\u7F69\u5C42\u7EA7</td><td>String\u3001Number</td><td><code>2000</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2</td><td>String\u3001Number</td><td><code>0.3</code></td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>lock-scroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF08top,bottom,left,right,center\uFF09</td><td>String</td><td><code>&quot;center&quot;</code></td></tr><tr><td>transition</td><td>\u52A8\u753B\u540D</td><td>String</td><td>-</td></tr><tr><td>style</td><td>\u81EA\u5B9A\u4E49\u5F39\u6846\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>\u81EA\u5B9A\u4E49\u5F39\u6846\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>closeable</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>close-icon-position</td><td>\u5173\u95ED\u6309\u94AE\u4F4D\u7F6E\uFF08top-left,top-right,bottom-left,bottom-right\uFF09</td><td>String</td><td><code>&quot;top-right&quot;</code></td></tr><tr><td>close-icon</td><td>\u81EA\u5B9A\u4E49 Icon</td><td>String</td><td><code>&quot;close&quot;</code></td></tr><tr><td>destroy-on-close</td><td>\u7EC4\u4EF6\u9500\u6BC1\u540E\u662F\u5426\u5173\u95ED</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>round</td><td>\u662F\u5426\u663E\u793A\u5706\u89D2</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9(<code>\u5C0F\u7A0B\u5E8F\u4E0D\u652F\u6301</code>)</td><td>String</td><td><code>&quot;body&quot;</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5F39\u6846\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td>click-close-icon</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td>open</td><td>\u6253\u5F00\u5F39\u6846\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F39\u6846\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opend</td><td>\u906E\u7F69\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td>closed</td><td>\u906E\u7F69\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code>event: Event</code></td></tr><tr><td>click-overlay</td><td>\u70B9\u51FB\u906E\u7F69\u89E6\u53D1</td><td><code>event: Event</code></td></tr></tbody></table>`,22),o=[p],u={setup(d,{expose:s}){return s({frontmatter:{}}),(c,r)=>(a(),t("div",l,o))}};export{u as default};
