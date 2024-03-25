<template>
  <nut-space wrap>
    <div v-for="fit in fits" :key="fit">
      <nut-image :src="url" width="100" height="100" :fit="fit" />
      <div style="text-align: center">{{ fit }}</div>
    </div>
  </nut-space>
</template>
<script setup>
const url = 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down']
</script>
