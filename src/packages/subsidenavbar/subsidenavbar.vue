<template>
  <div class="nut-subsidenavbar sidenavbar-item" :ikey="ikey">
    <div class="item-title" @click.stop="handleClick">
      <a href="javascript:;" class="sidenavbar-title">{{ title }}</a>
      <span class="sidenavbar-icon"><nut-icon type="down" :class="direction"></nut-icon></span>
    </div>
    <div class="sub-sidenavbar-list" :class="!direction ? 'nutFadeIn' : 'nutFadeOut'" :style="{ height: !direction ? 'auto' : 0 }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-subsidenavbar',
  props: {
    title: {
      type: String,
      default: '',
    },
    ikey: {
      type: [String, Number],
      default: '',
    },
    open: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      direction: '',
    };
  },
  mounted() {
    this.direction = this.open ? '' : 'up';
  },
  methods: {
    handleClick() {
      this.$emit('titleClick');
      this.direction = !this.direction ? 'up' : '';
    },
  },
};
</script>
