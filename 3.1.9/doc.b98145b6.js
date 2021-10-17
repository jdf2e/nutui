import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>ActionSheet \u52A8\u4F5C\u9762\u677F</h1><h3>\u4ECB\u7ECD</h3><p>\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u4F5C\u83DC\u5355\u9762\u677F\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { ActionSheet, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { ActionSheet, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(ActionSheet).use(Popup);
</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><p>\u9ED8\u8BA4</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.isVisible&quot;</span>
  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>
  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>
</code></pre><h2>\u5C55\u793A\u53D6\u6D88\u6309\u94AE</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u5C55\u793A\u53D6\u6D88\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span> 
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>
  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>
  @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>
  <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>
</code></pre><h2>\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>
   <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u5C55\u793A\u53D6\u6D88\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;state.val&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;isVisible&quot;</span> 
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;state.desc&quot;</span>
    <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItems&quot;</span>
    @<span class="hljs-attr">choose</span>=<span class="hljs-string">&quot;chooseItem&quot;</span>
    <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>
</code></pre><h2>\u9009\u9879\u72B6\u6001</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u6027\u522B<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;selected-option&quot;</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;sex&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-actionsheet</span>
@<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;switchActionSheet&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.isVisible4&quot;</span>
  <span class="hljs-attr">cancel-txt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">:menu-items</span>=<span class="hljs-string">&quot;menuItemsThree&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-actionsheet</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">isVisible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F&#39;</span>
    });
    <span class="hljs-keyword">const</span> menuItems = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-number">2</span>
      }
    ];
     <span class="hljs-keyword">const</span> switchActionSheet = <span class="hljs-function">() =&gt;</span> {
       state.isVisible = !state.isVisible
    };
    <span class="hljs-keyword">const</span> chooseItem = <span class="hljs-function">(<span class="hljs-params">item,index</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(item,index);
    };

</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>cancel-txt</td><td>\u53D6\u6D88\u6587\u6848</td><td>String</td><td>\u2018\u53D6\u6D88\u2019</td></tr><tr><td>menu-items</td><td>\u5217\u8868\u9879</td><td>Array</td><td>[ ]</td></tr><tr><td>option-tag</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u5C55\u793A\u4F7F\u7528\u53C2\u6570</td><td>String</td><td>\u2018name\u2019</td></tr><tr><td>v-model:visible</td><td>\u906E\u7F69\u5C42\u53EF\u89C1</td><td>Boolean</td><td>false</td></tr><tr><td>option-sub-tag</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u63CF\u8FF0\u5C55\u793A\u4F7F\u7528\u53C2\u6570</td><td>String</td><td>\u2018subname\u2019</td></tr><tr><td>choose-tag-value</td><td>\u8BBE\u7F6E\u9009\u4E2D\u9879\u7684\u503C\uFF0C\u548C\u2019option-tag\u2019\u7684\u503C\u5BF9\u5E94</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u6807\u9898</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>description</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u526F\u6807\u9898/\u63CF\u8FF0</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>color</td><td>\u9AD8\u4EAE\u989C\u8272</td><td>String</td><td>\u2018#ee0a24\u2019</td></tr><tr><td>close-abled</td><td>\u906E\u7F69\u5C42\u662F\u5426\u53EF\u5173\u95ED</td><td>Boolean</td><td>true</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>choose</td><td>\u9009\u62E9\u4E4B\u540E\u89E6\u53D1</td><td>\u9009\u4E2D\u5217\u8868\u9879item, \u9009\u4E2D\u7684\u7D22\u5F15\u503Cindex</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6587\u6848\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr></tbody></table>`,19),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(o,j)=>(n(),a("div",l,c))}};export{i as default};
