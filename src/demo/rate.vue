<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <!-- DEMO区域 -->
        <p>默认用法</p>
        <nut-rate :num='5' :picWidth='0.5' :picHeight='0.5' @change-rate="changeRate"></nut-rate>
        
        <p>可配置图片路径，需同时配置图片的高度和宽度</p>
        <!-- DEMO代码 -->
        <nut-rate :num='10' :currValue="2" originalPath="../asset/img/svg/heart.svg" :picWidth='0.32' :picHeight='0.31' activePath="../asset/img/svg/follow.svg" @change-rate="changeRate"></nut-rate>    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        changeRate(index){
            console.log(index);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
