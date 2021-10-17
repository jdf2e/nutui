import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>CountUp \u6570\u5B57\u6EDA\u52A8</h1><h3>\u4ECB\u7ECD</h3><p>\u6570\u5B57\u6EDA\u52A8\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u6570\u5B57\u7684\u52A8\u6001\u6548\u679C\u5C55\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { CountUp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { CountUp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(CountUp);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span> <span class="hljs-attr">:init-num</span>=<span class="hljs-string">&#39;0&#39;</span> <span class="hljs-attr">:end-num</span>=<span class="hljs-string">&#39;200&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span> <span class="hljs-attr">:init-num</span>=<span class="hljs-string">&#39;150.00&#39;</span> <span class="hljs-attr">:end-num</span>=<span class="hljs-string">&#39;0.00&#39;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;2.62&#39;</span> <span class="hljs-attr">:to-fixed</span>=<span class="hljs-string">&#39;2&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span> <span class="hljs-attr">:init-num</span>=<span class="hljs-string">&#39;1000.00&#39;</span> <span class="hljs-attr">:end-num</span>=<span class="hljs-string">&#39;0.00&#39;</span> <span class="hljs-attr">:speed</span>=<span class="hljs-string">&#39;6.3&#39;</span> <span class="hljs-attr">:start-flag</span>=<span class="hljs-string">&#39;startNum&#39;</span> <span class="hljs-attr">:to-fixed</span>=<span class="hljs-string">&#39;2&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>
</code></pre><h2>\u6570\u5B57\u6EDA\u52A8</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span> <span class="hljs-attr">:scrolling</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:init-num</span>=<span class="hljs-string">&#39;17.618&#39;</span> <span class="hljs-attr">:during</span>=<span class="hljs-string">&quot;600&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>
</code></pre><h2>\u81EA\u5B9A\u4E49\u6570\u5B57\u56FE\u7247\u5C55\u793A</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span>
    <span class="hljs-attr">:custom-change-num</span>=<span class="hljs-string">&quot;customNumber&quot;</span>
    <span class="hljs-attr">:custom-bg-img</span>=<span class="hljs-string">&quot;bgImage&quot;</span>
    <span class="hljs-attr">:custom-spac-num</span>=<span class="hljs-string">&quot;11&quot;</span>
    <span class="hljs-attr">:num-width</span>=<span class="hljs-string">&quot;33&quot;</span>
    <span class="hljs-attr">:num-height</span>=<span class="hljs-string">&quot;47&quot;</span>
    <span class="hljs-attr">:during</span>=<span class="hljs-string">&quot;5000&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">customNumber</span>: <span class="hljs-number">618</span>, 
            <span class="hljs-attr">bgImage</span>: <span class="hljs-string">&#39;https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png&#39;</span>
        };
    },
    <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">run</span>(<span class="hljs-params"></span>)</span> {
            <span class="hljs-keyword">let</span> timer = <span class="hljs-literal">null</span>;
            timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
                <span class="hljs-built_in">this</span>.customNumber = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * (<span class="hljs-number">700</span> - <span class="hljs-number">100</span> + <span class="hljs-number">1</span>) + <span class="hljs-number">100</span>);
            }, <span class="hljs-number">5000</span>);
        }
    },
    <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-built_in">this</span>.run();
    }
};
</code></pre><h2>\u62BD\u5956</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-countup</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countup-machine&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;machine&quot;</span>
    <span class="hljs-attr">:machine-num</span>=<span class="hljs-string">&quot;machineNum&quot;</span>
    <span class="hljs-attr">:machine-prize-num</span>=<span class="hljs-string">&quot;5&quot;</span>
    <span class="hljs-attr">:machine-prize-level</span>=<span class="hljs-string">&quot;prizeLevel&quot;</span>
    <span class="hljs-attr">:custom-bg-img</span>=<span class="hljs-string">&quot;bgImage&quot;</span>
    <span class="hljs-attr">:num-width</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">:num-height</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">:during</span>=<span class="hljs-string">&quot;3000&quot;</span>
    @<span class="hljs-attr">scroll-end</span>=<span class="hljs-string">&quot;scrollAniEnd&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-countup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;startRole&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;startFlag&quot;</span>&gt;</span>\u62BD\u5956<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">return</span> {
            <span class="hljs-attr">startFlag</span>: <span class="hljs-literal">false</span>,
            <span class="hljs-attr">machineNum</span>: <span class="hljs-number">3</span>,
            <span class="hljs-attr">bgImage</span>: <span class="hljs-string">&#39;https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png&#39;</span>,
            <span class="hljs-attr">prizeLevel</span>: <span class="hljs-number">0</span>
        };
    },
    <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">startRole</span>(<span class="hljs-params"></span>)</span> {
            <span class="hljs-built_in">this</span>.prizeLevel = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">5</span> + <span class="hljs-number">1</span>);
            <span class="hljs-built_in">this</span>.startFlag = <span class="hljs-literal">true</span>;
            <span class="hljs-built_in">this</span>.$refs[<span class="hljs-string">&#39;countup-machine&#39;</span>].machineLuck();
        },
        <span class="hljs-function"><span class="hljs-title">scrollAniEnd</span>(<span class="hljs-params"></span>)</span> {
            <span class="hljs-built_in">this</span>.$toast.text(<span class="hljs-string">&#39;\u606D\u559C\u4E2D\u5956\uFF01\uFF01\uFF01&#39;</span>);
            <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
                <span class="hljs-built_in">this</span>.startFlag = <span class="hljs-literal">false</span>;
            }, <span class="hljs-number">300</span>);
        }
    }
};
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>init-num</td><td>\u521D\u59CB\u6570\u5B57</td><td>Number</td><td>0</td></tr><tr><td>end-num</td><td>\u7ED3\u675F\u6570\u5B57</td><td>Number</td><td>0</td></tr><tr><td>speed</td><td>\u95F4\u9694\u6570\u5B57\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u57FA\u672C\u7528\u6CD5</td><td>Number</td><td>1</td></tr><tr><td>to-fixed</td><td>\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u51E0\u4F4D</td><td>Number</td><td>\u4EE5\u4F20\u5165\u7684\u6570\u5B57\u4E3A\u51C6</td></tr><tr><td>start-flag</td><td>\u89E6\u53D1\u6570\u5B57\u6EDA\u52A8\u7684\u6807\u8BC6</td><td>Boolean</td><td>true</td></tr><tr><td>during</td><td>\u6EDA\u52A8\u4E00\u6B21\u8FD0\u884C\u65F6\u95F4</td><td>Number</td><td>1000</td></tr><tr><td>num-width</td><td>\u6570\u5B57\u5BBD\u5EA6\uFF0C\u5E38\u7528\u4E8E\u81EA\u5B9A\u4E49\u65E0\u7F1D\u6EDA\u52A8</td><td>Number</td><td>20</td></tr><tr><td>num-height</td><td>\u6570\u5B57\u9AD8\u5EA6\uFF0C\u5E38\u7528\u4E8E\u81EA\u5B9A\u4E49\u65E0\u7F1D\u6EDA\u52A8\uFF08\u62BD\u5956\u529F\u80FD\u5FC5\u4F20\uFF09</td><td>Number</td><td>20</td></tr><tr><td>scrolling</td><td>\u7528\u4E8E\u6570\u5B57\u6EDA\u52A8\u5C55\u793A</td><td>Boolean</td><td>false</td></tr><tr><td>custom</td><td>\u7528\u4E8E\u81EA\u5B9A\u4E49\u56FE\u7247\u6570\u5B57\u6EDA\u52A8</td><td>Boolean</td><td>false</td></tr><tr><td>custom-change-num</td><td>\u8981\u53D8\u5316\u7684\u6570\u5B57\uFF08\u7528\u4E8E\u81EA\u5B9A\u4E49\u56FE\u7247,initNum\\endNum\u5728\u6B64\u65E0\u6548\uFF09</td><td>Number</td><td>1</td></tr><tr><td>custom-bg-img</td><td>\u81EA\u5B9A\u4E49\u56FE\u7247\uFF08\u5EFA\u8BAE\u4F7F\u7528\u96EA\u78A7\u56FE\u5B9E\u73B0\uFF0C\u4F7F\u7528\u62BD\u5956\u529F\u80FD\u5FC5\u987B\u4F7F\u7528\u96EA\u78A7\u56FE\uFF09</td><td>-</td><td>-</td></tr><tr><td>custom-spac-num</td><td>\u56FE\u7247\u4E2D\u6570\u5B57\u4E4B\u95F4\u53EF\u80FD\u4F1A\u5B58\u5728\u95F4\u8DDD</td><td>Number</td><td>0</td></tr><tr><td>type</td><td>\u4F7F\u7528\u62BD\u5956\u529F\u80FD\u5FC5\u4F20\u201Cmachine\u201D</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>machine-prize-num</td><td>\u5956\u54C1\u4E2A\u6570\uFF0C\u4E00\u5171\u591A\u5C11\u4E2A\u5956\u54C1\uFF0C\u5FC5\u4F20</td><td>number</td><td>4</td></tr><tr><td>machine-num</td><td>\u62BD\u5956\u4F4D\uFF0C\u5373\u6EDA\u52A8\u51E0\u4E2A\uFF0C\u5FC5\u4F20</td><td>number</td><td>3</td></tr><tr><td>machine-prize-level</td><td>\u4E2D\u5956\u56FE\u6807\uFF0C\u56FE\u6807\u5728\u96EA\u78A7\u56FE\u4E2D\u7684\u4F4D\u7F6E</td><td>number</td><td>0</td></tr><tr><td>machine-trun-more</td><td>\u6EDA\u52A8\u5708\u6570</td><td>number</td><td>0</td></tr></tbody></table><blockquote><p>\u8BF4\u660E\uFF1A\u62BD\u5956\u529F\u80FD\u9700\u8981\u7ED3\u5408\u56FE\u6807\u4F4D\u7F6E\u8BA1\u7B97\uFF0C\u6545\u9700\u4F20\u5165\u96EA\u78A7\u56FE\u4E2D\u5355\u4E2A\u56FE\u6807\u7684\u9AD8\u5EA6 num-height\uFF1B\u4E2D\u5956\u5956\u54C1\u6839\u636E\u96EA\u78A7\u56FE\u4E2D\u7684\u5956\u54C1\u4F4D\u6570\u6765\u5B9A\u4F4D\uFF0C\u4ECE 1 \u5230 N\uFF1B</p></blockquote><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>scroll-end</td><td>\u6EDA\u52A8\u7ED3\u675F\u540E\u56DE\u8C03\u51FD\u6570</td><td>-</td></tr></tbody></table>`,21),c=[p],o={setup(r,{expose:s}){return s({frontmatter:{}}),(e,d)=>(n(),a("div",l,c))}};export{o as default};
