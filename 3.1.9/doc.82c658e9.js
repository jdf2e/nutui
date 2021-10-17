import{e as t,o as a,G as n}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=n(`<h1>Input \u8F93\u5165\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5355\u884C\u8F93\u5165\u6846</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Input,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Input,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Input);
app.use(Icon);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u53CC\u5411\u7ED1\u5B9A</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val1&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
      @<span class="hljs-attr">focus</span>=<span class="hljs-string">&quot;focus&quot;</span>
      @<span class="hljs-attr">blur</span>=<span class="hljs-string">&quot;blur&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
    /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6587\u672C&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val0&quot;</span>
      <span class="hljs-attr">:require-show</span>=<span class="hljs-string">&quot;true&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C&quot;</span>
      @<span class="hljs-attr">clear</span>=<span class="hljs-string">&quot;clear&quot;</span>
    /&gt;</span>
</code></pre><h3>\u7981\u7528\u548C\u53EA\u8BFB</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val2&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span>  <span class="hljs-attr">disabled</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6807\u9898\uFF1A&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val3&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">readonly</span>=<span class="hljs-string">&quot;true&quot;</span>  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6807\u9898\uFF1A&quot;</span>/&gt;</span>
</code></pre><h3>\u9650\u5236\u8F93\u5165\u957F\u5EA6</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val4&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">max-length</span>=<span class="hljs-string">&quot;7&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9650\u52367&quot;</span> /&gt;</span>
</code></pre><h3>\u5176\u4ED6\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val0&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val5&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6574\u6570&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.val6&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u652F\u6301\u5C0F\u6570\u70B9\u7684\u8F93\u5165&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6570\u5B57&quot;</span>/&gt;</span>
</code></pre><h3>\u4EE3\u7801</h3><pre><code class="language-html">import { reactive } from &#39;vue&#39;;
export default {
  setup() {
    const state = reactive({
      val0: &#39;&#39;,
      val1: &#39;\u521D\u59CB\u6570\u636E&#39;,
      val2: &#39;\u7981\u6B62\u4FEE\u6539&#39;,
      val3: &#39;readonly \u53EA\u8BFB&#39;,
      val4: &#39;&#39;,
      val5: &#39;&#39;,
      val6: &#39;&#39;,
      val7: &#39;&#39;,
      val8: &#39;\u6587\u6848&#39;
    });
    setTimeout(function() {
      state.val1 = &#39;\u5F02\u6B65\u6570\u636E&#39;;
    }, 2000);
    const change = (value: string | number,event:Event) =&gt; {
      console.log(&#39;change: &#39;, value,event);
    };
    const focus = (value: string | number,event:Event) =&gt; {
      console.log(&#39;focus:&#39;, value,event);
    };
    const blur = (value: string | number,event:Event) =&gt; {
      console.log(&#39;blur:&#39;, value,event);
    };
    const clear = (value: string | number) =&gt; {
      console.log(&#39;clear:&#39;, value);
    };

    return {
      state,
      change,
      blur,
      clear,
      focus
    };
  }
}
</code></pre><h3>Prop</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u8F93\u5165\u503C\uFF0C\u53CC\u5411\u7ED1\u5B9A</td><td>String</td><td>-</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>text</code> <code>number</code> \u7B49</td><td>String</td><td><code>text</code></td></tr><tr><td>placeholder</td><td>\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td><td>String</td><td>-</td></tr><tr><td>label</td><td>\u5DE6\u4FA7\u6587\u6848</td><td>String</td><td>-</td></tr><tr><td>require-show</td><td>\u5DE6\u4FA7*\u53F7\u662F\u5426\u5C55\u793A</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>max-length</td><td>\u9650\u5236\u6700\u957F\u8F93\u5165\u5B57\u7B26</td><td>String\u3001Number</td><td>-</td></tr><tr><td>clearable</td><td>\u5C55\u793A\u6E05\u9664icon</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>text-align</td><td>\u6587\u672C\u4F4D\u7F6E,\u53EF\u9009\u503C<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>focus</td><td>\u805A\u7126\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>blur</td><td>\u5931\u7126\u65F6\u89E6\u53D1</td><td>val ,event</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u7A7A\u65F6\u89E6\u53D1</td><td>val</td></tr></tbody></table>`,21),e=[p],u={setup(c,{expose:s}){return s({frontmatter:{}}),(r,d)=>(a(),t("div",l,e))}};export{u as default};
