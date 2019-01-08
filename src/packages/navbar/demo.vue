<template>
    <div>
      <h4>默认用法</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" :leftShow="false" :rightShow="false" @on-click-more="more"></nut-navbar>
      <h4>增加左侧按钮</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more">NavBar1
        <a slot="left" @click="close">关闭</a>
      </nut-navbar>
      <h4>增加右侧按钮</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more">NavBar2
        <a slot="right" @click="edit">编辑</a>
      </nut-navbar>
      <h4>更改左侧图标</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more">NavBar3
        <a slot="back-icon">返回</a>
      </nut-navbar>
      <h4>更改右侧图标</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more">NavBar4
        <a slot="more-icon">更多</a>
      </nut-navbar>
      <h4>更改样式</h4>
      <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more" style="background-color:#000; color: #fff; height:60px; line-height: 60px;">NavBar5</nut-navbar>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      back(){
        alert('header头部， 点击返回')
      },
      title(){
        alert('header头部， 点击title')
      },
      more(){
        alert('header头部， 点击更多')
      },
      close(){
        alert('header头部， 点击关闭')
      },
      edit(){
        alert('header头部， 点击编辑')
      }
  }
};
</script>

<style lang="scss" scoped>

</style>
