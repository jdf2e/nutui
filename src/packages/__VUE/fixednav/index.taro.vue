<template>
  <view :class="classes" :style="position">
    <nut-overlay v-if="overlay" :visible="visible" :z-index="200" @click="updateValue(false)" />
    <slot name="list">
      <view class="nut-fixed-nav__list">
        <view
          v-for="(item, index) in navList"
          :key="item.id || index"
          class="nut-fixed-nav__list-item"
          :class="{ active: item.id == current }"
          @click="selected(item, $event)"
        >
          <img :src="item.icon" />
          <view class="span">{{ item.text }}</view>
          <view v-if="item.num" class="b">{{ item.num }}</view>
        </view>
      </view>
    </slot>
    <div class="nut-fixed-nav__btn" @click="updateValue()">
      <slot name="btn">
        <Left color="#fff" />
        <view class="text">
          {{ visible ? activeText || translate('activeText') : unActiveText || translate('unActiveText') }}
        </view>
      </slot>
    </div>
  </view>
</template>
<script lang="ts">
import { PropType, computed, ref } from 'vue';
import { Left } from '@nutui/icons-vue-taro';
import NutOverlay from '../overlay/index.taro.vue';
import { createComponent, useLocale } from '@/packages/utils';
const { create } = createComponent('fixed-nav');

const cN = 'NutFixedNav';

export default create({
  components: {
    NutOverlay,
    Left
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    navList: {
      default: () => [],
      type: Array as PropType<any[]>
    },
    activeColor: {
      default: '',
      type: String
    },
    activeText: {
      default: '',
      type: String
    },
    unActiveText: {
      default: '',
      type: String
    },
    position: {
      default: () => {
        return {
          top: 'auto',
          bottom: 'auto'
        };
      },
      type: Object
    },
    type: {
      default: 'right',
      type: String
    }
  },
  emits: ['update:visible', 'selected'],

  setup(props: any, { emit }: any) {
    const translate = useLocale(cN);
    const classes = computed(() => {
      const prefixCls = 'nut-fixed-nav';
      return {
        [prefixCls]: true,
        active: props.visible,
        [props.type]: true
      };
    });

    const current = ref(-1);

    const updateValue = (value: boolean = !props.visible) => {
      emit('update:visible', value);
    };
    const selected = (item: any, event: Event) => {
      emit('selected', {
        item,
        event
      });
      current.value = item.id;
    };

    return { classes, updateValue, selected, translate, current };
  }
});
</script>
