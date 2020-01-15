<template>
        <div class="nut-elevator"  :style="{height:wrapHeight+'px'}">
            <div class="nut-main" :style="{height:wrapHeight+'px'}">
                <ul class="nut-elevator-ul" 
                    id="nut-elevator-ul"
                    >
                    <li 
                    v-for="item in dataArray" 
                    v-bind:key="item.title"
                    class="nut-list-title" 
                    >
                        <h3 class="nut-list-h" :id="item.title">{{item.title}}</h3>
                        <ul class="nut-people-list">
                            <li v-for="(list,idx) in item.list" 
                            v-bind:key="idx"
                            class="nut-list-name" 
                            :id="list.id?list.id:'list'+item.title+idx"
                            @click="clickList(list,item)"
                            >{{list.name}}</li>
                        </ul>
                    </li>
                </ul>
                <ul class="nut-elevator-nav" id="nut-elevator-nav" 
                    @touchmove="onPointerMove($event)"
                    @touchstart="onPointerMove($event)"
                    @touchend="onPointerEnd($event)"
                    >
                    <li v-for="(item,index) in dataArray"
                    v-bind:key="index" 
                    :id="'nav'+index"
                    class="nut-nav-list" 
                    :style="{height:navListHeight+'px'}"
                    @click="clickNav(item.title,index)"
                    >{{item.title}}</li>
                </ul>
                <template v-if="showIndicator">
                    <div class="nut-big-box" v-show="currBox">
                        {{currTitle}}
                    </div>
                </template>
            </div>
        </div>  
</template>
<script>
export default {
    name:'nut-elevator',
    props: {
        'otherHeight':{
            type:Number,
            default:'60',
        },
        'dataArray':{
            type:Array,
            required:true,
        },
        'navHeight':{
            type:Number,
            default:'40',
        },
        'hiddenTime':{
            type:Number,
            default:'10',
        },
        'showIndicator':{
            type:Boolean,
            default:true,
        },
        'initIndex':{
            type:Number,
            default:'0',
        }
    },
    computed:{
        navListHeight:function(){
            return this.navHeight;
        }
    },
    data() {
        return {
            wrapHeight:'40',
            currTitle:'',
            currBox:false,
        };
    },
    mounted(){
        this.initPage();
    },
    methods: {
        initPage(){
            let fontSize = this.getFontSize();
            let innerHeight = document.documentElement.clientHeight;
            //this.wrapHeight = (innerHeight/fontSize-1);
            this.wrapHeight = innerHeight-this.otherHeight;
            let initIndex = this.dataArray[this.initIndex].title; 
            document.getElementById(initIndex).scrollIntoView();
        },
        getStyle(element, attr) {
            if(element.currentStyle) {
                    return element.currentStyle[attr];
            } else {
                    return getComputedStyle(element, false)[attr];
            }
        },
        getFontSize(){
            let htmlDom = document.getElementsByTagName('html')[0];
            let bili = this.getStyle(htmlDom,'fontSize');
            return bili.substring(0,bili.length-2);
        },
        clickNav(title,index){
            this.currBox =true;
            this.currTitle = title;
            setTimeout(()=>{
                this.currBox =false;
            },this.hiddenTime);
            this.moveFun(title,index);
        },
        clickList(list,item){
            this.$emit('clickList',list,item);  
        },
        moveFun(title,index){
            let titleBox = document.getElementById(title);
            titleBox.scrollIntoView();
            
        },
        onPointerEnd(e){
            let fontSize = this.getFontSize();
            let dataArrayLength = this.dataArray.length;
            let navHeight = document.getElementById('nut-elevator-nav').clientHeight;
            let navTop = document.getElementById('nut-elevator-nav').offsetTop;
            let navOffsetTop=navTop-navHeight/2 //nav距离顶部的距离
            let eTop = e.type.indexOf('touch') !== -1 ? e.changedTouches[0].clientY : e.clientY;
            //let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight/fontSize);
            let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight);
            setTimeout(()=>{
                this.currBox = false;
            },this.hiddenTime);
            if(navIndex<dataArrayLength && navIndex>=0){
            this.$emit('clickNav',this.dataArray[navIndex].title,navIndex);                 
            }
        },
        onPointerMove(e){
            e.preventDefault();
            let fontSize = this.getFontSize();
            let dataArrayLength = this.dataArray.length;
            let navHeight = document.getElementById('nut-elevator-nav').clientHeight;
            let navTop = document.getElementById('nut-elevator-nav').offsetTop;
            let navOffsetTop=navTop-navHeight/2 //nav距离顶部的距离
            let eTop = e.type.indexOf('touch') !== -1 ? e.touches[0].clientY : e.clientY;
            //let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight/fontSize);
            let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight);

            if(navIndex<dataArrayLength && navIndex>=0){
                this.moveFun(this.dataArray[navIndex].title,navIndex);
                this.currBox =true;
                this.currTitle = this.dataArray[navIndex].title;
            }
        },
    }
}
</script>