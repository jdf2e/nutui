<template>
  <div v-if="bottom && placeholder" class="nut-tabbar__placeholder" :style="{ height: height + 'px' }">
    <view
      ref="nutTabbar"
      class="nut-tabbar"
      :class="{ 'nut-tabbar-bottom': bottom, 'nut-tabbar-safebottom': safeAreaInsetBottom }"
    >
      <slot></slot>
    </view>
  </div>
  <view
    v-else
    class="nut-tabbar"
    :class="{ 'nut-tabbar-bottom': bottom, 'nut-tabbar-safebottom': safeAreaInsetBottom }"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { onMounted, provide, reactive, toRefs, ref, watch, nextTick } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('tabbar');
import { useRect } from '@/packages/utils/useRect';
export default create({
  props: {
    visible: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '20px'
    },
    unactiveColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Boolean,
      default: false
    }
  },
  emits: ['tab-switch', 'update:visible'],
  setup(props, { emit, slots }) {
    const { bottom, placeholder } = toRefs(props);
    const height = ref();
    const mdValue = reactive({
      val: props.visible,
      children: []
    });
    const nutTabbar = ref<HTMLElement>();
    function changeIndex(index: number, active: number | string) {
      emit('update:visible', active);
      parentData.modelValue = active;
      emit('tab-switch', parentData.children[index], active);
    }
    let parentData = reactive({
      children: mdValue.children,
      size: props.size,
      modelValue: mdValue.val,
      unactiveColor: props.unactiveColor,
      activeColor: props.activeColor,
      changeIndex
    });
    provide('parent', parentData);
    watch(
      () => props.visible,
      (value) => {
        parentData.modelValue = value;
      }
    );
    onMounted(() => {
      if (bottom.value && placeholder.value) {
        nextTick(() => {
          height.value = useRect(nutTabbar).height;
        });
      }
    });

    return {
      changeIndex,
      nutTabbar,
      height
    };
  }
});
</script>
