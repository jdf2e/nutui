import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Searchbar \u641C\u7D22\u680F</h1><h3>\u4ECB\u7ECD</h3><p>\u641C\u7D22\u680F</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { SearchBar, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { SearchBar, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(SearchBar).use(Icon);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
    };
  }
}
</code></pre><h3>\u641C\u7D22\u4E8B\u4EF6\u76D1\u542C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span> @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Toast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">const</span> search = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
      Toast.text(<span class="hljs-string">&#39;\u641C\u7D22\u89E6\u53D1&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
      search,
    };
  }
}
</code></pre><h3>\u663E\u793A\u641C\u7D22 icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:leftin</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
    };
  }
}
</code></pre><h3>\u53F3\u4FA7\u6DFB\u52A0\u641C\u7D22\u6587\u5B57</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:rightout</span>&gt;</span>
    \u641C\u7D22
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
    };
  }
}
</code></pre><pre><code>&lt;h2&gt;\u66F4\u6539\u8F93\u5165\u6846\u5185\u90E8\u53CA\u5916\u90E8\u7684\u80CC\u666F\u6837\u5F0F&lt;/h2&gt;
</code></pre><h3>\u66F4\u6539\u8F93\u5165\u6846\u5185\u90E8\u53CA\u5916\u90E8\u7684\u80CC\u666F\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue4&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;linear-gradient(to right, #9866F0, #EB4D50)&quot;</span> <span class="hljs-attr">input-background</span>=<span class="hljs-string">&quot;#fff&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
    };
  }
}
</code></pre><h3>\u663E\u793A\u5168\u90E8 icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-searchbar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:leftout</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;clickLeft&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:leftin</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;14&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search2&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:rightin</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;photograph&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:rightout</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;message&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-searchbar</span>&gt;</span> 
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { toRefs, reactive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">searchValue</span>: <span class="hljs-string">&quot;&quot;</span>
    });

    <span class="hljs-keyword">return</span> {
      ...toRefs(state),
    };
  }
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>max-length</td><td>\u6700\u5927\u8F93\u5165\u957F\u5EA6</td><td>[Number,String]</td><td>\u20189999\u2019</td></tr><tr><td>input-type</td><td>\u8F93\u5165\u6846\u7C7B\u578B</td><td>String</td><td>\u2018text\u2019</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u9ED8\u8BA4\u6697\u7EB9</td><td>String</td><td>\u2018\u8BF7\u8F93\u5165\u2019</td></tr><tr><td>clearable</td><td>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>background</td><td>\u8F93\u5165\u6846\u5916\u90E8\u80CC\u666F</td><td>String</td><td>\u2018#fff\u2019</td></tr><tr><td>input-background</td><td>\u8F93\u5165\u6846\u5185\u90E8\u80CC\u666F</td><td>String</td><td>\u2018#f7f7f7\u2019</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1</td><td>val, event</td></tr><tr><td>focus</td><td>\u805A\u7126\u65F6\u89E6\u53D1</td><td>val, event</td></tr><tr><td>blur</td><td>\u5931\u7126\u65F6\u89E6\u53D1</td><td>val, event</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u7A7A\u65F6\u89E6\u53D1</td><td>val</td></tr><tr><td>search</td><td>\u6309\u4E0B ENTER \u952E\u65F6\u89E6\u53D1</td><td>val, event</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>leftin</td><td>\u8F93\u5165\u6846\u5185 \u5DE6icon</td></tr><tr><td>leftout</td><td>\u8F93\u5165\u6846\u5916 \u5DE6icon</td></tr><tr><td>rightin</td><td>\u8F93\u5165\u6846\u5185 \u53F3icon</td></tr><tr><td>rightout</td><td>\u8F93\u5165\u6846\u5916 \u53F3icon</td></tr></tbody></table>`,30),e=[p],d={setup(c,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,e))}};export{d as default};
