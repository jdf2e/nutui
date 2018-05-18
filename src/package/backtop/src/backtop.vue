<template>
    <transition name="nut-mask-fade">
        <!-- <div class="nut-mask" @click="modalClick" :class="[customClass]" v-show="visible"><slot></slot></div> -->
        <div class="nut-gotop" v-show="visible" :style="{bottom:bottom+'rem',right:right+'rem'}" :screenNum="screenNum">
            <a href="javascript:;" class="nut-gotop-item" @click="goTop">
                <svg>
                    <use xlink:href="#arrow-thin-up" :style="{'color':arrowColor}" />
                </svg>
            </a>
        </div>
    </transition>
</template>
<script>
import arrowTopIcon from '../../../asset/img/svg/arrow-thin-up.svg';
export default {
    name:'nut-gotop',
    props: {
        'bottom':{
            type:[String, Number],
            default:0.8
        },
        'right':{
            type:[String, Number],
            default:0.3
        },
        'screenNum': {
            type:Number,
            default: 0.5
        },
        'arrowColor':{
            type:String,
            default:'#000000'
        }
    },
    data() {
        return {
            'visible': false,           
        }
    },
    methods: {
        
        goTop() {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            this.visible = false;
        },
        requestAniFrame(){
            return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
        }
        
    },
    watch:{
        
    },
    mounted(){
        const win = window;
        const requestAniFrame = this.requestAniFrame();
        let winHeight = win.innerHeight;
        let scheduledAniFrame = false;
        
        win.addEventListener('scroll',()=>{
            if (scheduledAniFrame) return;
            scheduledAniFrame = true;
            requestAniFrame(() => {
                scheduledAniFrame = false;
                if((document.documentElement.scrollTop || document.body.scrollTop) > (winHeight*this.screenNum)){
                    this.visible = true;
                }else{
                    this.visible = false;                
                }

            });
        })
    }
}
</script>
<style lang="scss" scoped>
    .nut-gotop {
        position: fixed;
        bottom: 80px;
        right: 30px;
        width: 45px;
        height: 45px;
        z-index: 10;
        overflow: hidden;
        a {
            display: block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #333;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #efefef;
            box-shadow: 0 0px 1px rgba(153, 153, 153, 0.5);
            border-radius: 20px;
            text-align: center;
            margin: 2px auto;
            svg {
                width: 20px;
                height: 40px;
            }
            line {
                stroke: #999;
                stroke-width: 2px;
            }
        }
    }

    .nut-gotop-open {
        display:block
    }
</style>