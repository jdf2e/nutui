<template>
    <div>
      <h1>NumOperate</h1>
      <p>商品数量操作控件</p>
      <p>默认用法</p>
      <num-operate></num-operate>
      <p>初始状态减号按钮置灰</p>
      <num-operate :gery="isGrey"></num-operate>
      <p>设置初始值为3</p>
      <num-operate :init="initNum"></num-operate>
      <p>点击增加和减少时获取当前数量</p>
      <num-operate @add="changeNum" @reduce="changeNum"></num-operate>
      <p>设置最大值为4</p>
      <num-operate :max="maxNum"></num-operate>
      <!-- <num-add :setGery="isGrey"  @add="changeNum" :setMax="maxNum" @reduce="changeNum" :setInit="initNum"></num-add> -->
        
    </div>


</template>

<script>
export default {
    data(){
      return{
        resNum:0,
        maxNum:4,
        isGrey:true,
        initNum:3,
      }
        
    },
    methods:{
      changeNum(num){
        this.resNum = num;
        alert(this.resNum);
      },
    }
}
</script>

<style>

</style>
