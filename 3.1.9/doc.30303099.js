import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Swipe \u6ED1\u52A8\u624B\u52BF</h1><h3>\u4ECB\u7ECD</h3><p>\u5E38\u7528\u4E8E\u5355\u5143\u683C\u5DE6\u6ED1\u5220\u9664\u7B49\u624B\u52BF\u64CD\u4F5C</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Swipe } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Swipe } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Swipe);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5DE6\u6ED1\u5220\u9664&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>
</code></pre><h3>\u7981\u6B62\u6ED1\u52A8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span> <span class="hljs-attr">disabled</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u7981\u6B62\u6ED1\u52A8&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>
</code></pre><h3>\u5DE6\u53F3\u6ED1\u52A8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u9009\u62E9<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">round-radius</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5DE6\u6ED1\u53F3\u6ED1\u90FD\u53EF\u4EE5\u54E6&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u6536\u85CF<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>
</code></pre><h3>\u5F02\u6B65\u63A7\u5236</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;refSwipe&quot;</span> @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u6253\u5F00\u5173\u95ED&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:link</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;changSwitch&quot;</span> <span class="hljs-attr">active-text</span>=<span class="hljs-string">&quot;\u5F00&quot;</span> <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">&quot;\u5173&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>
</code></pre><pre><code class="language-typescript">    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">const</span> refSwipe = ref&lt;HTMLElement&gt;();
        <span class="hljs-keyword">const</span> checked = ref(<span class="hljs-literal">false</span>);
        <span class="hljs-keyword">const</span> changSwitch = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (value) {
                refSwipe.value?.open(<span class="hljs-string">&#39;left&#39;</span>);
            } <span class="hljs-keyword">else</span> {
                refSwipe.value?.close();
            }
        };
         <span class="hljs-keyword">const</span> open = <span class="hljs-function">(<span class="hljs-params">obj: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
            <span class="hljs-built_in">console</span>.log(obj);
            checked.value = <span class="hljs-literal">true</span>;
        };
        <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
            checked.value = <span class="hljs-literal">false</span>;
        };
        <span class="hljs-keyword">return</span> { checked, changSwitch, refSwipe, open, close };
    }
</code></pre><h3>\u81EA\u5B9A\u4E49</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-swipe</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u9009\u62E9<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5546\u54C1\u63CF\u8FF0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:link</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-inputnumber</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height:100%&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u6536\u85CF<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-swipe</span>&gt;</span>
</code></pre><pre><code class="language-typescript">    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">const</span> <span class="hljs-built_in">number</span> = ref(<span class="hljs-number">0</span>);
        <span class="hljs-keyword">return</span> { <span class="hljs-built_in">number</span> };
    }
</code></pre><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u8BC6</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6ED1\u52A8</td><td>String</td><td>false</td></tr><tr><td>touch-move-prevent-default</td><td>\u662F\u5426\u963B\u6B62\u6ED1\u52A8\u4E8B\u4EF6\u884C\u4E3A</td><td>boolean</td><td>false</td></tr><tr><td>touch-move-stop-propagation</td><td>\u662F\u5426\u963B\u6B62\u6ED1\u52A8\u4E8B\u4EF6\u5192\u6CE1</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u65F6\u89E6\u53D1</td><td>{type:\u2018left or right\u2019}</td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>{type:\u2018left or right\u2019}</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u5DE6\u4FA7\u6ED1\u52A8\u5185\u5BB9</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>right</td><td>\u53F3\u4FA7\u6ED1\u52A8\u5185\u5BB9</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><p>\u901A\u8FC7 ref \u53EF\u4EE5\u83B7\u53D6\u5230 Swipe \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5\u3002</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td>left or right</td></tr><tr><td>close</td><td>\u6536\u8D77\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td></td></tr></tbody></table>`,27),e=[p],u={setup(h,{expose:s}){return s({frontmatter:{}}),(r,j)=>(n(),a("div",l,e))}};export{u as default};
