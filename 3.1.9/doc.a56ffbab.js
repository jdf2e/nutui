import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Pullrefresh\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u7EB5\u5411\u53EF\u652F\u6301\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\uFF0C\u6A2A\u5411\u53EF\u652F\u6301\u5DE6\u6ED1\u66F4\u65B0\u3001\u53F3\u6ED1\u52A0\u8F7D\u66F4\u591A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(PullRefresh);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u7EB5\u5411</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-pullrefresh</span>
        @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>
        @<span class="hljs-attr">down-refresh</span>=<span class="hljs-string">&quot;downRefresh&quot;</span>
        <span class="hljs-attr">:useWindow</span>=<span class="hljs-string">&quot;false&quot;</span>
        <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;pull&quot;</span>
    &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;pull&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;main&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
                    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>
                    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in [1, 2, 3, 4, 5, 6, 7, 8, 9]&quot;</span>
                    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
                    &gt;</span>\u6211\u662F\u6D4B\u8BD5\u6570\u636E {{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-pullrefresh</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u4E0A\u62C9\u52A0\u8F7D&#39;</span>)
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        done();
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">const</span> downRefresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u4E0B\u62C9\u5237\u65B0&#39;</span>)
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        done();
      }, <span class="hljs-number">1000</span>);
    }
    <span class="hljs-keyword">return</span> { refresh, downRefresh };
}
</code></pre><h3>\u6A2A\u5411</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-pullrefresh</span>
        @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>
        @<span class="hljs-attr">down-refresh</span>=<span class="hljs-string">&quot;downRefresh&quot;</span>
        <span class="hljs-attr">:useWindow</span>=<span class="hljs-string">&quot;false&quot;</span>
        <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;pullH&quot;</span>
        <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
    &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;contentH&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;pullH&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mainH&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
            <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-data&quot;</span>
            <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in [1, 2, 3, 4, 5, 6, 7, 8, 9]&quot;</span>
            <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
            &gt;</span>\u6211\u662F\u6D4B\u8BD5\u6570\u636E {{ item }}&lt;/div
            &gt;
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-pullrefresh</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u4E0A\u62C9\u52A0\u8F7D&#39;</span>)
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        done();
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">const</span> downRefresh = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u4E0B\u62C9\u5237\u65B0&#39;</span>)
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        done();
      }, <span class="hljs-number">1000</span>);
    }
    <span class="hljs-keyword">return</span> { refresh, downRefresh };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>useWindow</td><td>\u5C06\u6EDA\u52A8\u4FA6\u542C\u5668\u6DFB\u52A0\u5230 window \u5426\u5219\u4FA6\u542C\u7EC4\u4EF6\u7684\u7236\u8282\u70B9</td><td>Boolean</td><td>true</td></tr><tr><td>containerId</td><td>\u5728 useWindow \u5C5E\u6027\u4E3A false \u7684\u65F6\u5019\uFF0C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u8282\u70B9ID</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>disabled</td><td>\u7EC4\u4EF6\u662F\u5426\u6FC0\u6D3B</td><td>Boolean</td><td>true</td></tr><tr><td>direction</td><td>\u6EDA\u52A8\u7684\u65B9\u5411\uFF0C\u2018vertical\u2019 \u7EB5\u5411\u3001\u2018horizontal\u2019 \u6A2A\u5411</td><td>String</td><td>\u2018vertical\u2019</td></tr><tr><td>pullingText</td><td>&#39;\u4E0B\u62C9\u2019\u6587\u6848</td><td>Object</td><td>{top: \u2018\u4E0B\u62C9\u5237\u65B0\u2019, bottom: \u2018\u4E0A\u62C9\u52A0\u8F7D\u2019,left: \u2018\u5DE6\u6ED1\u5237\u65B0\u2019, right: \u2018\u53F3\u6ED1\u52A0\u8F7D\u2019}</td></tr><tr><td>loosingText</td><td>&#39;\u91CA\u653E\u2019\u6587\u6848</td><td>Object</td><td>{top: \u2019\u677E\u624B\u91CA\u653E\u5237\u65B0\u2019, bottom: \u2018\u677E\u624B\u91CA\u653E\u5237\u65B0\u2019,left: \u2018\u91CA\u653E\u5237\u65B0\u2019, right: \u2018\u52A0\u8F7D\u66F4\u591A\u2019}</td></tr><tr><td>loadingText</td><td>&#39;\u52A0\u8F7D\u4E2D\u2019\u6587\u6848</td><td>Object</td><td>{top: \u2018\u52A0\u8F7D\u4E2D\u2026\u2019, bottom: \u2018\u52A0\u8F7D\u4E2D\u2026\u2019,left: \u2018\u52A0\u8F7D\u4E2D\u2026\u2019, right: \u2018\u52A0\u8F7D\u4E2D\u2026\u2019}</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>refresh</td><td>\u7EB5\u5411-\u4E0A\u62C9\u52A0\u8F7D\u3001\u6A2A\u5411-\u53F3\u6ED1\u52A0\u8F7D\u66F4\u591A\u65F6\u89E6\u53D1</td><td>done() \u51FD\u6570\uFF0C\u5728\u6570\u636E\u66F4\u65B0\u5B8C\u6210\u4EE5\u540E\uFF0C\u9700\u8981\u8C03\u7528 done() \u51FD\u6570\u5C06\u7EC4\u4EF6\u72B6\u6001\u521D\u59CB\u5316</td></tr><tr><td>downRefresh</td><td>\u7EB5\u5411-\u4E0B\u62C9\u5237\u65B0\u3001\u6A2A\u5411-\u5DE6\u6ED1\u5237\u65B0\u65F6\u89E6\u53D1</td><td>done() \u51FD\u6570\uFF0C\u5728\u6570\u636E\u66F4\u65B0\u5B8C\u6210\u4EE5\u540E\uFF0C\u9700\u8981\u8C03\u7528 done() \u51FD\u6570\u5C06\u7EC4\u4EF6\u72B6\u6001\u521D\u59CB\u5316</td></tr></tbody></table>`,17),e=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(n(),a("div",l,e))}};export{j as default};
