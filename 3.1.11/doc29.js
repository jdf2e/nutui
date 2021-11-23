import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Menu \u83DC\u5355\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Menu, MenuItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Menu, MenuItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;
<span class="hljs-keyword">const</span> app = createApp();
app.use(Menu);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value2&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { reactive, ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">options1</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5168\u90E8\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u65B0\u6B3E\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D3B\u52A8\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> }
      ],
      <span class="hljs-attr">options2</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9ED8\u8BA4\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;a&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u597D\u8BC4\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;b&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9500\u91CF\u6392\u5E8F&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;c&#39;</span> },
      ],
      <span class="hljs-attr">options3</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5168\u90E8\u5546\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">0</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5BB6\u5EAD\u6E05\u6D01/\u7EB8\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4E2A\u4EBA\u62A4\u7406&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u7F8E\u5986\u62A4\u80A4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u98DF\u54C1\u996E\u6599&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">4</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5BB6\u7528\u7535\u5668&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">5</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6BCD\u5A74&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">6</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6570\u7801&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">7</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u7535\u8111\u3001\u529E\u516C&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">8</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8FD0\u52A8\u6237\u5916&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">9</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53A8\u5177&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">10</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u533B\u7597\u4FDD\u5065&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">11</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9152\u7C7B&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">12</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u751F\u9C9C&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">13</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5BB6\u5177&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">14</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F20\u7EDF\u6ECB\u8865&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">15</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6C7D\u8F66\u7528\u54C1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">16</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5BB6\u5C45\u65E5\u7528&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">17</span> },
      ],
      <span class="hljs-attr">value1</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">value2</span>: <span class="hljs-string">&#39;a&#39;</span>,
      <span class="hljs-attr">value3</span>: <span class="hljs-number">0</span>
    });

    <span class="hljs-keyword">const</span> item = ref(<span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">const</span> onConfirm = <span class="hljs-function">() =&gt;</span> {
      item.value.toggle();
    }

    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;val&#39;</span>, val);
    }

    <span class="hljs-keyword">return</span> {
      state,
      item,
      onConfirm,
      handleChange
    };
  }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</h3><p>\u4F7F\u7528\u5B9E\u4F8B\u4E0A\u7684 toggle \u65B9\u6CD5\u53EF\u4EE5\u624B\u52A8\u5173\u95ED\u5F39\u6846\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7B5B\u9009&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">:style</span>=<span class="hljs-string">&quot;{display: &#39;flex&#39;, flex: 1, &#39;justify-content&#39;: &#39;space-between&#39;, &#39;align-items&#39;: &#39;center&#39;}&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>&gt;</span>\u5173\u95ED<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u4E00\u884C\u4E24\u5217</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value3&quot;</span> <span class="hljs-attr">:cols</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options3&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;green&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value2&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u83DC\u5355</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options1&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-menu-item</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value2&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options2&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-menu</span>&gt;</span>
</code></pre><h2>API</h2><h3>Menu Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>active-color</td><td>\u9009\u9879\u7684\u9009\u4E2D\u6001\u56FE\u6807\u989C\u8272</td><td>String</td><td>#F2270C</td></tr></tbody></table><h3>MenuItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u83DC\u5355\u9879\u6807\u9898</td><td>String</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u6587\u5B57</td></tr><tr><td>options</td><td>\u9009\u9879\u6570\u7EC4</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u83DC\u5355</td><td>Boolean</td><td>false</td></tr><tr><td>cols</td><td>\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217 options</td><td>Number</td><td>1</td></tr><tr><td>title-icon</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u56FE\u6807</td><td>String</td><td>\u2018down-arrow\u2019</td></tr></tbody></table><h3>MenuItem Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u62E9 option \u4E4B\u540E\u89E6\u53D1</td><td>\u9009\u62E9\u7684 value</td></tr></tbody></table>`,25),e=[p],u={setup(h,{expose:s}){return s({frontmatter:{}}),(r,j)=>(n(),a("div",l,e))}};export{u as default};
