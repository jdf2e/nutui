<template>
    <div>
        <h1>Switch</h1>
        <p>一种滑动开关，通过点击使按钮左右滑动，同时触发对应的开关状态。</p>
        <p>默认用法</p>
        <nut-switch :active="true"></nut-switch>
        
        <p>自定义颜色</p>
        <nut-switch :height="30" :width="60" activeBgColor="#9ABB82" inActiveBgColor="#EAE7E2" btnColor="#CBDDDD"></nut-switch>
        
        <p>ON/OFF事件</p>
        <nut-switch @switch-on="switchOnEvt" @switch-off="switchOffEvt"></nut-switch>
        
        
    </div>


</template>

<script>
export default {
    data(){
        return{
          demo1:`<nut-switch :active="true"></nut-switch>`,
          demo2:`<nut-switch :height="30" :width="60" activeBgColor="#9ABB82" inActiveBgColor="#EAE7E2" btnColor="#CBDDDD"></nut-switch>`,
          demo3:`<nut-switch @switch-on="switchOnEvt" @switch-off="switchOffEvt"></nut-switch>`,
          demo4:`export default {
    methods:{
      switchOnEvt(){
        alert('on');
      },
      switchOffEvt(){
        alert('off');
      }
    }
}`,
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
