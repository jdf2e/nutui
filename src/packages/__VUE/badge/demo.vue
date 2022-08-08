<template>
  <view class="demo">
    <h2>{{ translate('title') }}</h2>
    <nut-row>
      <nut-badge :value="8">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>
    <h2>{{ translate('title1') }}</h2>
    <nut-row>
      <nut-badge :value="200" :max="9">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="20">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="200" :max="99">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>{{ translate('title2') }}</h2>
    <nut-row>
      <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>{{ translate('title3') }}</h2>
    <nut-row>
      <nut-badge>
        <template #icons>
          <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icons>
          <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge>
        <template #icons>
          <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
        </template>
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>{{ translate('title4') }}</h2>
    <nut-row>
      <nut-badge :value="8" top="5" right="5">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge :value="76" top="10" right="10">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
      <nut-badge value="NEW">
        <nut-avatar icon="my" shape="square"></nut-avatar>
      </nut-badge>
    </nut-row>

    <h2>{{ translate('title5') }}</h2>
    <nut-row>
      <nut-badge :value="8"> </nut-badge>
      <nut-badge :value="76"> </nut-badge>
      <nut-badge value="NEW"> </nut-badge>
    </nut-row>
  </view>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('badge');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '最大值',
      title2: '自定义颜色',
      title3: '自定义徽标内容',
      title4: '自定义位置',
      title5: '独立展示'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Max',
      title2: 'Custom Color',
      title3: 'Custom Content',
      title4: 'Custom Position ',
      title5: 'Standalone'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    return {
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-badge {
  margin-right: 40px;
}
</style>
