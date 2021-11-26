import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Imagepreview \u56FE\u7247\u9884\u89C8</h1><h3>\u4ECB\u7ECD</h3><p>\u652F\u6301\u5168\u5C4F\u9884\u89C8\u89C6\u9891\u548C\u56FE\u7247\uFF0C\u53EF\u51FD\u6570\u5F0F\u8C03\u7528</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp, reactive, toRefs } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;


<span class="hljs-keyword">const</span> app = createApp();
app.use(ImagePreview);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepreview</span>
    <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showPreview&quot;</span>
    <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;imgData&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;hideFn&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5C55\u793A\u56FE\u7247\u9884\u89C8&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showFn&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
        <span class="hljs-attr">showPreview</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">imgData</span>: [
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
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
</code></pre><h3>\u8BBE\u7F6E\u521D\u59CB\u9875\u7801</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepreview</span>
    <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showPreview&quot;</span>
    <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;imgData&quot;</span>
    <span class="hljs-attr">:content-close</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">:init-no</span>=<span class="hljs-string">&quot;3&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;hideFn&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BBE\u7F6E\u521D\u59CB\u9875\u7801\u7684\u56FE\u7247\u9884\u89C8&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showFn&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
        <span class="hljs-attr">showPreview</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">imgData</span>: [
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
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
</code></pre><h3>\u8BBE\u7F6E\u8F6E\u64AD\u6307\u793A\u5668\u53CA\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepreview</span>
    <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showPreview&quot;</span>
    <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;imgData&quot;</span>
    <span class="hljs-attr">:pagination-visible</span>=<span class="hljs-string">&quot;true&quot;</span>
    <span class="hljs-attr">pagination-color</span>=<span class="hljs-string">&quot;red&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;hideFn&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BBE\u7F6E\u8F6E\u64AD\u6307\u793A\u5668\u53CA\u989C\u8272&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showFn&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
        <span class="hljs-attr">showPreview</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">imgData</span>: [
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
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
</code></pre><h3>\u89C6\u9891\u3001\u56FE\u7247\u9884\u89C8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-imagepreview</span>
    <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;showPreview&quot;</span>
    <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;imgData&quot;</span>
    <span class="hljs-attr">:videos</span>=<span class="hljs-string">&quot;videoData&quot;</span>      
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;hideFn&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u89C6\u9891\u3001\u56FE\u7247\u9884\u89C8&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showFn&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> resData = reactive({
        <span class="hljs-attr">showPreview</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">imgData</span>: [
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
            },
            {
                <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
            },
        ],
        <span class="hljs-attr">videoData</span>: [
            {
                <span class="hljs-attr">source</span>: {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4?Expires=3730193075&amp;AccessKey=3LoYX1dQWa6ZXzQl&amp;Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D&#39;</span>,
                    <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
                },
                <span class="hljs-attr">options</span>: {
                    <span class="hljs-attr">muted</span>: <span class="hljs-literal">true</span>,
                    <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>
                }
            },
            {
                <span class="hljs-attr">source</span>: {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;https://storage.jd.com/about/big-final.mp4?Expires=3730193075&amp;AccessKey=3LoYX1dQWa6ZXzQl&amp;Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D&#39;</span>,
                    <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;video/mp4&#39;</span>
                },
                <span class="hljs-attr">options</span>: {
                    <span class="hljs-attr">muted</span>: <span class="hljs-literal">true</span>,
                    <span class="hljs-attr">controls</span>: <span class="hljs-literal">true</span>
                }
            }
        ],
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
</code></pre><h3>\u51FD\u6570\u5F0F\u8C03\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">isLink</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u51FD\u6570\u5F0F\u8C03\u7528\u7684\u56FE\u7247\u9884\u89C8&quot;</span> <span class="hljs-attr">:showIcon</span>=<span class="hljs-string">&quot;true&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;fnShow&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
        <span class="hljs-keyword">const</span> resData = reactive({
            <span class="hljs-attr">imgData</span>: [
                {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg&#39;</span>,
                },
                {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png&#39;</span>,
                },
                {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg&#39;</span>,
                },
                {
                    <span class="hljs-attr">src</span>: <span class="hljs-string">&#39;//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg&#39;</span>,
                },
            ]
        });

        <span class="hljs-keyword">const</span> onClose = <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;imagepreview closed&#39;</span>);
        };

        <span class="hljs-keyword">const</span> fnShow = <span class="hljs-function">() =&gt;</span> {
        ImagePreview({
            <span class="hljs-attr">show</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">images</span>: resData.imgData,
            onClose
        })
        };
        
        <span class="hljs-keyword">return</span> {
            ...toRefs(resData),
            fnShow
        };
    },
}
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>show</td><td>\u662F\u5426\u5C55\u793A\u9884\u89C8\u56FE\u7247</td><td>Boolean</td><td>false</td></tr><tr><td>videos</td><td>\u9884\u89C8\u7684\u89C6\u9891\u6570\u7EC4\uFF08\u89C6\u9891\u81EA\u52A8\u653E\u5230\u56FE\u7247\u4E4B\u524D\uFF09</td><td>Array&lt;<code>Object</code>&gt;</td><td>[]</td></tr><tr><td>images</td><td>\u9884\u89C8\u56FE\u7247\u6570\u7EC4</td><td>Array&lt;<code>String</code>&gt;</td><td>[]</td></tr><tr><td>init-no</td><td>\u521D\u59CB\u9875\u7801</td><td>Number</td><td>1</td></tr><tr><td>pagination-visible</td><td>\u5206\u9875\u6307\u793A\u5668\u662F\u5426\u5C55\u793A</td><td>Boolean</td><td>false</td></tr><tr><td>pagination-color</td><td>\u5206\u9875\u6307\u793A\u5668\u9009\u4E2D\u7684\u989C\u8272</td><td>String</td><td>\u2018#fff\u2019</td></tr><tr><td>content-close</td><td>\u70B9\u51FB\u56FE\u7247\u53EF\u4EE5\u9000\u51FA\u9884\u89C8</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u5173\u95ED\u56FE\u7247\u9884\u89C8\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr></tbody></table>`,24),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,c))}};export{i as default};
