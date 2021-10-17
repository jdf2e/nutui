import{e as a,o as t,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>NoticeBar \u901A\u544A\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u5C55\u793A\u4E00\u7EC4\u6D88\u606F\u901A\u77E5\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">
<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { NoticeBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { NoticeBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(NoticeBar);

</code></pre><h1></h1><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u534E\u4E3A\u7545\u4EAB9\u65B0\u54C1\u5373\u5C06\u4E0A\u5E02\uFF0C\u6D3B\u52A8\u671F\u95F40\u5143\u9884\u7EA6\u53EF\u53C2\u4E0E\u62BD\u5956\uFF0C\u8D62HUAWEI WATCH\u7B49\u597D\u793C\uFF0C\u66F4\u591A\u4EA7\u54C1\u4FE1\u606F\u8BF7\u6301\u7EED\u5173\u6CE8\uFF01&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u6EDA\u52A8</h3><p>\u6587\u5B57\u5185\u5BB9\u591A\u4E8E\u4E00\u884C\u65F6\uFF0C\u53EF\u901A\u8FC7scrollable\u53C2\u6570\u63A7\u5236\u662F\u5426\u5F00\u542F\u6EDA\u52A8</p><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u534E\u4E3A\u7545\u4EAB9\u65B0\u54C1\u5373\u5C06\u4E0A\u5E02\uFF0C\u6D3B\u52A8\u671F\u95F40\u5143\u9884\u7EA6\u53EF\u53C2\u4E0E\u62BD\u5956\uFF0C\u8D62HUAWEI WATCH\u7B49\u597D\u793C\uFF0C\u66F4\u591A\u4EA7\u54C1\u4FE1\u606F\u8BF7\u6301\u7EED\u5173\u6CE8\uFF01&quot;</span>
      <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><h3>\u901A\u544A\u680F\u6A21\u5F0F\u2013\u5173\u95ED\u6A21\u5F0F</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">:closeMode</span>=<span class="hljs-string">&quot;true&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;hello&quot;</span>
    &gt;</span>\u534E\u4E3A\u7545\u4EAB9\u65B0\u54C1\u5373\u5C06\u4E0A\u5E02\uFF0C\u6D3B\u52A8\u671F\u95F40\u5143\u9884\u7EA6\u53EF\u53C2\u4E0E\u62BD\u5956\uFF0C\u8D62HUAWEI WATCH\u7B49\u597D\u793C\uFF0C\u66F4\u591A\u4EA7\u54C1\u4FE1\u606F\u8BF7\u6301\u7EED\u5173\u6CE8\uFF01
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><h3>\u901A\u544A\u680F\u6A21\u5F0F\u2013\u94FE\u63A5\u6A21\u5F0F</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span>
      <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png&quot;</span>
      <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://www.jd.com&quot;</span>&gt;</span>\u4EAC\u4E1C\u5546\u57CE<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><h3>\u7EB5\u5411\u6EDA\u52A8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp1&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span>  @<span class="hljs-attr">click</span>=<span class="hljs-string">&#39;go&#39;</span> <span class="hljs-attr">:closeMode</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">horseLamp1</span>: [<span class="hljs-string">&#39;\u60CA\u559C\u7EA2\u5305\u514D\u8D39\u9886&#39;</span>, <span class="hljs-string">&#39;\u7206\u6B3E\u51C6\u70B9\u79D2&#39;</span>, <span class="hljs-string">&#39;\u4E70\u8D85\u503C\u4F18\u60E0&#39;</span>, <span class="hljs-string">&#39;\u8D62\u767E\u4E07\u4EAC\u8C46&#39;</span>],
    };
},

<span class="hljs-attr">methods</span>:{
    <span class="hljs-function"><span class="hljs-title">go</span>(<span class="hljs-params">item</span>)</span>{
        <span class="hljs-built_in">console</span>.log(item)
    }
}
</code></pre><h3>\u590D\u6742\u6EDA\u52A8\u52A8\u753B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp2&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;2000&#39;</span> <span class="hljs-attr">:complexAm</span>=<span class="hljs-string">&#39;true&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">horseLamp2</span>: [<span class="hljs-string">&#39;\u60CA\u559C\u7EA2\u5305\u514D\u8D39\u9886&#39;</span>, <span class="hljs-string">&#39;\u7206\u6B3E\u51C6\u70B9\u79D2&#39;</span>, <span class="hljs-string">&#39;\u4E70\u8D85\u503C\u4F18\u60E0&#39;</span>, <span class="hljs-string">&#39;\u8D62\u767E\u4E07\u4EAC\u8C46&#39;</span>],
    };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6EDA\u52A8\u5185\u5BB9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">&#39;50&#39;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;[]&quot;</span>  @<span class="hljs-attr">close</span>=<span class="hljs-string">&#39;go&#39;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-item&quot;</span> <span class="hljs-attr">:data-index</span>=<span class="hljs-string">&#39;index&#39;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in horseLamp3&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">horseLamp3</span>: [<span class="hljs-string">&#39;\u60CA\u559C\u7EA2\u5305\u514D\u8D39\u9886&#39;</span>, <span class="hljs-string">&#39;\u7206\u6B3E\u51C6\u70B9\u79D2&#39;</span>, <span class="hljs-string">&#39;\u4E70\u8D85\u503C\u4F18\u60E0&#39;</span>, <span class="hljs-string">&#39;\u8D62\u767E\u4E07\u4EAC\u8C46&#39;</span>],
    };
}
</code></pre><h3>\u7EB5\u5411\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-noticebar</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&#39;vertical&#39;</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;horseLamp1&quot;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;10&#39;</span> <span class="hljs-attr">:standTime</span>=<span class="hljs-string">&#39;1000&#39;</span> &gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:rightIcon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> 
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;trolley&quot;</span> 
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#f0250f&quot;</span>
    &gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>

  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-noticebar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">horseLamp1</span>: [<span class="hljs-string">&#39;\u60CA\u559C\u7EA2\u5305\u514D\u8D39\u9886&#39;</span>, <span class="hljs-string">&#39;\u7206\u6B3E\u51C6\u70B9\u79D2&#39;</span>, <span class="hljs-string">&#39;\u4E70\u8D85\u503C\u4F18\u60E0&#39;</span>, <span class="hljs-string">&#39;\u8D62\u767E\u4E07\u4EAC\u8C46&#39;</span>],
    };
}
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u6EDA\u52A8\u7684\u65B9\u5411\uFF0C\u53EF\u9009 across\u3001vertical</td><td>String</td><td>across</td></tr><tr><td>text</td><td>\u63D0\u793A\u7684\u4FE1\u606F</td><td>String</td><td>\u7A7A</td></tr><tr><td>closeMode</td><td>\u662F\u5426\u542F\u7528\u5173\u95ED\u6A21\u5F0F</td><td>Boolean</td><td>false</td></tr><tr><td>leftIcon</td><td>close\u4E3A\u6CA1\u6709\u5DE6\u8FB9icon,\u5176\u4ED6\u4E3A\u81EA\u5B9A\u4E49\u7684\u56FE\u7247\u94FE\u63A5\uFF0C\u6CA1\u6709\u4E3A\u9ED8\u8BA4\u56FE\u7247</td><td>String</td><td>\u7A7A</td></tr><tr><td>color</td><td>\u5BFC\u822A\u680F\u7684\u6587\u5B57\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>background</td><td>\u5BFC\u822A\u680F\u7684\u80CC\u666F\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>delay</td><td>\u5EF6\u65F6\u591A\u5C11\u79D2</td><td>String/Number</td><td>1</td></tr><tr><td>scrollable</td><td>\u662F\u5426\u53EF\u4EE5\u6EDA\u52A8</td><td>Boolean</td><td>true</td></tr><tr><td>speed</td><td>\u6EDA\u52A8\u901F\u7387 (px/s)</td><td>Number</td><td>50</td></tr></tbody></table><h3>Prop\uFF08direction=vertical\uFF09</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u7EB5\u5411\u6EDA\u52A8\u6570\u636E\u5217\u8868</td><td>Array</td><td>[]</td></tr><tr><td>speed</td><td>\u6EDA\u52A8\u7684\u901F\u5EA6</td><td>Number</td><td>50</td></tr><tr><td>standTime</td><td>\u505C\u7559\u65F6\u95F4(\u6BEB\u79D2)</td><td>Number</td><td>1000</td></tr><tr><td>complexAm</td><td>\u7A0D\u590D\u6742\u7684\u52A8\u753B\uFF0C\u8017\u80FD\u4F1A\u9AD8</td><td>Boolean</td><td>false</td></tr><tr><td>height</td><td>\u6BCF\u4E00\u4E2A\u6EDA\u52A8\u5217\u7684\u9AD8\u5EA6(px)\uFF0C\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 slot \u63D2\u69FD\u5B9A\u4E49\u6EDA\u52A8\u5355\u5143\u65F6\uFF0C\u6309\u7167\u5B9E\u9645\u9AD8\u5EA6\u4FEE\u6539\u6B64\u503C</td><td>Number</td><td>40</td></tr><tr><td>closeMode</td><td>\u662F\u5426\u542F\u7528\u53F3\u4FA7\u5173\u95ED\u56FE\u6807\uFF0C\u53EF\u4EE5\u901A\u8FC7slot[name=rightIcon]\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u5916\u5C42\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03</td><td>event: Event</td></tr><tr><td>close</td><td>\u5173\u95ED\u901A\u77E5\u680F\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,33),c=[p],j={setup(r,{expose:s}){return s({frontmatter:{}}),(h,d)=>(t(),a("div",l,c))}};export{j as default};
