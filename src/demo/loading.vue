<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <a class="button button-primary" href="javascript:;" @click="showLoading1">自定义ICON</a>
        
        <a class="button button-primary" href="javascript:;" @click="showLoading2">禁止点击关闭，4秒后自动关闭</a>
        
        <a class="button button-primary" href="javascript:;" @click="showLoading3">全屏+自定义文字及颜色</a>
        
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
      this.loading1 = this.$loading();
      this.loading2 = this.$loading({
        maxDuring:4000,
        text:'加载中...',
        userClose:false
      });
      this.loading3 = this.$loading({
        mini:false,
        text:'LOADING',
        textColor:'rgba(255,255,255,.7)'
      });
      this.loading4 = this.$loading({
        fade:true
      });
    },
    methods:{
      showLoading1(){
        this.loading1.show();
      },
      showLoading2(){
        this.loading2.show();
      },
      showLoading3(){
        this.loading3.show();
      },
      showLoading4(){
        this.loading4.show();
      },
    }
}
</script>

<style>

</style>
