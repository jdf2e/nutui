<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-swipe>
      <nut-cell round-radius="0" :desc="translate('leftDel')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('disable') }}</h2>
    <nut-swipe disabled>
      <nut-cell round-radius="0" :desc="translate('disable')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('swipeLR') }}</h2>
    <nut-swipe>
      <template #left>
        <nut-button shape="square" style="height: 100%" type="success">{{ translate('select') }}</nut-button>
      </template>
      <nut-cell round-radius="0" :desc="translate('swipeLRDesc')" />
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</nut-button>
      </template>
    </nut-swipe>
    <h2>{{ translate('async') }}</h2>
    <nut-swipe ref="refSwipe" @open="open" @close="close">
      <nut-cell :title="translate('asyncDesc')">
        <template v-slot:link>
          <nut-switch
            v-model="checked"
            @change="changSwitch"
            :active-text="translate('open')"
            :inactive-text="translate('close')"
          />
        </template>
      </nut-cell>
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
        <template v-slot:link>
          <nut-inputnumber v-model="number" />
        </template>
      </nut-cell>
      <template #right>
        <nut-button shape="square" style="height: 100%" type="danger">{{ translate('delete') }}</nut-button>
        <nut-button shape="square" style="height: 100%" type="info">{{ translate('collect') }}</nut-button>
      </template>
    </nut-swipe>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('swipe');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
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
      collect: '收藏'
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
      collect: 'Collect'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const refSwipe = ref<HTMLElement>();
    const checked = ref(false);
    const number = ref(0);
    const changSwitch = (value: boolean) => {
      if (value) {
        refSwipe.value?.open('left');
      } else {
        refSwipe.value?.close();
      }
    };
    const open = (obj: any) => {
      console.log(obj);
      checked.value = true;
    };
    const close = () => {
      checked.value = false;
    };
    return { checked, number, changSwitch, refSwipe, open, close, translate };
  }
});
</script>

<style lang="scss" scoped></style>
