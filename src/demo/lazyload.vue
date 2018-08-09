<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        
        <!-- DEMO代码 -->
        <div 
        v-nut-lazyload='{          
          "height":100
        }'
           >
          <img lazyload class="test" data-src="https://img30.360buyimg.com/da/jfs/t14185/125/556275389/303641/97b4c333/5a0e37bfN9b72d735.jpg">
          <img lazyload class="test" data-src="https://img13.360buyimg.com/da/jfs/t13558/359/718973197/114717/dc9a4598/5a1279abNb62cd51f.jpg">
          <img lazyload class="test" data-src="https://img20.360buyimg.com/da/jfs/t13513/278/766279282/105852/3bc69d5b/5a138f98Nf0f4fbc5.jpg" >
          <img lazyload class="test" data-src="https://img20.360buyimg.com/da/jfs/t10597/214/1767280119/107853/e81bef25/59e5deffN82945fbf.jpg">
          <img lazyload class="test" data-src="https://img14.360buyimg.com/da/jfs/t11074/294/1802222077/76562/336432ea/5a096c9dNda606baa.jpg">
          <img lazyload class="test" data-src="https://img30.360buyimg.com/jgsq-productsoa/jfs/t13666/342/466703104/65783/7022b077/5a0c193cN9124d3e0.jpg">
          </div>
        </div>
    </div>
   <!--  //-->
</template>
      
<script>
import Vue from 'vue';
import lazyload from '../package/lazyload/index.js';

export default {
    name:'lazyload',
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>

<style>
img{
  display:block;
  max-width:100%;
}
</style>
