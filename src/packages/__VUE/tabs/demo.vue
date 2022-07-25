<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-tabs v-model="state.tab1value">
      <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title1') }}</h2>
    <nut-tabs v-model="state.tab11value" type="smile">
      <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title2') }}</h2>
    <nut-tabs v-model="state.tab2value">
      <nut-tabpane title="Tab 1" pane-key="0"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2" pane-key="1" :disabled="true"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3" pane-key="2"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title9') }}</h2>
    <nut-tabs v-model="state.tab2value" :auto-height="true">
      <nut-tabpane title="Tab 1" pane-key="0">
        <p>Tab 1</p>
        <p>Tab 1</p>
        <p>Tab 1</p>
        <p>Tab 1</p>
      </nut-tabpane>
      <nut-tabpane title="Tab 2" pane-key="1"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3" pane-key="2"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title3') }}</h2>
    <nut-tabs v-model="state.tab3value">
      <nut-tabpane v-for="item in state.list3" :title="'Tab ' + item"> Tab {{ item }} </nut-tabpane>
    </nut-tabs>

    <h2>{{ translate('title4') }}</h2>
    <nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
      <nut-tabpane v-for="item in state.list4" :title="'Tab ' + item"> Tab {{ item }} </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title5') }}</h2>
    <nut-tabs style="height: 300px" v-model="state.tab5value" title-scroll direction="vertical">
      <nut-tabpane v-for="item in state.list5" :title="'Tab ' + item"> Tab {{ item }} </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title6') }}</h2>
    <nut-tabs style="height: 300px" v-model="state.tab6value" type="smile" title-scroll direction="vertical">
      <nut-tabpane v-for="item in state.list5" :title="'Tab ' + item"> Tab {{ item }} </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title7') }}</h2>
    <nut-tabs v-model="state.tab1value" size="large">
      <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <nut-tabs v-model="state.tab1value" size="normal">
      <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <nut-tabs v-model="state.tab1value" size="small">
      <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
      <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
      <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
    </nut-tabs>
    <h2>{{ translate('title8') }}</h2>
    <nut-tabs v-model="state.tab7value">
      <template v-slot:titles>
        <div
          class="nut-tabs__titles-item"
          @click="state.tab7value = item.paneKey"
          :class="{ active: state.tab7value == item.paneKey }"
          :key="item.paneKey"
          v-for="item in state.list6"
        >
          <nut-icon v-if="item.icon" :name="item.icon" />
          <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
      <nut-tabpane v-for="item in state.list6" :pane-key="item.paneKey">
        {{ item.title }}
      </nut-tabpane>
    </nut-tabs>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('tabs');

import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '基础用法-微笑曲线',
      title2: '通过 pane-key 匹配',
      title3: '数据异步渲染 3s',
      title4: '数量多,滚动操作',
      title5: '左右布局',
      title6: '左右布局-微笑曲线',
      title7: '标签栏字体尺寸 large normal small',
      title8: '自定义标签栏',
      title9: 'Tabpane 自动高度',
      custom: (val: string) => `自定义 ${1}`
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Basic Usage - Smile Curve',
      title2: 'Match by pane-key',
      title3: 'Data is rendered asynchronously for 3s',
      title4: 'A large number of scrolling operations',
      title5: 'Left and right layout',
      title6: 'Left and Right Layout - Smile Curve',
      title7: 'tab bar font size large normal small',
      title8: 'custom tab bar',
      title9: 'Tabpane auto height',
      custom: (val: string) => `custom ${1}`
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const state = reactive({
      tab1value: '0',
      tab11value: '0',
      tab2value: '0',
      tab3value: '0',
      tab4value: '0',
      tab5value: '0',
      tab6value: '0',
      tab7value: 'c1',
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

    return { state, translate };
  }
});
</script>

<style lang="scss" scoped></style>
