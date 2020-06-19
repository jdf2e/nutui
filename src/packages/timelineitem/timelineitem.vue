<template>
  <div class="nut-timelineitem left-border">
    <div class="timelineitem-list-box">
      <div :class="['timelineitem-list']">
        <div class="timelineitem-left">
          <div class="timelineitem-point">
            <div v-if="!isCustomPoint" :class="[pointClass, 'point-icon']" :style="pointStyle"></div>

            <div v-else class="custom-icon">
              <slot name="dot"></slot>
            </div>
          </div>

          <div class="timelineitem-line"></div>
        </div>

        <div class="timelineitem-right">
          <div class="timelineitem-title" v-if="isShowTitle">
            <div class="time">
              <slot name="title"></slot>
            </div>
          </div>

          <div class="timelineitem-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nut-timelineitem',
  props: {
    // 轴点的样式：circle 圆  hollow 空心
    pointType: {
      type: String,
      default: 'circle',
    },
    // 轴点的颜色
    pointColor: {
      type: String,
      default: '#fa2e05',
    },
  },
  data() {
    return {
      isCustomPoint: false, //是否自定义轴点
    };
  },
  computed: {
    pointClass() {
      return this.pointType + '-icon';
    },
    pointStyle() {
      return { borderColor: this.pointColor, background: this.pointType == 'circle' ? this.pointColor : 'transparent' };
    },
    isShowTitle() {
      return this.$slots.title ? true : false;
    },
  },
  mounted() {
    this.isCustomPoint = this.$slots.dot ? true : false;
  },
  methods: {},
};
</script>
