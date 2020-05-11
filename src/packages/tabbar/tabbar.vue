<template>
    <div class="nut-tabbar" :class="{'bottom':bottom}">
        <a class="tabbar-nav" 
        v-for="(value,index) in tabList" 
        :class="[{'curr':value.curr},type]"
        :key="value.tabTitle"
        v-on:click="switchTabs(value,index)"
        :href="value.href"
        >   
        <span class="icon-box">
            <b class="tips" v-if="value.num">{{value.num}}</b>
            <template v-if="value.icon">
                <div class="icon" v-if="value.curr" :style="{backgroundImage: 'url('+value.activeIcon+')'}"></div>
                <div class="icon" v-else :style="{backgroundImage: 'url('+value.icon+')'}"></div>
            </template>
            <span :class="['tabbar-nav-word',{'big-word':!value.icon}]">{{value.tabTitle}}</span>
        </span>
        </a>
    </div>
</template>
<script>
export default {
    name:'nut-tabbar',
    props: {
        'tabbarList':{
            type:Array,
            default:()=>{
                return [];
            },
        },
        'bottom':{
            type:Boolean,
            default:false,
        },
        'type':{
            type:String,
            default:'based',
        }
    },
    data() {
        return {
          tabList:this.tabbarList
        };
    },
    watch:{
       tabbarList:{
           handler(value){
            this.tabList = value;
           },
           deep:true
       }
    },
    methods: {
        switchTabs:function(value,index){
            let newArr = this.tabList.map((item,idx)=>{
                if(index == idx){
                   item.curr = true;
                }else{
                   item.curr = false;
                }
                return item;
            })
            this.tabList =newArr;
            this.$emit('tab-switch',value,index); 
            this.$emit('tabSwitch',value,index); //兼容以前驼峰法
        }
    },
}
</script>