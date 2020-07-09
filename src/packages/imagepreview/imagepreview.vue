<template>
  <div class="nut-imagepreview">
    <nut-popup v-model="value">
      <nut-swiper class="nut-imagepreview-swiper" loop direction="horizontal" :swiperData="images" @slideChangeEnd="slideChangeEnd">
        <div v-for="(item, index) in images" :key="index" class="nut-swiper-slide">
          <img :src="item.imgSrc" class="nut-imagepreview-img" />
        </div>
      </nut-swiper>

      <div class="nut-imagepreview-index">
        <nut-icon type="right" color="#fff" class="arrow" @click.native="$emit('close')" />
        {{ this.active }} / {{ this.images.length }}
      </div>
    </nut-popup>
  </div>
</template>
<script>
export default {
  name: 'nut-imagepreview',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    slideChangeEnd(page) {
      this.active = page;
    },
  },
};
</script>
<style lang="scss"></style>
