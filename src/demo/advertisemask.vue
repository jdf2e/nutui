<template>
    <div>
        <h1>advertisemask</h1>
        <p>一种用于打开APP后显示的图片广告弹层。</p>
        <h5>示例</h5>
        <p>默认用法</p>
         <nut-advertisemask 
            imgSrc="/asset/img/advertising/adver.png"
            linkHref = 'https://m.jd.com/'
            :picWidth="5" 
            :picHeight="6"
            :clickMask="true" 
            :showClose='true'
            :closeTop="3"
            :closeRight="0.8"
            :closeScale="1.2"
            :circleShow="true"
            :initShow.sync="initShow"
            @jumpTo="jumpToFun"
            @closeMask="closeMaskFun"
            @maskClose="maskClose"
            @maskOpen="maskOpen"
            >
        </nut-advertisemask>
        <button v-on:click="clickMe" class="button button-primary">点击出现广告蒙层</button>
    </div>
</template>

<script>
import Vue from 'vue';
export default {
    data(){
        return{
          initShow:true,
          initCeshi:1,
          demo1:'',
        }
    },
    components: {
      
    },
    methods:{
      jumpToFun(){
        console.log('点击了跳转');
      },
      closeMaskFun(){
        console.log('点击了关闭按钮');
      },
      maskClose(){
        console.log('关闭了蒙层');
      },
      maskOpen(){
        console.log('打开了蒙层');
      },
      clickMe(){
        this.initShow = true;
      }
    }
}
</script>

<style>
  
</style>
