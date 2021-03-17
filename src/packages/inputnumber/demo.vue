<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell>
      <nut-inputnumber
        v-model:modelValue="state.val1"
        @change="change"
        @blur="blur"
        @focus="focus"
      />
    </nut-cell>
    <h2>步长设置</h2>
    <nut-cell>
      <nut-inputnumber
        v-model:modelValue="state.val2"
        :step="state.step"
        :decimal-places="1"
      />
    </nut-cell>
    <h2>限制输入范围</h2>
    <nut-cell>
      <nut-inputnumber
        v-model:modelValue="state.val3"
        :min="state.min"
        :max="state.max"
        @reduce-no-allow="reduceNoAllow"
        @add-no-allow="addNoAllow"
      />
    </nut-cell>
    <h2>禁用操作&输入框</h2>
    <nut-cell>
      <nut-inputnumber
        :readonly="true"
        v-model:modelValue="state.val4"
        min="0"
        max="0"
        @focus="focus"
        @blur="blur"
      />
    </nut-cell>
    <h2>支持异步修改</h2>
    <nut-cell>
      <nut-inputnumber
        :async="state.async"
        v-model="state.val5"
        :before-change="beforeChange"
      />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('inputnumber');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      val1: 2,
      val2: 1.1,
      val3: 3,
      val4: 0,
      val5: 1,
      step: 1.1,
      min: 3,
      max: 100,
      async: true,
      timer: undefined as undefined | number
    });
    onMounted(() => {
      state.max = 5;
    });
    const change = (num: string | number) => {
      console.log('change: ', num);
    };
    const blur = (e: Event, num: string | number) => {
      console.log('blur: ', num);
    };
    const focus = (e: Event, num: string | number) => {
      console.log('focus: ', e, num);
    };
    const addNoAllow = () => {
      alert('超出最大限制数');
    };
    const reduceNoAllow = () => {
      alert('超出最小限制数');
    };
    const beforeChange = () => {
      // return true;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 500);
      });
    };
    const handleChangeAsync = (num: number) => {
      clearTimeout(state.timer);
      state.timer = setTimeout(() => {
        state.val5 = state.val5 + 1;
      }, 1000);
    };
    return {
      state,
      change,
      blur,
      focus,
      reduceNoAllow,
      addNoAllow,
      handleChangeAsync,
      beforeChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
