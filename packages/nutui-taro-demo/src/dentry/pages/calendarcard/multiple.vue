<template>
  <div>
    <nut-tag v-for="d in value" :key="d.getTime()" type="success">
      {{ `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` }}
    </nut-tag>
  </div>
  <nut-calendar-card v-model="value" type="multiple" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref([new Date('2023-01-01'), new Date('2023-01-03')]);
const onChange = (val: Date) => {
  console.log(val);
};
</script>
