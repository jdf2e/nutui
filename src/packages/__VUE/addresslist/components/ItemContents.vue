<template>
  <div class="nut-item-contents__contain" @click="contentsClick">
    <div class="nut-item-contents__info">
      <div class="nut-item-contents__info-contact">
        <slot name="contentTop">
          <div class="nut-item-contents__info-contact-name">{{ item.addressName }}</div>
          <div class="nut-item-contents__info-contact-tel">{{ item.phone }}</div>
          <div class="nut-item-contents__info-contact-default" v-if="item.defaultAddress">{{
            translate('default')
          }}</div>
        </slot>
      </div>
      <div class="nut-item-contents__info-handle">
        <slot name="contentIcon">
          <nut-icon name="del" class="nut-item-contents__info-handle-del" @click="delClick"></nut-icon>
          <nut-icon name="edit" class="nut-item-contents__info-handle-edit" @click="editClick"></nut-icon>
        </slot>
      </div>
    </div>
    <div class="nut-item-contents__addr">
      <slot name="contentAddr">
        {{ item.fullAddress }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, reactive, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('item-contents');
const { translate } = createComponent('addresslist');

export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: {}
    }
  },
  components: {},
  emits: ['delIconClick', 'editIconClick', 'itemClick'],

  setup(props, { emit }) {
    const delClick = (event: Event) => {
      emit('delIconClick', event, props.item);
      // console.log(123);
      event.stopPropagation();
    };
    const editClick = (event: Event) => {
      emit('editIconClick', event, props.item);
      event.stopPropagation();
    };
    const contentsClick = (event: event) => {
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

<style lang="scss">
/* @import './index.scss'; */
</style>
