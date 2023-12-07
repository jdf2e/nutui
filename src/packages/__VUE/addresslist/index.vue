<template>
  <div class="nut-address-list">
    <general-shell
      v-for="(item, index) of dataArray"
      :key="index"
      :item="item"
      :long-press="longPress"
      :swipe-edition="swipeEdition"
      @del-icon="clickDelIcon"
      @edit-icon="clickEditIcon"
      @click-item="clickContentItem"
      @swipe-del="clickSwipeDel"
      @long-copy="clickLongCopy"
      @long-set="clickLongSet"
      @long-del="clickLongDel"
    >
      <template #content-info>
        <slot name="item-infos" :item="item"></slot>
      </template>
      <template #content-icons>
        <slot name="item-icon" :item="item"></slot>
      </template>
      <template #content-addrs>
        <slot name="item-addr" :item="item"></slot>
      </template>
      <template v-if="longPress" #longpress-all>
        <slot name="longpress-btns" :item="item"></slot>
      </template>
      <template v-if="swipeEdition" #swipe-right-btn>
        <slot name="swipe-right" :item="item"></slot>
      </template>
    </general-shell>
    <div v-if="showBottomButton" class="nut-address-list__bottom" @click="addAddress">
      <nut-button block type="danger">{{ translate('addAddress') }}</nut-button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('address-list');
import GeneralShell from './components/GeneralShell.vue';
import { floatData } from '@/packages/utils/util';
import NutButton from '../button';
import { useLocale } from '@/packages/utils/useLocale';

const cN = 'NutAddressList';
export default create({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPress: {
      type: Boolean,
      default: false
    },
    swipeEdition: {
      type: Boolean,
      default: false
    },
    showBottomButton: {
      type: Boolean,
      default: true
    },
    dataOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    GeneralShell,
    NutButton
  },
  emits: ['delIcon', 'editIcon', 'clickItem', 'longCopy', 'longSet', 'longDel', 'swipeDel', 'add'],

  setup(props, { emit }) {
    const translate = useLocale(cN);
    const dataArray = ref([]) as any;
    const dataInfo = reactive({
      id: 2,
      addressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
    });
    //磨平参数差异
    const trowelData = () => {
      if (Object.keys(props.dataOptions).length > 0) {
        dataArray.value = props.data.map((item) => {
          return floatData(dataInfo, item, props.dataOptions);
        });
      }
    };

    watch(
      () => props.data,
      () => trowelData(),
      { deep: true }
    );

    const clickDelIcon = (event: Event, item: unknown) => {
      emit('delIcon', event, item);
      event.stopPropagation();
    };
    const clickEditIcon = (event: Event, item: unknown) => {
      emit('editIcon', event, item);
      event.stopPropagation();
    };
    const clickContentItem = (event: Event, item: unknown) => {
      emit('clickItem', event, item);
      event.stopPropagation();
    };
    const clickLongCopy = (event: Event, item: unknown) => {
      emit('longCopy', event, item);
      event.stopPropagation();
    };
    const clickLongSet = (event: Event, item: unknown) => {
      emit('longSet', event, item);
      event.stopPropagation();
    };
    const clickLongDel = (event: Event, item: unknown) => {
      emit('longDel', event, item);
      event.stopPropagation();
    };
    const clickSwipeDel = (event: Event, item: unknown) => {
      emit('swipeDel', event, item);
      event.stopPropagation();
    };
    const addAddress = (event: Event) => {
      emit('add', event);
      event.stopPropagation();
    };
    onMounted(() => {
      trowelData();
    });
    return {
      clickDelIcon,
      clickEditIcon,
      clickContentItem,
      clickLongCopy,
      clickLongSet,
      clickLongDel,
      clickSwipeDel,
      addAddress,
      dataArray,
      translate
    };
  }
});
</script>
