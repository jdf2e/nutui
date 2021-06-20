<template>
  <div class="demo">
    <nut-cell-group title="基础用法">
      <nut-cell is-Link @click="baseNotify('基础用法')">基础用法</nut-cell>
    </nut-cell-group>
    <nut-cell-group title="通知类型">
      <nut-cell is-Link @click="primaryNotify('主要通知')">主要通知</nut-cell>
      <nut-cell is-Link @click="successNotify('成功通知')">成功通知</nut-cell>
      <nut-cell is-Link @click="errorNotify('危险通知')">危险通知</nut-cell>
      <nut-cell is-Link @click="warningNotify('警告通知')">警告通知</nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义样式">
      <nut-cell is-Link @click="cusBgNotify('自定义背景色和字体颜色')">
        自定义背景色和字体颜色
      </nut-cell>
    </nut-cell-group>
    <nut-cell-group title="自定义时长">
      <nut-cell is-Link @click="timeNotify('自定义时长')">
        自定义时长
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import { Notify } from '../../nutui.vue';
const { createDemo } = createComponent('notify');
export default createDemo({
  setup() {
    const baseNotify = (msg: string) => {
      Notify.text(msg, {
        onClose: () => {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        }
      });
    };
    const primaryNotify = (msg: string) => {
      Notify.primary(msg);
    };
    const successNotify = (msg: string) => {
      Notify.success(msg);
    };
    const errorNotify = (msg: string) => {
      Notify.danger(msg);
    };
    const warningNotify = (msg: string) => {
      Notify.warn(msg);
    };
    const cusBgNotify = (msg: string) => {
      Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
    };
    const timeNotify = (msg: string) => {
      Notify.text(msg, { duration: 10000 });
    };
    return {
      baseNotify,
      primaryNotify,
      successNotify,
      errorNotify,
      warningNotify,
      cusBgNotify,
      timeNotify
    };
  }
});
</script>

<style lang="scss" scoped></style>
