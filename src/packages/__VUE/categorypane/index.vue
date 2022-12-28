<template>
  <div class="nut-category-pane">
    <div v-if="type == 'classify'" class="nut-category-pane__cateListRight">
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="nut-category-pane__childTitle">{{ item?.catName }}</div>

        <div v-if="item?.catType == 1" class="nut-category-pane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            class="nut-category-pane__childItem"
            :key="key"
            @click="onChange(sku)"
          >
            <img class="nut-category-pane__childImg" :src="sku.backImg" />
            <div class="nut-category-pane__skuImg">{{ sku?.catName }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- text -->
    <div v-if="type == 'text'" class="nut-category-pane__cateListRight">
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="nut-category-pane__childTitle">{{ item?.catName }}</div>

        <div v-if="item?.catType == 1" class="nut-category-pane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            class="nut-category-pane__childItem"
            :key="key"
            @click="onChange(sku)"
          >
            <div class="nut-category-pane__skuName">{{ sku?.catName }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义 -->

    <div v-if="type == 'custom'" class="nut-category-pane__selfItemList">
      <div v-for="(sku, key) in customCategory" class="nut-category-pane__skuName" :key="key" @click="onChange(sku)">
        {{ sku?.catName }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('category-pane');

export type ChildType = {
  catName?: string;
  catType?: number;
  [key: string]: any;
};
export type CustomType = {
  catName?: string;
  [key: string]: any;
};

export default /* @__PURE__ */ create({
  props: {
    //分类模式
    type: {
      type: String,
      default: 'classify'
    },

    //右侧导航数据
    categoryChild: {
      type: Array as PropType<ChildType>,
      default: () => []
    },

    //模式传入自定义数据
    customCategory: {
      type: Array as PropType<CustomType>,
      default: () => []
    }
  },

  setup(props, { emit }) {
    const onChange = (sku: string) => {
      emit('onChange', sku);
    };

    return {
      onChange
    };
  }
});
</script>
