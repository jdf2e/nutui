<template>
  <nut-tabs v-model="value">
    <template #titles>
      <div v-for="item in list" :key="item.paneKey" class="custom-tab-item" @click="value = item.paneKey">
        <div
          class="custom-title"
          :class="{
            active: value === item.paneKey
          }"
        >
          {{ item.title }}
        </div>
      </div>
    </template>
    <nut-tab-pane v-for="item in list" :key="item.paneKey" :pane-key="item.paneKey"> {{ item.title }} </nut-tab-pane>
  </nut-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('c1')
const list = ref([
  {
    title: 'Tab 1',
    paneKey: 'c1'
  },
  {
    title: 'Tab 2',
    paneKey: 'c2'
  },
  {
    title: 'Tab 3',
    paneKey: 'c3'
  }
])
</script>
<style>
.custom-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.custom-title {
  color: black;
  cursor: pointer;
}
.custom-title.active {
  color: red;
}
</style>
