<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
    <h2>简单模式</h2>
    <nut-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
    <h2>显示省略号</h2>
    <nut-pagination v-model="currentPage2" :total-items="125" :show-page-size="3" force-ellipses @change="pageChange" />
    <h2>自定义按钮</h2>
    <nut-pagination v-model="currentPage3" :total-items="500" :show-page-size="5" @change="pageChange">
      <template #prev-text>
        <nut-icon name="left" size="10px" />
      </template>
      <template #next-text>
        <nut-icon name="right" size="10px" />
      </template>
      <template #page="{ item }">
        {{ item.number == 3 ? 'hot' : item.text }}
      </template>
    </nut-pagination>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    });
    const pageChange = (value: number) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
});
</script>
