<template>
  <div class="nut-navbar">
    <div class="nav-left">
      <div class="back" v-if="backShow" @click="$emit('on-click-back')">
        <slot name="back-icon">
          <img width="22" height="22" src="../../assets/img/nav_arrow.png" />
        </slot>
      </div>
      <div class="close" @click="$emit('on-click-close')">
        <slot name="close-icon" v-if="closeShow">
          <img width="22" height="22" src="../../assets/img/nav_close.png" />
        </slot>
      </div>
    </div>
    <div class="nav-center">
      <h3 class="nav-title" @click="$emit('on-click-title')">
        <slot>
          <span v-show="title">{{ title }}</span>
        </slot>
      </h3>
    </div>
    <div class="nav-right">
      <div class="search" @click="$emit('on-click-search')">
        <slot name="search-icon" v-show="rightShow">
          <img width="22" height="22" src="../../assets/img/nav_search.png" />
        </slot>
      </div>
      <div class="more" @click="$emit('on-click-more')" v-if="moreShow">
        <slot name="more-icon">
          <img width="22" height="22" src="../../assets/img/nav_more.png" />
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../icon/icon.vue';

export default {
  name: 'nut-navbar',
  components: {
    'nut-icon': Icon,
  },
  props: {
    title: {
      type: String,
      default: '导航标题栏',
    },
    backShow: {
      type: Boolean,
      default: true,
    },
    rightShow: {
      type: Boolean,
      default: true,
    },
    closeShow: {
      type: Boolean,
      default: true,
    },
    moreShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickBack() {
      //this.$router ? this.$router.back() : window.history.back();
    },
  },
};
</script>
