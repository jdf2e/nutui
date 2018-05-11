<template>
    <div class="nut-tab" :class="{'nut-tab-leftnav' : positionNavCss}">
        <template v-if="positionNav=='top'">
            <div :class="['nut-tab-title',tabType]">
                <span v-for="(value,index) in tabTitleList" v-on:click="switchTab(index,$event)" class="nut-title-nav-list" 
                :class="['nut-title-nav',{'nut-tab-active' : activeIndex == index}]"
                >
                <a :href="value.href" class="nut-tab-link" v-on:click="switchTabLink(index,$event)">
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
                    <span v-for="(value,index) in tabTitleList" v-on:click="switchTab(index,$event)" class="nut-title-nav-leftnav" 
                    :class="['nut-title-nav',{'nut-tab-active' : activeIndex == index}]"
                    >
                    <a :href="value.href" class="nut-tab-link" v-on:click="switchTabLink(index,$event)">
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
                    <span v-for="(value,index) in tabTitleList" v-on:click="switchTab(index,$event)" class="nut-title-nav-leftnav" 
                    :class="['nut-title-nav',{'nut-tab-active' : activeIndex == index}]"
                    >
                    <a :href="value.href" class="nut-tab-link" v-on:click="switchTabLink(index,$event)">
                    <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                    {{value.tabTitle}}
                    </a>
                    </span>
            </div>
        </template>
        <template v-else-if="positionNav=='bottom'">
            <div class="nut-tab-item"  v-show="contentShow">
                <slot></slot>
            </div> 
                <div :class="['nut-tab-title-bottomnav',tabType]">
                <span v-for="(value,index) in tabTitleList" v-on:click="switchTab(index,$event)" class="nut-title-nav-list" 
                :class="['nut-title-nav',{'nut-tab-active' : activeIndex == index}]"
                >
                <a :href="value.href" class="nut-tab-link" v-on:click="switchTabLink(index,$event)">
                <i class="nut-tab-icon" :style="{backgroundImage: 'url('+value.iconUrl+')'}" v-if="value.iconUrl"></i>
                {{value.tabTitle}}
                </a>
                </span>
            </div>
        </template>
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
        }
    },
    data() {
        return {
            tabTitleList:[],
            isShowTab: this.defIndex,
            activeIndex:this.defIndex,
            initIndex:0,
        };
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
            let slot = this.$slots.default;
            for(let i = 0; i < slot.length; i++) {
                let aa = slot[i].tag;
                if(typeof(aa)=='string'){
                    if(slot[i].tag.indexOf('nut-tab-panel') != -1) {
                        let item ={
                        'tabTitle':slot[i].data.attrs.tabTitle,
                        'iconUrl':slot[i].data.attrs.iconUrl,
                        'href':slot[i].data.attrs.tabLink?slot[i].data.attrs.tabLink:'javascript:void(0)',
                       }
                       this.tabTitleList.push(item);
                       let slotElm = slot[i].elm;
                       if(slotElm){
                        this.addClass(slotElm,'hide');
                            if(this.isShowTab * 2 == i) {
                                this.removeClass(slotElm,'hide')
                            }
                       }                
                    }
                }  
            }
        },
    methods: {
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
        switchTabLink:function(index,event){
            event.target.parentNode.click();
        },
        switchTab:function(index,event){

            if(event.target.className.indexOf('nut-title-nav')!==-1){
                let nutTab = event.target.parentNode.parentNode;
                let items =  this.positionNav=='bottom' || this.positionNav=='right' ?nutTab.children[0].children : nutTab.children[1].children;
                for(let i=0;i<items.length;i++){
                    if(i===index){
                        this.removeClass(items[i],'hide');
                        this.activeIndex=index;
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
<style lang="scss">
    .nut-tab{
        position: relative;
        border:1px solid #eee;
        padding: 0.2rem;
        font-size: 0.24rem;
        background:#fff;
    }
    .nut-tab-leftnav{
        display: flex;
        flex-direction: row;
    }
    .nut-tab-title{
        border:1px solid #F5F7FA;
        border-bottom: 0;
        width: 100%;
        display: flex;
        height: 1rem;
        line-height: 1rem;   
    }
    .nut-tab-title-leftnav{
        border-bottom:1px solid #F5F7FA;
        border-top:1px solid #F5F7FA;
        border-right: 0;
        width: 2rem;
        display: flex;
        flex-direction: column; 
        .nut-title-nav{
            border:0;
            border-left:1px solid #F5F7FA;
            //border-bottom: 1px solid #F5F7FA;
        }
        .nut-tab-active{
            background: #fff;
            .nut-tab-link{
                color: red;
                border: 0;
                border-right: 1px solid red;
                height: 80%;
                width: 100%;
            }
        }
    }
    .nut-tab-title-rightnav{
        border:1px solid #fff;
        border-left: 0;
        width: 2rem;
        display: flex;
        flex-direction: column; 
        .nut-tab-active{
             .nut-tab-link{
                border-bottom: 0;
                border-left: 1px solid red;
                width: 100%;
                height: 80%;
             }
        }
    }
    .nut-tab-title-bottomnav{
        border:1px solid #F5F7FA;
        border-bottom: 0;
        width: 100%;
        display: flex;
        height: 1rem;
        line-height: 1rem; 
        .nut-tab-active{
             .nut-tab-link{
                border: 0;
                border-top: 1px solid red;
                width: 80%;
                height: 100%;
             }
        }
    }
    .nut-title-nav-list{
        flex: 1;
        cursor: pointer;
        position: relative;
        flex-direction: row;
        align-items:center;
        justify-content:center;
        display: flex;
        background: #fff;
    }
    .nut-title-nav-leftnav{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nut-tab-link{
        color: #333;
        width: 80%;
        display: flex;
        align-items:center;
        justify-content:center;
        font-size:0.24rem;
        background: #fff;
        text-decoration:none;
    }
    .nut-tab-icon{
        display: inline-block;
        margin-right: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
        background-repeat: no-repeat; 
    }
    .nut-tab-active{
        background: #fff;
        border: 0;
        .nut-tab-link{
            color: red;
            border: 0;
            border-bottom: 1px solid red;
        }
    }
    /*.card{
        border-left: 1px solid #eee;
        .nut-title-nav{
            border: 1px solid #eee;
            border-left: 0;
        }
        .nut-tab-link{
            background: #fff;
        }
        .nut-tab-active{
            border: 0;
            border-bottom: 0;
            background: #fff;
            .nut-tab-link{
                border: 0;
                background: #fff;
            }
        }

    }*/
    .nut-tab-item {  
        height: 6rem;
        border:1px solid #F5F7FA;
        
        width: 100%;
        .hide{
            display: none;
        }
    }
</style>