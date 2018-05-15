<template>
    <div class="nut-pictureview" v-show="isVisible">
        <div class="pv-con" @click="closePic" @touchmove.stop.prevent="cancleTouch" :style="{'background-color':bgColor}">
            <nut-swiper 
                :pagination-visible="true"
                :performanceMode="true"
                direction="horizontal"
                :paginationVisible="pagination"
                ref="picReload">
                <div class="nut-swiper-silde" v-for="(item, index) in imgArr">
                    <img :src="item">
                </div>
            </nut-swiper>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'nut-pictureview',
    props: {
        'visible': {
            default: false
        },
        'bgColor':{
            type:String,
            default:'rgba(0,0,0,.5)'
        },
        'imgArr':{
            type:Array,
            default:[]
        },
        'initNum':{
            type:Number,
            default:1
        },
        'pagination':{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            isVisible: false,
        }
    },
    mounted(){
        this.isVisible = this.visible;
        
    },
    methods: {
        closePic() {
            this.$emit('close-pic');
            this.$emit('update:visible',false);
            
        },
        cancleTouch(){
            return false;
        }
        
    },
    watch:{
        visible(value){
            this.isVisible = value;
            if(this.isVisible == true){
                this.$refs.picReload.updateSlidesBindEvent(this.initNum);
            }
        }
    }
}
</script>
<style lang="scss">
.pv-con{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0; 
    background:rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content:center;
    .nut-swiper{
        height: 4rem;
        .nut-swiper-silde{
            display: flex;
            align-items: center;
            justify-content:center;
        }
    }
    img{
        max-width: 100%;
        max-height: 100%;
    }

}
</style>