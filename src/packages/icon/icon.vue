<template>
  <i :class="['nut-icon', 'nut-icon-' + type]" v-html="icon" :style="{ height: size, width: size, color: color }"></i>
</template>
<script>
const types = ['top', 'action', 'cross', 'down', 'right', 'more', 'notice', 'plus', 'search', 'trolley', 'tick', 'minus', 'circle-cross'];

export default {
  name: 'nut-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#2e2d2d'
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      icon: null
    };
  },
  watch: {
    url(val) {
      this.icon = val;
    }
  },
  created() {
    if (this.url) {
      this.icon = this.url;
      this.type = 'self';
    } else {
      if (types.indexOf(this.type) === -1) {
        console.error('nut-icon组件type值(' + this.type + ')有误，无此icon!');
      } else {
        this.icon = require('../../assets/svg/' + this.type + '.svg');
      }
    }
  }
};
</script>
