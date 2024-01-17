<template>
  <nut-cell>
    <nut-checkbox v-model="val1" :indeterminate="indeterminate" @change="change1"> State </nut-checkbox>
  </nut-cell>
  <nut-cell>
    <nut-checkbox-group ref="group" v-model="val2" @change="change2">
      <nut-checkbox label="1"> A </nut-checkbox>
      <nut-checkbox label="2"> B </nut-checkbox>
      <nut-checkbox label="3"> C </nut-checkbox>
      <nut-checkbox label="4"> D </nut-checkbox>
    </nut-checkbox-group>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const group = ref(null);
const val1 = ref(false);
const val2 = ref([]);
const indeterminate = ref(false);

const change1 = (value) => {
  group.value.toggleAll(value);
};

const change2 = (label) => {
  if (label.length === 4) {
    indeterminate.value = false;
    val1.value = true;
  } else if (label.length && label.length < 4) {
    indeterminate.value = true;
  } else {
    indeterminate.value = false;
    val1.value = false;
  }
};
</script>
