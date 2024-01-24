<template>
  <div class="swiper-demo">
    <nut-swiper ref="swiperRef">
      <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 150px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
      </nut-swiper-item>
    </nut-swiper>
    <div class="swiper-btns">
      <div class="swiper-btn" @click="handlePrev">
        <Left></Left>
      </div>
      <div class="swiper-btn" @click="handleNext">
        <Right></Right>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { Left, Right } from '@nutui/icons-vue';
const list = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]);
const swiperRef = ref();
const handlePrev = () => {
  swiperRef.value?.prev();
};
const handleNext = () => {
  swiperRef.value?.next();
};
</script>

<style>
.swiper-demo {
  position: relative;
}
.swiper-btns {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
}
.swiper-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
