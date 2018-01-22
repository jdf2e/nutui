<template>
    <div class="wrapper">
        <div class="logo"></div>
        <p>NutUI是一个基于Vue2.0的轻量级移动端组件库，大部分组件来自「京东APP」、「京东ME」、「京东M站」中的实际项目。</p>
        <h5>安装</h5>
        <h6>1，首先安装京东私有npm客户端jnpm</h6>
        <pre><code v-highlight>npm install @jd/jnpm -g --registry=http://registry.m.jd.com</code></pre>
        <h6>2，使用jnpm安装NutUI</h6>
        <pre><code v-highlight>jnpm install @jdcfe/nutui --save-dev</code></pre>
        <h6>3，在项目中引入</h6>
        <pre><code v-highlight>import NutUI from '@jdcfe/nutui'</code></pre>
        <h6>4，初始化</h6>
        <pre><code v-highlight>NutUI.install(Vue)</code></pre>
        <p>通过以上步骤即可完成整个NutUI组件库的安装，这是推荐的使用方式。</p>
        <p>您还可以根据需要只引用部分组件。</p>
        <pre><code v-highlight>import Mask from '@jdcfe/nutui/src/package/mask/index'

export default {
    data(){
    },
    components: {
        'nut-mask':Mask
    },
    methods:{
    }
}</code></pre>
        <p>按需引用需要注意，这种方式使用的是未编译的组件源码：</p>
        <ol>
          <li>需要自行处理组件的依赖关系，将其依赖的组件先行引入</li>
          <li>需要在自己的项目里使用babel对ES6编译</li>
          <li>如果该组件用到了SCSS，则需要使用者自行处理vue单文件中的SCSS编译</li>
        </ol>


        <h5>使用方法</h5>
<p>使用方法大致分为两类。</p>
<p>一类是扩展 HTML 元素，典型的Vue组件形式，使用方式类似原生HTML元素。如遮罩层（Mask）组件，直接使用标签即可。</p>
<pre><code v-highlight v-text="demo1"></code></pre>
<p>另一类是Vue构造器的扩展组件，使用方式类似jquery/Zepto方法。如对话框（Dialog）组件。</p>
<pre><code v-highlight>this.$dialog(options);</code></pre>
<p>提示框（Toast）组件</p>
<pre><code v-highlight>this.$toast(msg,during);</code></pre>
<h5>使用项目</h5>
<p><a href="http://cf.jd.com/pages/viewpage.action?pageId=100290301" target="_blank">点击查看</a></p>
<h5>联系我们</h5>
<p>如果您在使用组件的过程中遇到了什么问题，或者有什么意见建议，都欢迎与我们联系：<a href="mailto:lifeifan1@jd.com">lifeifan1@jd.com</a></p>

    </div>
</template>

<script>
export default {
    data(){
        return{
          demo1:`<nut-mask :visible="true"></nut-mask>`
        }
    },
    components: {
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
.logo{
  margin:20px auto;
  height:120px;
  background:url(../asset/img/nutui-logo3.png) center no-repeat;
  background-size:contain;
}
@media (max-width: 400px) {
    .logo{
        height:100px;
    }
}
</style>
