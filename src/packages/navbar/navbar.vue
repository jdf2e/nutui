<template>
  <div class="nut-navbar">
    <div class="nav-left">
      <div class="back" v-if="backShow" @click="$emit('on-click-back')">
        <slot name="back-icon">
          <nut-icon class="back-icon" type="self" color="#323232FF" size="18px" :url="require('../../assets/svg/arrow_right.svg')"></nut-icon>
        </slot>
      </div>
      <div class="close" @click="$emit('on-click-close')">
        <slot name="close-icon" v-if="closeShow">
            <nut-icon class="close-icon" type="self" color="#323232FF" size="16px" :url="require('../../assets/svg/cross.svg')"></nut-icon>
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
            <nut-icon class="search-icon" type="search" color="#646464FF" size="18px"></nut-icon>
        </slot>
      </div>
      <div class="more" @click="$emit('on-click-more')" v-if="moreShow">
        <slot name="more-icon">
          <nut-icon class="more-icon" type="self" color="#323232FF" size="20px" :url="require('../../assets/svg/ellipsis.svg')"></nut-icon>
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
    'nut-icon': Icon
  },
  props: {
    title: {
      type: String,
      default: '导航标题栏'
    },
    backShow: {
      type: Boolean,
      default: true
    },
    rightShow: {
      type: Boolean,
      default: true
    },
    closeShow:{
      type: Boolean,
      default: true
    },
    moreShow:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onClickBack() {
      //this.$router ? this.$router.back() : window.history.back();
    }
  }
};
</script>
