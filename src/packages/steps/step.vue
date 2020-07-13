<template>
  <div class="nut-step clearfix" :class="`${currentStatus ? currentStatus : ''}`">
    <div v-if="timeForward && time" class="nut-step-time-forward">{{ time }}</div>
    <div class="nut-step-node">
      <div class="nut-step-icon">
        <span v-if="type === 'mini'" class="default-icon"></span>
        <slot v-else name="status-icon">
          <nut-icon v-if="currentStatus === 'nut-step-status-finish'" type="self" :url="require('../../assets/svg/finish.svg')"></nut-icon>
          <span v-else class="default-icon"></span>
        </slot>
      </div>
      <div class="nut-step-line"></div>
    </div>
    <div class="nut-step-main">
      <div v-if="title" class="nut-step-title">{{ title }}</div>
      <div v-if="content" class="nut-step-content">{{ content }}</div>
      <div v-if="!timeForward && time" class="nut-step-time">{{ time }}</div>
    </div>
  </div>
</template>
<script>
import locale from '../../mixins/locale';
export default {
  name: 'nut-step',
  mixins: [locale],
  props: {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  data() {
    return {
      currentStatus: '',
      timeForward: false,
      type: '',
    };
  },
  methods: {},
  mounted() {},
};
</script>
