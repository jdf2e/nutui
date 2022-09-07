<template>
  <div class="nut-category">
    <div class="nut-category__cateList">
      <div v-if="type == 'classify' || type == 'text'">
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
  </div>
</template>
<script lang="ts">
import { Ref, ref, toRefs, warn, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('category');

//经典分类
//商品池
//自定义

interface props {}
export default create({
  props: {
    //分类模式
    type: {
      type: String,
      default: 'classify'
    },

    //左侧导航栏
    category: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { emit, slots }) {
    const checkIndex = ref(0);
    const categoryLeft = ref(false); //是否显示slot

    const getChildList = (index: any) => {
      checkIndex.value = index;
      emit('change', index);
    };

    onMounted(() => {});

    return {
      getChildList,
      checkIndex,
      categoryLeft
    };
  }
});
</script>
