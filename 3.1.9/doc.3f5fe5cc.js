import{e as a,o as t,G as n}from"./vendor.bd251973.js";const p={class:"markdown-body"},l=n(`<h1>Price \u5546\u54C1\u4EF7\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u5BF9\u5546\u54C1\u4EF7\u683C\u6570\u503C\u7684\u5C0F\u6570\u70B9\u524D\u540E\u90E8\u5206\u5E94\u7528\u4E0D\u540C\u6837\u5F0F\uFF0C\u8FD8\u652F\u6301\u4EBA\u6C11\u5E01\u7B26\u53F7\u3001\u5343\u4F4D\u5206\u9694\u7B26\u3001\u8BBE\u7F6E\u5C0F\u6570\u70B9\u4F4D\u6570\u7B49\u529F\u80FD\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Price } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Price } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Price);

</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-price</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;1010&quot;</span> <span class="hljs-attr">:need-symbol</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:thousands</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
</code></pre><h3>\u6709\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u65E0\u5343\u4F4D\u5206\u9694</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-price</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;10010.01&quot;</span> <span class="hljs-attr">:need-symbol</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:thousands</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><h3>\u5E26\u4EBA\u6C11\u5E01\u7B26\u53F7\uFF0C\u6709\u5343\u4F4D\u5206\u9694\uFF0C\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-price</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;15213.1221&quot;</span> <span class="hljs-attr">:decimal-digits</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:need-symbol</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:thousands</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
</code></pre><h3>\u5F02\u6B65\u968F\u673A\u53D8\u66F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-price</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;price&quot;</span> <span class="hljs-attr">:decimal-digits</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:need-symbol</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:thousands</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> price = ref(<span class="hljs-number">0</span>);
    <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
        price.value = <span class="hljs-built_in">Math</span>.random()*<span class="hljs-number">10000000</span>;
    }, <span class="hljs-number">1000</span>);
    <span class="hljs-keyword">return</span> {
        price
    };
}
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>price</td><td>\u4EF7\u683C\u6570\u91CF</td><td>Number</td><td>0</td></tr><tr><td>need-symbol</td><td>\u662F\u5426\u9700\u8981\u52A0\u4E0A symbol \u7B26\u53F7</td><td>Boolean</td><td>true</td></tr><tr><td>symbol</td><td>\u7B26\u53F7\u7C7B\u578B</td><td>String</td><td>\xA5</td></tr><tr><td>decimal-digits</td><td>\u5C0F\u6570\u4F4D\u4F4D\u6570</td><td>Number</td><td>2</td></tr><tr><td>thousands</td><td>\u662F\u5426\u6309\u7167\u5343\u5206\u53F7\u5F62\u5F0F\u663E\u793A</td><td>Boolean</td><td>false</td></tr></tbody></table>`,16),e=[l],u={setup(r,{expose:s}){return s({frontmatter:{}}),(o,h)=>(t(),a("div",p,e))}};export{u as default};
