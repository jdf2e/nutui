<template>
  <view>
    <nut-button type="primary">主要按钮</nut-button>
    <Demo></Demo>
  </view>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Demo from '@/packages/__VUE/button/demo.vue';
// import Demo from './../../../../../../packages/__VUE/button/demo.vue';
export default defineComponent({
  components: {
    Demo
  }
});
</script>
