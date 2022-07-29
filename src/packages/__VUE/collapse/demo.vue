<template>
  <div class="demo full">
    <h2>{{ translate('basic1') }}</h2>
    <nut-collapse v-model:active="active1" icon="down-arrow" @change="change">
      <nut-collapse-item :name="1">
        <template v-slot:mTitle>
          {{ translate('title1') }}
        </template>
        {{ translate('desc1') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2">
        {{ translate('desc2') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title3')" :name="3" disabled> </nut-collapse-item>
    </nut-collapse>
    <h2>{{ translate('basic2') }}</h2>
    <nut-collapse v-model:active="active4" :accordion="true" @change="change">
      <nut-collapse-item :title="translate('title1')" :name="1">
        {{ translate('desc3') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2"> {{ translate('desc4') }} </nut-collapse-item>
    </nut-collapse>
    <h2>{{ translate('basic3') }}</h2>
    <nut-collapse v-model:active="active2" :accordion="true" icon="down-arrow">
      <nut-collapse-item :title="translate('title1')" :name="1"> {{ translate('desc5') }} </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2" :sub-title="translate('subtitle')">
        {{ translate('desc6') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title3')" :name="3">
        {{ translate('desc7') }}
      </nut-collapse-item>
    </nut-collapse>
    <h2>{{ translate('basic4') }}</h2>
    <nut-collapse v-model:active="active3" :accordion="true" icon="arrow-right2" rotate="90">
      <nut-collapse-item :title="translate('title1')" :name="1">
        <template v-slot:sTitle> {{ translate('title4') }} </template>
        {{ translate('desc8') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2" :sub-title="translate('title6')">
        {{ translate('desc9') }}
      </nut-collapse-item>
    </nut-collapse>
    <h2>{{ translate('basic5') }}</h2>
    <nut-collapse
      v-model:active="active5"
      title-icon="issue"
      title-icon-color="red"
      title-icon-size="20px"
      title-icon-position="right"
      icon="down-arrow"
      :accordion="true"
    >
      <nut-collapse-item :title="translate('title1')" :name="1"> {{ translate('desc10') }} </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2" :sub-title="translate('title6')">
        {{ translate('desc11') }}
      </nut-collapse-item>
    </nut-collapse>
    <h2>{{ translate('basic6') }}</h2>
    <nut-collapse v-model:active="active6" icon="down-arrow" :accordion="true">
      <nut-collapse-item :title="translate('title1')" :name="1">
        <template v-slot:extraRender>{{ translate('title5') }}</template>
        {{ translate('desc1') }}
      </nut-collapse-item>
      <nut-collapse-item :title="translate('title2')" :name="2">
        {{ translate('desc2') }}
      </nut-collapse-item>
    </nut-collapse>
  </div>
</template>
<script lang="ts">
import { onMounted, reactive, ref, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('collapse');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic1: '基本用法',
      basic2: '无icon样式',
      basic3: '手风琴',
      basic4: '自定义折叠图标',
      basic5: '自定义标题图标',
      basic6: '设置固定内容（不折叠）',
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      title4: '文本测试',
      title5: '固定内容',
      title6: '文本内容',
      desc1: 'NutUI是一套拥有京东风格的轻量级的 Vue 组件库',
      desc2: '在产品的功能、体验、易用性和灵活性等各个方面做了全面的升级！',
      desc3: '引入Vue3新特性 Composition API、Teleport、Emits 等',
      desc4: '全面使用 TypeScipt',
      desc5: '基于京东设计语言体系，构建场景',
      desc6: '提高界⾯的模块化通用程度',
      desc7: '采用组合式 API Composition 语法重构，结构清晰，功能模块化',
      desc8: ' NUTUI3.0重新思考其内在的一致性和可组合性',
      desc9: '提⾼产研输出对接的效率，降低输出工作量',
      desc10: '组件 emits 事件单独提取，增强代码可读性',
      desc11: '使用 Teleport 新特性重构挂载类组件',
      subtitle: '副标题'
    },
    'en-US': {
      basic1: 'Basic Usage',
      basic2: 'No icon style',
      basic3: 'accordion',
      basic4: 'Custom collapse Icon',
      basic5: 'Custom title Icon',
      basic6: 'Set fixed content (do not collapse)',
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
      title4: 'text test',
      title5: 'fixed content',
      title6: 'text content',
      desc1: 'Nutui is a lightweight Vue component library with JD style',
      desc2:
        'The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!',
      desc3: 'Introduce new features of vue3, such as composition API, teleport, emits, etc',
      desc4: 'Full use of typescipt',
      desc5: 'Build scenes based on JD design language system',
      desc6: 'Improve the modularity and generality of the boundary',
      desc7: 'It adopts combinatorial API composition syntax to reconstruct, with clear structure and modular function',
      desc8: 'NUTUI3. 0 rethink its internal consistency and composability',
      desc9: 'Improve the efficiency of production research output docking and reduce the output workload',
      desc10: 'component emits events are extracted separately to enhance code readability',
      desc11: 'reconstruct and mount class components using the new feature of teleport',
      subtitle: 'subtitle'
    }
  });
export default createDemo({
  setup(props, context) {
    initTranslate();
    const data = reactive({
      active1: [1, '2'],
      active2: 1,
      active3: 1,
      active4: 1,
      active5: 1,
      active6: 1,
      title1: '标题1',
      title2: '标题2',
      title3: '标题3',
      subTitle: '副标题'
    });
    const change = (name: string) => {
      console.log(`点击了name是${name}的面板`);
    };
    return {
      translate,
      change,
      ...toRefs(data)
    };
  }
});
</script>
<style lang="scss">
.nut-collapse-item .collapse-extraWrapper .collapse-extraRender {
  color: red;
}
</style>
