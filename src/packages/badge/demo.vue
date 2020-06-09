<template>
  <div class="container">
    <h4>无内容样式</h4>
    <div class="demo-w">
      <nut-badge :isDot="true" class="item">拜访提醒</nut-badge>
    </div>
    <div class="demo-w">
      <nut-badge :isDot="true" class="item"><div class="demo-svg"></div></nut-badge>
    </div>

    <h4>数字角标</h4>
    <div class="demo-w">
      <nut-badge :value="9" :max="99" class="item">拜访提醒</nut-badge>
      <nut-badge :value="99" :max="99" class="item">拜访提醒</nut-badge>
      <nut-badge :value="200" :max="99" class="item">拜访提醒</nut-badge>
    </div>
    <div class="demo-w">
      <nut-badge :value="9" :max="99" class="item"><div class="demo-svg"></div></nut-badge>
      <nut-badge :value="99" :max="99" class="item"><div class="demo-svg"></div></nut-badge>
      <nut-badge :value="200" :max="99" class="item"><div class="demo-svg"></div></nut-badge>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.item {
  margin: 16px 26px 10px 10px;
}
.demo-w {
  margin: 0;
  background: white;
}
.demo-svg {
  display: inline-block;
  height: 17px;
  width: 19px;
  background-size: 100% 100%;
  background-image: url('#{$assetsPath}/img/gift.png');
  background-repeat: no-repeat;
}
</style>
