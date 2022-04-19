<template>
  <view class="nut-sku-select">
    <view class="nut-sku-select-item" :key="item.id" v-for="(item, index) in skuInfo">
      <view class="nut-sku-select-item-title">{{ item.name }}</view>
      <view class="nut-sku-select-item-skus">
        <view
          class="nut-sku-select-item-skus-sku"
          @click="changeSaleChild(itemAttr, itemAttrIndex, item, index)"
          :class="[{ active: !itemAttr.disable && itemAttr.active }, { disable: itemAttr.disable }]"
          :key="itemAttr.name"
          v-for="(itemAttr, itemAttrIndex) in item.list"
        >
          {{ itemAttr.name }}
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('sku-select');

export default create({
  props: {
    sku: {
      type: Array,
      default: () => []
    }
  },
  emits: ['selectSku'],

  setup(props: any, { emit }) {
    const skuInfo = ref([]);

    watch(
      () => props.sku,
      (value) => {
        skuInfo.value = [].slice.call(value);
      },
      { deep: true }
    );

    onMounted(() => {
      if (props.sku.length > 0) {
        skuInfo.value = [].slice.call(props.sku);
      }
    });

    // 切换商品 Sku
    const changeSaleChild = (attrItem: any, index: any, parentItem: any, parentIndex: any) => {
      if (attrItem.checkFlag || attrItem.disable) {
        return;
      }

      emit('selectSku', {
        sku: attrItem,
        skuIndex: index,
        parentSku: parentItem,
        parentIndex: parentIndex
      });
    };

    return {
      skuInfo,
      changeSaleChild
    };
  }
});
</script>
