<template>
  <div @click="wrapperClick" class="sys-box">
    <!-- <vue-progress-bar></vue-progress-bar> -->
    <div class="sys-header"><div class="sys-inner"><a href="javascript:;" class="sys-logo pc-logo">NutUI</a>
    <a href="javascript:;" @click.stop="toggleMenu()"  class="sys-logo m-logo">NutUI</a>
    <ul class="sys-menu">
          <li><a href="https://github.com/jdf2e/nutui" class="github">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385 0-.191-.008-.821-.011-1.489-2.226.484-2.695-.944-2.695-.944-.364-.925-.888-1.171-.888-1.171-.726-.497.055-.486.055-.486.803.056 1.226.824 1.226.824.714 1.223 1.872.869 2.328.665.072-.517.279-.87.508-1.07-1.777-.202-3.645-.888-3.645-3.954 0-.873.313-1.587.824-2.147-.083-.202-.357-1.015.077-2.117 0 0 .672-.215 2.201.82A7.672 7.672 0 0 1 8 4.066c.68.003 1.365.092 2.004.269 1.527-1.035 2.198-.82 2.198-.82.435 1.102.162 1.916.079 2.117.513.56.823 1.274.823 2.147 0 3.073-1.872 3.749-3.653 3.947.287.248.543.735.543 1.481 0 1.07-.009 1.932-.009 2.195 0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"/></svg></a></li>
        </ul><a :href="'/demo.html#'+path" class="sys-nav-btn" >DEMO</a></div></div>
    <div class="sys-container">
    	<router-view class="view sys-nav" v-show="navShow" @click.stop name="nav"></router-view>
    	<router-view class="view sys-main" name="main"></router-view>
        <router-view class="view sys-phone" name="phone"></router-view>
    </div>
    <div class="sys-footer"><div class="sys-inner"><span>© 2018 <a href="https://jdc.jd.com/" target="_blank">JDC</a>. All Rights Reserved.</span></div></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
        	navShow:false,
            path:'',
            menuCurCls:{
                vue:true,
                zepto:false
            }
        }
    },
    components: {
    },
    watch:{
        $route:{
            immediate:true,
            handler:function(to, from){
                this.path = to.path;
            }
        },
    },
    methods:{
    	toggleMenu:function(){
    		this.navShow = !this.navShow;
    	},
    	wrapperClick:function(){
    		this.navShow = false;
    	}
    }
}
</script>
<style lang="scss">
[v-cloak] {
  display: none;
}
.github{
    display:block;
    width:32px;
    height:32px;
    color:#C1C1C1;
    svg{
        width:100%;
        height:100%;
    }
    &:hover{
        color:#333333;
    }
}
</style>
