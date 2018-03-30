<template>
  <div @click="wrapperClick" class="sys-box">
    <!-- <vue-progress-bar></vue-progress-bar> -->
    <div class="sys-header"><div class="sys-inner"><a href="./default.html" class="sys-logo">NutUI</a><ul class="sys-menu">
          <li><a href="http://git.jd.com/lifeifan3/NutUI">GitLab</a></li>
        </ul><a href="javascript:;" class="sys-nav-btn" @click.stop="toggleMenu()">组件</a></div></div>
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
            menuCurCls:{
                vue:true,
                zepto:false
            }
        }
    },
    components: {
    },
    /*watch:{
        '$route':{
            immediate:true,
            handler:function(to, from){
                this.path = to.path;
        }}
    },*/
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
<style>
[v-cloak] {
  display: none;
}

</style>
