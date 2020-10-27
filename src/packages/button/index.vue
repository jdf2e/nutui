<template>
  <view class="nut-button" :disabled="disabled" @click="clickHandler">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { PropType } from "vue";
import { createComponent } from "@/utils/create";
export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger";
export type ButtonSize = "large" | "normal" | "small" | "mini";
export default createComponent("button")({
  props: {
    text: String,
    color: String,
    disabled: Boolean,
    type: {
      type: String as PropType<ButtonType>,
      default: "default"
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "normal"
    }
  },
  components: {},
  emits: ["click"],
  setup(props, { emit, slots }) {
    console.log(props);
  }
});
</script>

<style lang="scss">
@import "index.scss";
</style>
