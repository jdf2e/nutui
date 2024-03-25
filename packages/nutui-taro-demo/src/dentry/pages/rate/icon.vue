<template>
  <nut-rate v-model="value" :custom-icon="HeartFill" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { HeartFill } from '@nutui/icons-vue-taro'
const value = ref(3)
</script>
