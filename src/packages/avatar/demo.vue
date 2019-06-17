<template>
      <div class="demo-list">
      <h4>默认用法</h4>
      <nut-cell><span slot="title"><nut-avatar></nut-avatar></span></nut-cell>
      <h4>可以修改背景色</h4>
      <nut-cell><span slot="title"><nut-avatar bgColor="#87d068"></nut-avatar></span></nut-cell>
      <h4>可以修改大小</h4>
      <nut-cell><span slot="title"><nut-avatar :size="30"></nut-avatar></span></nut-cell>
      <h4>可以修改头像的形状类型</h4>
      <nut-cell><span slot="title"><nut-avatar shape="square"></nut-avatar></span></nut-cell>
      <h4>可以修改头像的内容</h4>
      <nut-cell><span slot="title"><nut-avatar :size="30" bgIcon="">U</nut-avatar></span></nut-cell>
      <h4>可以增加头像右上角的徽标</h4>
      <nut-cell><span slot="title"><nut-avatar :dot="13"></nut-avatar></span></nut-cell>
      <h4>可以修改头像背景图片</h4>
      <nut-cell><span slot="title"><nut-avatar bgIcon="" bgImage="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"></nut-avatar></span></nut-cell>
      <h4>可以修改头像icon图标</h4>
      <nut-cell><span slot="title"><nut-avatar bgIcon="http://img10.360buyimg.com/uba/jfs/t1/69001/30/2126/550/5d06f947Effd02898/95f18e668670e598.png"></nut-avatar></span></nut-cell>
    </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {};
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>

</style>
