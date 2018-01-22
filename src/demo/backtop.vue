<template>
    <div>

        <h1>Backtop</h1>
        <p>一种返回页面顶部的快捷按钮，点击后会立即返回页面顶部。多用于页面过长时，方便用户返回头部查看信息。</p>
        <nut-gotop :bottom="80" :right="30" :screenNum="0.5"></nut-gotop>
       
      
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
