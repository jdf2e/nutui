<template>
  <nut-swipe>
    <div class="nut-addresslist-swipe">
      <item-contents
        :item="item"
        @delIcon="delClick"
        @editIcon="editClick"
        @itemClick="itemClick"
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
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('addresslist-swipe');
import ItemContents from './ItemContents.vue';

export default create({
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ['delIcon', 'editIcon', 'itemClick', 'swipeDel'],
  components: {
    ItemContents
  },

  setup(props, { emit }) {
    const moveRef = ref(false);
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
      delClick,
      editClick,
      itemClick,
      swipeDelClick,
      swipestart,
      swipemove
    };
  }
});
</script>
