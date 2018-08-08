<template>
    <div>
       <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Filter" 
        desc=""
        :showQrCode="true"></nut-docheader>
        <h5>示例</h5>
        <nut-codebox :code="demo1"></nut-codebox>
        <nut-codebox :code="demo2"></nut-codebox>
        <h5>Props</h5>
        <div class="tbl-wrapper">
            <table class="u-full-width">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                    <th>可选值</th>
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td>search</td>
                    <td>地图是否有搜索栏</td>
                    <td>Boolean</td>
                    <td>true </td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>location</td>
                    <td>地图是否需要有定位当前位置功能</td>
                    <td>Boolean</td>
                    <td>true </td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>option</td>
                    <td>用来配置地图初始化的参数包含id、marks和options</td>
                    <td>Object</td>
                    <td>--</td>
                    <td>--</td>
                </tr>                
                <tr>
                    <td>option.id</td>
                    <td>创建地图的ID</td>
                    <td>String</td>
                    <td>--</td>
                    <td>--</td>
                </tr>   
                <tr>
                    <td>option.options</td>
                    <td>地图的初始化配置参数</td>
                    <td>Object</td>
                    <td><a href="https://lbs.qq.com/javascript_v2/doc/mapoptions.html" target="_blank">同腾讯map API</a></td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>option.options.center</td>
                    <td>地图的初始化配置参数 与 腾讯map API 差异</td>
                    <td>Array</td>
                    <td>[--,--]</td>
                    <td>['lat：Number','lng:Number']</td>
                </tr>
                <tr>
                    <td>option.options.MapZoomType</td>
                    <td>地图的初始化配置参数 与 腾讯map API 差异</td>
                    <td>String</td>
                    <td>'DEFAULT'</td>
                    <td>'CENTER'</td>
                </tr>
                <tr>
                    <td>option.options.MapTypeId</td>
                    <td>地图的初始化配置参数 与 腾讯map API 差异</td>
                    <td>String</td>
                    <td>'ROADMAP'</td>
                    <td>'ROADMAP'该地图类型显示普通的街道地图。<br>,'SATELLITE'该地图类型显示卫星图像。<br>,'HYBRID'该地图类型显示卫星图像上的主要街道透明层。</td>
                </tr>
                <tr>
                    <td>option.markers</td>
                    <td>用来配置地图的坐标显示</td>
                    <td>Object</td>
                    <td><a href="https://lbs.qq.com/javascript_v2/doc/marker.html" target="_blank">同腾讯map API</a></td>
                    <td>--</td>
                </tr>
                 <tr>
                    <td>option.markers.icon</td>
                    <td>marker的自定义图片</td>
                    <td>url</td>
                    <td>--</td>
                    <td>--</td>
                </tr>
                <tr>
                    <td>option.markers.visible</td>
                    <td>是否可见 默认可见</td>
                    <td>Boolean</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>option.markers.animation</td>
                    <td>设置动画</td>
                    <td>String</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>option.markers.draggable</td>
                    <td>设置是否可以拖拽 默认不可以拖拽</td>
                    <td>Boolean</td>
                    <td>false</td>
                    <td>true</td>
                </tr>
                 
            </tbody>
            </table>
        </div>
        
        <h5>Events</h5>
        <div class="tbl-wrapper">
            <table class="u-full-width">
            <thead>
                <tr>
                <th>事件名</th>
                <th>说明</th>
                <th colspan="2">回调参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>option.markers.info</td>
                    <td>添加信息窗口,用于展示当前信息</td>
                    <td>fn</td>                    
                    <td>(res)=>{
                        res //为当前mark信息
                        return  '信息'//为想要显示的信息
                        }</td>
                </tr>
                <tr>
                    <td>option.markers.click</td>
                    <td>用于click事件回调返回当前marker信息</td>
                    <td>fn</td>                    
                    <td>(res)=>{
                        res //为当前mark信息                        
                        }</td>
                </tr>
                <tr>
                    <td>option.markers.dragend</td>
                    <td>用于drag事件回调返回当前marker信息</td>
                    <td>fn</td>                   
                    <td>(res)=>{
                        res //为当前mark信息                        
                        }</td>
                </tr>
            </tbody>
            </table>
        </div>       
        
    </div>   
</template>
<script>
export default {
    data(){
        return{
            demo1:`<nut-map class="map-box" :location="true" :option="map1"></nut-map>`,
demo2:`export default {
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
                    draggable: true,
                    scrollwheel: true,
                    disableDoubleClickZoom: true
                },
                marker:{          
                        animation:'BOUNCE', //'BOUNCE'反复弹跳'DOWN'落下,'DROP'从天而降,'UP'升起              
                        draggable: false,
                        //自定义Marker图标为大头针样式    
                        icon:"../../asset/img/map/mark.svg",           
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
    }
}`
        }
    },
    methods:{
    }
}
</script>

<style lang="scss">
</style>
