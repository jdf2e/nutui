<template>
    <div class="nut-map" id="nutuiMapTencent"></div>
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
        return {};
    },
    methods: {        
        getMap() {
            let that = this;
            return new Promise(function (resolve, reject) {
                    window.init = function () {
                        resolve(qq)
                    }
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+that.key;
                    script.onerror = reject;
                    document.head.appendChild(script);
            })
        },
        init(tt){
            //console.log(tt);
            let propsOptions = this.option;
            let center =new tt.maps.LatLng(propsOptions.center[0],propsOptions.center[1]);
            let mapZoomType =  tt.maps.MapZoomType[propsOptions.MapZoomType];
            let MapTypeId = tt.maps.MapTypeId[propsOptions.MapTypeId];
            let options = Object.assign(propsOptions,{
                center:center,
              mapZoomType:mapZoomType,
              MapTypeId:MapTypeId
            });
            let elm = document.querySelector('#nutuiMapTencent');
            let map  = new tt.maps.Map(elm,options)
        }
    },
    mounted(){
        let that = this;
        this.getMap().then(
            tt=>{
                that.init(tt);
            }
        );
    }
}
</script>
<style lang="scss">
</style>