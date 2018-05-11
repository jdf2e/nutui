<template>
    <div>

        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-gotop :bottom="0.8" :right="0.5" :screenNum="0.5"></nut-gotop>
       
      
      <div style="height:1500px;">
        <p>我是一个长页面，请一直向下拉...</p>
      </div>

    </div>
</template>

<script>
import Vue from 'vue';
import BackTop from '../package/backtop/index.js';

export default {
    data(){
        return{
          demo1:'<nut-gotop :bottom="80" :right="30" :screenNum="0.5"></nut-gotop>',
        }
    },
    components: {
      'nut-gotop':BackTop,
    },
    methods:{
      
    }
}
</script>

<style>

</style>
