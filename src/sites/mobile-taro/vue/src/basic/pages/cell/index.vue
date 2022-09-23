<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
    <nut-cell title="点击测试" @click="testClick"></nut-cell>
    <nut-cell title="圆角设置 0" round-radius="0"></nut-cell>

    <h2>尺寸设置 large</h2>
    <nut-cell size="large" title="我是标题" desc="描述文字"></nut-cell>
    <nut-cell size="large" title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>

    <h2>直接使用插槽(slot)</h2>

    <nut-cell>
      <div>自定义内容</div>
    </nut-cell>

    <h2>直接使用插槽(slot title)</h2>
    <nut-cell desc="描述文字">
      <template v-slot:title>
        <span>Title <b style="color: red">1</b></span>
      </template>
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
    <nut-cell-group title="自定义右侧箭头区域" desc="使用 nut-cell-group 支持 title desc slots">
      <nut-cell title="Switch">
        <template v-slot:link>
          <nut-switch v-model="switchChecked" />
        </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="自定义左侧 Icon 区域">
      <nut-cell title="图片">
        <template v-slot:icon>
          <img
            class="nut-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </template>
      </nut-cell>
    </nut-cell-group>

    <h2>展示图标</h2>
    <nut-cell title="姓名" icon="my" desc="张三" isLink> </nut-cell>
    <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
    <nut-cell desc-text-align="left" desc="张三"></nut-cell>
    <h2>垂直居中</h2>
    <nut-cell center title="我是标题" sub-title="副标题描述" desc="描述文字"></nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const testClick = (event: Event) => {
      // console.log('点击事件');
    };
    const switchChecked = ref(true);
    return { testClick, switchChecked };
  }
};
</script>
