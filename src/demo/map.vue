<template>
    <div>
        <!-- 组件名和描述 -->
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-map class="map-box" :location="true" :option="map1"></nut-map>
         <!-- <nut-map :id="test2" class="map-box" :option="options" :markers="markers"></nut-map> -->
        <!-- DEMO区域 -->
    </div>
</template>

<script>
export default {
    data(){
        return{    
            map1:{
                id:'test1',        
                options:{                
                    center:[39.914850, 116.403765],
                    zoomControl: false,
                    zoom: 15,
                    minZoom:2,                
                    maxZoom:18,
                    mapZoomType:'CENTER',
                    //MapTypeId:'SATELLITE',
                    draggable: true,
                    scrollwheel: true,
                    disableDoubleClickZoom: true
                },
                marker:{          
                       // animation:'BOUNCE', //'BOUNCE'反复弹跳'DOWN'落下,'DROP'从天而降,'UP'升起  
                        //设置Marker可拖动
                        draggable: false,
                        //自定义Marker图标为大头针样式    
                        icon:"../../asset/img/map/mark.svg",
                        //自定义Marker图标的阴影
                        //shadow:"",
                        //设置Marker标题，鼠标划过Marker时显示
                        title: '测试',
                        //设置Marker的可见性，为true时可见,false时不可见
                        visible: true,
                        click:(res)=>{
                            console.log(res)
                        },
                        info:(res)=>{
                            console.log(res);
                            return '';
                        }
                }
                
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
    height: 500px;
}
</style>
