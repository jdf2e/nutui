<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-tabs v-model="state.tab1value">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('swipeable') }}</h2>
    <nut-tabs v-model="state.tab1value" swipeable>
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title1') }}</h2>
    <nut-tabs v-model="state.tab11value" type="smile">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title9') }}</h2>
    <nut-tabs v-model="state.tab2value" :auto-height="true">
      <nut-tab-pane title="Tab 1" pane-key="0">
        <p>Tab 1</p>
        <p>Tab 1</p>
        <p>Tab 1</p>
        <p>Tab 1</p>
      </nut-tab-pane>
      <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title3') }}</h2>
    <nut-tabs v-model="state.tab3value">
      <nut-tab-pane v-for="item in state.list3" :key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>

    <h2>{{ translate('title4') }}</h2>
    <nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
      <nut-tab-pane v-for="item in state.list4" :key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title10') }}</h2>
    <nut-tabs v-model="state.tab4value" title-scroll direction="vertical" style="height: 150px">
      <nut-tab-pane v-for="item in state.list4" :key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title5') }}</h2>
    <nut-tabs v-model="state.tab5value" style="height: 300px" title-scroll direction="vertical">
      <nut-tab-pane v-for="item in state.list5" :key="item" :pane-key="item" :title="'Tab ' + item">
        Tab {{ item }}
      </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title6') }}</h2>
    <nut-tabs v-model="state.tab6value" style="height: 300px" type="smile" title-scroll direction="vertical">
      <nut-tab-pane v-for="item in state.list5" :key="item" :pane-key="item" :title="'Tab ' + item">
        Tab {{ item }}
      </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title7') }}</h2>
    <nut-tabs v-model="state.tab8value" size="large">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <nut-tabs v-model="state.tab8value" size="normal">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <nut-tabs v-model="state.tab8value" size="small">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>{{ translate('title8') }}</h2>
    <nut-tabs v-model="state.tab7value">
      <template #titles>
        <div
          v-for="item in state.list6"
          :key="item.paneKey"
          class="nut-tabs__titles-item"
          :class="{ active: state.tab7value == item.paneKey }"
          @click="state.tab7value = item.paneKey"
        >
          <Dongdong />
          <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
      <nut-tab-pane v-for="item in state.list6" :key="item.paneKey" :pane-key="item.paneKey">
        {{ item.title }}
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { Dongdong } from '@nutui/icons-vue';
import { useTranslate } from '@/sites/utils';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    swipeable: '手势滑动切换',
    title1: '基础用法-微笑曲线',
    title3: '数据异步渲染 3s',
    title4: '数量多，滚动操作（横向）',
    title5: '左右布局',
    title6: '左右布局-微笑曲线',
    title7: '标签栏字体尺寸 large normal small',
    title8: '自定义标签栏',
    title9: 'TabPane 自动高度',
    title10: '数量多，滚动操作（纵向）',
    custom: () => `自定义 ${1}`
  },
  'en-US': {
    basic: 'Basic Usage',
    swipeable: 'Swipeable',
    title1: 'Basic Usage - Smile Curve',
    title3: 'Data is rendered asynchronously for 3s',
    title4: 'A large number of scrolling operations(horizontal)',
    title5: 'Left and right layout',
    title6: 'Left and Right Layout - Smile Curve',
    title7: 'tab bar font size large normal small',
    title8: 'custom tab bar',
    title9: 'TabPane auto height',
    title10: 'A large number of scrolling operations(vertical)',
    custom: () => `custom ${1}`
  }
});
const state = reactive({
  tab1value: '0',
  tab11value: '0',
  tab2value: '0',
  tab3value: '0',
  tab4value: '0',
  tab5value: '0',
  tab6value: '0',
  tab7value: 'c1',
  tab8value: '0',
  list3: Array.from(new Array(2).keys()),
  list4: Array.from(new Array(10).keys()),
  list5: Array.from(new Array(2).keys()),
  list6: computed(() => [
    {
      title: translate('custom', 1),
      paneKey: 'c1',
      icon: 'dongdong'
    },
    {
      title: translate('custom', 2),
      paneKey: 'c2',
      icon: 'JD'
    },
    {
      title: translate('custom', 3),
      paneKey: 'c3'
    }
  ])
});
setTimeout(() => {
  state.list3.push(999);
}, 3000);
</script>
