<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-countup :initNum='0' :endNum='200'></nut-countup>
        <br/>
        <nut-countup :initNum='150.00' :endNum='0.00' :speed='2.62' :toFixed='2'></nut-countup>
        <hr/>
        <nut-countup :initNum='1000.00' :endNum='0.00' :speed='6.3'  :startFlag='startNum' :toFixed='2'></nut-countup>
        <a class="button button-primary" href="javascript:;" @click="changeNum">点击触发数字滚动</a>
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
</style>
