<template>
    <div>
        <h1>Telinput</h1>
        <p>带有间隔的电话输入框，支持自定义间隔位数，带有基本电话校验。</p>
        <!-- DEMO区域 -->
        <!-- <nut-switch :height="30" :width="60" @switch-on="switchOn" @switch-off="switchOff"></nut-switch> -->
        <h5>示例</h5>
        <p>默认用法</p>
        <nut-telinput></nut-telinput>
       
        <p>自定义输入框宽高、带有清除按钮</p>
        <nut-telinput 
          telWidth="50%" 
          telHeight="50" 
          :clearPic="true"
        ></nut-telinput>
        
        <p>增加回调函数，且提示信息位置在输入框下面</p>
        <nut-telinput 
        :gapone="3" 
        :gapsec="7" 
        telWidth="250" 
        telHeight="50" 
        :clearPic="true"
        tipsInfo="请输入正确的电话号码"
        placeText="请输入自定义文案"
        tipsPosition="bottom"
        class="input-telnum"
        @pass-test="passTest"
        @clear="clear"
        @error-tel="errorTel"
        ></nut-telinput>
        
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data(){
        return{
          
        }
    },
    methods:{
      clear:function(){
        console.log('点击了清除按钮');
      },
      passTest:function(value){
        console.log(value);
      },
      errorTel:function(value){
        console.log('error'+value)
      }
    }
}
</script>

<style>
.input-telnum .nut-telinput-box ::placeholder{
    color:green;
};
</style>
