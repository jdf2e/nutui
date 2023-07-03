<template>
  <div class="nut-address-list-general" v-if="!swipeEdition">
    <component :is="renderCompontent()" @touchstart="holddownstart" @touchend="holddownend" @touchmove="holddownmove">
      <template #content-top>
        <slot name="content-info"></slot>
      </template>
      <template #content-icon>
        <slot name="content-icons"></slot>
      </template>
      <template #content-addr>
        <slot name="content-addrs"></slot>
      </template>
    </component>
    <div class="nut-address-list-general__mask" v-if="longPress && showMaskRef" @click="maskClick">
      <slot name="longpress-all">
        <div class="nut-address-list-general__mask-copy" @click="copyCLick"> 复制地址 </div>
        <div class="nut-address-list-general__mask-set" @click="setDefault"> 设置默认 </div>
        <div class="nut-address-list-general__mask-del" @click="delLongClick"> 删除地址 </div>
      </slot>
    </div>
    <div class="nut-address-list__mask-bottom" v-if="showMaskRef" @click="hideMaskClick"></div>
  </div>
  <nut-swipe v-else>
    <div class="nut-address-list-swipe">
      <component :is="renderCompontent()" @touchmove="swipemove" @touchstart="swipestart">
        <template #content-top>
          <slot name="content-info"></slot>
        </template>
        <template #content-icon>
          <slot name="content-icons"></slot>
        </template>
        <template #content-addr>
          <slot name="content-addrs"></slot>
        </template>
      </component>
    </div>
    <template #right>
      <slot name="swipe-right-btn">
        <nut-button shape="square" style="height: 100%" type="danger" @click="swipeDelClick">删除</nut-button>
      </slot>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('address-list-general');
import ItemContents from './ItemContents.taro.vue';
import Button from '../../button/index.taro.vue';
import Swipe from '../../swipe/index.taro.vue';

export default create({
  props: {
    item: {
      type: Object,
      default: {}
    },
    longPress: {
      type: Boolean,
      default: false
    },
    swipeEdition: {
      type: Boolean,
      default: false
    }
  },
  emits: ['delIcon', 'editIcon', 'clickItem', 'longDown', 'longCopy', 'longSet', 'longDel', 'swipeDel'],
  components: {
    ItemContents,
    [Button.name]: Button,
    [Swipe.name]: Swipe
  },

  setup(props, { emit }) {
    const renderCompontent = () => {
      return h(ItemContents, {
        item: props.item,
        onDelIcon(event: Event) {
          delClick(event);
        },
        onEditIcon(event: Event) {
          editClick(event);
        },
        onClickItem(event: Event) {
          clickItem(event);
        }
      });
    };
    let loop: any = null;
    const moveRef = ref(false);
    const showMaskRef = ref(false);

    const delClick = (event: Event) => {
      emit('delIcon', event, props.item);
      event.stopPropagation();
    };
    const editClick = (event: Event) => {
      emit('editIcon', event, props.item);
      event.stopPropagation();
    };
    const clickItem = (event: Event) => {
      if (moveRef.value) return;
      emit('clickItem', event, props.item);
      event.stopPropagation();
    };
    const delLongClick = (event: Event) => {
      emit('longDel', event, props.item);
      event.stopPropagation();
    };
    const holdingFunc = (event: Event) => {
      loop = 0;
      showMaskRef.value = true;
      emit('longDown', event, props.item);
    };
    // 长按功能实现
    const holddownstart = (event: Event) => {
      loop = setTimeout(() => {
        holdingFunc(event);
      }, 300);
    };
    const holddownmove = () => {
      // 滑动不触发长按
      clearTimeout(loop);
    };
    const holddownend = () => {
      // 删除定时器，防止重复注册
      clearTimeout(loop);
    };
    const hideMaskClick = () => {
      showMaskRef.value = false;
    };
    const copyCLick = (event: Event) => {
      emit('longCopy', event, props.item);
      event.stopPropagation();
    };
    const setDefault = (event: Event) => {
      emit('longSet', event, props.item);
      event.stopPropagation();
    };
    const maskClick = (event: Event) => {
      if (loop != 0) {
        // 排除长按时触发点击的情况
        showMaskRef.value = false;
      }
      event.stopPropagation();
      event.preventDefault();
    };
    const swipeDelClick = (event: Event) => {
      emit('swipeDel', event, props.item);
      event.stopPropagation();
    };
    const swipestart = () => {
      moveRef.value = false;
    };
    const swipemove = () => {
      moveRef.value = true;
    };

    return {
      renderCompontent,
      showMaskRef,
      clickItem,
      editClick,
      delClick,
      delLongClick,
      holddownstart,
      holddownmove,
      holddownend,
      copyCLick,
      hideMaskClick,
      setDefault,
      maskClick,
      swipeDelClick,
      swipestart,
      swipemove
    };
  }
});
</script>
