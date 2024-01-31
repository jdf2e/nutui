<template>
  <nut-fixed-nav v-model:visible="visible" :position="{ top: '280px' }" type="left">
    <template #list>
      <ul class="nut-fixed-nav__list">
        <li class="nut-fixed-nav__list-item">1</li>
        <li class="nut-fixed-nav__list-item">2</li>
        <li class="nut-fixed-nav__list-item">3</li>
        <li class="nut-fixed-nav__list-item">4</li>
        <li class="nut-fixed-nav__list-item">5</li>
      </ul>
    </template>
    <template #btn>
      <Retweet color="#fff" />
      <span class="text">{{ visible ? '自定义开' : '自定义关' }}</span>
    </template>
  </nut-fixed-nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Retweet } from '@nutui/icons-vue-taro';
const visible = ref(false);
</script>
