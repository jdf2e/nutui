<template>
  <view class="nut-badge">
    <view class="slot-icons"> <slot name="icons"></slot></view>
    <slot></slot>
    <sup
      v-show="!hidden && (content || isDot)"
      v-text="content"
      class="nut-badge__content"
      :class="{ 'is-dot': isDot }"
      :style="stl"
    >
    </sup>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('badge');
export default create({
  props: {
    value: {
      type: [String, Number]
    },
    max: {
      type: Number,
      default: 10000
    },
    isDot: {
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
      default:
        'linear-gradient(135deg,rgba(250, 44, 25, 1) 0%,rgba(250, 63, 25, 1) 44.59259259%,rgba(250, 89, 25, 1) 83.40740741%,rgba(250, 100, 25, 1) 100%);'
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
      if (props.isDot) return;
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

<style lang="scss">
@import 'index.scss';
</style>
