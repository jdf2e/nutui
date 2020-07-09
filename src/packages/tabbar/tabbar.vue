<template>
  <div class="nut-tabbar" :class="{ bottom: bottom }">
    <a
      class="tabbar-nav"
      v-for="(value, index) in tabList"
      :class="[{ curr: index == currIndex }, type]"
      :key="value.tabTitle"
      v-on:click="switchTabs(value, index)"
    >
      <span class="icon-box">
        <b class="tips num" v-if="value.num && value.num <= 99">{{ value.num }}</b>
        <b class="tips" v-else-if="value.num && value.num > 100">{{ '...' }}</b>
        <template v-if="value.icon">
          <div class="icon" :style="{ backgroundImage: `url(${index == currIndex ? value.activeIcon : value.icon})` }"></div>
        </template>
        <span :class="['tabbar-nav-word', { 'big-word': !value.icon }]">{{ value.tabTitle }}</span>
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'nut-tabbar',
  props: {
    tabbarList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    bottom: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'based'
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currIndex: null,
      tabList: this.tabbarList
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
      deep: true
    }
  },
  methods: {
    initBar() {
      this.tabList.forEach((item, index) => {
        if (item.curr) {
          this.currIndex = index;
        }
      });
    },
    switchTabs: function(value, index) {
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
    }
  }
};
</script>
