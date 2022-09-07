<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val1" />
    </nut-cell>
    <h2>{{ translate('step') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val2" step="5" />
    </nut-cell>
    <h2>{{ translate('limit') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val3" @overlimit="overlimit" min="10" max="20" />
    </nut-cell>
    <h2>{{ translate('disable') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val4" disabled />
    </nut-cell>
    <h2>{{ translate('readonly') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val5" readonly />
    </nut-cell>
    <h2>{{ translate('decimal') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val6" step="0.1" decimal-places="1" readonly />
    </nut-cell>
    <h2>{{ translate('async') }}</h2>
    <nut-cell>
      <nut-inputnumber :model-value="state.val8" @change="onChange" />
    </nut-cell>
    <h2>{{ translate('size') }}</h2>
    <nut-cell>
      <nut-inputnumber v-model="state.val7" button-size="30" input-width="50" />
    </nut-cell>
    <h2>{{ translate('icon') }}</h2>
    <nut-cell>
      <nut-inputnumber icon-left="left" icon-right="right" v-model="state.val9" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, getCurrentInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('inputnumber');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      step: '步长设置',
      limit: '限制输入范围',
      disable: '禁用操作',
      readonly: '只读禁用输入框',
      decimal: '支持小数',
      async: '支持异步修改',
      size: '自定义按钮大小',
      icon: '自定义图标',
      content1: '异步演示 2 秒后更改',
      content2: '超出限制事件触发'
    },
    'en-US': {
      basic: 'Basic Usage',
      step: 'Step size setting',
      limit: 'Limit input range',
      disable: 'Disable operation',
      readonly: 'Read only disable input box',
      decimal: 'Support decimal',
      async: 'Support asynchronous modification',
      size: 'Custom button size',
      icon: 'Custom icon name',
      content1: 'Asynchronous presentation changes in 2 seconds',
      content2: 'Trigger of limit exceeding event'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    let { proxy } = getCurrentInstance();

    const state = reactive({
      val1: 1,
      val2: 0,
      val3: 10,
      val4: 0,
      val5: 1,
      val6: 5.5,
      val7: 1,
      val8: 1,
      val9: 1,
      step: 1.1
    });

    const onChange = (value: number) => {
      proxy.$toast.loading(translate('content1'));
      setTimeout(() => {
        state.val8 = value;
        proxy.$toast.hide();
      }, 2000);
    };

    const overlimit = () => {
      proxy.$toast.warn(translate('content2'));
    };

    return {
      state,
      onChange,
      blur,
      focus,
      overlimit,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
