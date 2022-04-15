<template>
  <div class="nut-general-shell">
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
  </div>
</template>
<script lang="ts">
import { ref, watch, reactive, toRefs, onMounted, useSlots } from 'vue';
import { createComponent } from '../../../utils/create';
const { componentName, create } = createComponent('general-shell');
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
    const swipeDelClick = (event, item) => {
      emit('handelSwipeDel', event, props.item);
      event.stopPropagation();
    };
    return {
      delShellClick,
      editShellClick,
      itemShellClick,
      swipeDelClick
    };
  }
});
</script>
