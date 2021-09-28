<template>
  <view class="demo">
    <h2>默认用法</h2>
    <view class="demo-w">
      <nut-badge :value="8" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
    </view>
    <h2>最大值</h2>
    <view class="demo-w">
      <nut-badge :value="200" :max="9" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="20" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="99" class="item">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
    </view>

    <h2>自定义颜色</h2>
    <view class="demo-w">
      <nut-badge :value="8" class="item" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge
        :value="76"
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge
        value="NEW"
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot class="item" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
    </view>

    <h2>自定义徽标内容</h2>
    <view class="demo-w">
      <nut-badge class="item">
        <template #icons>
          <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar class="demo-svg" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge class="item">
        <template #icons>
          <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
        </template>
        <view class="demo-svg"></view
      ></nut-badge>
      <nut-badge class="item">
        <template #icons>
          <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
        </template>
        <view class="demo-svg"></view
      ></nut-badge>
    </view>

    <h2>自定义位置</h2>
    <view class="demo-w">
      <nut-badge :value="8" top="5" right="5" class="item"> <view class="demo-svg"></view></nut-badge>
      <nut-badge :value="76" top="10" right="10" class="item"> <view class="demo-svg"></view></nut-badge>
      <nut-badge value="NEW" class="item"> <view class="demo-svg"></view></nut-badge>
    </view>

    <h2>独立展示</h2>
    <view class="demo-w">
      <nut-badge :value="8" class="item"> </nut-badge>
      <nut-badge :value="76" class="item"> </nut-badge>
      <nut-badge value="NEW" class="item"> </nut-badge>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('badge');

export default createDemo({
  setup() {}
});
</script>

<style lang="scss" scoped>
.item {
  margin: 10px 20px;
}
.demo-w {
  margin: 20px 0;
}
.demo-svg {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgba(229, 232, 232);
  border-radius: 3px;
  margin-right: 0;
}
</style>
