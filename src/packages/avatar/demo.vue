<template>
  <div class="demo-list">
    <h4>默认用法</h4>
    <p>内置"small","normal","large"三种尺寸规格</p>
    <div class="white-bg">
      <nut-avatar size="large"></nut-avatar>
      <nut-avatar size="normal"></nut-avatar>
      <nut-avatar size="small"></nut-avatar>
    </div>
    <h4>修改形状类型</h4>
    <div class="white-bg">
      <nut-avatar size="large" shape="square"></nut-avatar>
      <nut-avatar size="normal" shape="square"></nut-avatar>
      <nut-avatar size="small" shape="square"></nut-avatar>
    </div>
    <h4>修改背景色</h4>
    <div class="white-bg">
      <nut-avatar bgcolor="#f0250f"></nut-avatar>
    </div>
    <h4>可以修改头像的内容</h4>
    <div class="white-bg">
      <nut-avatar size="large" bgIcon>U</nut-avatar>
    </div>
    <h4>修改背景图片</h4>
    <div class="white-bg">
      <nut-avatar
        bgIcon
        bgImage="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"
      ></nut-avatar>
    </div>
    <h4>修改头像ICON图标</h4>
    <div class="white-bg">
      <nut-avatar
        bgIcon="http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png"
      ></nut-avatar>
    </div>
    <h4>点击头像有触发事件</h4>
    <div class="white-bg">
      <nut-avatar @activeAvatar="activeAvatar"></nut-avatar>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    activeAvatar() {
      alert("点击了头像");
    }
  }
};
</script>
<style lang="scss" scoped>
.white-bg {
  padding: 10px;
  background: #fff;
  display: flex;
  align-items: center;
}
</style>