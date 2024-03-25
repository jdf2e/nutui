<template>
  <nut-cell title="Title" desc="Description"></nut-cell>
  <nut-cell title="Title" sub-title="Subtitle" desc="Description"></nut-cell>
  <nut-cell title="Click Test" @click="onClick"></nut-cell>
  <nut-cell title="Round Radius = 0" :round-radius="0"></nut-cell>
</template>
<script setup lang="ts">
const onClick = () => {
  console.log('click')
}
</script>
