<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell :title="translate('cell1')" is-link @click="state.showBasic = true"></nut-cell>
    <nut-popup
      pop-class="popclass"
      :style="{ padding: '30px 50px' }"
      v-model:visible="state.showBasic"
      :z-index="100"
      >{{ translate('text') }}</nut-popup
    >
    <h2>{{ translate('position') }}</h2>
    <nut-cell :title="translate('cell2')" is-link @click="state.showTop = true"></nut-cell>
    <nut-popup position="top" :style="{ height: '20%' }" v-model:visible="state.showTop"></nut-popup>
    <nut-cell :title="translate('cell3')" is-link @click="state.showBottom = true"></nut-cell>
    <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="state.showBottom"></nut-popup>
    <nut-cell :title="translate('cell4')" is-link @click="state.showLeft = true"></nut-cell>
    <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showLeft"></nut-popup>
    <nut-cell :title="translate('cell5')" is-link @click="state.showRight = true"></nut-cell>
    <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showRight"></nut-popup>
    <h2>{{ translate('close') }}</h2>
    <nut-cell :title="translate('close')" is-link @click="state.showIcon = true"></nut-cell>
    <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="state.showIcon"></nut-popup>
    <nut-cell :title="translate('iposition')" is-link @click="state.showIconPosition = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      :style="{ height: '20%' }"
      v-model:visible="state.showIconPosition"
    ></nut-popup>
    <nut-cell :title="translate('cicon')" is-link @click="state.showCloseIcon = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      close-icon-position="top-left"
      close-icon="heart"
      :style="{ height: '20%' }"
      v-model:visible="state.showCloseIcon"
    ></nut-popup>
    <h2>{{ translate('circle') }}</h2>
    <nut-cell :title="translate('circle')" is-link @click="state.showRound = true"></nut-cell>
    <nut-popup
      position="bottom"
      closeable
      round
      :style="{ height: '30%' }"
      v-model:visible="state.showRound"
    ></nut-popup>
    <h2>{{ translate('teleport') }}</h2>
    <nut-cell :title="translate('teleport')" is-link @click="state.showTeleport = true"></nut-cell>
    <nut-popup :style="{ padding: '30px 50px' }" teleport="#app" v-model:visible="state.showTeleport">app</nut-popup>
    <h2>{{ translate('muti') }}</h2>
    <nut-cell :title="translate('muti')" is-link @click="state.showPop1 = true"></nut-cell>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="state.showPop1">
      <div @click="state.showPop2 = true">{{ translate('click') }}</div>
    </nut-popup>
    <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="state.showPop2">{{ translate('text') }}</nut-popup>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('popup');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      cell1: '展示弹出层',
      text: '正文',
      position: '弹出位置',
      cell2: '顶部弹出',
      cell3: '底部弹出',
      cell4: '左侧弹出',
      cell5: '右侧弹出',
      close: '关闭图标',
      iposition: '图标位置',
      cicon: '自定义图标',
      circle: '圆角弹框',
      teleport: '指定挂载节点',
      muti: '多层堆叠',
      click: '点击它'
    },
    'en-US': {
      basic: 'Basic Usage',
      cell1: 'Show pop-up layer',
      text: 'text',
      position: 'Eject position',
      cell2: 'Top pop-up',
      cell3: 'Bottom pop-up',
      cell4: 'Left pop-up',
      cell5: 'Right pop-up',
      close: 'Close icon',
      iposition: 'Icon location',
      cicon: 'Custom icon',
      circle: 'Rounded bullet frame',
      teleport: 'Specify mount node',
      muti: 'Multi stack',
      click: 'Click it'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showIcon: false,
      showIconPosition: false,
      showCloseIcon: false,
      showRound: false,
      showCombination: false,
      showPop1: false,
      showPop2: false
    });
    return { state, translate };
  }
});
</script>

<style lang="scss" scoped></style>
