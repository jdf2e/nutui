import{e as s,o as a,G as d}from"./vendor.js";const n={class:"markdown-body"},r=d(`<h1>Toast \u5410\u53F8</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u8F7B\u63D0\u793A\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Toast);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h4>\u5168\u5C40\u4F7F\u7528\u65B9\u5F0F</h4><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> { proxy } = getCurrentInstance();
    proxy.$toast.text(<span class="hljs-string">&#39;\u5168\u5C40\u4F7F\u7528\u65B9\u5F0F&#39;</span>);
    <span class="hljs-keyword">return</span> {};
  },
};
</code></pre><h4>\u6587\u5B57\u63D0\u793A</h4><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    Toast.text(<span class="hljs-string">&#39;\u7F51\u7EDC\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5~&#39;</span>);
    <span class="hljs-keyword">return</span> {};
  },
};
</code></pre><h4>\u6210\u529F\u63D0\u793A</h4><pre><code class="language-javascript">Toast.success(<span class="hljs-string">&#39;\u6210\u529F\u63D0\u793A&#39;</span>);
</code></pre><h4>\u5931\u8D25\u63D0\u793A</h4><pre><code class="language-javascript">Toast.fail(<span class="hljs-string">&#39;\u5931\u8D25\u63D0\u793A&#39;</span>);
</code></pre><h4>\u8B66\u544A\u63D0\u793A</h4><pre><code class="language-javascript">Toast.warn(<span class="hljs-string">&#39;\u8B66\u544A\u63D0\u793A&#39;</span>);
</code></pre><h4>\u52A0\u8F7D\u63D0\u793A</h4><pre><code class="language-javascript">Toast.loading(<span class="hljs-string">&#39;\u52A0\u8F7D\u4E2D&#39;</span>);
</code></pre><h4>Toast\u4E0D\u6D88\u5931</h4><pre><code class="language-javascript">Toast.text(msg,{
    <span class="hljs-attr">duration</span>:<span class="hljs-number">0</span>
});
</code></pre><h4>Loading\u5E26\u900F\u660E\u7F69</h4><pre><code class="language-javascript">Toast.loading(msg,{
     <span class="hljs-attr">cover</span>:<span class="hljs-literal">true</span>
});
</code></pre><h4>\u652F\u6301\u5728JS\u6A21\u5757\u4E2D\u5BFC\u5165\u4F7F\u7528</h4><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@nutui/nutui&quot;</span>;
Toast.text(<span class="hljs-string">&#39;\u5728js\u6A21\u5757\u4E2D\u4F7F\u7528&#39;</span>);
<span class="hljs-comment">// \u8FD4\u56DE\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u624B\u52A8\u8C03\u7528\u5B9E\u4F8B\u4E2D\u7684hide\u65B9\u6CD5\u5173\u95ED\u63D0\u793A</span>
<span class="hljs-keyword">const</span> toast = Toast.loading(<span class="hljs-string">&#39;\u5728js\u6A21\u5757\u4E2D\u4F7F\u7528&#39;</span>);
toast.hide();
</code></pre><h3>API</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>Toast.text</td><td>\u5C55\u793A\u6587\u5B57\u63D0\u793A</td><td>message\uFF5C options</td><td>toast \u5B9E\u4F8B(message\u652F\u6301\u4F20\u5165HTML)</td></tr><tr><td>Toast.success</td><td>\u5C55\u793A\u6210\u529F\u63D0\u793A</td><td>message\uFF5C options</td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.fail</td><td>\u5C55\u793A\u5931\u8D25\u63D0\u793A</td><td>message\uFF5C options</td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.warn</td><td>\u5C55\u793A\u8B66\u544A\u63D0\u793A</td><td>message\uFF5C options</td><td>toast \u5B9E\u4F8B</td></tr><tr><td>Toast.hide</td><td>\u5173\u95ED\u63D0\u793A</td><td>\u9ED8\u8BA4\u5173\u95ED\u6240\u6709\u5B9E\u4F8B\uFF0C\u53EF\u4F20id\u5173\u95ED\u6307\u5B9A\u5B9E\u4F8B</td><td>void</td></tr><tr><td>Toast.loading</td><td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td><td>message\uFF5C options</td><td>toast \u5B9E\u4F8B</td></tr></tbody></table><h2>Options</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>id</td><td>\u6807\u8BC6\u7B26\uFF0C\u76F8\u540C\u8005\u5171\u7528\u4E00\u4E2A\u5B9E\u4F8B<br>loading\u7C7B\u578B\u9ED8\u8BA4\u4F7F\u7528\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5176\u4ED6\u7C7B\u578B\u9ED8\u8BA4\u4E0D\u5171\u7528</td><td>String/Number</td><td>-</td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F\uFF08\u6BEB\u79D2\uFF09<br>\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931</td><td>Number</td><td>2000</td></tr><tr><td>center</td><td>\u662F\u5426\u5C55\u793A\u5728\u9875\u9762\u4E2D\u90E8\uFF08\u4E3Afalse\u65F6\u5C55\u793A\u5728\u5E95\u90E8\uFF09</td><td>Boolean</td><td>true</td></tr><tr><td>bottom</td><td>\u8DDD\u9875\u9762\u5E95\u90E8\u7684\u8DDD\u79BB\uFF08\u50CF\u7D20\uFF09\uFF0Coption.center\u4E3Afalse\u65F6\u751F\u6548</td><td>Number</td><td>30</td></tr><tr><td>textAlignCenter</td><td>\u591A\u884C\u6587\u6848\u662F\u5426\u5C45\u4E2D</td><td>Boolean</td><td>true</td></tr><tr><td>bgColor</td><td>\u80CC\u666F\u989C\u8272\uFF08\u900F\u660E\u5EA6\uFF09</td><td>String</td><td>\u201Crgba(0, 0, 0, 0.8)\u201D</td></tr><tr><td>customClass</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>String</td><td>\u201C\u201D</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C<strong>\u652F\u6301\u56FE\u7247\u94FE\u63A5\u6216base64\u683C\u5F0F</strong></td><td>String</td><td>\u201C\u201D</td></tr><tr><td>size</td><td>\u6587\u6848\u5C3A\u5BF8\uFF0C<strong>small</strong>/<strong>base</strong>/<strong>large</strong>\u4E09\u9009\u4E00</td><td>String</td><td>\u201Cbase\u201D</td></tr><tr><td>cover</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69\u5C42</td><td>Boolean</td><td>false</td></tr><tr><td>cover-color</td><td>\u906E\u7F69\u5C42\u989C\u8272\uFF0C\u9ED8\u8BA4\u900F\u660E</td><td>String</td><td>\u201Crgba(0,0,0,0)\u201D</td></tr><tr><td>loadingRotate</td><td>loading\u56FE\u6807\u662F\u5426\u65CB\u8F6C\uFF0C\u4EC5\u5BF9loading\u7C7B\u578B\u751F\u6548</td><td>Boolean</td><td>true</td></tr><tr><td>on-close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>function</td><td>null</td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u5728\u70B9\u51FB\u906E\u7F69\u5C42\u540E\u5173\u95ED\u63D0\u793A</td><td>Boolean</td><td>false</td></tr><tr><td>toast-style</td><td>\u63D0\u793A\u6846style</td><td>object</td><td>{}</td></tr><tr><td>toast-class</td><td>\u63D0\u793A\u6846class</td><td>String</td><td>\u201C\u201D</td></tr></tbody></table>`,28),e=[r],i={setup(o,{expose:t}){return t({frontmatter:{}}),(p,c)=>(a(),s("div",n,e))}};export{i as default};
