import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Infiniteloading \u6EDA\u52A8\u52A0\u8F7D</h1><h3>\u4ECB\u7ECD</h3><p>\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">  <span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
  <span class="hljs-keyword">import</span> { InfiniteLoading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

  <span class="hljs-keyword">const</span> app = createApp();
  app.use(InfiniteLoading);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;scroll&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>
        <span class="hljs-attr">containerId</span> = <span class="hljs-string">&#39;scroll&#39;</span>
        <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&#39;false&#39;</span>
        <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;hasMore&quot;</span>
        @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;loadMore&quot;</span>
    &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in defultList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> hasMore = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">defultList</span>: []
    });
    <span class="hljs-keyword">const</span> loadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {  
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> curLen = data.defultList.length;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
          data.defultList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>);
        }
        <span class="hljs-keyword">if</span> (data.defultList.length &gt; <span class="hljs-number">30</span>) hasMore.value = <span class="hljs-literal">false</span>;
        done()
      }, <span class="hljs-number">500</span>);
    };
    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        data.defultList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>);
      }
    }
    onMounted(<span class="hljs-function">() =&gt;</span> {
      init()
    });
    <span class="hljs-keyword">return</span> { loadMore, hasMore, ...toRefs(data) };
}
</code></pre><h3>\u4E0B\u62C9\u5237\u65B0</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;refreshScroll&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>
    <span class="hljs-attr">pull-icon</span>=<span class="hljs-string">&quot;JD&quot;</span>
    <span class="hljs-attr">container-id</span>=<span class="hljs-string">&quot;refreshScroll&quot;</span>
    <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">:is-open-refresh</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;refreshHasMore&quot;</span>
    @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;refreshLoadMore&quot;</span>
    @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in refreshList&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>
      &gt;</span>{{ item }}&lt;/li
    &gt;
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> refreshHasMore = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">refreshList</span>: []
    });
    <span class="hljs-keyword">const</span> refreshLoadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> curLen = data.refreshList.length;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
          data.refreshList.push(
            <span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>
          );
        }
        <span class="hljs-keyword">if</span> (data.refreshList.length &gt; <span class="hljs-number">30</span>) refreshHasMore.value = <span class="hljs-literal">false</span>;
        done()
      }, <span class="hljs-number">500</span>);
    };

    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function">(<span class="hljs-params">done</span>) =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">()=&gt;</span>{
        Toast.success(<span class="hljs-string">&#39;\u5237\u65B0\u6210\u529F&#39;</span>);
        done()
      },<span class="hljs-number">1000</span>)
    }
    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        data.refreshList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>);
      }
    }
    onMounted(<span class="hljs-function">() =&gt;</span> {
      init()
    });
    <span class="hljs-keyword">return</span> { refreshLoadMore, refreshHasMore, refresh, ...toRefs(data) };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteUl&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;customScroll&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-infiniteloading</span>
        <span class="hljs-attr">container-id</span> = <span class="hljs-string">&#39;customScroll&#39;</span>
        <span class="hljs-attr">:use-window</span>=<span class="hljs-string">&#39;false&#39;</span>
        <span class="hljs-attr">:has-more</span>=<span class="hljs-string">&quot;customHasMore&quot;</span>
        @<span class="hljs-attr">load-more</span>=<span class="hljs-string">&quot;customLoadMore&quot;</span>
    &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in customList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>{{item}}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:loading</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;loading&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\u52A0\u8F7D\u4E2D...<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:unloadMore</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;unload-more&quot;</span>&gt;</span>\u6CA1\u6709\u6570\u636E\u5566 ~~<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-infiniteloading</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> customHasMore = ref(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">customList</span>: [<span class="hljs-string">&#39;&#39;</span>]
    });
    <span class="hljs-keyword">const</span> customLoadMore = <span class="hljs-function"><span class="hljs-params">done</span> =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> curLen = data.customList.length;
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
          data.customList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>);
        }
        <span class="hljs-keyword">if</span> (data.customList.length &gt; <span class="hljs-number">30</span>) customHasMore.value = <span class="hljs-literal">false</span>;
        done()
      }, <span class="hljs-number">500</span>);
    };
    <span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
        data.customList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>);
      }
    }
    onMounted(<span class="hljs-function">() =&gt;</span> {
      init()
    });
    <span class="hljs-keyword">return</span> { customHasMore, customLoadMore,...toRefs(data) };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>has-more</td><td>\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>threshold</td><td>\u8DDD\u79BB\u5E95\u90E8\u591A\u8FDC\u52A0\u8F7D</td><td>Number</td><td><code>200</code></td></tr><tr><td>use-window</td><td>\u5C06\u6EDA\u52A8\u4FA6\u542C\u5668\u6DFB\u52A0\u5230 window \u5426\u5219\u4FA6\u542C\u7EC4\u4EF6\u7684\u7236\u8282\u70B9</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>use-capture</td><td>\u662F\u5426\u4F7F\u7528\u6355\u83B7\u6A21\u5F0F true \u6355\u83B7 false \u5192\u6CE1</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>container-id</td><td>\u5728 useWindow \u5C5E\u6027\u4E3A false \u7684\u65F6\u5019\uFF0C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u8282\u70B9ID</td><td>String</td><td><code>&#39;&#39;</code></td></tr><tr><td>load-more-txt</td><td>\u201C\u6CA1\u6709\u66F4\u591A\u6570\u201D\u636E\u5C55\u793A\u6587\u6848</td><td>String</td><td><code>&#39;\u54CE\u5440\uFF0C\u8FD9\u91CC\u662F\u5E95\u90E8\u4E86\u5566&#39;</code></td></tr><tr><td>is-open-refresh</td><td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\u65B0</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>pull-icon</td><td>\u4E0B\u62C9\u5237\u65B0<a href="#/icon">\u56FE\u6807\u540D\u79F0</a></td><td>String</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40/"></td></tr><tr><td>pull-txt</td><td>\u4E0B\u62C9\u5237\u65B0\u63D0\u793A\u6587\u6848</td><td>String</td><td><code>\u677E\u624B\u5237\u65B0</code></td></tr><tr><td>load-icon</td><td>\u4E0A\u62C9\u52A0\u8F7D<a href="#/icon">\u56FE\u6807\u540D\u79F0</a></td><td>Boolean</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40"></td></tr><tr><td>load-txt</td><td>\u4E0A\u62C9\u52A0\u8F7D\u63D0\u793A\u6587\u6848</td><td>String</td><td><code>\u52A0\u8F7D\u4E2D...</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>load-more</td><td>\u7EE7\u7EED\u52A0\u8F7D\u7684\u56DE\u8C03\u51FD\u6570</td><td>done \u51FD\u6570\uFF0C\u7528\u4E8E\u5173\u95ED\u52A0\u8F7D\u4E2D\u72B6\u6001</td></tr><tr><td>scroll-change</td><td>\u5B9E\u65F6\u76D1\u542C\u6EDA\u52A8\u9AD8\u5EA6</td><td>\u6EDA\u52A8\u9AD8\u5EA6</td></tr><tr><td>refresh</td><td>\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6\u56DE\u8C03</td><td>done \u51FD\u6570\uFF0C\u7528\u4E8E\u5173\u95ED\u52A0\u8F7D\u4E2D\u72B6\u6001</td></tr></tbody></table>`,20),e=[p],i={setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(n(),a("div",l,e))}};export{i as default};
