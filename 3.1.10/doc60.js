import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},e=t(`<h1>TimeSelect \u914D\u9001\u65F6\u95F4</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u914D\u9001\u65F6\u95F4\u9009\u62E9</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { TimeSelect, TimePannel, TimeDetail, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { TimeSelect, TimePannel, TimeDetail, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(TimeSelect).use(TimePannel).use(TimeDetail).use(Popup);
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-timeselect</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;50%&quot;</span> <span class="hljs-attr">:current-key</span>=<span class="hljs-string">&quot;currentKey1&quot;</span> <span class="hljs-attr">:current-time</span>=<span class="hljs-string">&quot;currentTime1&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelected1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">pannel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timepannel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2\u670823\u65E5(\u4ECA\u5929)&quot;</span> <span class="hljs-attr">pannel-key</span>=<span class="hljs-string">&quot;0&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timepannel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timepannel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2\u670824\u65E5(\u661F\u671F\u4E09)&quot;</span> <span class="hljs-attr">pannel-key</span>=<span class="hljs-string">&quot;1&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timepannel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">detail</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timedetail</span> <span class="hljs-attr">:times</span>=<span class="hljs-string">&quot;times1&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;selectTime1&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timedetail</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-timeselect</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">visible1</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">currentKey1</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">currentTime1</span>: [] <span class="hljs-keyword">as</span> any[],
      <span class="hljs-attr">times1</span>: [
        {
          <span class="hljs-attr">key</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;9:00-10:00&#39;</span>, <span class="hljs-string">&#39;10:00-11:00&#39;</span>, <span class="hljs-string">&#39;11:00-12:00&#39;</span>]
        },
        {
          <span class="hljs-attr">key</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;9:00-10:00&#39;</span>, <span class="hljs-string">&#39;10:00-11:00&#39;</span>]
        },
      ],
    });

    <span class="hljs-keyword">const</span> handleChange1 = <span class="hljs-function">(<span class="hljs-params">pannelKey: number</span>) =&gt;</span> {
      state.currentKey1 = pannelKey;
      state.currentTime1 = [];
      state.currentTime1.push({
        <span class="hljs-attr">key</span>: state.currentKey1,
        <span class="hljs-attr">list</span>: []
      });
    };

    <span class="hljs-keyword">const</span> handleClick1 = <span class="hljs-function">() =&gt;</span> {
      state.visible1 = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> selectTime1 = <span class="hljs-function">(<span class="hljs-params">item: string</span>) =&gt;</span> {
      <span class="hljs-keyword">let</span> curTimeIndex = state.currentTime1[<span class="hljs-number">0</span>][<span class="hljs-string">&#39;list&#39;</span>].findIndex(<span class="hljs-function">(<span class="hljs-params">time: string</span>) =&gt;</span> time === item);
      <span class="hljs-keyword">if</span>(curTimeIndex === -<span class="hljs-number">1</span>) {
        state.currentTime1[<span class="hljs-number">0</span>][<span class="hljs-string">&#39;list&#39;</span>].push(item);
      } <span class="hljs-keyword">else</span> {
        state.currentTime1[<span class="hljs-number">0</span>][<span class="hljs-string">&#39;list&#39;</span>].splice(curTimeIndex, <span class="hljs-number">1</span>);
      }
    };

    <span class="hljs-keyword">const</span> handleSelected1 = <span class="hljs-function">(<span class="hljs-params">obj: any</span>) =&gt;</span> {
      proxy.$toast.text(<span class="hljs-string">\`\u60A8\u9009\u62E9\u4E86\uFF1A<span class="hljs-subst">\${<span class="hljs-built_in">JSON</span>.stringify(obj)}</span>\`</span>);
    };

    <span class="hljs-keyword">return</span> { 
      ...toRefs(state), 
      handleChange1,
      handleSelected1,
      selectTime1,
      handleClick1, 
    };
  }
</code></pre><h3>\u53EF\u9009\u62E9\u591A\u4E2A\u65E5\u671F\u65F6\u95F4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-timeselect</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;50%&quot;</span> <span class="hljs-attr">:current-key</span>=<span class="hljs-string">&quot;currentKey2&quot;</span> <span class="hljs-attr">:current-time</span>=<span class="hljs-string">&quot;currentTime2&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;handleSelected2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">pannel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timepannel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2\u670823\u65E5(\u4ECA\u5929)&quot;</span> <span class="hljs-attr">pannel-key</span>=<span class="hljs-string">&quot;0&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timepannel</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timepannel</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2\u670824\u65E5(\u661F\u671F\u4E09)&quot;</span> <span class="hljs-attr">pannel-key</span>=<span class="hljs-string">&quot;1&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timepannel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">detail</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-timedetail</span> <span class="hljs-attr">:times</span>=<span class="hljs-string">&quot;times2&quot;</span> @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;selectTime2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-timedetail</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-timeselect</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">currentKey2</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">currentTime2</span>: [] <span class="hljs-keyword">as</span> any[],
      <span class="hljs-attr">times2</span>: [
        {
          <span class="hljs-attr">key</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;9:00-10:00&#39;</span>, <span class="hljs-string">&#39;10:00-11:00&#39;</span>, <span class="hljs-string">&#39;11:00-12:00&#39;</span>]
        },
        {
          <span class="hljs-attr">key</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;9:00-10:00&#39;</span>, <span class="hljs-string">&#39;10:00-11:00&#39;</span>]
        },
      ]
    });

    <span class="hljs-keyword">const</span> handleChange2 = <span class="hljs-function">(<span class="hljs-params">pannelKey: number</span>) =&gt;</span> {
      state.currentKey2 = pannelKey;
      <span class="hljs-keyword">let</span> curTime = state.currentTime2.find(<span class="hljs-function">(<span class="hljs-params">item: any</span>) =&gt;</span> item.key == pannelKey);
      <span class="hljs-keyword">if</span>(!curTime) {
        state.currentTime2.push({
          <span class="hljs-attr">key</span>: pannelKey,
          <span class="hljs-attr">list</span>: []
        });
      }
    };

    <span class="hljs-keyword">const</span> handleClick2 = <span class="hljs-function">() =&gt;</span> {
      state.visible2 = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> selectTime2 = <span class="hljs-function">(<span class="hljs-params">item: string</span>) =&gt;</span> {
      <span class="hljs-keyword">let</span> findIndex = state.currentTime2.findIndex(<span class="hljs-function">(<span class="hljs-params">item: any</span>) =&gt;</span> item.key == state.currentKey2);
      <span class="hljs-keyword">let</span> curTimeIndex = state.currentTime2[findIndex][<span class="hljs-string">&#39;list&#39;</span>].findIndex(<span class="hljs-function">(<span class="hljs-params">time: string</span>) =&gt;</span> time === item);
      <span class="hljs-keyword">if</span>(curTimeIndex === -<span class="hljs-number">1</span>) {
        state.currentTime2[findIndex][<span class="hljs-string">&#39;list&#39;</span>].push(item);
      } <span class="hljs-keyword">else</span> {
        state.currentTime2[findIndex][<span class="hljs-string">&#39;list&#39;</span>].splice(curTimeIndex, <span class="hljs-number">1</span>);
      }
    };

    <span class="hljs-keyword">const</span> handleSelected2 = <span class="hljs-function">(<span class="hljs-params">obj: any</span>) =&gt;</span> {
      proxy.$toast.text(<span class="hljs-string">\`\u60A8\u9009\u62E9\u4E86\uFF1A<span class="hljs-subst">\${<span class="hljs-built_in">JSON</span>.stringify(obj)}</span>\`</span>);
    };

    <span class="hljs-keyword">return</span> { 
      ...toRefs(state), 
      handleChange2,
      handleSelected2,
      selectTime2,
      handleClick2, 
    };
  }
</code></pre><h2>API</h2><h3>TimeSelect Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u662F\u5426\u663E\u793A\u5F39\u5C42</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>height</td><td>\u5F39\u5C42\u7684\u9AD8\u5EA6</td><td>String</td><td><code>20%</code></td></tr><tr><td>title</td><td>\u5F39\u5C42\u6807\u9898</td><td>String</td><td><code>\u53D6\u4EF6\u65F6\u95F4</code></td></tr><tr><td>current-key</td><td>\u552F\u4E00\u6807\u8BC6</td><td>String\u3001Number</td><td><code>0</code></td></tr><tr><td>current-time</td><td>\u5F53\u524D\u9009\u62E9\u7684\u65F6\u95F4\uFF0C\u6570\u7EC4\u5143\u7D20\u5305\u542B:key: string; list: string[]</td><td>Array</td><td><code>[]</code></td></tr></tbody></table><h3>TimePannel Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u663E\u793A\u7684\u540D\u79F0</td><td>String</td><td>\`\`</td></tr><tr><td>pannel-key</td><td>\u552F\u4E00\u6807\u8BC6\uFF0C\u548C current-key\u4E00\u8D77\u6807\u8BC6\u5F53\u524D\u9009\u62E9\u7684\u5929</td><td>Number\u3001String</td><td><code>0</code></td></tr></tbody></table><h3>TimeDetail Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>times</td><td>\u53EF\u9009\u62E9\u7684\u65F6\u95F4\uFF0C\u6570\u7EC4\u5143\u7D20\u540C <code>current-time</code></td><td>Array</td><td><code>[]</code></td></tr></tbody></table><h3>TimeSelect Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u5173\u95ED\u906E\u7F69\u4E4B\u540E\u7684\u56DE\u8C03</td><td>key: string</td></tr></tbody></table><h3>TimePannel Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u70B9\u51FB\u5185\u5BB9\u7684\u56DE\u8C03</td><td>pannelKey: string \uFF5C number</td></tr></tbody></table><h3>TimeDetail Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select</td><td>\u70B9\u51FB\u65F6\u95F4\u7684\u56DE\u8C03</td><td>time: string</td></tr></tbody></table>`,24),p=[e],d={setup(c,{expose:s}){return s({frontmatter:{}}),(r,i)=>(n(),a("div",l,p))}};export{d as default};
