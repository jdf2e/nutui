<template>
  <div class="demo-list">
    <nut-list :list-data="data" :container-height="470" @scroll-bottom="onScrollBottom">
      <template #default="{ index }">
        <div class="list-item">
          {{ index }}
        </div>
      </template>
    </nut-list>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data = ref(new Array(100).fill(0))

onMounted(() => {
  data.value = data.value.map((_: number, index: number) => index + 1)
})

const onScrollBottom = () => {
  let arr = new Array(100).fill(0)
  const len = data.value.length
  data.value = data.value.concat(arr.map((_: number, index: number) => len + index + 1))
}
</script>

<style>
.demo-list .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  height: 150px;
  background-color: #f4a8b6;
  border-radius: 10px;
}
</style>
