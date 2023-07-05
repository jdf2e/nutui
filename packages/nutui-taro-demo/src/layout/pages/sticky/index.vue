<template>
  <div class="demo sticky-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-sticky top="0" :parent-height="1200">
        <nut-button type="primary">吸顶按钮</nut-button>
      </nut-sticky>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

export default defineComponent({
  props: {},
  components: {
    Header
  },
  setup() {
    const container = ref(null);
    const env = Taro.getEnv();
    return {
      container,
      env
    };
  }
});
</script>
<style lang="scss">
.sticky-demo {
  overflow: auto !important;
}
.sticky-container {
  width: 100%;
  height: 300px;
  background-color: #fff;
}
</style>
