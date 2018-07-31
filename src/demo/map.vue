<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-map class="map-box" :option="options"></nut-map>
        <!-- DEMO区域 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            options:{
                center:[39.914850, 116.403765],
                zoom: 15,
                minZoom:2,                
                maxZoom:18,
                mapZoomType:'CENTER',
                MapTypeId:'SATELLITE',
                draggable: true,
                scrollwheel: true,
                disableDoubleClickZoom: true
            }
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
