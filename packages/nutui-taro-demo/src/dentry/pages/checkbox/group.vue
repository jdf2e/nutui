<template>
  <nut-cell>
    <nut-checkbox-group v-model="val">
      <nut-checkbox label="1"> A </nut-checkbox>
      <nut-checkbox label="2"> B </nut-checkbox>
      <nut-checkbox label="3"> C </nut-checkbox>
      <nut-checkbox label="4"> D </nut-checkbox>
    </nut-checkbox-group>
  </nut-cell>
  <nut-cell> {{ val }} </nut-cell>
</template>
<script setup>
import { ref } from 'vue'
const val = ref(['2', '3'])
</script>
