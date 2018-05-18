<template>
    <div class="nut-elevator" id="nut-elevator" :style="{height:wrapHeight+'rem'}">
        <ul class="nut-elevator-ul" 
            id="nut-elevator-ul"
            >
            <li 
            v-for="(item,index) in dataArray" 
            key="item.title"
            class="nut-list-title" 
            >
                <h3 class="nut-list-h" :id="item.title">{{item.title}}</h3>
                <ul class="nut-people-list">
                    <li v-for="(list,idx) in item.list" 
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
            :id="'nav'+index"
            class="nut-nav-list" 
            :style="{height:navListHeight+'rem'}"
            @click="clickNav(item.title,index)"
            >{{item.title}}</li>
        </ul>
        <template v-if="showIndicator">
            <div class="nut-big-box" v-show="currBox">
                {{currTitle}}
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name:'nut-elevator',
    props: {
        'dataArray':{
            type:Array,
            required:true,
        },
        'navHeight':{
            type:Number,
            default:'0.8',
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
            wrapHeight:'10',
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
            this.wrapHeight = (innerHeight/fontSize-1);
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
            let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight/fontSize);
            setTimeout(()=>{
                this.currBox = false;
            },this.hiddenTime);
            if(navIndex<dataArrayLength && navIndex>=0){
            this.$emit('clickNav',this.dataArray[navIndex].title,navIndex);                 
            }
        },
        onPointerMove(e){
            let fontSize = this.getFontSize();
            let dataArrayLength = this.dataArray.length;
            let navHeight = document.getElementById('nut-elevator-nav').clientHeight;
            let navTop = document.getElementById('nut-elevator-nav').offsetTop;
            let navOffsetTop=navTop-navHeight/2 //nav距离顶部的距离
            let eTop = e.type.indexOf('touch') !== -1 ? e.touches[0].clientY : e.clientY;
            let navIndex =parseInt((eTop - navOffsetTop)/this.navHeight/fontSize);
            if(navIndex<dataArrayLength && navIndex>=0){
                this.moveFun(this.dataArray[navIndex].title,navIndex);
                this.currBox =true;
                this.currTitle = this.dataArray[navIndex].title;
            }
        },
    }
}
</script>
<style lang="scss">
    .nut-elevator{
        overflow: scroll;
        background:#FFF; 
    }
    .nut-elevator-ul{
        width: 100%;
        padding:0px;
        margin:0px; 
    }
    .nut-list-title{
        list-style-type:none;
        width:100%;
        margin-bottom:0.4rem;
    }
    .nut-list-h{
        height: 0.6rem;
        line-height: 0.6rem;
        padding-left: 0.4rem;
        background: #eee;
        margin: 0px;
    }
    .nut-people-list{
        padding: 0px;
        padding-left: 0.4rem;
    }
    .nut-list-name{
        list-style-type:none;
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #ccc;
    }
    .nut-elevator-nav{
        background: #fff;
        text-align: center;
        border:1px solid #ccc;
        width: 1rem;
        position:fixed;
        top:50%;
        right: 0px;
        transform:translate(0, -50%);
        padding: 0px;
        z-index: 100;
        .nut-nav-list{
            list-style-type:none;
            height: 0.8rem;
            line-height: 0.8rem;
        }
    }
    .nut-big-box{
        width: 0.52rem;
        height: 0.52rem;
        background: #000;
        opacity: 0.7;
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%, -50%);
        text-align: center;
        line-height: 0.52rem;
        color:#fff;
        font-family: bold;
    }
</style>