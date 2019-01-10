<template>
    <div>
      <h4>常规按钮组</h4>
      <nut-buttongroup>
        <nut-button type="light">重置</nut-button>
        <nut-button>确定</nut-button>
      </nut-buttongroup>
    <h4>圆角按钮组</h4>
    <nut-buttongroup shape="circle">
      <nut-button type="light">重置</nut-button>
      <nut-button>确定</nut-button>
    </nut-buttongroup>
    <h4>页面底部功能，配合Badge使用</h4>
      <nut-buttongroup type="menu">
        <nut-button type="light" icon="action" color="#000">关于</nut-button>
        <nut-button type="light" icon="more" color="#000">更多</nut-button>
        <nut-button type="light" icon="search" color="#000">关闭</nut-button>
        <nut-badge value="2" top="0.5rem" right="2rem"><nut-button type="light" icon="trolley" color="#f00">购物车</nut-button></nut-badge>      
        <nut-button type="light" icon="tick" color="#000">成功</nut-button>
      </nut-buttongroup>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>

</style>
