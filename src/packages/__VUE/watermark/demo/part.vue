<template>
  <nut-cell>
    <img :src="src" alt="" style="width: 100%" />
    <nut-watermark :full-page="false" font-color="#fa2c19" content="nutui"></nut-watermark>
  </nut-cell>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const src = ref('//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg');
</script>
