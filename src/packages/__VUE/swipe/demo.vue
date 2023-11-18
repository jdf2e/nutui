<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-swipe>
      <nut-cell round-radius="0" :title="translate('leftDel')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('disable') }}</h2>
    <nut-swipe disabled>
      <nut-cell round-radius="0" :title="translate('disable')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('swipeLR') }}</h2>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success">{{ translate('select') }}</nut-button>
      </template>
      <nut-cell round-radius="0" :title="translate('swipeLRDesc')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>
      {{ translate('async') }}
      <nut-switch v-model="checked" @change="changSwitch" />
    </h2>
    <nut-swipe ref="refSwipe">
      <nut-cell :title="translate('asyncDesc')"> </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('custom') }}</h2>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success">{{ translate('select') }}</nut-button>
      </template>
      <nut-cell :title="translate('desc')">
        <template #link>
          <nut-input-number v-model="number" />
        </template>
      </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>使用 SwipeGroup 控制 Swipe 之间互斥</h2>
    <nut-swipe-group lock>
      <nut-swipe name="11">
        <nut-cell round-radius="0" :title="translate('leftDel')" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        </template>
      </nut-swipe>
      <nut-swipe name="22">
        <nut-cell round-radius="0" :title="translate('leftDel')" />
        <template #right>
          <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        </template>
      </nut-swipe>
      <div>
        <nut-swipe name="33">
          <nut-cell round-radius="0" :title="translate('leftDel')" />
          <template #right>
            <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
          </template>
        </nut-swipe>
      </div>
    </nut-swipe-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NutSwipe from './index.vue';
import NutSwipeGroup from '../swipegroup/index.vue';
import NutCell from '../cell/index.vue';
import NutButton from '../button/index.vue';
import NutInputNumber from '../inputnumber/index.vue';
import NutSwitch from '../switch/index.vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('swipe');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      leftDel: '左滑删除',
      disable: '禁用滑动',
      swipeLR: '左右滑动',
      swipeLRDesc: '左滑右滑都可以哦',
      async: '异步控制',
      asyncDesc: '异步打开关闭',
      open: '开',
      close: '关',
      custom: '自定义',
      desc: '商品描述',
      delete: '删除',
      select: '选择',
      collect: '收藏',
      group: '使用 SwipeGroup 控制 Swipe 之间互斥'
    },
    'en-US': {
      basic: 'Basic Usage',
      leftDel: 'Swipe left to delete',
      disable: 'Disable swipe',
      swipeLR: 'Swipe left and right',
      swipeLRDesc: 'You can swipe left and right',
      async: 'Async control swipe',
      asyncDesc: 'Async on and off',
      open: 'on',
      close: 'off',
      custom: 'Custom',
      desc: 'product description',
      delete: 'Delelte',
      select: 'Select',
      collect: 'Collect',
      group: 'Use SwipeGroup to make swipe exclusive'
    }
  });
initTranslate();
const refSwipe = ref<any>();
const checked = ref(false);
const number = ref(0);
const changSwitch = (value: boolean) => {
  if (value) {
    refSwipe.value?.open('left');
  } else {
    refSwipe.value?.close();
  }
};
</script>
