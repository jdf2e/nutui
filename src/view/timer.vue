<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="倒计时组件。" 
        :showQrCode="true"></nut-docheader>
        <h5>示例1</h5>
        <nut-timer 
        :timespacer="600000000"  
        @end-timer="endTimer1"></nut-timer>
        <nut-codebox :code="demo1"></nut-codebox>     
        <nut-codebox code="export default {
    methods:{
      endTimer1() {
        console.log('示例1的倒计时结束了！');
      }
    }
}"></nut-codebox>   
      <h5>示例2</h5>
        <nut-timer 
        timespacer="600000000" 
        @end-timer="endTimer2" 
        formater="dd天hh时mm分ss秒" 
        starttime="2018-06-05 12:30:30" 
        endtime="2018-06-06 10:13:30"></nut-timer>
        <nut-codebox :code="demo2"></nut-codebox>     
        <nut-codebox code="export default {
    methods:{
      endTimer2() {
        console.log('示例2的倒计时结束了！');
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
              <td>需要倒计时的毫秒数，如果有starttime和startend参数则此参数不生效</td>
              <td>Number</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>formater</td>
              <td>倒计时显示格式，d对应剩余天数，h对应剩余小时，m对应剩余分钟，s对应剩余秒</td>
              <td>String</td>
              <td>hh:mm:ss</td>
              <td>--</td>
            </tr>
            <tr>
              <td>starttime</td>
              <td>倒计时起始时间，可以为ms格式，可以是时间格式</td>
              <td>Number | String | Date</td>
              <td>0</td>
              <td>--</td>
            </tr>
            <tr>
              <td>startend</td>
              <td>倒计时结束时间，可以为ms格式，可以是时间格式</td>
              <td>Number String | Date</td>
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
        demo1:`<nut-timer 
:timespacer="6000000000" 
@end-timer="endTimer"
></nut-timer>`,
        demo2:`<nut-timer 
        timespacer="600000000" 
        @end-timer="endTimer2" 
        formater="dd天hh时mm分ss秒" 
        starttime="2018-06-05 12:30:30" 
        endtime="2018-06-06 10:13:30"></nut-timer>`
      }
    },
    methods:{
      endTimer1() {
        console.log('示例1倒计时结束了！');
      },
      endTimer2() {
        console.log('示例2倒计时结束了！');
      }
    }
}
</script>

<style>

</style>
