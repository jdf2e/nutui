<template>
    <div class="nut-ceilinglamp" :style="{height:divHeight+'px'}">
        <div class="ceilinglamp" id="ceilinglamp" :class="{'ceilinglamp-fixed':isFixed}" :style="{top:fixedTop+'px',zIndex:zIndex}">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-ceilinglamp',
    props: {
    	fixedTop: {
            type: [Number,String],
            default: 0
        },
        fixedType:{
            type:Boolean,
            default:true
        },
        arrivalEl:{
            type: String,
            default:''
        },
        screenNum: {
            type: [Number,String],
            default: 0
        },
        zIndex: {
            type: [Number,String],
            default: 1001
        }
    },
    data() {
        return {
        	offsetTop:0,
            divHeight:0,
            blankDiv:null,
            elesScrollTop:0,
            scrollTop:0,
            arrivalElTop:0,
            directFixedHeight:0,
            winHeight:0,
            cArrivalEl:null,
            isFixed:false
        };
    },
    methods:{
        init(){
            let that = this;
            let ceilEles = document.querySelector('#ceilinglamp');
            let timer = 0;
            if(this.arrivalEl){
                this.cArrivalEl = document.querySelector(this.arrivalEl);
                this.arrivalElTop = this.cArrivalEl.offsetTop;
            }
            if (window.innerHeight){
                this.winHeight = window.innerHeight;
            }
            else if ((document.body) && (document.body.clientHeight)){
                this.winHeight = document.body.clientHeight;
            }
            this.offsetTop = ceilEles.offsetTop;
            this.divHeight = ceilEles.clientHeight;
            //事件节流
            window.addEventListener('scroll',()=>{
                if(!timer){
                    timer = setTimeout(function(){
                        that.handleScroll();
                        timer = 0;
                    },1000/60);
                }
            });
        },
        handleScroll(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.directFixedHeight = this.fixedType ? 0 : this.divHeight;     //是否直接隐藏

            //是否设置几屏吸顶出现
            if(!this.screenNum){
                this.elesScrollTop = parseInt(this.offsetTop-this.fixedTop+this.directFixedHeight+this.winHeight*this.screenNum);
            }else{
                this.elesScrollTop = parseInt(-this.fixedTop+this.winHeight*this.screenNum);
            }
			if (this.scrollTop > this.elesScrollTop) {

                this.isFixed = true;
                //是否有目标元素
                if(this.cArrivalEl && this.scrollTop>(this.arrivalElTop+this.directFixedHeight)){
                    this.isFixed = false;
                }
			} else {
				this.isFixed = false;
			}
        }
    },
    mounted(){
        this.init();
    }
}
</script>
<style lang="scss">
.nut-ceilinglamp{
    .ceilinglamp{
        width: 100%;
        &.ceilinglamp-fixed{
            position: fixed;
            top: 0;
            left: 0;
        }
    }
}
</style>