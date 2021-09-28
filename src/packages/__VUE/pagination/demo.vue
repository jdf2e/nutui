<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-pagination
      v-model="currentPage"
      :total-items="25"
      :items-per-page="5"
    />
    <h2>简单模式</h2>
    <nut-pagination v-model="currentPage1" :page-count="12" mode="simple" />
    <h2>显示省略号</h2>
    <nut-pagination
      v-model="currentPage2"
      :total-items="125"
      :show-page-size="3"
      force-ellipses
    />
    <h2>自定义按钮</h2>
    <nut-pagination
      v-model="currentPage3"
      :total-items="500"
      :show-page-size="5"
    >
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
import { ref, reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('pagination');
export default createDemo({
  setup() {
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    });
    const pageChange = (value) => {
      console.log(value, 444);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }
});
</script>

<style lang="scss" scoped></style>
