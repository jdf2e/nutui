import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Collapse \u6298\u53E0\u9762\u677F</h1><h3>\u4ECB\u7ECD</h3><p>\u5C06\u5185\u5BB9\u653E\u7F6E\u5728\u591A\u4E2A\u6298\u53E0\u9762\u677F\u4E2D\uFF0C\u70B9\u51FB\u9762\u677F\u6807\u9898\u53EF\u5C55\u5F00\u6216\u6536\u7F29\u5185\u5BB9\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Collapse,CollapseItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Collapse,CollapseItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Collapse);
app.use(CollapseItem);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><p>\u901A\u8FC7<code>v-model</code>\u63A7\u5236\u5C55\u5F00\u7684\u9762\u677F\u5217\u8868\uFF0C<code>activeNames</code>\u4E3A\u6570\u7EC4\u683C\u5F0F</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;active1&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:mTitle</span>&gt;</span>
      {{title1}}
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    NutUI\u662F\u4E00\u5957\u62E5\u6709\u4EAC\u4E1C\u98CE\u683C\u7684\u8F7B\u91CF\u7EA7\u7684 Vue \u7EC4\u4EF6\u5E93
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u5728\u4EA7\u54C1\u7684\u529F\u80FD\u3001\u4F53\u9A8C\u3001\u6613\u7528\u6027\u548C\u7075\u6D3B\u6027\u7B49\u5404\u4E2A\u65B9\u9762\u505A\u4E86\u5168\u9762\u7684\u5347\u7EA7\uFF01
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title3&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> activeNames = reactive([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);
  <span class="hljs-keyword">const</span> title = reactive({
    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;\u6807\u98982&#39;</span>,
    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;\u6807\u98983&#39;</span>,
  })
  <span class="hljs-keyword">return</span> {
    activeNames,
    ...toRefs(title)
  };
}
</code></pre><h3>\u65E0icon\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
   \u5F15\u5165Vue3\u65B0\u7279\u6027 Composition API\u3001Teleport\u3001Emits \u7B49
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u5168\u9762\u4F7F\u7528 TypeScipt
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">const</span> title = reactive({
    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;\u6807\u98982&#39;</span>,
    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;\u6807\u98983&#39;</span>,
  })
  <span class="hljs-keyword">return</span> {
    activeName,
    ...toRefs(title)
  };
}
</code></pre><h3>\u624B\u98CE\u7434</h3><p>\u901A\u8FC7<code>accordion</code>\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u624B\u98CE\u7434\u6A21\u5F0F\uFF0C\u6700\u591A\u5C55\u5F00\u4E00\u4E2A\u9762\u677F\uFF0C\u6B64\u65F6<code>activeName</code>\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F\uFF1B<code>subTitle</code>\u53EF\u4EE5\u8BBE\u7F6E\u526F\u6807\u9898\u7684\u5185\u5BB9</p><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span> <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u57FA\u4E8E\u4EAC\u4E1C\u8BBE\u8BA1\u8BED\u8A00\u4F53\u7CFB\uFF0C\u6784\u5EFA\u573A\u666F
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:sub-title</span>=<span class="hljs-string">&quot;subTitle&quot;</span>&gt;</span>
   \u63D0\u9AD8\u754C\u2FAF\u7684\u6A21\u5757\u5316\u901A\u7528\u7A0B\u5EA6
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title3&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  \u91C7\u7528\u7EC4\u5408\u5F0F API Composition \u8BED\u6CD5\u91CD\u6784\uFF0C\u7ED3\u6784\u6E05\u6670\uFF0C\u529F\u80FD\u6A21\u5757\u5316
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">const</span> subTitle = <span class="hljs-string">&#39;\u526F\u6807\u9898&#39;</span>;
  <span class="hljs-keyword">const</span> title = reactive({
    <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
    <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;\u6807\u98982&#39;</span>,
    <span class="hljs-attr">title3</span>: <span class="hljs-string">&#39;\u6807\u98983&#39;</span>,
  })
  <span class="hljs-keyword">return</span> {
    activeName,
    subTitle,
    ...toRefs(title)
  };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6298\u53E0\u56FE\u6807</h3><p>\u901A\u8FC7icon\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0Crotate\u8BBE\u7F6E\u56FE\u6807\u65CB\u8F6C\u7684\u89D2\u5EA6</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>
  <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-right2&quot;</span>
  <span class="hljs-attr">rotate</span>=<span class="hljs-string">&quot;90&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:sTitle</span>&gt;</span>
      \u6587\u672C\u6D4B\u8BD5
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    NUTUI3.0\u91CD\u65B0\u601D\u8003\u5176\u5185\u5728\u7684\u4E00\u81F4\u6027\u548C\u53EF\u7EC4\u5408\u6027
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">&quot;\u6587\u672C\u5185\u5BB9&quot;</span>&gt;</span>
    \u63D0\u2FBC\u4EA7\u7814\u8F93\u51FA\u5BF9\u63A5\u7684\u6548\u7387\uFF0C\u964D\u4F4E\u8F93\u51FA\u5DE5\u4F5C\u91CF
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> title = reactive({
  <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
  <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;\u6807\u98982&#39;</span>,
})
<span class="hljs-keyword">return</span> {
  activeName,
  ...toRefs(title)
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898\u56FE\u6807</h3><p>\u901A\u8FC7icon\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0Crotate\u8BBE\u7F6E\u56FE\u6807\u65CB\u8F6C\u7684\u89D2\u5EA6</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse</span>
  <span class="hljs-attr">v-model:active</span>=<span class="hljs-string">&quot;activeName&quot;</span>
  <span class="hljs-attr">title-icon</span>=<span class="hljs-string">&quot;issue&quot;</span>
  <span class="hljs-attr">title-icon-color</span>=<span class="hljs-string">&quot;red&quot;</span>
  <span class="hljs-attr">title-icon-size</span>=<span class="hljs-string">&quot;20px&quot;</span>
  <span class="hljs-attr">title-icon-position</span>=<span class="hljs-string">&quot;left&quot;</span>
  <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;down-arrow&quot;</span>
  <span class="hljs-attr">:accordion</span>=<span class="hljs-string">&quot;true&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title1&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
  \u7EC4\u4EF6 emits \u4E8B\u4EF6\u5355\u72EC\u63D0\u53D6\uFF0C\u589E\u5F3A\u4EE3\u7801\u53EF\u8BFB\u6027
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-collapse-item</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;title2&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">sub-title</span>=<span class="hljs-string">&quot;\u6587\u672C\u5185\u5BB9&quot;</span>&gt;</span>
  \u4F7F\u7528 Teleport \u65B0\u7279\u6027\u91CD\u6784\u6302\u8F7D\u7C7B\u7EC4\u4EF6
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-collapse</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> activeName = ref(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> title = reactive({
  <span class="hljs-attr">title1</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
  <span class="hljs-attr">title2</span>: <span class="hljs-string">&#39;\u6807\u98982&#39;</span>,
})
<span class="hljs-keyword">return</span> {
  activeName,
  ...toRefs(title)
};
</code></pre><h2>Collapse Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1Astring | number<br>\u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A(string | number)[]</td><td>-</td></tr><tr><td>accordion</td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>\u56FE\u6807\u94FE\u63A5/\u6216\u4F7F\u7528 NutUI \u7684 icon</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>icon-size</td><td>\u56FE\u6807\u5927\u5C0F</td><td>string</td><td>16px</td></tr><tr><td>icon-color</td><td>\u56FE\u6807\u989C\u8272</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>title-icon</td><td>\u6807\u9898\u56FE\u6807\u94FE\u63A5/\u6216\u4F7F\u7528 NutUI \u7684 icon</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>title-icon-size</td><td>\u6807\u9898\u56FE\u6807\u5927\u5C0F</td><td>string</td><td>16px</td></tr><tr><td>title-icon-color</td><td>\u6807\u9898\u56FE\u6807\u989C\u8272</td><td>string</td><td>\u2019\u2018</td></tr><tr><td>title-icon-position</td><td>\u6807\u9898\u56FE\u6807\u4F4D\u7F6E</td><td>string</td><td>\u2018left\u2019</td></tr><tr><td>rotate</td><td>\u70B9\u51FB\u6298\u53E0\u548C\u5C55\u5F00\u7684\u65CB\u8F6C\u89D2\u5EA6,\u5728\u81EA\u5B9A\u4E49\u56FE\u6807\u6A21\u5F0F\u4E0B\u751F\u6548</td><td>string \\ number</td><td>180</td></tr></tbody></table><h3>CollapseItem Prop</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u5FC5\u586B</td><td>string \\ number</td><td>-1</td></tr><tr><td>title</td><td>\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9\uFF0C\u652F\u6301\u63D2\u69FD\u4F20\u5165\uFF08props\u4F20\u5165\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF09</td><td>string</td><td>-</td></tr><tr><td>sub-title</td><td>\u6807\u9898\u680F\u526F\u6807\u9898\uFF0C\u652F\u6301\u63D2\u69FD\u4F20\u5165\uFF08props\u4F20\u5165\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF09</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>\u6807\u9898\u680F\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td>\u7C7B\u578B\u4E0E v-model \u7ED1\u5B9A\u7684\u503C\u4E00\u81F4</td></tr></tbody></table>`,31),e=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(t(),a("div",l,e))}};export{j as default};
