import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Calendar \u65E5\u5386</h1><h3>\u4ECB\u7ECD</h3><p>\u65E5\u5386\uFF0C\u53EF\u5E73\u94FA/\u5F39\u7A97\u5C55\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Calendar,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Calendar,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Calendar);
app.use(Popup);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>
  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5355\u4E2A\u65E5\u671F&quot;</span>
  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? \`\${date} \${dateWeek}\` : &#39;\u8BF7\u9009\u62E9&#39;&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>
  <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>
  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>
  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;\`2019-10-11\`&quot;</span>
  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;\`2022-11-11\`&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({
      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">dateWeek</span>: <span class="hljs-string">&#39;&#39;</span>
    });
    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">false</span>;
    };
    <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state.date = param[<span class="hljs-number">3</span>];
      state.dateWeek = param[<span class="hljs-number">4</span>];
    };
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue
    };
  }
</code></pre><h3>\u533A\u95F4\u9009\u62E9</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>
  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65E5\u671F\u533A\u95F4&quot;</span>
  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? \`\${date[0]}\u81F3\${date[1]}\` : &#39;\u8BF7\u9009\u62E9&#39;&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>
  <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>
  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;\`2019-12-22\`&quot;</span>
  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;\`2021-01-08\`&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>
  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({
      <span class="hljs-attr">date</span>: [<span class="hljs-string">&#39;2019-12-23&#39;</span>, <span class="hljs-string">&#39;2019-12-26&#39;</span>],
      <span class="hljs-attr">isVisible2</span>: <span class="hljs-literal">true</span>
    });
    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">false</span>;
    };
    <span class="hljs-keyword">const</span> setChooseValue= <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state.date = [...[param[<span class="hljs-number">0</span>][<span class="hljs-number">3</span>], param[<span class="hljs-number">1</span>][<span class="hljs-number">3</span>]]];
    };
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
    };
  }
</code></pre><h3>\u81EA\u5B9A\u4E49\u65E5\u5386-\u81EA\u52A8\u56DE\u586B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>
  <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65E5\u671F&quot;</span>
  <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;date ? date : &#39;\u8BF7\u9009\u62E9&#39;&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openSwitch(&#39;isVisible&#39;)&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;closeSwitch(&#39;isVisible&#39;)&quot;</span>
  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>
  <span class="hljs-attr">:start-date</span>=<span class="hljs-string">&quot;null&quot;</span>
  <span class="hljs-attr">:end-date</span>=<span class="hljs-string">&quot;null&quot;</span>
  <span class="hljs-attr">:is-auto-back-fill</span>=<span class="hljs-string">&quot;true&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-calendar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>
    });
    <span class="hljs-keyword">const</span> openSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> closeSwitch = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state[<span class="hljs-string">\`<span class="hljs-subst">\${param}</span>\`</span>] = <span class="hljs-literal">false</span>;
    };
     <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state.date= param[<span class="hljs-number">3</span>];
    };
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      setChooseValue
    };
  }
</code></pre><h3>\u5E73\u94FA\u5C55\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;test-calendar-wrapper&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-calendar</span>
    <span class="hljs-attr">:poppable</span>=<span class="hljs-string">&quot;false&quot;</span>
    <span class="hljs-attr">:is-auto-back-fill</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:default-value</span>=<span class="hljs-string">&quot;date&quot;</span>
    @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;setChooseValue&quot;</span>
  &gt;</span>
  &lt;/nut-calendar
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state: TestCalendarState = reactive({
      <span class="hljs-attr">date</span>: <span class="hljs-string">&#39;2020-07-08&#39;</span>
    });
    <span class="hljs-keyword">const</span> setChooseValue = <span class="hljs-function"><span class="hljs-params">param</span> =&gt;</span> {
      state.date = param[<span class="hljs-number">3</span>];
    };
    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      setChooseValue
    };
  }
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">
</code></pre><pre><code class="language-javascript"></code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u53EF\u89C1</td><td>Boolean</td><td>false</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u65E5\u671F\u9009\u62E9\u2019one\u2019\uFF0C\u533A\u95F4\u9009\u62E9\u2019range\u2019</td><td>String</td><td>\u2018one\u2019</td></tr><tr><td>poppable</td><td>\u662F\u5426\u5F39\u7A97\u72B6\u6001\u5C55\u793A</td><td>Boolean</td><td>true</td></tr><tr><td>is-auto-back-fill</td><td>\u81EA\u52A8\u56DE\u586B</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u663E\u793A\u6807\u9898</td><td>String</td><td>\u2018\u65E5\u671F\u9009\u62E9\u2019</td></tr><tr><td>default-value</td><td>\u9ED8\u8BA4\u503C\uFF0C\u65E5\u671F\u9009\u62E9 String \u683C\u5F0F\uFF0C\u533A\u95F4\u9009\u62E9 Array \u683C\u5F0F</td><td>String \u3001 Array</td><td>null</td></tr><tr><td>start-date</td><td>\u5F00\u59CB\u65E5\u671F\uFF0C \u5982\u679C\u4E0D\u9650\u5236\u5F00\u59CB\u65E5\u671F\u4F20 null</td><td>String</td><td>\u4ECA\u5929</td></tr><tr><td>end-date</td><td>\u7ED3\u675F\u65E5\u671F\uFF0C\u5982\u679C\u4E0D\u9650\u5236\u7ED3\u675F\u65E5\u671F\u4F20 null</td><td>String</td><td>\u8DDD\u79BB\u4ECA\u5929 365 \u5929</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>choose</td><td>\u9009\u62E9\u4E4B\u540E\u6216\u662F\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1</td><td>\u65E5\u671F\u6570\u7EC4\uFF08\u5305\u542B\u5E74\u6708\u65E5\u548C\u661F\u671F\uFF09</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,26),e=[p],d={setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,e))}};export{d as default};
