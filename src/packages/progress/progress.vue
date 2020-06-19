<template>
  <div class="nut-progress">
    <div
      class="nut-progress-outer"
      :class="[showText && !textInside ? 'nut-progress-outer-part' : '', 'nut-progress-' + size]"
      :style="{ height: height }"
    >
      <div :class="['nut-progress-inner', status == 'active' ? 'nut-active' : '']" :style="bgStyle">
        <div class="nut-progress-text" :style="{ lineHeight: height }" v-if="showText && textInside">
          <span :style="textStyle">{{ percentage }}%</span></div
        >
      </div>
    </div>
    <div class="nut-progress-text" :style="{ lineHeight: height }" v-if="showText && !textInside">
      <slot>
        <template v-if="status == 'text' || status == 'active'">
          <span :style="textStyle">{{ percentage }}%</span>
        </template>
        <template v-else-if="status == 'success' || 'wrong'">
          <i :class="statusIcon"></i>
        </template>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-progress',
  props: {
    percentage: {
      type: [Number, String],
      default: 0,
      required: true,
    },
    size: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'text',
    },
    strokeWidth: {
      type: [Number, String],
      default: '',
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    strokeColor: {
      type: String,
      default: '',
    },
    textColor: {
      tyep: String,
      default: '',
    },
  },
  data() {
    return {
      height: this.strokeWidth + 'px',
    };
  },
  computed: {
    bgStyle() {
      return {
        width: this.percentage + '%',
        backgroundColor: this.strokeColor || '',
      };
    },
    textStyle() {
      return {
        color: this.textColor || '',
      };
    },
    statusIcon() {
      return this.status === 'success' ? 'nut-icon-success' : this.status === 'wrong' ? 'nut-icon-fail' : '';
    },
  },
};
</script>
