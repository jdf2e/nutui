<template>
    <div class="container">
      <h4>默认用法</h4>
      <div class="demo-w">
        <nut-badge :value="9" class="item"><div class="demo-svg"></div></nut-badge>
        <nut-badge :value="9" class="item">购物车</nut-badge>
        <nut-badge :value="9" class="item"><nut-button>购物车</nut-button></nut-badge>
      </div>

      <h4>Max用法</h4>
      <div class="demo-w">
        <nut-badge :value="200" :max="99" class="item"><div class="demo-svg"></div></nut-badge>
        <nut-badge :value="200" :max="99" class="item">购物车</nut-badge>
        <nut-badge :value="200" :max="99" class="item"><nut-button>购物车</nut-button></nut-badge>
      </div>

      <h4>文字用法</h4>
      <div class="demo-w">
        <nut-badge value="new" class="item"><div class="demo-svg"></div></nut-badge>
        <nut-badge value="new" class="item">购物车</nut-badge>
        <nut-badge value="new" :max="99" class="item"><nut-button>购物车</nut-button></nut-badge>
      </div>

      <h4>小圆点</h4>
      <div class="demo-w">
        <nut-badge :isDot="true" class="item"><div class="demo-svg"></div></nut-badge>
        <nut-badge :isDot="true" class="item">购物车</nut-badge>
        <nut-badge :isDot="true" :max="99" class="item"><nut-button>购物车</nut-button></nut-badge>
      </div>

       <h4>自定义位置</h4>
       <div class="demo-w">
         <nut-badge :value="200" top="5px" right="10px" class="item"><div class="demo-svg"></div></nut-badge>
       </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>
.item {
  margin: 10px 20px;
}
.demo-w {
  margin: 20px 0;
}
.demo-svg {
  display: inline-block;
  height: 30px;
  width: 35px;
  background-size: 100% 100%;
  background-image: url('#{$assetsPath}/img/gift.png');
  background-repeat: no-repeat;
}
</style>