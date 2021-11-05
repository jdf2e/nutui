import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>CountDown \u5012\u8BA1\u65F6</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5B9E\u65F6\u5C55\u793A\u5012\u8BA1\u65F6\u6570\u503C\uFF0C\u652F\u6301\u6BEB\u79D2\u7CBE\u5EA6\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { CountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { CountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(CountDown);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,
    });
  <span class="hljs-keyword">return</span> {
    ...toRefs(state)
  };
}
</code></pre><h3>\u663E\u793A\u5929</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">show-days</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><h3>\u4EE5\u670D\u52A1\u7AEF\u7684\u65F6\u95F4\u4E3A\u51C6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">:start-time</span>=<span class="hljs-string">&quot;serverTime&quot;</span> <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">show-days</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">serverTime</span>: <span class="hljs-built_in">Date</span>.now() - <span class="hljs-number">30</span> * <span class="hljs-number">1000</span>,
      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,
    });
  <span class="hljs-keyword">return</span> {
    ...toRefs(state)
  };
}
</code></pre><h3>\u663E\u793A\u4E3A \u5929\u65F6\u5206\u79D2</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">show-days</span> <span class="hljs-attr">show-plain-text</span>  <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,
    });
  <span class="hljs-keyword">return</span> {
    ...toRefs(state)
  };
}
</code></pre><h3>\u5F02\u6B65\u66F4\u65B0\u7ED3\u675F\u65F6\u95F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">show-days</span> <span class="hljs-attr">show-plain-text</span>  <span class="hljs-attr">:end-time</span>=<span class="hljs-string">&quot;asyncEnd&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">asyncEnd</span>: <span class="hljs-number">0</span>,
    });
  <span class="hljs-keyword">return</span> {
    ...toRefs(state)
  };
}
</code></pre><h3>\u63A7\u5236\u5F00\u59CB\u548C\u6682\u505C\u7684\u5012\u8BA1\u65F6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span>  <span class="hljs-attr">:endTime</span>=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">:paused</span>=<span class="hljs-string">&quot;paused&quot;</span> @<span class="hljs-attr">on-paused</span>=<span class="hljs-string">&quot;onpaused&quot;</span> @<span class="hljs-attr">on-restart</span>=<span class="hljs-string">&quot;onrestart&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;position:absolute;right:10px;top:9px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&#39;small&#39;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle&quot;</span>&gt;</span>{{ paused ? &#39;start&#39; : &#39;stop&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">paused</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,
    });

    <span class="hljs-keyword">const</span> toggle = <span class="hljs-function">()=&gt;</span> {
      state.paused = !state.paused;
    }
    <span class="hljs-keyword">const</span> onpaused = <span class="hljs-function">(<span class="hljs-params">v</span>)=&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;paused: &#39;</span>, v);
    }
    <span class="hljs-keyword">const</span> onrestart = <span class="hljs-function">(<span class="hljs-params">v</span>)=&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;restart: &#39;</span>, v);
    }
  <span class="hljs-keyword">return</span> {
      toggle,
      onpaused,
      onrestart,
    ...toRefs(state)
  };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u5C55\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countdown</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;resetTime&quot;</span> <span class="hljs-attr">:endTime</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;countdown-part-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span> resetTime.d \u5929<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item h&quot;</span>&gt;</span> resetTime.h <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item m&quot;</span>&gt;</span> resetTime.m <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item-symbol&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;part-item s&quot;</span>&gt;</span> resetTime.s <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countdown</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">end</span>: <span class="hljs-built_in">Date</span>.now() + <span class="hljs-number">50</span> * <span class="hljs-number">1000</span>,
      <span class="hljs-attr">resetTime</span>: {
        <span class="hljs-attr">d</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">h</span>: <span class="hljs-string">&#39;00&#39;</span>,
        <span class="hljs-attr">m</span>: <span class="hljs-string">&#39;00&#39;</span>,
        <span class="hljs-attr">s</span>: <span class="hljs-string">&#39;00&#39;</span>
      }
    });
  <span class="hljs-keyword">return</span> {
    ...toRefs(state)
  };
}
</code></pre><h3>API</h3><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u65F6\u95F4\uFF0C\u81EA\u5B9A\u4E49\u5C55\u793A\u5185\u5BB9\u65F6\u751F\u6548</td><td>Object</td><td>{}</td></tr><tr><td>start-time</td><td>\u5F00\u59CB\u65F6\u95F4</td><td>String, Number</td><td>Date.now()</td></tr><tr><td>end-time</td><td>\u7ED3\u675F\u65F6\u95F4</td><td>String, Number</td><td>Date.now()</td></tr><tr><td>show-days</td><td>\u662F\u5426\u663E\u793A\u5929</td><td>Boolean</td><td>false</td></tr><tr><td>show-plain-text</td><td>\u663E\u793A\u4E3A\u7EAF\u6587\u672C</td><td>Boolean</td><td>false</td></tr><tr><td>paused</td><td>\u662F\u5426\u6682\u505C</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>on-end</td><td>\u5012\u8BA1\u65F6\u7ED3\u675F\u65F6</td><td>\u5269\u4F59\u65F6\u95F4\u6233</td></tr><tr><td>on-paused</td><td>\u6682\u505C\u65F6</td><td>\u5269\u4F59\u65F6\u95F4\u6233</td></tr><tr><td>on-restart</td><td>\u6682\u505C\u65F6</td><td>\u5269\u4F59\u65F6\u95F4\u6233</td></tr></tbody></table>`,30),e=[p],d={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(n(),a("div",l,e))}};export{d as default};
