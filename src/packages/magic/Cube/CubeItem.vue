<template>
  <div :class="`cube-item cube-item--${item.type}`" @click="cubeClick(item)">
    <div class="cube-item-box">
      <div class="sub-image" :style="{ backgroundImage: `url(${item.pictureUrl})` }"></div>
    </div>
    <div class="sub-desc" v-if="item.desc">
      <span>{{ item.desc }}</span>
    </div>
    <div class="sub-name" v-if="item.name">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CubeItem',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    cubeClick(item) {
      this.$emit('clickEvent', item);
    }
  }
};
</script>

<style lang="scss"></style>
