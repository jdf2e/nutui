import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>ShortPassword \u77ED\u5BC6\u7801</h1><h3>\u4ECB\u7ECD</h3><p>\u77ED\u5BC6\u7801\u8F93\u5165\u6846\uFF0C\u53EF\u7528\u4E8E\u8F93\u5165\u5BC6\u7801\u3001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { ShortPassword,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { ShortPassword,Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(ShortPassword);
app.use(Popup);

</code></pre><h3>\u516C\u7528\u7247\u6BB5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-shortpassword</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
  <span class="hljs-attr">:no-button</span>=<span class="hljs-string">&quot;state.noButton&quot;</span>
  <span class="hljs-attr">:length</span>=<span class="hljs-string">&quot;state.length&quot;</span>
  <span class="hljs-attr">:error-msg</span>=<span class="hljs-string">&quot;state.errorMsg&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;methods.onChange&quot;</span>
  @<span class="hljs-attr">complete</span>=<span class="hljs-string">&quot;methods.onComplete&quot;</span>
  @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;methods.onOk&quot;</span>
  @<span class="hljs-attr">tips</span>=<span class="hljs-string">&quot;methods.onTips&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-shortpassword</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { reactive, getCurrentInstance } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">let</span> { proxy } = getCurrentInstance();
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">noButton</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">errorMsg</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">length</span>: <span class="hljs-number">6</span>
  });
  <span class="hljs-keyword">const</span> methods = {
    <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">val: string</span>)</span> {
      val &amp;&amp; proxy.$toast.text(val);
    },
    <span class="hljs-function"><span class="hljs-title">onOk</span>(<span class="hljs-params">val: string</span>)</span> {
      val &amp;&amp; proxy.$toast.text(val);
      state.visible = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">onComplete</span>(<span class="hljs-params"></span>)</span> {
      
    },
    <span class="hljs-function"><span class="hljs-title">onTips</span>(<span class="hljs-params"></span>)</span> {
      proxy.$toast.text(<span class="hljs-string">&#39;\u6267\u884C\u5FD8\u8BB0\u5BC6\u7801\u903B\u8F91&#39;</span>);
    }
  };
  <span class="hljs-keyword">return</span> {
    state,
    methods
  };
}

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u663E\u793A\u6309\u94AE\u7EC4</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u663E\u793A\u6309\u94AE\u7EC4&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.noButton = false;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5BC6\u7801\u957F\u5EA64</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49\u5BC6\u7801\u957F\u5EA64&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.length = 4;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u5FD8\u8BB0\u5BC6\u7801\u63D0\u793A\u8BED\u4E8B\u4EF6\u56DE\u8C03</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5FD8\u8BB0\u5BC6\u7801\u63D0\u793A\u8BED\u4E8B\u4EF6\u56DE\u8C03&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u9519\u8BEF\u63D0\u793A\u8BED</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9519\u8BEF\u63D0\u793A\u8BED&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true;state.errorMsg = &#39;\u8BF7\u8F93\u5165\u6B63\u786E\u5BC6\u7801&#39;;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5BC6\u7801\u521D\u59CB\u503C</td><td>String</td><td></td></tr><tr><td>v-model:visible</td><td>\u662F\u5426\u5C55\u793A\u77ED\u5BC6\u7801\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>\u8BF7\u8F93\u5165\u5BC6\u7801</td></tr><tr><td>desc</td><td>\u5BC6\u7801\u6846\u63CF\u8FF0</td><td>String</td><td>\u60A8\u4F7F\u7528\u4E86\u865A\u62DF\u8D44\u4EA7\uFF0C\u8BF7\u8FDB\u884C\u9A8C\u8BC1</td></tr><tr><td>tips</td><td>\u63D0\u793A\u8BED</td><td>String</td><td>\u5FD8\u8BB0\u5BC6\u7801</td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td>true</td></tr><tr><td>no-button</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>length</td><td>\u5BC6\u7801\u957F\u5EA6\uFF0C\u53D6\u503C\u4E3A4~6</td><td>String\u3001Number</td><td>6</td></tr><tr><td>error-msg</td><td>\u9519\u8BEF\u4FE1\u606F\u63D0\u793A</td><td>String</td><td>\u2018\u2019</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5BC6\u7801\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9E\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>-</td></tr><tr><td>close</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>-</td></tr><tr><td>complete</td><td>\u8F93\u5165\u5B8C\u6210\u7684\u56DE\u8C03</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr></tbody></table>`,22),e=[p],j={setup(r,{expose:s}){return s({frontmatter:{}}),(o,h)=>(t(),a("div",l,e))}};export{j as default};
