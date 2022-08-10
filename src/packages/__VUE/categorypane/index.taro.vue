<template>
  <div class="nut-categorypane">
    <div v-if="type == 'classify'" class="nut-categorypane__cateListRight">
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="nut-categorypane__childTitle">{{ item?.catName }}</div>

        <div v-if="item.catType == 1" class="nut-categorypane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            class="nut-categorypane__childItem"
            :key="key"
            @click="onChange(sku)"
          >
            <img class="nut-categorypane__childImg" :src="sku.backImg" />
            <div class="nut-categorypane__skuImg">{{ sku?.catName }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- text -->
    <div v-if="type == 'text'" class="nut-categorypane__cateListRight">
      <div v-for="(item, index) in categoryChild" :key="index">
        <div class="nut-categorypane__childTitle">{{ item?.catName }}</div>

        <div v-if="item.catType == 1" class="nut-categorypane__childItemList">
          <div
            v-for="(sku, key) in item.childCateList"
            class="nut-categorypane__childItem"
            :key="key"
            @click="onChange(sku)"
          >
            <div class="nut-categorypane__skuName">{{ sku?.catName }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 自定义 -->

    <div v-if="type == 'custom'" class="nut-categorypane__selfItemList">
      <div v-for="(sku, key) in customCategory" class="nut-categorypane__skuName" :key="key" @click="onChange()">
        {{ sku?.catName }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, ref, toRefs, warn, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('categorypane');

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

    //右侧导航数据
    categoryChild: {
      type: Array,
      default: () => []
    },

    //模式传入自定义数据
    customCategory: {
      type: Array,
      default: () => []
    }
  },

  setup(props, { emit }) {
    const onChange = (sku: any) => {
      emit('onChange', sku);
    };

    return {
      onChange
    };
  }
});
</script>
