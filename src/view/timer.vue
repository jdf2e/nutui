<template>
    <div>
        <h1>Timer</h1>
        <p>倒计时组件</p>
        <h5>示例</h5>
        <pre><code v-highlight v-text="demo"></code></pre>
        <h5>展示效果</h5>
        <nut-timer :timespacer="6000000000"  @end-timer="endTimer"></nut-timer>
        <p></p>
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
              <td>timespacer</td>
              <td>需要倒计时的间隔，单位ms</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
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
              <td>end-timer</td>
              <td>倒计时结束后回调</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>


</template>

<script>
export default {
    data(){
      return {
        demo:`<nut-timer :timespacer="6000000000" @end-timer="endTimer"></nut-timer>`
      }
    },
    methods:{
      endTimer() {
        console.log('倒计时结束了！！')
      }
    }
}
</script>

<style>

</style>
