<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <a class="button button-primary" href="javascript:;" @click="showLoading1">自定义ICON</a>
        
        <a class="button button-primary" href="javascript:;" @click="showLoading2">禁止点击关闭，4秒后自动关闭</a>
        
        <a class="button button-primary" href="javascript:;" @click="showLoading3">自定义文字及颜色</a>
        
        <a class="button button-primary" href="javascript:;" @click="showLoading4">渐隐渐现</a>


    </div>
</template>

<script>
export default {
    data(){
        return{
          loading1:null,
          loading2:null,
          loading3:null,
          loading4:null,
        }
    },
    mounted(){
      this.loading1 = this.$loading({
        iconUrl:'//misc.360buyimg.com/mtd/pc/o2_toolbar/1.0.0/home/images/loading.gif'
      });
      this.loading2 = this.$loading({
        maxDuring:4000,
        userClose:false
      });
      this.loading3 = this.$loading({
        text:'LOADING',
        textColor:'rgba(255,255,255,.7)'
      });
      this.loading4 = this.$loading({
        fade:true
      });
    },
    methods:{
      showLoading1(options){
        this.loading1.show();
      },
      showLoading2(options){
        this.loading2.show();
      },
      showLoading3(options){
        this.loading3.show();
      },
      showLoading4(options){
        this.loading4.show();
      },
    }
}
</script>

<style>

</style>
