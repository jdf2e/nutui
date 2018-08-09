<template>
    <div class="nutui-mapbox">
        <div class="search">            
            <div v-if="search" class="text-msg">
                <input placeholder="请输入搜索内容" class="inpt-box" type="sreach" @keyup="searchKeywordlike" v-model="Keyword" />
                <span class="title-box">{{Keyword}}</span>
                <span v-if="fristCity" class="city-box">{{fristCity}}</span>               
            </div>
            <ul v-show="suggestShow&&address.length>0" class="suggest-box">
                <li v-for="(item,index) of address" :key="index" @click="searchcomplete(item)" class="list">
                    <div class="mark">                        
                         <svg width="18" height="18">
                            <use xlink:href="#location"/>
                        </svg>
                        </div>
                    <div class="msg">
                        <div class="tit" v-html="item.title"></div>
                        <div class="adr">{{item.address}}</div>                       
                    </div>
                    
                </li>
            </ul>
        </div>
        <!-- 定位 -->
        <svg v-if="location" class="map-ca" width="30" height="30" @click="getlocationApp">
            <use xlink:href="#getlocation"/>
        </svg>
        <!-- 地图 -->
        <div @click="closeSuggest" class="nut-map" :id="option.id"></div>
    </div>
    
    <!-- 
    1、当前位置的定位，获取当前经纬度
    2、可以安装传入的经纬度显示位置。
    3、搜索功能，搜到然后标记出来。（多标记功能） 
    4、获取不到经纬度给一个友情提示
    -->
</template>
<script>
import './map.scss';
import jsonp from "./jsonp.js";
import getMap from './tcMap.js';
import latSvg from '../../../asset/img/map/location.svg';
import getlocation from '../../../asset/img/map/getlocation.svg';
import getolocation from './location.js';
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
        },
        search:{
            type:Boolean,
            default:true
        },
        location:{
            type:Boolean,
            default:true
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
            fristCity:'',
            fristAddress:'',
            firstTitle:"",
            suggestShow:true,
            timeSet:null,
            delay:500,
            address:[],
            svgLc:latSvg
        };
    },
    methods: {        
        //模糊查询
        searchKeywordlike(e){  
            //正常输入则显示查询列表
            let keyword = this.Keyword;//搜索关键字
            let that = this;
            //按回车 选取列表第一个         
            if(keyword&&e.keyCode == 13&&this.address[0]){               
               this.fristAddress =this.address[0].address;
               that.searchKeyword();
               return;
            }
            //查询
            if(keyword){  
                this.requestAnimationFrame(()=>{                    
                    jsonp({
                            url:'http://apis.map.qq.com/ws/place/v1/suggestion',
                            type:"JSONP",
                            data:{
                                keyword:keyword,                        
                                key:that.key,
                                sn:that.sn
                            }
                        }).then(res=>{              
                            that.suggestShow = true;      
                            ////console.log(res.data)     
                            if(res.data){
                                that.address = res.data;
                                that.fristCity = res.data[0]&&res.data[0].city;     
                            }               
                    })
                }) 
            } else {
                this.address = [];
            }
        },
        // 有城市搜索
        searchKeyword(){
            //以知城市进行搜索
                let markers = this.searchMarkers;
                let markerArrays = this.markerArrays;
                let keyword = this.Keyword;//搜索关键字
                let region = this.fristCity;//城市
                if(region){
                    let pageIndex = 1;
                    let pageCapacity = 20;// 设置每页搜索结果数
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
                    this.closeSuggest();
                }                
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
            this.marker(res.location);            
            this.searchMarkers = searchMarkers;
            //更新地图
            let location = new tc.maps.LatLng(res.location.lat,res.location.lng); 
            let latlngBounds = new tc.maps.LatLngBounds();
            latlngBounds.extend(location);
            map.fitBounds(latlngBounds);
            this.Keyword = res.title;
            this.fristCity = res.city;
            this.closeSuggest();
        },
        marker(lc){    
            ////console.log(lc)             
            let tc = this.tc;
            //当前的地图
            let map = this.map;
            let searchMarkers = this.searchMarkers;    
            ////console.log(searchMarkers) 
            //设置坐标点
            let marker = new tc.maps.Marker({
                map: map,
                position: new tc.maps.LatLng(lc.lat,lc.lng)
            });            
            searchMarkers.push(marker);
            this.searchMarkers = searchMarkers;                   
            let markerOption = this.option.marker; 
            if(markerOption){   
                //是否可见 默认可见
                if(!markerOption.visible){
                    marker.setVisible(markerOption.visible);
                }
                //设置动画
                if(markerOption.animation){
                    marker.setAnimation(tc.maps.MarkerAnimation[markerOption.animation]);
                }
                //设置是否可以拖拽 默认不可以拖拽
                if(markerOption.draggable){
                    marker.setDraggable(true);
                }  
                //设置自定义图片                     
                if(markerOption.icon){                
                    let icon = new tc.maps.MarkerImage(markerOption.icon);
                    marker.setIcon(icon);
                } 
                if(markerOption.title) {
                    marker.setTitle(markerOption.title);
                }
                // //添加信息窗口
                if(markerOption.info){
                    var info = new tc.maps.InfoWindow({
                        map: map
                    });
                }
                //标记Marker点击事件
                if(markerOption.click){
                    tc.maps.event.addListener(marker, 'click', function() {
                        //console.log(marker.getPosition())
                        if(markerOption.click){
                            markerOption.click(marker)
                        }
                        if(markerOption.info){
                            info.open();
                            info.setContent(markerOption.info(marker));
                            info.setPosition(marker.getPosition());
                        }
                        
                    });
                }                
                //设置Marker停止拖动事件
                if(markerOption.dragend){
                    tc.maps.event.addListener(marker, 'dragend', function() {
                      //console.log(marker.getPosition())
                        if(markerOption.marker){
                            markerOption.click(marker)
                        }
                        if(markerOption.info){
                            info.open();
                            info.setContent(markerOption.info(marker));
                            info.setPosition(marker.getPosition());
                        }
                    });
                }
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
                    let pois = results.detail.pois;
                    if(pois){
                        let infoWin = new tc.maps.InfoWindow({
                            map: map
                        });
                        let latlngBounds = new tc.maps.LatLngBounds();
                        for (let i = 0, l = pois.length; i < l; i++) {
                            let poi = pois[i];
                            //扩展边界范围，用来包含搜索到的Poi点
                            latlngBounds.extend(poi.latLng);        
                            (function(n) {
                                let marker = new tc.maps.Marker({
                                    map: map
                                });
                                
                                marker.setPosition(pois[n].latLng);        
                                marker.setTitle(i + 1);
                                searchMarkers.push(marker);
                                tc.maps.event.addListener(marker, 'click', function() {
                                    infoWin.open();
                                    //console.log(pois);
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
                    //console.log("出错了。",val);
                }
            });
        },
        init(){
            ////console.log(tt);
            let tt = this.tc;
            let propsOptions = this.option.options; 
            let langs = {
                 lat:propsOptions.center[0],
                    lng:propsOptions.center[1]
            }
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
                this.marker(langs);
                this.newSearchService();
            })     
            //是否有检索功能
        },
        requestAnimationFrame (callback) {
            let delay = this.delay;
            let timeSet = this.timeSet;
            if(timeSet){
                clearTimeout(timeSet);
            }
            this.timeSet = setTimeout(() => {                              
                    callback()
                }, delay)        
        },
        getlocationApp(){
            let that = this;
            let tc = this.tc;
            getolocation().then(()=>{
                let geolocation = new tc.maps.Geolocation();
                geolocation.getLocation(ops=>{                    
                    // res.location.lat,res.location.lng
                    if(ops){
                        let res = {
                            location:{
                                lat:ops.lat,
                                lng:ops.lng
                            }
                        }                        
                         that.searchcomplete(res);
                    }
                   
                })
            })
        }
    },
    mounted(){
        let that = this;
        let key = that.key;
        getMap(key).then(
            qq=>{
                that.tc = qq;
                that.init();
                if(that.location){
                    that.getlocationApp();
                }
                
            }
        );
        // 定位当前
        
    }
}
</script>
<style lang="scss">

</style>