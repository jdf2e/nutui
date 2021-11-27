import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Form \u8868\u5355\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u6570\u636E\u5F55\u5165\u3001\u6821\u9A8C\uFF0C\u652F\u6301\u8F93\u5165\u6846\u3001\u5355\u9009\u6846\u3001\u590D\u9009\u6846\u3001\u6587\u4EF6\u4E0A\u4F20\u7B49\u7C7B\u578B\uFF0C\u9700\u8981\u4E0E Cell \u7EC4\u4EF6\u642D\u914D\u4F7F\u7528\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Form,FormItem,Cell,CellGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Form,FormItem,Cell,CellGroup  } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Form);
app.use(FormItem);
app.use(Cell);
app.use(CellGroup);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8054\u7CFB\u7535\u8BDD&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5730\u5740&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5907\u6CE8&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-textarea</span>  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5907\u6CE8&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><h3>\u8868\u5355\u6821\u9A8C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;ruleForm&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u586B\u5199\u59D3\u540D&#39; }]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[
        { required: true, message: &#39;\u8BF7\u586B\u5199\u5E74\u9F84&#39; },
        { validator: customValidator, message: &#39;\u5FC5\u987B\u8F93\u5165\u6570\u5B57&#39; },
        { regex: /^(\\d{1,2}|1\\d{2}|200)$/, message: &#39;\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4&#39; }
    ]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.age&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84\uFF0C\u5FC5\u987B\u6570\u5B57\u4E140-200\u533A\u95F4&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8054\u7CFB\u7535\u8BDD&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[
        { required: true, message: &#39;\u8BF7\u586B\u5199\u8054\u7CFB\u7535\u8BDD&#39; },
        { validator: asyncValidator, message: &#39;\u7535\u8BDD\u683C\u5F0F\u4E0D\u6B63\u786E&#39; }
    ]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.tel&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD\uFF0C\u5F02\u6B65\u6821\u9A8C\u7535\u8BDD\u683C\u5F0F&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;address&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u586B\u5199\u5730\u5740&#39; }]&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.address&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5730\u5740&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>\u63D0\u4EA4<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span>&gt;</span>\u91CD\u7F6E\u63D0\u793A\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">const</span> formData = reactive({
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">age</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#39;&#39;</span>,
        <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;&#39;</span>
    });
    <span class="hljs-keyword">const</span> validate = <span class="hljs-function">(<span class="hljs-params">item: any</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(item);
    };
    <span class="hljs-keyword">const</span> ruleForm = ref&lt;any&gt;(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
      ruleForm.value.validate().then(<span class="hljs-function">(<span class="hljs-params">{ valid, errors }: any</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (valid) {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;success&#39;</span>, formData);
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;error submit!!&#39;</span>, errors);
        }
      });
    };
    <span class="hljs-keyword">const</span> reset = <span class="hljs-function">() =&gt;</span> {
      ruleForm.value.reset();
    };
    <span class="hljs-comment">// \u51FD\u6570\u6821\u9A8C</span>
    <span class="hljs-keyword">const</span> customValidator = <span class="hljs-function">(<span class="hljs-params">val: string</span>) =&gt;</span> <span class="hljs-regexp">/^\\d+$/</span>.test(val);
    <span class="hljs-comment">// Promise \u5F02\u6B65\u6821\u9A8C</span>
    <span class="hljs-keyword">const</span> asyncValidator = <span class="hljs-function">(<span class="hljs-params">val: string</span>) =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        Toast.loading(<span class="hljs-string">&#39;\u6A21\u62DF\u5F02\u6B65\u9A8C\u8BC1\u4E2D...&#39;</span>);
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          Toast.hide();
          resolve(<span class="hljs-regexp">/^400(-?)[0-9]{7}$|^1\\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/</span>.test(val));
        }, <span class="hljs-number">1000</span>);
      });
    };
    <span class="hljs-keyword">return</span> { ruleForm, formData, validate, customValidator, asyncValidator, submit, reset, formData2, addressModule };
}
</code></pre><h3>\u8868\u5355\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5F00\u5173&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.switch&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.checkbox&quot;</span>&gt;</span>\u590D\u9009\u6846<span class="hljs-tag">&lt;/<span class="hljs-name">nut-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5355\u9009\u6309\u94AE&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-radiogroup</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.radio&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>\u9009\u98791<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\u9009\u98792<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">nut-radio</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\u9009\u98793<span class="hljs-tag">&lt;/<span class="hljs-name">nut-radio</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-radiogroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BC4\u5206&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.rate&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6B65\u8FDB\u5668&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-inputnumber</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.number&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6ED1\u5757&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-range</span> <span class="hljs-attr">hidden-tag</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.range&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-range</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u4EF6\u4E0A\u4F20&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;http://\u670D\u52A1\u5730\u5740&quot;</span> <span class="hljs-attr">v-model:file-list</span>=<span class="hljs-string">&quot;formData2.defaultFileList&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">multiple</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5730\u5740&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData2.address&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;addressModule.methods.show&quot;</span> <span class="hljs-attr">readonly</span>
            <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span> /&gt;</span>
        <span class="hljs-comment">&lt;!-- nut-address --&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-address</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;addressModule.state.show&quot;</span> <span class="hljs-attr">:province</span>=<span class="hljs-string">&quot;addressModule.state.province&quot;</span>
            <span class="hljs-attr">:city</span>=<span class="hljs-string">&quot;addressModule.state.city&quot;</span> <span class="hljs-attr">:country</span>=<span class="hljs-string">&quot;addressModule.state.country&quot;</span> <span class="hljs-attr">:town</span>=<span class="hljs-string">&quot;addressModule.state.town&quot;</span>
            @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;addressModule.methods.onChange&quot;</span> <span class="hljs-attr">custom-address-title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-address</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">const</span> formData2 = reactive({
      <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">checkbox</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">radio</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">number</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">rate</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">range</span>: <span class="hljs-number">30</span>,
      <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">defaultFileList</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6587\u4EF61.png&#39;</span>,
          <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif&#39;</span>,
          <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;success&#39;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u6210\u529F&#39;</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6587\u4EF62.png&#39;</span>,
          <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif&#39;</span>,
          <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u4E2D...&#39;</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
        }
      ]
    });

    <span class="hljs-keyword">const</span> addressModule = reactive({
      <span class="hljs-attr">state</span>: {
        <span class="hljs-attr">show</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">province</span>: [
          { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span> }
        ],
        <span class="hljs-attr">city</span>: [
          { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span> }
        ],
        <span class="hljs-attr">country</span>: [
          { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span> },
          { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span> }
        ],
        <span class="hljs-attr">town</span>: []
      },
      <span class="hljs-attr">methods</span>: {
        <span class="hljs-function"><span class="hljs-title">show</span>(<span class="hljs-params"></span>)</span> {
          addressModule.state.show = !addressModule.state.show;
          <span class="hljs-keyword">if</span> (addressModule.state.show) {
            formData2.address = <span class="hljs-string">&#39;&#39;</span>;
          }
        },
        <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">{ custom, next, value }: any</span>)</span> {
          formData2.address += value.name;
          <span class="hljs-keyword">const</span> name = addressModule.state[next];
          <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
            addressModule.state.show = <span class="hljs-literal">false</span>;
          }
        }
      }
    });
    <span class="hljs-keyword">return</span> { formData2, addressModule };
}
</code></pre><h3>Form Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>model-value</td><td>\u8868\u5355\u6570\u636E\u5BF9\u8C61(\u4F7F\u7528\u8868\u5355\u6821\u9A8C\u65F6\uFF0C<em>\u5FC5\u586B</em>)</td><td>object</td><td></td></tr></tbody></table><h3>Form Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u4EFB\u4E00\u8868\u5355\u9879\u88AB\u6821\u9A8C\u5931\u8D25\u540E\u89E6\u53D1</td><td>\u88AB\u6821\u9A8C\u7684\u8868\u5355\u9879 prop \u503C\uFF0C\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u9519\u8BEF\u6D88\u606F\uFF08\u5982\u679C\u5B58\u5728\uFF09</td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>required</td><td>\u662F\u5426\u663E\u793A\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td>boolean</td><td><code>false</code></td></tr><tr><td>label-width</td><td>\u8868\u5355\u9879 label \u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A<code>px</code></td><td>number | string</td><td><code>90px</code></td></tr><tr><td>label-align</td><td>\u8868\u5355\u9879 label \u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td>string</td><td><code>left</code></td></tr><tr><td>body-align</td><td>\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td>string</td><td><code>left</code></td></tr><tr><td>error-message-align</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A <code>center</code> <code>right</code></td><td>string</td><td><code>left</code></td></tr><tr><td>show-error-line</td><td>\u662F\u5426\u5728\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u6807\u7EA2\u8F93\u5165\u6846</td><td>boolean</td><td><code>true</code></td></tr><tr><td>show-error-message</td><td>\u662F\u5426\u5728\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u5728\u8F93\u5165\u6846\u4E0B\u65B9\u5C55\u793A\u9519\u8BEF\u63D0\u793A</td><td>boolean</td><td><code>true</code></td></tr></tbody></table><h3>FormItem Rule \u6570\u636E\u7ED3\u6784</h3><p>\u4F7F\u7528 FormItem \u7684<code>rules</code>\u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF0C\u53EF\u9009\u5C5E\u6027\u5982\u4E0B:</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>required</td><td>\u662F\u5426\u4E3A\u5FC5\u9009\u5B57\u6BB5</td><td>boolean</td></tr><tr><td>message</td><td>\u9519\u8BEF\u63D0\u793A\u6587\u6848</td><td>string</td></tr><tr><td>validator</td><td>\u901A\u8FC7\u51FD\u6570\u8FDB\u884C\u6821\u9A8C</td><td>(value, rule) =&gt; boolean | string | Promise</td></tr><tr><td>regex</td><td>\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u8FDB\u884C\u6821\u9A8C</td><td>RegExp</td></tr></tbody></table><h3>Methods</h3><p>\u901A\u8FC7 <a href="https://v3.cn.vuejs.org/api/special-attributes.html#ref">ref</a> \u53EF\u4EE5\u83B7\u53D6\u5230 Form \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>submit</td><td>\u63D0\u4EA4\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td>-</td><td>Promise</td></tr><tr><td>reset</td><td>\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</td><td>-</td><td>-</td></tr></tbody></table>`,25),c=[p],u={setup(r,{expose:s}){return s({frontmatter:{}}),(h,o)=>(n(),a("div",l,c))}};export{u as default};
