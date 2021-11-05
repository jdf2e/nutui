import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Notify \u6D88\u606F\u901A\u77E5</h1><h3>\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u9876\u90E8\u5C55\u793A\u6D88\u606F\u63D0\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Notify } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Notify);
</code></pre><h2>\u4F7F\u7528\u793A\u4F8B</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;baseState.state.desc&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;baseState.methods.cellClick&quot;</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-notify</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;onClosed&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;baseState.state.show&quot;</span>
    <span class="hljs-attr">:msg</span>=<span class="hljs-string">&quot;baseState.state.desc&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u901A\u77E5\u7C7B\u578B&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-notify</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;onClosed&quot;</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;notifyState.state.type&quot;</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;notifyState.state.show&quot;</span> <span class="hljs-attr">:msg</span>=<span class="hljs-string">&quot;notifyState.state.desc&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;notifyState.methods.cellClick(&#39;primary&#39;,&#39;\u4E3B\u8981\u901A\u77E5&#39;)&quot;</span>&gt;</span>\u4E3B\u8981\u901A\u77E5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;notifyState.methods.cellClick(&#39;success&#39;,&#39;\u6210\u529F\u901A\u77E5&#39;)&quot;</span>&gt;</span>\u6210\u529F\u901A\u77E5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;notifyState.methods.cellClick(&#39;danger&#39;,&#39;\u5371\u9669\u901A\u77E5&#39;)&quot;</span>&gt;</span>\u5371\u9669\u901A\u77E5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;notifyState.methods.cellClick(&#39;warning&#39;,&#39;\u8B66\u544A\u901A\u77E5&#39;)&quot;</span>&gt;</span>\u8B66\u544A\u901A\u77E5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u6837\u5F0F&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-notify</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClick&quot;</span> @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;onClosed&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&#39;#ad0000&#39;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&#39;#ffe1e1&#39;</span>
    <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;customState.state.type&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;customState.state.show&quot;</span> <span class="hljs-attr">:msg</span>=<span class="hljs-string">&quot;customState.state.desc&quot;</span>
    <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;customState.state.duration&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;customState.methods.cellClick(&#39;primary&#39;,&#39;\u81EA\u5B9A\u4E49\u80CC\u666F\u8272\u548C\u5B57\u4F53\u989C\u8272&#39;)&quot;</span>&gt;</span> \u81EA\u5B9A\u4E49\u80CC\u666F\u8272\u548C\u5B57\u4F53\u989C\u8272
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">is-Link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;customState.methods.cellClick(&#39;primary&#39;,&#39;\u81EA\u5B9A\u4E49\u65F6\u957F5s&#39;,5000)&quot;</span>&gt;</span> \u81EA\u5B9A\u4E49\u65F6\u957F5s
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> onClosed = <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;closed&#39;</span>);
    <span class="hljs-keyword">const</span> onClick = <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;click&#39;</span>);

    <span class="hljs-keyword">const</span> baseState = {
      <span class="hljs-attr">state</span>: reactive({
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u57FA\u7840\u7528\u6CD5&#39;</span>
      }),
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">cellClick</span>(<span class="hljs-params"></span>)</span> {
          baseState.state.show = <span class="hljs-literal">true</span>;
        }
      }
    };

    <span class="hljs-keyword">const</span> notifyState = {
      <span class="hljs-attr">state</span>: reactive({
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>
      }),
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">cellClick</span>(<span class="hljs-params">type: string, desc: string</span>)</span> {
          notifyState.state.show = <span class="hljs-literal">true</span>;
          notifyState.state.type = type;
          notifyState.state.desc = desc;
        }
      }
    };
    <span class="hljs-keyword">const</span> customState = {
      <span class="hljs-attr">state</span>: reactive({
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>,
        <span class="hljs-attr">duration</span>: <span class="hljs-number">3000</span>
      }),
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">cellClick</span>(<span class="hljs-params">type: string, desc: string, duration: number</span>)</span> {
          customState.state.show = <span class="hljs-literal">true</span>;
          customState.state.type = type;
          customState.state.desc = desc;
          customState.state.duration = duration;
        }
      }
    };
    <span class="hljs-keyword">return</span> {
      baseState,
      notifyState,
      customState,
      onClosed,
      onClick
    };
  }
};
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u63D0\u793A\u7684\u4FE1\u606F\u7C7B\u578B\uFF08primary\uFF0Csuccess \uFF0Cdanger\uFF0Cwarning\uFF09</td><td>String</td><td>\u2018danger\u2019</td></tr><tr><td>message</td><td>\u5C55\u793A\u6587\u6848\uFF0C\u652F\u6301\u901A\u8FC7\\n\u6362\u884C</td><td>Boolean</td><td>false</td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F(ms)\uFF0C\u503C\u4E3A 0 \u65F6\uFF0Cnotify \u4E0D\u4F1A\u6D88\u5931</td><td>String</td><td>3000</td></tr><tr><td>color</td><td>\u5B57\u4F53\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>background</td><td>\u80CC\u666F\u989C\u8272</td><td>String</td><td>\u7A7A</td></tr><tr><td>class-name</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>String</td><td></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u4E8B\u4EF6\u56DE\u8C03</td><td>\u65E0</td></tr><tr><td>closed</td><td>\u5173\u95ED\u4E8B\u4EF6\u56DE\u8C03</td><td>\u65E0</td></tr></tbody></table>`,12),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(r,o)=>(t(),a("div",l,c))}};export{i as default};
