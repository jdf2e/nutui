<template>
    <div v-if='showTabs'>
        <div class="nut-tab" :class="{'nut-tab-horizontal' : positionNavCss}">
            <template v-if="positionNav=='top'">
                <div class="nut-tab-title">
                    <b class="nav-bar" :style="[{transform:'translateX('+initX+'px)'},{width:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList"  
                    :key="index"
                    @click="switchTab(index,$event,value.disable)" class="nut-title-nav-list" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
                    </span>
                </div>
                <div class="nut-tab-item">
                    <slot></slot>
                </div>  
            </template>
            <template v-else-if="positionNav=='left'">
                <div class="nut-tab-title-leftnav">
                    <b class="nav-bar-left" :style="[{transform:'translateY('+initX+'px)'},{height:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList" 
                    :key="index"
                    @click="switchTab(index,$event,value.disable)" class="nut-title-nav-leftnav" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
                    </span>
                </div>
                <div class="nut-tab-item">
                    <slot></slot>
                </div>  
            </template>
            <template v-else-if="positionNav=='right'">
                <div class="nut-tab-item">
                    <slot></slot>
                </div>
                <div class="nut-tab-title-rightnav">
                    <b class="nav-bar-right" :style="[{transform:'translateY('+initX+'px)'},{height:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList" 
                    :key="index"
                    @click="switchTab(index,$event,value.disable)" class="nut-title-nav-rightnav" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    {{value.tabTitle}}
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    </span>
                </div>
            </template>
            <template v-else-if="positionNav=='bottom'">
                <div class="nut-tab-item">
                    <slot></slot>
                </div> 
                    <div class="nut-tab-title-bottomnav">
                    <b class="nav-bar-bottom" :style="[{transform:'translateX('+initX+'px)'},{width:navWidth+'px'}]"></b>
                    <span v-for="(value,index) in tabTitleList" 
                    :key="index"
                    @click="switchTab(index,$event,value.disable)" class="nut-title-nav-list" 
                    :class="['nut-title-nav',{'nut-tab-disable':value.disable},{'nut-tab-active' : activeIndex == index}]"
                    >
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
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
        'defIndex':{
            type:Number,
            default:0,
        },
        'positionNav':{
            type:String,
            default:'top',
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
            activeIndex:this.defIndex,
            showTabs:true,
            initX:'0px',
            navWidth:0,
        };
    },
    watch:{
        defIndex(){
            this.updeteTab();
        },
       initData:{
           handler(){
            this.updeteTab();
           },
           deep:true
       }
    },
    computed:{
        positionNavCss:function(){
            if(this.positionNav==='left' || this.positionNav==='right') return true;
        },
    },
    mounted() {
        this.$nextTick(()=>{
            this.$slots.default && this.updeteTab(this.$slots.default); 
        })     
    },
    methods: {
        updeteTab:function(){
            setTimeout(()=>{;
                this.tabTitleList = [];
                this.activeIndex = this.defIndex;
                this.initTab([...this.$slots.default]);  
            },100);  
        },
        initTab:function(slot){
            for(let i = 0; i < slot.length; i++) {
                let slotTag = slot[i].tag;
                if(typeof(slotTag)=='string' && slotTag.indexOf('nut-tab-panel') != -1) {
                    let attrs = slot[i].data.attrs;
                    let item ={
                        'tabTitle':attrs['tab-title'] || attrs['tabTitle'],
                        'disable':attrs.disable===false,
                        'iconUrl':attrs['iconUrl'] || attrs['icon-url'],
                    }
                    this.tabTitleList.push(item);
                    let slotElm = slot[i].elm;
                    if(slotElm){
                        this.addClass(slotElm,'hide');
                        if(this.activeIndex == i) {
                            this.removeClass(slotElm,'hide');
                        }
                    }                
                }
            }
            setTimeout(()=>{
                this.getTabWidth();
            },0);
        },
        getStyle:function(obj,styleName){
            if(!obj){
                return ''
            }
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
                this.setInitX(tabWidth);
            }else{
                let tabTitle = document.querySelector('.nut-tab-title-leftnav')|| document.querySelector('.nut-tab-title-rightnav');
                let tabWidth = this.getStyle(tabTitle,'height');
                this.setInitX(tabWidth);
            }
        },
        setInitX(tabWidth){
            let tabWidthNum = tabWidth.substring(0,tabWidth.length-2);
            let navBarWidth = (tabWidthNum/this.tabTitleList.length);
            this.navWidth = navBarWidth;
            this.initX= parseInt(this.navWidth * this.defIndex);
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
        switchTab:function(index,event,disable){
            if(!disable && event.target.className.indexOf('nut-tab-icon')!==-1){
                event.target.parentNode.click();
            }
            if(!disable && event.target.className.indexOf('nut-title-nav')!==-1){
                this.activeIndex=index;
                this.initX= parseInt(this.navWidth * index);
                let nutTab = event.target.parentNode.parentNode;
                let items =  this.positionNav=='bottom' || this.positionNav=='right' ? nutTab.children[0].children : nutTab.children[1].children;
                for(let i=0;i<items.length;i++){
                    if(i==index){
                        this.removeClass(items[i],'hide');
                    }else{
                        this.addClass(items[i],'hide');
                    }
                }
                this.$emit('tab-switch',index,event); 
                this.$emit('tabSwitch',index,event); //兼容以前驼峰法命名
            }
        }
    },
}
</script>
