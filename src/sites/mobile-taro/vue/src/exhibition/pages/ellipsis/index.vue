<template>
  <div class="demo">
    <h2>头部省略</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="start" class="elli"></nut-ellipsis>
    </nut-cell>

    <h2>尾部省略</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="end" class="elli"></nut-ellipsis>
    </nut-cell>

    <h2>中间省略</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="middle" class="elli"></nut-ellipsis>
    </nut-cell>

    <h2>多行省略</h2>
    <nut-cell>
      <nut-ellipsis :content="content" direction="start" rows="3"></nut-ellipsis>
    </nut-cell>

    <h2>展开收起</h2>
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
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    const content = ref(
      'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'
    );
    return { content };
  }
});
</script>
