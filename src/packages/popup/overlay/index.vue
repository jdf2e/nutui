<template>
  <Transition name="popup-fade">
    <view
      @touchmove.stop="touchmove"
      :style="{ animationDuration: `${duration}s`, ...overlayStyle, zIndex }"
      v-show="show"
      class="popup-bg nut-mask"
      :class="overlayClass"
    ></view>
  </Transition>
</template>
<script lang="ts">
import { toRefs, CSSProperties, PropType, Transition } from "vue";
import { createComponent } from "@/utils/create";
const { componentName, create } = createComponent("popup-overlay");
const overlayProps = {
  show: {
    type: Boolean,
    default: false,
  },
  zIndex: {
    type: [Number, String],
  },
  duration: {
    type: [Number, String],
    default: 0.3,
  },
  overlayClass: {
    type: String,
    default: "",
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  overlayStyle: {
    type: Object as PropType<CSSProperties>,
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
};

export { overlayProps };

export default create({
  props: overlayProps,
  emits: [],
  setup(props) {
    const touchmove = (e) => {
      if (props.lockScroll) {
        e.preventDefault();
      }
    };
    return { touchmove };
  },
});
</script>
