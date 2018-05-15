<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <p>默认用法</p>
        <p>{{swActive}}</p>
        <nut-switch :active.sync="swActive"></nut-switch>
        
        <p>自定义颜色</p>
        <nut-switch :height="0.3" :width="0.6" activeBgColor="#9ABB82" inActiveBgColor="#EAE7E2" btnColor="#CBDDDD"></nut-switch>
        
        <p>ON/OFF事件</p>
        <nut-switch @switch-on="switchOnEvt" @switch-off="switchOffEvt"></nut-switch>
    </div>


</template>

<script>
export default {
    data(){
        return{
          swActive:true
        }
    },
    methods:{
      switchOnEvt(){
        alert('on');
      },
      switchOffEvt(){
        alert('off');
      }
    }
}
</script>

<style>

</style>
