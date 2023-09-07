<template>
  <div class="demo">
    <nut-cell-group :title="translate('basic')">
      <nut-cell is-link @click="baseNotify(translate('basic'))">{{ translate('basic') }}</nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('t1')">
      <nut-cell is-link @click="primaryNotify(translate('primaryNotify'))">{{ translate('primaryNotify') }}</nut-cell>
      <nut-cell is-link @click="successNotify(translate('successNotify'))">{{ translate('successNotify') }}</nut-cell>
      <nut-cell is-link @click="errorNotify(translate('errorNotify'))">{{ translate('errorNotify') }}</nut-cell>
      <nut-cell is-link @click="warningNotify(translate('warningNotify'))">{{ translate('warningNotify') }}</nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('t2')">
      <nut-cell is-link @click="cusBgNotify(translate('cusBgNotify'))"> {{ translate('cusBgNotify') }} </nut-cell>
      <nut-cell is-link @click="timeNotify(translate('t3'))"> {{ translate('t3') }} </nut-cell>
      <nut-cell is-link @click="positionNotify(translate('cusPostion'))"> {{ translate('cusPostion') }} </nut-cell>
    </nut-cell-group>
    <nut-cell-group :title="translate('useTemplate')">
      <nut-cell is-link @click="onClick">{{ translate('useTemplate') }}</nut-cell>
      <nut-notify v-model:visible="show" :duration="2000">
        <span>Content</span>
      </nut-notify>
    </nut-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NutNotify from './index.vue';
import { showNotify } from './index';
import NutCell from '../cell/index.vue';
import NutCellGroup from '../cellgroup/index.vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('notify');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      t1: '通知类型',
      t2: '自定义',
      t3: '自定义时长',
      cusPostion: '自定义位置',
      useTemplate: '组件调用',
      primaryNotify: '主要通知',
      successNotify: '成功通知',
      errorNotify: '危险通知',
      warningNotify: '警告通知',
      cusBgNotify: '自定义背景色和字体颜色'
    },
    'en-US': {
      basic: 'Basic Usage',
      t1: 'Notify Type',
      t2: 'Custom',
      t3: 'Custom Duration',
      cusPostion: 'Custom Postion',
      useTemplate: 'Template use',
      primaryNotify: 'Primary Notify',
      successNotify: 'Success Notify',
      errorNotify: 'Error Notify',
      warningNotify: 'Warning Notify',
      cusBgNotify: 'Customize background and font colors'
    }
  });
initTranslate();
const baseNotify = (msg: string) => {
  showNotify.text(msg, {
    onClose: () => {
      console.log('close');
    },
    onClick: () => {
      console.log('click');
    }
  });
};
const primaryNotify = (msg: string) => {
  showNotify.primary(msg, { duration: 1000 });
};
const successNotify = (msg: string) => {
  showNotify.success(msg);
};
const errorNotify = (msg: string) => {
  showNotify.danger(msg);
};
const warningNotify = (msg: string) => {
  showNotify.warn(msg);
};
const cusBgNotify = (msg: string) => {
  showNotify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
};
const timeNotify = (msg: string) => {
  showNotify.text(msg, { duration: 1000 });
};
const positionNotify = (msg: string) => {
  showNotify.text(msg, { position: 'bottom' });
};
const show = ref(false);
const onClick = () => {
  show.value = true;
};
</script>
