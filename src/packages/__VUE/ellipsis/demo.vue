<template>
  <div class="demo">
    <h2>{{ translate('header') }}</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="start" class="elli"></nut-ellipsis>
    </nut-cell>

    <h2>{{ translate('end') }}</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="end"></nut-ellipsis>
    </nut-cell>

    <h2>{{ translate('middle') }}</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="middle"></nut-ellipsis>
    </nut-cell>

    <h2>{{ translate('rows') }}</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="start" rows="3"></nut-ellipsis>
    </nut-cell>

    <h2>{{ translate('expand') }}</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="start" expandText="展开" collapseText="收起"></nut-ellipsis>
    </nut-cell>
    <nut-cell>
      <nut-ellipsis :content="content" direction="middle" expandText="展开" collapseText="收起"></nut-ellipsis>
    </nut-cell>
    <nut-cell>
      <nut-ellipsis :content="content" direction="end" rows="3" expandText="展开" collapseText="收起"></nut-ellipsis>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('ellipsis');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      header: '头部省略',
      end: '尾部省略',
      middle: '中间省略',
      rows: '多行省略',
      expand: '展开收起'
    },
    'en-US': {
      basic: 'Basic Usage',
      header: 'Leading',
      end: 'Tailing',
      middle: 'Middle',
      rows: 'Multi-line',
      expand: 'Expand & Collapse'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const content = ref(
      'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
    );
    return { content, translate };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>
