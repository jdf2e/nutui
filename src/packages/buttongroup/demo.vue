<template>
    <div>
      <h4>常规按钮组</h4>
      <nut-button-group>
        <nut-button type="light">重置</nut-button>
        <nut-button>确定</nut-button>
      </nut-button-group>
    <h4>圆角按钮组</h4>
    <nut-button-group shape="circle">
      <nut-button type="light">重置</nut-button>
      <nut-button>确定</nut-button>
    </nut-button-group>
    <h4>页面底部功能，配合Badge使用</h4>
      <nut-button-group type="menu">
        <nut-button type="light" icon="action" color="#000">关于</nut-button>
        <nut-button type="light" icon="more" color="#000">更多</nut-button>
        <nut-button type="light" icon="search" color="#000">关闭</nut-button>
        <nut-badge value="2" top="0.5rem" right="2rem"><nut-button type="light" icon="trolley" color="#f00">购物车</nut-button></nut-badge>      
        <nut-button type="light" icon="tick" color="#000">成功</nut-button>
      </nut-button-group>
    </div>
</template>

<script>

import Button from './../button/button.vue';
import ButtonGroup from './buttongroup.vue';
import Badge from './../badge/badge.vue';
export default {
  components: {
    'nut-button':  Button,
    'nut-button-group': ButtonGroup,
    'nut-badge': Badge
  },
  methods: {
      
  }
};
</script>

<style lang="scss" scoped>

</style>
