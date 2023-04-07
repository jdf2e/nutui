<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'"></Header>
    <h2>基础用法</h2>
    <nut-tabs v-model="state.tab1value">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>手势滑动切换</h2>
    <nut-tabs v-model="state.tab1value" swipeable>
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>基础用法-微笑曲线</h2>
    <nut-tabs v-model="state.tab11value" type="smile">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>通过 pane-key 匹配</h2>
    <nut-tabs v-model="state.tab2value">
      <nut-tab-pane title="Tab 1" pane-key="0"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2" pane-key="1" :disabled="true"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>Tab Pane 自动高度</h2>
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
    <h2>数据异步渲染 3s</h2>
    <nut-tabs v-model="state.tab3value">
      <nut-tab-pane v-for="item in state.list3" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>

    <h2>数量多，滚动操作（横向）</h2>
    <nut-tabs v-model="state.tab4value" title-scroll title-gutter="10" name="tab4value">
      <nut-tab-pane v-for="item in state.list4" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>数量多，滚动操作（纵向）</h2>
    <nut-tabs
      v-model="state.tab4value"
      title-scroll
      title-gutter="10"
      name="tab4valueVertical"
      direction="vertical"
      style="height: 220px"
    >
      <nut-tab-pane v-for="item in state.list4" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>左右布局</h2>
    <nut-tabs style="height: 300px" v-model="state.tab5value" title-scroll direction="vertical">
      <nut-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>左右布局-微笑曲线</h2>
    <nut-tabs style="height: 300px" v-model="state.tab6value" type="smile" title-scroll direction="vertical">
      <nut-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab ' + item"> Tab {{ item }} </nut-tab-pane>
    </nut-tabs>
    <h2>标签栏字体尺寸 large normal small </h2>
    <nut-tabs v-model="state.tab1value" size="large">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <nut-tabs v-model="state.tab1value" size="normal">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <nut-tabs v-model="state.tab1value" size="small">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    <h2>自定义标签栏</h2>
    <nut-tabs v-model="state.tab7value">
      <template v-slot:titles>
        <div
          class="nut-tabs__titles-item"
          @click="state.tab7value = item.paneKey"
          :class="{ active: state.tab7value == item.paneKey }"
          :key="item.paneKey"
          v-for="item in state.list6"
        >
          <Dongdong />
          <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
      <nut-tab-pane v-for="item in state.list6" :pane-key="item.paneKey">
        {{ item.title }}
      </nut-tab-pane>
    </nut-tabs>
  </div>
</template>

<script lang="ts">
import { Dongdong } from '@nutui/icons-vue-taro';
import { reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  props: {},
  components: { Dongdong, Header },
  setup() {
    const env = Taro.getEnv();

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
      list6: [
        {
          title: '自定义 1',
          paneKey: 'c1',
          icon: 'dongdong'
        },
        {
          title: '自定义 2',
          paneKey: 'c2',
          icon: 'JD'
        },
        {
          title: '自定义 3',
          paneKey: 'c3'
        }
      ]
    });
    setTimeout(() => {
      state.list3.push(999);
    }, 3000);
    return { state, env };
  }
};
</script>

<style lang="scss" scoped></style>
