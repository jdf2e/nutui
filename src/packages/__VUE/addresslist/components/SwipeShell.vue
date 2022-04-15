<template>
  <nut-swipe>
    <div class="nut-swipe-shell">
      <item-contents
        :item="item"
        @delIconClick="delShellClick"
        @editIconClick="editShellClick"
        @itemClick="itemShellClick"
        @touchmove="swipemove"
        @touchstart="swipestart"
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
    </div>
    <template #right>
      <slot name="swiperightbtn">
        <nut-button shape="square" style="height: 100%" type="danger" @click="swipeDelClick">删除</nut-button>
      </slot>
    </template>
  </nut-swipe>
</template>
<script lang="ts">
import { ref, watch, reactive, toRefs, onMounted, useSlots } from 'vue';
import { createComponent } from '../../../utils/create';
const { componentName, create } = createComponent('swipe-shell');
// import { Swipe } from '@nutui/nutui';
import ItemContents from './ItemContents.vue';

export default create({
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ['handleDelIcon', 'handleEditIcon', 'handleItemContent', 'handelSwipeDel'],
  components: {
    ItemContents
  },

  setup(props: any, { emit, slots }) {
    let loop;
    const moveRef = ref(false);
    const delShellClick = (event, item) => {
      emit('handleDelIcon', event, props.item);
      event.stopPropagation();
    };
    const editShellClick = (event, item) => {
      emit('handleEditIcon', event, props.item);
      event.stopPropagation();
    };
    const itemShellClick = (event, item) => {
      if (moveRef.value) return;
      emit('handleItemContent', event, props.item);
      event.stopPropagation();
    };
    const swipeDelClick = (event, item) => {
      emit('handelSwipeDel', event, props.item);
      event.stopPropagation();
    };

    const swipestart = () => {
      moveRef.value = false;
    };
    const swipemove = () => {
      moveRef.value = true;
    };

    return {
      delShellClick,
      editShellClick,
      itemShellClick,
      swipeDelClick,
      swipestart,
      swipemove
    };
  }
});
</script>
