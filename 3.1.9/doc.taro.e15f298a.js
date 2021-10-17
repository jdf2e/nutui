import{e as s,o as a,G as n}from"./vendor.bd251973.js";const e={class:"markdown-body"},r=n(`<h1>signature\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><pre><code>\u57FA\u4E8ECanvas\u7684\u7B7E\u540D\u7EC4\u4EF6\u3002
</code></pre><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Signature} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Signature);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u4FEE\u6539\u989C\u8272\u548C\u7B7E\u5B57\u7C97\u7EC6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-signature</span>
      <span class="hljs-attr">:lineWidth</span>=<span class="hljs-string">&quot;lineWidth&quot;</span>
      <span class="hljs-attr">:strokeStyle</span>=<span class="hljs-string">&quot;strokeStyle&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
      @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;clear&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: &#39;green&#39;,
      testimg: &#39;&#39;
    });
    const clear = () =&gt; {
      console.log(&#39;\u6E05\u9664\u4E8B\u4EF6&#39;);
    };
    const confirm = (data: any) =&gt; {
      console.log(&#39;\u56FE\u7247\u5730\u5740&#39;, data);
      Taro.saveImageToPhotosAlbum({
        filePath: \`\${data}\`,
        success(res) {
          Taro.showToast({
            title: &#39;\u4FDD\u5B58\u6210\u529F&#39;
          });
        },
        fail(err) {
          Taro.showToast({
            title: &#39;\u4FDD\u5B58\u5931\u8D25&#39;
          });
        }
      });
    };
    return { ...state, confirm, clear };
  }
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>custom-class</td><td>\u81EA\u5B9A\u4E49class</td><td>String</td><td>-</td></tr><tr><td>line-width</td><td>\u7EBF\u6761\u7684\u5BBD\u5EA6</td><td>Number</td><td>3</td></tr><tr><td>stroke-style</td><td>\u7ED8\u56FE\u7B14\u89E6\u989C\u8272</td><td>String</td><td>\u2018#000\u2019</td></tr><tr><td>type</td><td>\u56FE\u7247\u683C\u5F0F</td><td>String</td><td>\u2018png\u2019</td></tr><tr><td>un-support-tpl</td><td>\u4E0D\u652F\u6301Canvas\u60C5\u51B5\u4E0B\u7684\u5C55\u793A\u6587\u6848</td><td>String</td><td>\u2018\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Canvas\uFF0C\u65E0\u6CD5\u4F7F\u7528\u672C\u63A7\u4EF6\uFF01\u2019</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td>data URI</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u91CD\u7B7E\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td>\u65E0</td></tr></tbody></table>`,13),d=[r],i={setup(l,{expose:t}){return t({frontmatter:{}}),(p,c)=>(a(),s("div",e,d))}};export{i as default};
