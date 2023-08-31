<template>
  <div class="demo">
    <nut-cell-group :title="translate('title')">
      <nut-cell :title="translate('type0')">
        <template #link>
          <nut-tag>{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('type1')">
        <template #link>
          <nut-tag type="primary">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('type2')">
        <template #link>
          <nut-tag type="success">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('type3')">
        <template #link>
          <nut-tag type="danger">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('type4')">
        <template #link>
          <nut-tag type="warning">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('title1')">
      <nut-cell :title="translate('plain')">
        <template #link>
          <nut-tag plain>{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('round')">
        <template #link>
          <nut-tag round type="primary">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('mark')">
        <template #link>
          <nut-tag mark type="primary">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('closeable')">
        <template #link>
          <nut-tag v-if="show" closeable type="primary" @close="close">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('title2')">
      <nut-cell :title="translate('bgColor')">
        <template #link>
          <nut-tag color="#FA685D">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('textColor')">
        <template #link>
          <nut-tag color="#E9E9E9" text-color="#999999">{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
      <nut-cell :title="translate('plaincolor')">
        <template #link>
          <nut-tag color="#FA2400" plain>{{ translate('tag') }}</nut-tag>
        </template>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('tag');
import { useTranslate } from '@/sites/assets/util/useTranslate';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      title: '基础用法',
      title1: '样式风格',
      title2: '颜色自定义',
      type0: 'defualt 类型',
      type1: 'primary 类型',
      type2: 'success 类型',
      type3: 'danger 类型',
      type4: 'warning 类型',
      plain: '空心样式',
      round: '圆角样式',
      mark: '标记样式',
      closeable: '可关闭标签',
      tag: '标签',
      bgColor: '背景颜色',
      textColor: '文字颜色',
      plaincolor: '空心颜色'
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Style',
      title2: 'Custom Color',
      type0: 'default',
      type1: 'primary',
      type2: 'success',
      type3: 'danger',
      type4: 'warning',
      plain: 'plain',
      round: 'round',
      mark: 'mark',
      closeable: 'closeable',
      tag: 'Tag',
      bgColor: 'background color',
      textColor: 'text color',
      plaincolor: 'plain color'
    }
  });
initTranslate();
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>
