import{e as a,o as n,G as t}from"./vendor.bd251973.js";const l={class:"markdown-body"},p=t(`<h1>Address \u5730\u5740</h1><h3>\u4ECB\u7ECD</h3><p>\u6309\u9700\u52A0\u8F7D\u8BF7\u52A0\u8F7D\u5BF9\u5E94\u4F9D\u8D56\u7EC4\u4EF6 Icon Popup Elevator</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Address, Popup, Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Address, Popup, Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Address);
app.use(Popup);
app.use(Elevator);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u5740</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddress&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopup&quot;</span>
    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>
    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>
    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>
    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">custom-address-title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> showPopup = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> address = reactive({
      <span class="hljs-attr">province</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span> }
      ],
      <span class="hljs-attr">city</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span> }
      ],
      <span class="hljs-attr">country</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span> }
      ],
      <span class="hljs-attr">town</span>:[]
    })

    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u5730\u5740&#39;</span>)

    <span class="hljs-keyword">const</span> showAddress = <span class="hljs-function">() =&gt;</span> {
      showPopup.value = !showPopup.value;
    };

    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> name = address[cal.next]
      <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
        showPopup.value = <span class="hljs-literal">false</span>;
      }
    };
    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(val);
      text.value = val.data.addressStr;
    };

    <span class="hljs-keyword">return</span> { showPopup, text, showAddress, onChange, close, ...toRefs(address) };
}
</code></pre><h3>\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u57402</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;custom2&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddress&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopup&quot;</span>
    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>
    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>
    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>
    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">custom-address-title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> showPopup = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> address = reactive({
      <span class="hljs-attr">province</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;G&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;J&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Z&#39;</span> }
      ],
      <span class="hljs-attr">city</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> }
      ],
      <span class="hljs-attr">country</span>: [
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> }
      ],
      <span class="hljs-attr">town</span>:[]
    })

    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u5730\u5740&#39;</span>)

    <span class="hljs-keyword">const</span> showAddress = <span class="hljs-function">() =&gt;</span> {
      showPopup.value = !showPopup.value;
    };

    <span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> name = address[cal.next]
      <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
        showPopup.value = <span class="hljs-literal">false</span>;
      }
    };
    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(val);
      text.value = val.data.addressStr;
    };

    <span class="hljs-keyword">return</span> { showPopup, text, showAddress, onChange, close, ...toRefs(address) };
}
</code></pre><h3>\u9009\u62E9\u5DF2\u6709\u5730\u5740</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddressExist&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupExist&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    <span class="hljs-attr">:exist-address</span>=<span class="hljs-string">&quot;existAddress&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">:is-show-custom-address</span>=<span class="hljs-string">&quot;false&quot;</span>
    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected&quot;</span>
    <span class="hljs-attr">exist-address-title</span>=<span class="hljs-string">&quot;\u914D\u9001\u81F3&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> showPopupExist = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> existAddress = ref([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u57CE\u533A&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7535\u996D\u9505&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u6276\u7EE5\u53BF&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u53D1\u5927\u6C34\u6BD4 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u653E\u5230&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u5E7F\u5B81\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u8FD8\u662F\u60F3\u5427\u767E\u5EA6\u5427 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7814\u53D1&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    ]);

    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u5730\u5740&#39;</span>)

    <span class="hljs-keyword">const</span> showAddressExist = <span class="hljs-function">() =&gt;</span> {
      showPopupExist.value = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {
        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } <span class="hljs-keyword">else</span> {
        text.value = val.data.addressStr;
      }
    };

    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(prevExistAdd);
      <span class="hljs-built_in">console</span>.log(nowExistAdd);
    };

    <span class="hljs-keyword">return</span> { showPopupExist, existAddress, showAddressExist, text, close, selected };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u6807</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCustomImg&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupCustomImg&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    <span class="hljs-attr">:existAddress</span>=<span class="hljs-string">&quot;existAddress&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    <span class="hljs-attr">:is-show-custom-address</span>=<span class="hljs-string">&quot;false&quot;</span>
    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected3&quot;</span>
    <span class="hljs-attr">:default-icon</span>=<span class="hljs-string">&quot;defaultIcon&quot;</span>
    <span class="hljs-attr">:selected-icon</span>=<span class="hljs-string">&quot;selectedIcon&quot;</span>
    <span class="hljs-attr">:close-btn-icon</span>=<span class="hljs-string">&quot;closeBtnIcon&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> showPopupCustomImg = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> icon = reactive({
      <span class="hljs-attr">selectedIcon</span>: <span class="hljs-string">&#39;heart-fill&#39;</span>,
      <span class="hljs-attr">defaultIcon</span>: <span class="hljs-string">&#39;heart1&#39;</span>,
      <span class="hljs-attr">closeBtnIcon</span>: <span class="hljs-string">&#39;close&#39;</span>,
      <span class="hljs-attr">backBtnIcon</span>: <span class="hljs-string">&#39;left&#39;</span>
    });
    <span class="hljs-keyword">const</span> existAddress = ref([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u57CE\u533A&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7535\u996D\u9505&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u6276\u7EE5\u53BF&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u53D1\u5927\u6C34\u6BD4 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u653E\u5230&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u5E7F\u5B81\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },{
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u8FD8\u662F\u60F3\u5427\u767E\u5EA6\u5427 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7814\u53D1&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    ]);

    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u5730\u5740&#39;</span>)

    <span class="hljs-keyword">const</span> showCustomImg = <span class="hljs-function">() =&gt;</span> {
      showPopupCustomImg.value = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {
        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } <span class="hljs-keyword">else</span> {
        text.value = val.data.addressStr;
      }
    };

    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(prevExistAdd);
      <span class="hljs-built_in">console</span>.log(nowExistAdd);
    };

    <span class="hljs-keyword">return</span> { showPopupCustomImg, existAddress, text, showCustomImg, close, selected, ...toRefs(icon) };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">is-link</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddressOther&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showPopupOther&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    <span class="hljs-attr">:exist-address</span>=<span class="hljs-string">&quot;existAddress&quot;</span>
    <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;province&quot;</span>
    <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;city&quot;</span>
    <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;country&quot;</span>
    <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;town&quot;</span>
    <span class="hljs-attr">:back-btn-icon</span>=<span class="hljs-string">&quot;backBtnIcon&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
    @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selected&quot;</span>
    <span class="hljs-attr">custom-and-exist-title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5176\u4ED6\u5730\u5740&quot;</span>
    @<span class="hljs-attr">switch-module</span>=<span class="hljs-string">&quot;switchModule&quot;</span>
    @<span class="hljs-attr">close-mask</span>=<span class="hljs-string">&quot;closeMask&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> showPopupOther = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> address = reactive({
      <span class="hljs-attr">province</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span> }
      ],
      <span class="hljs-attr">city</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span> }
      ],
      <span class="hljs-attr">country</span>:[
        { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span> },
        { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span> }
      ],
      <span class="hljs-attr">town</span>:[]
    })
    <span class="hljs-keyword">const</span> existAddress = ref([
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;th &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u57CE\u533A&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12_ &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7535\u996D\u9505&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u6276\u7EE5\u53BF&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u53D1\u5927\u6C34\u6BD4 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u653E\u5230&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u5E7F\u5B81\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      },
      {
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u8FD8\u662F\u60F3\u5427\u767E\u5EA6\u5427 &#39;</span>,
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u7814\u53D1&#39;</span>,
        <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>,
        <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>
      }
    ]);
    <span class="hljs-keyword">const</span> backBtnIcon = ref(<span class="hljs-string">&#39;left&#39;</span>)
    <span class="hljs-keyword">const</span> text = ref(<span class="hljs-string">&#39;\u8BF7\u9009\u62E9\u5730\u5740&#39;</span>)

    <span class="hljs-keyword">const</span> showAddressOther = <span class="hljs-function">() =&gt;</span> {
      showPopupOther.value = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> close = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;exist&#39;</span>) {
        <span class="hljs-keyword">const</span> {provinceName,cityName,countyName,townName,addressDetail} = val.data
        text.value = provinceName + cityName + countyName + townName + addressDetail;
      } <span class="hljs-keyword">else</span> {
        text.value = val.data.addressStr;
      }
    };

    <span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd, nowExistAdd, arr</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(prevExistAdd);
      <span class="hljs-built_in">console</span>.log(nowExistAdd);
    };

    <span class="hljs-keyword">const</span> switchModule = <span class="hljs-function"><span class="hljs-params">cal</span> =&gt;</span> {
      <span class="hljs-keyword">if</span> (cal.type == <span class="hljs-string">&#39;custom&#39;</span>) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u201C\u9009\u62E9\u5176\u4ED6\u5730\u5740\u201D\u6309\u94AE&#39;</span>);
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u81EA\u5B9A\u4E49\u5730\u5740\u5DE6\u4E0A\u89D2\u7684\u8FD4\u56DE\u6309\u94AE&#39;</span>);
      }
    };

    <span class="hljs-keyword">const</span> closeMask = <span class="hljs-function"><span class="hljs-params">val</span> =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u5173\u95ED\u5F39\u5C42&#39;</span>, val);
    };

    <span class="hljs-keyword">return</span> { showPopupOther, text, showAddressOther, switchModule, closeMask, close, selected, backBtnIcon, ...toRefs(address) };
}
</code></pre><h1>API</h1><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u6253\u5F00\u5730\u5740\u9009\u62E9</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>type</td><td>\u5730\u5740\u9009\u62E9\u7C7B\u578B exist/custom/custom2</td><td>String</td><td>\u2018custom\u2019</td></tr><tr><td>province</td><td>\u7701\uFF0C\u6BCF\u4E2A\u7701\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>city</td><td>\u5E02\uFF0C\u6BCF\u4E2A\u5E02\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>country</td><td>\u53BF\uFF0C\u6BCF\u4E2A\u53BF\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>town</td><td>\u4E61/\u9547\uFF0C\u6BCF\u4E2A\u4E61/\u9547\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>height</td><td>\u5F39\u5C42\u4E2D\u5185\u5BB9\u5BB9\u5668\u7684\u9AD8\u5EA6\uFF0C\u4EC5\u5728type=&quot;custom2&quot;\u65F6\u6709\u6548</td><td>String\u3001Number</td><td>\u2018200px\u2019</td></tr><tr><td>exist-address</td><td>\u5DF2\u5B58\u5728\u5730\u5740\u5217\u8868\uFF0C\u6BCF\u4E2A\u5730\u5740\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u4F20\u503CprovinceName\u3001cityName\u3001countyName\u3001townName\u3001addressDetail\u3001selectedAddress\uFF08\u5B57\u6BB5\u89E3\u91CA\u89C1\u4E0B\uFF09</td><td>Array</td><td>[]</td></tr><tr><td>default-icon</td><td>\u5DF2\u6709\u5730\u5740\u5217\u8868\u9ED8\u8BA4\u56FE\u6807\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>selected-icon</td><td>\u5DF2\u6709\u5730\u5740\u5217\u8868\u9009\u4E2D\u56FE\u6807\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>close-btn-icon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u5F39\u6846\u6309\u94AE\u56FE\u6807</td><td>string</td><td>-</td></tr><tr><td>back-btn-icon</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362\u65F6\uFF0C\u81EA\u5B9A\u4E49\u8FD4\u56DE\u7684\u6309\u94AE\u56FE\u6807</td><td>String</td><td>-</td></tr><tr><td>is-show-custom-address</td><td>\u662F\u5426\u53EF\u4EE5\u5207\u6362\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>Boolean</td><td>true</td></tr><tr><td>custom-address-title</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\u6587\u6848\uFF0Ctype=\u2018custom\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A\u2019</td></tr><tr><td>exist-address-title</td><td>\u5DF2\u6709\u5730\u5740\u6587\u6848 \uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u914D\u9001\u81F3\u2019</td></tr><tr><td>custom-and-exist-title</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362\u6309\u94AE\u6587\u6848 \uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u9009\u62E9\u5176\u4ED6\u5730\u5740\u2019</td></tr></tbody></table><ul><li>provinceName \u7701\u7684\u540D\u5B57</li><li>cityName \u5E02\u7684\u540D\u5B57</li><li>countyName \u53BF\u7684\u540D\u5B57</li><li>townName \u4E61/\u9547\u7684\u540D\u5B57</li><li>addressDetail \u5177\u4F53\u5730\u5740</li><li>selectedAddress \u5B57\u6BB5\u7528\u4E8E\u5224\u65AD\u5F53\u524D\u5730\u5740\u5217\u8868\u7684\u9009\u4E2D\u9879\u3002</li></ul><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u81EA\u5B9A\u4E49\u9009\u62E9\u5730\u5740\u65F6\uFF0C\u9009\u62E9\u5730\u533A\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 onChange</td></tr><tr><td>selected</td><td>\u9009\u62E9\u5DF2\u6709\u5730\u5740\u5217\u8868\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 selected</td></tr><tr><td>close</td><td>\u5730\u5740\u9009\u62E9\u5F39\u6846\u5173\u95ED\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 close</td></tr><tr><td>close-mask</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u70B9\u51FB\u53F3\u4E0A\u89D2\u53C9\u53F7\u5173\u95ED\u65F6\u89E6\u53D1</td><td>{closeWay:\u2018mask\u2019/\u2018cross\u2019}</td></tr><tr><td>switch-module</td><td>\u70B9\u51FB\u2018\u9009\u62E9\u5176\u4ED6\u5730\u5740\u2019\u6216\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\u5DE6\u4E0A\u89D2\u8FD4\u56DE\u6309\u94AE\u89E6\u53D1</td><td>{type:\u2018exist\u2019/\u2018custom\u2019/\u2018custom2\u2019}</td></tr></tbody></table><h2>change \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>custom</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF</td><td>province(\u7701) / city(\u5E02) / country(\u53BF) / town(\u4E61)</td></tr><tr><td>next</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF\u7684\u4E0B\u4E00\u7EA7</td><td>province(\u7701) / city(\u5E02) / country(\u53BF) / town(\u4E61)</td></tr><tr><td>value</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF\u7684\u503C\uFF08\u8FD4\u56DE\u4F20\u5165\u7684\u503C\uFF09</td><td>{}</td></tr></tbody></table><h2>selected \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08prevExistAdd\uFF09</td><td>\u9009\u62E9\u524D\u9009\u4E2D\u7684\u5730\u5740</td><td>{}</td></tr><tr><td>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08nowExistAdd\uFF09</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u5730\u5740</td><td>{}</td></tr><tr><td>\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF08arr\uFF09</td><td>\u9009\u62E9\u5B8C\u4E4B\u540E\u7684\u5DF2\u6709\u5730\u5740\u5217\u8868\uFF08selectedAddress \u503C\u53D1\u751F\u6539\u53D8\uFF09</td><td>{}</td></tr></tbody></table><h2>close \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5730\u5740\u9009\u62E9\u7C7B\u578B exist/custom/custom2</td><td>exist/custom/custom2</td></tr><tr><td>data</td><td>\u9009\u62E9\u5730\u5740\u7684\u503C,custom \u65F6\uFF0CaddressStr \u4E3A\u9009\u62E9\u7684\u5730\u5740\u7EC4\u5408</td><td>{}</td></tr></tbody></table>`,32),c=[p],o={setup(e,{expose:s}){return s({frontmatter:{}}),(h,j)=>(n(),a("div",l,c))}};export{o as default};
