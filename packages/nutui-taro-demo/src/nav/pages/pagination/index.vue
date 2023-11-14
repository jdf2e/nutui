<template>
  <Demo>
    <h2>基础用法</h2>
    <nut-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
    <h2>简单模式</h2>
    <nut-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
    <h2>显示省略号</h2>
    <nut-pagination v-model="currentPage2" :total-items="125" :show-page-size="3" force-ellipses @change="pageChange" />
    <h2>自定义按钮</h2>
    <nut-pagination v-model="currentPage3" :total-items="500" :show-page-size="5" @change="pageChange">
      <template #prev-text>
        <Left size="10px" />
      </template>
      <template #next-text>
        <Right size="10px" />
      </template>
      <template #page="{ item }">
        {{ item.number == 3 ? 'hot' : item.text }}
      </template>
    </nut-pagination>
  </Demo>
</template>

<script setup lang="ts">
import { Left, Right } from '@nutui/icons-vue-taro';
import { ref } from 'vue';
const currentPage = ref(1);
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const pageChange = (value: number) => {
  console.log(value);
};
</script>
