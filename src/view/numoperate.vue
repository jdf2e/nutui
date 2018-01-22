<template>
    <div>
      <h1>NumOperate</h1>
      <p>商品数量操作控件</p>
      <h5>示例</h5>
      <a class="button button-primary" href="/demo.html#/numoperate" target="_blank">Demo</a>
      <p>默认用法</p>
      <!-- <num-operate></num-operate> -->
      <pre><code v-highlight v-text="demo1"></code></pre>
      <p>初始状态减号按钮置灰</p>
      <!-- <num-operate :gery="isGrey"></num-operate> -->
      <pre><code v-highlight v-text="demo2"></code></pre>
      <pre><code v-highlight v-text="demo3"></code></pre>
      <p>设置初始值为3</p>
      <!-- <num-operate :init="initNum"></num-operate> -->
      <pre><code v-highlight v-text="demo4"></code></pre>
      <pre><code v-highlight v-text="demo5"></code></pre>
      <p>点击增加和减少时获取当前数量</p>
      <!-- <num-operate @add="changeNum" @reduce="changeNum"></num-operate> -->
      <pre><code v-highlight v-text="demo6"></code></pre>
      <pre><code v-highlight v-text="demo7"></code></pre>
      <p>设置最大值为4</p>
      <!-- <num-operate :max="maxNum"></num-operate> -->
      <pre><code v-highlight v-text="demo8"></code></pre>
      <pre><code v-highlight v-text="demo9"></code></pre>
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
        demo2:`<num-operate :gery="isGrey"></num-operate>`,
        demo3:`export default {
  data(){
    return{
      isGrey:true,
    }
  },
}`,
        demo4:`<num-operate :init="initNum"></num-operate>`,
        demo5:`export default {
  data(){
    return{
      initNum:3,
    }
  },
}`,
        demo6:`<num-operate @add="changeNum" @reduce="changeNum"></num-operate>`,
        demo7:`export default {
  data(){
    return{
      resNum:0,
    }
  },
  methods:{
    changeNum(num){
      this.resNum = num;
      alert(this.resNum);
    },
  },

}`,
        demo8:`<num-operate :max="maxNum"></num-operate>`,
        demo9:`export default {
  data(){
    return{
      maxNum:4,
    }
  },

}`,
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
