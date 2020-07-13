<template>
  <div :style="styles" class="nut-avatar" @click="activeAvatar">
    <img class="icon" :src="bgImage" />
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nut-avatar',
  props: {
    bgImage: {
      type: String,
      default: '',
    },
    sizeNum: {
      type: [Number, String],
      default: 20,
    },
  },
  computed: {
    styles() {
      return {
        width: this.sizeNum + 'px',
        height: this.sizeNum + 'px',
      };
    },
  },
  data() {
    return {};
  },
  methods: {
    activeAvatar() {
      this.$emit('active-avatar', event);
    },
  },
};
</script>
