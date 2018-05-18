<template>
	<nut-mask :visible.sync="visible" :color="bgColor" :fade="fade" :closeOnClickModal="userClose" class="nut-loading">
    	<span class="nut-loading-icon" v-if="iconUrl"><img :src="iconUrl" alt=""/></span><span class="nut-loading-text" v-if="text" :style="{color:textColor}">{{ text }}</span>
    </nut-mask>
</template>
<script>
export default {
    name:'nut-loading',
        data() {
        return {
            visible: false,
            maxDuring: 0, //最长显示时间(毫秒),为0不消失
            timer: null,
            bgColor:'rgba(0,0,0,.5)',
            iconUrl:'',
            userClose:true,
            text:'加载中...',
            fade:false,
            textColor:'#000000'
        }
    },
    watch: {
        visible(val){
            if(val){
                this.showLoading();
                this.$emit('show-loading');
            }else{
                this.clearTimer();
                this.$emit('hide-loading');
            }
        }
    },
    methods: {
        showLoading() {
            this.clearTimer();
            if(this.maxDuring){
                this.timer = setTimeout(()=> {
                    this.hideLoading();
                }, this.maxDuring);
            }
        },
        hideLoading() {
            this.clearTimer();
            this.visible = false;
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
        }
    }
}
</script>
<style lang="scss">
.nut-loading {
    display: flex;
    flex-direction: column;
    user-select:none;
    .nut-loading-icon {
        display: inline-block;
        margin-bottom:.2rem;
    }
}
</style>