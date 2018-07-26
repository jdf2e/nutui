<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-countup :initNum='0' :endNum='200'></nut-countup>
        <nut-countup :initNum='150.00' :endNum='0.00' :speed='2.62' :toFixed='2'></nut-countup>
        <hr/>
        <nut-countup :initNum='1000.00' :endNum='0.00' :speed='6.3'  :startFlag='startNum' :toFixed='2'></nut-countup>
        <button  class="countup-btn" v-on:click='changeNum'>点击我触发数字滚动</button>
        <!-- DEMO区域 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            startNum:false,
        }
    },
    methods:{
        changeNum(){
            this.startNum =true;
        }
    }
}
</script>

<style lang="scss">
    .countup-btn{
        display: block;
        width:4rem;
        height:1rem;
        line-height:1rem;
        color:#fff;
        background:#96C40F;
        border:0;
        border-radius: 5px;
        margin: 0 auto;
        font-size: 0.36rem;
        letter-spacing: 1px;
    }
</style>
