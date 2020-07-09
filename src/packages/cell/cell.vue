<template>
  <div class="wrapper-cell">
    <a :class="['nut-cell', { 'nut-cell-link': isLink }]" :href="linkUrl" :style="{ 'background-color': bgColor }" :target="target" @click="jumpPage">
      <div class="nut-cell-box" @click="clickCell">
        <slot name="avatar"></slot>
        <div class="nut-cell-left">
          <span class="nut-cell-title"
            ><slot name="title">{{ title }}</slot></span
          >
          <span class="nut-cell-sub-title">
            <slot name="sub-title">
              <template>{{ subTitle.substring(0, 12) }}</template>
              <template v-if="subTitle.length > 12">...</template>
            </slot></span
          >
        </div>
        <div class="nut-cell-right">
          <span class="nut-cell-desc"
            ><slot name="desc">{{ desc }}</slot></span
          >
          <span class="nut-cell-icon">
            <slot name="icon" v-if="showIcon">
              <img width="17" height="17" src="../../assets/img/ic-arrow.png" />
            </slot>
          </span>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import Icon from '../icon/icon.vue';

export default {
  name: 'nut-cell',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    isLink: {
      type: Boolean,
      default: false,
    },
    linkUrl: {
      type: String,
      default: 'javascript:void(0)',
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
    to: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
  components: {
    'nut-icon': Icon,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    clickCell() {
      this.$emit('click-cell');
    },
    jumpPage() {
      if (!this.to) return false;
      this.$router.push(this.to);
    },
  },
};
</script>
