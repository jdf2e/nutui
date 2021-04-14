<template>
  <div class="demo">
    <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
    <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
    <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
    <nut-cell title="组件调用" @click="componentClick"></nut-cell>
    <nut-dialog
      title="组件调用"
      content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
      v-model:visible="visible"
    >
    </nut-dialog>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('dialog');
import { Dialog } from '@/nutui';
export default createDemo({
  setup() {
    const visible = ref(false);

    const onCancel = () => {
      console.log('event cancel');
    };
    const onOk = () => {
      console.log('event ok');
    };

    const baseClick = (): void => {
      Dialog({
        title: '基础弹框',
        content: '支持函数调用和组件调用两种方式。',
        onCancel,
        onOk
      });
    };
    const noTitleClick = () => {
      Dialog({
        content: '无标题弹框',
        onCancel,
        onOk
      });
    };
    const tipsClick = () => {
      Dialog({
        title: '温馨提示',
        content: '支持函数调用和组件调用两种方式。',
        noCancelBtn: true,
        onCancel,
        onOk
      });
    };

    const componentClick = () => {
      visible.value = true;
    };

    return {
      visible,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick
    };
  }
});
</script>
<style lang="scss"></style>
