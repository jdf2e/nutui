<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell
      title="我是标题"
      sub-title="副标题描述"
      desc="描述文字"
    ></nut-cell>
    <nut-cell title="点击测试" @click="testClick"></nut-cell>

    <h2>直接使用插槽(slot)</h2>

    <nut-cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </nut-cell>

    <!-- <nut-cell-group title="链接 | 分组用法">
      <nut-cell title="链接" is-link></nut-cell>
      <nut-cell
        title="URL 跳转"
        desc="https://jd.com"
        is-link
        url="https://jd.com"
      ></nut-cell>
      <nut-cell title="路由跳转 ’/‘ " to="/"></nut-cell>
    </nut-cell-group> -->

    <nut-cell-group title="自定义右侧箭头区域">
      <nut-cell title="Switch">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" />
        </template>
      </nut-cell>
    </nut-cell-group>

    <h2>展示图标</h2>
    <nut-cell title="姓名" icon="my" desc="张三" isLink> </nut-cell>
    <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
    <nut-cell desc-text-align="left" desc="张三"></nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const testClick = (event: Event) => {
      console.log('点击事件');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked };
  }
};
</script>
