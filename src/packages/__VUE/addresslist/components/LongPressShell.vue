<template>
  <div class="nut-long-press-shell">
    <div
      class="nut-long-press-shell__contain"
      @touchstart="holddownstart"
      @touchend="holddownend"
      @touchmove="holddownmove"
    >
      <item-contents
        :item="item"
        @delIconClick="delShellClick"
        @editIconClick="editShellClick"
        @itemClick="itemShellClick"
      >
        <template v-slot:contentTop>
          <slot name="contentInfo"></slot>
        </template>
        <template v-slot:contentIcon>
          <slot name="contentIcons"></slot>
        </template>
        <template v-slot:contentAddr>
          <slot name="contentAddrs"></slot>
        </template>
      </item-contents>
      <div class="nut-long-press-shell__contain-mask" v-if="showMaskRef" @click="maskClick">
        <slot name="longpressAll">
          <div class="nut-long-press-shell__contain-mask-copy" @click="copyCLick">
            <div class="mask-contain"> 复制<br />地址 </div>
          </div>
          <div class="nut-long-press-shell__contain-mask-set" @click="setDefault">
            <div class="mask-contain"> 设置<br />默认 </div>
          </div>
          <div class="nut-long-press-shell__contain-mask-del" @click="delClick">
            <div class="mask-contain"> 删除<br />地址 </div>
          </div>
        </slot>
      </div>
    </div>
    <div class="nut-addresslist__mask-bottom" v-if="showMaskRef" @click="hideMaskClick"></div>
  </div>
</template>
<script lang="ts">
import { ref, watch, reactive, toRefs, onMounted, useSlots } from 'vue';
import { createComponent } from '../../../utils/create';
const { componentName, create } = createComponent('long-press-shell');
import ItemContents from './ItemContents.vue';

export default create({
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: [
    'holdingDown',
    'handleDel',
    'handelMask',
    'handleCopy',
    'handleSet',
    'handleDelIcon',
    'handleEditIcon',
    'handleItemContent'
  ],
  components: {
    ItemContents
  },

  setup(props: any, { emit, slots }) {
    let loop = null;
    const showMaskRef = ref(false);
    const holdingFunc = (event: Event) => {
      loop = 0;
      showMaskRef.value = true;
      emit('holdingDown', event, props.item);
    };
    //长按功能实现
    const holddownstart = (event: Event) => {
      loop = setTimeout(() => {
        holdingFunc(event);
      }, 300);
    };
    const holddownmove = (event: Event) => {
      //滑动不触发长按
      clearTimeout(loop);
    };
    const holddownend = (event: Event) => {
      //删除定时器，防止重复注册
      clearTimeout(loop);
    };
    const hideMaskClick = (event: Event) => {
      showMaskRef.value = false;
    };
    const copyCLick = (event: Event) => {
      if (loop == 0) return; //排除长按时触发点击的情况
      emit('handleCopy', event, props.item);
      event.stopPropagation();
    };
    const setDefault = (event: Event) => {
      if (loop == 0) return; //排除长按时触发点击的情况
      emit('handleSet', event, props.item);
      event.stopPropagation();
    };
    const delClick = (event: Event) => {
      if (loop == 0) return; //排除长按时触发点击的情况
      emit('handleDel', event, props.item);
      event.stopPropagation();
    };
    const maskClick = (event: Event) => {
      if (loop != 0) {
        //排除长按时触发点击的情况
        showMaskRef.value = false;
      }
      event.stopPropagation();
      event.preventDefault();
    };
    const delShellClick = (event, item) => {
      emit('handleDelIcon', event, props.item);
      event.stopPropagation();
    };
    const editShellClick = (event, item) => {
      emit('handleEditIcon', event, props.item);
      event.stopPropagation();
    };
    const itemShellClick = (event, item) => {
      emit('handleItemContent', event, props.item);
      event.stopPropagation();
    };

    return {
      holddownstart,
      holddownmove,
      holddownend,
      showMaskRef,
      delClick,
      copyCLick,
      hideMaskClick,
      setDefault,
      maskClick,
      delShellClick,
      editShellClick,
      itemShellClick
    };
  }
});
</script>
