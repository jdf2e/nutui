<template>
  <div :class="classes">
    <general-shell
      v-for="(item, index) of dataArray"
      :key="index"
      :item="item"
      :longPress="longPress"
      :swipeEdition="swipeEdition"
      @delIcon="clickDelIcon"
      @editIcon="clickEditIcon"
      @clickItem="clickContentItem"
      @swipeDel="clickSwipeDel"
      @longCopy="clickLongCopy"
      @longSet="clickLongSet"
      @longDel="clickLongDel"
    >
      <template #content-info>
        <slot name="item-infos"></slot>
      </template>
      <template #content-icons>
        <slot name="item-icon"></slot>
      </template>
      <template #content-addrs>
        <slot name="item-addr"></slot>
      </template>
      <template #longpress-all v-if="longPress">
        <slot name="longpress-btns"></slot>
      </template>
      <template #swipe-right-btn v-if="swipeEdition">
        <slot name="swipe-right"></slot>
      </template>
    </general-shell>
    <div class="nut-address-list__bottom" v-if="showBottomButton" @click="addAddress">
      <nut-button block type="danger">{{ translate('addAddress') }}</nut-button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, ref, watch, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('address-list');
import GeneralShell from './components/GeneralShell.vue';
import { floatData } from '@/packages/utils/util';
import Button from '../button/index.vue';
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
    [Button.name]: Button
  },
  emits: ['delIcon', 'editIcon', 'clickItem', 'longCopy', 'longSet', 'longDel', 'swipeDel', 'add'],

  setup(props, { emit }) {
    const dataArray = ref([]) as any;
    const dataInfo = reactive({
      id: 2,
      addressName: '姓名',
      phone: '123****4567',
      defaultAddress: false,
      fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
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
      classes,
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
