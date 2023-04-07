<template>
  <scroll-view v-bind="$attrs">
    <slot></slot>
  </scroll-view>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
export default defineComponent({
  name: 'NutScrollView',
  setup() {
    const state = reactive({
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });
    return {
      ...toRefs(state)
    };
  }
});
</script>
