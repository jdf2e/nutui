<template>
  <nut-avatar> <img :src="url" /> </nut-avatar>
  <nut-avatar> <My /> </nut-avatar>
  <nut-avatar> 王 </nut-avatar>
</template>
<script setup lang="ts">
import { My } from '@nutui/icons-vue'
const url = 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
</script>
