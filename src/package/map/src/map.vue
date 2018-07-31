<template>
    <div class="nut-map" id="nutuiMapTencent"></div>
</template>
<script>
export default {
    name:'nut-map',
    props: {
        key:{
            type:String,
            default:"MNFBZ-3F2AJ-655FS-F7GI2-PM5WV-SJBIO"
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
                        resolve(qq)//注意这里
                    }
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = "http://map.qq.com/api/js?v=2.exp&callback=init&key="+that.key;
                    script.onerror = reject;
                    document.head.appendChild(script);
            })
        },
        init(tt){
            console.log(tt);
            let elm = document.querySelector('#nutuiMapTencent');
            let map  = new tt.maps.Map(elm)
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