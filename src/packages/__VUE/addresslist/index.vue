<template>
  <div class="nut-addresslist">
    <general-shell
      v-if="!longPressEdition && !swipeEdition"
      v-for="(item, index) of dataArray"
      :key="'general' + index"
      :item="item"
      @handleDelIcon="clickDelIcon"
      @handleEditIcon="clickEditIcon"
      @handleItemContent="clickContentItem"
      @handelSwipeDel="clickSwipeDel"
    >
    </general-shell>
    <long-press-shell
      v-if="longPressEdition && !swipeEdition"
      v-for="(item, index) of dataArray"
      :key="'longpress' + index"
      :item="item"
      @handleDelIcon="clickDelIcon"
      @handleEditIcon="clickEditIcon"
      @handleItemContent="clickContentItem"
      @handleCopy="clickLongCopy"
      @handleSet="clickLongSet"
      @handleDel="clickLongDel"
    >
      <template v-slot:contentInfo>
        <slot name="iteminfos"></slot>
      </template>
      <template v-slot:contentIcons>
        <slot name="itemicon"></slot>
      </template>
      <template v-slot:contentAddrs>
        <slot name="itemaddr"></slot>
      </template>
      <template v-slot:longpressAll>
        <slot name="longpressbtns"></slot>
      </template>
    </long-press-shell>
    <swipe-shell
      v-if="!longPressEdition && swipeEdition"
      v-for="(item, index) of dataArray"
      :key="'swipe' + index"
      :item="item"
      @handleDelIcon="clickDelIcon"
      @handleEditIcon="clickEditIcon"
      @handleItemContent="clickContentItem"
      @handelSwipeDel="clickSwipeDel"
    >
      <template v-slot:contentInfo>
        <slot name="iteminfos"></slot>
      </template>
      <template v-slot:contentIcons>
        <slot name="itemicon"></slot>
      </template>
      <template v-slot:contentAddrs>
        <slot name="itemaddr"></slot>
      </template>
      <template v-slot:swiperightbtn>
        <slot name="swiperight"></slot>
      </template>
    </swipe-shell>
    <div class="nut-addresslist__bottom" v-if="showBottomButton" @click="addAddress">
      <nut-button block type="danger">{{ translate('addAddress') }}</nut-button>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, reactive, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('addresslist');
import LongPressShell from './components/LongPressShell.vue';
import SwipeShell from './components/SwipeShell.vue';
import GeneralShell from './components/GeneralShell.vue';
import { floatData } from '@/packages/utils/util';
export default create({
  props: {
    data: {
      type: Array,
      default: []
    },
    longPressEdition: {
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
    dataMapOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    LongPressShell,
    SwipeShell,
    GeneralShell
  },
  emits: [
    'handelDelIcon',
    'handelEditIcon',
    'handelItem',
    'longPressCopyClick',
    'longPressSetClick',
    'longPressDelClick',
    'swipeDelClick',
    'addAddressClick'
  ],

  setup(props, { emit }) {
    const dataArray = ref([]);
    const dataInfo = reactive({
      id: 2,
      addressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
    });
    //磨平参数差异
    const trowelData = () => {
      // console.log('props.data', props.data);
      if (Object.keys(props.dataMapOptions).length > 0) {
        dataArray.value = props.data.map((item, index) => {
          return floatData(dataInfo, item, props.dataMapOptions);
        });
      }
    };

    // 监听props.data的变更重新渲染列表
    watch(
      () => props.data,
      () => trowelData(),
      { deep: true }
    );

    const clickDelIcon = (event, item) => {
      emit('handelDelIcon', event, item);
      event.stopPropagation();
    };
    const clickEditIcon = (event, item) => {
      emit('handelEditIcon', event, item);
      event.stopPropagation();
    };
    const clickContentItem = (event, item) => {
      emit('handelItem', event, item);
      event.stopPropagation();
    };
    const clickLongCopy = (event, item) => {
      emit('longPressCopyClick', event, item);
      event.stopPropagation();
    };
    const clickLongSet = (event, item) => {
      emit('longPressSetClick', event, item);
      event.stopPropagation();
    };
    const clickLongDel = (event, item) => {
      emit('longPressDelClick', event, item);
      event.stopPropagation();
    };
    const clickSwipeDel = (event, item) => {
      emit('swipeDelClick', event, item);
      event.stopPropagation();
    };
    const addAddress = (event) => {
      emit('addAddressClick', event);
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
