import{e as a,o as n,G as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Dialog \u5BF9\u8BDD\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u5728\u6D6E\u5C42\u4E2D\u663E\u793A\uFF0C\u5F15\u5BFC\u7528\u6237\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Dialog);
</code></pre><h2>\u4F7F\u7528\u65B9\u5F0F</h2><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u5F39\u6846&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;baseClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u5F39\u6846&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u57FA\u7840\u5F39\u6846\u3002&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible1&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u65E0\u6807\u9898\u5F39\u6846&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;noTitleClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u65E0\u6807\u9898\u5F39\u6846\u3002&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible2&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A\u5F39\u6846&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;tipsClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">no-cancel-btn</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6E29\u99A8\u63D0\u793A&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u63D0\u793A\u5F39\u6846\u3002&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible3&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOk&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5E95\u90E8\u6309\u94AE \u5782\u76F4\u8C03\u7528&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;verticalClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">footer-direction</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;#app&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6E29\u99A8\u63D0\u793A&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u63D0\u793A\u5F39\u6846\u3002&quot;</span> <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;visible5&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u5173\u95ED&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;componentClick&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nut-dialog</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u5173\u95ED&quot;</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;closeContent&quot;</span> <span class="hljs-attr">:visible</span>=<span class="hljs-string">&quot;visible4&quot;</span> @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span> @<span class="hljs-attr">ok</span>=<span class="hljs-string">&quot;onOkAsync&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> visible1 = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible2 = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible3 = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible4 = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> visible5 = ref(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> closeContent = ref(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> sleep = <span class="hljs-function">() =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(resolve, <span class="hljs-number">1000</span>));
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-function">(<span class="hljs-params">second: number</span>) =&gt;</span> <span class="hljs-string">\`\u5012\u8BA1\u65F6 <span class="hljs-subst">\${second}</span> \u79D2\`</span>;

    <span class="hljs-keyword">const</span> onCancel = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;event cancel&#39;</span>);
    };
    <span class="hljs-keyword">const</span> onOk = <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;event ok&#39;</span>);
    };
    <span class="hljs-keyword">const</span> onOkAsync = <span class="hljs-function">() =&gt;</span> {
      sleep()
        .then(<span class="hljs-function">() =&gt;</span> {
          closeContent.value = countDown(<span class="hljs-number">2</span>);
          <span class="hljs-keyword">return</span> sleep();
        })
        .then(<span class="hljs-function">() =&gt;</span> {
          closeContent.value = countDown(<span class="hljs-number">1</span>);
          <span class="hljs-keyword">return</span> sleep();
        })
        .then(<span class="hljs-function">() =&gt;</span> {
          closeContent.value = countDown(<span class="hljs-number">0</span>);
        })
        .then(<span class="hljs-function">() =&gt;</span> {
          visible4.value = <span class="hljs-literal">false</span>;
        });
    };

    <span class="hljs-keyword">const</span> baseClick = (): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {
      visible1.value = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> noTitleClick = <span class="hljs-function">() =&gt;</span> {
      visible2.value = <span class="hljs-literal">true</span>;
    };
    <span class="hljs-keyword">const</span> tipsClick = <span class="hljs-function">() =&gt;</span> {
      visible3.value = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> componentClick = <span class="hljs-function">() =&gt;</span> {
      closeContent.value = <span class="hljs-string">\`\u70B9\u51FB\u786E\u5B9A\u65F63s\u540E\u5173\u95ED\`</span>;
      visible4.value = <span class="hljs-literal">true</span>;
    };

    <span class="hljs-keyword">const</span> verticalClick = <span class="hljs-function">() =&gt;</span> {
      visible5.value = <span class="hljs-literal">true</span>;
    };


    <span class="hljs-keyword">return</span> {
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      onCancel,
      onOk,
      closeContent,
      onOkAsync,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick,
      verticalClick
    };
  }
};
</code></pre><h2>Props</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>content</td><td>\u5185\u5BB9\uFF0C\u652F\u6301HTML</td><td>String</td><td>-</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>String</td><td>\u201Cbody\u201D</td></tr><tr><td>close-on-click-overlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>no-footer</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\u680F</td><td>Boolean</td><td>false</td></tr><tr><td>no-ok-btn</td><td>\u662F\u5426\u9690\u85CF\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>no-cancel-btn</td><td>\u662F\u5426\u9690\u85CF\u53D6\u6D88\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u53D6\u6D88\u201C</td></tr><tr><td>ok-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String</td><td>\u201D\u786E \u5B9A\u201C</td></tr><tr><td>ok-btn-disabled</td><td>\u7981\u7528\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>false</td></tr><tr><td>cancel-auto-close</td><td>\u53D6\u6D88\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>text-align</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u540Ccss\u7684text-align</td><td>String</td><td>\u201Ccenter\u201D</td></tr><tr><td>close-on-popstate</td><td>\u662F\u5426\u5728\u9875\u9762\u56DE\u9000\u65F6\u81EA\u52A8\u5173\u95ED</td><td>Boolean</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>Boolean</td><td>false</td></tr><tr><td>footer-direction</td><td>\u4F7F\u7528\u6A2A\u7EB5\u65B9\u5411 \u53EF\u9009\u503C horizontal\u3001vertical</td><td>string</td><td>horizontal</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>ok</td><td>\u786E\u5B9A\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>closed</td><td>\u5173\u95ED\u56DE\u8C03\uFF0C\u4EFB\u4F55\u60C5\u51B5\u5173\u95ED\u5F39\u7A97\u90FD\u4F1A\u89E6\u53D1</td><td>Function</td><td>-</td></tr></tbody></table><h2>Slots</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u57DF</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF</td></tr></tbody></table>`,14),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(r,d)=>(n(),a("div",l,c))}};export{i as default};
