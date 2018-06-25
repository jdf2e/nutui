<template>
    <div class="wrapper">
        <div class="logo"></div>
        <h6>NutUI是一套拥有电商基因的基于Vue2.0的轻量级移动端开源组件库，大部分组件来自「京东APP」、「京东ME」、「京东M站」中的实际项目。</h6>
        <h5>安装</h5>
        <p>1，推荐使用npm安装NutUI</p>
        <pre><code v-highlight>npm install @nutui/nutui --save</code></pre>
        <p>2，通常在webpack入口页面（app.js或main.js）引用完整组件库</p>
        <pre><code v-highlight>import NutUI from '@nutui/nutui'</code></pre>
        <p>3，初始化</p>
        <pre><code v-highlight>NutUI.install(Vue)</code></pre>
        <p>通过以上步骤即可完成整个NutUI组件库的安装。</p>
        <h5>自定义构建（按需引用）</h5>
        <p>本组件库支持自定义构建（1.1.0版本以上），您可以根据需要只打包部分组件。</p>
        <p>1，在项目目录下执行</p>
        <pre><code v-highlight>npm install</code></pre>
        <p>2，执行自定义构建命令</p>
        <pre><code v-highlight>npm run custom</code></pre>
        <p>3，在列表中，选择所有您需要打包的组件，然后按下回车键即开始构建</p>
        <img src="../asset/img/custom-build.png" alt="">
        <p>4，片刻之后，自定义构建出的nutui.js文件会出现在dist目录下。在项目中引入和初始化的操作同上</p>

        <h5>使用方法</h5>
<p>使用方法大致分为两类。</p>
<p>1，扩展 HTML 元素，典型的Vue组件形式，使用方式类似原生HTML标签。如遮罩层（Mask）组件，直接使用标签即可。</p>
<pre><code v-highlight v-text="demo1"></code></pre>
<p>2，挂在Vue.prototype上的实例方法，在需要的地方调用即可。如对话框（Dialog）组件。</p>
<pre><code v-highlight>this.$dialog(options);</code></pre>
<p>提示框（Toast）组件</p>
<pre><code v-highlight>this.$toast(msg,during);</code></pre>
<h5>联系我们</h5>
<p>如果您在使用组件的过程中遇到了什么问题，或者有什么意见建议，都欢迎与我们联系：<a href="mailto:nutui@jd.com">nutui@jd.com</a></p>
<h5>使用项目</h5>
<p><router-link  tag="a" to="/cases" :class="{ current:path=='/cases' }" target='_blank'>正在使用项目</router-link>，如果您在项目里使用了NutUI，欢迎告知。</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
          demo1:`<nut-mask 
:visible.sync="maskShow">
</nut-mask>`
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
img{
    max-width:100%;
}
@media (max-width: 400px) {
    .logo{
        height:100px;
    }
}
</style>
