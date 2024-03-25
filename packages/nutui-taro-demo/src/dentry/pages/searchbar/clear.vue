<template>
  <nut-searchbar v-model="val">
    <template #clear-icon>
      <img :src="url" style="width: 20px; height: 20px" />
    </template>
  </nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
const url = 'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png'
</script>
