<template>
    <div class="nut-swiper"
        :class="[direction,{'dragging':dragging}]"
        @touchstart="_onTouchStart($event)"
        @mousedown="_onTouchStart($event)" >
        <div class="nut-swiper-wrap"
            :style="{
                    'transform':'translate3d('+translateX+'px,'+translateY+'px,0)',
                    'transition-duration':transitionDuration+'ms',
                    '-webkit-transform':'translate3d('+translateX+'px,'+translateY+'px,0)',
                    '-webkit-transition-duration':transitionDuration+'ms'
                    }"
            @transitionend="_onTransitionEnd">
            <slot></slot>
        </div>
        <div class="nut-swiper-pagination" v-show="paginationVisible">
            <span class="swiper-pagination-bullet" :class="{'active':index+1 ===currentPage}" v-for="(slide,index) in slideEls" @click="paginationClickable && setPage(index+1)" :key="index">
            </span>
        </div>
    </div>
</template>
<script>
const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';
export default {
    name:'nut-swiper',
    props: {
         direction:{
            type:String,
            default:VERTICAL,
            validator:(value) => [VERTICAL,HORIZONTAL].indexOf(value) >-1
         },
         paginationVisible:{
            type:Boolean,
            default:false
         },
         paginationClickable:{
            type:Boolean,
            default:false
         },
         loop:{
            type:Boolean,
            default:false
         },
         speed:{
            type:Number,
            default:500
         },
         performanceMode:{//性能标识 默认是false, 主要是正对拖拽过程中的移动
            type:Boolean,
            default:false
         },
         autoPlay:{
            type:Number,
            default:0
         },
         lazyLoad:{//图片lazy
            type:Boolean,
            default:false
         },
         lazyLoadingUrl:{
            type:String,
         },
         lazyLoaderrorUrl:{
            type:String,
         },
         freeMode:{
            type:Boolean,
            default:false
         },
         initPage:{
            type:Number,
            default:1,
         },
         type:{
            type:String,
            default:'single',
         }
    },
    data() {
        return {
            dragging:false,
            currentPage:this.initPage,
            lastPage:1,
            translateX:0,
            translateY:0,
            startTranslate:0,
            transitioning:false,//动画执行时间
            slideEls:[],
            translateOffset:0,//当前偏移初始位置的距离
            transitionDuration:0,
            startPos:null,
            delta:0,//拖动的距离间隔
            startTime:'',
            isLoop:this.loop,
            timer:null,// 自动播放计数器
            stopAutoPlay:false,//停止自动播放
            swiperWrap:null,// swiperWrap dom
            oneSlideTranslate:0,//一个slide 的距离用于判断，手指停在第几个silde上了

        };
    },
    methods: {
        
        next(sPage){

            if(sPage && this.type==='multiple'){
                if(sPage < this.slideEls.length){
                    this.setPage(sPage+1);
                    return;
                }else{
                    this.setPage(this.slideEls.length);
                    return;
                }
            }

            let page = this.currentPage;
            if(page <this.slideEls.length || this.isLoop){

                this.setPage(page + 1,false,'next');
            }else{
                this._revert();
            }
        },
        prev(sPage){

            if(sPage && this.type==='multiple'){
                if(sPage > 0){
                    this.setPage(sPage+1);
                    return;
                }else{
                    this.setPage(0);
                    return;
                }
            }
            let page = this.currentPage;
            if(page > 1 || this.isLoop){
                this.setPage(page - 1,false,'prev');
            }else{
                this._revert();
            }
        },
        setPage(page,noAnimation,cType){

            if(page === 0){
                this.currentPage = this.slideEls.length;
            }else if(page === this.slideEls.length + 1){
                this.currentPage  = 1;
            }else{
                this.currentPage = page;
            }

            if(this.isLoop){
                
                this._setTranslate(this._getTranslateOfPage(page));
                if(noAnimation) {
                    //添加select cls
                    let selectedSlide = this.$el.querySelector('.nut-swiper-silde-selected');
                    selectedSlide && selectedSlide.classList.remove('nut-swiper-silde-selected');
                    this.slideEls[this.currentPage-1].classList.add('nut-swiper-silde-selected');
                    this.lastPage = this.currentPage;
                    return;
                }
                this._onTransitionStart(cType);
                
            }else{
                
                this._setTranslate(this._getTranslateOfPage(page));

                if(noAnimation) {
                    //添加select cls
                    let selectedSlide = this.$el.querySelector('.nut-swiper-silde-selected');
                    selectedSlide && selectedSlide.classList.remove('nut-swiper-silde-selected');
                    this.slideEls[this.currentPage-1].classList.add('nut-swiper-silde-selected');
                    this.lastPage = this.currentPage;
                    return;
                };
                this._onTransitionStart(cType);
                
            }
        },
        isHorizontal(){
            return this.direction === HORIZONTAL;
        },
        isVertical(){
            return this.direction === VERTICAL;
        },
        updateSlidesBindEvent(pageSize){
            this.$nextTick(()=>{
                if(pageSize!=undefined) this.currentPage = pageSize;
                this.swiperWrap = this.$el.querySelector('.nut-swiper-wrap');
                this.slideEls = [].map.call(this.swiperWrap.children,el=>el);
                if(this.slideEls.length === 0) return;
                this._getSlideDistance((this.slideEls)[0]);
                if(this.autoPlay != 0 ){
                    this.isLoop = true;
                    this._createAutoPlay();
                }
                if(this.isLoop){
                    this._createLoop();
                    this.setPage(this.currentPage,true);
                }else{
                    this.setPage(this.currentPage,true);
                }

                this.lazyLoad && this._imgLazyLoad();//第一次进来时候



            });
        },
        _getSlideDistance(el){
            //let propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
            let styleArr = getComputedStyle(el);
            let marginTop = styleArr['marginTop'].replace('px','') - 0;
            let marginBottom = styleArr['marginBottom'].replace('px','') - 0;
            let marginRight = styleArr['marginRight'].replace('px','') - 0;
            let marginLeft = styleArr['marginLeft'].replace('px','') - 0;

            if(this.isHorizontal()){
                this.oneSlideTranslate = marginLeft + marginRight + el['offsetWidth'];
            }else{
                this.oneSlideTranslate = marginBottom + marginTop + el['offsetHeight'];
            }
        },
        _onTouchStart(e){
            this.swiperWrap.addEventListener('touchmove',this._onTouchMove,false);
            this.swiperWrap.addEventListener('touchend',this._onTouchEnd,false);
            this.swiperWrap.addEventListener('mousemove',this._onTouchMove,false);
            this.swiperWrap.addEventListener('mouseup',this._onTouchEnd,false);
            this.startPos = this._getTouchPos(e);
            this.delta = 0;
            if(!this.freeMode){
                this.startTranslate = this._getTranslateOfPage(this.currentPage);
                if(this.loop){
                    this._setTranslate(this.startTranslate);
                }
            }

            this.startTime = new Date().getTime();
            this.dragging = true;
            this.transitionDuration = 0;
            this.stopAutoPlay = true;

        },
        _onTouchMove(e){

            if(!this.dragging){
                return;
            }
            this.delta = this._getTouchPos(e) - this.startPos;
            if((this.isHorizontal() && Math.abs(this.delta) > 0) || this.isVertical()){
                //e.preventDefault();
            }
            let isQuickAction = new Date().getTime() -this.startTime < 200;
            if(!this.performanceMode && !isQuickAction){
                this.lazyLoad  && this._imgLazyLoad();
                this._setTranslate(this.startTranslate + this.delta);
                this.$emit('slideMove',this._getTranslate(),this.$el);
            }
        },
        _onTouchEnd(e){
            if(!this.dragging) return;
            if(this.freeMode){
                let translate = this._getTranslate();
                let maxTransalte = this._getTranslateFreeLastPage();
                if(translate > 0 || maxTransalte > 0){
                    this._setTranslate(0);
                    this._onTransitionStart();
                }else if(translate < maxTransalte){
                    this._setTranslate(maxTransalte);
                    this._onTransitionStart();
                }else{
                    this.startTranslate = translate;
                }
                return;
            }else{
                this.dragging = false;
                this.transitionDuration = this.speed;
                let isQuickAction = new Date().getTime() -this.startTime < 1000;
                let currPage = 0;
                if(this.type === 'multiple'){
                    let currTranslate = this._getTranslate();
                    currPage = currTranslate/this.oneSlideTranslate;
                    if(currPage > 0){
                        currPage = 0;
                    }
                }
                currPage = Math.round(Math.abs(currPage));
                if(this.delta < -this.oneSlideTranslate/2 || (isQuickAction && this.delta < -15)){
                    this.next(currPage);
                }else if(this.delta > this.oneSlideTranslate/2 || (isQuickAction && this.delta > 15)){
                    this.prev(currPage);
                }else{
                    this._revert();
                }

              
            }

            this.swiperWrap.removeEventListener('touchmove',this._onTouchMove,false);
            this.swiperWrap.removeEventListener('touchend',this._onTouchEnd,false);
            this.swiperWrap.removeEventListener('mousemove',this._onTouchMove,false);
            this.swiperWrap.removeEventListener('mouseup',this._onTouchEnd,false);
        },

        _revert(){
            this.setPage(this.currentPage);
        },
        _getTouchPos(e){
            let key = this.isHorizontal() ? 'pageX' : 'pageY';
            return  e.changedTouches ? e.changedTouches[0][key] : e[key];
        },
        _onTransitionStart(cType){
            this.transitioning = true;
            this.transitionDuration = this.speed;
            this.lazyLoad && this._imgLazyLoad(1);//1 表示是动画切换到下一屏幕
            if(this._isPageChanged()){
                this.$emit('slideChangeStart',this.currentPage,this.$el,cType);
            }else{
                this.$emit('slideRevertStart',this.currentPage,this.$el,cType);
            }
        },
        _onTransitionEnd(){

            this.transitioning = false;
            this.transitionDuration = 0;
            this.delta = 0;
            if(this._isPageChanged()){
                this.$emit('slideChangeEnd',this.currentPage,this.$el);
            }else{
                this.$emit('slideRevertEnd',this.currentPage,this.$el);
            }
            this.lastPage = this.currentPage;
            //添加select cls
            let selectedSlide = this.$el.querySelector('.nut-swiper-silde-selected');
            selectedSlide && selectedSlide.classList.remove('nut-swiper-silde-selected');
            this.slideEls[this.currentPage-1].classList.add('nut-swiper-silde-selected');
            if(this.loop){
                 this._setTranslate(this._getTranslateOfPage(this.currentPage));
            }
            this.stopAutoPlay = false;
        },
        _isPageChanged(){

            return this.lastPage !== this.currentPage;
        },
        _setTranslate(value){
            let translateName = this.isHorizontal() ? 'translateX' : 'translateY';
            this[translateName] = value;
        },
        _getTranslate(){
            let translateName = this.isHorizontal() ? 'translateX' : 'translateY';
            return this[translateName];
        },
        _getTranslateOfPage(page){
            if(page === 0) return 0;
            let propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
            let _this = this;
            return -[].reduce.call(this.slideEls,function(total,el,i){
                return i > page - 2 ?  total : total + _this.oneSlideTranslate;

            },0) + this.translateOffset;

        },
        _getTranslateFreeLastPage(){
            let slideLength = this.slideEls.length;
            let propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
            return this.swiperWrap[propName] - [].reduce.call(this.slideEls,function(total,el,i){
                let computedStyle = window.getComputedStyle(el,null);
                let marginRight = computedStyle['marginRight'].replace('px','') * 1;
                let marginLeft = computedStyle['marginLeft'].replace('px','') * 1;
                if(i > slideLength - 2){
                    marginLeft = marginRight = 0;
                }
                return total + el[propName] + marginRight + marginLeft;
            },0);
        },
        _createLoop(){
            let propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
            let swiperWrapEl = this.$el.querySelector('.nut-swiper-wrap');
            let duplicateFirstChild =  swiperWrapEl.firstElementChild.cloneNode(true);
            let duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true);
            swiperWrapEl.insertBefore(duplicateLastChild, swiperWrapEl.firstElementChild);
            swiperWrapEl.appendChild(duplicateFirstChild);
            this.translateOffset = - duplicateLastChild[propName];

        },
        _createAutoPlay(){
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                if(!this.stopAutoPlay){//如果停止播放，就不执行next
                    this.next();
                }
            },this.autoPlay);
        },
        _requestAniFrame(){
            return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
        },
        _imgLazyLoad(type){
            let requestAniFrame = this._requestAniFrame();
            let imgLazyLoadEl;
            requestAniFrame(()=>{
                imgLazyLoadEl = this.swiperWrap.querySelectorAll('.nut-swiper-lazyload');
                if(type == 1){
                    imgLazyLoadEl = this.slideEls[this.currentPage-1].querySelectorAll('.nut-swiper-lazyload');
                }
                imgLazyLoadEl.forEach((item,index)=>{
                    if(!this._checkInView(item) && type != 1) return;
                    let src = item.getAttribute('data-src');
                    item.src = this.lazyLoadingUrl;
                    let img = new Image();
                    img.src = src;
                    img.onload = function(){
                        item.src = src;
                        item.classList.remove('nut-swiper-lazyload');
                    }
                    img.onerror= function(){
                        item.src = this.lazyLoaderrorUrl;
                        item.classList.remove('nut-swiper-lazyload');
                    }
                });
            });
        },
        _checkInView(imgItem){
            let imgRect = imgItem.getBoundingClientRect();
            let swiperRect = this.$el.getBoundingClientRect();
            let imgTop = imgRect.top;
            let imgLeft = imgRect.left;
            let swiperWidth = this.$el.clientWidth;
            let swiperHeight = this.$el.clientHeight;
            let swiperTop = swiperRect.top;
            let swiperLeft = swiperRect.left;
            let isInView = true;
            if(imgTop > swiperTop + swiperHeight || imgLeft > swiperLeft + swiperWidth){
                isInView = false;
            }
            return isInView;
        },

    },
    created:function(){

     
    },
    mounted:function(){
        this._onTouchMove  = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this.updateSlidesBindEvent();

    }
}
</script>
<style lang="scss">
.nut-swiper {
    position: relative;
    overflow: hidden;
    height: 200px;
    .nut-swiper-wrap {
        display: flex;
        display: -webkit-flex;
        width: 100%;
        height: 100%;
        transition: all 0ms ease;
        -webkit-transition: all 0ms ease;
    }
    .nut-swiper-silde {
        overflow: hidden;
        flex-shrink: 0;
        -webkit-flex-shrink: 0;
        width: 100%;
        height: 100%;
        cursor: default;
    }
    &.horizontal .nut-swiper-wrap {
        flex-direction: row;
        -webkit-flex-direction:row;
    }

    &.vertical .nut-swiper-wrap {
        flex-direction: column;
        -webkit-flex-direction: column;
    }

    .nut-swiper-pagination {
        position: absolute;

        .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #000000;
            opacity: .2;
            transition: all .5s ease;
            -webkit-transform: all .5s ease;
        }

        .swiper-pagination-bullet.active {
            background: #007aff;
            opacity: 1;
        }
    }

    &.vertical .nut-swiper-pagination {
        right: 10px;
        top: 50%;
        transform: translate3d(0, -50%, 0);
        -webkit-transform: translate3d(0,-50%,0);

        .swiper-pagination-bullet {
            display: block;
            margin: 6px 0;
        }
    }

    &.horizontal .nut-swiper-pagination {
        bottom: 10px;
        width: 100%;
        text-align: center;

        .swiper-pagination-bullet {
            display: inline-block;
            margin: 0 3px;
        }
    }
}

</style>
