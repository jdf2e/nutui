<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 -->
        <h3>示例1</h3>
        <nut-timer 
        :timespacer="600000000"  
        @end-timer="endTimer1"></nut-timer>
        <h3>示例2</h3>
        <nut-timer 
        timespacer="600000000" 
        @end-timer="endTimer2" 
        formater="dd天hh时mm分ss秒" 
        starttime="2018-06-05 12:30:30" 
        endtime="2018-06-06 10:13:30"></nut-timer>       
    </div>
</template>

<script>
export default {
    data(){
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
