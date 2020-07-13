<template>
  <div class="nut-tabbar" :class="{ bottom: bottom }">
    <a
      class="tabbar-nav"
      v-for="(value, index) in tabList"
      :class="[{ curr: index == currIndex }]"
      :key="value.tabTitle"
      v-on:click="switchTabs(value, index)"
    >
      <nut-badge :isDot="value.isDot" :value="value.num" :max="99" top="5px" right="0px" class="item">
        <span class="icon-box">
          <template v-if="value.icon">
            <div class="icon" :style="{ backgroundImage: `url(${index == currIndex ? value.activeIcon : value.icon})` }"></div>
          </template>
          <span :class="['tabbar-nav-word', { 'big-word': !value.icon }]">{{ value.tabTitle }}</span>
        </span>
      </nut-badge>
    </a>
  </div>
</template>
<script>
import Badge from '../badge/badge.vue';
export default {
  name: 'nut-tabbar',
  components: {
    'nut-badge': Badge,
  },
  props: {
    tabbarList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    replace: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currIndex: null,
      tabList: this.tabbarList,
    };
  },
  mounted() {
    this.initBar();
  },
  watch: {
    tabbarList: {
      handler(value) {
        this.tabList = value;
        this.initBar();
      },
      deep: true,
    },
  },
  methods: {
    initBar() {
      this.tabList.forEach((item, index) => {
        if (item.curr) {
          this.currIndex = index;
        }
      });
    },
    switchTabs: function (value, index) {
      this.currIndex = index;
      if (this.replace) {
        //替换url
        window.location.replace(value.href);
      } else {
        if (value.href) {
          window.location.href = value.href;
        }
      }
      this.$emit('tab-switch', value, index);
    },
  },
};
</script>
