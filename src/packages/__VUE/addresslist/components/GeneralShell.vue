<template>
  <div class="nut-addresslist-general" v-if="!swipeEdition">
    <component :is="renderCompontent()" @touchstart="holddownstart" @touchend="holddownend" @touchmove="holddownmove">
      <template v-slot:contentTop>
        <slot name="contentInfo"></slot>
      </template>
      <template v-slot:contentIcon>
        <slot name="contentIcons"></slot>
      </template>
      <template v-slot:contentAddr>
        <slot name="contentAddrs"></slot>
      </template>
    </component>
    <div class="nut-addresslist-general__mask" v-if="longPress && showMaskRef" @click="maskClick">
      <slot name="longpressAll">
        <div class="nut-addresslist-general__mask-copy" @click="copyCLick">
          <div class="nut-addresslist-mask-contain"> 复制<br />地址 </div>
        </div>
        <div class="nut-addresslist-general__mask-set" @click="setDefault">
          <div class="nut-addresslist-mask-contain"> 设置<br />默认 </div>
        </div>
        <div class="nut-addresslist-general__mask-del" @click="delLongClick">
          <div class="nut-addresslist-mask-contain"> 删除<br />地址 </div>
        </div>
      </slot>
    </div>
    <div class="nut-addresslist__mask-bottom" v-if="showMaskRef" @click="hideMaskClick"></div>
  </div>
  <nut-swipe v-else>
    <div class="nut-addresslist-swipe">
      <component :is="renderCompontent()" @touchmove="swipemove" @touchstart="swipestart">
        <template v-slot:contentTop>
          <slot name="contentInfo"></slot>
        </template>
        <template v-slot:contentIcon>
          <slot name="contentIcons"></slot>
        </template>
        <template v-slot:contentAddr>
          <slot name="contentAddrs"></slot>
        </template>
      </component>
    </div>
    <template #right>
      <slot name="swiperightbtn">
        <nut-button shape="square" style="height: 100%" type="danger" @click="swipeDelClick">删除</nut-button>
      </slot>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('addresslist-general');
import ItemContents from './ItemContents.vue';

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
  emits: ['delIcon', 'editIcon', 'itemClick', 'longDown', 'longCopy', 'longSet', 'longDel', 'swipeDel'],
  components: {
    ItemContents
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
        onItemClick(event: Event) {
          itemClick(event);
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
    const itemClick = (event: Event) => {
      if (moveRef.value) return;
      emit('itemClick', event, props.item);
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
      itemClick,
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
