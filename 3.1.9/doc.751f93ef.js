import{e as a,o as n,G as t}from"./vendor.bd251973.js";const p={class:"markdown-body"},l=t(`<h1>video \u89C6\u9891\u64AD\u653E\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u539F\u751Fvideo\u5B9E\u73B0\u7684\u89C6\u9891\u64AD\u653E\u5668</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Video } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Video);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span>
  <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  @<span class="hljs-attr">play</span>=<span class="hljs-string">&quot;play&quot;</span>
  @<span class="hljs-attr">pause</span>=<span class="hljs-string">&quot;pause&quot;</span>
  @<span class="hljs-attr">playend</span>=<span class="hljs-string">&quot;playend&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&quot;https://storage.jd.com/about/big-final.mp4?Expires=3730193075&amp;AccessKey=3LoYX1dQWa6ZXzQl&amp;Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D&quot;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&quot;video/mp4&quot;</span>,
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>,
      },
    });
    <span class="hljs-keyword">const</span> play = <span class="hljs-function">(<span class="hljs-params">elm: any</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;play&#39;</span>, elm);
    <span class="hljs-keyword">const</span> pause = <span class="hljs-function">(<span class="hljs-params">elm: any</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pause&#39;</span>, elm);
    <span class="hljs-keyword">const</span> playend = <span class="hljs-function">(<span class="hljs-params">elm: any</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;playend&#39;</span>, elm);

    <span class="hljs-keyword">return</span> { play, pause, playend, ...toRefs(state) };
}
</code></pre><h3>\u81EA\u52A8\u64AD\u653E</h3><p>autoplay \u5C5E\u6027\u8BBE\u7F6E\u89C6\u9891\u81EA\u52A8\u64AD\u653E</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">autoplay</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">muted</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>
      },
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
}
</code></pre><h3>\u521D\u59CB\u5316\u9759\u97F3</h3><p>muted\u5C5E\u6027\u8BBE\u7F6E\u89C6\u9891\u521D\u59CB\u5316\u9759\u97F3</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">muted</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>
      },
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
}
</code></pre><h3>\u89C6\u9891\u5C01\u9762\u6D77\u62A5\u8BBE\u7F6E</h3><p>poster \u5C5E\u6027\u8BBE\u7F6E\u89C6\u9891\u6D77\u62A5</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">poster</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp&#39;</span>
      },
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
}
</code></pre><h3>\u884C\u5185\u64AD\u653E</h3><p>playsinline \u5C5E\u6027\u8BBE\u7F6E\u79FB\u52A8\u7AEF\u89C6\u9891\u884C\u5185\u64AD\u653E\uFF0C\u963B\u6B62\u65B0\u6253\u5F00\u9875\u9762\u64AD\u653E\uFF08\u517C\u5BB9 ios\uFF0C\u517C\u5BB9\u90E8\u5206\u5B89\u5353\u673A\uFF09</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">playsinline</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>,
      },
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
}
</code></pre><h3>\u89C6\u9891\u80CC\u666F\u56FE</h3><p>\u5F53\u8BBE\u7F6E\u89C6\u9891\u4E3A\u80CC\u666F\u56FE\u65F6\u9700\u8981\u5C06 muted \u9759\u97F3\u3001 disabled \u7981\u6B62\u64CD\u4F5C\u3001loop \u5FAA\u73AF\u64AD\u653E\u3001autoplay \u81EA\u52A8\u64AD\u653E\u8BBE\u7F6E\u4E3A true\uFF0C\u79FB\u52A8\u7AEF\u9700\u8981\u8BBE\u7F6E playsinline \u884C\u5185\u5C55\u793A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
      <span class="hljs-attr">options</span>: {
        <span class="hljs-attr">controls</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">autoplay</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">muted</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">playsinline</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">loop</span>: <span class="hljs-literal">true</span>
      },
    });

    <span class="hljs-keyword">return</span> { ...toRefs(state) };
}
</code></pre><h3>\u89C6\u9891\u5207\u6362</h3><p>\u5F53\u89C6\u9891\u5730\u5740\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u91CD\u7F6E\u89C6\u9891</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-video</span> <span class="hljs-attr">:source</span>=<span class="hljs-string">&quot;source&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-video</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeVideo&quot;</span>&gt;</span>\u5207\u6362\u89C6\u9891<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">source</span>: {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      },
    });
    <span class="hljs-keyword">const</span> changeVideo = <span class="hljs-function">() =&gt;</span> {
      state.source1 = {
        <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://vjs.zencdn.net/v/oceans.mp4&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
      };
    };

    <span class="hljs-keyword">return</span> { ...toRefs(state), changeVideo };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>source</td><td>\u89C6\u9891\u5730\u5740\u548C\u7C7B\u578B\u8BBE\u7F6E</td><td>Object</td><td>-</td></tr><tr><td>options</td><td>\u63A7\u5236\u89C6\u9891\u64AD\u653E\u5C5E\u6027</td><td>Object</td><td>required</td></tr><tr><td>options.autoplay</td><td>\u662F\u5426\u81EA\u52A8\u64AD\u653E</td><td>Boolean</td><td>false</td></tr><tr><td>options.poster</td><td>\u6D77\u62A5\u8BBE\u7F6E</td><td>String</td><td>-</td></tr><tr><td>options.loop</td><td>\u662F\u5426\u5FAA\u73AF\u64AD\u653E</td><td>Boolean</td><td>false</td></tr><tr><td>options.controls</td><td>\u662F\u5426\u5C55\u793A\u64CD\u4F5C\u680F</td><td>Boolean</td><td>true</td></tr><tr><td>options.muted</td><td>\u662F\u5426\u9759\u97F3</td><td>Boolean</td><td>false</td></tr><tr><td>options.volume</td><td>\u97F3\u91CF\u63A7\u5236</td><td>Number</td><td>0.5</td></tr><tr><td>options.disabled</td><td>\u7981\u7528\u64CD\u4F5C\uFF08\u5982\u5FAA\u73AF\u64AD\u653E\u7684\u80CC\u666F\u56FE\uFF0C\u7981\u6B62\u64CD\u4F5C\uFF09</td><td>Boolean</td><td>false</td></tr><tr><td>options.playsinline</td><td>\u662F\u5426\u8BBE\u7F6E\u4E3A\u884C\u5185\u64AD\u653E\u5143\u7D20\uFF08\u89E3\u51B3\u5B89\u5353\u517C\u5BB9\u95EE\u9898\uFF09</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>play</td><td>\u64AD\u653E</td><td>\u2013</td></tr><tr><td>pause</td><td>\u6682\u505C</td><td>\u2013</td></tr><tr><td>playend</td><td>\u64AD\u653E\u5B8C\u6210\u56DE\u8C03</td><td>\u2013</td></tr></tbody></table>`,38),e=[l],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",p,e))}};export{j as default};
