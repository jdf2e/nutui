<template>
  <Demo class="list-demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-list :height="50" :list-data="state.count" @scroll-bottom="handleScroll">
        <template #default="{ item }">
          <div class="list-item">
            {{ item }}
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </Demo>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
const state = reactive({
  count: new Array(100).fill(0)
});

const handleScroll = () => {
  let arr = new Array(100).fill(0);
  const len = state.count.length;
  state.count = state.count.concat(arr.map((_item: number, index: number) => len + index + 1));
};

onMounted(() => {
  state.count = state.count.map((_item: number, index: number) => index + 1);
});
</script>
<style lang="scss">
.list-demo {
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
