<template>
  <div class="demo">
    <h2>默认用法</h2>
    <!-- <p>内置"small","normal","large"三种尺寸规格</p> -->
    <nut-cell>
      <nut-avatar size="80"></nut-avatar>
      <nut-avatar size="large"></nut-avatar>
      <nut-avatar size="normal"></nut-avatar>
      <nut-avatar size="small"></nut-avatar>
    </nut-cell>
    <h2>修改形状类型</h2>
    <nut-cell>
      <nut-avatar size="large" shape="square"></nut-avatar>
      <nut-avatar size="normal" shape="square"></nut-avatar>
      <nut-avatar size="small" shape="square"></nut-avatar>
    </nut-cell>
    <h2>修改背景色</h2>
    <nut-cell>
      <nut-avatar bg-color="#FA2C19"></nut-avatar>
    </nut-cell>
    <h2>修改背景图片</h2>
    <nut-cell>
      <nut-avatar bg-icon bg-image="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></nut-avatar>
    </nut-cell>
    <h2>可以修改头像的内容</h2>
    <nut-cell>
      <nut-avatar bg-icon>N</nut-avatar>
    </nut-cell>
    <h2>点击头像有触发事件</h2>
    <nut-cell>
      <nut-avatar @active-avatar="activeAvatar"></nut-avatar>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('avatar');
export default createDemo({
  props: {},
  methods: {
    activeAvatar(event) {
      console.log('点击了头像', event);
    }
  }
});
</script>
<style lang="scss" scoped>
.nut-cell {
  align-items: flex-end;
}
</style>
