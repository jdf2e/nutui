<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="日期时间滑动选择器。" 
        :showQrCode="true"></nut-docheader>
        <!-- <h1>slidecalendar</h1>
        <p>M端日历组件，仅在手机端有效</p> -->
        <!-- <a class="button-primary button" href="/demo.html#/slidecalendar" target="_blank">DEMO</a> -->
        <h5>示例</h5>
        <h6>日期</h6>        
        <nut-codebox :code="demo1" imgUrl="../asset/img/demo/slidecalendar.png"></nut-codebox>
        <nut-codebox :code="demo4"></nut-codebox>
        
        <h6> 日期时间</h6>      
        <nut-codebox :code="demo2"></nut-codebox>
        <h6>时间</h6>   
        <nut-codebox :code="demo3"></nut-codebox>
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
              <td>data</td>
              <td>初始化时间</td>
              <td>String</td>
              <td>'2018-01-12,2019-05-12'</td>
              <td>--</td>
            </tr>  
            <tr>
              <td>type</td>
              <td>日期控件的类型</td>
              <td>String</td>
              <td>'datetime','time','date'</td>
              <td>--</td>
            </tr> 
             <tr>
              <td>id</td>
              <td>日期控件的id</td>
              <td>String</td>
              <td>'demo1'</td>
              <td>--</td>
            </tr>           
          </tbody>
        </table>
        <h5>Events</h5>
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
              <td>confirm</td>
              <td>选择日期后的回调返回选择的日期</td>
              <td>String</td>
            </tr>
          </tbody>
        </table>
        </div>
    </div>
</template>
<script>
// import Vue from 'vue';
export default {
    data(){
        return{            
            'demo1':`<nut-slidecalendar 
@confirm="choseTime" 
data="2018-04-12,2019-05-12"
></nut-slidecalendar>`,
            'demo2':`<nut-slidecalendar 
data="2018-04-12,2019-05-12" 
type="datetime" 
id="test2"
></nut-slidecalendar>`,
            'demo3':`<nut-slidecalendar 
type="time" 
id="test3"
></nut-slidecalendar>`,
            'demo4':`export default {
    methods:{
         choseTime(val){
            console.log(val)
        }
    }
}`
      }
    },
    methods:{
         choseTime(val){
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


