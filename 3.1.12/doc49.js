import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Sku \u5546\u54C1\u89C4\u683C\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u6309\u9700\u52A0\u8F7D\u8BF7\u52A0\u8F7D\u5BF9\u5E94\u4F9D\u8D56\u7EC4\u4EF6\uFF1APopup\u3001InputNumber\u3001Price</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">//vue</span>
<span class="hljs-keyword">import</span> { Sku, Popup, InputNumber, Price } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { Sku, Popup, InputNumber, Price } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Sku);
app.use(Popup);
app.use(InputNumber);
app.use(Price);

</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-sku</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;base&quot;</span>
  <span class="hljs-attr">:sku</span>=<span class="hljs-string">&quot;sku&quot;</span>
  <span class="hljs-attr">:goods</span>=<span class="hljs-string">&quot;goods&quot;</span>
  @<span class="hljs-attr">selectSku</span>=<span class="hljs-string">&quot;selectSku&quot;</span>
  @<span class="hljs-attr">clickBtnOperate</span>=<span class="hljs-string">&quot;clickBtnOperate&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-sku</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> base = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">sku</span>: [
          <span class="hljs-comment">// \u5177\u4F53\u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        ],
      <span class="hljs-attr">goods</span>: {
          <span class="hljs-comment">// \u5177\u4F53\u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        }
    });

    onMounted(<span class="hljs-function">() =&gt;</span> {});
    <span class="hljs-comment">// \u5207\u6362\u89C4\u683C\u7C7B\u76EE</span>
    <span class="hljs-keyword">const</span> selectSku = <span class="hljs-function">(<span class="hljs-params">ss: string</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { sku, skuIndex, parentSku, parentIndex } = ss;
      <span class="hljs-keyword">if</span> (sku.disable) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      data.sku[parentIndex].list.forEach(<span class="hljs-function">(<span class="hljs-params">s</span>) =&gt;</span> {
        s.active = s.id == sku.id;
      });
      data.goods = {
        <span class="hljs-attr">skuId</span>: sku.id,
        <span class="hljs-attr">price</span>: <span class="hljs-string">&#39;4599.00&#39;</span>,
        <span class="hljs-attr">imagePath</span>:
          <span class="hljs-string">&#39;//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg&#39;</span> 
      };
    };
    <span class="hljs-comment">// \u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u89E6\u53D1</span>
    <span class="hljs-keyword">const</span> clickBtnOperate = <span class="hljs-function">(<span class="hljs-params">op:string</span>)=&gt;</span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u64CD\u4F5C\u6309\u94AE&#39;</span>,op)
    } 
    <span class="hljs-comment">// \u5173\u95ED\u5546\u54C1\u89C4\u683C\u5F39\u6846</span>
    <span class="hljs-keyword">const</span> close = <span class="hljs-function">()=&gt;</span>{}
    <span class="hljs-keyword">return</span> { base, selectSku, clickBtnOperate,close, ...toRefs(data) };
}
</code></pre><h3>\u4E0D\u53EF\u552E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-sku</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;notSell&quot;</span>
  <span class="hljs-attr">:sku</span>=<span class="hljs-string">&quot;skuData&quot;</span>
  <span class="hljs-attr">:goods</span>=<span class="hljs-string">&quot;goodsInfo&quot;</span>
  <span class="hljs-attr">:btnExtraText</span>=<span class="hljs-string">&quot;btnExtraText&quot;</span>
  @<span class="hljs-attr">changeStepper</span>=<span class="hljs-string">&quot;changeStepper&quot;</span>
  @<span class="hljs-attr">selectSku</span>=<span class="hljs-string">&quot;selectSku&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">sku-operate</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-box-dis&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u67E5\u770B\u76F8\u4F3C\u5546\u54C1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-box-dis&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u5230\u8D27\u901A\u77E5<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-sku</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> notSell = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">sku</span>: [
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        ],
      <span class="hljs-attr">goods</span>: {
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        }
    });

    <span class="hljs-keyword">const</span> btnExtraText = ref(<span class="hljs-string">&#39;\u62B1\u6B49\uFF0C\u6B64\u5546\u54C1\u5728\u6240\u9009\u533A\u57DF\u6682\u65E0\u5B58\u8D27&#39;</span>);
    <span class="hljs-comment">// inputNumber \u66F4\u6539</span>
    <span class="hljs-keyword">const</span> changeStepper = <span class="hljs-function">(<span class="hljs-params">count: number</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u8D2D\u4E70\u6570\u91CF&#39;</span>, count);
    };

    <span class="hljs-comment">// \u5207\u6362\u89C4\u683C\u7C7B\u76EE</span>
    <span class="hljs-keyword">const</span> selectSku = <span class="hljs-function">(<span class="hljs-params">ss: string</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { sku, skuIndex, parentSku, parentIndex } = ss;
      <span class="hljs-keyword">if</span> (sku.disable) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      data.sku[parentIndex].list.forEach(<span class="hljs-function">(<span class="hljs-params">s</span>) =&gt;</span> {
        s.active = s.id == sku.id;
      });
      data.goods = {
        <span class="hljs-attr">skuId</span>: sku.id,
        <span class="hljs-attr">price</span>: <span class="hljs-string">&#39;4599.00&#39;</span>,
        <span class="hljs-attr">imagePath</span>:
          <span class="hljs-string">&#39;//img14.360buyimg.com/n4/jfs/t1/216079/14/3895/201095/618a5c0cEe0b9e2ba/cf5b98fb6128a09e.jpg&#39;</span> 
      };
    };
    <span class="hljs-comment">// \u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u89E6\u53D1</span>
    <span class="hljs-keyword">const</span> clickBtnOperate = <span class="hljs-function">(<span class="hljs-params">op:string</span>)=&gt;</span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u64CD\u4F5C\u6309\u94AE&#39;</span>,op)
    } 
    <span class="hljs-keyword">return</span> { notSell, changeStepper,selectSku,btnExtraText,...toRefs(data) };
}
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.sku-operate-box</span> {
  <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">8px</span> <span class="hljs-number">10px</span>;
  <span class="hljs-attribute">box-sizing</span>: border-box;

  <span class="hljs-selector-class">.sku-operate-box-dis</span>{
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">flex-shrink</span>: <span class="hljs-number">1</span>;
    &amp;<span class="hljs-selector-pseudo">:first</span>-child{
      <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">18px</span>;
    }
  }
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u6B65\u8FDB\u5668</h3><p>\u53EF\u4EE5\u6309\u7167\u9700\u6C42\u914D\u7F6E\u6570\u5B57\u8F93\u5165\u6846\u7684\u6700\u5927\u503C\u3001\u6700\u5C0F\u503C\u3001\u6587\u6848\u7B49</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-sku</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;customStepper&quot;</span>
  <span class="hljs-attr">:sku</span>=<span class="hljs-string">&quot;sku&quot;</span>
  <span class="hljs-attr">:goods</span>=<span class="hljs-string">&quot;goods&quot;</span>
  <span class="hljs-attr">:showSaleLimit</span>=<span class="hljs-string">&quot;true&quot;</span>
  <span class="hljs-attr">:stepperMax</span>=<span class="hljs-string">&quot;7&quot;</span>
  <span class="hljs-attr">:stepperMin</span>=<span class="hljs-string">&quot;2&quot;</span>
  <span class="hljs-attr">:stepperExtraText</span>=<span class="hljs-string">&quot;stepperExtraText&quot;</span>
  @<span class="hljs-attr">changeStepper</span>=<span class="hljs-string">&quot;changeStepper&quot;</span>
  @<span class="hljs-attr">overLimit</span>=<span class="hljs-string">&quot;overLimit&quot;</span>
  <span class="hljs-attr">:btnOptions</span>=<span class="hljs-string">&quot;[&#39;buy&#39;, &#39;cart&#39;]&quot;</span>
  @<span class="hljs-attr">selectSku</span>=<span class="hljs-string">&quot;selectSku&quot;</span>
  @<span class="hljs-attr">clickBtnOperate</span>=<span class="hljs-string">&quot;clickBtnOperate&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-sku</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> customStepper = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">sku</span>: [
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        ],
      <span class="hljs-attr">goods</span>: {
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        }
    });

    <span class="hljs-keyword">const</span> stepperExtraText = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-string">\`&lt;div style=&quot;width:100%;text-align:right;color:#F00&quot;&gt;2 \u4EF6\u8D77\u552E&lt;/div&gt;\`</span>
    };
    <span class="hljs-comment">// inputNumber \u66F4\u6539</span>
    <span class="hljs-keyword">const</span> changeStepper = <span class="hljs-function">(<span class="hljs-params">count: number</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u8D2D\u4E70\u6570\u91CF&#39;</span>, count);
    };

    <span class="hljs-comment">// inputNumber \u6781\u9650\u503C</span>
    <span class="hljs-keyword">const</span> overLimit = <span class="hljs-function">(<span class="hljs-params">val: any</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (val.action == <span class="hljs-string">&#39;reduce&#39;</span>) {
        Toast.text(<span class="hljs-string">\`\u81F3\u5C11\u4E70<span class="hljs-subst">\${val.value}</span>\u4EF6\u54E6\`</span>);
      } <span class="hljs-keyword">else</span> {
        Toast.text(<span class="hljs-string">\`\u6700\u591A\u4E70<span class="hljs-subst">\${val.value}</span>\u4EF6\u54E6\`</span>);
      }
    };
    <span class="hljs-comment">// \u5207\u6362\u89C4\u683C\u7C7B\u76EE</span>
    <span class="hljs-keyword">const</span> selectSku = <span class="hljs-function">(<span class="hljs-params">ss: string</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { sku, skuIndex, parentSku, parentIndex } = ss;
      <span class="hljs-keyword">if</span> (sku.disable) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      data.sku[parentIndex].list.forEach(<span class="hljs-function">(<span class="hljs-params">s</span>) =&gt;</span> {
        s.active = s.id == sku.id;
      });
      data.goods = {
        <span class="hljs-attr">skuId</span>: sku.id,
        <span class="hljs-attr">price</span>: <span class="hljs-string">&#39;4599.00&#39;</span>,
        <span class="hljs-attr">imagePath</span>:
          <span class="hljs-string">&#39;//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg&#39;</span> 
      };
    };
    <span class="hljs-comment">// \u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u89E6\u53D1</span>
    <span class="hljs-keyword">const</span> clickBtnOperate = <span class="hljs-function">(<span class="hljs-params">op:string</span>)=&gt;</span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u64CD\u4F5C\u6309\u94AE&#39;</span>,op)
    } 
    <span class="hljs-keyword">return</span> { overLimit, changeStepper,selectSku, clickBtnOperate,stepperExtraText,...toRefs(data) };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u63D2\u69FD</h3><p>Sku \u7EC4\u4EF6\u9ED8\u8BA4\u5212\u5206\u4E3A\u82E5\u5E72\u533A\u57DF\uFF0C\u8FD9\u4E9B\u533A\u57DF\u90FD\u5B9A\u4E49\u6210\u4E86\u63D2\u69FD\uFF0C\u53EF\u4EE5\u6309\u7167\u9700\u6C42\u8FDB\u884C\u66FF\u6362\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-sku</span>
    <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;customBySlot&quot;</span>
    <span class="hljs-attr">:sku</span>=<span class="hljs-string">&quot;sku&quot;</span>
    <span class="hljs-attr">:goods</span>=<span class="hljs-string">&quot;goods&quot;</span>
    <span class="hljs-attr">:btnOptions</span>=<span class="hljs-string">&quot;[&#39;buy&#39;, &#39;cart&#39;]&quot;</span>
    @<span class="hljs-attr">selectSku</span>=<span class="hljs-string">&quot;selectSku&quot;</span>
    @<span class="hljs-attr">clickBtnOperate</span>=<span class="hljs-string">&quot;clickBtnOperate&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close()&quot;</span>
&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5546\u54C1\u5C55\u793A\u533A\uFF0C\u4EF7\u683C\u533A\u57DF --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">sku-header-price</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-price</span> <span class="hljs-attr">:price</span>=<span class="hljs-string">&quot;goodsInfo.price&quot;</span> <span class="hljs-attr">:needSymbol</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">:thousands</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">nut-price</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tag&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span> 
    <span class="hljs-comment">&lt;!-- \u5546\u54C1\u5C55\u793A\u533A\uFF0C\u7F16\u53F7\u533A\u57DF --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">sku-header-extra</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-sku-header-right-extra&quot;</span>&gt;</span>\u91CD\u91CF\uFF1A0.1kg  \u7F16\u53F7\uFF1A{{skuId}}  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span> 
    <span class="hljs-comment">&lt;!-- sku \u5C55\u793A\u533A\u4E0A\u65B9\u4E0E\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\u4E0B\u65B9\u533A\u57DF\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">sku-select-top</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;address&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;box-shadow:none;padding:13px 0&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9001\u81F3&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;addressDesc&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showAddressPopup=true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5E95\u90E8\u6309\u94AE\u64CD\u4F5C\u533A --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">sku-operate</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-item&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u52A0\u5165\u8D2D\u7269\u8F66<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;sku-operate-item&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u7ACB\u5373\u8D2D\u4E70<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-sku</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span>
  <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;showAddressPopup&quot;</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
  <span class="hljs-attr">:exist-address</span>=<span class="hljs-string">&quot;existAddress&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">:is-show-custom-address</span>=<span class="hljs-string">&quot;false&quot;</span>
  @<span class="hljs-attr">selected</span>=<span class="hljs-string">&quot;selectedAddress&quot;</span>
  <span class="hljs-attr">exist-address-title</span>=<span class="hljs-string">&quot;\u914D\u9001\u81F3&quot;</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> customBySlot = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> showAddressPopup = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> data = reactive({
      <span class="hljs-attr">sku</span>: [
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        ],
      <span class="hljs-attr">goods</span>: {
          <span class="hljs-comment">// \u6570\u636E\u7ED3\u6784\u89C1\u4E0B\u65B9\u6587\u6863</span>
        }
    });
    <span class="hljs-keyword">const</span> addressDesc = ref(<span class="hljs-string">&#39;(\u914D\u9001\u5730\u4F1A\u5F71\u54CD\u5E93\u5B58\uFF0C\u8BF7\u5148\u786E\u8BA4)&#39;</span>);
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
        <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;12 &#39;</span>,
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

    <span class="hljs-comment">// \u5207\u6362\u89C4\u683C\u7C7B\u76EE</span>
    <span class="hljs-keyword">const</span> selectSku = <span class="hljs-function">(<span class="hljs-params">ss: string</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { sku, skuIndex, parentSku, parentIndex } = ss;
      <span class="hljs-keyword">if</span> (sku.disable) <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      data.sku[parentIndex].list.forEach(<span class="hljs-function">(<span class="hljs-params">s</span>) =&gt;</span> {
        s.active = s.id == sku.id;
      });
      data.goods = {
        <span class="hljs-attr">skuId</span>: sku.id,
        <span class="hljs-attr">price</span>: <span class="hljs-string">&#39;6002.10&#39;</span>,
        <span class="hljs-attr">imagePath</span>:
          <span class="hljs-string">&#39;//img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg&#39;</span> 
      };
    };
    <span class="hljs-keyword">const</span> selectedAddress = <span class="hljs-function">(<span class="hljs-params">prevExistAdd: any, nowExistAdd: any</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> { provinceName, countyName, cityName } = nowExistAdd;
      addressDesc.value = <span class="hljs-string">\`<span class="hljs-subst">\${provinceName}</span><span class="hljs-subst">\${countyName}</span><span class="hljs-subst">\${cityName}</span>\`</span>;
    };
    <span class="hljs-comment">// \u5E95\u90E8\u64CD\u4F5C\u6309\u94AE\u89E6\u53D1</span>
    <span class="hljs-keyword">const</span> clickBtnOperate = <span class="hljs-function">(<span class="hljs-params">op:string</span>)=&gt;</span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u64CD\u4F5C\u6309\u94AE&#39;</span>,op)
    } 
    <span class="hljs-keyword">return</span> { customBySlot, selectSku, clickBtnOperate,existAddress,addressDesc,selectedAddress,...toRefs(data) };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:visible</td><td>\u662F\u5426\u663E\u793A\u5546\u54C1\u89C4\u683C\u5F39\u6846</td><td>boolean</td><td>false</td></tr><tr><td>sku</td><td>\u5546\u54C1 sku \u6570\u636E</td><td>Array</td><td>[]</td></tr><tr><td>goods</td><td>\u5546\u54C1\u4FE1\u606F</td><td>Object</td><td>-</td></tr><tr><td>stepper-max</td><td>\u8BBE\u7F6E inputNumber \u6700\u5927\u503C</td><td>[String, Number]</td><td>99999</td></tr><tr><td>stepper-min</td><td>\u8BBE\u7F6E inputNumber \u6700\u5C0F\u503C</td><td>[String, Number]</td><td>1</td></tr><tr><td>btn-options</td><td>\u5E95\u90E8\u6309\u94AE\u8BBE\u7F6E\u3002[\u2018confirm\u2019,\u2018buy\u2019,\u2018cart\u2019 ] \u5206\u522B\u5BF9\u5E94\u786E\u5B9A\u3001\u7ACB\u5373\u8D2D\u4E70\u3001\u52A0\u5165\u8D2D\u7269\u8F66</td><td>Array</td><td>[\u2018confirm\u2019]</td></tr><tr><td>btn-extra-text</td><td>\u6309\u94AE\u4E0A\u90E8\u6DFB\u52A0\u6587\u6848\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u6709\u503C\u65F6\u663E\u793A</td><td>String</td><td>-</td></tr><tr><td>stepper-title</td><td>\u6570\u91CF\u9009\u62E9\u7EC4\u4EF6\u5DE6\u4FA7\u6587\u6848</td><td>String</td><td>\u2018\u8D2D\u4E70\u6570\u91CF\u2019</td></tr><tr><td>stepper-extra-text</td><td>inputNumber \u4E0E\u6807\u9898\u4E4B\u95F4\u7684\u6587\u6848</td><td>[Function, false]</td><td>false</td></tr><tr><td>buy-text</td><td>\u7ACB\u5373\u8D2D\u4E70\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u7ACB\u5373\u8D2D\u4E70</td></tr><tr><td>add-cart-text</td><td>\u52A0\u5165\u8D2D\u7269\u8F66\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u52A0\u5165\u8D2D\u7269\u8F66</td></tr><tr><td>confirm-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u786E\u5B9A</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>select-sku</td><td>\u5207\u6362\u89C4\u683C\u7C7B\u76EE\u65F6\u89E6\u53D1</td><td>{sku,skuIndex,parentSku,parentIndex}</td></tr><tr><td>add</td><td>inputNumber \u70B9\u51FB\u589E\u52A0\u6309\u94AE\u65F6\u89E6\u53D1</td><td>value</td></tr><tr><td>reduce</td><td>inputNumber \u70B9\u51FB\u51CF\u5C11\u6309\u94AE\u65F6\u89E6\u53D1</td><td>value</td></tr><tr><td>overLimit</td><td>inputNumber \u70B9\u51FB\u4E0D\u53EF\u7528\u7684\u6309\u94AE\u65F6\u89E6\u53D1</td><td>value</td></tr><tr><td>change-stepper</td><td>\u8D2D\u4E70\u53D8\u5316\u65F6\u89E6\u53D1</td><td>value</td></tr><tr><td>click-btn-operate</td><td>\u70B9\u51FB\u5E95\u90E8\u6309\u94AE\u65F6\u89E6\u53D1</td><td>{type:\u2018confirm\u2019,value:\u2018inputNumber value\u2019}</td></tr><tr><td>click-close-icon</td><td>\u70B9\u51FB\u5DE6\u4E0A\u89D2\u5173\u95ED icon \u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>click-overlay</td><td>\u70B9\u51FB\u906E\u7F69\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F39\u5C42\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h3>Slots</h3><p>Sku \u7EC4\u4EF6\u9ED8\u8BA4\u5212\u5206\u4E3A\u82E5\u5E72\u533A\u57DF\uFF0C\u8FD9\u4E9B\u533A\u57DF\u90FD\u5B9A\u4E49\u6210\u4E86\u63D2\u69FD\uFF0C\u53EF\u4EE5\u6309\u7167\u9700\u6C42\u8FDB\u884C\u66FF\u6362\u3002</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>sku-header</td><td>\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5305\u542B\u5546\u54C1\u56FE\u7247\u3001\u4EF7\u683C\u3001\u7F16\u53F7</td></tr><tr><td>sku-header-price</td><td>\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u4EF7\u683C\u533A\u57DF\u5C55\u793A</td></tr><tr><td>sku-header-extra</td><td>\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u7F16\u53F7\u533A\u57DF\u5C55\u793A</td></tr><tr><td>sku-select-top</td><td>sku \u5C55\u793A\u533A\u4E0A\u65B9\u4E0E\u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\u4E0B\u65B9\u533A\u57DF\uFF0C\u65E0\u9ED8\u8BA4\u5C55\u793A\u5185\u5BB9</td></tr><tr><td>sku-select</td><td>sku \u5C55\u793A\u533A</td></tr><tr><td>sku-stepper</td><td>\u6570\u91CF\u9009\u62E9\u533A</td></tr><tr><td>sku-stepper-bottom</td><td>\u6570\u91CF\u9009\u62E9\u533A\u4E0B\u65B9\u533A\u57DF</td></tr><tr><td>sku-operate</td><td>\u5E95\u90E8\u6309\u94AE\u64CD\u4F5C\u533A\u57DF</td></tr></tbody></table><h3>goods \u5BF9\u8C61\u7ED3\u6784</h3><pre><code class="language-javascript">goods:{
    <span class="hljs-attr">skuId</span>:<span class="hljs-string">&#39;&#39;</span>, <span class="hljs-comment">// \u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5546\u54C1\u7F16\u53F7</span>
    <span class="hljs-attr">price</span>: <span class="hljs-string">&quot;0&quot;</span>, <span class="hljs-comment">// \u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5546\u54C1\u4EF7\u683C</span>
    <span class="hljs-attr">imagePath</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-comment">// \u5546\u54C1\u4FE1\u606F\u5C55\u793A\u533A\uFF0C\u5546\u54C1\u56FE</span>
}

</code></pre><h3>sku \u6570\u7EC4\u7ED3\u6784</h3><p>sku \u6570\u7EC4\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u6570\u7EC4\u7D22\u5F15\u4EE3\u8868\u4E00\u4E2A\u89C4\u683C\u7C7B\u76EE\u3002\u5176\u4E2D\uFF0Clist \u4EE3\u8868\u8BE5\u89C4\u683C\u7C7B\u76EE\u4E0B\u7684\u7C7B\u76EE\u503C\u3002\u6BCF\u4E2A\u7C7B\u76EE\u503C\u5BF9\u8C61\u5305\u62EC\uFF1Aname\u3001id\u3001active(\u662F\u5426\u9009\u4E2D)\u3001disable(\u662F\u5426\u53EF\u9009)</p><pre><code class="language-javascript">sku : [{
    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u989C\u8272&#39;</span>,
    <span class="hljs-attr">list</span>: [{
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u4EAE\u9ED1\u8272&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015112</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u91C9\u767D\u8272&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015142</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u79D8\u94F6\u8272&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015078</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u590F\u65E5\u80E1\u6768&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100009064831</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u79CB\u65E5\u80E1\u6768&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100009064830</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7248\u672C&#39;</span>,
    <span class="hljs-attr">list</span>: [{
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;8GB+128GB&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015102</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;8GB+256GB&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015122</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7248\u672C&#39;</span>,
    <span class="hljs-attr">list</span>: [{
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;4G\uFF08\u6709\u5145\u7248\uFF09&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015103</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G\uFF08\u6709\u5145\u7248\uFF09&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015123</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G\uFF08\u65E0\u5145\u7248\uFF09&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015104</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">true</span>
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;5G\uFF08\u65E0\u5145\uFF09\u8D28\u4FDD\u6362\u65B0\u7248&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">100016015125</span>,
        <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">disable</span>: <span class="hljs-literal">false</span>
      }
    ]
  }
];
</code></pre>`,34),c=[p],d={setup(e,{expose:s}){return s({frontmatter:{}}),(h,j)=>(n(),a("div",l,c))}};export{d as default};
