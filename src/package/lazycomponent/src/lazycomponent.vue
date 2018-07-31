<template>
    <div class="nut-lazycomponent">        
         <transition-group 
            :tag="tagName" name="lazy-component" style="position: relative;"
            @before-enter="(el) => $emit('before-enter', el)"           
            @after-enter="(el) => $emit('after-enter', el)"
            @before-leave="(el) => $emit('before-leave', el)"
            @after-leave="(el) => $emit('after-leave', el)"
        >
            <div v-if="isInit" key="component">                
                <slot :loading="loading"></slot>
            </div>
            <div v-else-if="$slots.loading" key="loading">
                <slot name="loading"></slot>
            </div>
            <div v-else key="loading" v-html="loadsvg" class="loading-component-init" >
            </div>
        <!-- <div v-if="load" v-html="loadsvg"></div> -->        
        </transition-group>
    </div>
</template>
<script>
import {verInViewport, horInViewport} from '../../../util/util.js';
export default {
    name:'nut-lazycomponent',
   props: {
        during:{
            type:Number
        },
        tagName:{
            type:String,
            default:'div'
        },
        load:{
             type:Boolean,
            default:true
        },
        show:{
            type:Boolean,
            default:false
        },
        direction: {
            type: String,
            default: 'vertical'
        },
        viewport: {
            type: typeof window !== 'undefined' ? window.HTMLElement : Object,
            default: () => null
        },
        threshold: {
            type: String,
            default: '0px'
        },
        maxWaitingTime: {
            type: Number,
            default: 50
        }
    },
    data() {    
      //  $slots.skeleton       
        //获取可视
        let clientHeight = document.documentElement.clientHeight||document.body.clientHeight;  
        let clientWidth = document.documentElement.clientWidth||document.body.clientWidth;  
    //    console.log($slots.skeleton)
        return {
          viewHeight:clientHeight,
          viewWidth:clientWidth,
          isInit:false,
          io:null,
          timer:null,
          loadsvg:`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="24px" height="30px" viewBox="0 0 24 30"  xml:space="preserve">
                <rect x="0" y="0" width="4" height="10" fill="#bd2c00">
                <animateTransform attributeType="xml"
                    attributeName="transform" type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="#bd2c00">
                <animateTransform attributeType="xml"
                    attributeName="transform" type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.2s" dur="0.6s" repeatCount="indefinite" />
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="#bd2c00">
                <animateTransform attributeType="xml"
                    attributeName="transform" type="translate"
                    values="0 0; 0 20; 0 0"
                    begin="0.4s" dur="0.6s" repeatCount="indefinite" />
                </rect>
            </svg>`
        };
    }, 
    methods: {       
        onScroll(){
            let that = this;
            window.addEventListener("scroll",that.listenElm)
        },
        listenElm(){
            let that = this;   
            if(that.timer){
                clearTimeout(that.timer);
            } 
            that.timer  = setTimeout(()=>{
                if(that.NewIntersectionObserver({direction:that.direction})){
                    that.showComponent();
                    //移除监听
                    window.removeEventListener("scroll",that.listenElm)
                }
            },100)        
            
        },
        //是否可见判断
        Intersections(entries){               
                if(// 正在交叉
                    entries[0].isIntersecting ||
                    // 交叉率大于0
                    entries[0].intersectionRatio){
                    this.showComponent();                    
                    this.io.unobserve(this.$el);
                   //this.io.disconnect();
                }
        },
        //是否显示组件
        showComponent(){
            // 此时说明骨架组件即将被切换            
            // 此时可以准备加载懒加载组件的资源
            this.loading = true
            // 由于函数会在主线程中执行，加载懒加载组件非常耗时，容易卡顿
            // 所以在requestAnimationFrame回调中延后执行          
            this.requestAnimationFrame(() => {
                this.isInit = true;
                this.$emit('after-init',this.$el);
            })
        },
        //定时
        requestAnimationFrame (callback) {
        // 防止等待太久没有执行回调
        // 设置最大等待时间
            setTimeout(() => {
                if (this.isInit ) {
                    return
                }                
                callback()
            }, this.maxWaitingTime)
        // 兼容不支持requestAnimationFrame 的浏览器
            return (window.requestAnimationFrame || ((callback) => setTimeout(callback, 1000 / 60)))(callback)
        },
        NewIntersectionObserver(options){      
            //判断是否可见   
            let isShow = null;   
            switch (options.direction) {
                case 'vertical':
                    isShow = verInViewport(this.$el,this.viewHeight);                  
                    break;
                case 'horizontal':
                    isShow = horInViewport(this.$el,this.viewWidth);                    
                    break;
            }
            return isShow;
        }
    },
    mounted(){        
        if(IntersectionObserver){
            let rootMargin;
            switch (this.direction) {
            case 'vertical':
                rootMargin = `${this.threshold} 0px`
                break;
            case 'horizontal':
                rootMargin = `0px ${this.threshold}`
                break;
            };            
            let $elm = this.$el;
            this.io = new IntersectionObserver(this.Intersections,{  
                // 用于计算相交区域的根元素
                // 如果未提供，使用最上级文档的可见窗口
                root: this.viewport,
                // 同 margin，可以是 1、2、3、4 个值，允许时负值。
                // 如果显式指定了跟元素，该值可以使用百分比，即根元素大小的百分之多少。
                // 如果没指定根元素，使用百分比会出错。
                rootMargin,
                // 触发回调函数的临界值，用 0 ~ 1 的比率指定，也可以是一个数组。
                // 其值是被观测元素可视面积 / 总面积。
                // 当可视比率经过这个值的时候，回调函数就会被调用。
                threshold: [ 0, Number.MIN_VALUE, 0.01]        
            });
            //对当前元素进行监听
            this.io.observe($elm);
        } else{
            //初始化
            if(this.NewIntersectionObserver({direction:this.direction})){
                this.showComponent()
            } else {
                //添加滚动监听
                this.onScroll()
            }
        }        
    },  
    beforeDestroy () {      
        if (this.io) {
            this.io.unobserve(this.$el)
        }
    },}
</script>
<style lang="scss" scoped>
.nut-modulelazyloading{
    position: relative;
}
.loading-component-init{  
    text-align: center;    
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: rgba(212, 212, 212, 0.18);    
}
.lazy-component-enter {
  opacity: 0;
}
.lazy-component-enter-to {
   opacity: 1;
}
.lazy-component-enter-active {
  transition: opacity 0.3s 0.2s;
  position: absolute;
  top: 0;
  width: 100%;
}
.lazy-component-leave {
  opacity: 1;
}
.lazy-component-leave-to {
  opacity: 0;
}
.lazy-component-leave-active {
  transition: opacity 0.5s;
}
</style>