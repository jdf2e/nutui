<template>
  <div class="nut-category">
    <div class="nut-category__nav" v-if="type == 'classify' || type == 'text'">
      <div class="nut-category__cateListLeft" v-for="(item, index) in category" :key="index">
        <div
          :class="[checkIndex == index ? 'nut-category__cateListItemChecked' : 'nut-category__cateListItem']"
          @click="getChildList(index)"
        >
          {{ item?.catName }}
        </div>
      </div>
    </div>

    <slot></slot>
  </div>
</template>
<script lang="ts">
import { PropType, ref } from 'vue';
import { CategoryType } from './types';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('category');

export default create({
  props: {
    type: {
      type: String as PropType<CategoryType>,
      default: 'classify'
    },
    category: {
      type: Array,
      default: () => []
    }
  },
  setup(_, { emit }) {
    const checkIndex = ref(0);
    const getChildList = (index: any) => {
      checkIndex.value = index;
      emit('change', index);
    };
    return { getChildList, checkIndex };
  }
});
</script>
