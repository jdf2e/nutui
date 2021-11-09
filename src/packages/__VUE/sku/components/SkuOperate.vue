<template>
  <view class="nut-sku-operate">
    <view
      :class="[`nut-sku-operate-btn-${btn}`, 'nut-sku-operate-btn']"
      v-for="(btn, i) in btnOptions"
      :key="i"
      @click="clickBtnOperate(btn)"
      >{{ getBtnDesc(btn) }}</view
    >
  </view>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue';
import { createComponent } from '../../../utils/create';
const { componentName, create } = createComponent('sku-operate');

export default create({
  props: {
    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array,
      default: () => ['confirm']
    },

    // 立即购买文案
    buyText: {
      type: String,
      default: '立即购买'
    },
    // 加入购物车文案
    addCartText: {
      type: String,
      default: '加入购物车'
    },

    confirmText: {
      type: String,
      default: '确定'
    }
  },
  emits: ['click', 'changeSku', 'changeBuyCount', 'clickBtnOperate'],

  setup(props: any, { emit }) {
    const skuIds = ref('');

    onMounted(() => {});

    const getBtnDesc = (type: string) => {
      let mapD: { [props: string]: string } = {
        confirm: props.confirmText,
        cart: props.addCartText,
        buy: props.buyText
      };

      return mapD[type];
    };

    const clickBtnOperate = (btn: string) => {
      emit('clickBtnOperate', btn);
    };

    return {
      getBtnDesc,
      clickBtnOperate,
      skuIds
    };
  }
});
</script>
