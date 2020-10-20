<template>
  <div class="demo-list">
    <nut-noticebar :closeMode="true" v-if="!isMobile">此 Demo 仅能在移动端浏览器体验，建议在 Android 或 iOS 设备上体验。 </nut-noticebar>
    <h4>基本用法</h4>
    <nut-drag @click.native="click" :style="{ top: '100px', left: '8px' }">
      <div class="touch-dom">可点击，可拖拽</div>
    </nut-drag>
    <h4 :style="{ top: '150px' }">限制拖拽方向</h4>
    <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
      <div class="touch-dom">只能在X轴拖动</div>
    </nut-drag>
    <nut-drag direction="y" :style="{ top: '200px', right: '100px' }">
      <div class="touch-dom">只能在Y轴拖动</div>
    </nut-drag>
    <h4 :style="{ top: '250px' }">自动吸边</h4>
    <nut-drag direction="x" :attract="true" :style="{ top: '300px', left: '8px' }">
      <div class="touch-dom">拖动我</div>
    </nut-drag>
    <h4 :style="{ top: '350px' }">限制拖动边界</h4>
    <div class="drag-boundary"></div>
    <nut-drag :boundary="{ top: 401, left: 9, bottom: bottom(), right: right() }" :attract="true" :style="{ top: '450px', left: '50px' }">
      <div class="touch-dom">拖动我</div>
    </nut-drag>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    right() {
      return document.documentElement.clientWidth - 300 - 9;
    },
    bottom() {
      return document.documentElement.clientHeight - 601;
    },
    click() {
      this.$toast.text('点击了拖拽元素');
    }
  }
};
</script>

<style lang="scss" scoped>
.nut-drag {
  position: absolute;
  cursor: pointer;
  user-select: none;
}
.touch-dom {
  height: 30px;
  padding: 0 10px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: red;
  overflow: hidden;
}
h4 {
  position: absolute;
}
.drag-boundary {
  position: absolute;
  top: 400px;
  left: 8px;
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
