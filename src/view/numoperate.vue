<template>
    <div>
      <nut-docheader 
        :name="$route.name" 
        :chName="$route.params.chnName" 
        type="Component" 
        desc="商品数量加减组件。" 
        :showQrCode="true"></nut-docheader>
      <!-- <h6>商品数量操作控件</h6> -->
      <h5>示例</h5>
      <!-- <a class="button button-primary" href="/demo.html#/numoperate" target="_blank">Demo</a> -->
      <h6>默认用法</h6>
      <!-- <num-operate></num-operate> -->
      <nut-codebox :code="demo1" imgUrl="../asset/img/demo/numoperate1.png"></nut-codebox>
      <h6>初始状态减号按钮置灰</h6>
      <!-- <num-operate :gery="isGrey"></num-operate> -->
      <nut-codebox :code="demo2" imgUrl="../asset/img/demo/numoperate2.png"></nut-codebox>
      <!-- <nut-codebox :code="demo3"></nut-codebox> -->
      <h6>设置初始值为3</h6>
      <!-- <num-operate :init="initNum"></num-operate> -->
      <nut-codebox :code="demo4" imgUrl="../asset/img/demo/numoperate3.png"></nut-codebox>
      <!-- <nut-codebox :code="demo5"></nut-codebox> -->
      <h6>点击增加和减少时获取当前数量</h6>
      <!-- <num-operate @add="changeNum" @reduce="changeNum"></num-operate> -->
      <nut-codebox :code="demo6"></nut-codebox>
      <nut-codebox :code="demo7"></nut-codebox>
      <h6>设置最大值为4</h6>
      <!-- <num-operate :max="maxNum"></num-operate> -->
      <nut-codebox :code="demo8" imgUrl="../asset/img/demo/numoperate4.png"></nut-codebox>
      <!-- <nut-codebox :code="demo9"></nut-codebox> -->
      <!-- <num-add :setGery="isGrey"  @add="changeNum" :setMax="maxNum" @reduce="changeNum" :setInit="initNum"></num-add> -->

      <h5>Props</h5>
      <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
              <th>可选值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>gery</td>
              <td>初始状态下减号是否置灰</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true/false</td>
            </tr>
            <tr>
              <td>init</td>
              <td>设置初始值</td>
              <td>Number</td>
              <td>1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>max</td>
              <td>设置最大值</td>
              <td>Number</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h5>Events</h5>
      <div class="tbl-wrapper">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>add</td>
              <td>点击加号时触发</td>
              <td>--</td>
            </tr>
            <tr>
              <td>reduce</td>
              <td>点击减号时触发</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
        
    </div>


</template>

<script>
export default {
    data(){
      return{
        demo1:`<num-operate></num-operate>`,
        demo2:`<num-operate :gery="true"></num-operate>`,
        demo4:`<num-operate :init="3"></num-operate>`,
        demo6:`<num-operate @add="changeNum" @reduce="changeNum"></num-operate>`,
        demo7:`export default {
  data(){
    return{
      resNum:0
    }
  },
  methods:{
    changeNum(num){
      this.resNum = num;
      alert(this.resNum);
    }
  }
}`,
        demo8:`<num-operate :max="4"></num-operate>`,
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
