<template>
  <div :class="classes">
    <template v-if="!swipeEdition">
      <general-shell
        v-for="(item, index) of dataArray"
        :key="index"
        :item="item"
        :longPress="longPress"
        @delIcon="clickDelIcon"
        @editIcon="clickEditIcon"
        @itemClick="clickContentItem"
        @swipeDel="clickSwipeDel"
        @longCopy="clickLongCopy"
        @longSet="clickLongSet"
        @longDel="clickLongDel"
      >
        <template v-slot:contentInfo v-if="longPress">
          <slot name="iteminfos"></slot>
        </template>
        <template v-slot:contentIcons v-if="longPress">
          <slot name="itemicon"></slot>
        </template>
        <template v-slot:contentAddrs v-if="longPress">
          <slot name="itemaddr"></slot>
        </template>
        <template v-slot:longpressAll v-if="longPress">
          <slot name="longpressbtns"></slot>
        </template>
      </general-shell>
    </template>
    <template v-if="swipeEdition">
      <swipe-shell
        v-for="(item, index) of dataArray"
        :key="index"
        :item="item"
        @delIcon="clickDelIcon"
        @editIcon="clickEditIcon"
        @itemClick="clickContentItem"
        @swipeDel="clickSwipeDel"
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
    </template>
    <div class="nut-addresslist__bottom" v-if="showBottomButton" @click="addAddress">
      <nut-button block type="danger">{{ translate('addAddress') }}</nut-button>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, ref, watch, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('addresslist');
import SwipeShell from './components/SwipeShell.vue';
import GeneralShell from './components/GeneralShell.vue';
import { floatData } from '@/packages/utils/util';
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
    dataMapOptions: {
      type: Object,
      default: {}
    }
  },
  components: {
    SwipeShell,
    GeneralShell
  },
  emits: ['delIcon', 'editIcon', 'itemClick', 'longCopy', 'longSet', 'longDel', 'swipeDel', 'add'],

  setup(props, { emit }) {
    const dataArray = ref([]);
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
      if (Object.keys(props.dataMapOptions).length > 0) {
        dataArray.value = props.data.map((item) => {
          return floatData(dataInfo, item, props.dataMapOptions);
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
      emit('itemClick', event, item);
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
