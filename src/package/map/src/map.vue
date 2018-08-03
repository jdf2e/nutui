<template>
    <div class="nutui-mapbox">
        <div class="search">
            
            <div class="text-msg">
                <input class="inpt-box" type="text" @keyup="searchKeywordlike" v-model="Keyword" />
                <span class="city-box">{{fristCity}}</span>
            </div>
            <ul v-show="suggestShow" class="suggest-box">
                <li v-for="(item,index) of address" :key="index" @click="searchcomplete(item.location)">
                    <span v-html="item.title"></span><span class="city-box" v-html="item.city"></span><span class="adrs-box" v-html="item.address"></span>
                </li>
            </ul>
        </div>
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
import ajax from "./ajax.js";
export default {
    name:'nut-map',
    props: {
        //地图的秘钥
        key:{
            type:String,
            default:"K3HBZ-ZSA3U-BMUVL-BUEEN-FL6JT-XUFLM"
        },
        keySky:{
            type:String,
            default:""
        },
        sn:{
            type:String,
            default:"136884f65834d7996cb7f3e0e4d4caca"
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
            searchMarkers:[],
            searchreslut:[],
            fristCity:'北极',
            suggestShow:true,
            address:[
        {
            "id": "14876786431467227136",
            "title": "地铁1号线",
            "address": "镇海路-23123123213231231231231231233-岩内",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 24.450615,
                "lng": 118.082858
            },
            "adcode": 350203,
            "province": "福建省",
            "city": "厦门市",
            "district": "思明区"
        },
        {
            "id": "15082332840100312374",
            "title": "地铁1号线",
            "address": "象峰--福州火车南站",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 26.14359,
                "lng": 119.329783
            },
            "adcode": 350111,
            "province": "福建省",
            "city": "福州市",
            "district": "晋安区"
        },
        {
            "id": "14090015977020043361",
            "title": "地铁1号线",
            "address": "富锦路--莘庄",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 31.392403,
                "lng": 121.42472
            },
            "adcode": 310113,
            "province": "上海市",
            "city": "上海市",
            "district": "宝山区"
        },
        {
            "id": "13416315680889077364",
            "title": "地铁1号线",
            "address": "福州火车南站--象峰",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 25.985704,
                "lng": 119.390658
            },
            "adcode": 350104,
            "province": "福建省",
            "city": "福州市",
            "district": "仓山区"
        },
        {
            "id": "13122401339403299943",
            "title": "地铁1号线",
            "address": "四惠东--苹果园",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 39.908484,
                "lng": 116.515367
            },
            "adcode": 110105,
            "province": "北京市",
            "city": "北京市",
            "district": "朝阳区"
        },
        {
            "id": "15603161543018241560",
            "title": "地铁1号线",
            "address": "下沙江滨--湘湖",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 30.287741,
                "lng": 120.38175
            },
            "adcode": 330104,
            "province": "浙江省",
            "city": "杭州市",
            "district": "江干区"
        },
        {
            "id": "11340020417067312772",
            "title": "地铁1号线",
            "address": "霞浦--高桥西",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 29.89056,
                "lng": 121.856639
            },
            "adcode": 330206,
            "province": "浙江省",
            "city": "宁波市",
            "district": "北仑区"
        },
        {
            "id": "15625709373494634863",
            "title": "地铁1号线",
            "address": "科学城--韦家碾",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 30.391156,
                "lng": 104.072393
            },
            "adcode": 510116,
            "province": "四川省",
            "city": "成都市",
            "district": "双流区"
        },
        {
            "id": "16422220751550941105",
            "title": "地铁1号线",
            "address": "岩内--镇海路",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 24.643125,
                "lng": 118.070151
            },
            "adcode": 350211,
            "province": "福建省",
            "city": "厦门市",
            "district": "集美区"
        },
        {
            "id": "16939387505286070840",
            "title": "地铁1号线",
            "address": "财经大学--刘园",
            "category": "基础设施:交通设施:地铁线路",
            "type": 5,
            "location": {
                "lat": 39.063931,
                "lng": 117.2772
            },
            "adcode": 120103,
            "province": "天津市",
            "city": "天津市",
            "district": "河西区"
        }
    ]
        };
    },
    methods: {
        
        searchKeywordlike(e){  
            //按回车 选取列表第一个         
            if(e.keyCode == 13&&this.address[0]){
               this.searchcomplete(this.address[0].location);
               return;
            }
             this.searchKeyword();
            //正常输入则显示查询列表
            let keyword = this.Keyword;//搜索关键字
            let that = this;
            //查询
            keyword&&ajax({
                    url:'http://apis.map.qq.com/ws/place/v1/suggestion',
                    type:"JSONP",
                    data:{
                        keyword:keyword,                        
                        key:that.key,
                        sn:that.sn
                    }
                }).then(res=>{              
                    that.suggestShow = true;      
                    console.log(res.data)                    
                    that.address = res.data;
                    that.fristCity = res.data[0]&&res.data[0].city;  
            })
        },
        // 有城市搜索
        searchKeyword(){
            //以知城市进行搜索
                let markers = this.searchMarkers;
                let markerArrays = this.markerArrays;
                var keyword = this.Keyword;//搜索关键字
                var region = this.fristCity;//城市
                var pageIndex = 1;
                var pageCapacity = 100;// 设置每页搜索结果数
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
        },
        closeSuggest(){
            this.suggestShow = false;
        },
        searchcomplete(res){           
            let map = this.map;
            let tc = this.tc;
            let searchMarkers = this.searchMarkers;             
                let markerArrays = this.markerArrays;
            //  清除之前的点
            this.clearOverlays(searchMarkers);
            this.clearOverlays(markerArrays);
            //更新地图
            let location = new tc.maps.LatLng(res.lat,res.lng);     
            let infoWin = new tc.maps.InfoWindow({
                map: map
            });
            let latlngBounds = new tc.maps.LatLngBounds();
            var marker = new tc.maps.Marker({
                map: map
            });     

            marker.setPosition(location);  
            searchMarkers.push(marker);
            this.searchMarkers = searchMarkers
            tc.maps.event.addListener(marker, 'click', function() {
                infoWin.open();
                infoWin.setPosition(location);
            });
            latlngBounds.extend(location);
            map.fitBounds(latlngBounds);
            this.closeSuggest();
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
                                    console.log(pois);
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
    width: 100%;
    height: 100%;    
    .search{
        position: relative;
        z-index: 2;
        // top: 26px;
        // left: 71px;
    }
    .nut-map{
        //position: absolute;
        width: 100%;
        height: 6rem;
        // top:0;
        // left:0;
        // z-index: 1;
    }
}
.search{
    .inpt-box{
        position: absolute;
        width: 100%;
        height: 100%;
        padding:0 .4rem;
        top:0;
        left: 0;
        z-index: 2;
        box-sizing: border-box;
        background: none;
        border:none;
        //opacity: 0;
        &:focus{
            outline: none;
        }
    }
    .text-msg{
        position: relative;
        z-index: 1;
        width:100%;
        height: .8rem;
        line-height: .8rem;
        padding:0 .4rem;
        background: #fff;
        box-sizing: border-box;
        border:1px solid rgb(83, 153, 245);
        .city-box{
            position: absolute;
            right: .4rem;
            top:50%;
            transform: translateY(-50%);
            background:  rgb(83, 153, 245);
            color:#fff;
            padding:0 .1rem;
            border-radius: .1rem;     
            line-height: .4rem;
            height: .4rem;
            font-size:.18rem;      
        }
    }
}
.suggest-box{
    position: absolute;
    width: 100%;
    list-style: none;
    background: #fff;
    border:1px solid rgb(221, 229, 241);
    overflow: hidden;
    height: 3rem;
    border-top:none;
    box-sizing: border-box;
    margin:0;
    padding:0;
    li{
        border-top:1px solid rgb(221, 229, 241);
        height: .6rem;
        line-height: .6rem;
        white-space: nowrap;
        overflow: hidden;
        font-size: .24rem;
        padding:0 .2rem;
        .city-box{
            background:  rgb(83, 153, 245);
            color:#fff;
            padding:0 .1rem;
            border-radius: .1rem;
            margin:0 .1rem;
        }
        .adrs-box{
            color: #666;
            font-size:.12rem;
        }
    }
    
    li:first-child{
        border-top:none;
    }
}
</style>