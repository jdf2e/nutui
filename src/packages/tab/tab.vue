<template>
    <div v-if='showTabs'>
        <div class="nut-tab" :class="{'nut-tab-leftnav' : positionNavCss}">
            <template v-if="positionNav=='top'">
                <div :class="['nut-tab-title',tabType]">
                    <b class="nav-bar" :style="[{transform:'translateX('+initX+'px)'},{width:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList"  
                    v-bind:key="index"
                    v-on:click="switchTab(index,$event,value.disable)" class="nut-title-nav-list" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    <b v-if='closable' class="close-btn" v-on:click="closeItem(value)">x</b>
                    <a :href="value.href" :clstag="value.clstag" class="nut-tab-link" v-on:click="switchTabLink(index,$event,value.disable)">
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
                    </a>
                    </span>
                </div>
                <div class="nut-tab-item"  v-show="contentShow">
                    <slot></slot>
                </div>  
            </template>
            <template v-else-if="positionNav=='left'">
                    <div :class="['nut-tab-title-leftnav',tabType]">
                        <b class="nav-bar-left" :style="[{transform:'translateY('+initX+'px)'},{height:navWidth+'px'}]"></b>
                        <span v-for="(value,index) in tabTitleList" 
                        v-bind:key="index"
                        v-on:click="switchTab(index,$event,value.disable)" class="nut-title-nav-leftnav" 
                        :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                        >
                        <b v-if='closable' class="close-btn" v-on:click="closeItem(value)">x</b>
                        <a :href="value.href" :clstag="value.clstag" class="nut-tab-link" v-on:click="switchTabLink(index,$event,value.disable)">
                        <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                        {{value.tabTitle}}
                        </a>
                        </span>
                    </div>
                    <div class="nut-tab-item"  v-show="contentShow">
                        <slot></slot>
                    </div>  
            </template>
            <template v-else-if="positionNav=='right'">
                    <div class="nut-tab-item"  v-show="contentShow">
                        <slot></slot>
                    </div>
                    <div :class="['nut-tab-title-rightnav',tabType]">
                        <b class="nav-bar-right" :style="[{transform:'translateY('+initX+'px)'},{height:navWidth+'px'}]"></b>
                        <span v-for="(value,index) in tabTitleList" 
                        v-bind:key="index"
                        v-on:click="switchTab(index,$event,value.disable)" class="nut-title-nav-rightnav" 
                        :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                        >
                        <b v-if='closable' class="close-btn" v-on:click="closeItem(value)">x</b>
                        <a :href="value.href" :clstag="value.clstag" class="nut-tab-link" v-on:click="switchTabLink(index,$event,value.disable)">
                        
                        {{value.tabTitle}}
                        <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                        </a>
                        </span>
                </div>
            </template>
            <template v-else-if="positionNav=='bottom'">
                <div class="nut-tab-item"  v-show="contentShow">
                    <slot></slot>
                </div> 
                    <div :class="['nut-tab-title-bottomnav',tabType]">
                    <b class="nav-bar-bottom" :style="[{transform:'translateX('+initX+'px)'},{width:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList" 
                    v-bind:key="index"
                    v-on:click="switchTab(index,$event,value.disable)" class="nut-title-nav-list" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    <b v-if='closable' class="close-btn" v-on:click="closeItem(value)">x</b>
                    <a :href="value.href" :clstag="value.clstag" class="nut-tab-link" v-on:click="switchTabLink(index,$event,value.disable)">
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
                    </a>
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name:'nut-tab',
    props: {
        'type':{
            type:String,
            default:'based',
        },
        'defIndex':{
            type:Number,
            default:0,
        },
        'contentShow':{
            type:Boolean,
            default:true,
        },
        'positionNav':{
            type:String,
            default:'top',
        },
        'closable':{
            type:Boolean,
            default:false,
        },
        'initData':{
            type:Array,
            default:function(){
                return [];
            }
        }     
    },
    data() {
        return {
            tabTitleList:[],
            isShowTab: this.defIndex,
            activeIndex:this.defIndex,
            initIndex:0,
            showTabs:true,
            initX:'0px',
            navWidth:0,
        };
    },
    watch:{
       initData:function(){
            setTimeout(()=>{
                let slot = [...this.$slots.default];
                this.tabTitleList = [];
                this.activeIndex = this.defIndex;
                this.initTab(slot);  
            },100);    
        }
    },
    computed:{
        tabType:function(){
            return this.type;
        },
        positionNavCss:function(){
            if(this.positionNav=='top' || this.positionNav=='bottom'){
                return false;
            }else{
                return true;
            }
        },
    },
    mounted() {
        this.$nextTick(()=>{
            this.$slots.default && this.initTab(this.$slots.default); 
        })     
    },
    methods: {
        closeItem:function(value){
            this.$emit('tab-remove',value); 
            setTimeout(()=>{
                this.tabTitleList=[];
                if(this.$slots.default){
                    let slot = [...this.$slots.default];
                    this.initTab(slot);
                }else{
                    this.showTabs = false;
                }
            },10);
        },
        initTab:function(params){
            let slot = params;
            for(let i = 0; i < slot.length; i++) {
                let aa = slot[i].tag;
                if(typeof(aa)=='string'){
                    if(slot[i].tag.indexOf('nut-tab-panel') != -1) {
                        let item ={
                        'tabTitle':slot[i].data.attrs.tabTitle,
                        'disable':slot[i].data.attrs.disable==''?true:false,
                        'iconUrl':slot[i].data.attrs.iconUrl,
                        'clstag': slot[i].data.attrs.clstag,
                        'href':slot[i].data.attrs.tabLink?slot[i].data.attrs.tabLink:'javascript:void(0)',
                       }
                       this.tabTitleList.push(item);
                       let slotElm = slot[i].elm;
                       if(slotElm){
                            this.addClass(slotElm,'hide');
                            if(this.isShowTab == i) {
                                this.removeClass(slotElm,'hide')
                            }
                       }                
                    }
                }  
            }
            setTimeout(()=>{
                this.getTabWidth();
            },0);
            
        },
        getStyle:function(obj,styleName){
            if(obj.currentStyle){
            return obj.currentStyle[styleName];
            }else{
            return getComputedStyle(obj,null)[styleName];
            }
        },
        getTabWidth:function(){
            if(this.positionNav=='top' || this.positionNav=='bottom'){
                let tabTitle = document.querySelector('.nut-tab-title');
                let tabWidth = this.getStyle(tabTitle,'width');
                let tabWidthNum = tabWidth.substring(0,tabWidth.length-2);
                let navBarWidth = (tabWidthNum/this.tabTitleList.length);
                this.navWidth = navBarWidth;
                this.initX= parseInt(this.navWidth * this.defIndex);
            }else{
                let tabTitle = document.querySelector('.nut-tab-title-leftnav')||document.querySelector('.nut-tab-title-rightnav');
                let tabWidth = this.getStyle(tabTitle,'height');
                let tabWidthNum = tabWidth.substring(0,tabWidth.length-2);
                let navBarWidth = (tabWidthNum/this.tabTitleList.length);
                this.navWidth = navBarWidth;
                this.initX= parseInt(this.navWidth * this.defIndex);
            }
            
        },
        hasClass:function( elements,cName ){ 
            return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断 
        },
        addClass:function( elements,cName ){ 
            if(!this.hasClass( elements,cName ) ){ 
                elements.className += " " + cName; 
            }; 
        },
        removeClass:function ( elements,cName ){ 
            if( this.hasClass( elements,cName ) ){ 
            elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换 
            }; 
        }, 
        switchTabLink:function(index,event,disable){
            if(!disable){
                event.target.parentNode.click();
            } 
        },
        switchTab:function(index,event,disable){
            if(!disable && event.target.className.indexOf('nut-title-nav')!==-1){
                this.activeIndex=index;
                this.initX= parseInt(this.navWidth * index);
                let nutTab = event.target.parentNode.parentNode;
                let items =  this.positionNav=='bottom' || this.positionNav=='right' ?nutTab.children[0].children : nutTab.children[1].children;
                for(let i=0;i<items.length;i++){
                    if(i==index){
                        this.removeClass(items[i],'hide');
                        
                    }else{
                        this.addClass(items[i],'hide');
                    }
                }
                this.$emit('tab-switch',index,event); 
            }
        }
    },
}
</script>
