<template>
    <div>
        <nut-demoheader 
        :name="$route.name"
        ></nut-demoheader>
        <nut-mask :visible.sync="maskShow"></nut-mask>
        <a class="button button-primary" href="javascript:;" @click="maskShow = true">基础示例</a>
        
        <nut-mask :visible.sync="maskShow2" color="rgba(255,200,200,.6)"></nut-mask>
        <a class="button button-primary" href="javascript:;" @click="maskShow2 = true">自定义颜色与透明度</a>
        
        <nut-mask :visible.sync="maskShow3" :closeOnClickModal="false" @open-mask="autoClose"></nut-mask>
        <a class="button button-primary" href="javascript:;" @click="maskShow3 = true">禁止点击关闭，4秒后自动关闭</a>
        
        <nut-mask :visible.sync="maskShow4" :fade="true"></nut-mask>
        <a class="button button-primary" href="javascript:;" @click="maskShow4 = true">渐隐渐现</a>
        
        <nut-mask :visible.sync="maskShow5" @open-mask="maskOpen" @close-mask="maskClose"></nut-mask>
        <a class="button button-primary" href="javascript:;" @click="maskShow5 = true">事件</a>
    </div>
</template>

<script>
export default {
  data() {
    return {
      maskShow: false,
      maskShow2:false,
      maskShow3:false,
      maskShow4:false,
      maskShow5:false,
    };
  },
  methods: {
    autoClose() {
      setTimeout(()=>{
        this.maskShow3 = false;
      },4000);
    },
    maskOpen() {
      alert("show");
    },
    maskClose() {
      alert("hide");
    }
  }
};
</script>

<style>

</style>
