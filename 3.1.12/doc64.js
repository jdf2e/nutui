import{e as a,o as t,G as n}from"./vendor.js";const l={class:"markdown-body"},p=n(`<h1>Uploader \u4E0A\u4F20</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u672C\u5730\u7684\u56FE\u7247\u6216\u6587\u4EF6\u4E0A\u4F20\u81F3\u670D\u52A1\u5668\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Uploader,Icon,Progress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Uploader);
app.use(Icon);
app.use(Progress);

</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u4E0A\u4F20\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">v-model:file-list</span>=<span class="hljs-string">&quot;defaultFileList&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">multiple</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u57FA\u7840\u7528\u6CD5-\u4E0A\u4F20\u5217\u8868\u5C55\u793A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">v-model:file-list</span>=<span class="hljs-string">&quot;defaultFileList&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;10&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">list-type</span>=<span class="hljs-string">&#39;list&#39;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u4F7F\u7528\u9ED8\u8BA4\u8FDB\u5EA6\u6761</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> @<span class="hljs-attr">progress</span>=<span class="hljs-string">&quot;onProgress&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u4E0A\u4F20\u6587\u4EF6<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">&quot;progressPercentage&quot;</span>
  <span class="hljs-attr">stroke-color</span>=<span class="hljs-string">&quot;linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)&quot;</span>
  <span class="hljs-attr">:status</span>=<span class="hljs-string">&quot;progressPercentage==100?&#39;&#39;:&#39;active&#39;&quot;</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-progress</span>&gt;</span>
</code></pre><h3>\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934\uFF08\u79FB\u52A8\u7AEF\u751F\u6548\uFF09</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">capture</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u6570\u91CF5\u4E2A</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u9650\u5236\u4E0A\u4F20\u5927\u5C0F\uFF08\u6BCF\u4E2A\u6587\u4EF6\u6700\u5927\u4E0D\u8D85\u8FC7 50kb\uFF0C\u4E5F\u53EF\u4EE5\u5728beforeupload\u4E2D\u81EA\u884C\u5904\u7406\u6587\u4EF6\u56FE\u7247\u538B\u7F29\uFF09</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:maximize</span>=<span class="hljs-string">&quot;1024 * 50&quot;</span> <span class="hljs-attr">:before-upload</span>=<span class="hljs-string">&quot;beforeUpload&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49 FormData headers</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:headers</span>=<span class="hljs-string">&quot;formData&quot;</span> <span class="hljs-attr">:with-Credentials</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><h3>\u9009\u4E2D\u6587\u4EF6\u540E\uFF0C\u901A\u8FC7\u6309\u94AE\u624B\u52A8\u6267\u884C\u4E0A\u4F20</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;uploadUrl&quot;</span> <span class="hljs-attr">maximum</span>=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">:auto-upload</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;uploadRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submitUpload&quot;</span>&gt;</span>\u6267\u884C\u4E0A\u4F20<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-uploader</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-uploader</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> uploadUrl = <span class="hljs-string">&#39;http://\u670D\u52A1\u5668\u5730\u5740&#39;</span>;
  <span class="hljs-keyword">const</span> progressPercentage = ref&lt;string | number&gt;(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> formData = {
    <span class="hljs-attr">custom</span>: <span class="hljs-string">&#39;test&#39;</span>
  };
  <span class="hljs-keyword">const</span> defaultFileList = ref([
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
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;error&#39;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u5931\u8D25&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6587\u4EF63.png&#39;</span>,
      <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif&#39;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u4E0A\u4F20\u4E2D...&#39;</span>,
      <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image&#39;</span>
    }
  ]);
  <span class="hljs-keyword">const</span> fileToDataURL = (file: Blob): <span class="hljs-built_in">Promise</span>&lt;any&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> reader = <span class="hljs-keyword">new</span> FileReader();
      reader.onloadend = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> resolve((e.target <span class="hljs-keyword">as</span> FileReader).result);
      reader.readAsDataURL(file);
    });
  };
  <span class="hljs-keyword">const</span> dataURLToImage = (dataURL: string): <span class="hljs-built_in">Promise</span>&lt;HTMLImageElement&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> Image();
      img.onload = <span class="hljs-function">() =&gt;</span> resolve(img);
      img.src = dataURL;
    });
  };
  <span class="hljs-keyword">const</span> canvastoFile = (canvas: HTMLCanvasElement, <span class="hljs-attr">type</span>: string, <span class="hljs-attr">quality</span>: number): <span class="hljs-built_in">Promise</span>&lt;Blob | <span class="hljs-literal">null</span>&gt; =&gt; {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> canvas.toBlob(<span class="hljs-function">(<span class="hljs-params">blob</span>) =&gt;</span> resolve(blob), type, quality));
  };
  <span class="hljs-keyword">const</span> onOversize = <span class="hljs-function">(<span class="hljs-params">files: File[]</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;oversize \u89E6\u53D1 \u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 50kb&#39;</span>, files);
  };
  <span class="hljs-keyword">const</span> onDelete = <span class="hljs-function">(<span class="hljs-params">file: FileItem, fileList: FileItem[]</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;delete \u4E8B\u4EF6\u89E6\u53D1&#39;</span>, file, fileList);
  };
  <span class="hljs-keyword">const</span> onProgress = <span class="hljs-function">(<span class="hljs-params">{ event, options, percentage }: any</span>) =&gt;</span> {
    progressPercentage.value = percentage;
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;progress \u4E8B\u4EF6\u89E6\u53D1&#39;</span>, percentage);
  };
  <span class="hljs-keyword">const</span> beforeUpload = <span class="hljs-keyword">async</span> (file: File[]) =&gt; {
    <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;canvas&#39;</span>);
    <span class="hljs-keyword">const</span> context = canvas.getContext(<span class="hljs-string">&#39;2d&#39;</span>) <span class="hljs-keyword">as</span> CanvasRenderingContext2D;
    <span class="hljs-keyword">const</span> base64 = <span class="hljs-keyword">await</span> fileToDataURL(file[<span class="hljs-number">0</span>]);
    <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">await</span> dataURLToImage(base64);
    canvas.width = img.width;
    canvas.height = img.height;

    context.clearRect(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, img.width, img.height);
    context.drawImage(img, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, img.width, img.height);

    <span class="hljs-keyword">let</span> blob = (<span class="hljs-keyword">await</span> canvastoFile(canvas, <span class="hljs-string">&#39;image/jpeg&#39;</span>, <span class="hljs-number">0.5</span>)) <span class="hljs-keyword">as</span> Blob; <span class="hljs-comment">//quality:0.5\u53EF\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8BA1\u7B97</span>
    <span class="hljs-keyword">const</span> f = <span class="hljs-keyword">await</span> <span class="hljs-keyword">new</span> File([blob], file[<span class="hljs-number">0</span>].name);
    <span class="hljs-keyword">return</span> [f];
  };
  <span class="hljs-keyword">const</span> uploadRef = ref&lt;any&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">const</span> submitUpload = <span class="hljs-function">() =&gt;</span> {
    uploadRef.value.submit();
  };
  <span class="hljs-keyword">return</span> {
    onOversize,
    beforeUpload,
    onDelete,
    onProgress,
    progressPercentage,
    uploadUrl,
    defaultFileList,
    formData,
    uploadRef,
    submitUpload
  };
}
</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>auto-upload</td><td>\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u8FDB\u884C\u4E0A\u4F20\uFF0Cfalse \u65F6\u9700\u8981\u624B\u52A8\u6267\u884C ref submit \u65B9\u6CD5\u8FDB\u884C\u4E0A\u4F20</td><td>Boolean</td><td>true</td></tr><tr><td>name</td><td><code>input</code> \u6807\u7B7E <code>name</code> \u7684\u540D\u79F0\uFF0C\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td>String</td><td>\u201Cfile\u201D</td></tr><tr><td>url</td><td>\u4E0A\u4F20\u670D\u52A1\u5668\u7684\u63A5\u53E3\u5730\u5740</td><td>String</td><td>-</td></tr><tr><td>v-model:file-list</td><td>\u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td>FileItem[]</td><td>[]</td></tr><tr><td>is-preview</td><td>\u662F\u5426\u4E0A\u4F20\u6210\u529F\u540E\u5C55\u793A\u9884\u89C8\u56FE</td><td>Boolean</td><td>true</td></tr><tr><td>is-deletable</td><td>\u662F\u5426\u5C55\u793A\u5220\u9664\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>method</td><td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td><td>String</td><td>\u201Cpost\u201D</td></tr><tr><td>list-type</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E24\u79CD\u57FA\u672C\u6837\u5F0F picture\u3001list</td><td>String</td><td>\u201Cpicture\u201D</td></tr><tr><td>capture</td><td>\u56FE\u7247<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture">\u9009\u53D6\u6A21\u5F0F</a>\uFF0C\u76F4\u63A5\u8C03\u8D77\u6444\u50CF\u5934</td><td>String</td><td>false</td></tr><tr><td>maximize</td><td>\u53EF\u4EE5\u8BBE\u5B9A\u6700\u5927\u4E0A\u4F20\u6587\u4EF6\u7684\u5927\u5C0F\uFF08\u5B57\u8282\uFF09</td><td>Number\u4E28String</td><td>Number.MAX_VALUE</td></tr><tr><td>maximum</td><td>\u6587\u4EF6\u4E0A\u4F20\u6570\u91CF\u9650\u5236</td><td>Number\u4E28String</td><td>1</td></tr><tr><td>clear-input</td><td>\u662F\u5426\u9700\u8981\u6E05\u7A7A<code>input</code>\u5185\u5BB9\uFF0C\u8BBE\u4E3A<code>true</code>\u652F\u6301\u91CD\u590D\u9009\u62E9\u4E0A\u4F20\u540C\u4E00\u4E2A\u6587\u4EF6</td><td>Boolean</td><td>true</td></tr><tr><td>accept</td><td>\u5141\u8BB8\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B">\u8BE6\u7EC6\u8BF4\u660E</a></td><td>String</td><td>*</td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8</td><td>Object</td><td>{}</td></tr><tr><td>data</td><td>\u9644\u52A0\u4E0A\u4F20\u7684\u4FE1\u606F formData</td><td>Object</td><td>{}</td></tr><tr><td>upload-icon</td><td>\u4E0A\u4F20\u533A\u57DF<a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>\u201Cphotograph\u201D</td></tr><tr><td>upload-icon-size</td><td>\u4E0A\u4F20\u533A\u57DF<a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a>\u5927\u5C0F\uFF0C\u5982 <code>20px</code> <code>2em</code> <code>2rem</code></td><td>String or Number</td><td>-</td></tr><tr><td>xhr-state</td><td>\u63A5\u53E3\u54CD\u5E94\u7684\u6210\u529F\u72B6\u6001\uFF08status\uFF09\u503C</td><td>Number</td><td>200</td></tr><tr><td>with-credentials</td><td>\u652F\u6301\u53D1\u9001 cookie \u51ED\u8BC1\u4FE1\u606F</td><td>Boolean</td><td>false</td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u6587\u4EF6\u591A\u9009</td><td>Boolean</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6587\u4EF6\u4E0A\u4F20</td><td>Boolean</td><td>false</td></tr><tr><td>timeout</td><td>\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td><td>Number\u4E28String</td><td>1000 * 30</td></tr><tr><td>before-upload</td><td>\u4E0A\u4F20\u524D\u7684\u51FD\u6570\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61</td><td>Function</td><td>null</td></tr><tr><td>before-delete</td><td>\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C<code>Promise</code> \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td><td>Function(file): boolean \u4E28Promise</td><td>-</td></tr></tbody></table><h3>FileItem</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>status</td><td>\u6587\u4EF6\u72B6\u6001\u503C\uFF0C\u53EF\u9009\u2019ready,uploading,success,error\u2019</td><td>\u201Cready\u201D</td></tr><tr><td>uid</td><td>\u6587\u4EF6\u7684\u552F\u4E00\u6807\u8BC6</td><td>new Date().getTime().toString()</td></tr><tr><td>name</td><td>\u6587\u4EF6\u540D\u79F0</td><td>\u201C\u201D</td></tr><tr><td>url</td><td>\u6587\u4EF6\u8DEF\u5F84</td><td>\u201C\u201D</td></tr><tr><td>type</td><td>\u6587\u4EF6\u7C7B\u578B</td><td>\u201Cimage/jpeg\u201D</td></tr><tr><td>formData</td><td>\u4E0A\u4F20\u6240\u9700\u7684data</td><td>new FormData()</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>start</td><td>\u6587\u4EF6\u4E0A\u4F20\u5F00\u59CB</td><td>options</td></tr><tr><td>progress</td><td>\u6587\u4EF6\u4E0A\u4F20\u7684\u8FDB\u5EA6</td><td>{event,option,percentage}</td></tr><tr><td>oversize</td><td>\u6587\u4EF6\u5927\u5C0F\u8D85\u8FC7\u9650\u5236\u65F6\u89E6\u53D1</td><td>files</td></tr><tr><td>success</td><td>\u4E0A\u4F20\u6210\u529F</td><td>{responseText,option,fileItem}</td></tr><tr><td>failure</td><td>\u4E0A\u4F20\u5931\u8D25</td><td>{responseText,option,fileItem}</td></tr><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001</td><td>{fileList,event}</td></tr><tr><td>delete</td><td>\u6587\u4EF6\u5220\u9664\u4E4B\u524D\u7684\u72B6\u6001</td><td>{files,fileList}</td></tr><tr><td>file-item-click</td><td>\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u540E\u70B9\u51FB\u89E6\u53D1</td><td>{fileItem}</td></tr></tbody></table><h3>Methods</h3><p>\u901A\u8FC7 <a href="https://v3.cn.vuejs.org/api/special-attributes.html#ref">ref</a> \u53EF\u4EE5\u83B7\u53D6\u5230 Uploader \u5B9E\u4F8B\u5E76\u8C03\u7528\u5B9E\u4F8B\u65B9\u6CD5</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>submit</td><td>\u624B\u52A8\u4E0A\u4F20\u6A21\u5F0F\uFF0C\u6267\u884C\u4E0A\u4F20\u64CD\u4F5C</td><td>-</td><td>-</td></tr><tr><td>clearUploadQueue</td><td>\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u6587\u4EF6\u961F\u5217\uFF08\u8BE5\u65B9\u6CD5\u4E00\u822C\u914D\u5408\u5728\u624B\u52A8\u6A21\u5F0F\u4E0A\u4F20\u65F6\u4F7F\u7528\uFF09</td><td>-</td><td>-</td></tr></tbody></table>`,37),e=[p],u={setup(r,{expose:s}){return s({frontmatter:{}}),(c,o)=>(t(),a("div",l,e))}};export{u as default};
