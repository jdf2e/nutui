<template>
    <div>
        <h1>Slider</h1>
        <p>一种滑块组件。</p>
        <a class="button-primary button" href="/demo.html#/slider" target="_blank">DEMO</a>
        
        <h5 class="staticTitle">基本用法</h5>
        <!-- DEMO区域 --> 
        <nut-slider  :value="[10,20]" :step="10" :min="0" @touch-end="afterTouch" range></nut-slider>  
        <pre><code v-highlight v-text="demo1"></code></pre>
        
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
              <td>step</td>
              <td>滑块每次移动距离</td>
              <td>Number</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>click-more</td>
              <td>是否支持点击滑动</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>value</td>
              <td>滑块初始值</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>min</td>
              <td>最小值</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>max</td>
              <td>最大值</td>
              <td>Number</td>
              <td>100</td>
              <td>--</td>
            </tr>
            <tr>
              <td>showNums</td>
              <td>是否显示数字</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true/false</td>
            </tr>
          </tbody>
        </table>
        <h5>Events</h5>
        <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>touch-end</td>
              <td>滑动结束时触发</td>
              <td>value</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            demo1:`<nut-slider  :value="10" :step="10" :min="10" @touch-end="afterTouch"></nut-slider>`
        }
    },
    methods:{
        afterTouch(val){
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>

pre{
    margin-top: 30px;
}
</style>
