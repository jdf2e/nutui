<template>
  <div class="nut-addresslist-item" @click="contentsClick">
    <div class="nut-addresslist-item__info">
      <div class="nut-addresslist-item__info-contact">
        <slot name="contentTop">
          <div class="nut-addresslist-item__info-contact-name">{{ item.addressName }}</div>
          <div class="nut-addresslist-item__info-contact-tel">{{ item.phone }}</div>
          <div class="nut-addresslist-item__info-contact-default" v-if="item.defaultAddress">{{
            translate('default')
          }}</div>
        </slot>
      </div>
      <div class="nut-addresslist-item__info-handle">
        <slot name="contentIcon">
          <nut-icon name="del" class="nut-addresslist-item__info-handle-del" @click="delClick"></nut-icon>
          <nut-icon name="edit" class="nut-addresslist-item__info-handle-edit" @click="editClick"></nut-icon>
        </slot>
      </div>
    </div>
    <div class="nut-addresslist-item__addr">
      <slot name="contentAddr">
        {{ item.fullAddress }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('addresslist-item');
const { translate } = createComponent('addresslist');

export default create({
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ['delIcon', 'editIcon', 'itemClick'],

  setup(props, { emit }) {
    const delClick = (event: Event) => {
      emit('delIcon', event, props.item);
      event.stopPropagation();
    };
    const editClick = (event: Event) => {
      emit('editIcon', event, props.item);
      event.stopPropagation();
    };
    const contentsClick = (event: Event) => {
      emit('itemClick', event, props.item);
      event.stopPropagation();
    };

    return {
      delClick,
      editClick,
      contentsClick,
      translate
    };
  }
});
</script>
