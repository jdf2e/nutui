<template>
    <div class="nut-swiper"
        :class="[direction,{'dragging':dragging}]"
        @touchstart = "_onTouchStart($event)"
        @mousedown = "_onTouchStart($event)"
    >
        <div class="nut-swiper-wrap"
            :style="{
                'transform':'translate3d('+translateX+'px,'+translateY+'px,0)',
                'transition-duration':transitionDuration+'ms',
                '-webkit-transform':'translate3d('+translateX+'px,'+translateY+'px,0)',
                '-webkit-transition-duration':transitionDuration+'ms',
                'transition-timing-function':'ease'
            }"
            @transitionend = "_onTransitionEnd"
        >
            <slot></slot>
        </div>
        <div class="nut-swiper-pagination" v-show="paginationVisible">
            <span class="swiper-pagination-bullet"
                :class="{'active':index+1 === currentPage}"
                v-for="(slide,index) in slideEls"
                :key ="index"
                @click="paginationClickable && setPage(index + 1,true)"
            >
            </span>
        </div>

    </div>
</template>
<script>
const VERTICAL = 'vertical';
const HORIZONTAL = 'horizontal';
export default {
    name:"nut-swiper",
    props:{
        direction:{
            type:String,
            default:HORIZONTAL,
            validator:(value) =>[VERTICAL,HORIZONTAL].indexOf(value)>-1
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
        canDragging:{ 
            type:Boolean,
            default:true
        },
        autoPlay:{
            type:Number,
            default:0
        },
        initPage:{
            type:Number,
            default:1
        },
        lazyLoad:{
            type:Boolean,
            default:false
        },
        lazyLoadUrl:{
            type:String,
            default:''
        },
        swiperData:{
            type:[Array],
            default:function(){
                return [];
            }
        }
    },
    watch:{
        swiperData(newValue,oldValue){
            this.updateEvent();
        }
    },
    data(){
        return{
            dragging:false,
            currentPage:this.initPage,
            lastPage:1,
            translateX:0,
            translateY:0,
            startTranslate:0,
            slideEls:[],
            translateOffset:0,//当前偏移初始位置距离
            transitionDuration:0,//切换动画时间
            startPos:null,
            delta:0,//拖动距离
            startTime:null,
            isLoop:this.loop,
            timer:null,//自动播放定时器
            domTimer:null,//渲染延迟查找
            stopAutoPlay:false,//停止自动播放
            swiperWrap:null,
            oneSlideTranslate:0,//一个slide的大小
        }
    },
    methods:{
        //下一张
        next(){
            let page = this.currentPage;
            if(page < this.slideEls.length || this.isLoop){
                 
                this.setPage(page+1,true,'NEXT');
            }else{
               
                this._revert();
            }
        },
        //上一张
        prev(){
            let page = this.currentPage;
            if(page > 1 || this.isLoop){
                this.setPage(page-1,true,'PREV');
            }else{
                this._revert();
            }
        },
        setPage(page,isHasAnimation,type){
            if(page === 0){
                this.currentPage = this.slideEls.length;
            }else if(page === this.slideEls.length + 1){
                this.currentPage = 1;
            }else{
                this.currentPage = page;
            }
            this._setTranslate(this._getTranslateOfPage(page));
            if(!isHasAnimation){
                this._slideClassHandle();
            }else{
                this._onTransitionStart(type);
            }

        },
        isHorizontal(){
            return this.direction === HORIZONTAL;
        },
        isVertical(){
            return this.direction === VERTICAL; 
        },
        renderLazyDom(slideEls){
            slideEls.forEach((item,index)=>{
                let src = item.getAttribute('data-src');
                if(item.className!="nut-swiper-slide nut-swiper-slide-selected"){
                    var dom=document.createElement("div");
                     //jd 图片占位图)
                    if(this.lazyLoadUrl){ 
                        dom.style.backgroundImage=`url('${this.lazyLoadUrl}')`;
                        dom.className="nut-lazy img";
                    }else{
                        dom.className="nut-lazy preloader";
                    }
                    item.appendChild(dom);
                }
            })
            return true;
        },
        updateEvent(pageSize){
            this.$nextTick(()=>{

                this.domTimer = setTimeout(()=>{
                  
                    if(pageSize != undefined) this.currentPage = pageSize;
                    this.swiperWrap = this.$el.querySelector('.nut-swiper-wrap');
                    this.slideEls = [...this.swiperWrap.children];
                    if(this.slideEls.length === 0) return;
                    this._getSlideDistance((this.slideEls)[0]);
                    if(this.autoPlay != 0){
                        this.isLoop = true;
                        this._createAutoPlay();
                    }
                    this.isLoop && this._createLoop(); 
                    this.setPage(this.currentPage, false);
                    this.lazyLoad && this.renderLazyDom(this.slideEls) && this._imgLazyLoad();
                },0)
                

            })
        },
        _slideClassHandle(){
            let selectedSlide = this.$el.querySelector('.nut-swiper-slide-selected');
            selectedSlide && selectedSlide.classList.remove('nut-swiper-slide-selected');
            this.slideEls[this.currentPage -1].classList.add('nut-swiper-slide-selected');
            this.lastPage = this.currentPage;
        },
        _getSlideDistance(el){
            let styleArr = getComputedStyle(el);
            let marginTop = styleArr['marginTop'].replace('px','') - 0;
            let marginBottom = styleArr['marginBottom'].replace('px','') - 0;
            let marginRight = styleArr['marginRight'].replace('px','') - 0;
            let marginLeft = styleArr['marginLeft'].replace('px','') - 0;
            if(this.isHorizontal()){
               
                this.oneSlideTranslate = marginRight + marginLeft + el['offsetWidth'];
            }else{
                this.oneSlideTranslate = marginTop + marginBottom + el['offsetHeight'];
            }
        },
        _onTouchStart(e){
            this.swiperWrap.addEventListener('touchmove',this._onTouchMove,false);
            this.swiperWrap.addEventListener('touchend',this._onTouchEnd,false);
            this.swiperWrap.addEventListener('mousemove',this._onTouchMove,false);
            this.swiperWrap.addEventListener('mouseup',this._onTouchEnd,false);
            this.startPos = this._getTouchPos(e);
            this.delta = 0;
            this.startTranslate = this._getTranslateOfPage(this.currentPage);
            if(this.isLoop){
                this._setTranslate(this.startTranslate);
            }
            this.startTime = new Date().getTime();
            this.dragging = true;
            this.transitionDuration = 0;
            this.stopAutoPlay = true;

        },
        _onTouchMove(e){
            if(!this.dragging) return;
            if(this.isHorizontal()){
                this.delta = this._getTouchPos(e).x - this.startPos.x;
            }else{
                this.delta = this._getTouchPos(e).y - this.startPos.y;
            }
            //let  isQuickAction = (new Date().getTime() - this.startTime) < 200;
            if(this.canDragging && this._computePreventDefault(e)){
                e.preventDefault();
                this._setTranslate(this.startTranslate + this.delta);
                this.$emit('slideMove',this._getTranslate(),this.$el);
            }
        },
        _onTouchEnd(e){
            if(!this.dragging) return;
            this.dragging = false;
            this.transitionDuration = this.speed;
            let isQuickAction = new Date().getTime() - this.startTime < 1000;
            if(this.delta < -this.oneSlideTranslate/2 || (isQuickAction && this.delta < -15)){
                this.next();
            }else if(this.delta > this.oneSlideTranslate/2 || (isQuickAction && this.delta >15)){
                this.prev();
            }else{
                this._revert();
            }
            this.swiperWrap.removeEventListener('touchmove',this._onTouchMove,false);
            this.swiperWrap.removeEventListener('touchend',this._onTouchEnd,false);
            this.swiperWrap.removeEventListener('mousemove',this._onTouchMove,false);
            this.swiperWrap.removeEventListener('mouseup',this._onTouchEnd,false);
        },
        _revert(){
            this.setPage(this.currentPage,true);
        },
         _computePreventDefault(e){
            let pos = this._getTouchPos(e);
            let xDis = Math.abs(this.startPos.x - pos.x);
            let yDis = Math.abs(this.startPos.y - pos.y);
            if ( xDis <= 5 && xDis >=0){
                return false;
            }else if( yDis > 5 && yDis/xDis > 0.5 ){
                return false;
            }else{
                return true;
            }
        },
        _getTouchPos(e){
            let x = e.changedTouches ? e.changedTouches[0]['pageX'] :e['pageX'];
            let y = e.changedTouches ? e.changedTouches[0]['pageY'] :e['pageY'];
            return {x,y}
        },
        _onTransitionStart(type){
            this.transitionDuration = this.speed;
            this.lazyLoad && this._imgLazyLoad(1);
            if(this._isPageChanged()){
                this.$emit('slideChangeStart',this.currentPage,this.$el,type);
            }else{
                this.$emit('slideRevertStart',this.currentPage,this.$el,type);
            }
        },
        _onTransitionEnd(){
            if(this._isPageChanged()){
                this.$emit('slideChangeEnd',this.currentPage,this.$el);
            }else{
                this.$emit('slideRevertEnd',this.currentPage,this.$el);
            }
            this.transitionDuration = 0;
            this.delta = 0;
            this.lastPage = this.currentPage;
          
            this._slideClassHandle();
            if(this.isLoop){
                this._setTranslate(this._getTranslateOfPage(this.currentPage));
            }
            this.stopAutoPlay = false;

        },
        _isPageChanged(){
            return this.lastPage !== this.currentPage;
        },
        _setTranslate(value){
            let translateName = this.isHorizontal() ? 'translateX' :'translateY';
            this[translateName] = value;
        },
        _getTranslate(){
            let translateName = this.isHorizontal() ? 'translateX' :'translateY';
            return this[translateName];
        },
        _getTranslateOfPage(page){
            if(page === 0)  return 0;
            let propName = this.isHorizontal() ? 'offsetWidth':'offsetHeight';
            let _this = this;
            return -[].reduce.call(this.slideEls,function(total,el,i){
                return i> page-2? total : total+_this.oneSlideTranslate;
            },0) + this.translateOffset;
        },
        _createLoop(){
            let propName = this.isHorizontal() ? 'offsetWidth' : 'offsetHeight';
            let swiperWrapEl = this.$el.querySelector('.nut-swiper-wrap');
            let duplicateFirstChild = swiperWrapEl.firstElementChild.cloneNode(true);
            let duplicateLastChild = swiperWrapEl.lastElementChild.cloneNode(true);
            swiperWrapEl.insertBefore(duplicateLastChild,swiperWrapEl.firstElementChild);
            swiperWrapEl.appendChild(duplicateFirstChild);
            this.translateOffset = - this.oneSlideTranslate;
        },
        _createAutoPlay(){
            clearInterval(this.timer);
            this.timer = setInterval(()=>{
                if(!this.stopAutoPlay){
                    this.next();
                }
            },this.autoPlay);
        },
        _requestAniFrame(){
            return window.requestAnimationFrame ||
                   window.webkitRequestAnimationFrame || 
                   function(callback){
                       window.setTimeout(callback,1000/60);
                   }
        },
        _imgLazyLoad(type){
            let requestAniFrame = this._requestAniFrame();
            let imgLazyLoadEl;
            requestAniFrame(()=>{
                imgLazyLoadEl = this.swiperWrap.querySelectorAll('.nut-img-lazyload');
                if(type == 1){
                    imgLazyLoadEl = this.slideEls[this.currentPage - 1].querySelectorAll('.nut-img-lazyload');
                }
                imgLazyLoadEl.forEach((item,index)=>{
                    if(!this._checkInView(item) && type != 1) return;
                    let src = item.getAttribute('data-src');
                    let img = new Image();
                    img.src = src;
                    img.onload = ()=>{
                        let lazyLoadingEle = item.parentElement.querySelector('.nut-lazy');
                        if(lazyLoadingEle){
                            item.parentElement.removeChild(lazyLoadingEle);
                        }
                        item.src = src;
                        item.classList.remove('nut-img-lazyload');
                    }
                    img.onerror = ()=>{
                        item.src = this.lazyLoadUrl;
                        item.classList.remove('nut-img-lazyload');
                    }
                    

                })
            })
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
            let isInView  = true;
            if(imgTop > swiperTop + swiperHeight || imgLeft > swiperLeft + swiperWidth){
                isInView = false;
            }
            return isInView;

        }

    
    },
    created(){

    },
    mounted(){
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this.updateEvent();
    },
    destroyed(){
        this.timer = null;
        this.domTimer = null;
    }

}

</script>
