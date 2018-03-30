<template>
<transition :name="fade?'mask-fade':''"><div class="nut-mask" @click="modalClick" :style="{'background-color':color}" v-show="isVisible"><slot></slot></div></transition>
</template>
<script>
export default {
    name:'nut-mask',
    props: {
        'visible': {
            type: Boolean,
            default: false
        },
        'color':{
            type:String,
            default:'rgba(0,0,0,.5)'
        },
        'closeOnClickModal': {
            type: Boolean,
            default: true
        },
        'fade':{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isVisible:this.visible
        }
    },
    watch: {
        visible(val){
            if(val){
                this.$emit('open-mask');
            }
            this.isVisible = val;
        }
    },
    methods: {
        modalClick() {
            this.closeMask('modal');
        },
        closeMask(target) {
            this.$emit('close-mask');
            if(!this.closeOnClickModal){
                return;
            }
            this.isVisible = false;
            this.$emit('update:visible', false);
            
        },
    }
}
</script>
<style lang="scss">
.nut-mask{
	position: fixed;
	height:100%;
	width:100%;
    left:0;
    top:0;
	z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mask-fade-enter-active {
  transition: opacity 0.3s;
}
.mask-fade-leave-active {
  transition: opacity 0.3s;
}

.mask-fade-enter,
.mask-fade-leave-active {
  opacity: 0;
}
</style>