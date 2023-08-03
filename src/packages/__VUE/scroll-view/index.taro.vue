<template>
  <template v-if="Taro.getEnv() === Taro.ENV_TYPE.WEB">
    <NutTaroScrollView v-bind="$attrs">
      <slot></slot>
    </NutTaroScrollView>
  </template>
  <template v-else>
    <scroll-view v-bind="$attrs">
      <slot></slot>
    </scroll-view>
  </template>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro';
import { ScrollView as NutTaroScrollView } from '@tarojs/components';
</script>
