<template>
    <div>
        <h1>Lazyload</h1>
        <p>页面滚动到图片时进行加载，当图片完全加载完成之后替换初始的loading图片。</p>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        
        <!-- DEMO代码 -->
        <pre>
          <code v-highlight>&lt;div v-nut-lazyload='{
      "imgLoading":"http://page.jd.com/virtuals/ijipiao/1.3/css/i/loading.gif",
      "distance":40,
      "element":"[lazyload]",
      "failImg":'url'
    }'&gt;
  &lt;img data-src="url" lazyload/&gt;
&lt;/div&gt;</code>
        </pre>
        <h5>Options</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>v-nut-lazyload</td>
              <td>指令</td>
              <td>String</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>imgLoading</td>
              <td>用于加载loading图片的路径</td>
              <td>String</td>
              <td>默认自带一张loading</td>
              <td>--</td>
            </tr>
            <tr>
              <td>distance</td>
              <td>提前加载图片距离可视窗口底部的距离</td>
              <td>number</td>
              <td>不写 默认为30</td>
              <td>--</td>
            </tr>
            <tr>
              <td>element</td>
              <td>用于需要懒加载图片元素的选择</td>
              <td>String</td>
              <td>不写 默认为'[lazyload]'</td>
              <td>--</td>
            </tr>
            <tr>
              <td>failImg</td>
              <td>用于图片请求失败显示的图片</td>
              <td>String</td>
              <td>不写 默认没有</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div 
        v-nut-lazyload='{          
          "height":100
        }'
           >
          <img lazyload class="test" data-src="https://img30.360buyimg.com/da/jfs/t14185/125/556275389/303641/97b4c333/5a0e37bfN9b72d735.jpg">
          <img lazyload class="test" data-src="https://img13.360buyimg.com/da/jfs/t13558/359/718973197/114717/dc9a4598/5a1279abNb62cd51f.jpg">
          <img lazyload class="test" data-src="https://img20.360buyimg.com/da/jfs/t13513/278/766279282/105852/3bc69d5b/5a138f98Nf0f4fbc5.jpg" >
          <img lazyload class="test" data-src="https://img20.360buyimg.com/da/jfs/t10597/214/1767280119/107853/e81bef25/59e5deffN82945fbf.jpg">
          <img lazyload class="test" data-src="https://img14.360buyimg.com/da/jfs/t11074/294/1802222077/76562/336432ea/5a096c9dNda606baa.jpg">
          <img lazyload class="test" data-src="https://img30.360buyimg.com/jgsq-productsoa/jfs/t13666/342/466703104/65783/7022b077/5a0c193cN9124d3e0.jpg">
          </div>
        </div>
    </div>
   <!--  //-->
</template>
      
<script>
import Vue from 'vue';
import lazyload from '../package/lazyload/index.js';

export default {
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>

<style>
.test{

  /*width: 790px;
  height: 340px;*/
  background: red;
}
</style>
