<template>
    <div class="nutui-mapbox">
        <div class="search"><input type="text" @keyup="searchKeyword" v-model="Keyword"/></div>
        <div class="nut-map" :id="option.id"></div>
    </div>
    
    <!-- 
    1、当前位置的定位，获取当前经纬度
    2、可以安装传入的经纬度显示位置。
    3、搜索功能，搜到然后标记出来。（多标记功能） 
    4、获取不到经纬度给一个友情提示
    -->
</template>
<script>
export default {
    name:'nut-map',
    props: {
        //地图的秘钥
        key:{
            type:String,
            default:"MNFBZ-3F2AJ-655FS-F7GI2-PM5WV-SJBIO"
        },
        option:{
            type:Object,
            default:{}
        }        
    },
    data() {
        return {
            Keyword:'',
            map:null,
            tc:null,           
            searchService:null,
            markerArrays:[],
            searchMarkers:[]
        };
    },
    methods: {
        searchKeyword(){
                let markers = this.searchMarkers;
                let markerArrays = this.markerArrays;
                var keyword = this.Keyword;//搜索关键字
                var region = '衡水';//城市
                var pageIndex = 1;
                var pageCapacity = 10;// 设置每页搜索结果数
                this.clearOverlays(markers);
                this.clearOverlays(markerArrays);
                //根据输入的城市设置搜索范围
                this.searchService.setLocation(region);
                //设置搜索页码
                this.searchService.setPageIndex(pageIndex);
                //设置每页的结果数
                this.searchService.setPageCapacity(pageCapacity);
                //根据输入的关键字在搜索范围内检索
                this.searchService.search(keyword);
                //根据输入的关键字在圆形范围内检索
                //var region = new qq.maps.LatLng(39.916527,116.397128);
                //searchService.searchNearBy(keyword, region , 2000);
                //根据输入的关键字在矩形范围内检索
                //region = new qq.maps.LatLngBounds(new qq.maps.LatLng(39.936273,116.440043),new qq.maps.LatLng(39.896775,116.354212));
                //searchService.searchInBounds(keyword, region);
        },  
        getMap() {
            //初始化地图信息 
            let that = this;
            let tcMapScript = document.querySelector('#tcMapScript');
            return new Promise(function (resolve, reject) {
                    window.initTcMap = function () {     
                        window.tcMap = qq;                    
                        resolve(qq);
                    };
                    if(!tcMapScript){
                        var script = document.createElement("script");
                        script.id="tcMapScript"
                        script.type = "text/javascript";
                        script.src = "http://map.qq.com/api/js?v=2.exp&callback=initTcMap&key="+that.key;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    }else{
                        if(window.tcMap){
                            resolve(window.tcMap);
                        }

                    }
                    
            })
        },
        marker(){            
            let tc = this.tc;
            //当前的地图
            let map = this.map;
            //地图显示的中心点（标记点）            
            let markers = this.option.markers; 
            //渲染坐标
            for(let index=0,item;item=markers[index];index++){
                //添加显示地图
                item = Object.assign(item,{
                    map:map
                });                
                //添加位置
                if(item.position&&item.position[0]&&item.position[1]) {
                    let position = new tc.maps.LatLng(item.position[0],item.position[1]);
                    item = Object.assign(item,{                    
                        position:position
                    });
                }
                //添加动画                
                if(item.animation){
                    let animation = tc.maps.MarkerAnimation[item.animation];
                    item = Object.assign(item,{                    
                        animation:animation
                    });
                }
                //添加地图icon
                if(item.icon){
                    let icon = new tc.maps.MarkerImage(item.icon);
                    item = Object.assign(item,{                    
                        icon:icon
                    });
                }
                //添加地图阴影
                if(item.shadow){
                    let shadow = new tc.maps.MarkerImage(item.shadow);
                    item = Object.assign(item,{                    
                        shadow:shadow
                    });
                }                
                let marker = new tc.maps.Marker(item);
                this.markerArrays.push(marker)
            }            
        },
        clearOverlays(overlays) {
            let overlay;
            while (overlay = overlays.pop()) {
                overlay.setMap(null);
            }
        },
        newSearchService(){
            let that = this;
            let tc = this.tc;
            let map = this.map;
            let searchMarkers = this.searchMarkers;
             //设置Poi检索服务，用于本地检索、周边检索
            this.searchService = new tc.maps.SearchService({
                //检索成功的回调函数
                complete: function(results) {
                    //设置回调函数参数
                    var pois = results.detail.pois;
                    if(pois){
                        var infoWin = new tc.maps.InfoWindow({
                            map: map
                        });
                        var latlngBounds = new tc.maps.LatLngBounds();
                        for (var i = 0, l = pois.length; i < l; i++) {
                            var poi = pois[i];
                            //扩展边界范围，用来包含搜索到的Poi点
                            latlngBounds.extend(poi.latLng);        
                            (function(n) {
                                var marker = new tc.maps.Marker({
                                    map: map
                                });
                                marker.setPosition(pois[n].latLng);        
                                marker.setTitle(i + 1);
                                searchMarkers.push(marker);
                                tc.maps.event.addListener(marker, 'click', function() {
                                    infoWin.open();
                                    infoWin.setContent('<div style="width:280px;height:100px;">' + 'POI的ID为：' +
                                        pois[n].id + '，POI的名称为：' + pois[n].name + '，POI的地址为：' + pois[n].address + '，POI的类型为：' + pois[n].type + '</div>');
                                    infoWin.setPosition(pois[n].latLng);
                                });
                            })(i);
                        }
                        that.searchMarkers = searchMarkers;
                        //调整地图视野
                        map.fitBounds(latlngBounds);
                    }
                    
                },
                //若服务请求失败，则运行以下函数
                error: function(val) {
                    console.log("出错了。",val);
                }
            });
        },
        init(){
            //console.log(tt);
            let tt = this.tc;
            let propsOptions = this.option.options; 
            //
            let center = null; 
            let id = this.option.id;
            //地图显示的中心点（标记点）
            if(propsOptions.center[0]&&propsOptions.center[1]){
                let center =new tt.maps.LatLng(propsOptions.center[0],propsOptions.center[1]);
                propsOptions = Object.assign(propsOptions,{                    
                     center:center
                });
            }
            //缩放类型，可设置以地图中心点或双指中心点为焦点（移动端）。 //不填默认缩放手指中心位置
            if(propsOptions.MapZoomType){
                let mapZoomType =  tt.maps.MapZoomType[propsOptions.MapZoomType];
                propsOptions = Object.assign(propsOptions,{                    
                     mapZoomType:mapZoomType
                });
            }       
            //地图显示类型 默认显示2d平面地图
            if(propsOptions.MapTypeId){
                let MapTypeId = tt.maps.MapTypeId[propsOptions.MapTypeId];
                propsOptions = Object.assign(propsOptions,{                    
                MapTypeId:MapTypeId
                });
            }            
            //地图初始化
            let elm = document.querySelector('#'+id);
            this.map  = new tt.maps.Map(elm,propsOptions);
            //是否创建一个marker 检索
            this.$nextTick(()=>{
                this.marker();
                this.newSearchService();
            })     
            //是否有检索功能

        }
    },
    mounted(){
        let that = this;
        this.getMap().then(
            qq=>{
                that.tc = qq;
                that.init();
            }
        );
    }
}
</script>
<style lang="scss">
.nutui-mapbox{
    position: relative;
    .search{
        position: absolute;
        z-index: 2;
        top: 26px;
        left: 71px;
    }
    .nut-map{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        z-index: 1;
    }
}
</style>