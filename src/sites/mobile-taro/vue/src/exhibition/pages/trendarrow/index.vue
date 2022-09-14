<template>
  <div class="trendarrow-demo demo">
    <h2>基本用法</h2>
    <nut-cell>
      <nut-trendarrow :sync-text-color="false" :rate="1" />
      <nut-trendarrow :sync-text-color="false" :rate="-0.2535" />
    </nut-cell>
    <view class="title">改变文字颜色</view>
    <nut-cell>
      <nut-trendarrow :rate="10.2365" />
      <nut-trendarrow :rate="-0.2535" />
    </nut-cell>
    <view class="title">指定小数位</view>
    <nut-cell>
      <nut-trendarrow :digits="3" :rate="10.2365" />
      <nut-trendarrow :digits="1" :rate="-0.2535" />
    </nut-cell>
    <view class="title">箭头在前面</view>
    <nut-cell>
      <nut-trendarrow arrowLeft :rate="0.2535" />
      <nut-trendarrow arrowLeft :rate="-0.2535" />
    </nut-cell>
    <view class="title">显示正负号</view>
    <nut-cell>
      <nut-trendarrow showSign :rate="1" />
      <nut-trendarrow showSign :rate="-0.2535" />
    </nut-cell>
    <view class="title">是否展示0</view>
    <nut-cell>
      <nut-trendarrow showSign :rate="0" />
      <nut-trendarrow showSign showZero :rate="0" />
    </nut-cell>
    <view class="title">自定义颜色</view>
    <nut-cell>
      <nut-trendarrow :rate="10.2365" rise-color="rgb(73,143,242)" />
      <nut-trendarrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)" />
      <nut-trendarrow
        :sync-text-color="false"
        showSign
        :rate="-0.2535"
        text-color="rgb(39,197,48)"
        drop-color="rgb(255, 190, 13)"
      />
    </nut-cell>
    <view class="title">自定义图标</view>
    <nut-cell>
      <nut-trendarrow :rate="10.2365" :up-icon-name="'success'" />
      <nut-trendarrow :rate="-10.2365" :down-icon-name="'failure'" />
      <nut-trendarrow :rate="10.2365">
        <nut-icon name="heart-fill" color="#fa2c19" size="12px"></nut-icon>
      </nut-trendarrow>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    return {};
  }
});
</script>
<style lang="scss">
.trendarrow-demo {
  .title {
    font-size: 14px;
    color: rgb(144, 156, 164);
    padding: 0 10px;
    font-weight: normal;
  }
  .nut-trendarrow {
    margin-right: 10px;
  }
}
</style>
