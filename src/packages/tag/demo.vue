<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div class="white-bg">
      <!-- green, orange, yellow, blue, purple -->
      <nut-tag>标签</nut-tag>
      <nut-tag color="jc-blue">标签</nut-tag>
      <nut-tag color="orange">标签</nut-tag>
      <nut-tag color="yellow">标签</nut-tag>
      <nut-tag color="green">标签</nut-tag>
      <nut-tag color="blue">标签</nut-tag>
      <nut-tag color="purple">标签</nut-tag>
      <nut-tag disabled>标签</nut-tag>
    </div>
    <h4>圆角样式</h4>
    <div class="white-bg">
      <!-- green, orange, yellow, blue, purple -->
      <nut-tag circle>标签</nut-tag>
      <nut-tag circle color="jc-blue">标签</nut-tag>
      <nut-tag circle color="orange">标签</nut-tag>
      <nut-tag circle color="yellow">标签</nut-tag>
      <nut-tag circle color="green">标签</nut-tag>
      <nut-tag circle color="blue">标签</nut-tag>
      <nut-tag circle color="purple">标签</nut-tag>
      <nut-tag circle disabled>标签</nut-tag>
    </div>
    <h4>自定义颜色</h4>
    <div class="white-bg">
      <nut-tag :style="{ background: '#FCE9E8', color: '#E1251B' }">标签</nut-tag>
      <nut-tag :style="{ background: '#EBF0FD', color: '#3C6EF0' }">标签</nut-tag>
      <nut-tag :style="{ background: '#FFF0ED', color: '#FF8B70' }">标签</nut-tag>
      <nut-tag :style="{ background: '#FFF8E7', color: '#FFBA12' }">标签</nut-tag>
      <nut-tag :style="{ background: '#E9F6F0', color: '#26A872' }">标签</nut-tag>
      <nut-tag :style="{ background: '#E9F6FC', color: '#2CA6E1' }">标签</nut-tag>
      <nut-tag :style="{ background: '#EFEAFF', color: '#6236FF' }">标签</nut-tag>
      <nut-tag :style="{ background: '#F7F7F7', color: '#7C7A8A' }">标签</nut-tag>
    </div>
    <h4>空心样式</h4>
    <div class="white-bg">
      <nut-tag hollow>标签</nut-tag>
      <nut-tag hollow color="jc-blue">标签</nut-tag>
      <nut-tag hollow color="orange">标签</nut-tag>
      <nut-tag hollow color="yellow">标签</nut-tag>
      <nut-tag hollow color="green">标签</nut-tag>
      <nut-tag hollow color="blue">标签</nut-tag>
      <nut-tag hollow color="purple">标签</nut-tag>
      <nut-tag hollow disabled>标签</nut-tag>
    </div>
    <h4>标签大小</h4>
    <div class="white-bg">
      <nut-tag>标签</nut-tag>
      <nut-tag size="middle">标签</nut-tag>
      <nut-tag @click="clickHandler" size="big">标签</nut-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    clickHandler(e) {
      console.log(e, '我点击了标签');
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.white-bg {
  padding: 10px;
  background: #fff;
  line-height: 1.6;
}
</style>
