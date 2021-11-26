<template>
  <div class="demo">
    <nut-cell title="基础弹框" @click="baseClick"></nut-cell>
    <nut-dialog title="基础弹框" content="这是基础弹框。" v-model:visible="visible1" @cancel="onCancel" @ok="onOk" />

    <nut-cell title="无标题弹框" @click="noTitleClick"></nut-cell>
    <nut-dialog content="这是无标题弹框。" v-model:visible="visible2" @cancel="onCancel" @ok="onOk" />

    <nut-cell title="提示弹框" @click="tipsClick"></nut-cell>
    <nut-dialog
      no-cancel-btn
      title="温馨提示"
      content="这是提示弹框。"
      v-model:visible="visible3"
      @cancel="onCancel"
      @ok="onOk"
    />

    <nut-cell title="底部按钮 垂直使用" @click="verticalClick"></nut-cell>
    <nut-dialog
      footer-direction="vertical"
      teleport="#app"
      title="温馨提示"
      content="这是提示弹框。"
      v-model:visible="visible5"
    />

    <nut-cell title="异步关闭" @click="componentClick"></nut-cell>
    <nut-dialog title="异步关闭" :content="closeContent" :visible="visible4" @cancel="onCancel" @ok="onOkAsync" />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const visible1 = ref(false);
    const visible2 = ref(false);
    const visible3 = ref(false);
    const visible4 = ref(false);
    const visible5 = ref(false);
    const closeContent = ref('');
    const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
    const countDown = (second: number) => `倒计时 ${second} 秒`;

    const onCancel = () => {
      console.log('event cancel');
    };
    const onOk = () => {
      console.log('event ok');
    };
    const onOkAsync = () => {
      sleep()
        .then(() => {
          closeContent.value = countDown(2);
          return sleep();
        })
        .then(() => {
          closeContent.value = countDown(1);
          return sleep();
        })
        .then(() => {
          closeContent.value = countDown(0);
        })
        .then(() => {
          visible4.value = false;
        });
    };

    const baseClick = (): void => {
      visible1.value = true;
    };
    const noTitleClick = () => {
      visible2.value = true;
    };
    const tipsClick = () => {
      visible3.value = true;
    };

    const componentClick = () => {
      closeContent.value = `点击确定时3s后关闭`;
      visible4.value = true;
    };

    const verticalClick = () => {
      visible5.value = true;
    };

    return {
      visible1,
      visible2,
      visible3,
      visible4,
      visible5,
      onCancel,
      onOk,
      closeContent,
      onOkAsync,
      baseClick,
      noTitleClick,
      componentClick,
      tipsClick,
      verticalClick
    };
  }
};
</script>
