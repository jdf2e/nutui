<template>
  <view class="nut-badge">
    <view class="slot-icons" v-show="!hidden && !dot" :style="stl">
      <slot name="icons"></slot>
    </view>
    <slot></slot>
    <view
      v-show="!hidden && (content || dot)"
      v-text="content"
      class="nut-badge__content sup"
      :class="{ 'is-dot': dot }"
      :style="stl"
    >
    </view>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('badge');
export default create({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 10000
    },
    dot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '0'
    },
    right: {
      type: String,
      default: '0'
    },
    zIndex: {
      type: Number,
      default: 9
    },
    color: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const state = reactive({});

    const stl = computed(() => {
      return {
        top: `${props.top}px`,
        right: `${props.right}px`,
        zIndex: props.zIndex,
        background: props.color
      };
    });

    const content = computed(() => {
      if (props.dot) return;
      const value = props.value;
      const max = props.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    });

    return {
      state,
      stl,
      content
    };
  }
});
</script>
