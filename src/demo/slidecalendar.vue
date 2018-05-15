<template>
  <div class="wrapper">
       <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <h5>示例</h5>
        <p>日期</p>
        <nut-slidecalendar @confirm="choseTime" :data="data1"></nut-slidecalendar>           
        <p> 日期时间</p>     
        <nut-slidecalendar :data="data2" :type="type2" :id="demo2"></nut-slidecalendar>            
        <p>时间</p>
        <nut-slidecalendar :type="type3" :id="demo3"></nut-slidecalendar>           
  </div>
</template>

<script>
import SlideCalendar from '../../config.json';
export default {
    name:'index',
    data(){
        return{
            data1:'2018-04-12,2019-05-12',
            data2:'2018-04-12,2019-05-12',
            type2:'datetime',    
            demo2:'test2',
            type3:'time',
            demo3:'test3',
        }
    },
    methods:{
         choseTime(val){
            console.log(val)
        }
    }
}
</script>


<style lang="scss" >
    .nut-slidecalendar{
        input{
            border:1px solid #ccc;
            height: .4rem;
            line-height: .4rem;
            border-radius: .04rem;
        }
    }
</style>
