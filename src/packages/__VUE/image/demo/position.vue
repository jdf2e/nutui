<template>
  <nut-space wrap>
    <div v-for="pos in positions1" :key="pos">
      <nut-image :src="url" width="100" height="100" fit="contain" :position="pos" />
      <div style="text-align: center"> contain </div>
      <div style="text-align: center">{{ pos }}</div>
    </div>
    <div v-for="pos in positions2" :key="pos">
      <nut-image :src="url" width="100" height="100" fit="cover" :position="pos" />
      <div style="text-align: center"> cover </div>
      <div style="text-align: center">{{ pos }}</div>
    </div>
  </nut-space>
</template>
<script setup lang="ts">
const url = 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
const positions1 = ['top', 'center', 'bottom']
const positions2 = ['left', 'center', 'right']
</script>
