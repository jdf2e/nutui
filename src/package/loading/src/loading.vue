<template>
	<nut-mask :visible.sync="visible" :color="mini?'transparent':bgColor" :fade="fade" :closeOnClickModal="userClose" :class="['nut-loading',customClass]">
        <div class="inner" :style="{'background-color':mini?bgColor:'transparent','height':mini?height+'rem':'auto','width':mini?width+'rem':'auto','border-radius':borderRadius,'padding':padding+'rem'}">
            <span class="nut-loading-icon" :class="{'rotate':iconRotate}" v-if="mini||iconUrl">
                <img :src="iconUrl" v-if="iconUrl" alt=""/>
                <svg v-else width="30" height="30">
                    <use xlink:href="#loading"/>
                </svg>
            </span>
            <span class="nut-loading-text" v-if="text" :style=" {'color':textColor,'font-size':fontSize+'rem'}">{{ text }}</span>
        </div>
    </nut-mask>
</template>
<script>
import loadingIcon from '../../../asset/img/svg/loading.svg';
import nutMask from '../../mask/index.js';
export default {
    name:'nut-loading',
    components:{
        'nut-mask':nutMask
    },
    data() {
        return {
            mini:true,
            visible: false,
            maxDuring: 0, //最长显示时间(毫秒),为0不消失
            timer: null,
            bgColor:'rgba(0,0,0,.5)',
            iconUrl:'',
            customClass:'',
            userClose:true,
            padding:'0.3',
            text:'加载中...',
            iconRotate:false,
            height:'auto',
            width:'auto',
            borderRadius:'10%',
            fontSize:0.28,
            fade:false,
            textColor:'#000000'
        }
    },
    watch: {
        visible(val){
            if(val){
                this.showLoading();
                this.$emit('show-loading');
            }else{
                this.clearTimer();
                this.$emit('hide-loading');
            }
        }
    },
    methods: {
        showLoading() {
            this.clearTimer();
            if(this.maxDuring){
                this.timer = setTimeout(()=> {
                    this.hideLoading();
                }, this.maxDuring);
            }
        },
        hideLoading() {
            this.clearTimer();
            this.visible = false;
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }
}
</script>
<style lang="scss">
.nut-loading {
    display: flex;
    flex-direction: column;
    user-select:none;
    .inner{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing:border-box;
        span:nth-child(2){
            margin-top:.2rem;
        }
    }
    .nut-loading-icon{
        line-height: 0;
    }
    .rotate{
        animation: rotation 2s linear infinite;
    }
    @keyframes rotation{
        0% {-webkit-transform: rotate(0deg);}
        100% {-webkit-transform: rotate(360deg);}
    }
}
</style>