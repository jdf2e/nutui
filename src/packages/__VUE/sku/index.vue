<template>
  <nut-popup
    v-model:visible="showPopup"
    position="bottom"
    closeable
    round
    style="height: 75%"
    :teleportDisable="teleportDisable"
    :teleport="teleport"
    @click-close-icon="closePopup('icon')"
    @click-overlay="closePopup('overlay')"
    @close="closePopup('close')"
  >
    <view class="nut-sku">
      <slot name="sku-header"></slot>
      <sku-header v-if="!getSlots('sku-header')" :goods="goods">
        <template v-if="getSlots('sku-header-price')" #sku-header-price>
          <slot name="sku-header-price"></slot>
        </template>

        <template v-if="getSlots('sku-header-extra')" #sku-header-extra>
          <slot name="sku-header-extra"></slot>
        </template>
      </sku-header>

      <view class="nut-sku-content">
        <slot name="sku-select-top"></slot>

        <slot name="sku-select"></slot>
        <SkuSelect v-if="!getSlots('sku-select')" :sku="sku" @select-sku="selectSku"></SkuSelect>

        <slot name="sku-stepper"></slot>
        <sku-stepper
          v-if="!getSlots('sku-stepper')"
          :goods="goods"
          :stepperTitle="stepperTitle || translate('buyNumber')"
          :stepperMax="stepperMax"
          :stepperMin="stepperMin"
          :stepperExtraText="stepperExtraText"
          @add="add"
          @reduce="reduce"
          @change-stepper="changeStepper"
          @over-limit="stepperOverLimit"
        ></sku-stepper>

        <slot name="sku-stepper-bottom"></slot>
      </view>

      <sku-operate
        :btnOptions="btnOptions"
        :btnExtraText="btnExtraText"
        :buyText="buyText || translate('buyNow')"
        :addCartText="addCartText || translate('addToCart')"
        :confirmText="confirmText || translate('confirm')"
        @click-btn-operate="clickBtnOperate"
      >
        <template v-if="getSlots('sku-operate')" #operate-btn>
          <slot name="sku-operate"></slot>
        </template>
      </sku-operate>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { ref, watch, onMounted, PropType } from 'vue';
import SkuHeader from './components/SkuHeader.vue';
import SkuSelect from './components/SkuSelect.vue';
import SkuStepper from './components/SkuStepper.vue';
import SkuOperate from './components/SkuOperate.vue';
import { createComponent } from '@/packages/utils/create';
import { popupProps } from '../popup/props';
import Popup from '../popup/index.vue';
const { create, translate } = createComponent('sku');

export default create({
  props: {
    ...popupProps,

    sku: {
      type: Array,
      default: []
    },

    goods: {
      type: Object,
      default: {}
    },

    // stepper 最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },

    // stepper 最小值
    stepperMin: {
      type: [Number, String],
      default: 1
    },

    // 底部按钮配置  confirm cart  buy
    btnOptions: {
      type: Array as PropType<string[]>,
      default: () => ['confirm']
    },

    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: ''
    },

    // stepper 前面文案
    stepperExtraText: {
      type: [Function, Boolean],
      default: false
    },

    btnExtraText: {
      type: String,
      default: ''
    },

    // 立即购买文案
    buyText: {
      type: String,
      default: ''
    },

    // 加入购物车文案
    addCartText: {
      type: String,
      default: ''
    },

    // 确定文案
    confirmText: {
      type: String,
      default: ''
    }
  },
  emits: [
    'update:visible',
    'select-sku',
    'change-stepper',
    'click-btn-operate',
    'click-close-icon',
    'click-overlay',
    'close',
    'reduce',
    'add',
    'over-limit'
  ],

  components: {
    SkuHeader,
    SkuSelect,
    SkuStepper,
    SkuOperate,
    [Popup.name]: Popup
  },

  setup(props: any, { emit, slots }) {
    const showPopup = ref(props.visible);

    const goodsCount = ref(props.stepperMin);

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value;
      }
    );

    watch(
      () => showPopup.value,
      (value) => {
        if (value == false) {
          close();
        }
      }
    );

    onMounted(() => {
      // console.log('更新参数');
    });

    const getSlots = (name: string) => slots[name];

    // 商品规格 sku 选择
    const selectSku = (skus: any) => {
      emit('select-sku', skus);
    };

    // 数量计步器变化
    const changeStepper = (value: number) => {
      goodsCount.value = value;

      emit('change-stepper', value);
    };

    // 修改购买数量 add 加  reduce 减
    const add = (value: number) => {
      emit('add', value);
    };

    const reduce = (value: number) => {
      emit('reduce', value);
    };

    // 触发极限值
    const stepperOverLimit = (count: any) => {
      emit('over-limit', count);
    };

    // 点击 button 操作
    const clickBtnOperate = (btn: string) => {
      emit('click-btn-operate', {
        type: btn,
        value: goodsCount.value
      });
    };

    // 关闭
    const closePopup = (type: string) => {
      if (type == 'icon') {
        emit('click-close-icon');
      }

      if (type == 'overlay') {
        emit('click-overlay');
      }

      if (type == 'close') {
        emit('close');
      }

      showPopup.value = false;
    };

    const close = () => {
      emit('update:visible', false);
    };

    return {
      showPopup,
      closePopup,
      selectSku,
      changeStepper,
      stepperOverLimit,
      clickBtnOperate,
      add,
      reduce,
      getSlots,
      translate
    };
  }
});
</script>
