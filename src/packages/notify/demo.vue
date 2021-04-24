<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell :showIcon="true" :isLink="true" @click="baseNotify('基础用法')">
      <span>
        <label>基础用法</label>
      </span>
    </nut-cell>
    <h2>通知类型</h2>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="primaryNotify('主要通知')"
    >
      <span>
        <label>主要通知</label>
      </span>
    </nut-cell>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="successNotify('成功通知')"
    >
      <span>
        <label>成功通知</label>
      </span>
    </nut-cell>
    <nut-cell :showIcon="true" :isLink="true" @click="errorNotify('危险通知')">
      <span>
        <label>危险通知</label>
      </span>
    </nut-cell>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="warningNotify('警告通知')"
    >
      <span>
        <label>警告通知</label>
      </span>
    </nut-cell>
    <h2>自定义样式</h2>
    <nut-cell
      :showIcon="true"
      :isLink="true"
      @click="cusBgNotify('自定义背景色和字体颜色')"
    >
      <span>
        <label>自定义背景色和字体颜色</label>
      </span>
    </nut-cell>
    <h2>自定义时长</h2>
    <nut-cell :showIcon="true" :isLink="true" @click="timeNotify('自定义时长')">
      <span>
        <label>自定义时长</label>
      </span>
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createApp } from 'vue';
import { createComponent } from '@/utils/create';
import { Notify } from './notify';
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
