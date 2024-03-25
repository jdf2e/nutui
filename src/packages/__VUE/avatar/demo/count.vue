<template>
  <nut-button size="mini" @click="count++">+1</nut-button>
  <nut-button size="mini" @click="count--">-1</nut-button>
  <nut-avatar-group max-count="4" z-index="right">
    <nut-avatar v-for="i in count" :key="i">
      <My v-if="i % 2 == 0" />
      <img v-else :src="url" />
    </nut-avatar>
  </nut-avatar-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { My } from '@nutui/icons-vue'
const count = ref(4)
const url = 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
</script>
