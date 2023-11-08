<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>默认用法</h2>
    <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
    ></nut-noticebar>

    <h2>滚动播放</h2>
    <nut-noticebar
      text="华为畅享9新品即将上市"
      :scrollable="true"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    >
    </nut-noticebar>
    <p />
    <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      :scrollable="false"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>

    <h2>通告栏模式--关闭模式</h2>
    <nut-noticebar :close-mode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`" @click="hello"
      >NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在
      H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
    </nut-noticebar>
    <p />
    <nut-noticebar :close-mode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`" @click="hello"
      >NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在
      H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
    </nut-noticebar>

    <h2>通告栏模式--链接模式</h2>
    <nut-noticebar :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <template #left-icon>
        <img
          src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          style="width: 20px; height: 20px"
        />
      </template>
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>

    <h2>多行展示</h2>
    <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>

    <h2>纵向滚动</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="state.horseLamp1"
        :speed="10"
        :stand-time="1000"
        :close-mode="true"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
        :height="50"
        @click="go"
      ></nut-noticebar>
    </div>

    <h2>纵向复杂滚动动画</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="state.horseLamp2"
        :speed="10"
        :stand-time="2000"
        :complex-am="true"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      ></nut-noticebar>
    </div>
    <h2>纵向自定义滚动内容</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :height="50"
        :speed="10"
        :stand-time="1000"
        :list="[]"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
        @close="go"
      >
        <div
          v-for="(item, index) in data1"
          :key="index"
          class="custom-item"
          :data-index="index"
          style="height: 50px; line-height: 50px"
          >{{ item }}</div
        >
      </nut-noticebar>
    </div>

    <h2>纵向自定义右侧图标</h2>
    <div class="interstroll-list">
      <nut-noticebar
        direction="vertical"
        :list="state.horseLamp1"
        :speed="10"
        :stand-time="1000"
        :background="`rgba(251, 248, 220, 1)`"
        :color="`#D9500B`"
      >
        <template #right-icon>
          <img
            src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
            style="width: 20px; height: 20px"
          />
        </template>
      </nut-noticebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
const state = reactive({
  horseLamp1: [
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆'
  ],
  horseLamp2: [
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆'
  ],
  horseLamp3: [
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。',
    '爆款准点秒',
    '买超值优惠',
    '赢百万京豆'
  ],
  text: 'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
});

const data1 = ref(['Noticebar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);

setTimeout(() => {
  data1.value = ['公告栏 Noticebar', '级联选择 Cascader', '日期选择器 DatePicker', '复选按钮 CheckBox'];
}, 2000);

const hello = () => {
  console.log('hello world');
};
const go = (item: any) => {
  console.log(item);
};
</script>

<style lang="scss">
.demo {
  padding-bottom: 30px !important;

  .custom-item {
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
