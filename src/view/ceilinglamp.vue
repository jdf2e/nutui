<template>
    <div>
        <h1>Ceilinglamp</h1>
        <p>页面滑动到一定距离时页面顶部展示的吸顶条，常用于导航栏和搜索条。</p>

        <h5>示例</h5>
        <pre><code v-highlight v-text="demo"></code></pre>
        <!-- DEMO区域 -->
        <a class="button button-primary" href="/demo.html#/ceilinglamp" target="_blank">Demo</a>
        <h5>展示效果</h5>


        <h5>Props</h5>
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
              <td>fixedTop</td>
              <td>定位时距离顶部的位置</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>fixedType</td>
              <td>吸顶方式（直接吸顶or消失后再出现吸顶）</td>
              <td>String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>arrivalEl</td>
              <td>吸顶消失的目标元素的id或者class</td>
              <td>String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>screenNum</td>
              <td>吸顶在第几屏显示</td>
              <td>String</td>
              <td>null</td>
              <td>--</td>
            </tr>
            <tr>
              <td>zIndex</td>
              <td>定位元素的层级</td>
              <td>Number</td>
              <td>1001</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
          demo:'<nut-ceilinglamp :fixedTop="fixedTop" :fixedType = "fixedType" :screenNum = "screenNum">'+
                  '<div class="ceildiv">我能自动固定到顶部</div>'+
                '</nut-ceilinglamp>'
        }
    }
}
</script>

<style>
</style>
