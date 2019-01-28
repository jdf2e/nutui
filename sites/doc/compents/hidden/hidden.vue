<template>

    <div 
        class="eidt-box"
        :class="{
            show:isShow,
            hide:isHide
        }" 
        :style="siteHeight" 
        style="transition: all .2s;">
        <slot></slot>
        <div v-if="heightSlot>300" class="bar" @click="showall">
            <svg  width="20" viewBox="0,0 20,10">
                <path v-if="isShow" d="M 0,5 
                            L10,10 
                            L 20,5" fill="#fff" stroke="#999">                    
                </path>
                <path v-if="!isShow" d="M 0,5 
                            L10,0 
                            L 20,5" fill="#fff" stroke="#999">                    
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
            heightSlot:0
        }
    },
    methods:{
        showall(){
            this.isShow = !this.isShow;
            this.isHide = !this.isHide;
            if(this.isHide){
                this.siteHeight = {height:this.heightSlot+ 'px'};
            }else{
                this.siteHeight = {
                height:'300px'
            }
            }
            
        }
    },
    mounted(){     
        this.heightSlot = this.$slots.default[0].elm.offsetHeight;
        if(this.heightSlot<300){
            this.siteHeight = {height:this.heightSlot + 'px'};
        }else{
            this.siteHeight = {height:'300px'};
        }
    }
}
</script>
<style lang="scss" scoped>
.eidt-box{
    padding-bottom:30px;
    background: #F2F4F5;
}
.show{   
    overflow:hidden;
    position: relative;
}
.hide{    
    position: relative;
}
.bar{
    height: 30px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(rgba(255, 255, 255, 0.2),#fafafa);
    position: absolute;
    z-index: 999 ;
    text-align: center;
    svg{
        vertical-align: bottom;
    }
}
</style>

