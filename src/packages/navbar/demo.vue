<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <nut-navbar :close-show="false" :more-show="false"></nut-navbar>
    <h4>右侧增加折叠菜单</h4>
    <nut-navbar :close-show="false"></nut-navbar>
    <h4>右侧文案样式</h4>
    <nut-navbar :close-show="false" :more-show="false" title="自定义标题">
      <a slot="search-icon">新建</a>
    </nut-navbar>
    <h4>H5样式</h4>
    <nut-navbar @on-click-back="back" @on-click-close="close" @on-click-title="title" @on-click-search="search" @on-click-more="more"> </nut-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      alert('header头部， 点击返回');
    },
    close() {
      alert('header头部， 点击关闭');
    },
    title() {
      alert('header头部， 点击title');
    },
    search() {
      alert('header头部， 点击搜索');
    },
    more() {
      alert('header头部， 点击更多');
    },
  },
};
</script>

<style lang="scss" scoped></style>
