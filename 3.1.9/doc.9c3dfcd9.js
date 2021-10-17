import{e as a,o as n,G as t}from"./vendor.bd251973.js";const e={class:"markdown-body"},p=t(`<h1>Imagepreview \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u56FE\u7247\u9884\u89C8</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp, reactive, toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { ImagePreview, Swiper, SwiperItem, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { ImagePreview, Swiper, SwiperItem, Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;


<span class="hljs-keyword">const</span> app = createApp();
app.use(ImagePreview).use(Swiper).use(SwiperItem).use(Popup).use(Cell).use(Icon);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepreview</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showPreview&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;dataImgItem&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;hideFn&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5C55\u793A\u56FE\u7247\u9884\u89C8&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showFn&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
        <span class="hljs-attr">showPreview</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">dataImgItem</span>: [
            {
            <span class="hljs-attr">imgSrc</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
            },
            {
            <span class="hljs-attr">imgSrc</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
            },
            {
            <span class="hljs-attr">imgSrc</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
            },
            {
            <span class="hljs-attr">imgSrc</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
            },
        ]
    });

    <span class="hljs-keyword">const</span> showFn = <span class="hljs-function">() =&gt;</span> {
        resData.showPreview = <span class="hljs-literal">true</span>;
    }

    <span class="hljs-keyword">const</span> hideFn = <span class="hljs-function">() =&gt;</span> {
        resData.showPreview = <span class="hljs-literal">false</span>;
    }
    
    <span class="hljs-keyword">return</span> {
        ...toRefs(resData),
        showFn,
        hideFn
    };
},
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u9884\u89C8\u56FE\u7247</td><td>Boolean</td><td>false</td></tr><tr><td>images</td><td>\u9884\u89C8\u56FE\u7247\u6570\u7EC4</td><td>Array&lt;<code>String</code>&gt;</td><td>[]</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u5173\u95ED\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr></tbody></table>`,12),l=[p],d={setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(n(),a("div",e,l))}};export{d as default};
