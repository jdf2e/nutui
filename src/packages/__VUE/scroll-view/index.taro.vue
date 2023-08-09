<template>
  <template v-if="Taro.getEnv() === Taro.ENV_TYPE.WEB">
    <taro-scroll-view-core v-bind="$attrs">
      <slot></slot>
    </taro-scroll-view-core>
  </template>
  <template v-else>
    <scroll-view v-bind="$attrs">
      <slot></slot>
    </scroll-view>
  </template>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro';
</script>
