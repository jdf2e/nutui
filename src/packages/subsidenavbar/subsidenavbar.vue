<template>
  <div class="nut-subsidenavbar sidenavbar-item" :ikey="ikey">
    <div class="item-title" @click.stop="handleClick">
      <span v-if="$slots.icon" class="subsidenavbar-icon"><slot name="icon"></slot></span>
      <a href="javascript:;" class="sidenavbar-title">
        <span class="sidenavbar-title-title">{{ title }}</span>
        <slot name="desc"></slot>
      </a>
      <span class="sidenavbar-icon">
        <span v-if="$slots.oper"><slot name="oper"></slot></span>
        <nut-icon v-if="!$slots.oper" type="self" :url="require('../../assets/svg/arrow-to-right.svg')" size="16px"></nut-icon>
      </span>
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
      this.$emit('title-click');
      this.direction = !this.direction ? 'up' : '';
    },
  },
};
</script>
