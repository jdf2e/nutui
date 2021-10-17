import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Tab \u9009\u9879\u5361</h1><p>\u5E38\u7528\u4E8E\u5E73\u7EA7\u533A\u57DF\u5927\u5757\u5185\u5BB9\u7684\u7684\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u652F\u6301\u5185\u5D4C\u6807\u7B7E\u5F62\u5F0F\u548C\u6E32\u67D3\u5FAA\u73AF\u6570\u636E\u5F62\u5F0F\u3002</p><blockquote><p>\u6CE8\u610F\uFF0C\u7531\u4E8E\u5C0F\u7A0B\u5E8F\u7AEF\u4F9D\u8D56\u7684 swiper \u7EC4\u4EF6\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u56E0\u6B64\u5728\u5C0F\u7A0B\u5E8F\u7AEF\u6682\u65F6\u53EA\u652F\u6301\u57FA\u7840\u7684 tab \u5207\u6362\u529F\u80FD\uFF0C\u5F85 swiper \u7EC4\u4EF6\u4FEE\u590D\u540E\uFF0C\u5F00\u653E\u6240\u6709\u529F\u80FD\u3002</p></blockquote><h2>\u5B89\u88C5</h2><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Tab, TabPanel, Swiper, SwiperItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Tab, TabPanel, Swiper, SwiperItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Tab);
app.use(TabPanel);
app.use(Swiper);
app.use(SwiperItem);
</code></pre><h2>\u57FA\u7840\u6837\u5F0F\uFF0C\u9ED8\u8BA4 tab-title \u5BBD\u5EA6\u5747\u5206\u76F8\u7B49</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u9ED8\u8BA4\u663E\u793A tab\uFF1A</h2><p>defaultIndex \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A tab switchTab \u76D1\u542C\u5207\u6362 tab \u8FD4\u56DE\u4E8B\u4EF6</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:defaultIndex</span>=<span class="hljs-string">&quot;1&quot;</span> @<span class="hljs-attr">switchTab</span>=<span class="hljs-string">&quot;switchTab&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">switchTab</span>(<span class="hljs-params">activeInddex: number</span>) </span>{
        <span class="hljs-built_in">console</span>.log(activeInddex);
      }
      <span class="hljs-keyword">return</span> {
        switchTab
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h2>animatedTime \u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B\u65F6\u95F4</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u7981\u6B62 tab \u5185\u5BB9\u6ED1\u52A8</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:no-swiping</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u8BBE\u7F6E scrollType=\u201Cscroll\u201D\uFF0C\u6807\u7B7E\u680F\u53EF\u4EE5\u5728\u6C34\u5E73\u65B9\u5411\u4E0A\u6EDA\u52A8</h2><p>\u5207\u6362\u65F6\u4F1A\u81EA\u52A8\u5C06\u5F53\u524D\u6807\u7B7E\u5C45\u4E2D\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span> <span class="hljs-attr">scrollType</span>=<span class="hljs-string">&quot;scroll&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u53D6\u6D88&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u53D6\u6D88\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u8BC4\u4EF7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u8BC4\u4EF7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u8BBE\u7F6E slot:header \u53EF\u4EE5\u81EA\u5B9A\u4E49\u6807\u7B7E</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5168\u90E8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:header</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5168\u90E8\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u4ED8\u6B3E&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u4ED8\u6B3E\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u6536\u83B7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u6536\u83B7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u5B8C\u6210&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u5B8C\u6210\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5DF2\u53D6\u6D88&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5DF2\u53D6\u6D88\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u5F85\u8BC4\u4EF7&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u5F85\u8BC4\u4EF7\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u5DE6\u53F3 tab \u5E03\u5C40</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span>
  <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;vertical&quot;</span>
  <span class="hljs-attr">:animated-time</span>=<span class="hljs-string">&quot;500&quot;</span>
  <span class="hljs-attr">:default-index</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">scrollType</span>=<span class="hljs-string">&quot;scroll&quot;</span>
  <span class="hljs-attr">icon-type</span>=<span class="hljs-string">&quot;half&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u4E00&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u4E00\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u4E8C&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u4E8C\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u4E09&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u4E09\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u56DB&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u56DB\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u4E94&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u4E94\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u516D&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u516D\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">tab-title</span>=<span class="hljs-string">&quot;\u9875\u7B7E\u4E03&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E\u4E03\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
</code></pre><h2>\u5F02\u6B65\u64CD\u4F5C</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-tab</span> <span class="hljs-attr">:animatedTime</span>=<span class="hljs-string">&quot;500&quot;</span> <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;editList.length&gt;0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-tab-panel</span> <span class="hljs-attr">:tab-title</span>=<span class="hljs-string">&quot;item.title&quot;</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item,index) in editList&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;content-tab&quot;</span>&gt;</span>\u8FD9\u91CC\u662F\u9875\u7B7E{{index}}\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab-panel</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-tab</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeList&quot;</span>&gt;</span>\u6539\u53D8\u6570\u636E<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;ts&quot;</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">import</span> { ref , reactive,toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
      <span class="hljs-attr">editList</span>:[
        {
          <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;\u6807\u7B7E\u4E00&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;\u6807\u7B7E\u4E8C&#39;</span>
        }
      ]
    });
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">changeList</span>(<span class="hljs-params"></span>)</span>{
      resData.editList.push({
        <span class="hljs-attr">title</span>:<span class="hljs-string">&#39;\u6807\u7B7E&#39;</span>+resData.editList.length
      })
    }
    <span class="hljs-keyword">return</span> {
      ...toRefs(resData),
      changeList
    };
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre><h3>Prop</h3><h3>nut-tab</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>direction</td><td>\u9875\u7B7E\u680F\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C horizontal/vertical</td><td>String</td><td>horizontal</td></tr><tr><td>default-index</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u9875\u7B7E\u680F</td><td>Number</td><td>0</td></tr><tr><td>animated-time</td><td>\u5F00\u542F\u5207\u6362\u6807\u7B7E\u5185\u5BB9\u65F6\u7684\u8F6C\u573A\u52A8\u753B\u65F6\u95F4</td><td>Number</td><td>0</td></tr><tr><td>no-swiping</td><td>\u7981\u6B62 tab \u5185\u5BB9\u6ED1\u52A8</td><td>Boolean</td><td>false</td></tr><tr><td>scroll-type</td><td>\u9875\u7B7E\u680F\u7684\u5206\u5E03\uFF0C\u9ED8\u8BA4\u5E73\u5747\u5206\u5E03\uFF0C\u8BBE\u7F6E\u4E3A&quot;scroll&quot;\uFF0C\u6709\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u53D1\u751F\u6EDA\u52A8</td><td>string</td><td>\u201Cdefault\u201C</td></tr><tr><td>icon-type</td><td>\u9875\u7B7E\u5E95\u90E8\u9009\u4E2D\u7684\u7EA2\u8272\u6837\u5F0F\uFF0C\u5F53\u4E3A half \u7684\u65F6\u5019\uFF0C\u663E\u793A\u534A\u5706\u7684\u7EA2\u8272 icon\uFF0C\u9ED8\u8BA4\u4E3A all\uFF1A\u7EA2\u8272\u6A2A\u7EBF\uFF0C\u7528\u6765\u517C\u5BB9\u4E0D\u540C\u7684\u89C6\u89C9\u89C4\u8303</td><td>String</td><td>all</td></tr></tbody></table><h3>nut-tab-panel</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>tab-title</td><td>\u9875\u7B7E\u7684\u6807\u9898</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>slot:header</td><td>\u9875\u7B7E title \u7684\u81EA\u5B9A\u4E49 slot</td><td>vnode</td><td>\u2013</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>switch-tab</td><td>\u5207\u6362\u9875\u7B7E\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u5F53\u524D\u6D3B\u52A8\u72B6\u6001\u7684\u7D22\u5F15\u503C</td></tr></tbody></table>`,30),c=[p],r={setup(h,{expose:s}){return s({frontmatter:{}}),(e,g)=>(n(),a("div",l,c))}};export{r as default};
