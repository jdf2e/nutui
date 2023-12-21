<template>
  <nut-button @click="show = 'text'">Text</nut-button>
  <span style="margin-right: 10px"></span>
  <nut-button @click="show = 'image'">Image</nut-button>
  <span style="margin-right: 10px"></span>
  <nut-button @click="show = ''">hidden</nut-button>
  <nut-watermark v-if="show == 'text'" :z-index="999" content="nut-watermark"></nut-watermark>
  <nut-watermark
    v-if="show == 'image'"
    :image-width="60"
    :image-height="23"
    :z-index="999"
    :image="imgSrc"
  ></nut-watermark>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const imgSrc = ref(
  'https://img11.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
);
const show = ref<'text' | 'image' | ''>('');
</script>
