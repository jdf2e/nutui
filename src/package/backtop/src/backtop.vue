<template>
    <transition name="nut-mask-fade">
        <!-- <div class="nut-mask" @click="modalClick" :class="[customClass]" v-show="visible"><slot></slot></div> -->
        <div class="nut-gotop" v-show="visible" :style="{bottom:bottom+'px',right:right+'px'}" :screenNum="screenNum">
            <a href="javascript:;" class="nut-gotop-item" @click="goTop"><!-- Top -->
               <svg>
                    <line x1="10" y1="8" x2="20" y2="18" class="line" />
                    <line x1="10" y1="8" x2="0" y2="18" class="line" />
                    <line x1="10" y1="8" x2="10" y2="32" class="line" />
                </svg>
            </a>

        </div>
    </transition>
</template>
<script>
export default {
    name:'nut-gotop',
    props: {
        'bottom':{
            type:[String, Number],
            default:80
        },
        'right':{
            type:[String, Number],
            default:30
        },
        'screenNum': {
            type:Number,
            default: 0.5
        },
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