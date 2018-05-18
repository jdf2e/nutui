<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="倒计时组件。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-timer :timespacer="6000000000"  @end-timer="endTimer"></nut-timer>
        <nut-codebox :code="demo"></nut-codebox>     
        <nut-codebox code="export default {
    methods:{
      endTimer() {
        console.log('倒计时结束了！');
      }
    }
}"></nut-codebox>     

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
              <td>需要倒计时的毫秒数</td>
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
              <td>倒计时结束时触发</td>
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
        demo:`<nut-timer 
:timespacer="6000000000" 
@end-timer="endTimer"
></nut-timer>`
      }
    },
    methods:{
      endTimer() {
        console.log('倒计时结束了！');
      }
    }
}
</script>

<style>

</style>
