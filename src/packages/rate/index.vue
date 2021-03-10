<template>
  <view :class="classes">
    <view
      class="nut-rate-item"
      :class="{ 'nut-rate-active': n <= state.current }"
      v-for="n in total"
      :key="n"
      @click="onClick($event, n)"
      :style="{
        marginRight: spacing + 'px'
      }"
    >
      <nut-icon
        :size="size + 'px'"
        :color="n <= state.current ? (disabled ? '#ccc' : activeColor) : '#ccc'"
        :name="n <= state.current ? checkedIcon : uncheckedIcon"
      >
      </nut-icon>
    </view>
  </view>
</template>
<script lang="ts">
import { watch, reactive, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('rate');

export default create({
  props: {
    total: {
      type: [String, Number],
      default: 5
    },
    value: {
      type: [String, Number],
      default: 0
    },
    size: {
      type: [String, Number],
      default: 25
    },
    activeColor: {
      type: String,
      default: '#FA200C'
    },
    uncheckedIcon: {
      type: String,
      default: 'star-n'
    },
    checkedIcon: {
      type: String,
      default: 'star-fill-n'
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    spacing: {
      type: [String, Number],
      default: 20
    }
  },
  emits: ['update:value', 'click'],
  setup(props, { emit }) {
    const state = reactive({
      current: props.value
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const onClick = (e: Event, idx: number) => {
      e.preventDefault();
      e.stopPropagation();
      if (props.disabled || props.readOnly) return;

      if (idx === 1 && state.current === idx) {
        state.current = 0;
      } else {
        state.current = idx;
      }
      emit('update:value', state.current);
      emit('click', state.current);
    };

    watch(
      () => props.value,
      newVal => {
        state.current = newVal;
      }
    );

    return {
      state,
      classes,
      onClick
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
