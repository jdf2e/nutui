<template>
  <div class="demo full">
    <h2>基本用法</h2>
    <nut-collapse v-model:active="active1" icon="down-arrow" @change="change">
      <nut-collapse-item :name="1">
        <template v-slot:mTitle>
          {{ title1 }}
        </template>
        NutUI是一套拥有京东风格的轻量级的 Vue 组件库
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2">
        在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！
      </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3" disabled> </nut-collapse-item>
    </nut-collapse>
    <h2>无icon样式</h2>
    <nut-collapse v-model:active="active4" :accordion="true">
      <nut-collapse-item :title="title1" :name="1">
        引入Vue3新特性 Composition API、Teleport、Emits 等
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2"> 全面使用 TypeScipt </nut-collapse-item>
    </nut-collapse>
    <h2>手风琴</h2>
    <nut-collapse v-model:active="active2" :accordion="true" icon="down-arrow">
      <nut-collapse-item :title="title1" :name="1"> 基于京东设计语言体系，构建场景 </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle"> 提高界⾯的模块化通用程度 </nut-collapse-item>
      <nut-collapse-item :title="title3" :name="3">
        采用组合式 API Composition 语法重构，结构清晰，功能模块化
      </nut-collapse-item>
    </nut-collapse>
    <h2>自定义折叠图标</h2>

    <nut-collapse v-model:active="active3" :accordion="true" icon="arrow-right2" rotate="90">
      <nut-collapse-item :title="title1" :name="1">
        <template v-slot:sTitle> 文本测试 </template>
        NUTUI3.0重新思考其内在的一致性和可组合性
      </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        提⾼产研输出对接的效率，降低输出工作量
      </nut-collapse-item>
    </nut-collapse>
    <h2>自定义标题图标</h2>
    <nut-collapse
      v-model:active="active5"
      title-icon="issue"
      title-icon-color="red"
      title-icon-size="20px"
      title-icon-position="left"
      icon="down-arrow"
      :accordion="true"
    >
      <nut-collapse-item :title="title1" :name="1"> 组件 emits 事件单独提取，增强代码可读性 </nut-collapse-item>
      <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
        使用 Teleport 新特性重构挂载类组件
      </nut-collapse-item>
    </nut-collapse>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('collapse');
export default createDemo({
  setup(props, context) {
    const data = reactive({
      active1: [1, '2'],
      active2: 1,
      active3: 1,
      active4: 1,
      active5: 1,
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      subTitle: '副标题'
    });
    const change = (name: string) => {
      console.log(`点击了name是${name}的面板`);
    };
    return {
      change,
      ...toRefs(data)
    };
  }
});
</script>
