<template>
  <div class="nut-category">
    <div class="nut-category__nav" v-if="type === 'classify' || type === 'text'">
      <div class="nut-category__cateListLeft" v-for="(item, index) in category" :key="item?.[id] || index">
        <div
          :class="[checkIndex == index ? 'nut-category__cateListItemChecked' : 'nut-category__cateListItem']"
          @click="getChildList(index, item)"
        >
          {{ item?.[name] }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { PropType, ref } from 'vue';
import { CategoryType, CategoryNavItem, CategoryOptionKey } from './types';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('category');

export default create({
  props: {
    type: {
      type: String as PropType<CategoryType>,
      default: 'classify'
    },
    category: {
      type: Array as PropType<Array<CategoryNavItem>>,
      default: () => []
    },
    optionKey: {
      type: Object as PropType<CategoryOptionKey>,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    const checkIndex = ref(0);
    const id = props.optionKey.catId || 'catId';
    const name = props.optionKey.catName || 'catName';
    const getChildList = (index: number, item: any) => {
      checkIndex.value = index;
      emit('change', index, item);
    };
    return { getChildList, checkIndex, id, name };
  }
});
</script>
