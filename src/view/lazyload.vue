<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc="图片懒加载。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-codebox :code="demo1"></nut-codebox>
        <!-- <pre>
          <code v-highlight>&lt;div v-nut-lazyload='{
      "imgLoading":"http://page.jd.com/virtuals/ijipiao/1.3/css/i/loading.gif",
      "distance":40,
      "element":"[lazyload]",
      "failImg":'url'
    }'&gt;
  &lt;img data-src="url" lazyload/&gt;
&lt;/div&gt;</code>
        </pre> -->
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
<!--         <div 
        v-nut-lazyload='{          
          "height":100
        }'
           >
          <img lazyload class="test" v-for="items in test" :data-src="items">         
         </div> -->
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
          demo1:`<div v-nut-lazyload='{
      "imgLoading":"http://page.jd.com/virtuals/ijipiao/1.3/css/i/loading.gif",
      "distance":40,
      "element":"[lazyload]",
      "failImg":'url'
    }'>
  <img data-src="url" lazyload/>
</div>`,
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
