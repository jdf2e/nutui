<template>
<div class="swap"
    :class="{
        hasPadding:heightSlot>400
    }"
>
    <div 
        class="eidt-box"
        :class="{
            show:isShow,
            hide:isHide
        }"         
        >
        <slot></slot>        
    </div>
    <div :title="titleMsg" v-if="heightSlot>400" class="bar" @click="showall">
            <svg  width="20" viewBox="0,0 20,10">
                <path v-if="isShow" d="M 0,5 
                            L10,10 
                            L 20,5" fill="none" stroke="#000">                    
                </path>
                <path v-if="!isShow" d="M 0,5 
                            L10,0 
                            L 20,5" fill="none" stroke="#000">                    
                </path>
            </svg>
        </div>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            siteHeight:{
                height:''
            },
            isShow:true,
            isHide:false,
            //  盒子高度
            heightSlot:0,
            titleMsg:'点击展开'
        }
    },
    methods:{
        showall(){
            this.isShow = !this.isShow;
            this.isHide = !this.isHide;
            if(this.isHide){
                this.siteHeight = {height:this.heightSlot+ 'px'};
                this.titleMsg = '点击收起'
            }else{
                this.siteHeight = {
                    height:'400px'
                }
            this.titleMsg = '点击展开'
            }
            
        }
    },
    mounted(){     
        this.heightSlot = this.$slots.default[0].elm.offsetHeight;
        if(this.heightSlot<400){
            this.siteHeight = {height:''};           
        }else{
            this.siteHeight = {height:'300px'};          
        }
    }
}
</script>
<style lang="scss" scoped>
.eidt-box{
    transition: all .5s;
}
.swap{
    position: relative;
   
    background: #F2F4F5;
    margin: 16px 0;
}
.hasPadding{
     padding-bottom:30px;
}
.show{   
    overflow:hidden;
    position: relative;
     max-height: 400px;
}
.hide{    
    position: relative;
    max-height: 4000px;
}
.bar{
    height: 30px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(rgba(255, 255, 255, 0),#fafafa);
    position: absolute;
    z-index: 1 ;
    text-align: center;
    cursor: pointer;
    svg{
        vertical-align: bottom;
    }
}
</style>

