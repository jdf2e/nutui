<template>
  <div class="nut-sidenavbaritem" @click.stop="handleClick" :ikey="ikey">
    <a href="javascript:;" class="item-title">
      {{ title }}
    </a>
  </div>
</template>
<script>
export default {
  name: 'nut-sidenavbaritem',
  props: {
    title: {
      type: String,
      default: '',
    },
    ikey: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>
