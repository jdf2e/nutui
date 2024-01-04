<template>
  <nut-space>
    <div>
      <nut-image :src="url" width="100" height="100" fit="cover" round></nut-image>
      <div style="text-align: center">cover</div>
    </div>
    <div>
      <nut-image :src="url" width="100" height="100" fit="cover" radius="10px"></nut-image>
      <div style="text-align: center">cover</div>
    </div>
  </nut-space>
</template>
<script setup lang="ts">
const url = 'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg';
</script>
