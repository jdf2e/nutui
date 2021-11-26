<template>
  <div class="demo">
    <nut-cell-group title="函数式调用">
      <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
      <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
      <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
      <nut-cell title="底部按钮 垂直调用" @click="verticalClick"></nut-cell>
    </nut-cell-group>
    <nut-cell-group title="标签式使用">
      <nut-cell title="组件调用" @click="componentClick"></nut-cell>
      <nut-dialog
        teleport="#app"
        title="组件调用"
        content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
        v-model:visible="visible"
      >
      </nut-dialog>
      <nut-cell title="底部按钮 垂直使用" @click="componentvVrticalClick"></nut-cell>
      <nut-dialog
        footer-direction="vertical"
        teleport="#app"
        title="组件调用"
        content="如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。"
        v-model:visible="visible1"
      >
      </nut-dialog>
    </nut-cell-group>
    <nut-cell-group title="teleport 使用，挂载到指定节点">
      <nut-cell title="body 节点下" @click="teleportClick('body')"></nut-cell>
      <nut-cell title="#app 节点下" @click="teleportClick('#app')"></nut-cell>
      <nut-cell title="demo class 元素节点下" @click="teleportClick('.demo')"></nut-cell>
    </nut-cell-group>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('dialog');
import { Dialog } from '@/packages/nutui.vue';

export default createDemo({
  setup() {
    const visible = ref(false);
    const visible1 = ref(false);

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
    const verticalClick = () => {
      Dialog({
        title: '温馨提示',
        content: '支持底部按钮纵向排列。',
        footerDirection: 'vertical',
        onCancel,
        onOk
      });
    };

    const componentClick = () => {
      visible.value = true;
    };
    const componentvVrticalClick = () => {
      visible1.value = true;
    };

    const teleportClick = (teleport: string) => {
      Dialog({
        teleport,
        title: '挂载至 ' + teleport,
        content: '打开开发者工具看一下 Elements Tab',
        noCancelBtn: true,
        onCancel
      });
    };

    return {
      visible,
      visible1,
      baseClick,
      noTitleClick,
      componentClick,
      componentvVrticalClick,
      tipsClick,
      verticalClick,
      teleportClick
    };
  }
});
</script>
<style lang="scss"></style>
