<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <view class="title"> 文字颜色不变： </view>
      <nut-trendarrow :show-text-color="false" :rate="1"></nut-trendarrow>
      <nut-trendarrow :show-text-color="false" :rate="-0.2535"></nut-trendarrow>
    </nut-cell>
    <nut-cell>
      <view class="title"> 文字颜色改变： </view>
      <nut-trendarrow :rate="10.2365"></nut-trendarrow>
      <nut-trendarrow :rate="-0.2535"></nut-trendarrow>
    </nut-cell>
    <nut-cell>
      <view class="title"> 指定小数位： </view>
      <nut-trendarrow :digits="0" :rate="10.2365"></nut-trendarrow>
      <nut-trendarrow :digits="0" :rate="-0.2535"></nut-trendarrow>
    </nut-cell>
    <nut-cell>
      <view class="title"> 箭头在前面： </view>
      <nut-trendarrow arrowLeft :rate="0.2535"></nut-trendarrow>
      <nut-trendarrow arrowLeft :rate="-0.2535"></nut-trendarrow>
    </nut-cell>
    <nut-cell>
      <view class="title"> 显示正负号： </view>
      <nut-trendarrow showSign :rate="1"></nut-trendarrow>
      <nut-trendarrow showSign :rate="-0.2535"></nut-trendarrow>
    </nut-cell>

    <nut-cell>
      <view class="title"> 是否展示0： </view>
      <nut-trendarrow showSign :rate="0"></nut-trendarrow>
      <nut-trendarrow showSign showZero :rate="0"></nut-trendarrow>
    </nut-cell>
    <nut-cell>
      <view class="title"> 自定义颜色： </view>
      <nut-trendarrow :rate="10.2365" rise-color="rgb(73,143,242)"></nut-trendarrow>
      <nut-trendarrow :rate="-0.2535" showSign drop-color="rgb(255, 190, 13)"></nut-trendarrow>
      <nut-trendarrow
        :show-text-color="false"
        showSign
        :rate="-0.2535"
        text-color="rgb(39,197,48)"
        drop-color="rgb(255, 190, 13)"
      ></nut-trendarrow>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('trendarrow');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法'
    },
    'en-US': {
      basic: 'Basic Usage'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    return { translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
  .nut-trendarrow {
    margin-right: 10px;
  }
}
</style>
