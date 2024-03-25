<template>
  <nut-cell v-for="(_, index) in count" :key="index">
    <nut-image :src="`${url}?t=${index}`" height="200" width="100%" lazy-load />
  </nut-cell>
</template>
<script setup lang="ts">
const url = 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
const count = Array.from({ length: 7 })
</script>
