<template>
  <nut-input v-model="val" clearable placeholder="Event" @clear="clear" @click-input="click" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
const clear = () => {
  console.log('clear');
};
const click = () => {
  console.log('click-input');
};
</script>
