<template>
  <div v-if="isH5" class="applets-demo-header">
    <div class="back" @click="navigateTo">
      <Left />
    </div>
    <div class="applets-icon">
      <img
        src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png"
      />
    </div>
    <div>{{ compName }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import Taro from '@tarojs/taro';
import { Left } from '@nutui/icons-vue-taro';
import config from '@/packages/../config.json';

const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;

//返回demo页
const navigateTo = () => {
  Taro.navigateBack();
};

const compName = computed(() => {
  let allComps: any = [];
  const hashCompName = location.hash.split('pages/')[1].replace('/index', '');
  config.nav.map((item) => {
    allComps = [...allComps, ...item.packages];
  });
  const targetComp = allComps.filter((item: any) => hashCompName === item.name.toLowerCase());
  return targetComp[0].name;
});
</script>
