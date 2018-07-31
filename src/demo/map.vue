<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-map class="map-box"></nut-map>
        <!-- DEMO区域 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
.map-box{
    width: 100%;
    height: 200px;
}
</style>
