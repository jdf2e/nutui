<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-trendarrow :sync-text-color="false" :rate="1" />
      <nut-trendarrow :sync-text-color="false" :rate="-0.2535" />
    </nut-cell>
    <view class="title">{{ translate('title1') }}</view>
    <nut-cell>
      <nut-trendarrow :rate="10.2365" />
      <nut-trendarrow :rate="-0.2535" />
    </nut-cell>
    <view class="title">{{ translate('title2') }}</view>
    <nut-cell>
      <nut-trendarrow :digits="1" :rate="10.2365" />
      <nut-trendarrow :digits="3" :rate="-0.2535" />
    </nut-cell>
    <view class="title">{{ translate('title3') }}</view>
    <nut-cell>
      <nut-trendarrow arrowLeft :rate="0.2535" />
      <nut-trendarrow arrowLeft :rate="-0.2535" />
    </nut-cell>
    <view class="title">{{ translate('title4') }}</view>
    <nut-cell>
      <nut-trendarrow showSign :rate="1" />
      <nut-trendarrow showSign :rate="-0.2535" />
    </nut-cell>
    <view class="title">{{ translate('title5') }}</view>
    <nut-cell>
      <nut-trendarrow showSign :rate="0" />
      <nut-trendarrow showSign showZero :rate="0" />
    </nut-cell>
    <view class="title">{{ translate('title6') }}</view>
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
    <view class="title">{{ translate('title7') }}</view>
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
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('trendarrow');
import { reactive, toRefs, getCurrentInstance, onMounted, ref } from 'vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '改变文字颜色',
      title2: '指定小数位',
      title3: '箭头在前面',
      title4: '显示正负号',
      title5: '是否展示0',
      title6: '自定义颜色',
      title7: '自定义图标'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Change text color',
      title2: 'Specify decimal places',
      title3: 'Arrow ahead',
      title4: 'show sign',
      title5: 'Whether to show 0',
      title6: 'Custom color',
      title7: 'Custom icon'
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
