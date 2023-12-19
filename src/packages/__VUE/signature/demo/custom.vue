<template>
  <nut-signature
    :line-width="state.lineWidth"
    :stroke-style="state.strokeStyle"
    @confirm="confirm"
    @clear="clear"
  ></nut-signature>
  <img v-if="imgData" :src="imgData" class="imgData" style="width: 100%" />
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
const state = reactive({
  lineWidth: 4,
  strokeStyle: 'green'
});
const imgData = ref('');
const confirm = (canvas: any, data: string) => {
  if (data) {
    imgData.value = data;
    console.log('imgData', canvas, data);
  }
};
const clear = () => {
  imgData.value = '';
  console.log('clear');
};
</script>
