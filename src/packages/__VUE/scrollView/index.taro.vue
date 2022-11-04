<template>
  <template v-if="ENV == ENV_TYPE.WEB">
    <taro-scroll-view v-bind="$attrs">
      <slot></slot>
    </taro-scroll-view>
  </template>
  <template v-if="ENV != ENV_TYPE.WEB">
    <scroll-view v-bind="$attrs">
      <slot></slot>
    </scroll-view>
  </template>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import Taro from '@tarojs/taro';
import taroScrollView from '@tarojs/components/dist-h5/vue3/components/scroll-view.js';
import { ScrollView } from '@tarojs/components/mini/index.js';
export default defineComponent({
  name: 'NutScrollView',
  components: {
    ScrollView,
    taroScrollView
  },
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
