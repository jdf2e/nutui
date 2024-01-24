<template>
  <nut-popup
    v-model:visible="show"
    position="bottom"
    :pop-class="popClass"
    :overlay="overlay"
    overlay-class="nut-number-keyboard-overlay"
    :lock-scroll="lockScroll"
    :catch-move="lockScroll"
    @click-overlay="closeBoard()"
  >
    <div ref="root" class="nut-number-keyboard">
      <div v-if="title" class="nut-number-keyboard__header">
        <h3 class="nut-number-keyboard__title">{{ title }}</h3>
        <span v-if="type == 'default'" class="nut-number-keyboard__close" @click="closeBoard()">{{
          translate('done')
        }}</span>
      </div>
      <div class="nut-number-keyboard__body">
        <div class="nut-number-keyboard__keys">
          <div
            v-for="item of keysList"
            :key="'key' + item.id"
            :class="[
              'nut-key__wrapper',
              {
                'nut-key__wrapper--wider':
                  item.id == 0 && type == 'rightColumn' && Array.isArray(customKey) && customKey.length == 1
              }
            ]"
          >
            <div
              :class="[
                'nut-key',
                { 'nut-key--active': item.id == clickKeyIndex },
                { 'nut-key--lock': item.type == 'lock' },
                { 'nut-key--delete': item.type == 'delete' }
              ]"
              @touchstart="(event) => onTouchstart(item, event)"
              @touchmove="(event) => onTouchMove(event)"
              @touchend="onTouchEnd"
            >
              <template v-if="item.type == 'number' || item.type == 'custom'">{{ item.id }}</template>
              <img
                v-if="item.type == 'lock'"
                src="https://img11.360buyimg.com/imagetools/jfs/t1/146371/38/8485/738/5f606425Eca239740/14f4b4f5f20d8a68.png"
              />
              <img
                v-if="item.type == 'delete'"
                src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
              />
            </div>
          </div>
        </div>
        <div v-if="type == 'rightColumn'" class="nut-number-keyboard__sidebar">
          <div class="nut-key__wrapper">
            <div
              :class="['nut-key', { active: clickKeyIndex == 'delete' }]"
              @touchstart="(event) => onTouchstart({ id: 'delete', type: 'delete' }, event)"
              @touchmove="(event) => onTouchMove(event)"
              @touchend="onTouchEnd"
            >
              <img
                src="https://img11.360buyimg.com/imagetools/jfs/t1/129395/8/12735/2030/5f61ac37E70cab338/fb477dc11f46056c.png"
              />
            </div>
          </div>
          <div class="nut-key__wrapper nut-key__wrapper--finish" @click="closeBoard()">
            <div :class="['nut-key', 'nut-key--finish ', { activeFinsh: clickKeyIndex == 'finish' }]">
              {{ confirmText || translate('done') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nut-popup>
</template>

<script lang="ts">
import { computed, ref, watch, Ref, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import NutPopup from '../popup/index.taro.vue';
import { useLocale } from '@/packages/utils/useLocale';
import { NumberKeyboardType } from './types';
const { create } = createComponent('number-keyboard');
export interface keys {
  id: number | string;
  type: string;
}
const cN = 'NutNumberKeyboard';
export default create({
  components: {
    NutPopup
  },
  props: {
    confirmText: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<NumberKeyboardType>,
      default: 'default'
    },
    customKey: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    modelValue: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: 6
    },
    randomKeys: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    popClass: {
      type: String,
      default: ''
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  emits: ['input', 'delete', 'close', 'update:modelValue', 'update:visible'],
  setup(props, { emit }) {
    const translate = useLocale(cN);
    const clickKeyIndex: Ref<string | undefined | number> = ref(undefined);
    const show = ref(props.visible);
    const root = ref<HTMLElement>();
    function defaultKey() {
      const { customKey } = props;
      let object = {
        id: 'lock',
        type: 'lock'
      };
      let customKeys: any = Array.isArray(customKey) ? customKey : [customKey];
      if (customKeys.length === 1) {
        object = {
          id: customKeys[0],
          type: 'custom'
        };
      }
      return [...getBasicKeys(), object, { id: 0, type: 'number' }, { id: 'delete', type: 'delete' }];
    }

    function getBasicKeys() {
      const keys: keys[] = [];
      for (let i = 1; i <= 9; i++) {
        keys.push({ id: i, type: 'number' });
      }
      if (props.randomKeys) {
        return keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }

      return keys;
    }

    function genCustomKeys() {
      const keys = getBasicKeys();
      const { customKey } = props;
      let customKeys: any = Array.isArray(customKey) ? customKey : [customKey];
      if (customKeys.length > 2) {
        customKeys = [customKeys[0], customKeys[1]];
      }
      if (customKeys.length == 2 && props.title && props.type != 'rightColumn') {
        customKeys = [customKeys[0]];
      }
      if (customKeys.length === 1) {
        if (props.title && props.type != 'rightColumn') {
          keys.push({ id: customKeys[0], type: 'custom' }, { id: 0, type: 'number' }, { id: 'delete', type: 'delete' });
        } else {
          keys.push({ id: 0, type: 'number' }, { id: customKeys[0], type: 'custom' });
        }
      } else if (customKeys.length === 2) {
        keys.push(
          { id: customKeys[0], type: 'custom' },
          { id: 0, type: 'number' },
          { id: customKeys[1], type: 'custom' }
        );
      }
      return keys;
    }
    const keysList = computed(() => {
      if (props.type == 'rightColumn' || props.title != '') {
        return genCustomKeys();
      }
      return defaultKey();
    });
    watch(
      () => props.visible,
      (value) => {
        show.value = value;
      }
    );

    function onTouchstart(item: { id: string | number; type: string }, event: TouchEvent) {
      event.stopPropagation();
      clickKeyIndex.value = item.id;
      if (item.type == 'number' || item.type == 'custom') {
        emit('input', item.id);
        if (props.modelValue.length < Number(props.maxlength)) {
          emit('update:modelValue', props.modelValue + item.id);
        }
      }
      if (item.type == 'lock') {
        closeBoard();
      }
      if (item.type == 'delete') {
        emit('delete');
        emit('update:modelValue', props.modelValue.slice(0, props.modelValue.length - 1));
      }
    }
    function onTouchMove(event: TouchEvent) {
      event.stopPropagation();
    }
    function onTouchEnd() {
      clickKeyIndex.value = undefined;
    }

    function closeBoard() {
      emit('update:visible', false);
      emit('close');
    }

    return {
      clickKeyIndex,
      defaultKey,
      closeBoard,
      onTouchEnd,
      onTouchMove,
      onTouchstart,
      keysList,
      genCustomKeys,
      getBasicKeys,
      root,
      show,
      translate
    };
  }
});
</script>
